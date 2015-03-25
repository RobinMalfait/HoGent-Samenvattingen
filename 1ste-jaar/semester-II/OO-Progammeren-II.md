# OO Programmeren II

## OO Paradigm

* Abstractie - "klas":
    - "domein"-klasse
    - "ui"-klassen
* Inkapseling => Private
* Overerving => "her"gebruik van code. Via `extends`
* Polymorfisme
	* Meerdere uitvoeringsvormen voor eenzelfde methode


Subklasse (**this**)  _extends_ Superklasse (**super**)

```java
class BMW extends Car {
    // Code
}
```


Superklasse = generalisatie

Subklasse = specialisatie

> In java kan maar van 1 klasse geërfd worden!


| Type      | Visibility | klasse   | Package   | Subklasse   | Wereld   |
| --------: | :--------: | :------: | :-------: | :---------: | :------: |
| private   | **-**      | ✓        | ✗         | ✗           | ✗        |
| public    | **+**      | ✓        | ✓         | ✓           | ✓        |
| protected | **#**      | ✓        | ✓         | ✓           | ✗        |
| -         | &nbsp;     | ✓        | ✓         | ✗           | ✗        |

> `final` hiermee kan je constanten definiëren.

```java
final int X = 6;                     // Waarde
final Student S = new Student(...);  // Adres
```

`finalize()` methode, deze methode wordt aangeroepen door de garbage collector bij het verwijderen van een object.


### Overerving / Polymorfisme

**Voorbeelden:**

![](/afbeeldingen/1ste-jaar/semester-II/OO-programmeren-II/overerving_polymorfisme.png)

```java
public abstract class Vorm {
    public abstract void teken();
}

public class Vierkant extends Vorm {
    private int zijde;

    public void teken() { ... }
}

public class Driehoek extends Vorm {
    private int hoogte;
    private int breedte;

    public void teken() { ... }
}

public class Cirkel extends Vorm {
    private int straal;
    private int x;
    private int y;

    public void teken() { ... }

    public int getStraal() { ... }
}
```

> Als je een abstracte methode niet overschrijft in je sub-klasse. Dan blijft deze sub-klasse ook abstract.


```java
Vorm vormen[] = new Vormen[10];

vormen[0] = new Vierkant(5);
vormen[1] = new Driehoek(2, 3);
vormen[2] = new Cirkel(10, 50, 50);

...

for (Vorm vorm : vormen)
{
    vorm.teken();
}
```

> Door middel van `vormen[i] instanceof Cirkel` kan je perfect weten welke Subklasse je object is.

### Casting

```java
Vorm v = new Cirkel(); // (Automatic) Upcasting

Cirkel c = (Cirkel) v; // Downcasting
```

> Abstracte klassen dienen om van te erven. Wil je niet meer erven van een klasse dan kan je die klasse `final` declareren.
>
> Algemeen kan je **attributen**, **klassen** en **methodes** `final` declareren.

## String / String Builder

### Character

```java
char kar = 'z'; // Enkele quotes ', 2 bytes
z = 122 (opgeslagen als unicode)
```

### String

```java
String z = "Eddy Wally"; // Dubbele quotes ", anoniem String-obj

z = adres, referentie naar String-Object
```

> String is een object!


