---
title: Oefeningen SQL
link: https://robinmalfait.com/2de-jaar/semester-II/Databanken/Oefeningen_SQL.md
---

```sql
select * from product; -- Lijst van alle producten
select distinct ProductClassId from product; -- distinct zorgt voor unieke waarde
select ProductClassId, count(*), avg(price), min(price), max(price), sum(UnitsInStock) from product group by ProductClassId; -- Per ProductClassId het aantal producten tellen
```

```sql
select ProductClassId, ProductID
from product
group by ProductClassId;

-- ERROR: ProductID komt niet voor in de group by, of in een aggregaat functie (avg, sum, count, min, max)
```

```sql
-- Alle producten waarvan er meer dan 5 in stock zijn
select ProductClassId, count(*)
from product
where UnitsInStock >= 5
group by ProductClassId;
```

```sql
select product.ProductClassId, ProductClass.ProductClassName, count(*) aantal -- Aantal is een naam die je aan de kolom kan geven
from product join ProductClass
on product.ProductClassId = ProductClass.ProductClassId
where UnitsInStock >= 5
group by product.ProductClassId, ProductClass.ProductClassName
having count(*) > 40 -- Having is zoals where maar op groepen, moet in combinatie met group by gebruikt worden
order by product.ProductClassId;
```

## Oefeningen

### Oefening 16

Tel het aantal producten die Xtreme aanbiedt (geef de kolom de naam 'aantal producten'), evenals het aantal producten die in voorraad zijn (waarvoor UnitsInStock ingevuld)(geef de kolom de naam 'aantal in voorraad')

```sql
select count(*) as 'aantal producten',  count(UnitsInStock) as 'aantal in voorraad' from Product;
```

### Oefening 17

Hoeveel bedienden hebben een supervisor functie?

```sql
select count(distinct SupervisorID) from Employee;
```

### Oefening 18

Geef respectievelijk van de jongste werknemer en van de oudste werknemer de geboortedatum weer.

```sql
select min(BirthDate) as 'Oudste', max(BirthDate) as 'Jongste' from Employee;
```

### Oefening 26

Toon de lijst van de landen waar 2 of meer leveranciers wonen. Sorteer alfabetisch.

```sql
select Country, count(Country) from Supplier group by Country having count(Country) >= 2 order by Country;
```

### Oefening 27

Welke leveranciers bieden minstens 10 producten aan waarvan de prijs kleiner is dan 100 dollar. Toon ID van de leverancier en het aantal verschillende product. De leverancier die het meeste aantal producten aanbiedt staat bovenaan.

```sql
select s.SupplierId, s.SupplierName, count(ProductID)
from Product p
join Supplier s on p.SupplierID = s.SupplierID
where Price < 100
group by s.SupplierID, s.SupplierName
having count(ProductID) >= 10
order by count(ProductID) desc;
```

### Oefening 31

Geef de leveranciers die fietsen kunnen leveren. De resultaatset bevat het ID en de naam van de leveranciers.

```sql
select s.SupplierID, s.SupplierName
from Product p
join ProductClass pc on p.ProductClassID = pc.ProductClassID
join Supplier s on p.SupplierID = s.SupplierID
where pc.ProductClassName = 'Bicycle'
group by s.SupplierID, s.SupplierName;

-- of

select distinct s.SupplierID, s.SupplierName
from Product p
join ProductClass pc on p.ProductClassID = pc.ProductClassID
join Supplier s on p.SupplierID = s.SupplierID
where pc.ProductClassName = 'Bicycle';
```

### Oefening 36

Welke is de laagste prijs per type van de producten die bestemd zijn voor de jongeren ('Y'outh)? Geef de naam van het producttype en ook de laagste prijs.

```sql
select pt.ProductTypeName, min(p.price) as 'Laagste Prijs'
from ProductType pt
join Product p on p.ProductTypeId = pt.ProductTypeId
where p.M_F = 'Y'
group by p.ProductTypeId, pt.ProductTypeName;
```

### Oefening 48

Toon een lijst met orderID’s, het employeeID en de naam van de employee. Zorg ervoor dat de lijst ook de employee’s bevat die nog geen orders genoteerd hebben.

```sql

```

## Oefeningen op stored Procedures

### Oefening 81

Maak een stored procedure voor de ingave van een bestellijn. Controleer of de
artCodeLev wel degelijk behoort tot de leverancier opgegeven in de bestelling. Indien
niet, dan mag de bestellijn niet worden toegevoegd.

