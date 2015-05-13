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

[StringBuilder API](http://docs.oracle.com/javase/8/docs/api/java/lang/StringBuilder.html)

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

> `StringBuffer` is de voorloper van `StringBuilder`

## Klasse Character

[Character API](http://docs.oracle.com/javase/8/docs/api/java/lang/Character.html)

## Tokenizing Strings

[StringTokenizer API](https://docs.oracle.com/javase/8/docs/api/java/util/StringTokenizer.html)

> Opdelen van een stukje tekst
>
> * Split
> * StringTokenizer

```java
String s = "Dit is een zin!";
StringTokenizer stToken = new StringTokenizer(s); // geen scheidingstekens dan: \t, \n, \r, en een spatie

// Hoeveel stukjes zijn er?
stToken.countTokens() // 4

// Stukjes ophalen
stToken.nextToken(); // String

// Alles tonen
while(stToken.hasMoreTokens()) {
    System.out.println(stToken.nextToken());
}
// Resultaat
Dit
is
een
zin!


StringTokenizer stToken2 = new StringTokenizer(s, "! "); // Scheidingsteken is geen stukje
// Resultaat
Dit
is
een
zin


StringTokenizer stToken3 = new StringTokenizer(s, "! ", true); // Ook scheidingstekens als een stukje
// Resultaat
Dit

is

een

zin
!

```

### Split

```java
String s = "Dit is een zin";

String[] tokens = s.split(" ");
String[] tokens2 = s.split("\\s"); // Reguliere Expressions
```

## Reguliere Expressies

> Een beschrijving van een patroon in een tekst

| Symbool  | Beschrijving                |
| :------: | --------------------------- |
| `\d`     | [0-9]                       |
| `\w`     | [a-zA-Z0-9_]                |
| `\s`     | *Spaties*                   |
| `.`      | *Willekeurig karakter*      |
| `\s+`    | *1 of meer spaties*         |
| `\s?`    | *0 of 1 spatie*             |
| `\s*`    | *0 of meer spaties*         |
| `c{1,}`  | *1 of meer c's*             |
| `c{2}`   | *2 c's*                     |
| `c{2,3}` | *2 of 3 c's*                |
| `\\.`    | *Leesteken .*               |
| `[^a-z]` | *Alles behalve, de negatie* |

```java
str.matches("[A-Z][a-zA-Z]*");
// Beginnen met een hoofdletter, verder met gewone of hoofdletters zonder spaties of letters
```

## Werken met bestanden

| Term        | Beschrijving                                       |
| ----------- | -------------------------------------------------- |
| Sequentieel | Van voor -> achter                                 |
| Record      | een rij van bij databanken                         |
| Veld        | een cell                                           |
| Stream      | stroom van data die zich sequentieel transporteert |

![](/afbeeldingen/1ste-jaar/semester-II/OO-programmeren-II/files.png)

**Output Stream:** Schrijven van data

**Input Stream:** Lezen van data

**FileOutputStream** voor het schrijven van data naar een bestand

**FileInputStream** voor het lezen van data uit een bestand

Exceptions moeten opgevangen worden! Bijvoorbeeld:

`EOFException`: End Of File Exception

De `moederklasse` van alle file exception is: `IOException`

1. Bestand openen
2. Bestand bewerken
3. Bestand sluiten

### Sequentiële bestanden

#### Tekstbestanden (= leesbaar buiten Java omgeving)

```java
// SCHRIJVEN
public class CreateTextFile {
    private Formatter output;

    public void openFile() {
        try {
            // Optie 1:
            output = new Formatter(new FileOutputStream("clients.txt"));

            // Optie 2:
            output = new Formatter("clients.txt");

            // Optie 3: Maar je moet een IOException catchen
            output = new Formatter(Files.newOutputStream(Paths.get("clients.txt")));

        } catch(SecurityException securityException) {
            System.err.println("You do not have write access to this file.");
            System.exit(1);
        } catch(FileNotFoundException filesNotFoundException) {
            System.err.println("Error creating file.");
            System.exit(1);
        }
    }

    public void addREcord(AccountRecord record) {
        try {
            output.format("%d %s %s %.2f%n", 
                record.getAccount(), 
                record.getFirstName(), 
                record.getLastName(), 
                record.getBalance()
            );
        } catch(IOException e) {
            // Doe iets met de exception
        }
    }

    public void closeFile() {
        output.close();
    }
}
```

```java
// LEZEN
input = new Scanner(new File("clients.txt"));
while (input.hasNext()) {
    input.nextInt();
    input.next();
    input.nextDouble();
    input.nextLin(); // Leest hele record, niet appart
    ...
}
```

```java
// Voor Java7
try {
    Formatter out = new Formatter(bsstand);

    // Werken met de stream
} catch() {
    // Catch stuff
}
finally {
    // Toch nog sluiten
    out.close();
}

// Nieuw sinds Java7
try (Formatter out = new Formatter(bestand)) {
    // Werken met de stream
} catch() {
    // Er moet niet meer gesloten worden.
}
```

#### Geserialiseerde bestanden (= enkel bruikbaar binnen java)

-> domeinklasse

> ***!*** `Implements Serializable` -> Geen abstracte methodes, **`tagging`**-interface
>
> Alle attributen met keyword `transient` worden niet geserialiseerd
>
> **ObjectOutputStream** & **ObjectInputStream**
> 
> Data + type van attributen worden mee weggeschreven

```java
public class WriteObjects implements Serializable {
    // Openen
    File filename = new File("c:\\oef\\test.ser");
    ObjectOutputStream output = new ObjectOutputStream(new FileOutputStream(filename));
    
    // Schrijven
    output.writeObject(/* data om te schrijven */);
    
    // Sluiten
    output.close();
}
```


```java
public class ReadObjects implements Serializable {
    
    // Lezen
    AccountRecord record = (AccountRecord) input.readObject();
    List<AccountRecord> records = (List<AccountRecord>) input.readObject();    
 
    // Lezen per object
    while (true) {} // Gooit een EOFException bij het einde van het bestand
    
    // Sluiten
    input.close();
}
```

### FileChooser

> Toont een save file dialog waar je dan een naam kan aan geven.
> 
> Dit kan gebruikt worden om te schrijven en om te lezen!


```java
FileChooser fileChooser = new FileChooser();

// Show Save Dialog
File gekozenBestand = fileChooser.showSaveDialog(null);

// Show Open Dialog
File openBestand = fileChooser.showOpenDialog(null);
```