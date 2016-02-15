---
title: Databanken II
---

# Introductie

## Trigger Example

```sql
create trigger CheckPunten
on punten
after insert, update
as
declare @cijfer float
select @cijfer = [afgerond/20] from inserted
if @cijfer > 20
begin
    rollback transaction
    raiserror("Student kan niet meer dan 20/20 halen", 14, 1) -- 14: Fout Level
end
```

# Herhaling

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

Tel het aantal producten die Xtreme aanbiedt (geef de kolom de naam "aantal producten"), evenals het aantal producten die in voorraad zijn (waarvoor UnitsInStock ingevuld)(geef de kolom de naam "aantal in voorraad")

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
select min(BirthDate) as "Oudste", max(BirthDate) as "Jongste" from Employee;
```

### Oefening 26

Toon de lijst van de landen waar 2 of meer leveranciers wonen. Sorteer alfabetisch.

```sql
select Country, count(Country) from Supplier group by Country having count(Country) >= 2 order by Country;
```

### Oefening 27

Welke leveranciers bieden minstens 10 producten aan waarvan de prijs kleiner is dan 100 dollar. Toon ID van de leverancier en het aantal verschillende product. De leverancier die het meeste aantal producten aanbiedt staat bovenaan.

```sql
select SupplierID, count(ProductID)
from Product
group by SupplierID
having count(ProductID) >= 10
and count(Price) < 100;
```

### Oefening 31

Geef de leveranciers die fietsen kunnen leveren. De resultaatset bevat het ID en de naam van de leveranciers.

```sql
select Supplier.SupplierID, Supplier.SupplierName
from Product
join ProductClass on Product.ProductClassID = ProductClass.ProductClassID
join Supplier on Product.SupplierID = Supplier.SupplierID
where ProductClass.ProductClassName = 'Bicycle'
group by SupplierName, Supplier.SupplierID;
```

### Oefening 36

Welke is de laagste prijs per type van de producten die bestemd zijn voor de jongeren ('Y'outh)? Geef de naam van het producttype en ook de laagste prijs.

```sql

```

### Oefening 48

Toon een lijst met orderID’s, het employeeID en de naam van de employee. Zorg ervoor dat de lijst ook de employee’s bevat die nog geen orders genoteerd hebben.

```sql

```
