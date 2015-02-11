## OO Programmeren II

### OO Paradigm - (Les 11/02/2015)

* Abstractie - “klas”: “domein”klasse / ui-klassen
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
