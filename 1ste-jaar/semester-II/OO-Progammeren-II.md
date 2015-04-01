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
> 
> String is niet overerfbaar
> 
> Strings zijn constanten

```java
public final class String { ... }
```

> **final** classes zijn niet erfbaar

```java
public class MijnString extends String { ... } // DIT GAAT NIET
```

| Methode                | Uitleg |
| :--------------------: | ------ |
| .length()              | Geeft de lengte van de String terug |
| .equals(var)           | Controleer of de huidige String gelijk is aan de meegegeven variabele |
| .equalsIgnoreCase(var) | Doet het zelfde als .equals() maar negeert hoofdlettergevoeligheid |
| .trim()                | Verwijdert de spaties voor en na de String |
| .charAt(pos)           | Geeft het character op een bepaalde positie |
| .substring(begin[, length]) | Geeft een deel van de String beginnend bij index `begin`; length is optioneel maar dat is de lengte van het deel. |
| .indexOf(string) | Geeft de positie waar de meegegeven String overeenkomt |
| .indexOf(string, x) | Geeft de positie waar het x'de element staat |
| .lastIndexOf(string) | Geeft de positie van het laatst voorkomende |
| .compareTo(string) | Vergelijkt de strings op basis van ascii code |
| .regionMatches(x, entry, y, z) | Vergelijkt de string met entry, beginnend bij x, entry beginnend bij y, en hij vergelijkt z elementen |
| .startsWith(string) | Controlleert of een bepaalde string begint met de meegegeven parameter |
| .concat(x) | Voegt huidige string met x samen) |
| String.valueOf(param) | Geeft de String representatie van meegegeven parameter (bool, int, ...) |

```java
String s1 = "Hello";

s1 == "Hello"; // True, vergelijkt de waarde


String s2 = new String("hello");

s2 == "hello"; // False, vergelijkt de waarde "hello" met het adres van s2
```

**Voorbeeld:**

```java
// Middelste Letter Bepalen
String woord = "hottentottentententoonstelling";
String middeln = "";

midden = woord.substring(woord.length() / 2, woord.length() / 2 + 1);
// OF
midden = String.valueOf(woord.charAt(woord.length() / 2));

System.out.printf("Middelste letter = %s%n", midden);


// Initialen
String voornaam, achternaam, initialen = "";
voornaam = "Jan";
achternaam= "Peeters";

initialen = voornaam.charAt(0) + "." + achternaam.charAt(0) + ".";
// OF
initialen = voornaam.substring(0, 1).concat(".").concat(achternaam.substring(0, 1).concat("."));

System.out.printf("%s", initialen);
```

### String Builder

Bij `String`

```java
String s = new String("hello");
// s = "hello";

// s blijft onveranderd zelf na een replace

String s2 = s.replace("e", "a");
//s2 = "hallo";

// s2 krijgt de nieuwe waarde, s is nog steeds "hello"  
```

Bij `StringBuilder`

```java
StringBuilder s = new StringBuilder("hello");
s = "hello"; // StringBuilder Obj;

s.setCharAt(1, 'a');

s = "hallo"; // Er wordt gewerkt op het object zelf, en niet op een nieuw object
```

Van `String` to `StringBuilder`

```java
String s = new String("hello");
StringBUilder builder = new StringBuilder(s);

// Terug naar een String object
s = builder.toString(); 
```

#### Palindroom

```java
package domein;

/**
 *
 * @author robin
 */
public class MijnString 
{
    private String string;

    public MijnString()
    {
        this("niet ingevuld");
    }

    public MijnString(String string)
    {
        this.string = string;
    }
    
    public void setInhoud(String invoer)
    {
        if (invoer == null || invoer.equals(""))
        {
            throw new IllegalArgumentException("Woord is niet ingevuld");
        }
        
        this.string = invoer;
    }
    
    public boolean isPalindroomString()
    {
        for (int i = 0, j = string.length() - 1; i < j; i++, j--) {
            if (string.charAt(i) != string.charAt(j)) {
                return false;
            }
        }
        
        return true;
    }
    
    public boolean isPalindroomStringBuilder()
    {
        return string.equals((new StringBuilder(string)).reverse().toString());
    }
    
}
```