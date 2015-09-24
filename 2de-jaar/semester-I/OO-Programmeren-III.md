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
7. MCV
    - Model (Business Model)
    - View (GUI)
    - Controller
8. JPA (Databases met ORM)
9. Netwerk TCP/UDP

# Collections

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
