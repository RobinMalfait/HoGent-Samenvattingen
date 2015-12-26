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

/**
 * Objecten
 */
PizzaStore store = new PizzaStore(new PizzaFactory());
store.orderPizza("cheese");
```

# 3. Decorator Pattern

Voorbeeld in de cursus: Koffie

Ik ga het voorbeeld nemen van een kerstboom, het is toch kerst voor iedereen, niet waar?

Structuur van objecten.

Decorators kunnen gebruik maken van een interface als component (Zie Code) of van een Abtracte Klasse van een Component (Zie UML DIAGRAM).
Niet duidelijk? Schrijf maar iets in de comments of verwittig me :)

## 3.1. DEFINITIE

> Het Decorator Pattern kent dynamisch additionele verantwoordelijkheden toe aan een object. Decorators bieden een flexibel alternatief voor het gebruik van subklassen om functionaliteiten uit te breiden.

## 3.2. UML DIAGRAM

![](https://d.pr/i/p59T+)

## 3.3. CODE

```java
public interface Versiering // Component
{
    public String versier();
}

public class Kerstboom implements Versiering // Concrete Component
{
    public String versier()
    {
        return "Kerstboom";
    }
}

public class KerstBal implements Versiering // Decorators
{
    private Versiering versiering;
    private int aantal;

    public KerstBal(int aantal, Versiering versiering)
    {
        this.aantal = aantal;
        this.versiering = versiering;
    }

    public String versier()
    {
        return versiering.versier() + ', met ' + aantal + ' kerstballen';
    }
}

public class KerstSlinger implements Versiering // Decorators
{
    private Versiering versiering;

    public KerstSlinger(Versiering versiering)
    {
        this.versiering = versiering;
    }

    public String versier()
    {
        return versiering.versier() + ', met een slinger';
    }
}

/**
 * Objecten
 */
Versiering kerstBoom = new KerstBoom();
Versiering kerstBoomMetBallen = new KerstBal(10, new KerstBoom());
Versiering kerstBoomMetBallenEnEenSlinger = new KerstBal(10, new KerstSlinger(new KerstBoom()));
Versiering kerstBoomMetSlinger = new KerstSlinger(new KerstBoom());

System.out.println(kerstBoom.versier());
System.out.println(kerstBoomMetBallen.versier());
System.out.println(kerstBoomMetBallenEnEenSlinger.versier());
System.out.println(kerstBoomMetSlinger.versier());
```

# 4. Observer Pattern

Gedrag van objecten.

## 4.1. DEFINITIE

> Het Observer Pattern definieert een één-op-veel-relatie (1:n) tussen objecten, zodanig dat wanneer de toestand van een object verandert, alle afhankelijke objecten worden bericht en automatisch worden geüpdatet.

## 4.2. UML DIAGRAM

![](https://d.pr/i/142OW+)

## 4.3. CODE

```java
public interface Subject
{
    public void addObserver(Observer o);
    public void removeObserver(Observer o);
    public void notifyObserver();
}

public interface Observer
{
    public void update();
}
```

# 5. Façade Pattern

## 5.1. DEFINITIE

## 5.2. UML DIAGRAM

## 5.3. CODE

# 6. State Pattern

## 6.1. DEFINITIE

## 6.2. UML DIAGRAM

## 6.3. CODE