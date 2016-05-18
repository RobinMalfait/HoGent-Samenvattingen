---
title: OO Ontwerpen III
---

# Creational Patterns

## 1. Factory Method

### 1.1. DEFINITIE

> Het **Factory Method Pattern** definieert een interface
voor het creëren van een object, maar laat de
subklassen beslissen welke klasse er geïnstantieerd
wordt. De Factory Method draagt de instanties over
aan de subklassen.

### 1.2. UML Diagram

![](http://d.pr/i/1l0PV+)

(*Note:* De dubbele lijn die je in de diagrammen zit moet niet, dat is gewoon de plaats waar de attributen zouden komen...)

### 1.3. ONTWERPRINCIPE

Het dependency inversion principe:

> Wees afhankelijk van abstracties.
>
> Wees niet afhankelijk van concrete klassen

Het principe suggereert dat onze highlevelcomponenten
niet afhankelijk mogen zijn van
onze low-levelcomponenten. Beiden zouden moeten
afhangen van abstracties.

### 1.4. CODE

```java
public interface PizzaIngredientFactory {
    public Dough createDough();
    public Sauce createSauce();
    public Cheese createCheese();
}

public class BinfPizzaIngredientFactory implements PizzaIngredientFactory {
    public Dough createDough() {
        return new ThinCrustDough();
    }

    public Sauce createSauce() {
        return new MarinaraSauce();
    }

    public Cheese createCheese() {
        return new ReggianoCheese();
    }
}

public abstract class Pizza {
    private Dough dough;
    private Sauce sauce;
    private Cheese cheese;

    private PizzaIngredientFactory ingredientFactory;

    public Pizza(PizzaIngredientFactory ingredientFactory) {
        this.ingredientFactory = ingredientFactory;
    }

    public abstract void prepare();

    public void bake() {
        System.out.println("Bake for 25 minutes at 350");
    }
}

public class CheesePizza extends Pizza {
    public PepperoniPizza(PizzaIngredientFactory ingredientFactory) {
        super(ingredientFactory);
    }

    public void prepare() {
        setDough(getPizzaIngredientFactory().createDough());
        setSauce(getPizzaIngredientFactory().createSauce());
        setCheese(getPizzaIngredientFactory().createCheese());
    }
}

public abstract class PizzaStore {
    public Pizza orderPizza(String type) {
        Pizza pizza;

        pizza = createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

    protected abstract Pizza createPizza(String type);
}

public class BinfPizzaStore extends PizzaStore {
    protected Pizza createPizza(String item) {
        Pizza pizza = null;
        PizzaIngredientFactory ingredientFactory = new BinfPizzaIngredientFactory();

        switch(item.toLowerCase()) {
            case "cheese":
                pizza = new CheesePizza(ingredientFactory);
                pizza.setName("BINF Style Cheese Pizza");
                break;
        }

        return pizza;
    }
}
```

## 2. Abstract Factory

### 2.1. DEFINITIE

> Het **Abstract Factory Pattern** levert een interface voor de
vervaardiging van reeksen gerelateerde of afhankelijke objecten
zonder hun concrete klassen te specificeren

### 2.2. UML Diagram

![](http://d.pr/i/17sSX+)

Pizza voorbeeld:
![](http://d.pr/i/jAL4+)

## 3. Builder

## 4. Singleton

# Behavioral Patterns

## 5. Template Method

## 6. Command

## 7. Iterator

# Structural Patterns

## 8. Composite

## 9. Adaptor

## 10. Proxy
