<!--
title: OO Ontwerpen II
-->

> De enige constante die je altijd tegenkomt is **VERANDERING**

# 1. Strategy Pattern

Voorbeeld: Eenden

Gedrag van objecten.

## 1.1. DEFINITIE

> **Het Strategy Pattern** definieert een familie algoritmen, isoleert ze en maakt ze uitwisselbaar. Strategy maakt het mogelijk om het algoritme los van de client die deze gebruikt, te veranderen.

## 1.2. UML Diagram

![](https://d.pr/i/ywLl+)

(*Note:* De dubbele lijn die je in de diagrammen zit moet niet, dat is gewoon de plaats waar de attributen zouden komen...)

## 1.3. CODE

```java
/**
 * Abstract Class
 */
public abstract class Duck
{
    private QuackBehavior quackBehavior;
    private FlyBehavior flyBehavior;

    public void setFlyBehavior(FlyBehavior flyBehavior)
    {
        this.flyBehavior = flyBehavior;
    }

    public void setQuackBehavior(QuackBehavior quackBehavior)
    {
        this.quackBehavior = quackBehavior;
    }

    public String performQuack()
    {
        return quackBehavior.quack();
    }

    public String performFly()
    {
        return flyBehavior.fly();
    }
}

/**
 * Interfaces
 */
public interface FlyBehavior
{
    public String fly();
}

public interface QuackBehavior
{
    public String quack();
}

/**
 * Concrete Implementations
 */
public class FlyNoWay implements FlyBehavior
{
    public String fly()
    {
        return "Ik kan niet vliegen ze dude..";
    }
}

public class FlyWithWings implements FlyBehavior
{
    public String fly()
    {
        return "Zonder vleugelkes ist wel moeilijk ze..";
    }
}

public class LoudQuack implements QuackBehavior
{
    public String quack()
    {
        return "QUACK QUACK QUACK";
    }
}

public class SilentQuack implements QuackBehavior
{
    public String quack()
    {
        return "quack... shhht... quack... shht...";
    }
}

public class MallardDuck extends Duck
{
    public MallardDuck()
    {
        setQuackBehavior(new LoudQuack());
        setFlyBehavior(new FlyWithWings());
    }

    public String display()
    {
        return "Ik ben een echte wilde eend";
    }
}

public class WeirdDuck extends Duck
{
    public WeirdDuck()
    {
        setQuackBehavior(new SilentQuack());
        setFlyBehavior(new FlyNoWay());
    }

    public String display()
    {
        return "Ik ben een rare eend";
    }
}

/**
 * Objects
 */
Duck duck1 = new MallardDuck();
System.out.println(duck1.peformQuack());


Duck duck2 = new WeirdDuck();
System.out.println(duck2.peformQuack());
```

# 2. Simple Factory Pattern

Voorbeeld: Pizzeria

Creëren van klassen.

## 2.1. DEFINITIE

> We nemen de code voor de creatie op en verplaatsen deze naar een ander object at alleen maar het maken van pizza's als taak zal hebben. Dit object noemen we Factory.

## 2.2. UML DIAGRAM

![](https://d.pr/i/wBun+)

## 2.3. CODE

```java
public class PizzaFactory
{
    public Pizza createPizza(String type)
    {
        switch(type.toLowerCase())
        {
            case "cheese": return new CheesePizza();
            case "pepperoni": return new PepperoniPizza();
            case "clam": return new ClamPizza();
            case "veggie": return new VeggiePizza();
            default: return null;
        }
    }
}

public class PizzaStore
{
    private PizzaFactory factory;

    public PizzaStore(PizzaFactory factory)
    {
        this.factory = factory;
    }

    public Pizza orderPizza(String type)
    {
        Pizza pizza = factory.createPizza(type);

        if (pizza != null)
        {
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
            // ...
        }

        return pizza;
    }
}
```

# 3. Decorator Pattern

## 3.1. DEFINITIE

## 3.2. UML DIAGRAM

## 3.3. CODE

# 4. Observer Pattern

## 4.1. DEFINITIE

## 4.2. UML DIAGRAM

## 4.3. CODE

# 5. Façade Pattern

## 5.1. DEFINITIE

## 5.2. UML DIAGRAM

## 5.3. CODE

# 6. State Pattern

## 6.1. DEFINITIE

## 6.2. UML DIAGRAM

## 6.3. CODE