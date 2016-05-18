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

Vervang veel te grote constructors met een interessantere manier.

### 3.1. DEFINITIE

> Gebruik het **Builder pattern** om de constructie van een product af te schermen en zorg dat je het in stappen kan construeren

### 3.2. UML Diagram

![](http://d.pr/i/g8xl+)

- De **Builder** klasse specifieert een abstracte interface voor de creatie van de onderdelen van het Product object.
- De **ConcreteBuilder** bouwt de onderdelen van het complexe object en gooit deze samen door implementatie van de Builder interface. Het houdt een representatie van het object bij en biedt een interface voor het opvragen van het product.
- De **Director** class bouwt het complexe object gebruik makend van de interface van de Builder
- De **Product** stelt het complexe object voor dat gebouwd wordt.

### 3.3. CODE

```java
// Dit is maar voor 1 specifieke constructor/soort sandwich
public class MySandwhichBuilder {
    private Sandwich sandwich;
    public Sandwich getSandwich() {
        return sandwich;
    }

    public void createSandwich() {
        // Opeenvolgende stappen bij het maken van een sandwich
        createNewSandwich();
        prepareBread();
        applyMeatAndCheese();
        applyVegetables();
        addCondiments();
    }

    private void createNewSandwich() {
        // Een van de stappen
        sandwich = new Sandwich();
    }

    private void prepareBread() {
        sandwich.setbread(BreadType.Whear);
    }

    private applyMeatAndCheese() {
        sandwich.setCheeseType(CheeseType.American);
        sandwich.setMeatType(MeatType.Turkey);
    }

    private void applyVegetables() {
        List<String> vegetables = new ArrayList<>();
        vegetables.add("Tomato");
        vegetables.add("Lettuce");
        sandwich.setVegetables(vegetables);
    }

    private void addCondiments() {
        sandwich.setHasMayo(false);
        sandwich.setIsToasted(true);
        sandwich.setHasMustard(true);
    }
}
```

```java
// De builder: de abstracte klasse
public abstract class SandwichBuilder {
    private Sandwich sandwich;
    public Sandwich getSandwich {
        return sandwich;
    }    

    public void createNewSandwich() {
        sandwich = new Sandwich();
    }

    public abstract void prepareBread();
    public abstract void applyMeatAndCheese();
    public abstract void applyVegetables();
    public abstract void addCondiments();
}

// De builder klassen: concrete klassen
public class MySandwhichBuilder extends SandwichBuilder {
    public void prepareBread() {
        Sandwich sandwich  getSandwich();
        sandwich.setbreadType(BreadType.Wheat);
    }
    public void applyMeatAndCheese() {
        // ...
    }
    public void applyVegetables() {
        // ...
    }
    public void addCondiments() {
        // ...
    }
}

public class ClubSandwichBuilder extends SandwichBuilder {
    public void prepareBread() {
        Sandwich sandwich  getSandwich();
        sandwich.setbreadType(BreadType.White);
    }
    public void applyMeatAndCheese() {
        // ...
    }
    public void applyVegetables() {
        // ...
    }
    public void addCondiments() {
        // ...
    }
}

// De Director
public class SandwichDirector {
    private SandwichBuilder builder;

    public SandwichDirector(SandwichBuilder builder) {
        this.builder = builder;
    }

    public void buildSandwich() {
        builder.createNewSandwich();
        builder.prepareBread();
        builder.applyMeatAndCheese();
        builder.applyVegetables();
        builder.addCondiments();
    }

    public Sandwich getSandwich() {
        return builder.getSandwich();
    }
}

public static void main(String[] args) {
    SandwichDirector director = new SandwichDirector(new MySandwhichBuilder());

    director.buildSandwich();
    Sandwich sandwich = director.getSandwich();
    sandwich.display();
}
```

## 4. Singleton

# Behavioral Patterns

## 5. Template Method

## 6. Command

## 7. Iterator

# Structural Patterns

## 8. Composite

## 9. Adaptor

## 10. Proxy
