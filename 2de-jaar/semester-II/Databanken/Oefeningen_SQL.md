---
title: Oefeningen SQL
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

```

### Oefening 82

Maak een stored procedure die alle offertes van een op te geven leverancier ophaalt.

```sql

```

### Oefening 83

Maak een stored procedure die voor een op te geven soort en kleur, alle offertes
ophaalt.

```sql

```

### Oefening 84

Maak een stored procedure voor het verwijderen van een offerte. Dit kan enkel indien
er voor de betreffende artikelcode van leverancier en de leverancier zelf nog geen
bestelling geplaatst werd.

```sql

```

### Oefening 86

Maak een stored procedure die alle planten waarvoor de prijs onder de 5 euro met 1
procent verhoogt, en de andere prijzen met 2 procent verhoogt. Rond af op 2 cijfers na
de komma. Maak gebruik van een cursor.

```sql

```

## Oefeningen op Triggers

### Oefening 87

Creëer een trigger die bij creatie van een bestellijn toelaat dat de prijs niet opgegeven
wordt. In dit geval gaat de prijs automatisch ingesteld worden op de offerteprijs die de
leverancier heeft voor het artikel.

```sql

```
