<!--
title: OO Programmeren III
-->

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
    static int binarySearch(byte[] a, byte key);
    static int binarySearch(byte[] a, byte key);
    static int binarySearch(char[] a, char key);
    static int binarySearch(double[] a, double key);
    static int binarySearch(float[] a, float key);
    static int binarySearch(int[] a, int key);
    static int binarySearch(long[] a, long key);
    static int binarySearch(Object[] a, Object key);
    static int binarySearch(short[] a, short key);
    static <T> int binarySearch(T[] a, T key, Comparator<? super T> c);


    /**
     * equals METHODE
     */
    // Geeft true terug indien de 2 opgegeven arrays van booleans gelijk zijn.
    // 2 arrays zijn gelijk als ze dezelfde lengte hebben en de overeenkomstige paren van elementen uit de arrays dezelfde waarde hebben.
    static boolean equals(boolean[] a, boolean[] a2);
    static boolean equals(byte[] a, byte[] a2);
    static boolean equals(char[] a, char[] a2);
    static boolean equals(double[] a, double[] a2);
    static boolean equals(float[] a, float[] a2);
    static boolean equals(int[] a, int[] a2);
    static boolean equals(long[] a, long[] a2);
    static boolean equals(Object[] a, Object[] a2);
    static boolean equals(short[] a, short[] a2);


    /**
     * deepEquals METHODE
     */
    // Geeft true terug indien de 2 opgegeven arrays "deeply" gelijk zijn.
    // Deze methode is geschikt bij gebruik van geneste arrays van een bepaalde diepte.
    static boolean deepEquals(Object[] a1, Object[] a2);


    /**
     * fill METHODE
     */
    // kent de integer-waarde val toe aan elk element van de array.
    static void fill(int[] a, int val);

    // Kent de integer-waarde val toe aan elk element van index "fromIndex" tot index "toIndex" van de array a.
    static void fill(byte[] a, int fromIndex, int toIndex, byte val);
    static void fill(char[] a, int fromIndex, int toIndex, char val);
    static void fill(double[] a, int fromIndex, int toIndex, double val);
    static void fill(float[] a, int fromIndex, int toIndex, float val);
    static void fill(int[] a, int fromIndex, int toIndex, int val);
    static void fill(long[] a, int fromIndex, int toIndex, long val);
    static void fill(Object[] a, int fromIndex, int toIndex, Object val);
    static void fill(short[] a, int fromIndex, int toIndex, short val);
    // Throws:
    // - IllegalArgumentException: fromIndex > toIndex
    // - ArrayIndexOutOfBoundsException: fromIndex < 0 || toIndex > a.length

    /**
     * sort METHODE
     */
    // Sorteert de array a volgens oplopende numerieke waarde.
    static void sort(int[] a);

    // IllegalArgumentException: fromIndex > toIndex
    // ArrayIndexOutOfBoundsException: fromIndex < 0 || toIndex > a.length
    static void sort(byte[] a, int fromIndex, int toIndex);
    static void sort(char[] a, int fromIndex, int toIndex);
    static void sort(double[] a, int fromIndex, int toIndex);
    static void sort(float[] a, int fromIndex, int toIndex);
    static void sort(int[] a, int fromIndex, int toIndex);
    static void sort(long[] a, int fromIndex, int toIndex);
    static void sort(Object[] a)
    static void sort(Object[] a, Comparator c);
    static void sort(Object[] a, int fromIndex, int toIndex);
    static void sort(short[] a, int fromIndex, int toIndex);
    static <T> void sort(T[] a, int fromIndex, int toIndex, Comparator<? super T> c);


}
```