```sql
DROP PROCEDURE oef81
CREATE PROCEDURE oef81
    @bestelnr varchar(4),
    @artCodeLev nvarchar(5),
    @aantal smallint,
    @prijs decimal(6, 2)
AS BEGIN
    DECLARE @levCode varchar(3)
    DECLARE @errMessage varchar(200)
    SELECT @levCode = levCode from Bestellingen where @bestelnr = bestelnr

    IF @levCode IS NULL BEGIN
        set @errMessage = 'Bestelling met nummer ' + @bestelnr + ' is onbestaande.';
        RAISERROR(@errMessage, 14, 1)
        RETURN
    END

    IF NOT EXISTS (SELECT * FROM offertes WHERE levCode = @levCode AND artcodelev = @artcodelev) BEGIN
        set @errMessage = 'Er bestaat geen offerte met artikelCodeLev ' + @artcodelev;
        RAISERROR(@errMessage, 14, 1)
        RETURN
    END

    INSERT INTO bestellijnen VALUES(@bestelnr, @artcodelev, @aantal, @prijs)
END
```

### Oefening 82

Maak een stored procedure die alle offertes van een op te geven leverancier ophaalt.

```sql
CREATE PROCEDURE oef82
    @levcode varchar(3)
AS
    SELECT *
    FROM offertes
    WHERE levcode = @levcode
```

### Oefening 83

Maak een stored procedure die voor een op te geven soort en kleur, alle offertes
ophaalt.

```sql
CREATE PROCEDURE oef83
    @soort nvarchar(50) = NULL,
    @kleur nvarchar(50) = NULL
AS
IF @soort IS NULL BEGIN
    RAISERROR('Soort is NULL', 10, 1)
    RETURN
END
IF @kleur IS NULL BEGIN
    RAISERROR('Kleur is NULL', 10, 1)
    RETURN
END
SELECT * FROM Offertes where artCode in (
    SELECT artCode
    FROM Planten
    WHERE soortID = (SELECT soortID FROM Soorten where soort = @soort)
    AND kleurID = (SELECT kleurID FROM Kleuren where kleur = @kleur)
)
```

of andere select:

```sql
select o.*
from offertes o
join planten p on o.artCode = p.ArtCode
join soorten s on p.soortID = s.soortIDjoin kleuren k on p.kleurId = k.kleurID
where soort = @soort and kleur = @kleur
```

### Oefening 84

Maak een stored procedure voor het verwijderen van een offerte. Dit kan enkel indien
er voor de betreffende artikelcode van leverancier en de leverancier zelf nog geen
bestelling geplaatst werd.

```sql
create procedure deleteofferte
    @levcode varchar(3),
    @artCodelev varchar(3)
AS
    if exists (select * from bestellingen join bestellijnen on bestellingen.bestelnr = bestellijnen.bestelnr where levcode = @levcode and artcodelev = @artcodelev) BEGIN
        raiserror('er bestaan reeds bestellingen voor dit product', 14, 1)
        RETURN
    END

    delete from offertes where levcode = @levcode and artcodelev = @artcodelev
```

### Oefening 86

Maak een stored procedure die alle planten waarvoor de prijs onder de 5 euro met 1
procent verhoogt, en de andere prijzen met 2 procent verhoogt. Rond af op 2 cijfers na
de komma. Maak gebruik van een cursor.

```sql
create procedure upgradePrices
as
    declare planten_cursor cursor for select prijs from planten for update
    open planten_cursor
    declare @prijs decimal(6, 2)
    fetch next from planten_cursor
    into @prijs
    while @@FETCH_STATUS = 0 begin
        if @prijs <= 1
            set @prijs = round(@prijs * 1.01, 1)
        else
            set @prijs = round(@prijs * 1.05, 2)
        update planten set prijs = @prijs where curront of planten_cursor
        fetch next from planten_cursor into @prijs
    end
    close planten_cursor
    deallocate planten_cursor
```

## Oefeningen op Triggers

### Oefening 87

Creëer een trigger die bij creatie van een bestellijn toelaat dat de prijs niet opgegeven
wordt. In dit geval gaat de prijs automatisch ingesteld worden op de offerteprijs die de
leverancier heeft voor het artikel.

```sql
create trigger oef87 on bestellijnen for insert as
declare @prijs decimal(6, 2)
declare @bestelnr decimal(4)
declare @artCodeLev varchar(5)
select @prijs = prijs, @bestelnr = bestelnr, @artCodeLev = artCodeLev from inserted

declare @levcode varchar(3)
select @levcode = levcode from bestellingen where bestelnr = @bestelnr
if @prijs is null
begin
    declare @offertePrijs decimal(6, 2)
    select @offertePrijs = offertePrijs from offertes where artCodeLev = @artCodeLev and levcode = @levcode

    update bestellijnen set prijs = @offerteprijs where artCodeLev = @artCodeLev and bestelNr = @bestelnr
end
```

Testen:

```sql
delete from Bestellijnen where bestelnr = '0123' and artCodeLev = 'A230'
insert into Bestellijnen VALUES('0123', 'A230', 20, null)
select * from Bestellijnen where artCodeLev = 'A230'
```
