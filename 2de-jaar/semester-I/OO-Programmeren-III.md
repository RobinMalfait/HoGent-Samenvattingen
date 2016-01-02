---
title: OO Programmeren III
---

# Mini Herhaling

```java
int z = 123;

String x = new String("jan"),
       y = new String("jan");

x == y;         // false, omdat de adresreferentie vergeleken worden.
x.equals(y);    // true, omdat de inhoud vergeleken wordt.
```

# Onderdelen

1. Data Structuren
    - List
2. Collections
3. Lambda's & streams (Java 8)
4. Generics
5. Files Deel 2 -> NIO (New I/O) & NIO2 -> Channel/Buffer
6. Multithreading
7. MVC
    - Model (Business Model)
    - View (GUI)
    - Controller
8. JPA (Databases met ORM)
9. Netwerk TCP/UDP

# Hoofdstuk 21: GEGEVENSSTRUCTUREN

- Variabele lengte: lengte kan kleiner en groter worden tijdens runtime
- Enkele dynamische gegevenstructuren:
    - Gelinkte lijsten
    - Stacks
    - Queues
    - Binaire bomen

- Zelf-referentie klasse
    - Bevat een instantie-variabele die refereert naar een object van dezelfde klasse.

Vb.:

```java
class Node {
    private int data;
    private Node next; // Self-ref

    public Node(int data) { ... } // Constructor
    public void setData(int data) { ... }
    public int getData() { ... }
    public void setNext(Node next) { ... }
    public Node getNext() { ... }
}
```

# Hoofdstuk 16: GENERIC COLLECTIONS

## Collections Framework

> - Meest voorkomende datastructuren gestandaardiseerd en efficient geïmplementeerd.
> - Goed voorbeeld van herbruikbare code

## Overzicht

- **Collection**
    - Datastructuur (object) die referenties naar andere objecten bijhoudt.
- **Collections framework**
    - Interfaces die de operaties declareren voor verschillende collection types en verschillende implementaties (classes) daarvan.
    - Behoren tot het package `java.util`
        - `Collection<E>`
        - `Set<E>`
        - `List<E>`
        - `Map<K, V>`
        - `Queue<E>`

