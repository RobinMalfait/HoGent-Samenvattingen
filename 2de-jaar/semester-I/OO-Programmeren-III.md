---
title: OO Programmeren III
link: https://robinmalfait.com/2de-jaar/semester-I/OO-Progammeren-III.md
---

Net ontdekt dat de slides beschikbaar zijn op examen, dus wie wilt, mag dit aanvullen, I'm not gonna do it!

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

| Interface | Description |
| --------- | ----------- |
| Collection | The root interface in the collections hierarchy from which interfaces `Set`, `Queue` and `List` are derived. |
| Set | A collection that does *not* contain duplicates. |
| List | An ordered collection that *can* contain duplicate elements. |
| Map | A collection that associates keys to values and *cannot* contain duplicate keys. Map does not derive from `Collection` |
| Queue | Typically a *first-in, first-out* collection that models a *waiting line*, other orders van be specified. |

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

![](https://robinmalfait.com/afbeeldingen/droplr/13zq2.png)

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

### 7.1 ALGORITME: sort

```java
private static final string SUITS[] = {"Hearts", "Diamond", "Clubs", "Spades"};

List<String> list Arrays.asList(SUITS);

// Ascending
Collections.sort(list);
System.out.printf("Sorted array elements: %n%s%n", list); // Sorted array elements: [Clubs, Diamonds, Hearts, Spades]

// Descending
Collections.sort(list, Collections.reverseOrder());
```

### 7.1 ALGORITME: shuffle

```java
class Card
{
    public static enum Face { Ace, Deuce, Three, Four, Five, Six, Seven, Eigh, Nine, Ten, Jack, Queen, King };
    public static enum Suit { Clubs, Diamonds, Hearts, Spades };

    private final Face face; // face of card
    private final Suit suit; // suit of card

    public Card(Face cardFace, Suit cardSuit)
    {
        this.face = cardFace;
        this.suit = cardSuit;
    }

    public Face getFace() { return this.face; }
    public Suit getSuit() { return this.suit; }

    public String toString()
    {
        return String.format("%s of %s", this.face, this.suit);
    }
}

public class DeckOfCards
{
    private List<Card> list; // list zal de speelkaarten bevatten

    public DeckOfCards()
    {
        Card[] deck = new Card[52];
        int count = 0; // Number of cards

        for (Card.Suit suit : Card.Suit.values())
        {
            for (Card.Face face : Card.Face.values())
            {
                deck[count] = new Card(face, suit);
                count++;
            }
        }

        list = Arrays.asList(deck);
        Collections.shuffle(list); // SHUFFLE IT :D
    }
}
```

### 7.3 ALGORITME: reverse, fill, copy, min, max

```java
// Copy List overschrijft de elementen van copyList: dupliceert de objectreferenties
// Als er copyList.size() > list.size(): overige (laatste) elementen blijven ongewijzigd
// Als er copyList.size() < list.size(): IndexOutOfBoundsException
Collections.copy(copyList, list);

// Fill list with 'R's
Collections.fill(list, 'R');

Collections.reverse(list); // Reverses the list

Collections.max(someList); // Gets the highest value
Collections.min(someList); // Gets the lowest value
```

### 7.4 ALGORITME: binarySearch

**!** enkel op gesorteerde lijsten.

Binary search geeft de index waarde terug van het item in de lijst. Wanneer dit getal negatief is kan je ineens de waarde berekenen waar dit object zou moeten zitten. `waarde * - 1 - 1`

```java
public class BinarySearchTest
{
    private static final String COLORS[] = { "red", "white", "yellow", "green", "pink" };
    private List<String> list;

    public class BinarySearchTest()
    {
        list = new ArrayList<>(Arrays.asList(COLORS));
        Collections.sort(list);     // Sort the ArrayList, so that we can perform searches
        System.out.printf("Sorted ArrayList: %s%n", list);

        int result = Collections.binarySearch(list, "yellow"); // Gets the index of the "yellow" position
        System.our.printf("yellow: %d%n", result);

        result = Collections.binarySearch(list, "purple"); // Purple doesn't exist!
        System.ut.printf("purple: %d%n", result);

        /**
         * Output:
         */
        // Sorted ArrayList: [green, pink, red, white, yellow]
        // yellow: 4
        // purple: -3

        // -3 it is negative so we know it doesn't exist, now we can calculate where it would
        // go when it gets inserted via result * - 1 - 1 = 2
    }
}
```

## 8. Klasse Stack

- In een stack kunnen we de objecten plaatsen (`push()`) en objecten afhalen (`pop()`)
- Stacks werken volgens het **LIFO-principe** (Last In, First Out), wat betekent dat het laatste object dat we op de stack hebben geplaatst (push()) het eerste is dat we met de methode pop() ontvangen.
- De klasse Stack<E> **is een subklasse van Vector<E>**

5 methoden:

- `push`: Een object op de stack plaatsen.
- `pop`: Een object van de stack afhalen.
- `empty`: Geeft true terug indien de stack leeg is, anders false
- `peek`: Geeft de referentie van het object terug dat bovenaan op de stack staat (= top van de stack). Eigenlijk hetzelfde als pop() maar niet van de stack verwijderen.
- `search`: Geeft een geheel getal terug waarmee we aan de weet komen hoever onder in de stack het "object" zich bevindt.
    - De top van de stack wordt als afstand één beschouwd.
    - Indien het "object" niet voorkomt, dan geeft de methode -1 terug.

```java
import java.util.Stack;
import java.util.EmptyStackException;

public class StackTest
{
    public StackTest()
    {
        Stack<Number> stack = new Stack<>();

        Long longNumber = 12L;
        Integer intNumber = 34567;
        Float floatNumber = 1.0F;
        Double doubleNumber = 1234.5678;

        stack.push(longNumber);
        printStack(stack);
        stack.push(intNumber);
        printStack(stack);
        stack.push(floatNumber);
        printStack(stack);
        stack.push(doubleNumber);
        printStack(stack);

        try {
            Number removedObject = null;
            while (true) {
                removedObject = stack.pop();
                System.out.printf("%s popped%n", removeObject);

                printStack(stack);
            }
        } catch(EmptyStackException emptyStackException) {
            emptyStackException.printStackTrace();
        }
    }

    private void printStack(Stack<Number> stack)
    {
        if (stack.isEmpty()) {
            System.out.print("stack is empty\n\n");
        } else {
            System.out.print("Stack contains: ");

            for (Number number : stack) {
                System.out.printf("%s ", number);
            }

            System.out.print("(top) \n\n");
        }
    }
}
```

## 9. interface Queue

- In een queue kunnen we objecten plaatsen (`offer()`) en objecten afhalen (`poll()`).
- Queues werken volgens het **FIFO-principe** (First In, First Out), wat betekent dat het eerste object dat we op de queue hebben geplaatst (offer()) het eerste is dat we met de methode poll() ontvangen.

## 9. Klasse PriorityQueue

- In een prioriteitenqueue kunnen we ojecten plaatsen (`offer()`) en objecten afhalen (`poll()`)

    De objecten worden gesorteerd volgens de 'natuurlijke ordening' (methode compareTo() van interface Comparable)
    `public PriorityQueue()`
    of volgens een Comparator-object
    `public PriorityQueue(int initialCapacity, Comparator<? super E> comparator)`

```java
import java.util.PriorityQueue;

public class PriorityQueueTest
{
    public static void main(String args[])
    {
        PriorityQueue<Double> queue = new PriorityQueue<>();

        // Insert elements to queue
        queue.offer(3.2);
        queue.offer(9.8);
        queue.offer(5.4);

        System.out.print("Polling from queue: ");

        while (queue.size() > 0) {
            System.out.printf("%.1f", queue.stack);
            queue.poll();
        }
    }
}
```

## 10. SET interface

![](https://robinmalfait.com/afbeeldingen/droplr/16Alo.png)

- **HashSet<E>** is een implementatie-klasse van interface Set.
- **TeeSet<E>** is een implementatie-klasse van interface SortedSet.

(Slide 70 ...)

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

### IntStream voorbeeld:

```java
import java.util.Arrays;
import java.util.stream.IntStream;

public class IntStreamOperations
{
    public static void main(String[] args)
    {
        int[] values = {3, 10, 6, 1, 4, 8, 2, 5, 9, 7};

        // Display original
        System.out.print("Original values: ");
        IntStream.of(values)
                 .forEach(value -> System.out.printf("%d ", value));
        System.out.println();

        // Count, min, max, sum and average of the values
        System.out.printf("%nCount: %d%n", IntStream.of(values).count());
        System.out.printf("Min: %d%n", IntStream.of(values).min().getAsInt());
        System.out.printf("Max: %d%n", IntStream.of(values).max().getAsInt());
        System.out.printf("Sum: %d%n", IntStream.of(values).sum());
        System.out.printf("Average: %d%n", IntStream.of(values).average().getAsDouble());

        // sum of values with reduce method
        System.out.printf("%nSum via reduce method: %d%n", IntStream.of(values).reduce(0, (x, y) -> x + y));

        // Sum of squares of values with reduce method
        System.out.printf("Sum of squares via reduces method: %d%n", IntStream.of(values).reduce(0, (x, y) -> x + y * y));

        // Product of values with reduce method
        System.out.printf("Product via reduce method: %d%n", IntStream.of(values).reduce(1, (x, y) -> x * y));

        // ...
    }
}
```

## Stream<Integer> bewerkingen

```java
import java.util.Comparator;
import java.util.stream.Collectors;

// ...

Arrays.stream(values)
      .sorted()
      .collect(Collectors.toList());

// ...

// Values greater than 4

List<Integer> greaterThan4 = Arrays.stream(values)
                                   .filter(value -> value > 4)
                                   .collect(Collectors.toList());

// Filter values greater than 4 then sort the results
Arrays.stream(values)
      .filter(value -> value > 4)
      .sorted()
      .collect(Collectors.toList());

// ...
```

## Stream<String> bewerkingen

```java
import java.util.stream.Collectors;
// ...

Arrays.stream(strings)
      .map(String::toUpperCase)     // Dit is een referentie naar de methode toUpperCase van de klasse String, deze methode wordt dan opgeroepen in de map methode.
      .collect(Collectors.toList());
```

## Methodreferentie

```java
String objectName = new String();

objectName::instanceMethodName  // Dit is een method referentie op een object
ClassName::instanceMethodName   // Dit is een static method referentie van een klasse
ClassName::new                  // Dit is een referentie voor de constructor
```

| Lambda | Description |
| ------ | ----------- |
| `String::toUpperCase` | Method reference for an instance method of a class. Creates a one-parameter lambda that invokes the instance method on the lambda's argument and returns the method's result. |
| `System.out::println` | Method reference for an instance method that should be called on a specific object. Creates a one-parameter lambda that invokes the instance method on the specified object -- passing the lambda's argument to the instance method -- and returns the method's result. |
| `Math::sqrt` | Method reference for a static method of a class. Creates a one-parameter lambda in which the lambda's argument is passed to the specified a static method and the lambda returns the method's result. |
| `TreeMap::new` | Constructor reference. Creates a lambda that invokes the no-argument constructor of the specified class to create and initialize a new object of that class. |

## Predicates

```java
Employee[] employees = {
    new Employee("Jason", "Red", 5000, "IT"),
    new Employee("Ashley", "Green", 7600, "IT"),
    new Employee("Matthew", "Indigo", 6200, "Sales"),
    new Employee("JaJamesson", "Blue", 4700, "Marketing"),
};
List<Employee> list = Arrays.asList(employees);
Predicate<Employee> fourToSixThousand = e -> (e.getSalary() >= 4000 && e.getSalary() <= 6000);
System.out.printf("%nEmployees earning $4000-$6000 per month sorted by salary:%n");

list.stream()
    .filter(fourToSixThousand) // Predicate
    .sorted(Comparator.comparing(Employee::getSalary))
    .forEach(System.out::println);
```

### Sorteren van Employees op basis van meerdere velden.

```java
// Functions for getting first and last names from an Employee
Function<Employee, String> byFirstName = Employee::getFirstName;
Function<Employee, String> byLastName = Employee::getLastName;

// Comparator for comparing Employees by first name then last name
Comparator<Employee> lastThenFirst = Comparator.comparing(byLastName).thenComparing(byFirstName);

// Sort employees by last name, then first name
list.stream()
    .sorted(lastThenFirst)
    .forEach(System.out::println);

// Sort employees in descending order by last name, then first name
list.stream()
    .sorted(lastThenFirst.reversed())
    .forEach(System.out::println);

// Loop over Map
Map<String, List<Employee>> groupedByDepartment = list.stream().collect(Collectors.groupingBy(Employee::getDepartment));
                         // (String,     List<Employee>       )
groupedByDepartment.forEach((department, employeesInDepartment) -> {
    System.out.println(department);
    employeesInDepartment.forEach(employee -> System.out.printf("    %s%n", employee));
});
```

### Counting word occurrences in a text file.

```java
// ...

Map<String, Long> wordCounts = Files.lines(Paths.get("Chapter2Paragraph.txt"))
                                    .map(line -> lien.replaceAll("(?!')\\p{P}", ""))
                                    .flatMap(line -> pattern.splitAsStream(line))
                                    .collect(Collectors.groupingBy(String::toLowerCase, TreeMap::new, Collectors.countin()));

// Display the words grouped by starting letter
wordCounts.entrySet()
          .stream()
          .collect(
                Collectors.groupingBy(entry -> entry.getKey().charAt(0),
                TreeMap::new,
                Collectors.toList())
          ).forEach((letter, wordList) ->
          {
                System.out.printf("%n%C%n", letter);
                wordList.stream()
                        .forEach(word -> System.out.printf("%13s: %d%n", word.getKey(), word.getValue()));
          })
```

![](https://robinmalfait.com/afbeeldingen/droplr/1ifzq.png)

# Hoofdstuk 20: Generics

Door generiek te programmeren moet je geen method overloading doen, dit wilt zeggen dat je maar 1 methode moet schrijven, ipv vele methodes per data type.

```java
/**
 * Deze methode kunnen we nu gebruiken om een array van booleans, integers, doubles, strings, ... af te drukken
 */
public static <E> void printArray(E[] inputArray)
{
    Arrays.stream(inputArray).forEach(element -> System.out.printf("%s ", element));
}
```

Wanneer je een tweede parameter zou meegeven dat een ander type is, kan je dit als volgt doen:

```java
public static <E, W> void voorbeeld(E[] anArray, W waarde)
{
    // ...
}
```

Wanneer dit hetzelfde type is kan je het gewoon hergebruiken:

```java
public static <E> void printTwoArrays(E[] array1, E[] array2)
{
    // ...
}
```

Wanneer je zeker wilt zijn dat het parameter type van een bepaalde implementatieklasse is, kan je het alsvolgt weergeven:

```java
public static void <T extends Comparable<T>> T maximum(T x, T y, T Z)
{
    // Java 7
    T max = x; // Het eerste object is momenteel het grootste object.

    if (y.compareTo(max) > 0) {
        max = y; // Het object y is momenteel het grootste opbject.
    }
    if (z.compareTo(max) > 0) {
        max = z; // Het object z is het grootste object.
    }

    // Java 8
    T max = Arrays.asList(x, y, z).stream().max(T::compareTo).get();

    return max;
}

// Het is een generieke methode waarvan het parameter type een implementatieklasse van Comparable<T> moet zijn.
// De interface Comparable is zelf generiek.

/**
 * Nu kunnen we het als volgt gebruiken:
 */

public class MaximumApplicatie
{
    public static void main(String args[])
    {
        System.out.printf("Maximum of %d, %d and %d is %d%n%n", 3, 4, 5, Operation.maximum(3, 4, 5));
        System.out.printf("Maximum of %.1f, %.1f and %.1f is %.1f%n%n", 6.6, 8.8, 7.7, Operation.maximum(6.6, 8.8, 7.7));
        System.out.printf("Maximum of %s, %s and %s is %s%n%n", "pear", "apple", "orange", Operation.maximum("pear", "apple", "orange"));
    }
}
```

Output:

```
Maximum of 3, 4 and 5 is 5
Maximum of 6.6, 8.8 and 7.7 is 8.8
Maximum of pear, apple and orange is pear
```

## Generieke classe Stack

```java
public class Stack<E>
{
    private final int SIZE;
    privat int top;
    private E[] elements;

    public Stack()
    {
        this(10);
    }

    public Stack(int s)
    {
        SIZE = s > 0 ? s : 10; // set size of stack
        top = -1;
        elements = (E[])new Object[SIZE];
    }

    public void push(E pushValue)
    {
        if (top == SIZE - 1) {
            throw new FullStackException(String.format("Stack is full, cannot push %s", pushValue))
        }

        elements[++top] = pushValue;
    }

    public E pop()
    {
        if (top == -1) {
            throw new EmptyStackException("Stack is empty, cannot pop");
        }

        return elements[top--];
    }
}

public class FullStackException extends RuntimeException
{
    public FullStackException() {
        this("Stack is full");
    }

    public FullStackException(String exception)
    {
        super(exception);
    }
}

public class EmptyStackException extends RuntimeException
{
    public EmptyStackException() {
        this("Stack is empty");
    }

    public EmptyStackException(String exception)
    {
        super(exception);
    }
}

/**
 * The application itself
 */
public class StackApplicatie
{
    private double[] doubleElements = {1.1, 2.2, 3.3, 4.4, 5.5, 6.6};
    private int[] integerElements = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11};

    private Stack<Double> doubleStack;
    private Stack<Integer> integerStack;

    public void testStacks()
    {
        doubleStack = new Stack<>(5);
        integerStack = new Stack<>(10);
    }
}
```

## Raw types

```java
private Stack[] stack = new Stack[2]; // 2 Stacks, deze kunnen nog elke 'vorm' aannemen.

// Opvullen

stack[0] = new Stack<Double>(5); // Hier zeg je pas welk type het is
stack[1] = new Stack<Integer>(10);
```

## Wildcards

```java
// Collection is generiek dus het kan 'elke' vorm aannemen, via deze manier zeggen we welke vorm het kan aannemen
public static double sum(Collection<? ectends Number> list);

Integer[] integers = {1, 2, 3, 4, 5};
Collection<Integer> integerList = new ArrayList<>(Arrays.asList(integers));
```

## Overerving

- Een generieke klassen kan erven van een niet-generieke klasse
- Een generieke klasse kan erven van een generieke klasse
- Een niet-generieke klasse kan erven van een generieke klasse, vb.: De klasse **Properties** erft van de klasse **Hashtabl<K,V>**
- Een generieke methode in een subklasse kan een generieke methode van de superklasse overschrijven indien ze dezelfde header hebben.

# Hoofdstuk 15: Files Deel 2

- **Sequentiële file** Je doorloopt de gegevens in een sequentiële file van voor naar achter.
- **Random access file** Je krijgt op willekeurige manier toegang tot de gegevens in een random access file.

> **NIO**: New Input Output

- Channel-based benadering voor IO.
    - Channel: een open IO connection.
    - Buffer: bevat data.

```java
import java.nio.ByteBuffer;

public class Rekening
{
    public final static int SIZE = sizeBerekenen();
    public final static int NAAMLENGTE = 20;
    private int rekeningNr;
    private String naam;
    private double balans;

    public static int sizeBerekenen()
    {
        ByteBuffer buffer = ByteBuffer.allocate(100);
        buffer.putInt(0);                       // rekeningNr
        for (int i = 0; i < NAAMLENGTE; i++)    // Naam
        {
            buffer.putChar('A');
        }
        buffer.putDouble(0.0);                  // Balans

        return buffer.position();
    }

    public Rekening(int nr, String naam, double bal)
    {
        setRekeningNr(nr);
        setNaam(naam);
        setBalans(bal);
    }

    // Getters & Setters... (Also known as: accessors & mutators)

    public String toString()
    {
        return String.format("%d %s %.2f", getRekeningNr(), getNaam(), getBalans());
    }
}

import java.io.RandomAccessFile;
import java.nio.channels.FileChannel;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.Scanner;

public class NioRekeningTest
{
    private RandomAccessFile hetBestand;
    private FileChannel channel;
    private ByteBuffer buffer = ByteBuffer.allocate(Rekening.SIZE);

    public static void main(String args[])
    {
        new NioRekeningTest().run();
    }

    public void run()
    {
        maakTestBestand();
        vraagRecordOp();
    }

    public void maakTestBestand()
    {
        try {
            hetBestand = new RandomAccessFile("nio.dat", "rw");
            channel = hetBestand.getChannel();
            Rekening[] rekeningen = {
                new Rekening(1000, "Jan", 100.0),
                new Rekening(1001, "Piet", 200.0),
                new Rekening(1002, "Joris", 150.0),
                new Rekening(1003, "Corneel", 0.0),
            };

            int recNr = 1;

            for (Rekening r : rekeningen)
            {
                schrijfRecord(r, recNr++);
            }

            hetBestand.close();
        } catch(IOException e) {
            e.printStackTrace();
            System.exit(1);
        }
    }

    public void schrijfRecord(Rekening r, int volgnr)
    {
        buffer.clear();
        buffer.putInt(r.getRekeningNr());

        StringBuffer hulp = new StringBuffer(r.getNaam());
        hulp.setLength(Rekening.NAAMLENGTE);
        String naam = hulp.toString().replace('\0', ' ');
        for (int i = 0; i < Rekening.NAAMLENGTE; i++)
        {
            buffer.putChar(naam.charAt(i));
        }
        buffer.putDouble(r.getBalans());
        buffer.flip();
        try {
            channel.position((volgnr - 1) * Rekening.SIZE);
            channel.write(buffer);
        } catch(IOException e) {
            e.printStackTrace();
            System.exit(1);
        }
    }

    public void vraagRecordOp()
    {
        try {
            hetBestand = new RandomAccessFile("nio.dat", "r");
            channel = hetBestand.getChannel();
            System.out.print("Geef record volgnr: ");

            Scanner in = new Scanner(System.in);

            int volgnr = in.nextInt();
            channel.position((volgnr - 1) * Rekening.SIZE);
            buffer.clear();
            channel.read(buffer);
            buffer.flip();
            int nr = buffer.getInt();
            char ar[] = new char[Rekening.NAAMLENGTE];
            for (int i = 0; i < ar.length; i++)
            {
                ar[i] = buffer.getChar();
            }

            String naam = new String(ar).trim();
            double balans = buffer.getDouble();

            Rekening r = new Rekening(nr, naam, balans);
            System.out.printf("%s%n", r);
            hetBestand.close();
        } catch(IOException e) {
            e.printStackTrace();
            System.exit(1);
        }
    }
}
```

# Hoofdstuk 23: Multithreading

Threads: delen van het programma die in concurrentie met elkaar gelijktijd in executie gaan.

> Het is aangeraden om `ThreadLocalRandom` te gebruiken.

Binnen threads is het efficiënter om gebruik te maken van de nieuwe klasse **ThreadLocalRandom**, om aan randomwaarden te geraken.
Deze klasse heeft een static methode `current()`

```java
int x = ThreadLocalRandom.current().nextInt(2000);
// x zal een waarde tussen 0 en 1999 toegekend krijgen.
```

Deze random wordt gebruikt in de Sleep methode van de thread:

```java
Thread.sleep(randomwaarde);
```

## Het maken en uitvoeren van een thread

```java
public class PrintTask implements Runnable // Dit is belangrijk
{
    private int sleepTime;
    private String threadName;
    private static Random generator = new Random(); // Dit kunnen we dus vervangen door de ThreadLocalRandom

    public PrintTask(String name)
    {
        threadName = name;
        sleepTime = generator.nextInt(5000); // Slapen tussen 0 & 5 seconden.
    }

    public void run() // Deze methode moet je implementeren omdat je Runnable implementeert
    {
        try {
            System.out.printf("%s going to sleep for %d%n", threadName, sleepTime);

            Thread.sleep(sleepTime);
        } catch(InterruptedException e) {
            exceptoin.printStackTrace();
            Thread.currentThread().interrupt(); // Re-interrupt thread
        }

        System.out.printf("%d done sleeping%n", threadName);
    }
}

public class ThreadTester
{
    public static void main(String args[])
    {
        Thread thread1 = new Thread(new PrintTask("thread1"));
        Thread thread2 = new Thread(new PrintTask("thread2"));
        Thread thread3 = new Thread(new PrintTask("thread3"));

        System.out.println("Starting threads");

        thread1.start(); // Plaats thread1 in Ready toestand
        thread2.start(); // Plaats thread2 in Ready toestand
        thread3.start(); // Plaats thread3 in Ready toestand

        System.out.println("Threads started, main ends\n");
    }
}

import java.util.concurrent.Executors;
import java.util.concurrent.ExecutorService;
public class RunnableTester
{
    public static void main(String args[])
    {
        PrintTask task1 = new PrintTask("thread1");
        PrintTask task2 = new PrintTask("thread2");
        PrintTask task3 = new PrintTask("thread3");

        ExecutorService threadExecutor = Executors.newFixedThreadPool(3);

        threadExecutor.execute(task1);
        threadExecutor.execute(task2);
        threadExecutor.execute(task3);

        threadExecutor.shutdown();
    }
}
```

## Thread synchronisatie

- Meeredere threads kunnen een object delen, '**shared object**'
- Wanneer meerdere threads het shared object kunnen wijzigen kunnen er problemen ontstaan:
    - Mutual exclusion of thread **synchronisatie**
    - In Java gebruik van **locks** voor synchronisatie
    - **Lock** interface (*java.util.concurrent.locks*).
    - Klasse **ReentrantLock** implementatie van Lock.
- **Elk object heeft een monitor:** geeft maar één thread tegelijkertijd executierecht bij een synchronized statement op het object, 'obtaining the lock'. Andere threads komen in **waiting** toestand (**lock**). Als de lock wordt vrijgegeven, 'released', zal de monitor de thread met hoogste priority laten voortgaan in **runnable** state (**unlock**).
- Een volledige methode kan **synchronized** zijn of je kan een synchronized block maken.
- **Deadlock preventie**: als een thread de **wait** methode activeert, zorg dan dat een afzonderlijke thread de **notify** methode activeert voor terugkeer naar de **runnable** state.


## Producer/Consumer relatie zonder synchronisatie

![](https://robinmalfait.com/afbeeldingen/droplr/1lgKH.png)

```java
public interface Buffer {
    public void set(int value):
    pulic int get();
}

import java.util.Random;
public class Producer implements Runnable
{
    private static ThreadLocalRandom generator = ThreadLocalRandom.current();
    private Buffer sharedLocation();

    public Producer (Buffer shared)
    {
        sharedLocation = shared;
    }

    public void run()
    {
        int sum = 0;
        for (int count = 1; count <= 10; count ++)
        {
            try {
                Thread.sleep(generator.nextInt(3000));
                sharedLocation.set(count);

                sum += count;

                System.out.printf("\t%2d%n", sum);
            } catch(InterruptedException e) {
                e.printStackTrace();
                Thread.currentThread().interrupt();
            }
        }

        System.out.printf("%n%s%n%s%n", "Producer done producing.", "Terminating Producer.");
    }
}

public class Consumer implements Runnable
{
    private static ThreadLocalRandom generator = ThreadLocalRandom.current();
    private Buffer sharedLocation;

    public Consumer(Buffer shared)
    {
        sharedLocation = shared;
    }

    public void run()
    {
        int sum = 0;
        for (int count = 1; count <= 10; count++)
        {
            try {
                Thread.sleep(generator.nextInt(3000));
                sum += sharedLocation.get();
                System.out.printf("\t\t\t%d%n", sum);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }

        System.out.printf("%n%s %d.%n%s%n", "Consumer read values totaling", sum, "Terminating Consumer");
    }
}

// ...
```

(Slide 32, ...)

# Hoofdstuk MVC
# Hoofdstuk 29: JPA

> Java Persistence API

Entity manager via de factory:

```java
EntityManagerFactory emf = Persistense.createEntityManagerFactory("UnitName");
EntityManager em = emf.createEntityManger();
```

Transacties:

```java
em.getTransaction().begin();
// ...
em.getTransaction().commit();
```

JPA afsluiten:

```java
em.close();
emf.close();
```

## Associaties

![](https://robinmalfait.com/afbeeldingen/droplr/14I5Q.png)

### Veel-op-veel associaties

| RDBMS | OOP |
| :---- | :-- |
| Altijd tussentabel nodig | Tussentabel niet altijd nodig |
| ![](https://robinmalfait.com/afbeeldingen/droplr/158JM.png) | ![](https://robinmalfait.com/afbeeldingen/droplr/1hLnx.png) |

## JPA Entity

> **Entity** Java object met bijbehorend record in database.
>
> **Entity Class**: Java class die entity beschrijft
> - Moet public of protected default constructor hebben
> - Mag geen final class zijn
> - Mag geen ensted class zijn

## Instance variabele van Entity class

Bevat waarde die opgeslagen is in het record dat bij de entity hoort.

![](https://robinmalfait.com/afbeeldingen/droplr/15cSL.png)

## Mapping informatie

- Mapping informatie definieert:
    - Welke klasse bij welke tabel hoort
    - Welke instance variabele bij welke kolom hoort
- Kan je schrijven
    - Met @nnotations in de entity class
    - In XML: META-INF/orm.xml
- XML overschrijft @annotations

```java
@Entity
// Verplicht bij iedere entity class

@Table(name="NaamVanDeTableDieEntitiesBevat")
// Verplicht als de naam van de tabel ≠ naam van de entity class

@Id
// Verplicht bij instance variabele die hoort bij primary key

@Column(name="NaamVanDeBijhorendeKolom")
// Verplicht als kolomnaam ≠ instance variable naam
```

Voorbeeld:

```java
@Entity
@Table(name = "docenten")
public class Docent
{
    @Id
    @GeneratedValue(                        // Primary key is door database ingevuld
        strategy = GenerationType.IDENTITY  // En is een autonummering
    )
    @Column(name = "DocentNr")              // DocentNr is kolom die hoort bij variabele id
    private int id;
    private String voornaam;                // Hoort automatisch bij kolom voornaam
    private String familienaam;             // Hoort automatisch bij kolom familienaam
    private BigDecimal wedde;               // Hoort automatisch bij kolom wedde
}
```

```java
@Temporal(TemporalType.DATE)
// De kolom die bij een Date variabele hoort is van het type Date (enkel datum)

@Temporal(TemporalType.TIME)
// De kolom die bij een Date variabele hoort is van het type Time (enkel tijd)

@Temporal(TemporalType.TIMESTAMP)
// De kolom die bij en Date variabele hoort is van het type DateTime (datum en tijd)

@Transient
// De private variabele heeft geen bijbehorende kolom, wordt dus niet in de database opgeslagen.
```

### Relaties

#### One-to-one - unidirectioneel

![](https://robinmalfait.com/afbeeldingen/droplr/HN6B.png)

```java
class Werknemer
{
    @Id
    int id;

    @OneToOne
    ParkeerPlaats p;
}

class Parkeerplaats
{
    @id int id;
}
```

#### One-to-one - bidirectioneel

![](https://robinmalfait.com/afbeeldingen/droplr/1hoWL.png)

```java
class Werknemer
{
    @Id
    int id;

    @OneToOne
    ParkeerPlaats p;
}

class Parkeerplaats
{
    @id int id;

    @OneToOne(mappedBy="p")
    Werknemer w;
}
```

#### One-to-one - bidirectioneel (2)

![](https://robinmalfait.com/afbeeldingen/droplr/1hoWL.png)

```java
class Werknemer
{
    @Id
    int id;

    @OneoOne(mappedBy="w")
    ParkeerPlaats p;
}

class Parkeerplaats
{
    @id int id;

    @OneToOne
    Werknemer w;
}
```

#### One-to-many - unidirectioneel

![](https://robinmalfait.com/afbeeldingen/droplr/HIKY.png)

```java
class Werknemer {
    @Id int id;
}

class Department {
    @id int id;

    @OneToMany
    List<Werknemer> w; // Dit gaat via een derde tabel: department_werknemer
}
```

#### One-to-many / Many-to-one - bidirectioneel

![](https://robinmalfait.com/afbeeldingen/droplr/17WaS.png)

```java
class Werknemer {
    @Id int id;

    @ManyToOne
    Department d;
}

class Department {
    @id int id;

    @OneToMany(mappedBy="d")
    List<Werknemer> w;
}
```

#### One-to-many / Many-to-one - bidirectioneel (2)

![](https://robinmalfait.com/afbeeldingen/droplr/17WaS.png)

```java
class Werknemer {
    @Id int id;

    @ManyToOne
    @JoinTable
    Department d;
}

class Department {
    @id int id;

    @OneToMany(mappedBy="d")
    List<Werknemer> w;
}
```

#### Many-to-many - unidirectioneel

![](https://robinmalfait.com/afbeeldingen/droplr/10nUv.png)

```java
class Werknemer {
    @Id int id;

    @ManyToMany
    List<Project> p;
}

class Project {
    @Id int id;
}
```

#### Many-to-many - bidirectioneel

![](https://robinmalfait.com/afbeeldingen/droplr/10nUv.png)

```java
class Werknemer {
    @Id int id;

    @ManyToMany
    List<Project> p;
}

class Project {
    @Id int id;

    @ManyToMany(mappedBy="p")
    List<Werknemer> w;
}
```

#### Many-to-many - bidirectioneel (2)

![](https://robinmalfait.com/afbeeldingen/droplr/10nUv.png)

```java
class Werknemer {
    @Id int id;

    @ManyToMany(mappedBy="w")
    List<Project> p;
}

class Project {
    @Id int id;

    @ManyToMany
    List<Werknemer> w;
}
```

### Lazy Loading

- Meerwaardige relaties gebruiken lazy loading.
- Eager loading is mogelijk met bijvoorbeeld:

    ```java
    @OneToMany(fetch=FetchType.EAGER)
    ```

### Embeddables

- Klassen die geen entiteitklasse worden, kunnen als embeddable gebruikt worden.
- Embeddable klassen geef je aan met `@Embeddable`
- Voor attributen van een embeddable type is er de optionele annotatie `@Embedded`.
- Een embeddable object heeft geen eigen identiteit en krijgt geen eigen tabel.
- De attributen van een embeddable komen terecht in de tabel van de entiteit die eigenaar is van het embedded attribuut.
- Deze relatie is vergelijkbaar met compositie in UML

```java
@Embeddable
public class Address {
    private String street;
    private int postalCode;
}

@Entity
public class User {
    private String name;

    @Embedded
    private Address address;
}
```

## Overervering

```java
@Inheritance(strategoy = InheritanceType.SINGLE_TYPE)
// één tabel voor de volledige hierarchie

@Inheritance(strategy = InheritanceType.JOINED)
// één tabel per klasse in de hierarchie

@InheritanceType(strategy = InheritanceType.TABLE_PER_CLASS)
```

> Gebruik bij voorkeur de joined werkwijze
>
> Voor grote overervingshierarchien is de single table werkwijze performanter maar minder flexibel

### Cascade

- CascadeType.PERSIST
- CascadeType.MERGE
- CascadeType.DETACH
- CascadeType.REMOVE
- CascadeType.REFRESH
- CascadeType.ALL

Vb.:

```java
@OneToMany(cascade=CascadeType.ALL)
@ManyToOne(cascade={CascadeType.PERSIST, CascadeType.MERGE})
```

#### Orphan Removal

- @OneToOne & @OneToMany ondersteunen ook *orphan removal*:
    `@OneToOne(orphanRemoval=true)`
- Dit zorgt er voro dat het object dat het 'kind' is van de relatie automatisch verwijderd wordt wanneer de relatie wordt verbroken.
- Dit resulteert automatisch ook in een remove cascade.


# Hoofdstuk 28: Netwerk TCP/UDP!

###Stream Sockets

Stream sockets brent een proces, een connectie tot stand met een anders proces.
Stream sockets leveren een connectie-geörienteerde service.
Het gebruikte tranmissieprotocol is TCP.

###Datagram Sockets

Individuele pakketten met informatie!
UDP -> user datagram protocol is een connectieloze service, houd geen rekening met volgorde.
UDP is meest geschikt voor netwerktoepassingen die geen error checking en betrouwbaarheid van TCP eisen.

### Manipuleren URL'S

HTTP vormt basis van WWW.
- gebruikt uri's (Uniform Resource Identifiers) om gegevens op het internet te identificieren.
- uri's die plaats van resource bepalen heten URL'S (Uniform Resource Locators).

AppletContext heeft een methode showDocument die browser toegang geeft tot de resource en die resource toont op het scherm.

### Eenvoudige server met Stream Sockets opzetten (TCP)

##Stap 1: creëer een ServerSocket object

```java
ServerSocket server = new ServerSocker(portNumber, queueLength);
```

Geldig poortnummer => tussen 0 en 65565
Meeste besturingssystemen reserveren poortnummers kleiner dan 1024 voor system services
DUS altijd poortnummer hoger dan 1024 nemen anders BindException !

##Stap 2: Server luisters onafgebroken naar poging van client om connectie te maken

```java
Socket connection = server.accept();
```

##Stap 3: De OutputStream en InputStream-objecten worden opgehaald zodat de server kan communiceren me de client door verzenden en ontvangen van Bytes

```java
ObjectOutputStream objOutput = server.getOutputStream();
```

##Stap 4: Tijdens de verwerkingsfase communiceren client en server via input/output

##Stap 5: Wanneer transmissie is afgehandeld sluit server connectie door methode close aan te roepen op de streams en socket.

```java
server.close();
```

### Eenvoudige Client opzetten in 4 stappen

##Stap 1: Socket constructor legt connectie met server
```java
Socket connection = new Socket(serverAddress, port)
```

##Stap 2: Gebruik methoden getInputStream en getOutputStream om referenties te krijgen naar input/output streams

##Stap 3: Tijdens de verwerkingsfase communiceren client en server via input/output

##Stap 4: Wanneer transmissie is afgehandeld sluit client connectie door methode close aan te roepen op de streams en socket.
