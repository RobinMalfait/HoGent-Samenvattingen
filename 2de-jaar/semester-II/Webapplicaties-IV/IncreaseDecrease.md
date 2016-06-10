---
title: Increase Decrease
link: http://robinmalfait.com/2de-jaar/semester-II/Webapplicaties-IV/IncreaseDecrease.md
---

```
.
└── src
    └── main
        ├── java
        │   ├── config
        │   │   ├── WebConfig.java
        │   │   └── core
        │   │       └── SpringMvcInitializer.java
        │   ├── controller
        │   │   ├── IncreaseDecreaseController.java
        │   │   └── InventoryController.java
        │   ├── domain
        │   │   ├── Price.java
        │   │   ├── Product.java
        │   │   ├── ProductManager.java
        │   │   └── SimpleProductManager.java
        │   └── validator
        │       └── PercentValidation.java
        ├── resources
        │   ├── ValidationMessages.properties
        │   └── messages.properties
        └── webapp
           └── WEB-INF
               └── jsp
                   ├── increaseDecrease.jsp
                   └── inventory.jsp
```

# Config

## WebConfig.java

```java
package config;

import domain.Product;
import domain.ProductManager;
import domain.SimpleProductManager;
import java.util.ArrayList;
import java.util.Arrays;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import validator.PercentValidation;

@Configuration
@EnableWebMvc
@ComponentScan("controller")
public class WebConfig extends WebMvcConfigurerAdapter {
    @Bean
    public PercentValidation percentValidation() {
        return new PercentValidation();
    }
    @Bean
    public ViewResolver viewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/WEB-INF/jsp/");
        resolver.setSuffix(".jsp");
        return resolver;
    }
    @Bean
    public MessageSource messageSource() {
        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        messageSource.setBasename("resources/messages");
        return messageSource;
    }
    @Bean
    public ProductManager productManager() {
        //zonder databank
        Product[] products = {
            new Product("Lamp", 5.751),
            new Product("Tafel", 75.2), new Product("Stoel", 22.791)
        };
        SimpleProductManager productManager = new SimpleProductManager();
        productManager.setProducts(new ArrayList<>(Arrays.asList(products)));
        return productManager;
    }
    @Bean
    public MessageSource messageSources() {
        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        messageSource.setBasename("messages");
        return messageSource;
    }
}
```

## Core/SpringMvcInitializer.java

```java
package config.core;

import config.WebConfig;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class SpringMvcInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{WebConfig.class};
    }
    @Override
    protected Class<?>[] getServletConfigClasses() {
        return null;
    }
    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }
}
```

# Controller

## IncreaseDecreaseController.java

```java
package controller;

import domain.Price;
import domain.ProductManager;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import validator.PercentValidation;

/**
 *
 * @author robin
 */
@Controller
@RequestMapping(value = "/increaseDecrease")
public class IncreaseDecreaseController {
    @Autowired
    public ProductManager productManager;
    @Autowired
    public PercentValidation percentValidation;
    @RequestMapping(method = RequestMethod.GET)
    public String onGet(Model model) {
        Price command = new Price();
        command.setPercentIncrease(20);
        command.setPercentDecrease(10);
        model.addAttribute("price", command);
        return "increaseDecrease";
    }
    @RequestMapping(method = RequestMethod.POST)
    public String onSubmit(@Valid Price command, BindingResult result, Model model) {
        percentValidation.validate(command, result);
        if (result.hasErrors()) {
            return "increaseDecrease";
        }
        productManager.increasePrice(command.getPercentIncrease());
        productManager.decreasePrice(command.getPercentDecrease());
        return "redirect:/inventory.htm";
    }
}
```

## InventoryController.java

```java
package controller;

import domain.ProductManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author robin
 */
@Controller
@RequestMapping(value = "/inventory")
public class InventoryController
{
    @Autowired
    private ProductManager productManager;

    @RequestMapping(method = RequestMethod.GET)
    public String getInventory(Model model) {
        model.addAttribute("products", productManager.getProducts());
        return "inventory";
    }
}
```

# Domain

## Price.java

