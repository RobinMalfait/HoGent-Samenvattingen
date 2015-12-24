<!--
title: OO Ontwerpen II
-->

# Desig Patterns

> De enige constante die je altijd tegenkomt is **VERANDERING**

## Strategy Pattern (gedrag van objecten)

> **Het Strategy Pattern** definieert een familie algoritmen, isoleert ze en maakt ze uitwisselbaar. Strategy maakt het mogelijk om het algoritme los van de client die deze gebruikt, te veranderen.

### UML Diagram

![](https://d.pr/Y5ew+)

(*Note:* De dubbele lijn die je in de diagrammen zit moet niet, dat is gewoon de plaats waar de attributen zouden kome...)

### CODE

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