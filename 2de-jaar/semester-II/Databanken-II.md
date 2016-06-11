---
title: Databanken II
link: https://robinmalfait.com/2de-jaar/semester-II/Databanken-II.md
---

# Hoofdstuk 3: OUTER JOIN, subqueries, EXISTS

## LEFT OUTER JOIN

> Retourneert alle rijen van de eerst genoemde tabel in de from clause

## RIGHT OUTER JOIN

> Retourneert alle rijen van de tweede tabel in de from clause

## FULL OUTER JOIN

> Retourneert ook rijen uit de eerste en tweede tabel die geen corresponderende entry hebben in andere tabel

## CROSS JOIN

**SQL-92**

```sql
select au_lname, au_fname, title_id
from authors
cross join titleauthor
```

**old style join**

```sql
select au_lname, au_fname, title_id
from authors, titleauthor
```

## UNION

**Basisvorm**

```sql
select ... from ... where ...
union
select ... from ... where ...
order by ...
```

**Regels**

- De resultaten van de 2 select opdrachten moeten evenveel kolommen bevatten.
- Overenekomstige kolommen uit select's moeten van hetzelfde data type zijn en beide NOT NULL toelaten of niet
- Kolommen komen voor in dezelfde volgorden
- De kolomnamen/titles van de UNION zijn deze van de eerste select
- Het resultaat bevat echter steeds alleen unieke rijen
- Aan het einde van de UNION kan je een ORDER BY toevoegen. In deze clausule mag geen kolomnaam of uitdrukking voorkomen indien kolomnamen van beide select's verschillen. Gebruik in dat geval kolomnumbers.

**Voorbeeld**

Geef een overzicht van alle bedienden (naam en voornaam, stad en postcode) en alle klanten (naam, stad en postcode)

```sql
select firstname + ' ' + lastanem as name, city, postcode
from Employees
union
select companyname, city, postcalcode
from Customers
```

## Subqueries

```sql
select lastname, firstname, salary
from employee
where salary = (
    select max(salary)
    from employee
)
```

### Subquery die 1 kolom teruggeeft

```sql
select spelersnr
from spelers
where spelersnr not in (
    select spelersnr
    from wedstrijden
)
```

### ANY en ALL keywords

- `ALL` retourneert true als alle waarden geretourneerd in de subquery voldoen aan de vooraarde
- `ANY` retourneert true als minstens 1 waarde geretourneerd in de subquery voldoet aan de voorwaarde

- Voorbeeld: Geeft het hoogste bondsnummer en het bijhorende spelersnummer

```sql
select bondsnr, spelersnr
from spelers
where bondsnr >= ALL (
    select bondsnr
    from spelers
    where bondsnr is not null
)
```
- Voorbeeld: Geef de spelersnummers van de spelers met minstens één boete die groter is dan een boete betaald voro speler 27; deze speler mag zelf niet in het resultaat voorkomen.

```sql
select distinct spelersnr
from boetes
where spelersnr <> 27
and bedrag > ANY (
    select bedrag
    from boetes
    where spelersnr = 27
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
select ...
from tabel a
where uitdrukking operator (
    select ...
    from tabel
    where uitdrukking operator a.kolomnaam
)
```

> “In de hoofdvraag mag je geen velden gebruiken uit de subvraag, maar wel omgekeerd” <small>slide 31</small>

### Subqueries en de EXISTS operator

- Via de operator EXISTS test je op het al dan niet leeg zijn van een resultaatset.
- Er bestaat ook NOT EXISTS

Geef de spelers die nog geen wedstrijden gespeeld hebben

```sql
select *
from spelers p
where NOT EXISTS (
    select *
    from wedstrijden
    where spelersnr = p.spelersnrs
)
```

Selecteer de spelers die wel gespeeld hebben

```sql
select *
from spelers p
where EXISTS (
    select *
    from wedstrijden
    where spelersnr = p.spelersnr
)
```

### Subqueries in de from-clause

- Als het resultaat van een subquery een tabel is dan mag die in de from clause gebruikt worden
- De tabel die de subquery oplevert **moet** een naam krijgen
    - Voorbeeld: geef de nummers van de spelers van het mannelijk geslacht met een nummer kleiner dan 10

```sql
select spelersnr
from (
    select spelers, geslacht
    from spelers
    where spelersnr < 10
) as TIJDELIJK
where geslacht = 'M'
```

### Subqueries in de select-clause

- In select clause van de select instructie mogen scalaire subqueries gebruikt worden
    - Voorbeeld: geef van elke speler waarvan het nummer kleiner is dan 60 het anatal jaren dat ligt tussen het jaar van toetreding van de speler en dat van speler 100

```sql
select spelersnr, jaartoe - (
    select jaartoe
    from spelers
    where spelersnr = 100
)
from spelers
where spelersnr < 60
```

### Subqueries in de select- en from-clause

- (db xtreme): geef per productklasse het goedkoopste product en een product dat die prijs heeft.

```sql
select klasse, prijs, (
    select TOP 1 productid
    from product
    where productclassid = klasse
        and price = prijs
)
from (
    select productclassid, min(price)
    from product p
    group by productclassid
) as pcmin(klasse, prijs)
```
