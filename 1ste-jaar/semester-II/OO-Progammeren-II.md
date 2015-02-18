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
| -         |            | ✓        | ✓         | ✗           | ✗        |

> `final` hiermee kan je constanten definiëren.

```java
final int X = 6;                     // Waarde
final Student s = new Student(...);  // Adres
```

`finalize()` methode, deze methode wordt aangeroepen door de garbage collector bij het verwijderen van een object.


### Overerving / Polymorfisme

**Voorbeelden:**

| Vorm     |
| -------- |
| +teken() |

<br>

| Driehoek                    |
| --------------------------- |
| -int hoogte<br>-int breedte |
| +teken()                    |

| Vierkant                    |
| --------------------------- |
| -int zijde                  |
| +teken()                    |

| Cirkel                          |
| ------------------------------- |
| -int straal<br>-int x<br>-int y |
| +teken()                        |

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
    private int straa;
    private int x;
    private int y;
    
    public void teken() { ... }
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