![](https://d.pr/i/13zq2+)

### Interfaces

```java
Interface Iterator<E>
    boolean hasNext()
    E next()
    void remove()           // optional

Inteface ListIterator<E> extends Iterator<E>
    void add(E o)           // optional
    boolean hasPrevious()
    E previous()
    int nextIndex()
    int previousIndex()
    void set(E o)           // optional
```

## Class Arrays

- Methode `binarySearch` om te zoeken in geordende arrays
- Methode `equals` om het vergelijken
- Methode `fill` om waarden in te brengen
- Methode `sort` om te sorteren
- Methode `asList` om een array om te zetten naar een List

```java
import java.util.Arrays;

public class UsingArrays
{
    private int intArray[] = { 1, 2, 3, 4, 5, 6 };
    private double doubleArray[] = { 8.4, 9.3n 0.2, 7.9, 3.4 };
    private char charArray[] = { 'a', 'b', 'c' };
    private String stringArray[] = { "een", "twee", "drie" };
    private int filledIntArray[], intArrayCopy[];

    public UsingArrays()
    {
        filledIntArray = new int[10];
        intArrayCopy = new int[intArray.length];

        // Vul filledIntArray volledig op met 7's
        Arrays.fill(filledIntArray, 7);

        // Sorteer doubleAray in oplopende volgorde
        Arrays.sort(doubleArray);

        // Copy array intArray naar array intArrayCopy
        System.arraycopy(intArray, 0, intArrayCopy, 0, intArray.length);

        // Vergelijk de inhoud van beide arrays
        boolean b = Arrays.equals(intArray, intArrayCopy);
        System.out.printf("intArray %s intArrayCopy\n", (b ? "==" : '='));

        // Element opzoeken in intArray[] = {1, 2, 3, 4, 5, 6};
        int location = Arrays.binarySearch(intArray, value);
        // Indien value = 5     returns 4
        // Indien value = 8763  returns -7
        // -7 = de indexwaarde_in_geval_van_invoegen * -1 - 1
    }
}

// Methode arraycopy van de klasse System

static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
    Parameters:
    src - de source array
    srcPost - start positie in de source array
    dest - de destination array
    destPos - start positie in de destination array
    length - aantal elementen die gekopieerd moeten worden

// Throws:
IndexOutOfBoundsException - indien de grenzen van src of dest overschreden worden
ArrayStoreException - indien het type van de array src niet in dest geplaatst kan worden
NullPointerException - indien src of dest null is
```

```java
public class Arrays
{
    /**
     * binarySearch METHODE
     */
    // Zoekt in de opgegeven array a naar de waarde key volgens het binair zoek-algorithme.
    // Geeft "de indexwaarde_in_geval_van_invoegen*-1 - 1" terug als de waarde niet gevonden wordt, in het andere geval de index van de waarde in de array.
    public static int binarySearch(byte[] a, byte key);
    public static int binarySearch(byte[] a, byte key);
    public static int binarySearch(char[] a, char key);
    public static int binarySearch(double[] a, double key);
    public static int binarySearch(float[] a, float key);
    public static int binarySearch(int[] a, int key);
    public static int binarySearch(long[] a, long key);
    public static int binarySearch(Object[] a, Object key);
    public static int binarySearch(short[] a, short key);
    public static <T> int binarySearch(T[] a, T key, Comparator<? super T> c);


    /**
     * equals METHODE
     */
    // Geeft true terug indien de 2 opgegeven arrays van booleans gelijk zijn.
    // 2 arrays zijn gelijk als ze dezelfde lengte hebben en de overeenkomstige paren van elementen uit de arrays dezelfde waarde hebben.
    public static boolean equals(boolean[] a, boolean[] a2);
    public static boolean equals(byte[] a, byte[] a2);
    public static boolean equals(char[] a, char[] a2);
    public static boolean equals(double[] a, double[] a2);
    public static boolean equals(float[] a, float[] a2);
    public static boolean equals(int[] a, int[] a2);
    public static boolean equals(long[] a, long[] a2);
    public static boolean equals(Object[] a, Object[] a2);
    public static boolean equals(short[] a, short[] a2);


    /**
     * deepEquals METHODE
     */
    // Geeft true terug indien de 2 opgegeven arrays "deeply" gelijk zijn.
    // Deze methode is geschikt bij gebruik van geneste arrays van een bepaalde diepte.
    public static boolean deepEquals(Object[] a1, Object[] a2);


    /**
     * fill METHODE
     */
    // kent de integer-waarde val toe aan elk element van de array.
    public static void fill(int[] a, int val);

    // Kent de integer-waarde val toe aan elk element van index "fromIndex" tot index "toIndex" van de array a.
    public static void fill(byte[] a, int fromIndex, int toIndex, byte val);
    public static void fill(char[] a, int fromIndex, int toIndex, char val);
    public static void fill(double[] a, int fromIndex, int toIndex, double val);
    public static void fill(float[] a, int fromIndex, int toIndex, float val);
    public static void fill(int[] a, int fromIndex, int toIndex, int val);
    public static void fill(long[] a, int fromIndex, int toIndex, long val);
    public static void fill(Object[] a, int fromIndex, int toIndex, Object val);
    public static void fill(short[] a, int fromIndex, int toIndex, short val);
    // Throws:
    // - IllegalArgumentException: fromIndex > toIndex
    // - ArrayIndexOutOfBoundsException: fromIndex < 0 || toIndex > a.length

    /**
     * sort METHODE
     */
    // Sorteert de array a volgens oplopende numerieke waarde.
    public static void sort(int[] a);

    // IllegalArgumentException: fromIndex > toIndex
    // ArrayIndexOutOfBoundsException: fromIndex < 0 || toIndex > a.length
    public static void sort(byte[] a, int fromIndex, int toIndex);
    public static void sort(char[] a, int fromIndex, int toIndex);
    public static void sort(double[] a, int fromIndex, int toIndex);
    public static void sort(float[] a, int fromIndex, int toIndex);
    public static void sort(int[] a, int fromIndex, int toIndex);
    public static void sort(long[] a, int fromIndex, int toIndex);
    public static void sort(Object[] a)
    public static void sort(Object[] a, Comparator c);
    public static void sort(Object[] a, int fromIndex, int toIndex);
    public static void sort(short[] a, int fromIndex, int toIndex);
    public static <T> void sort(T[] a, int fromIndex, int toIndex, Comparator<? super T> c);

    /**
     * copyOf METHODE
     */
    // Kopieert de inhoud van original, afkappen of nullen toevoegen, tot de lengte newLength.
    // Mogelijke varianten : zie API documentatie.
    public static byte[] copyOf(byte[] original, int newLength);
    public static char[] copyOf(char[] original, int newLength);
    public static double[] copyOf(double[] original, int newLength);
    public static float[] copyOf(float[] original, int newLength);
    public static int[] copyOf(int[] original, int newLength);
    public static long[] copyOf(long[] original, int newLength);
    public static Object[] copyOf(Object[] original, int newLength);
    public static short[] copyOf(short[] original, int newLength);
    public static <T> T[] copyOf(T[] original, int newLength)

    /**
     * copyOfRange METHODE
     */
    // Kopieert de inhoud van original, van index from tot index to.
    // De lengte van de nieuwe array is to-from.
    // Mogelijke varianten: zie API documentatie
    public static <T> T[] copyOfRange(T[] original, int from, int to);


    /**
     * toString METHODE
     */
    // Geeft de stringrepresentatie van de inhoud van de array a terug.
    // De elementen van de array worden tussen vierkante haakjes geplaatst, en gescheiden via ",". Geeft "null" terug indien a null is.
    public static String toString(boolean[] a);

    /**
     * deepToString METHODE
     */
    // Geeft de stringrepresentatie van de "diepe" inhoud van de array a terug. Deze methode wordt vooral gebruikt bij meerdimensionale arrays.
    public static String deepToString(Object[] a);
}
```

## Interface collection en klasse collections.

```java
public interface Collection<E>
{
    // Adding
    // Clearing
    // Comparing
    // Retaining objects
}

public interface Set<E> extends Collection<E> {}
public interface List<E> extends Collection<E> {}
public interface Queue<E> extends Collection<E> {}

class Collections
{
    // Voorizet static methoden die collections manipuleren
    // Polymorfisme wordt hierbij ondersteund
}
```

## List Interface

> Geordende Collection waarbij duplicaten toegelaten zijn: SEQUENCE

- Index start van 0

```java
public interface List<E> extends Collection<E> {}

/**
 * Concrete Implementaties:
 */
public class ArrayList<E> implements List<E> {}     // Resizable-array implementatie
public class LinkedList<E> implements List<E> {}    // linked-list implementatie
public class Vector<E> implements List<E> {}        // zoals ArrayList maar synchronized
```

### Voorbeeld van ArrayList:

```java
import java.util.*;
public class CollectionTest
{
    private static final String[] COLORS = { "MAGENTA", "RED", "WHITE", "BLUE", "CYAN" };
    private static final String[] REMOVECOLORS = { "RED", "WHITE", "BLUE" };

    public CollectionTest
    {
        List<String> list = new ArrayList<>();

        // Opvullen van de ArrayList "list"
        for (String color : COLLORS)
        {
            list.add(color);
        }

        // Je kan ook minder efficient opvullen met een for loop...
        List<String> removeList = new ArrayList<>(Arrays.asList(REMOVECOLORS));

        // Afdrukken van de array
        // OUDE MANIER:
        for (int count = 0; count < list.size(); count++)
        {
            System.out.printf("%s", list.get(count));
        }

        // Goede nieuwe manier:
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext())
        {
            System.out.printf("%s", iterator.next());
        }

        // Verwijder alle strings uit "list" die in "removeList" voorkomen
        removeColors(list, removeList);

        // Opnieuw Afdrukken
        System.out.println("\n\nArrayList after calling removeColors: ");
        printList(list);

        public void printList(Collection<String> collection)
        {
            for (String color : collection)
                System.out.printf("%s", color);
            System.out.println();
        }

        // Verwijder alle strings uit "collection1" die in "collection2" voorkomen
        private void removeColors(Collection<String> collection1, Collection<String> collection2)
        {
            Iterator<String> iterator = collection1.iterator();

            while (iterator.hasNext())
            {
                if (collection2.contains(iterator.next()))
                {
                    iterator.remove(); // remove String object
                }
            }
        }

        public static void main(String args[])
        {
            new CollectionTest();
        }
    }
}
```

### Voorbeeld: LinkedList

```java
import java.util.*;
public class ListTest
{
    private static final String COLORS[] = { "black", "yellow", "green", "blue", "violet", "silver" };
    private static final String COLORS2[] = { "gold", "white", "brown", "blue", "gray", "silver" };

    // aanmaak en manipulatie van LinkedList objecten
    public ListTest()
    {
        List<String> list1 = new LinkedList<>();

        // Opvullen van de LinkedList "list1"
        for (String color : COLORS)
        {
            list1.add(color);
        }

        // Opvullen list2 via constructor: efficienter
        List<String> list2 = new LinkedList<>(Arrays.asList(COLORS2));

        // 'plak' list2 achter list1
        list1.addAll(list2);    // Concatenatie van lists
        list2 = null;           // release resources

        printCollection(list1);

        convertToUppercaseStrings(list1);
        printCollection(list1);

        System.out.print("\nDeleting elements 4 to 6...");
        removeItems(list1, 4, 7);
        printCollection(list1);

        printReversedList(list1);
    }

    public void printCollection(Collection<String> col)
    {
        // Java 7
        for(String color : col)
        {
            System.out.printf("%s", color);
        }
        System.out.println();

        // Java 8
        Iterator<String> iterator = col.iterator();
        while (iterator.hasNext())
        {
            System.out.printf("%s", iterator.next());
        }
        System.out.println();
    }

    private void convertToUppercaseStrings(List<String> list)
    {
        ListIterator<String> iterator = list.listIterator();

        while (iterator.hasNext())
        {
            String color = iterator.next();
            iterator.Set(color.toUpperCase());
        }
    }

    private void removeItems(List<String> list, int start, int end)
    {
        list.subList(start, end).clear();
    }

    private void printReversedList(List<String> list)
    {
        // met ListIterator kan je zowel vooruit hasNext() & next() maar ook achteruit hasPrevious() & previous() itereren.
        ListIterator<String> iterator = list.listIterator(list.size());

        System.out.println("\nReversed List:");

        // Print list in reverse order
        while (iterator.hasPrevious())
        {
            System.out.printf("%s", iterator.previous());
        }
    }

    public static void main(String args[])
    {
        new ListTest();
    }
}
```

## Klasse Vector - Klasse ArrayList

De klasse `Vector<E>` is een verouderde klasse en wordt vervangen door de nieuwe klasse `ArrayList<E>`.<br>Klasse `ArrayList<E>` bevat bijna dezelfde methodes als de klasse `Vector<E>`. Een groot verschil is dat `ArrayList<E>` inet gesynchroniseerd is en een `Vector<E>` wel.

Het Collections framework voorziet een aantal algoritmen (static methoden);

- **List algoritmen:**
    - sort
    - binarySearch
    - reverse
    - shuffle
    - fill
    -copy
- **Collection algoritmen:**
    - min
    - max
    - addAll
    - frequency
    - disjoint

(Slide 21 (hfdst 16), will be continued ...)


# Hoofdstuk 17: Lambda's en Stream


Nu:

**Hoe** wil je een taak uitvoeren?

```java
int sum = 0, values[];
for(int counter = 0; counter < values.length; counter++)
{
    sum += values[counter];
}
```

> **External** iteratie
- Gebruik van een lus om te itereren over een collectie van elementen.
- Vereist sequentiële benadering van de elementen.
- Vereist veranderlijk variabelen (sum en counter).


Functioneel programmeren:

**Wat** wil je in een taak uitvoeren (niet hoe).

> **Internal** iteratie
- Laat de bibliotheek de manier bepalen om over een collectie van elementen te itereren.
- Internal iteratie is gemakkelijker voor parallelle uitvoering.

> Functioneel programmeren legt de klemtoon op immutability, het niet aanpassen van de aangesproken databron.

| Interface | Description |
| --------- | ----------- |
| `BinaryOperator<T>` | Contains method `apply` that takes two `T` arguments, performs an operation on them (such as a calculation) and returns a value of type `T`. |
| `Consumer<T>` | Contains method `accept` that takes a `T` argument and returns void. Performs a task with it's `T` arguments, such as outputting the object, invoking a method of the object, etc. |
| `Function<T,R>` | Contains method `apply` that takes a `T` argument and returns a value of type `R`. Calls a method on the `T` argument and returns that method's result. |
| `Predicate<T>` | Contains method `test` that takes a `T` argument and returns a `boolean`. Tests wheter the `T` argument satisfies a condition. |
| `Supplier<T>` | Contains method `get` that takes no arguments and produces a value of type `T`. Often used to create a collection object in which a stream operation's results are place. |
| `UnaryOperator<T>` | Contains method `get` that takes no arguments and returns a value of type `T`. |

## Lambda Expressies

```java
(int x, int y) -> { return x + y; }
(x, y) -> x + y
(x, y) -> { return x + y; }
value -> System.out.printf("%d ", value)
() -> System.out.println("Welcome to lambdas!")
```

## Streams

Dit zijn objecten van:

- Klassen die de interface `Stream` (from the package `java.util.stream`) implementeren.
- één van de gespecialiseerde stream interfaces voor verwerking van `int`, `long` of `double` waarden.

Stream pipelines:

- Laat elementen een reeks van verwerkingsstappen doorlopen
- Pipeline:
    - Begint met een databron
    - Voert meerdere **intermediate** operaties uit op de elementen van de databron en
    - eindigt met een **terminal** operatie.
- Wordt gevormd door geketende methode aanroepen.
- Streams bewaren geen data
    - Eenmaal een stream is uitgevoerd kan het niet worden herbruikt, omdat het geen kopij bijhoudt van de originele databron.
- Intermediate (= tussentijdse) operatie
    - Specificieert een taak op elementen van een stream en resulteert altijd in een nieuwe stream.
    - Zijn lazy: worden pas uitgevoerd als een terminal operaite wordt aangeroepen.
- Terminal (=eind) operatie:
    - Start de verwerking van de stream pipeline's intermediate operaties
    - Creëert een resultaat
    - Zijn eager: voeren de gevraagde operatie uit wanneer ze worden aangeroepen


**Intermediate Stream operations**:

| Operation  | Explanation |
| ---------- | ----------- |
| `filter`   | Results in a stream containing only the elements that satisfy a condition. |
| `distinct` | Results in a stream constraining only the unique elements. |
| `limit`    | Results in a stream with the specified number of elements from the beginning of the original stream. |
| `map`      | Results in a stream in which each element of the original stream is mapped to a new value (possibly of a different-type) -- e.g.: Mapping numeric values to the squares of the numeric values. The ew stream has the same number of elements as the original stream. |
| `sorted`   | Results in a stream in which the elements are in sorted order. The new stream has the same number of elements as the original stream. |

**Terminal Stream operations**:

| Operation   | Explanation |
| ----------- | ----------- |
| `forEach`   | Performs processing on every element in a stream (e.g.: display each element) |
| <font color="blue">Reduction Operations</font> | *Take all values in the stream and return a single value* |
| `average`   | Calculates the *average* of the elements in a numeric stream. |
| `count`     | Returns the *number of elements* in the stream. |
| `max`       | Locates the *largest* value in a numeric stream. |
| `min`       | Locates the *smallest* value in a numeric stream. |
| `reduce`    | Reduces the elements of a collection to a *single value* using an associative accumulation function (e.g.: a lambda that adds two elements) |
| <font color="blue">Mutable reduction operations</font> | *Create a container (such as a collection or StringBuilder* |
| `collect`   | Creates a *new collection* of elements containing the results of the stream's prior operations. |
| `toArray`   | Creates an *array* containing the results of the stream's prior operations. |
| <font color="blue">Search Operations</font> | &nbsp; |
| `findFirst` | Finds the *first* stream element based on the prior intermediate operations; immediately terminates processing of the stream pipeline once such an element is found. |
| `findAny`   | Finds *any* stream element based on the prior intermediate operations; immediately terminates processing of the stream pipeline once such an element is found. |
| `anyMatch`  | Determines whether *any* stream elements matach a specified condition; immediately terminates processing of the stream pipeline if an element matches. |
| `allMatch`  | Determinaes whether *all* of the elements in the stream match a specified condition. |










