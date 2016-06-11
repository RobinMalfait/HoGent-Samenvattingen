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

Voorbeeld: Geeft het hoogste bondsnummer en het bijhorende spelersnummer

```sql
select bondsnr, spelersnr
from spelers
where bondsnr >= ALL (
    select bondsnr
    from spelers
    where bondsnr is not null
)
```
Voorbeeld: Geef de spelersnummers van de spelers met minstens één boete die groter is dan een boete betaald voro speler 27; deze speler mag zelf niet in het resultaat voorkomen.

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

Voorbeeld: geef de nummers van de spelers van het mannelijk geslacht met een nummer kleiner dan 10

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

Voorbeeld: geef van elke speler waarvan het nummer kleiner is dan 60 het anatal jaren dat ligt tussen het jaar van toetreding van de speler en dat van speler 100

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

### Common Table Expressions (CTE): de WITH component

De WITH-component heeft twee toepassingsgebieden:

1. Het vereenvoudigen van SQL-instructies, bijv. om herhaling te vermijden
2. Het recursief doorlopen van hiërarchische en netwerkstructuren

Vb.: wat is het gemiddeld aantal boetes van de spelers? Door gebruik te maken van een subquery, kun je dit oplossen als:

#### Zonder WITH component:

```sql
select avg(aantal * 1.0) -- * 1.0 om floating point te forceren
from (
    select count(*)
    from boetes
    group by spelersnr
) as aantallen(aantal)
```

#### Met WITH component:

Met behulp van de WITH-component kun je de subquery een eigen naam geven (met parameters) en deze naam dan verder in de query (eventueel meermaals) hergebruiken:

```sql
with aantallen (aantal) as (
    select count(*)
    from boetes
    group by spelersnr
)

select avg(aantal * 1.0)
from anatallen
```

### CTE's om herhaling van subquery's te vermijden

Geef de betalingsnummers en boetebedragen die niet gelijk zijn aan de hoogste of laagste boete ooit betaald voor speler 44; Toon tevens dit hoogste en laagste boetebedrag in elke rij.

#### Zonder CTE

```sql
select betalingsnr, bedrag, (
    select min(bedrag)
    from boetes
    where spelersnr = 44
), (
    select max(bedrag)
    from boetes
    where spelersnr = 44
)
from boetes
where bedrag > (
    select min(bedrag)
    from boetes
    where spelersnr = 44
)
and bedrag < (
    select max(bedrag)
    from boetes
    where spelersnr = 44
)
```

#### Met CTE

```sql
with min_max(min_bedrag, max_bedrag) as (
    select min(bedrag) , max(bedrag)
    from boetes
    where spelersnr = 44
)

select b.betalingsnr, b.bedrag, mm.min_bedrag, mm.max_bedrag
from boetes b
cross join min_max mm
where b.bedrag <> mm.max_bedrag
and b.bedrag <> mm.min_bedrag
```

### CTE's om herhaling van subquery's te vermijden (2)

Genereer de getallen 0 tot en met 999. `¯\_(ツ)_/¯`

```sql
with cijfers(cijfer) as (
    select 0 as cijfer
    union select 1
    union select 2
    union select 3
    union select 4
    union select 5
    union select 6
    union select 7
    union select 8
    union select 9
)

select (cijfer1.cijfer * 100) + (cijfer2.cijfer * 10) + (cijfer3.cijfer) as getal
from cijfers as cijfer1
cross join cijfers as cijfer2
cross join cijfers as cijfer3
order by getal
```

### CTE's met > 1 WITH-component

```sql
with aantal_boetes(aantal) as (select count(*) from boetes),
     aantal_wedstrijden(aantal) as (select count(*) from wedstrijden)

select (
    (select aantal from aantal_boetes) +
    (select aantal from aantal_wedstrijden)
)
```

### Recursieve SELECT-instructies

- Met recursiviteit wordt bedoeld:
    > We blijven een tabelexpressie uitvoeren totdat een bepaalde situatie bereikt is

- Hiermee kun je problemen oplossen als:
    - Wie zijn de vrienden van vrienden (in bijv. een sociaal netwerk)
    - Wat is de hierarchie van een organisatie?
    - Uit welke onderdelen en subonderdelen is een werkstuk opgebouwd?

*Geef de getallen van 1 t.e.m. 5*

```sql
with getallen(getal) as (
    select 1 union all
    select getal + 1 from getallen
    where getal < 5
)

select * from getallen
```

Kenmerken van recursief gebruik van WITH:

- WITH-component bestaat uit (minstens) 2 expressies, gecombineerd met union all
- De tijdelijke tabel wordt geraadpleegd in de 2e expressie = recursie
- Minstens één van de expressies mag geen refrentie naar de tijdelijke tabel bevatten

### Recursieve SELECT-instructies: maximaal aantal recursies = 100

*Geef de getallen 1 t.e.m. 999 (cf. CTE zonder recursie)*

```sql
with getallen(getal) as (
    select 1 union all
    select getal + 1 from getallen
    where getal < 1000
)

select * from getallen

-- With option:

select * from getallen option (maxrecursion 1000)
```
