<!--
title: OO Ontwerpen II
-->

# OO Ontwerpen I (Herhaling)

- **Abstraction:**
    - Alles is abstract
- **Encapsulation:**
    - Implementatie hiden
    - Beschermt data die eventueel overschreven kan worden
    - Je kan je interne data wijzigen, zolang de publieke API hetezlfde blijft
    - Publieke API om te communiceren met de objecten
- **Delegatie (Delegation):**
    - Single Responsibility, elke klasse heeft zijn eigen verantwoordelijkheden.
    - Je moet andere verantwoordelijkheden dus vragen aan andere objecten, delegeren.
    - Independent objecten
    - Loosely coupled
- **Modularity:**
    - Problemen oplossen in kleine problemen
    - Kleine klasse, modulair, herbruikbaar
- **Hierarchy:**
    - Relaties
- **Typing:**
    - Java is een static language, alles heeft types, ook in de parameters
    - PHP is een dynamic language, er zijn niet echt types, ze zijn niet verplicht

# TDD

> Als je, op basis van de UML design van een klasse, moeilijk een test kan schrijven, is er allicht iets mis in de UML.

## Advantages of TDD

- Wat je wilt, boven hoe je het wilt
- Design evolueert en wijzigt
- Snelle feedback loop
- Documentation
- Minder tijd nodig, als je wilt refactorren
- Sneller code schrijven met minder bugs
- Niet meer schrijven dat nodig is, enkel testen en schrijven wat nodig is
- Forceert je om kleine classes te schrijven, die testbaar zijn en 1 ding doen

## TDD Workflow

1. Klassendiagram
2. Schrijf tests
3. Voer uit (red)
4. Maak code werkend (green)
5. Refactor
6. Repeat

> Keep the bar <font color=green>green</font>, to keep your code clean

## TDD t.o.v. Classic Development

**TDD:**

- test
- code
- test
- code

**Classic:**

- Code
- Code
- Code
- tes

## JUnit Test Case

- Test Caes: een klasse die tests bevat
- Een test case is een POJO klasse:
    - Moet niet afgeleid zijn van een JUnit klasse
    - Moet geen JUnit interface implementeren
- JUnit aanziet iedere methode van een Test Case die voorzien is van @Test als een methode die iets test.
- Normale flow in een test methode:
    1. Maak een object van de te testen klasse
    2. Roep de te testen methode op
    3. Controleer of die methode correct uitgevoerd werd
