# Samenvatting Databanken

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

### Recursief doorlopen van een hiërarchische structuur

*Databank xtreme: geef al wie rechtstreeks of onrechtstreeks rapporteert aan Andrew Fuller (EmployeeID = 2)*

```sql
with bazen (baas, medewerker) as (
    select supervisorid, employeeid
    from employee
    where supervisorid = 2
    union all
    select e.supervisorid, e.employeeid
    from employee e
    join bazen b
    on e.supervisorid = b.medewerker
)

select * from bazen
```

# Hoofdstuk 5

## Stored Procedures
---


```SQL
CREATE procedure usp_Customers_Delete
@custno nchar(5) = NULL
AS
IF @custno IS NULL BEGIN
RAISERROR('customerID is NULL', 10, 1)
RETURN
END
IF NOT EXISTS (SELECT * FROM customers WHERE customerid = @custno)
BEGIN
RAISERROR ('Klant bestaat niet', 10, 1)
RETURN
END
IF EXISTS (SELECT * FROM orders WHERE customerid = @custno) BEGIN
RAISERROR ('Klant heeft orders', 10, 1)
RETURN
END
DELETE FROM customers WHERE customerid = @custno
```

### Gebruik in MS SQL Server

**-exec *procedure* _value_**

## Functies

1. Standaard SQL Functies
2. Niet standaard built-in functions:
..* SQL Server: datediff, substring, len, round,... ( [library](http://technet.microsoft.com/en-us/library/ms174318.aspx) )
3. User defined functies

### User defined functies

Manier om naast views en CTE's SELECTS te **hergebruiken**, nu zelfs met **parameters**
Voorbeeld:

```SQL
CREATE FUNCTION GetAge
(
@birthdate AS DATE,
@eventdate AS DATE
)
RETURNS INT
AS
BEGIN
RETURN
DATEDIFF(year, @birthdate, @eventdate)
- CASE WHEN 100 * MONTH(@eventdate) + DAY(@eventdate)
< 100 * MONTH(@birthdate) + DAY(@birthdate)
THEN 1 ELSE 0
END;
END;
```

Gebruik:

```SQL
select lastname,firstname,birthdate,hiredate,
dbo.GetAge(birthdate,getdate()) as leeftijd,
dbo.GetAge(hiredate,getdate()) as dienstjaren,
dbo.GetAge(birthdate,hiredate) as
LeeftijdIndienttreding
from Employees
```

### Inline Table Valued Function
Geef per product klasse het goedkoopste product dat meer kost dan X€ en een product die die prijs heeft.

```SQL
create function minimum (@grens int) returns table
as
return
select productclassid klasse,min(price) prijs
from product p where price >= @grens
group by productclassid;
-- gebruik:
select klasse,prijs,
(select top 1 productid from product where
productclassid=klasse and price=prijs)
from minimum(0);
```

### Voordelen PSM
1. Code modularisatie.
    * Reduceren redundante code
    * Minder onderhoud bij schema wijzigingen
    * Vaak voor CRUD operaties
2. Customisatie van "gesloten" systemen zoals ERP: via stored procedures en triggers kan men "ingrijpen".
3. Security:
    * rechtstreekse query's op tabellen uitsluiten
    * via SP's vastleggen wat kan en wat niet
    * vermijd SQL-injection door gebruik input-parameters.
4. Centrale administratie van (delen van) DB-code.

### Nadelen PSM
1. Beperkte schaalbaarheid: business logica en db verwerking op zelfde server kan tot bottle-necks leiden.
2. Vendor lock-in
    * Syntax = Geen standaard
    * Portabiliteit heeft zijn prijs: vb built-in functions niet gebruiken
3. Twee programmeertalen:
    1. Java/.NET/ ...
    2. SD / UDF
4. Twee Debuggingomgevingen
5. SD/UDF: Beperkte OO-ondersteuning.

### Vuistregels:
1. Vermijd PSM voor grotere business logica
2. Gebruik PSM vooral voor technische zaken:
    * Validatie / Logging / Auditing
3. Maak keuze portabiliteit / Vendor Lock-in in overleg met business en corporate IT policies

## Stored Procedure
---
> **Een stored procedure** is een benoemde verzameling SQL en control-of-flow opdrachten (programma) die opgeslagen wordt als een database object.

Analoog aan procedures uit andere talen:
* Kan worden aangeroepen vanuit: programme, trigger of stored procedure
* Wordt opgeslagen in de catalagus.
* Accepteer in- en uitvoer parameters
* Retourneert statusinformatie over de al dan niet correct uitvoering van de stored procedure.
* Bevat taken die vaak worden uitgevoerd.

## Variabelen
---

### Lokale variabelen
**Declareren:**
de naam wordt steeds voorafgegaan door **@**
```SQL
DECLARE @variable_name1 data_type [, @variable_name2data_type ...]
```

**Toekennen van waarde aan variabele:**
```SQL
SET @variable_name = expression
SELECT @variable_name = column_specification
```
Set en select zijn gelijkaardig, maar **SET** is **ANSI** standaard.

Met **SELECT** kan je wel **meerdere variabelen in 1 keer** een waarde geven. (2e SELECT hieronder)
```SQL
SET @max = (select max(invoiceTotal) from invoices)
SELECT @max = max(invoiceTotal) from invoices

SELECT @max = max(invoiceTotal), @nrOfInvoices = count(*) from invoices

PRINT string_expression
```
Als alternatief voor print kan je ook **select** gebruiken:
*SELECT string + variabele*

```SQL
DECLARE @lname varchar(40), @rijtelling int
SET @lname = ‘Ringer’
SELECT @rijtelling = count(*)
FROM Authors
WHERE au_lname=@lname
PRINT ‘Aantal werknemers met naam ‘ + @lname + ‘ = ‘ +
str(@rijtelling)
```

## Transact SQL
---
### Operatoren in Transact SQL
* Rekenkundige operatoren
    * -- , +, *, /, % (Modulo)
* Vergelijkings operatoren
    * --, <, >, =, ..., IS NULL, LIKE, BETWEEN, IN
* Alfanumerieke operatoren
    * +(String Concatenatie)    
* Logische operatoren
    * AND, OR, NOT   
* Functies
    * Numerieke: ROUND, POWER, COS, ...
    * Datum/Tijd: DATEADD, DATEDIFF, GETDATE, DAY, MONTH...
    * Alfanumerieke: LEFT, RIGHT, LTRIM, RTRIM, TRIM, REPLACE, UPPER, LOWER, ...
    *  Systeemfuncties: CAST, CONVERT, ISNUMERIC, ISDATE, PRINT, ...

## Control flow in Transact SQL
Programma verloop kan je bepalen via:

**Instructie niveau:**
```SQL
    BEGIN ... END
    IF ... ELSE
    WHILE... (BREAK / CONTINUE)
    RETURN
```
**Rij-niveau:**
```SQL
    CASE ... END
```
### Commentaar
**Inline commentaar:**

        -- commentaar

**Block commentaar:**

        /* commentaar */

        /*
        ** commentaar
        */

### Foutafhandeling met Transact SQL
* **RETURN** : Onmiddelijke beëindiging van de batch of procedure.
* **@@error** : Bevat de fout van de laatste utigevoerde instructie, indien ok value = 0.
* **RAISERROR** : Retourneren van een user defined fout of systeemfout

## CURSORS
---
> SQL statements werken standaard met een complete resultaatset en niet
met individuele rijen. Cursors laten toe om met individuele rijen te werken.

**Een cursor is** een database object die wijst naar een resultaatset. Via de
cursor geef je aan met welke rij uit de resultaatset je wenst te werken

**5 belangrijke statements:**
1.   **DECLARE CURSOR** : Creëert en definieert cursor
2.   **OPEN** : Opent de gedeclareerde cursor
3.   **FETCH** : Haalt 1 rij op
4.  **CLOSE** : Sluit de cursor
5.  **DEALLOCATE** : Verwijdert de cursor definitie

```SQL
1.  DECLARE <cursor_name> [INSENSITIVE][SCROLL] CURSOR FOR
    <SELECT_statement>
    [FOR {READ ONLY | UPDATE[OF <column list>]}]

2.  OPEN <cursor name>

3.  FETCH [NEXT | PRIOR | FIRST | LAST | {ABSOLUTE | RELATIVE
    <row number>}]
    FROM <cursor name>  
    [INTO <variable name>[,...<last variable name>]]

4.  CLOSE <cursor name>

5.  DEALLOCATE <cursor name>
```

### Overzicht voorbeeld CURSORS:
```SQL
    DECLARE @au_lname varchar(40), @au_fname varchar(20)
    DECLARE authors_cursor CURSOR FOR
    SELECT au_lname, au_fname FROM authors
    WHERE au_lname LIKE ‘B%’
    ORDER BY au_lname, au_fname

    OPEN authors_cursor

    FETCH NEXT FROM authors_cursor
    INTO @au_lname, @au_fname
    WHILE @@FETCH_STATUS = 0
        BEGIN
            PRINT ‘Author: ‘ + @au_fname + ‘ ‘ + @au_lname
            FETCH NEXT FROM authors_cursor
                INTO @au_lname, @au_fname
        END
    CLOSE authors_cursor
    DEALLOCATE authors_cursor
```
### Geavanceerd voorbeeld CURSORS:
```SQL
    DECLARE @au_lname varchar(40)
    DECLARE @au_fname varchar(20), @au_id id
    DECLARE @message varchar(50)
    DECLARE @title varchar(80)

    DECLARE authors_cursor CURSOR FOR
    SELECT au_id, au_fname, au_lname
    FROM authors
    WHERE state = 'UT'
    ORDER BY au_id

    OPEN authors_cursor

    FETCH NEXT FROM authors_cursor INTO @au_id, @au_fname, @au_lname
        WHILE @@FETCH_STATUS = 0
            BEGIN
                PRINT ' '
                SELECT @message = '----- Books by Author:
                    ' + @au_fname + ' ' + @au_lname
                PRINT @message
                FETCH NEXT FROM authors_cursor INTO @au_id, @au_fname, @au_lname
            END
    CLOSE authors_cursor
    DEALLOCATE authors_cursor
```

```SQL
DECLARE @au_lname varchar(40)
DECLARE @au_fname varchar(20), @au_id id
DECLARE @message varchar(50)
DECLARE @title varchar(80)
DECLARE authors_cursor CURSOR FOR
SELECT au_id, au_fname, au_lname
FROM authors
WHERE state = 'UT'
ORDER BY au_id
OPEN authors_cursor
FETCH NEXT FROM authors_cursor
INTO @au_id, @au_fname, @au_lname
    WHILE @@FETCH_STATUS = 0 BEGIN
        PRINT ' '
        SELECT @message = '----- Books by Author:'
                + @au_fname + ' ' + @au_lname
        PRINT @message
    -- Declare an inner cursor based
    -- on au_id from the outer cursor.
    DECLARE titles_cursor CURSOR FOR
    SELECT t.title
    FROM titleauthor ta join titles t
    ON ta.title_id = t.title_id AND
    ta.au_id = @au_id -- variable value
    from the outer cursor

    OPEN titles_cursor

    FETCH NEXT FROM titles_cursor INTO @title
    IF @@FETCH_STATUS <> 0
    PRINT ' <<No Books>>'
    WHILE @@FETCH_STATUS = 0 BEGIN
        SELECT @message = ' ' + @title
        PRINT @message
        FETCH NEXT FROM titles_cursor INTO
        @title
    END

    CLOSE titles_cursor
    DEALLOCATE titles_cursor
    -- Get the next author.

    FETCH NEXT FROM authors_cursor
    INTO @au_id, @au_fname, @au_lname
END -- outer while loop
CLOSE authors_cursor
DEALLOCATE authors_cursor
```
### Update en delete via CURSORS
```SQL
DELETE FROM <table name>
WHERE CURRENT OF <cursor name>

UPDATE <table name>
SET ...
WHERE CURRENT OF <cursor name>
```
### Creatie van SP (Stored Procedure)
```SQL
CREATE PROCEDURE <proc_name> [parameter declaratie]
AS
<sql_statements>
```

### Wijzigen, verwijderen en uitvoeren van SP
```SQL
-- WIJZIGEN
ALTER PROCEDURE <proc_name> [parameter declaratie]
AS
<sql_statements>

-- VERWIJDEREN
DROP PROCEDURE <proc_name>

-- UITVOEREN
EXECUTE <proc_name> [parameters]

/*
** bij eerste uitvoering: compilatie en optimalisatie
** hercompilatie forceren: wenselijk bij wijzigingen aan structuur databank
*/
    execute uspOrdersSelectAll with recompile
    execute sp_recompile uspOrdersSelectAll
```

### Return waarde van een SP
Bij uitvoering keer een SP een **return waarde** terug, deze waarde is een int met default waarde 0

**Return Statement:** uitvoering van SP wordt gestopt, laat toe om de return waarde te bepalen.

### Voorbeeld gebruik van return waarde:
```SQL
CREATE PROCEDURE usp_OrdersSelectAll AS
select * from orders
return @@ROWCOUNT
-- creatie van een SP met expliciete return-waarde
DECLARE @returnCode int
EXEC @returnCode = usp_OrdersSelectAll
PRINT ‘Er zijn ‘ + str(@returnCode) + ‘ records.’
-- gebruik SP met return-waarde
```

### SP met parameters
Aanroepen van de SP:
*   Voorzie steeds keyword **OUTPUT** voor outputs parameters.
*   2 manieten om de actuele parameters door te geven:
    1. Gebruik formele parmater naam (volgorde onbelangrijk)
    2. Positioneel

```SQL
    DECLARE @aantal int
    EXECUTE usp_OrdersSelectAllForCustomer
    @customerID = ‘ALFKI’,
    @count = @aantal OUTPUT
    PRINT @aantal
    -- param doorgeven via expliciet gebruik formele param-namen
    DECLARE @aantal int
    EXEC usp_OrdersSelectAllForCustomer 'ALFKI', @aantal OUTPUT
    PRINT @aantal
    -- parameters positioneel doorgeven
```

## Error Handling
---
**@@error** is en systeemfunctie die het foutnummer bevat van de laatst uitgevoerde opdracht. De waarde 0 wijst op succesvolle uitvoering.
```SQL
CREATE PROCEDURE usp_ProductsInsert
    @productName nvarchar(40),
    @categoryID int,
    @unitprice money
AS
INSERT INTO products(productname, categoryID, unitprice)
VALUES (@productname, @categoryID, @unitprice)
IF @@error = 515
    PRINT 'ERROR! productname is NULL.'
ELSE IF @@error = 547
        PRINT 'ERROR! CategoryID is not in CATEGORY table.'
     ELSE PRINT 'ERROR! Unable to add new product.'
RETURN @@error
-- gebruik van @@error om specifieke foutboodschappen te genereren en als returnwaarde
```

Alle foutboodschappen zitten in de systeemtabel **sysmessages**:
```SQL
    SELECT * FROM master.dbo.sysmessages
    WHERE error = @@ERROR
```
Eigen foutboodschappen genereren kan via **raiserror**.
```SQL
    raiserror(msg, severity, state)
    -- Message = Foutboodschap
    -- Severity = Waarde tussen 0 en 18
    -- State = waarde tussen 1 en 127
```

Voorbeeld andere systeemfunctie **@@rowcount**
*   Aantal aangepaste/geselecteerde rijen door de laatst uitgevoerde instructie.

### Exception handling:
```SQL
CREATE PROCEDURE dbo.TestError3 (@e int OUTPUT)
AS
BEGIN
SET @e = 0;
BEGIN TRY
    INSERT INTO Person.Address (AddressID) VALUES (1);
END TRY
BEGIN CATCH
    SET @e = ERROR_NUMBER();
    PRINT N'Error Procedure = ' + ERROR_PROCEDURE();
    PRINT N'Error Message = ' + ERROR_MESSAGE();
END CATCH
END

GO
DECLARE @e int;
EXEC dbo.TestError3 @e OUTPUT;
PRINT N'Error code = ' + CAST(@e AS nvarchar(10));
```

**Catch block functies**
| Functie | |
|--| --- |
| ERROR _ LINE() | Lijn nummer waar exception optrad |
| ERROR_MESSAGE() | Foutboodschap |
| ERROR_PROCEDURE()| SP waar fout optrad|
| ERROR_NUMBER() | Foutnummer |
| ERROR_SEVERITY() | Severity level v/d fout |

## Triggers
---
> **Een trigger**: een hoeveelheid code, bestaande uit
procedurele en declaratieve instructies, die opgeslagen
is in de catalogus en die geactiveerd wordt door het
DBMS indien een bepaalde operatie op de database wordt
uitgevoerd en indien een bepaalde conditie voldaan is

Gelijkaardig aan SP maar **kan niet expliciet worden opgeroepen**
* Een trigger wordt automatisch door het DBMS aangeroepen bij bepaalde
DML en DDL opdrachten

    *   **DML trigger**: bij een **insert, update of delete** voor een tabel of view waar de
trigger aan is gekoppeld (wij beperken ons verder in deze cursus tot dit soort triggers).
    Kunnen geactiverd worden: **before\*, instead of, after **( = na IUD verwerkt en voor COMMIT) de IUD opdracht. *Niet ondersteund in SQL Server
    *    **DDL trigger**: bijvoorbeeld bij een **create, alter of drop** van een tabel waar een
trigger aan gekoppeld is

## Procedurele database objecten:
---
### Procedurele programma's
| soort |  opgeslaan als | uitvoering | ondersteunt parameters |
| --- | --- | --- | --- |
|script | apart bestand |client tool (bv. Management Studio) |nee|
|stored procedure|database object |via applicatie of SQLscript| ja |
|user defined function |database object |via applicatie of SQL script | ja|
|trigger |database object |via DML statement |nee|

### Waarvoor Triggers gebruiken?
1. validatie van data en complexe constraints
    * een werknemer mag aan niet meer dan 10 projecten verbonden zijn
    * een werknemer kan enkel verbonden zijn aan een project dat toegewezen is aan zijn
departement
2. automatische generatie van waarden
    * wanneer een werknemer wordt toegewezen aan een project wordt de default waarde voor de
maandelijkse bonus die hieraan verbonden is automatisch ingevuld adhv de project prioriteit
en zijn jobcategorie
3. ondersteuning voor alerts
    * automatisch een e-mail sturen wanneer een werknemer van een project gehaald wordt
4. bijhouden van audits
    * automatisch bijhouden wie wat doet en met welke tabel
5.  replicatie en gecontroleerd bijhouden van redundante data
    * bijhouden van aantal projecten toegekend aan een werknemer in de werknemer tabel
    * automatisch opvullen van datawarehouse-tabellen voor rapportering (zie hoofdstuk
"Datawarehousing")

### Voordelen en nadelen
**Grote voordeel:** mogelijkheid om **functionaliteit in de DB** op te slaan en **consistent uit te voeren** bij elke wijziging aan de DB.

**Dus:**
*   Geen redundante code, *functionaliteit zit op 1 plaats in de DB*
*   Wijzigingen aanbrengen wordt eenvoudig, *written & tested once door ervaren DBA*
*   Veiligheid, *triggers zitten in de DB dus kunnen alle beveilingsregels volgen*
*   Meer processing power, *voor DBMS en DB*
*   Past in client-server model, *1 aanroep naar db-server waar veel kan gebeuren zonder dat verdere communicatie vereist is*

**Nadelen**
* Complexiteit, *DB ontwerp, implementatie en onderhoud is complexer door verschuiven van functionaliteit van applicatie naar DB +  Moeilijk te debuggen.*
* Verborgen functionaliteit, *gebruiker kan confronted worden met onverwachte neveneffecten trigger. Triggers kunnen ook cascaderen; bij het ontwerp van de trigger is dit niet altijd duidelijk te voorspellen.*
* Performantie, *bij elke wijziging aan DB moet trigger conditie geëvalueerd worden*
* Portabiliteit, *je pint je vast op het dialect van DBMS*

### Vergelijking trigger functionaliteit
|   | Oracle  | MS SQL Server  | MySQL |
| --- | :---:| :---: | :---: |
| BEFORE *bij validatie* | X | simuleren via AFTER-Trigger+ROLLBACK | X |
| AFTER | X | X | X |
| INSTEAD OF *bij views*  | X | X | X |
| FOR EACH STATEMENT | X | DEFAULT | DEFAULT |
| FOR EACH ROW  | **X:** *toegang tot waarden voor/na via :NEW/:OLD* vars| **N/A:** *toegang to waarden voor/na per rij via deleted/inserted pseudo-tabellen* | **X:** *toegang tot waarden voor/na via NEW/OLD vars*|
| TRANSACTIES | COMMIT/ROLLBACK niet toegestaan | COMMIT/ROLLBACK toegestaan | COMMIT/ROLLBACK niet toegestaan |
### "Virtuele" tabellen bij Triggers
2 tijdelijke tabellen
* **Deleted Tabel** : bevat kopies van de gewijzigde (update) verwijderde (delete) rijen.
    * Tijdens de update of delete worden rijen van de **trigger tabel** gekopieerd naar de **deleted tabel**
    * Deze twee tabellen hebben geen gemeenschappelijke rijen
* **Inserted Tabel** : bevat kopies van gewijzigde (update) of ingevoegde (insert) rijen
    * tijdens een update of insert wordt een kopie van elke rij die gewijzigd of toegevoegd wordt in de **trigger tabel** geplaatst in de **inserted tabel**
    * deze twee tabellen hebben dus enkel gemeenschappelijke rijen

### Creatie van een after trigger
Enkel mogelijk door SysAdmin of dbo en is **gebonden aan 1 tabel**; niet aan een view.

Wordt uitgevoerd na:
1. na uitvoering van de triggering actie, i.e. *insert, update, delete*
2. Na logging van de update in de tijdelijke trigger tabellen inserted en deleted
3. Voor de commit

```SQL
    CREATE TRIGGER naam
    ON tabel
    FOR [INSERT, UPDATE, DELETE]
    AS ...
    vereenvoudigde syntax voor
    een after trigger
```

## Voorbeelden Triggers
---
### Insert after-trigger
Triggering instructie is een **insert** instructie
* **Inserted:**  logische tabel waarvan kolomnamen gelijk zijn an die van triggering tabel en die een copy bevat van de rij(en) die werden toegevoegd.
* **Merk op:** bij triggering door een INSERT-SELECT statement kunnen bij één INSERT meerdere records toegevoegd worden. De trigger zal dan slechts 1x uitgevoerd worden, maar voor elke record een mutatie record aanmaken.
```SQL
    CREATE TRIGGER insert_speler ON SPELERS FOR insert
    AS
        INSERT INTO mutatie (gebruiker, mut_tijdstip, mut_snr, mut_type, mut_snr_new)
        SELECT user, getdate(), nul, 'i', spelersnr FROM inserted
    -- Automatisch bijwerken van de mutatie tabel bij toevoegen van speler
```
### Delete after-trigger
Triggering instructie is een **delete** instructie:
* **Deleted** : logische tabel waarvan kolomnamen gelijk zijn aan die van de triggering tabel en die een copy bevat van de rij(en) die werden verwijderd.
* We maken gebruik van onderstaande stored procedure, die we zullen hergebruiken bij de update-trigger.
```SQL
    CREATE PROCEDURE usp_mutatie_insert
        (@MSNR SMALLINT,
        @MTYPE CHAR(1),
        @MSNR_NEW SMALLINT)
    AS
        INSERT INTO mutatie (gebruiker, mut_tijdstip, mut_snr,mut_type, mut_snr_new)
        VALUES (user, getdate() ,@MSNR, @MTYPE, @MSNR_NEW);

-- automatisch bijwerken van de mutatie tabel bij verwijderen van één of meerdere spelers
    CREATE TRIGGER delete_speler
        ON spelers FOR delete
    AS
        DECLARE @old_snr smallint
        DECLARE del_cursor CURSOR FOR SELECT spelersnr FROM deleted
        OPEN del_cursor
        FETCH NEXT FROM del_cursor INTO @old_snr
        WHILE @@FETCH_STATUS = 0
        BEGIN
            EXEC usp_mutatie_insert @old_snr,'D',null
            FETCH NEXT FROM del_cursor INTO @old_snr
        END
        CLOSE del_cursor
        DEALLOCATE del_cursor
    -- Activatie van de trigger:
        delete from spelers where spelersnr > 115;
```
### Update after-trigger
Triggering instructie is een **update** instructie
```SQL
CREATE TRIGGER update_speler ON spelers FOR update
AS
DECLARE @old_snr smallint, @new_snr smallint

DECLARE before_cursor CURSOR FOR SELECT spelersnr FROM deleted
ORDER BY spelersnr

DECLARE after_cursor CURSOR FOR SELECT spelersnr FROM inserted
ORDER BY spelersnr

OPEN before_cursor
OPEN after_cursor

FETCH NEXT FROM before_cursor INTO @old_snr
FETCH NEXT FROM after_cursor INTO @new_snr

WHILE @@FETCH_STATUS = 0
BEGIN
    EXEC usp_mutatie_insert @old_snr,'U',@new_snr
    FETCH NEXT FROM before_cursor INTO @old_snr
    FETCH NEXT FROM after_cursor INTO @new_snr
END

DEALLOCATE before_cursor
DEALLOCATE after_cursor

-- Activatie van de trigger
update spelers set jaartoe=jaartoe + 20;
-- OF:
update spelers set spelersnr = spelersnr + 100;
```
### De IF UPDATE clausule
Voorwaardelijke uitvoering van triggers: uitvoering enkel als een specifieke kolom vernoemd wordt in een update of insert
```SQL
CREATE TRIGGER update_speler ON spelers FOR update
AS
DECLARE @old_snr smallint, @new_snr smallint

DECLARE before_cursor CURSOR FOR SELECT spelersnr FROM deleted ORDER BY spelersnr
OPEN before_cursor
IF update(spelersnr)
BEGIN
    DECLARE after_cursor CURSOR FOR SELECT spelersnr FROM inserted ORDER BY spelersnr
    OPEN after_cursor
END

FETCH NEXT FROM before_cursor INTO @old_snr
IF update(spelersnr)
    FETCH NEXT FROM after_cursor INTO @new_snr
ELSE
    SET @new_snr = @old_snr

WHILE @@FETCH_STATUS = 0
BEGIN
    EXEC usp_mutatie_insert @old_snr,'U',@new_snr
    FETCH NEXT FROM before_cursor INTO @old_snr
    IF update(spelersnr)
        FETCH NEXT FROM after_cursor INTO @new_snr
    ELSE
        SET @new_snr = @old_snr
END

DEALLOCATE before_cursor
IF update(spelersnr)
DEALLOCATE after_cursor
```

### Andere trigger condities
Ook normale condities kunnen in triggers
```SQL
IF datepart(hour, getdate()) >= 9
AND datepart(hour, getdate()) < 19
    BEGIN ... END
-- enkel tussen 9:00 en 19:00 uur is de trigger actief…

IF USER IN ('JAN', 'PETER', 'MARK')
    BEGIN...END
-- enkel voor specifieke gebruikers de triggercode uitvoeren …
```

### Voorbeeld: gecontroleerd bijhouden van redundante data
* Veronderstel dat de SPELERS-tabel een kolom SOM_BOETES bevat **(redundantie)**. Deze kolom bevat voor elke speler de som van zijn of haar boetes. Nu willen we triggers creëren die automatisch de waarden in deze kolom bijhouden **(integriteit)** . Hiervoor moeten we volgende triggers creëren
* Creëer zelf de update en delete triggers
```SQL
CREATE TRIGGER boete_insert ON boetes
FOR INSERT
AS
    DECLARE @boete smallint, @snr smallint
    SELECT @boete = bedrag, @snr = spelersnr from inserted
    update speler set som_boetes = som_boetes + @boete
    WHERE spelersnr = @snr
```
Opmerking: deze trigger werkt enkel indien de inserts gegarandeerd één per
één gebeuren  wegens:
```SQL
    SELECT @boete = bedrag, @snr = spelersnr FROM inserted)
```

Mogelijke aanpak voor de update en delete triggers:
```SQL
CREATE TRIGGER boete_del_upd ON boetes
FOR UPDATE, DELETE
AS
    DECLARE @boete as smallint, @snr as smallint
    SELECT @snr = spelersnr from deleted
    SELECT @boete = SUM(bedrag) FROM boetes WHERE spelersnr = @snr
    UPDATE spelers SET som_boetes = @boete
    WHERE spelersnr = @snr
```
**Opmerking:** deze trigger werkt enkel indien de update of deletes gegarandeerd één per één gebeuren wegens:
```SQL
SELECT @snr = spelersnr from deleted
```
Kan deze trigger ook gebruikt worden voor insert?

### Opmerkingen
Naast verschillen in syntax; verschillen de SQL-producten tevens voor wat de **functionaliteit van triggers.** Enkele interessante vragen hierbij:
* Mogen voor één tabel en een bepaalde mutatie meerdere triggers
gedefinieerd worden?
    *   **volgordeproblemen die invloed kunnen hebben op het resultaat**
* Kan de verwerking van een instructie die behoort tot een trigger-actie
leiden tot het activeren van een andere trigger?
    * **één mutatie in een applicatie kan leiden tot een waterval van mutaties, recursie**
* Wanneer wordt nu precies een trigger-actie verwerkt?
    * **direct na de mutatie of pas voor de COMMIT-instructie**
* Mogen triggers gedefinieerd worden op catalogustabellen?
    * **je kan geen trigger instellen op een catalogustabel**  

## OOBDMS en ORDBMS
---
### Inleiding tot ORDBMS

* relationele DBMS is dominant
    * markt van ong. US$10 miljard/jaar (US$25 miljard met tools e.d.)
* OO DBMS markt is klein
    * kwam snel op tussen 1995 en 2000, maar is daarna gestagneerd.
    * er wordt niet verwacht dat dit de markt van RDBMS zal overnemen
* RDBMS verkopers zijn zich bewust van
    * de mogelijkheden van OODBMS
    * de mogelijke negatieve impact op hun product
    * de nood aan extra functionaliteit in hun producten om geavanceerde DB applicaties te ontwikkelen
* RDBMS verkopers
    * geloven dat het relationeel model kan uitgebreid worden zodat complexere applicaties kunnen ontwikkeld worden
    * geloven dat deze applicaties nog performant genoeg zullen zijn
    * voegen OO kenmerken toe aan het relationeel model

 **Enkele OO uitbreidingen**

1. gebruiker gedefinieerde types    
2.  encapsulatie
3. overerving
4. polymorfisme
5. dynamische method binding
6. complexe objecten
7. object identiteit

### Realiteit
* er is geen standaard 'extended' relationeel model
* alle modellen
    * hebben als basis relationele tabellen en query language
    * hebben 1 of ander concept van object
    * kunnen methodes opslaan
* ORDBMS behouden de opgebouwde kennis rond RDBMS
* aantrekkelijk alternatief
    * sommigen voorspellen dat het aandeel van ORDBMS op de DB markt meer dan 50%
groter zal zijn dan die van RDBMS

### Stonebraker's View
![alt text](http://puu.sh/poi0k/a7890f8b7b.jpg "Stonebrakers View")
### Voordelen van ORDBMS
* Oplossing voor de **grote zwaktes van het relationele model**
    * zwakke representatie van 'real-world' entiteiten
    * semantische overloading
    	* 'relatie' is enige constructie; hoe maak je het verschil tussen de relaties 'heeft', 'bevat', 'beheert',
    …
    * zwakke ondersteuning voor integriteit en andere constraints
    * homogene data structuur
    	* atomaire waarden, geen samengestelde waarden
    * beperkte operaties
    	* geen zelf gedefinieerde operaties
    * geen recursie
    * impedance mismatch (zie verder)
* **hergebruik en delen**
    * uitbreiden van de server functionaliteit om functionaliteit centraal uit te voeren
    * de centraal gedefinieerde functionaliteit kan nu gebruikt worden door alle applicaties
	    * voorbeeld: voor applicaties die met punten en lijnen werken bevat de server de functionaliteit om
afstanden te berekenen, dit hoeft nu niet in elke applicatie te gebeuren
* met als gevolg een **hogere productiviteit**
* behoud van **expertise en kennis** van RDBMS
**backwards compatibility**
    * mogelijkheid om als business geleidelijke overstap te maken van RDBMS naar
ORDBMS
	    * bij OODBMS is deze geleidelijke overschakeling onmogelijk

### Nadelen van ORDBMS
* **complexiteit** van het OR model
	* **eenvoud en puurheid** van het relationeel model gaat verloren
* verhoogde **kosten**
* enkel een klein deel van de applicaties kan gebruik maken van de object
extensies
* het is **niet puur OO**
	* OO applicaties zijn niet zo data gecentreerd
	* in pure OO zijn objects first class citizens, geen extensies van het relationele model
* **SQL is te complex** geworden

### Impedance mismatch
![alt text](http://puu.sh/poiC8/d53aca713e.jpg "Impendance mismatch")

**Alternatief voor OO BDMS of OR DBMS:**
* OR-mapping, vb.
    * .NET: Entity Framework, NHibernate
    * JPA: Java Persistence API
    * Java: Hibernate

## User Defined Types
---
### UDT
* ~abstract data types
* kunnen gebruikt worden als built-in types
* 2 soorten
	* distinct types
	* structured types
* Ondanks de SQL:2008-standaard, toch heel
veel verschillen tussen DMBS'en
* In deze cursus: enkel bestaande syntax in
grote DBMS'en.

### Distinct type
Is gebasseerd op een **basis type** en laat toe **onderscheid** aan te brengen tussen anders gelijke basistypes.

Voorbeeld (MS-SQL Server):
```SQL
CREATE TYPE IDType FROM INT NOT NULL;
CREATE TYPE NameType FROM NVARCHAR(50) NOT NULL;
-- NameType = Distinct Type
-- NVARCHAR(50) = Het basistype waarvan het DT is afgeleid
```
> Het nieuwe type wordt opgeslagen in de datbank

>Het distinct type kan nu gebruikt worden net zoals een built-in datatype

Gebruik:
![alt text](http://puu.sh/pojiE/d50fbb60b1.png "Gebruik Distinct Types")

### Structured Types
1. Table types
2. Abstract data types (cf. OO)

### Table Types
**MS SQL Server**
```SQL
CREATE TYPE TotaalOrdersPerJaar AS TABLE
(
    jaar INT NOT NULL PRIMARY KEY,
    hoeveelheid INT NOT NULL
);

DECLARE @mijnordersperjaar AS TotaalOrdersPerJaar;

INSERT INTO @mijnordersperjaar
select year(orderdate) as jaar,round(sum(unitprice*quantity*(1-
discount)),2)
from orders o join orderdetails od
on o.OrderID=od.orderid
group by year(orderdate);

SELECT * FROM @mijnordersperjaar;

-- Ook: Rechtstreeks variabele declareren:
DECLARE @mijnordersperjaar AS
TABLE
(
    jaar INT NOT NULL PRIMARY KEY,
    hoeveelheid INT NOT NULL
);

```
###### Tables Types en Variables
* table types worden opgeslagen in de DB
* table variables bestaan slechts voor de duur van de batch (sequentie van statements)

Voordelen gebruik table variables:

* kortere en overzichtelijker code
* table type variabelen kunnen ook als parameter doorgegeven worden aan stored procedure en functions

### Abstract Data Types
* in het algemeen bevat een Abstract Data Type
    * definitie van **attributen**
    * definitie van **routines (methodes)**
* benamingen:
    * abstract data types (ADT)
    * user defined types (UDT)
    * object types
* = object-relationele aspecten

Voorbeeld: (Oracle, niet beschikbaar in MS SQL Server)
```SQL
CREATE TYPE customer_typ_demo AS OBJECT
    ( customer_id NUMBER(6)
    , cust_first_name VARCHAR2(20)
    , cust_last_name VARCHAR2(20)
    , cust_address CUST_ADDRESS_TYP
    , phone_numbers PHONE_LIST_TYP
    , nls_language VARCHAR2(3)
    , nls_territory VARCHAR2(30)
    , credit_limit NUMBER(9,2)
    , cust_email VARCHAR2(30)
    , cust_orders ORDER_LIST_TYP
) ;
```
### Subtypes, supertypes en methodes
Via **UNDER** kunnen **subtypes/supertype** verbanden gedefinieerd worden.
* geen multiple inheritance
* subtype erft
	* attributen
	* methodes
* het subtype kan
	* uitgebreid worden via definitie nieuwe attributen/methodes
	* gespecialiseerd worden via overloading
* een supertype kan altijd door zijn subtype
gesubstitueerd worden
* Men kan aan een ADT methodes toevoegen en deze implementeren in het CREATE TYPE BODY statement
```SQL
CREATE TYPE data_typ1 AS OBJECT
(
    year NUMBER,
    MEMBER FUNCTION prod(invent NUMBER) RETURN NUMBER
);

CREATE TYPE BODY data_typ1 IS
    MEMBER FUNCTION prod (invent NUMBER) RETURN NUMBER IS
        BEGIN
            RETURN (year + invent);
        END;
    END;
```
* Subtypes (cf. inheritance): onderstaand voorbeeld creëert het sybtype
corporate_customer_typ, afgeleid van het supertype customer_typ (zie vorige
slide) en voegt het account_mgr_id attribuut toe:
```SQL
CREATE TYPE corporate_customer_typ_demo
    UNDER customer_typ ( account_mgr_id NUMBER(6) );
```

### Structured Types
* NOT FINAL: Er kunnen nog subtypes gecreëerd worden
* FINAL (default): Er kunnen geen subtypes gecreëerd worden
```SQL
CREATE TYPE person_t AS OBJECT (name VARCHAR2(100), ssn NUMBER,
MEMBER FUNCTION get_name RETURN VARCHAR2(100)) NOT FINAL;

CREATE TYPE BODY person_t IS
MEMBER FUNCTION get_name() RETURN VARCHAR2(100) IS
        BEGIN
            RETURN name;
        END;
    END;
CREATE TYPE employee_t UNDER person_t (department_id NUMBER, salary NUMBER) NOT FINAL;

CREATE TYPE part_time_emp_t UNDER employee_t (num_hrs NUMBER)
FINAL;
```

Gebruik:
```SQL
CREATE TABLE contacts (
    contact person_t,
    contact_date DATE );
INSERT INTO contacts VALUES (
    person_t ('John Smith',12586982),
    to_date('24 Jun 2003', 'dd Mon YYYY'));
SELECT c.contact.get_name() FROM contacts c;
```
## Large Objects
---
> Een large object is een **datatype die een grote
hoeveelheid aan data kan vasthouden**
– tekstbestand, afbeelding, muziek, video, web-pagina

Soorten:
* **BLOB**
    * Binary Large OBject
* **CLOB**
    * Character Large OBject
* **NCLOB**
    * National Character Large OBject

**Probleem** met LOB's die nu in verschillende DBMS
gebruikt worden
* LOB's worden aanzien als byte-stream
* **DBMS** kan zelf **niets doen** met het LOB
    *  DBMS kent de inhoud, de interne structuur niet
    * nochtans is het LOB dikwijls heel gestructureerd
        * gestructureerde tekst, web-pagina, …
* nadelige transfer van LOB's op server naar client over het netwerk

Voorbeeld (MS SQL Server)

* BLOB data types:
    * varbinary(max) en image (image = deprecated)
* CLOB data types (ASCII data):
    * varchar(max)
* NCLOB data types (unicode data):
    * nvarchar(max)
```SQL
ALTER TABLE Employees
ADD cv varchar(max);
ALTER TABLE Employees
ADD foto varbinary(max);
```

# Hoofdstuk 6: Indexen en performantie

### Space Allocation Door SQL Server

* SQL Server gebruikt Random Access File
* Space allocation in *extents* en *pages*
    * Page = 8kB blok aaneensluitende space
    * Extent = 8 logisch opeenvolgende pages
        * Uniform extents: voor 1 db-object
        * mixed extents: kunnen gedeeld worden door 8db-objecten. (=tabellen, indexen)
* Nieuwe tabel of index: allocatie in mixed extent
* Uitbreiding > 8 pages: in uniform extent

### Table scan
> **Heap:** ongeordene verzameling van data-pages zonder clustered index (zie verder) (= Standaard opslag van een tabel)

Toegang via Index Allocation Map (IAM)
Table Scan: als een query pages ophaalt --> Dit is altijd te vermijden!

**Performantie issues met Heap**
* **Fragmentatie**: tabel staat verspreid over verschillende, niet-opeenvolgende pages
* **Forward pointers**: als een rij met variabele lengte (vb. varchar-velden) wordt geupdatet waardoor ze langer wordt, wordt een forward pointer ingevoegd naar een andere pagina enz... -> Table Scan wordt nog trager.

**--> Oplossing: Indexen**

### Indexen

**Wat?:**
een *geordende structuur* die op de records uit een tabel wordt gelegd en *snelle toegang biedt via boomstructuur* (B-tree)

**Waarom?:** kan *toegang tot data versnellen* en kan de *uniciteit van rijen* afdwingen

**Waarom niet?:** Indexen nemen opslagruimte in beslag *(overhead)* en ze kunnen de performantie ook doen dalen (bv vertragen van select en updates)

##### SQL Optimizer
> Is een **module in elk DBMS** die elk SQL commando dat naar de DB gestuurd wordt, analyseert en herformuleert en beslist op basis van statistische gegevens welke indexen zullen gebruikt worden.

### Clustered Index:
De fysische volgorde van de rijen in een tabel is deze van een clustered index. Elke tabel kan slechts 1 clustered index hebben, deze legt unieke waarden op en heeft primary key constraint.

**Voordelen t.o.v. Table Scan:**
* Dubbel gelinkte lijst zorgt voor volgorde bij het lezen van sequentiële records.
* Geen forward pointers

### Non-Clustered Index
Deze is de **default index** en werkt trager dan de clustered index. Meerdere per tabel mogelijk. Elke *leaf* bevat sleutel waarde en row locator. --> Naar positie in clustered index als die bestaat, anders naar heap.

Als een query meer velden nodig heeft dan aanweziginde index, dan moeten deze opgehaald worden uit de datapages.

Bij het lezen via non-clustered index:
* *Ofwel:* RID (Row ID) lookup = bookmark lookups naar de heap adhv RID.
* *Ofwel:* Key lookup = bookmark lookups naar een clustered index.

### Covering index

Als een non-clustered idnex een query niet volledig afdekt/covert dan moet SQL Server voor elke rij een lookup doen om de data op te halen.

> **Een covering index is** een *non-clustered* index die alle kolommen bevat die nodig zijn voor een bepaalde query.

Met SQL Server kan je extra komommen laten opnemen in de index (waarop niet geïndexeerd wordt)

**Covering index via include:** 
```SQL
CREATE NONCLUSTERED INDEX
[IX_Covering_Person_LastName_FirstName_MiddleName]
ON [Person].[Person]
(
    [LastName] ASC,
    [FirstName] ASC,
    [MiddleName] ASC
) INCLUDE (Title);
```

 ### 1 index met meerdere kolommen vs. meerdere indexen met 1 kolom?

```SQL
CREATE NONCLUSTERED INDEX IX_Person_LastName_FirstName ON
Person.Person (LastName, FirstName)
```
**Versus**
```SQL
CREATE NONCLUSTERED INDEX IX_Person_LastName ON
Person.Person (LastName)
-- en
CREATE NONCLUSTERED INDEX IX_Person_FirstName ON
Person.Person (FirstName)
```
**Regel in SQL Server:**
Bij query (bijv. where-clause) op enkel 2de en/of 3de
,
…veld van de index, wordt de index niet gebruikt.
Dus bij:
```SQL
SELECT LASTNAME,FIRSTNAME
FROM PERSON.PERSON
WHERE FIRSTNAME = 'Chris';
```
wordt de dubbele index niet gebruikt!
**Conclusie: kijk naar de meest gebruikte query's en
stem daar je indexen op af.**

### Creatie van indexen: algemene syntax

```SQL
CREATE [UNIQUE] [CLUSTERED | NONCLUSTERED] INDEX index_naam
ON tabel (kolom [,...n])
-- UNIQUE: geeft aan dat alle waarden in geïndexeerde kolom uniek moeten zijn.

-- voorbeeld
create index rijksregNr_Index on student(rijksregNr)
```


**Let op:**
1. Bij het definiëren van een index mag de tabel leeg of al gevuld zijn.
2. Kolommen met een **UNIQUE** index moeten de not null constraint bevatten.

### Verwijderen van indexen

```SQL
DROP INDEX table_name.index [,...n]

--voorbeeld
drop index student.rijksregNr_Index
```

### Wanneer gebruiken?

* Welke kolommen indexeren we **wel**?
	* primaire en unique kolommen worden automatisch geïndexeerd
	* vreemde sleutels vaak gebruikt in joins
	* kolommen vaak gebruikt in zoek condities of in joins
	* kolommen vaak gebruikt in ORDER BY clause
* Welke kolommen indexeren we **niet**?
	* kolommen die zelden voorkomen in queries
	* kolommen met een klein aantal mogelijke waarden (vb. geslacht)
	* kolommen in kleine tabellen
	* kolommen van het type bit, text of image


# Hoofdstuk 7: Transactiebeheer

### Inleiding

Een **DBMS** ondersteunt:
* Transaction Support
* Concurrency control services
* Recovery Services

En is bedoeld om de DB in een **betrouwbare** en **consistente** toestande te houden bij zowel software als hardwarde failures, en bij gelijktijdig gebruik door meerdere gebruikers.

### Transacties
---
> Een **transactie** is een actie, of opeenvolging van acties op een db die **1 logsich geheel** vormen.

**Actie:** lezen of wijzigen van de inhoud van de DB.

Een transactie wordt uitgevoerd door een gebruiker of door een programma.

Het is een logische hoeveelheid van werk: volledig programma, deel van een programma, enkel opdracht. (Programma = 1 of meerdere transacties, met daartussen niet-db verwerking.

##### Voorbeelden:
**Transactie:** updaten van het salaris van een werknemer.
![alt text](http://puu.sh/poRut/2310b75d44.png "Voorbeeld read/write")

Opeenvolging van 'high level' acties:
* Notatie: read(...) en write(...)
    * read: lees een data item uit de DB in een lokale variabele
    * write: schrijf de waarde van een lokale variabele weg naar de DB.
* Er zijn 2 DB operaties en niet 1.
---

**Transactie:** verwijderen van een werknemer en zijn properties aan een andere werknemer toekennen.

![alt text](http://puu.sh/poREW/a34962c08e.png "Voorbeeld verwijderen")

Deze transactie brengt de DB van de ene consistente toestand naar de andere consistente toestand. **! Tijdens** de transactie is de DB mogelijks in een inconsistente toestand.  (bv. een aantal properties staan reeds bij newStaffNo, de andere nof bij staffNo)

### Resultaat van een Transactie
##### Commited / Aborted
**Commited:**  
* de transactie kent een **succesvolle afloop**.  
* de transactie *commits* en de DB heeft een consistente toestand bereikt.
* commited transactie **kan nooit aborted worden**, wanneer de commited transactie vergissing blijkt, kan een andere compenserende transactie gebruikt worden.

**Aborted**
* de transactie is **niet succesvol**
* de transactie *aborts* en DB moet teruggebracht worden naar de consistente toestand waarin ze zich bevond voor de transactie werd gestart --> **rollback of undo**
* aborted transactie **kan herstart** worden: **na de rollback** kan een **restart** van de transactie gebeuren. Bij succesvolle uitvoering zal dit nu leiden tot een committed transactie.
*
### Aanduidingen
We moeten duidelijk maken aan het DMBS welke acties deel uitmaken van een transactie.

Keywords:
```SQL
- BEGIN TRANSACTION
-- soms impliciet de eerste DB actie

– COMMIT
– ROLLBACK
```
Zonder genige expliciete aanduiding kan het ganse programma beschouwd worden als 1 transactie.

### ACID Eigenschappen
**Atomicity:**
* de opdrahten van een transactie worden als één ondeelbaar geheel beschouwd. --> Alles of niets
*  DBMS verantwoordelijkheid: recovery subsysteem

**Consistency:**
* een transactie brengt de DB van de ene consistente toestand naar een andere consistente toestand.
* DBMS verantwoordelijheid én programma verantwoordelijkheid

**Isolation:**
* transacties worden onafhankelijk van elkaar uitgevoerd
* transacties mogen niet ongewenst interfereren met elkaar.
* transacties mogen geen uitkomsten aan andere transacties presenteren voor de commit.
* DBMS verantwoordelijkheid: concurrency-control subsysteem.

**Durability:**
* Na een COMMIT zijn de aangebrachte wijzigingen gegarandeerd permanent.
* Na een storing kunnen deze wijzigingen steeds worden gerecupureerd.
* DBMS verantwoordelijkheid: recovery subsystem.

### Databank Architectuur

![alt text](http://puu.sh/poTCC/55ec584625.jpg "Architectuur schema")

##### Transaction Subsysteem
1. **Transaction manager**
    * Coördineert transacties van programma's
2. **Scheduler**
    *  implementeert strategie voor concurrency control
    * aka lock manager bij een op locking gebaseerde strategie
    * doel: concurrency maximal
3. **Recovery manager**
    * bij failures brengt deze de db terug in consistente toestand (~vóór de transactie gestart werd)
4. **Buffer manager**
    *  verantwoordelijk voor efficiënte transfer van data tussen main memory en
disk storage

## Concurrency

### Concurrency control

> **Concurrency control**
is het **beheer van gelijktijdige** acties op de db zonder
dat ze interfereren met elkaar

Een DBMS laat toe dat **merdere transacties gelijktijdig toegang** hebben tot **gedeelde data**.
* Wanneer verschillende transacties **enkel data lezen** rijzen er **geen problemen**.
* Wanneer minstens 1 transactie **data wijzigt** kunnen **wel problemen** optreden.

**Concurrency** wordt gerealiseerd door de acties van verschillende transacties te verweven.

### Waarom concurrency control?

--> **Voorkom interferentie** wanneer twee of meerere transacties de databanke gelijktijdig aanspreken, en minstens 1 transactie data **wijzigt**

Hoewel twee transacties op zichzelf beschouwd correct kunnen zijn, kan het verweven van hun acties leiden tot een incorrect resultaat.

## Problemen bij concurrency

### Lost update

> Het **lost update probleem** treedt op wanneer
een schijnbaar compleet succesvolle update van een transactie
wordt **overschreven** door een andere transactie

### Uncommitted dependency

> Het **uncommitted dependency (of dirty read) probleem**
treedt op wanneer
een transactie de **intermediaire resultaten van een andere**,
uncommitted transactie, kan zien.

### Inconsistent Analysis

> Het **inconsistent analysis probleem** treedt op wanneer
een transactie **verschillende waarden uit de db leest**, terwijl een
andere transactie bezig is sommige van **deze waarden te
veranderen**

##### Gerelateerde problemen

* **Non-repeatable (of fuzzy) read**
	* twee keer lezen van eenzelfde item levert twee
verschillende waarden op
        * een transactie leest een data item, die het reeds eerder
uitlas, nogmaals uit en krijgt nu een andere waarde
* **Phantom read**
	* een transactie leest een aantal records die voldoen
aan een bepaalde voorwaarde
	* de transactie herhaalt dit later maar merkt nu dat er
ondertussen andere records zijn bijgekomen via een
andere transactie

### Serializibility & Recoverability

* **concurrency control protocol**
    * doel: transacties zo schedulen zodat ze niet interfereren
    * resultaat: voorgaande problemen treden niet op
* triviale oplossing
    * voer transacties serieel uit
    	* ten allen tijde is er maar 1 transactie in uitvoering
    	* groot nadeel: performantie (geen concurrency of parallellisme)
* **serializability**
    * bestaat er in die uitvoeringen van transacties te identificeren
    waarbij geen interferentie optreedt
    	* uitvoeringen die equivalent zijn aan een seriële uitvoering

### Schedule

> Een schedule is
**een sequentie van acties van een aantal concurrente
transacties** die de volgorde van de acties van de individuele
transacties respecteert

**Note:** Voor elke transactie in een schedule is de volgorde van de operaties in
de schedule, dezelfde als de volgorde van de operaties in de
transactie zelf

### Recoverability

* de databank zelf **schedules** laten opstellen die zonder
interferentieproblemen concurrent kunnen worden uitgevoerd
	* ze garanderen de **consistency en isolation** eigenschap van transacties
	* dit is in de veronderstelling dat geen enkele van de transacties in de
schedule faalt
* **recoverability**
	* wanneer een transactie faalt moeten we de effecten ongedaan kunnen maken
        * **atomiciteit** van transacties
	* wanneer een transactie commit zijn de veranderingen permanent
        * **durability** eigenschap van transacties


### Locking

> Locking is een methode gebruikt om **concurrente
toegang** tot data te beheren.

Wanneer een transactie toegang heeft tot de data kan er via een lock voor gezorgd worden dat **andere transacties toegang tot de data geweigerd** worden.

**Locking = Meest gebruikte manier** om de consistentie te garanderen

##### Basisregels locking

* Een transactie kan een **data item lezen of schrijven** enkel en alleen als het een **lock heeft verworven** voor dat data element, en het bovendien deze lock nog niet heeft vrijgegeven.

* Als een transactie een lock op een data item verwerft, dan moet het later ook **lock terug vrijgeven**

##### Soorten Locks

* Shared lock (S-lock)
    * Transactie met shared lock op data item kan dat data item *lezen* maar niet wijzigen
    * Meerdere transacties kunnen gelijktijdig een shared lock op eenzelfde data item bezitten.
* Exclusive lock (X-lock)
    * Transactie met exclusive lock op data item kan dat data item **lezen en wijzigen**
    * Op elk ogenblik kan hoogstens 1 transactie een exclusive lock op een data item hebben.

**_Opmerking_:** een data item kan verwijzen naar een veld van een record, maar ook naar een tabel,
of de volledige db - zie verder: granulariteit

##### Praktisch

* De transactie die toegang wil tot een data item vraagt een lock aan op dat
item
	* shared lock voor lezen, exclusive lock voor lezen/schrijven
	* wanneer er nog geen lock op dat item bestaat, wordt de aanvraag ingewilligd
	* Wanneer er reeds een lock op het item is, gaat het dbms
nagaan of de aangevraagde lock compatibel (zie matrix hieronder) is
        * aanvraag shared lock op item met shared lock: granted
        * aanvraag exclusive lock op item met lock: wait
            * de transactie moet wachten tot de lock op het data item wordt vrijgegeven
* De transactie geeft een lock vrij
	* expliciet, of
	* impliciet als de transactie eindigt (via abort of commit)

**Compatibiliteitsmatrix:**

|  | Aangevraagde S-Lock | Aangevraagde X-Lock |
| :---: | :---: | :---: |
| **Bestaande S-Lock** | Grant | Wait |
| **Bestaande X-Lock** | Wait | Grant |

### Deadlock

> Een deadlock is een ** impasse** die kan ontstaan wanneer twee of meerdere transacties elk **wachten** op het vrijgeven van locks die de andere transactie heeft

##### Oplossen Deadlock

* **Abort en restart** van 1 of meerdere transacties
* Voorbeeld:

![alt text](http://puu.sh/pp2F3/9bba9bfce6.png "Voorbeeld Deadlock")

##### Technieken om met deadlocks om te gaan:

* **Timeouts:** een transactie die een lock aanvraagt **wacht voor een bepaalde vooraf gedefinieerde tijd op die lock**, indien lock niet toegekend is tijdens dit interval:
    * Assumptie dat er een deadlock is (hoewel dit niet noodzakelijk zo is...)
    * **Abort en restart** van de transactie
* **Deadlock prevention:** gebruikmakend van **transaction time-stamps** ( speciale time-stamp voor deadlock detection). T wacht op locks die U vastheeft:
    * **Wait-die algoritme**:
        * Als T ouder is dan U dan zal T wachten
        * Zoniet dan sterft T en is er een abort/restart met dezelfde timestamp.
    * **Wound-wait algoritme**
        * Als T ouder is dan U dan zal het U 'verwonden' (--> meestal betekent dit een abort/restart van U)
        * Zoniet zal T wachten
* **Deadlock detection and recovery:**
    * **Deadlock detection**
        * gebruik makend van een **wait-for graph** met transactie afhankelijkheden
        * wanneer de wait-for graph een lus bevat is er een
    deadlock
        * op regelmatige tijdstippen wordt deze graph
    getest op lussen
    * **Recovery van deadlock detection**
    	* 1 of meerdere transacties worden ge-abort
    * Problemen
    	* **Victim selection**
        	* abort die transactie waarvoor de abort een **'minimale kost'** met zich meebrengt
        * Enkele parameters die kunnen gebruikt worden:
        	* tijd dat de transactie al aan het runnen was
        	* aantal data items dat reeds werd gewijzigd door de transactie
        	* aantal data items die nog moeten worden gewijzigd door de transactie --> deze parameter is echter niet altijd gekend
    * Hoe ver moet een transactie een rollback doen
        * dit is niet noodzakelijk de volledige transactie
    * Voorkomen van starvation
        * komt voor wanneer steeds dezelfde transactie als victim
    wordt geselecteerd
        – bijhouden van een teller

## Transacties in SQL SERVER

### DB Transacties

* **Impliciete** transacties: INSERT, UPDATE, DELETE en elke transact SQL-opdracht
* **Expliciete** transacties: zelf aangeven waar transactie begint, wanneer de transactie kan
afgesloten worden, of hoe je op je stappen terugkeert om fouten op te vangen
    ```SQL    
        BEGIN TRANSACTION
        COMMIT TRANSACTION
        ROLLBACK TRANSACTION
    ```
* Alle info ivm transacties worden weggeschreven in de **transactielog**

### Stored Procedures en Transacties

```SQL
CREATE PROCEDURE usp_Customer_Insert
    @customerid varchar(5),
    @companyname varchar(25)
    @orderid int OUTPUT
AS
    BEGIN TRANSACTION
        INSERT INTO customers(customerid, companyname)
        VALUES(@customerid, @companyname)
        if @@error <> 0 BEGIN
            ROLLBACK TRANSACTION
            RETURN -1
        END
        INSERT INTO orders(customerid)
        VALUES(@customerid)
        if @@error <> 0 BEGIN
            ROLLBACK TRANSACTION
            RETURN -1
        END
        COMMIT TRANSACTION
        SELECT @orderid=@@IDENTITY
```

### Isolation Levels

Bepalen het gedrag van concurrent users die data lezen of schrijven.
* **Reader**:
    * Statement dat data leest, m.b.v. een shared lock
    * Kun je **niet beinvloeden** voor wat betreft de locks die ze nemen en de duur van de locks
* **Writer**:  
    * Statement dat data schrijft, m.b.v. een exclusive lock.
    * Kun je **wel excpliciet beinvloeden** m.b.v. **isolation levels**, hierdoor hebben ze ook impliciete invloed op het gedrag van writers.

    **Isolation level** = setting op de sessie-niveau of query-niveau.

##### 4 Isolation Levels in SQL Server

![alt text](http://puu.sh/pp5sf/051d29f1fa.png "Isolation Levels Slide")

1. **Read Uncommitted**
    *  laagste isolatieniveau
    * **reader vraagt geen shared lock**
    * reader nooit in conflict met writer (die
exclusieve lock heeft)
    * reader leest uncommitted data (= dirty read)
2. **Read Committed**
    * default isolaton level, zie demo
	* laagste niveau dat dirty reads verhindert
	* reader leest enkel committed data
	* **reader vraagt** hiervoor shared **lock**
	* **als bij deze vraag een writer een
exclusive lock heeft, moet reader wachten op
shared lock**
	* reader houdt shared lock tot data verkregen is,
niet tot einde van zijn transactie
        *  **nogmaals lezen van de data in zelfde transactie kan
ander resultaat opleveren**
= non-repeatable reads of inconsistent analysis
        * acceptabel voor veel toepassingen, maar niet altijd
3. **Repeatable read**
    * reader vraagt shared lock en **houdt deze tot
einde van de transactie**
    * andere transactie kan geen exclusive lock
verkrijgen tot einde van de transactie van de
reader
    * **repeatable read = consistent analysis**
    * vermijdt ook lost update (kan wel bij 1 & 2)
door bij begin transactie shared lock te
nemen (m.b.v. SELECT want writers kun je
niet beïnvloeden, readers wel)
4. **Serializable**
    * Repeatable read lockt enkel rijen gevonden
bij eerste SELECT
    * Zelfde SELECT in zelfde transactie kan
nieuwe rijen geven (toegevoegd door andere
transactie) = phantoms
    * **Serializable** vermijdt phantoms
    * Lockt alle keys die beantwoorden aan
WHERE-clause, ook toekomstige

### Isolation levels: Sessie Niveau

```SQL
    SET TRANSACTION ISOLATION LEVEL READ COMMITED
```

### Isolation levels: Query Niveau

* override isolation level met "table hint":
    ```SQL
    SELECT * FROM ORDERS WITH (READUNCOMMITTED);
    -- of
    SELECT * FROM ORDERS WITH (NOLOCK);
    ```
*  dit vermijdt dat langlopende ad-hoc query's op
een productie-systeem updates in andere
transacties laten wachten bij READ
COMMITTED en hoger

##### Voorbeeld xTreme: oplossing m.b.v transacties

```SQL
    alter procedure vb @productclassname nvarchar(50)
    as
    declare @id int
    SET TRANSACTION ISOLATION LEVEL SERIALIZABLE
    BEGIN TRANSACTION
    -- Zorg voor shared lock op volledige tabel.
    -- Samen met level "repeatable" zorgt dit ervoor
    -- er geen records kunnen bijkomen tijdens de transactie.
    -- Repeatable volstaat niet:
    -- houdt enkel lock op reeds gelezen data
    select @id=max(productclassid) from productclass
    set @id = @id + 1
    insert into productclass values(@id,@productclassname)
    COMMIT
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED
    return @id
```

### Triggers en Transacties

* een trigger maakt deel uit van de transactie die de
triggerende opdracht bevat
* binnen de trigger kan de transactie geROLLBACKed
worden

```SQL
CREATE TRIGGER delSpeler ON Speler
FOR delete
AS
IF (SELECT COUNT(*)
    FROM deleted JOIN SpelerPloeg
    ON SpelerPloeg.snr = deleted.snr) > 0
BEGIN
    ROLLBACK TRANSACTION
    PRINT 'Je mag geen speler verwijderen als hij behoort tot een ploeg.'
```

## Recovery

> **Recovery** is het proces waarbij
een **DB wordt teruggebracht naar een correcte toestand**
wanneer er zich een failure voordoet

**Waar zit de data?:**
- Main Memory, - Magnetic Disk, - Tape, - Optical Disk

![alt text](http://puu.sh/ppcTx/0a28767312.png "Schema Data")

- **Stabiele opslag:** replicatie op verschillende plaatsen met onafhankelijke failure modes.

### Soorten Failures

* **system crash**
	* hardware of software errors
	* verlies van gegevens in main memory
* **media failure**
	* vb. disk head crash
	* verlies van gegevens in secondary storage
* **software error in application**
	* vb. logische fout die transactie doet falen
* **natuurlijke 'rampen'**
	* vb. brand, aardbeving
* **slordigheid**
	* vb. onopzettelijk wissen van gegevens door gebruiker of db administrator
* **sabotage**
	* vb. opzettelijk wissen of corrupteren van gegevens of infrastructuur (sw/hw)

### Transactions en recovery

* eenheid voor recovery is een transactie
* **recovery manager** staat in voor
    * atomiciteit (**A**CID)
    * duurzaamheid (ACI**D**)
* moeilijkheid
    * schrijven naar een db is **niet atomair**
        * transactie kan committen zonder dat alle effecten al
(permanent) in de db geregistreerd zijn

### High level vs low level operaties

- **Voorbeeld**

![alt text](http://puu.sh/ppdHr/93640a3f0f.png "High level vs low level schema")

### Undo en redo

* Enkel bij een 'flush' van de buffer is data
permanent
	* flushing: data van primary storage overhevelen
naar disk storage
* **Expliciete** flush
	* force-writing
	* dit gebeurt via een commando, bv. bij commit
* **Impliciete** flush
	* wanneer de buffers vol zijn
* Wat bij failure tussen schrijven naar buffer
en flushing?
    * transactie was **reeds ge-commit**
        * durability: **redo** de wijzigingen
        * aka rollforward
    * transactie was **nog niet ge-commit**
        * atomicity: **undo** de wijzigingen
            * partiële undo: undo van 1 transactie
            * globale undo: undo van alle actieve transacties
        * aka rollback
* **Voorbeeld:**
![alt text](http://puu.sh/ppesT/df8ddd38c4.png "Voorbeeld undo en redo")

### Buffer management

* Buffer management omvat het **beheer van
transfer van buffers** tussen main memory en
disk
* Praktisch:
	* inlezen tot buffer vol
	* **replacement strategie** voor force-write
* FIFO first-in-first-out
* LRU least recently used
* **_Merk op:_** een pagina aanwezig in een buffer wordt nooit gelezen van disk

### Recovery faciliteiten

Het DBMS biedt volgende diensten aan
* **Back-up** mechanisme
    * periodische back-ups van de db
* **Logging** mogelijkheden
    * op de hoogte blijven van de huidige toestand van
transacties en db wijzigingen
* **Checkpoint** mogelijkheden
    * om lopende wijzigingen in de db permanent te maken
* **Recovery manager**
    * om de db in een consistente toestand te brengen na een failure

### Back-up mechanisme

* Op regelmatige basis worden er
automatisch **reservekopieën** van de db en
de logfile aangemaakt
    * dit gebeurt zonder systeem te moeten stoppen
    * de kopieën worden bewaard op offline storage
* Mogelijke benaderingen
    * **complete** back-up
    * **incrementele** back-up

### Logging

* **Log** bevat mogelijks
	* **Transaction records**
        * transaction id
        * type van log record (transaction start, insert, update, delete, abort (rollback), commit)
        * id van het gewijzigde data item (enkel bij insert, update, en delete operaties)
        * before-image
        	* waarde data item vóór wijziging (enkel bij update en delete operaties)
        * after-image
        	* waarde data item na wijziging (enkel bij update en insert operaties)
        * log management info
        	* bv. pointers naar previous/next record van die transactie
	* **Checkpoint records**
* Log wordt ook gebruikt voor andere doeleinden
	* performance monitoring, auditing
	* hiervoor is nog **extra info** in de log opgeslagen
* Log is heel belangrijk
	* wordt in **twee- of drievoud** bijgehouden
	* ook offline
* Log moet snel toegankelijk zijn
	* minor failures moeten direct opgelost worden
	* bevindt zich dus liefst ook op **online storage**
        * indien de grootte dit toestaat
* Voorbeeld log: ![alt text](http://puu.sh/ppgmP/e3a0d207bc.png "Voorbeeld Logging")

### Checkpointing

> Een **checkpoint** is een **synchronisatiepunt** tussen de databank en de log, op dit punt worden alle buffers ge-flushed

Checkpoints worden voorzien op vooraf ingestelde intervallen (bv. Om de 15 minuten).

Een checkpoint omvat:
1. Alle log records in main memory wegschrijven naar disk
2. De gewijzigde delen van de buffers wegschrijven naar disk
3. Een checkpoint in de log registreren. ( Dit record bevat id van alle transacties die actief zijn op het moment van checkpointing).

**Voorbeeld:** recovery met checkpointing
![alt text](http://puu.sh/ppgWo/b4ffb00a5d.png "Voorbeeld checkpointing")

## Recovery Technieken

Soort recovery procedure die gevolgd wordt hangt af van de ernst van het probleem:
* Serieuze (fysische) problemen
    * back-up restoren
    * wijzigingen van committed transacties (sedert de backup) die verloren
gingen, herstellen adhv de log
* Problemen van inconsistentie
    * kan zonder back-up
    * undo/redo adhv de log's before en after images

### Deferred update

> Bij een **deferred recovery protocol** worden
wijzigingen van een transactie niet weggeschreven naar de DB zolang de transactie niet het commit-punt bereikt

1. **Start** van de transactie: registreer de transactie start record in log
2. Bij een **write** actie: registreer dit in een log-record (**enkel after-image**, geen before image nodig). **Registreer dit niet in de DB**
3. **Commit** van de transactie: registreer transactie commit record in log. Schrijf alle log records weg naar disk (**flush voor de volgende stap!**) bij eerstvolgende checkpoint. Commit **update de DB adhv de log records.**
4. **Abort** van de transactie: **negeer de log records, schrijf niets naar disk**

### Immediate update

> Bij een **immediate update recovery protocol** worden
wijzigingen van een transactie direct weggeschreven naar de db

1. **Start** van de transactie: registreer transaction start record in log
2. Bij een **write** actie: schrijf het **log-record naar disk** (het log-record bevat **before-image, en after-image**), bij flush van de buffers (bij eerstvolgende checkpoint) wordt de wijziging naar de db
geschreven
3. **Commit** van de transactie: schrijf een transaction commit log record naar disk
4. **Abort** van de transactie: gebruik **before images voor undo**

###### **Voorbeeld**

![alt text](http://puu.sh/ppioj/b2ccf0f897.png "Voorbeeld Recovery Technieken")


|| Deferred | Immediate |
| :---: | :---: | :---: |
| T1 | niets | UNDO via Before-Images |
| T2 | niets | niets |
| T3 | niets | niets |
| T4 | REDO adhv After-Images | REDO adhv After-Images |
| T5 | REDO adhv After-Images | REDO adhv After-Images |
| T6 | niets | UNDO via Before-Images |

# Hoofdstuk 8: Datawarehousing & Business Intelligence

### Inleiding

Data warehousing zit in de lift
* Groeiende nood aan flexibele business
rapportering toegankelijk voor de business
* Data die in DWH zit groeit exponentieel
    * terabytes aan data in een DW is 'gewoon' geworden
* Applicaties die gebruik maken van die data worden
complexer
    * traditionele rapportage
    * geavanceerde analyses
* Traditionele DBMS bieden allemaal DWH faciliteiten aan

### Data Warehouse

> Een **data warehouse** is een geïntegreerde, subject georiënteerde,
tijd variante en niet vluchtige verzameling van data ter
ondersteuning van beslissingen die genomen moeten worden op
management niveau

### Eigenschappen:

**Geïntegreerd**
* Data is afkomstig uit verschillende bronnen (data uit verschillende bronnen is dikwijls inconsistent, in het DW is alles consistent geïntegreerd).

**Tijd**
* Data in het DW is accuraat en geldig op een bepaald punt in de tijd of
over een bepaald tijdsinterval
* Data wordt over heel lange periodes bijgehouden
* Tijd kan expliciet of impliciet geassocieerd zijn met de data
    * vb. Eenheidsprijs van een product kan in de tijd (historisch) worden bijgehouden of
    kan een momentopname zijn
    * DW zal, door geregelde kopieën te nemen, de historiek opbouwen
* Mogelijkheid om terug te gaan naar een momentopname

**Niet vluchtig (non volatiel)**
* Data wordt niet real-time ge-update maar op regelmatige basis
bijgewerkt met data uit operationele systemen
* Nieuwe data komt incrementeel bovenop oude data

**Geaggregeerde data**
* Afkomstig van bijv. GROUP BY

### Doelstellingen DWH

* Rapportering
* Analyse van events in verleden of heden
* Voorspellingen op basis van trendanalyse, historisch
* Multidimensionele rapportering
* Eindgebruiker vereenvoudigde rapporteringsomgeving bieden
(empowerment)
* Data mining

### Voordelen

**Hoge Return on Investment (ROI)**: het opzetten van een Datawarehouse is een zware investering maar levert een hoge ROI na een relatief korte periode.

**Concurrentieel voordeel:** doordat beleidsmakers toegang hebben tot voorheen niet beschikbare, ongekende of ongebruikte informatie over bv. klanten, trends, ...

**Verhoogde productiviteit:** de beleidsmaker krijgt één grote consisente view op de onderneming doordat het DW data uit verschillende bronnen integreert tot een consistent geheel, dat subject georiënteerd is en waar historiek zit ingebakken. Ze kunnen ook meer substantiële, nauwkeurigere en consistentere analyses maken (via tools kan de data automatisch tot bruikbare informatie omgevorm worden).

### Vergelijk On-Line Transaction Processing en DW

#### aka OLTP en OLAP (On-Line Analytical Processing)

| Eigenschap | OLTP | DW |
| --- |--- | --- |
| Hoofddoel | ondersteuning van operationele verwerking | ondersteuning analytische verwerking |
| Leeftijd van de data | actueel | historisch (maar trend naar meer actueel) |
| Data wachttijd | real-time| afhankelijk van hoe frequent het DW wordt bevoorraad (maar trend naar real-time) |
| Data granulariteit |  detail  |  detail, maar ook in kleine of hoge mate samengevat  |
| Data processing | voorspelbare insert, delete, update en select opdrachten, veel transacties per tijdseenheid   |onvoorspelbare selects, relatief laag aantal transacties per tijdseenheid |  
| Rapportage | voorspelbaar, eendimensionaal, relatief statisch | onvoorspelbaar, multidimensioneel, dynamisch|
| Gebruikers | groot aantal gebruikers op operationele niveau| klein aantal gebruikers opmanagement niveau (maar trend naar ondersteuning voor analytische behoeften van operationele gebruikers |

## Architectuur

### Architectuur van een DWH

![alt text](http://puu.sh/pppKy/67445e577f.jpg "Architectuur schema")
* Operationele data
* Bronnen van data
	* mainframe (hiërarchisch, netwerk)
	* departementale data in bestanden en
RDBM systemen
	* privé data op werkstations en privé
servers
	* externe systemen
        * internet
        * commerciële DB
        * DB die bij de klanten of leveranciers gebruikt worden
* Operationele data source
* Repository
	* huidige, geïntegreerde data
	* voorbereidende stap in ontwikkeling van
het DWH, of,
	* ondersteuning van reporting services bij
legacy systemen
* ETL manager
	* ondersteunt alle operaties voor ETL
(Extraction, Transformation and Load) van data
        * rechtstreeks vanuit operationele
        gegevensbronnen
        * vanuit de operationele data store
* Warehouse manager
	* voor het beheer van data in het DWH
        * analyse van data om consistentie te
        garanderen
        * transformatie en samenvoegen van
        brongegevens van tijdelijke opslag in DWH
        tabellen
        * creatie van indexen en views
        * eventuele denormalisatie
        * aanmaken van aggregaten (samenvoegen
        van data)
        * back-up en archivering van de data
* Query manager
	* beheer van gebruikersqueries
	* gebruik van juiste tabellen
	* uitvoeren/schedulen van queries
	* generatie van profielen
	* voorstellen voor aggregaten en indexen
maken
* Gedetailleerde data
	* dikwijls niet online opgeslagen maar
beschikbaar door aggregatie van de data
in een hoger niveau van detail
	* deze data wordt op regelmatige basis aan
het DWH toegevoegd
* Samengevatte data
	* voorgedefinieerde samengevatte data
	* onderhevig aan veranderingen zodat kan
ingespeeld worden op verschillende
soorten queries
	* zorgt voor verhoogde performantie bij
query-uitvoering
* Archive/back-up data
	* voor zowel gedetailleerde als
samengevatte data
        * samengevatte data kan bv. een langere
        levensduur kennen dan de gedetailleerde  data
* Meta data
	* nodig voor ETL
	* nodig voor de DWH manager
	* nodig door de Query manager
* Meerdere kopieën van metadata die elk
afgestemd zijn op een bepaald proces
* Laten steeds toe de herkomst van een
item in het DWH volledig te bepalen
* End user access tools
	* reporting and querying
	* application development tools
	* OLAP tools
	* data mining tools

### Data Marts
> Een DB die bestaat uit een **deelverzameling van bedrijfsgegevens** ter ondersteuning van de behoeften van een bepaalde bedrijfsunit om **analyses** te kunnen uitvoeren, of, om gebruikers te ondersteunen die dezelfde behoeften hebben om bepaalde **bedrijfsprocessen** te analyseren

![alt text](http://puu.sh/ppqhT/763b11889d.jpg "Data Marts")

**Waarom een datamart?**
* om gebruikers toegang te geven tot de data die ze meest analyseren
* om data aan te bieden in een vorm die overeenkomt met de collectieve view van een groep van
gebruikers in een departement of van een groep gebruikers binnen eenzelfde bedrijfsproces
* om response tijd te verhogen door kleinere volumes van data aan te bieden
* om data aan te bieden in een vorm die past bij de tools die de eindgebruikers gebruiken (OLAP,
data-mining tools)
* reductie van complexiteit in het ETL proces
* reductie van de kost tov het opzetten van een enterprise wide DWH

### Data Mining Applications
* **Data mining** applicaties worden gebruikt
om:
    * what-if analyses te doen
    * voorspellingen te doen
    * het beslissingsproces te faciliteren
* Data mining applicaties maken gebruik van
gesofesticeerde statische en wiskundige
technieken
* Rapporten zijn minder kritisch

### Problemen met DWH
* **Kosten voor ETL worden onderschat**
	* extraction, transformation en loading van data in het DWH neemt groot deel van ontwikkeltijd in
beslag
	* Projecten duren meestal jaren
* **Verborgen problemen met de bron of ETL systemen**
	* worden soms pas na jaren ontdekt
	* oplossen gebeurt in DWH en/of operationele DB
	* vb. velden die null-waarden toelaten, in sommige kantoren laten ze die altijd op null staan,
hoewel de gegevens wel beschikbaar en nuttig zijn
* **Nodige data wordt niet bijgehouden**
	* verandering in huidige systeem of apart systeem voor deze data
	* vb. de datum waarop een klant zich registreert wordt momenteel niet bijgehouden
* **Verhoogde eisen van de eindgebruikers**
	* hoe meer gebruikers zich bewust worden van de mogelijkheden van het systeem,
hoe meer ze zullen eisen
        * meer druk op Information System personeel
        * vraag naar meer gebruiksvriendelijke, krachtige, gesofistikeerde tools
        * betere training voor eindgebruikers
* **Data homogenisatie**
	* men poogt gelijkenissen tussen data te accentueren en dit kan het nut van de data verlagen
	* bv. gelijkenissen tussen verkoop en verhuur van eigendommen
* **Nood aan meerdere (historische) versies naast mekaar**
	* Vb. als DWH wordt gebruikt voor financiële en operationele rapportering -> consistentie
	* Het beheer van diverse historische versies naast mekaar is een uitdaging
	* Grote DB volumes -> performantie
	* Archivering…
* **Hoge vraag naar resources**
	* bv. disk space
* **Data ownership**
	* data die voorheen gevoelig was, die voorbehouden was voor bepaalde afdelingen kan nu ook
aangeboden worden aan andere gebruikers
	* Beheer rechten in DWH vraagt bijzondere aanpak
* **Hoog onderhoud**
	* elke verandering in de business processen of in de bronsystemen heeft invloed op het DWH
(zowel DWH structuur als ETL)
* **Lange duur**
	* ontwikkeling kan jaren duren
	* wordt soms opgelost via de ontwikkeling en integratie van data marts
* **DWH ontstaat uit verwachting om de gebruikers te ‘empoweren’:**
	* Zelf rapporten, analyses maken
	* Meer onafhankelijkheid van IT
	* Nood aan metadata dictionary die data in DWH beschrijft en toegankelijk maakt
	* Maar toch grote afhankelijkheid van enkele specialisten.
* **Complexiteit van de integratie**
	* hoe kunnen alle nodige DWH tools zinvol en efficiënt samenwerken
* **Complex change en versie management**
	* Consistentie in rapportering
	* Impact op oude versies
* **DWH kan fungeren als input voor een management decision system**
	* Vb. historische verkoopsforecast met ingave van nieuwe data
	* Combinatie van rapportering en online data
* **Nacht dikwijls te kort voor afhandelen DWH ETL**
	* Zeker bij maand- en jaarsluiting
	* Als er iets fout gaat in een ander systeem
	* ETL stoppen of laten doorlopen?
        * Onvolledig DWH versus performantie killer
### DWH Technologieën
* Microsoft:
	* Microsoft reporting server
	* DTS (Data Transformation Services)
* Cognos (nu IBM)
	* ETL
	* Rapporteringstools
* Business Objects (nu SAP)
	* Rapportering
	* ETL
* SAP Business Warehouse
	* Kubus
* Datastage ETL
* Cliqview rapportering

## Ontwerp
---
##### Thanks Sofie

Er zijn 2 ontwikkel methodologieën
* **Inmon**:
    creatie van een data model gebasseerd op alle gegevens van de organisatie &rarr; Enterprise Data Warehouse (EDW)
    * Van hieruit worden data-marts voor elk departement gedistilleerd
    * Gebruik van ERD en tabellen in normaalvorm voor de beschrijving van het EDW
* **Kimball**: identificatie van informatie behoeften en business processen van de organisatie &rarr; Data Warehouse Business Matrix
    * Selectie en ontwikkeling van een eerste data mart voor de behoeften van een groep gebruikers.
    * Via integratie van data marts komen we tot het EDW
    * Gebruik van sterschema en varianten

### Kimball's Business Dimensional Lifecycle
**Focus** op het voldoen aan de informatiebehoeften van de organisatie via het bouwen van enkele, geïntegreerde, makkelijk bruikbare en selle informatie structuur. Deze structuur wordt op een incrementele, iteratieve manier gebouwd.

**Doel**: opleveren van een volledige oplossing waarbij
* DWH
* ad-hoc query tools
* reporting applicaties
* geavanceerde analytische tools
* training en support voor de gebruikers

zijn inbegrepen.

**3 tracks**
* technologie
* data track
* business intelligence applications

### Dimensionality modelling
> **Dimensionality modeling** is een techniek om een logisch ontwerp te maken.

Men streeft er naar om de data te presenteren in een standaard, intuïtieve vorm, die toegankelijk is met een hoge performantie.

#### Dreamhome DWH: voorbeeld
Management wil analyse van verkoop van huizen

**Voorbeeld queries**
* wat was het totaal aan inkomsten van verkoop van eigendommen in het derde kwartaal van 2008?
* welke zijn de drie meest populaire gebieden in elke stad voor het verhuren van eigendommen in 2008; en hoe is dit in vergelijking met de resultaten van de twee vorige jaren?
* wat zou het effect zijn van een verhoging van de juridische kosten met 3.5% en een verlaging van de belastingen met 1.5% op de verkoop van eigendommen die meer waard zijn dan 200000 Euro?
* welke soorten eigendommen worden verkocht voor prijzen die boven de gemiddelde prijs van eigendommen in de grootste steden liggen en hoe hangt dit samen met de demografische gegevens
* wat is het verband tussen de jaarlijkse inkomsten van elke kantoor en het aantal verkoopsmensen die in elk kantoor werken?

**ERD**
![alt text](http://puu.sh/ppz4F/a1cba72b39.PNG "Voorbeeld Dimensionaal model")

#### Sterschema
> Een **ster schema** is een dimensioneel model die een feitentabel heeft, die omgeven is door gedenormaliseerde dimensietabellen.

![alt text](http://puu.sh/ppz5x/94409d7e78.PNG "Voorbeeld sterschema")

* **fact table** met samengestelde primaire sleutel
* **dimension tables** met een niet samengestelde primaire sleutel

Elke PK van een dimension table komt overeen met een deel van de PK van de fact table. Elk deel van de PK van de fact table is een FK die naar één van de dimensies refereert.

***Opmerking***  
* de natuurlijke sleutels uit het operationeel systeem worden opgenomen maar niet als sleutel in het sterschema gebruikt
* surrogaatsleutels zijn simpele integer-sleutels
* ze zorgen voor onafhankelijkheid van data tussen OLTP en DWH


##### Feitentabel
bevat data over feiten
bv. feitelijke data over de verkoop van een eigendom.  
Feiten worden gegenereerd oor gebeurtenissen die zich hebben voorgedaan. Ze zullen hoogstwaarschijnlijk nooit veranderen, ongeacht de manier waarop men ze analyseert.
* grote bulk van data in DWH dus tabel kan extreem groot zijn
* feitelijke data wordt beschouwd als read-only data, die niet verandert in tijd
* bevatten één of meerdere numerieke waarden, feiten die voor elk record toepasbaar zijn  
Meestal zijn feiten additief, ze worden zelden maar voor 1 record geraadpleegd

 **Voorbeeld**

![alt text](http://puu.sh/ppz5T/d49dacfa72.PNG "Voorbeeld feitentabel")


##### Dimensietabellen
bevat de referentie-informatie; beschrijvende, op tekst gebaseerde, informatie  
bv. het eigendom, de koper, de verkoper, ...
* attributen worden gebruikt als constraints bij DWH queries  
  bv. queries die gaan over verkopen van eigendommen in 'Glasgow'

Sterschema's kunnen query performantie aanzienlijk verhogen door referentie-informatie te denormaliseren en bij te houden in één enkele dimensietabel  
zie bv. city, region, country

**Voorbeeld**

![alt text](http://puu.sh/ppz69/ced07c54bc.PNG "Voorbeeld dimensietabellen")

#### Sneeuwvlok schema
> Een  **sneeuwvlokschema** is een variant op het sterschema waarbij dimensies worden bijgehouden in genormaliseerde dimensietabellen

![alt text](http://puu.sh/ppz58/b6605c5742.PNG "Voorbeeld sneuuwvlokschema")

***Opmerking***  
ook andere dimensietabellen zullen nu refereren naar City en Region tabellen

Indien een combinatie van genormaliseerde en niet genormaliseerde dimensietabellen wordt gebruikt spreekt men van een **ster-vlok schema**

### Voordelen
de voorspelbare en standaardvormvan het dimensioneelmodel levert enkele voordelen op:
* efficiëntie
    * de consistenteDB-structuur laat toe dat tools op efficiëntere maniertoegang tot de data kunnen krijgen
* veranderendebehoeften
    * het model kan zich aanpassen aan veranderende behoeften daar elke dimensie equivalent is t.o.v. de feitentabel
    * goed model voor ad-hoc queries
* uitbreidbaarheid
    * toevoegen van nieuwe feiten(met de juiste granulariteit)
    * toevoegen van nieuwe dimensies
    * toevoegen van attributen aand imensies
    * dimensies naar een kleinere granulariteit overzetten vanaf een bepaald punt in de tijd
* mogelijkheid om standaard business situaties te modelleren
* voorspelbare query processing
    * de manier waarop de tabellen gebruikt worden in queries is voorspelbaar(de queries niet!)

### DM en ER modellen
* Entity Relationship Diagrammen
    * gebruikt om de DB voor OLTLP systemen te ontwerpen
    *  basis: de relaties tussen entiteiten modelleren, met als doel redundantie weg te werken
        * redendantie is nadelig voor OLTP systemen
    *  ad-hoc queries kunnen moeilijker behndeld worden
        * leiden tot enoerm veel joins van enorm veel tabellen

* Dimensionaal Modeleren
    * gebruikt om de DB van een DWH (of datamart) te ontwerpen
    * intuïtieve opslag met een hoge graad aan performantie bij raadpleging van de gegevens

Eén ERD wordt uitgesplitst over meerdere DM-en, deze DM-en hangen samen via gedeelde dimensies

### Dimensional Modeling Stage
**DOEL**  
* creatie van een DM voor een data mart
* dimensionaliseren van het relationeel model van een bestaande OLTP DB

Dit gebeurt in 2 fasen:
1. creatie van een high-level DM
2. toevoegen van detail aan het model via identificatie van attributen voor de dimensies

### FASE 1: creatie van een high-level DM
![alt text](http://puu.sh/ppAzL/798001cdc4.PNG)

##### STAP 1: selecteer een business process
Het business process refereert naar het thema voor een welbepaalde datamart  
Voor de erste datamart kiezen we liefst één die
* hoogstwaarschijnlijk op tijd zal kunnen opgeleverd worden,
* binnen het budget valt,
* een antwoord geeft op commercieel belangrijke business vragen  
Dikwijls is deze gerelateerd aan verkoop financiën.
##### STAP 2: bepaal de granulariteit
Dit bepaalt wat een feit in de feitentabel exact gaat voorstellen:
* elk individueel record overnemen uit operationele gegevens of
* groeperen

Leidraad:
* hoe kunnen we tegemoetkomen aan de business requirements?
* wat is mogelijk met de beschikbare data source?

Granulariteit bepaalt de dimensies (volgende stap) en de granulariteit van de dimensies.
##### STAP 3: kies de dimensies
Dit bepaalt de context binnen dewelke we de feiten in de feitentabel zullen kunnen bevragen.  
Elke dimensie die meer dan 1 DM, dus meer dan 1 datamart, voorkomt, noemen we een **conformed dimension**.  
Conformed dimensions zijn exact gelijk aan elkaar of de een is een subset van de andere.

##### STAP 4: identificeer feiten
De granulariteit van de feitentabel bepaalt welke feiten er in de datamart kunnen gebruikt worden.  
Feiten zijn nummeriek en additief.  
Onbruikbare feiten zijn:
* niet numerieke waarden
* niet additieve waarden
* feiten met een granulariteit die verschilt van de granulariteit van de andere feiten in de feitentabel

### FASE 2: identificieer alle attributen voor de gekozen dimensies
Tekstuele omschrijving: intuïtief, zelfverklarend

Bruikbaarheid van de datamart hangt grotendeels af van de scope en aard van de attributen die in de dimensietabellen zitten.

### Aandachtspunten
* de duur van de DB bepaalt hoe ver terug in de tijd de fettentabel gaat
* langzaam veranderende dimensies  
  wanneer een dimensie verandert moet je er mogelijks voor zorgen dat je de nieuwe waarden niet gebruikt bij analyses an oudere transacties.
    * type 1: het attribuut dat verandert wordt gewoon overschreven
    * type 2: wanneer een attribuut verandert wordt een nieuw record in de dimensietabel toegevoegd
    * type 3: zorg dat de oude en de nieuwe waarde voor het attribuut beschikbaar zijn in het record

Op het einde van deze life-cycle zullen we een datamert hebben die voldoet aan 1 van de business requirements. Deze datamart zal geïntegreerd worden met andere datamarts om te komen tot een enterprise wide DWH.

Een DM waarbij meer dan 1 feitentabel 1 of meer dimensies deelt noemen we een **feitenconstellatie**.

### Voorbeeld Dimensional Modeling Stage

**DreamHome**

##### STAP 1: selecteer een business process

Wat zijn de business processen?
* verkoop van eigendommen
* verhuur van eigendommen
* tonen van eigendommen
* adverteren van eigendommen
* onderhoud van eigendommen

ERD van DreamHome met de belangrijkste entiteiten voor elk business process ingekleurd
![alt text](http://puu.sh/ppYcV/1bf0a2bdd5.PNG "ERD")

We kiezen een business process:  
**verkoop van eigendommen**

![alt text](http://puu.sh/ppYiF/031bea87e3.PNG "business processen")

##### STAP 2: bepaal de granulariteit

keuze: PropertySale - verkoop van elke eigendom  
Nu kunnen we dimensies kiezen:
* Branch, Staff, ClientBuyer, PropertyForSale, Promotion
* extra kern dimensie steeds aanwezig in een DM is tijd

##### STAP 3: kies de dimensies

![alt text](http://puu.sh/ppYoJ/57b1466499.PNG)

#### STAP 4: identificeer feiten

PropertySale:
* offerPrice
* sellingprice
* saleCommission
* saleRevenue
