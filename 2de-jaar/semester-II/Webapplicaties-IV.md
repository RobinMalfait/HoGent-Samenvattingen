---
title: Webapplicaties IV
link: https://robinmalfait.com/2de-jaar/semester-II/Webapplicaties-IV.md
---

# Deel 1

## JSP

```html
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<!-- Imports -->
<%@page import="java.util.Date" %>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="refresh" content="1"/> <!-- Refesh each second -->
        <title></title>
    </head>
    <body>
        <!-- JSP Expression to insert date/time -->
        <% out.print(new java.util.Date()) %>

        <!-- Without out.print -->
        <%= new java.util.Date() %>

        <!-- Because of the import -->
        <%= new Date() %>
    </body>
</html>
```

## Expression Language (EL)


### Using scripting

```html
<!DOCTYPE html>
<html>
    <body>
        <% domain.Circle circle = (domain.Circle) request.getAttribute('circle') %>
        Radius of the circle is: <%= circle.getRadius() %>
    </body>
</html>
```

### Using EL

```html
<!DOCTYPE html>
<html>
    <body>
        Radius of the circle is: ${circle.radius}
    </body>
</html>
```

### Arrays

```html
<!DOCTYPE html>
<html>
    <body>
        Colors are: ${colorList}
        First color is: ${colorList[0]}
    </body>
</html>
```

### Includes

```html
<!DOCTYPE html>
<html>
    <body>
        <jsp:iclude page="header.jsp"/>
        JSP Page...
        <jsp:iclude page="footer.jsp"/>
    </body>
</html>
```

### Includes with params

#### header.jsp

```html
<h2>${param.title}</h2>
```

#### yourPage.jsp

```html
<!DOCTYPE html>
<html>
    <body>
        <jsp:include pae="../WEB-INF/header.jsp">
            <jsp:param name="title" value="this is the header" />
        </jsp:include>
        JSP Page...
    </body>
</html>
```

### Redirects/Forwards

### Using scripting

```html
<!DOCTYPE html>
<html>
    <body>
        Welcome to our page!
        <% if(request.getParameter("userName") == null) { %>
            <jsp:forward page="HandleIt.jsp"/>
        <% } %>

        Hello ${param.userName}
    </body>
</html>
```

#### Using more JSTL

```html
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <body>
        Welcome to our page!
        <c:if test="${empty param.userName}">
            <jsp:forward page="HandleIt.jsp"/>
        </c:if>

        Hello ${param.userName}
    </body>
</html>
```

## JSTL

> JSP Standard Tag Library

- **Core** Library `<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>`
    - &lt;c:out&gt;
    - &lt;c:set&gt;
    - &lt;c:remove&gt;
    - &lt;c:catch&gt;
    - &lt;c:if&gt;
    - &lt;c:choose&gt;
    - &lt;c:when&gt;
    - &lt;c:otherwise&gt;
    - &lt;c:import&gt;
    - &lt;c:url&gt;
    - &lt;c:redirect&gt;
    - &lt;c:param&gt;
    - &lt;c:forEach&gt;
    - &lt;c:forEachToken&gt;

- **Formatting** Library `<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>`
    - **Internationalization**
        - &lt;fmt:message&gt;
        - &lt;fmt:setLocale&gt;
        - &lt;fmt:bundle&gt;
        - &lt;fmt:setBundle&gt;
        - &lt;fmt:param&gt;
        - &lt;fmt:requestEncoding&gt;
    - **Formatting**
        - &lt;fmt:timeZone&gt;
        - &lt;fmt:setTimeZone&gt;
        - &lt;fmt:formatNumber&gt;
        - &lt;fmt:parseNumber&gt;
        - &lt;fmt:parseDate&gt;

### c:forEach

```html
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <body>
        <c:forEach var="color" items="${colorArray}">
            ${color}
        </c:forEach>

        <c:forEach var="color" items="${colorArray}" varStatus="index">
            ${index} ${color}
        </c:forEach>
    </body>
</html>
```

### c:if

```html
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <body>
        <p>Comments:</p>
        <p>${commentList}</p>

        <c:if test="${userType == 'student'}">
            <jsp:include page="inputComments.jspf"/>
        </c:if>
    </body>
</html>
```

### c:choose, c:when and c:otherwise

- `<c:choose>` -> `switch`
- `<c:when>` -> `case`
- `<c:otherwise>` -> `default`

```html
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <body>
        <c:choose>
            <c:when test="${userType == 'student'}">
                <jsp:include page="inputComments.jspf"/>
            </c:when>
            <c:when test="${userType == 'professor'}">
                Professor
            </c:when>
            <c:otherwise>Person</c:otherwise>
        </c:choose>
    </body>
</html>
```

### c:import

```html
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <body>
        <c:import url="http://rbn.nu/"/>
    </body>
</html>
```

# Deel 2 - Spring Basis

- POJO: Plain Old Java Object

## Inversion of Control (IoC) - Dependency Injection

### Without IoC

Wanneer je een nieuwe operatie wil toevoegen, moet je deze code aanpassen en dus terug helemaal compilen.

```java
public class Calculate {
    public static void main(String[] args) {
        long op1 = Long.parseLong(args[0]);
        long op2 = Long.parseLong(args[1]);

        showResult("The result of " + op1 + getOpsName() + op2 + " is " + operate(op1, op2) + "!");
    }

    private void showResult(String result) {
        Syste.out.println(result);
    }

    private long operate(long op1, long op2) {
        return op1 + op2;
    }

    private String getOpsName() {
        return " plus ";
    }
}
```

### IoC way

Als je nu een nieuwe operatie wilt toevoegen, moet je maar een klasse bij maken, en niet de calculator klasse opnieuw compilen.

```java
// Operations
public interface Operation {
    public long operate(long op1, long op2);
    public String getName();
}

public class OperationAdd implements Operation {
    public long operate(long op1, long op2) {
        return op1 + op2;
    }

    public String getName() {
        return " plus ";
    }
}

// Output
public interface ResultWriter {
    public void showResult(String result);
}

public class ScreenWriter implements ResultWriter {
    public void showResult(String result) {
        System.out.println(result);
    }
}

// Domain
public class CalculateSpring {
    private Operation ops;
    private ResultWriter writer;

    public void setOps(Operation ops) {
        this.ops = ops;
    }

    public void setWriter(ResultWriter writer) {
        this.writer = writer;
    }

    public void execute(String[] args) {
        long op1 = Long.parseLong(args[0]);
        long op2 = Long.parseLong(args[1]);

        writer.showResult("The result of " + op1 + ops.getOpsName() + op2 + " is " + ops.operate(op1, op2) + "!")
    }
}

// Spring StartUp
public class StartUp {
    public static void main (String... args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
        CalculateSpring opsbean = context.getBean("opsbean", CalculateSpring.class);

        opsbean.execute(args);
    }
}
```

## Wiring beans

### Annotations

```java
@Service("...") // This is a dependency

@Autowired // Spring will inject the dependency here

@Resource(name = "...") // This is @Autowired with name parameter

@Qualifier
    @Autowired
    @Qualifier("screen")

    // =

    @Resource(name = "screen")
```
