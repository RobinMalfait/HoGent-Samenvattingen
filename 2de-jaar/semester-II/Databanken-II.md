---
title: Databanken II
link: https://robinmalfait.com/2de-jaar/semester-II/Databanken-II.md
---

# Hoofdstuk 3: OUTER JOIN, subqueries, EXISTS

## LEFT OUTER JOIN

> Retourneert alle rijen van de eerst genoemde tabel in de FROM clause

## RIGHT OUTER JOIN

> Retourneert alle rijen van de tweede tabel in de FROM clause

## FULL OUTER JOIN

> Retourneert ook rijen uit de eerste en tweede tabel die geen corresponderende entry hebben in andere tabel

## CROSS JOIN

**SQL-92**

```sql
SELECT au_lname, au_fname, title_id
FROM authors
CROSS JOIN titleauthor
```

**old style join**

```sql
SELECT au_lname, au_fname, title_id
FROM authors, titleauthor
```

## UNION

**Basisvorm**

```sql
SELECT ... FROM ... WHERE ...
UNION
SELECT ... FROM ... WHERE ...
ORDER BY ...
```

**Regels**

- De resultaten van de 2 SELECT opdrachten moeten evenveel kolommen bevatten.
- Overenekomstige kolommen uit SELECT's moeten van hetzelfde data type zijn en beide NOT NULL toelaten of niet
- Kolommen komen voor in dezelfde volgorden
- De kolomnamen/titles van de UNION zijn deze van de eerste SELECT
- Het resultaat bevat echter steeds alleen unieke rijen
- Aan het einde van de UNION kan je een ORDER BY toevoegen. In deze clausule mag geen kolomnaam of uitdrukking voorkomen indien kolomnamen van beide SELECT's verschillen. Gebruik in dat geval kolomnumbers.

**Voorbeeld**

Geef een overzicht van alle bedienden (naam en voornaam, stad en postcode) en alle klanten (naam, stad en postcode)

```sql
SELECT firstname + ' ' + lastanem as name, city, postcode
FROM Employees
UNION
SELECT companyname, city, postcalcode
FROM Customers
```

## Subqueries

```sql
SELECT lastname, firstname, salary
FROM employee
WHERE salary = (
    SELECT max(salary)
    FROM employee
)
```

### Subquery die 1 kolom teruggeeft

```sql
SELECT spelersnr
FROM spelers
WHERE spelersnr NOT IN (
    SELECT spelersnr
    FROM wedstrijden
)
```

### ANY en ALL keywords

- `ALL` retourneert true als alle waarden geretourneerd in de subquery voldoen aan de vooraarde
- `ANY` retourneert true als minstens 1 waarde geretourneerd in de subquery voldoet aan de voorwaarde

- Voorbeeld: Geeft het hoogste bondsnummer en het bijhorende spelersnummer

```sql
SELECT bondsnr, spelersnr
FROM spelers
WHERE bondsnr >= ALL (
    SELECT bondsnr
    FROM spelers
    WHERE bondsnr IS NOT NULL
)
```
- Voorbeeld: Geef de spelersnummers van de spelers met minstens één boete die groter is dan een boete betaald voro speler 27; deze speler mag zelf niet in het resultaat voorkomen.

```sql
SELECT DISTINCT spelersnr
FROM boetes
WHERE spelersnr <> 27
AND bedrag > ANY (
    SELECT bedrag
    FROM boetes
    WHERE spelersnr = 27
)
```

### Gecorreleerde subqueries

- Bij een gecorreleerde subquery **hangt de inner query af van de informatie van de outer query.**
    - De subvraag bevat een zoekconditie die relateert naar de hoofvraag, waardoor de subvraag van de hoofdvraag afhankelijk wordt.
- Voor elke rij uit hoofdvraag wordt de subvraag opnieuw uitgevoerd.
    - De volgorde is hier dus niet van onder naar boven, maar van boven naar onder (per rij)
- Gebruik joins indien mogelijk
- Principe

```sql
SELECT ...
FROM tabel a
WHERE uitdrukking operator (
    SELECT ...
    FROM tabel
    WHERE uitdrukking operator a.kolomnaam
)
```

> “In de hoofdvraag mag je geen velden gebruiken uit de subvraag, maar wel omgekeerd” <small>slide 31</small>

### Subqueries en de EXISTS operator

- Via de operator EXISTS test je op het al dan niet leeg zijn van een resultaatset.
- Er bestaat ook NOT EXISTS

Geef de spelers die nog geen wedstrijden gespeeld hebben

```sql
SELECT *
FROM spelers p
WHERE NOT EXISTS (
    SELECT *
    FROM wedstrijden
    WHERE spelersnr = p.spelersnrs
)
```

Selecteer de spelers die wel gespeeld hebben

```sql
SELECT *
FROM spelers p
WHERE EXISTS (
    SELECT *
    FROM wedstrijden
    WHERE spelersnr = p.spelersnr
)
```

### Subqueries in de FROM-clause

- Als het resultaat van een subquery een tabel is dan mag die in de FROM clause gebruikt worden
- De tabel die de subquery oplevert **moet** een naam krijgen
    - Voorbeeld: geef de nummers van de spelers van het mannelijk geslacht met een nummer kleiner dan 10

```sql
SELECT spelersnr
FROM (
    SELECT spelers, geslacht
    FROM spelers
    WhERE spelersnr < 10
) as TIJDELIJK
WHERE geslacht = 'M'
```

### Subqueries in de SELECT-clause

- In SELECT clause van de SELECT instructie mogen scalaire subqueries gebruikt worden
    - Voorbeeld: geef van elke speler waarvan het nummer kleiner is dan 60 het anatal jaren dat ligt tussen het jaar van toetreding van de speler en dat van speler 100

```sql
SELECT spelersnr, jaartoe - (
    SELECT jaartoe
    FROM spelers
    WHERE spelersnr = 100
)
FROM spelers
WHERE spelersnr < 60
```

### Subqueries in de SELECT- en FROM-clause

- (db xtreme): geef per productklasse het goedkoopste product en een product dat die prijs heeft.

```sql
SELECT klasse, prijs, (
    SELECT TOP 1 productid
    FROM product
    WHERE productclassid = klasse
        AND price = prijs
)
FROM (
    SELECT productclassid, min(price)
    FROM product p
    GROUP BY productclassid
) as pcmin(klasse, prijs)
```