```java
package domain;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Range;

/**
 *
 * @author robin
 */
public class Price {
    @NotNull
    @Min(value = 1, message = "{price.percentIncrease.Min.message}") // Met sleutel
    @Max(value = 50)
    private Integer percentIncrease;

    @NotNull
    @Range(min = 1, max = 25, message = "{price.percentDecrease.Range.message}") // Met sleutel
    private Integer percentDecrease;

    public Integer getPercentIncrease() {
        return percentIncrease;
    }
    public void setPercentIncrease(Integer percentIncrease) {
        this.percentIncrease = percentIncrease;
    }
    public Integer getPercentDecrease() {
        return percentDecrease;
    }
    public void setPercentDecrease(Integer percentDecrease) {
        this.percentDecrease = percentDecrease;
    }
}
```

## Product.java

```java
package domain;

import java.io.Serializable;

public class Product implements Serializable {
    private String description;
    private double price;
    public Product() {}
    public Product(String description, double price) {
        this.description = description;
        this.price = price;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
}
```

## ProductManager.java

```java
package domain;

import java.util.List;

public interface ProductManager {
    public void increasePrice(int percentage);
    public void decreasePrice(int percentage);
    public List<Product> getProducts();
}
```

## SimpleProductManager.java

```java
package domain;

import java.util.List;

public class SimpleProductManager implements ProductManager {
    private List<Product> products;
    @Override
    public List<Product> getProducts() {
        return products;
    }
    @Override
    public void increasePrice(int percentage) {
        if (products != null) {
            for (Product product : products) {
                double newPrice = product.getPrice() * (100 + percentage) / 100;
                product.setPrice(newPrice);
            }
        }
    }
    public void setProducts(List<Product> products) {
        this.products = products;
    }
    @Override
    public void decreasePrice(int percentage) {
        if (products != null) {
            for (Product product : products) {
                double newPrice = product.getPrice() - (product.getPrice() * percentage / 100);
                product.setPrice(newPrice);
            }
        }
    }
}
```

# Validator

## PercentValidation.js

```java
package validator;
import domain.Price;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
public class PercentValidation implements Validator {
    @Override
    public boolean supports(Class<?> klass) {
        return Price.class.isAssignableFrom(klass);
    }
    @Override
    public void validate(Object target, Errors errors) {
        Price price = (Price) target;
        Integer increase = price.getPercentIncrease();
        Integer decrease = price.getPercentDecrease();
        // Belangrijk!!!
        if (increase == null || decrease == null) return;
        if (decrease > increase) {
            errors.rejectValue("percentIncrease", "percentValidation.percent", "increase >= decrease");
        }
    }
}
```

# Resources

## messages.properties

```yaml
typeMismatch=het percentage moet uit getallen bestaan
Max=het mag niet groter zijn dan {1}
NotNull=het moet ingevuld zijn
percentValidation.percent=verhoging moet groter of gelijk zijn aan verlaging
```

## ValidationMessages.properties

```yaml
price.percentIncrease.Min.message=het percentage moet groter of gelijk zijn aan {value}
price.percentDecrease.Range.message=het percentage moet liggen tussen {min} en {max}
```

# jsp's

## increaseDecrease.jsp

```html
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Verhoog prijs!</title>
        <style>.error {color: red;}</style>
    </head>
    <body>
        <h1>Verhoog prijs</h1>

        <form:form modelAttribute="price" method="POST" action="increaseDecrease.htm">
            <table>
                <tr>
                    <td>
                        Verhoging:
                    </td>
                    <td>
                        <form:input path="percentIncrease" size="5" maxlength="2"/>%
                        <form:errors path="percentIncrease" cssClass="error"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Vermindering:
                    </td>
                    <td>
                        <form:input path="percentDecrease" size="5" maxlength="2"/>%
                        <form:errors path="percentDecrease" cssClass="error"/>
                    </td>
                </tr>
            </table>

            <br/>

            <button>Voer uit</button>
        </form:form>
    </body>
</html>
```

## inventory.jsp

```html
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Inventory</title>
</head>
<body>
    <h1>Producten</h1>

    <ul>
        <c:forEach items="${products}" var="product">
            <li>${product.getDescription()} <i><fmt:formatNumber value="${product.getPrice()}" type="currency"/></i></li>
        </c:forEach>
    </ul>

    <a href="<c:url value="increaseDecrease.htm"/>">Wijzig prijzen</a>
</body>
</html>
```
