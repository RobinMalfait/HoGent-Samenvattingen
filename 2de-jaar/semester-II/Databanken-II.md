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

## Herhaling

[Oefeningen SQL](/2de-jaar/semester-II/Databanken/Oefeningen_SQL.md)

# XML

> XML: e**X**tensible **M**arkup **L**anguage. <!--**-->

## XML Document

```xml
<?xml version="1.0"?>
<parent>
    <child>Some Child</child>
    <child>Some Other Child</child>
    <child name="special">Some Other Child with an attribute</child>
</parent>
```

## XML Schema (xsd schema)

Een opmaak waaraan het XML document moet voldoen, alle tags en eventuele waarden.

Voorbeeld:

```xml
<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

<xs:element name="note">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="to" type="xs:string"/>
      <xs:element name="from" type="xs:string"/>
      <xs:element name="heading" type="xs:string"/>
      <xs:element name="body" type="xs:string"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>

</xs:schema>
```

### XML & XSD

XML:

```xml
<?xml version="1.0"?>
<memo>
    <aan>Jan</aan>
    <van>Piet</van>
    <kop>Let op</kop>
    <tekst>Definitie structuur</tekst>
</memo>
```

XSD:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <!-- Begin met opsomming van alle tags + hun type -->
    <xs:element name="memo" type="memoType"/>
    <xs:element name="aan" type="xs:string"/>
    <xs:element name="van" type="xs:string"/>
    <xs:element name="kop" type="xs:string"/>
    <xs:element name="tekst" type="xs:string"/>

    <!-- Eigen Types Beschrijven -->
    <xs:complexType name="memoType">
        <xs:sequence>
            <xs:element ref="aan" maxOccurs="unbounded"/> <!-- Referentie naar de opsomming hier boven -->
            <xs:element ref="van"/>
            <xs:element ref="kop"/>
            <xs:element ref="tekst"/>
        </xs:sequence>
    </xs:complexType>

</xs:schema>
```

#### Voorbeeld:

XML:

```xml
<boekenlijst>
    <uitgevers>
        <uitgever uitgeverid="U0001">
            <uitgevernaam>Easy Computing</uitgevernaam>
            <contactpersoon>
                <voornaam></voornaam>
                <naam></naam>
                <email></email>
            </contactpersoon>
        </uitgever>
    </uitgevers>
    <boek>
        <title isbn=""></title>
    </boek>
</boekenlijst>
```

XSD:

```xml
<?xml version="1.0" encoding="UTF-8"?>￼
```

## Namespaces:

```xml
<?xml version="1.0"?>
<m:stoel xmlns:m="http://www.weba.com/beuels">
    ...
</m:stoel>
```

```xml
<?xml version="1.0"?>
<h:table xmlns:m="http:...">
    ...
</h:table>
```

## Stored Procedures

```sql
CREATE procedure usp_Customers_Delete
    @custno nchar(5) = NULL
AS
IF @custno IS NULL BEGIN
    RAISERROR('customerID is NULL', 10, 1)
    RETURN
END
IF NOT EXISTS (SELECT * FROM customers WHERE customer_id = @custno) BEGIN
    RAISERROR('klant bestaat niet', 10, 1)
    RETURN
END
IF EXISTS (SELECT * FROM orders WHERE customer_id = @custno) BEGIN
    RAISERROR('klant heeft orders', 10, 1)
    RETURN
END
DELETE FROM customers WHERE customerid = @custno
```

```sql
-- Execute --
EXEC usp_Customers_Delete 153
```

## Triggers

2 Tijdelijke tabellen:

- *deleted* tabel
- *inserted* tabel


```sql
-- Hulp Procedure --
CREATE PROCEDURE usp_mutatie_insert (@MSNR SMALLINT, @MSTYPE CHAR(1), @MSNR_NEW SMALLINT)
AS
    INSERT INTO mutatie (gebruiker, mut_tijdstip, mut_snr, mut_type, mut_snr_new)
    VALUES (user, getdate(), @MSNR, @MSTYPE, @MSNR_NEW)
```

### Insert Trigger

```sql
CREATE TRIGGER insert_speler ON SPELERS FOR insert
AS
INSERT INTO mutatie (gebruiker, mut_tijdstip, mut_snr, mut_type, mut_snr_new)
SELECT user, getdate(), null, 'i', spelersnr FROM inserted
```

### Delete Trigger

```sql
CREATE TRIGGER delete_speler ON SPELERS FOR delete
AS
    DECLARE @old_snr smallint
    DECLARE del_cursor CURSOR FOR SELECT spelersnr FROM deleted
    OPEN del_cursor
    FETCH NEXT FROM del_cursor INTO @old_snr
    WHILE @@FETCH_STATUS = 0
    BEGIN
        EXEC usp_mutatie_insert @old_snr, 'D', null
        FETCH NEXT FROM del_cursor INTO @old_snr
    END
    CLOSE del_cursor
    DEALLOCATE del_cursor

```

Activatie van de trigger:

```sql
delete from spelers where spelersnr > 115;
```

### Update Trigger

```sql
CREATE TRIGGER update_speler ON SPELERS FOR update
AS
    DECLARE @old_snr smallint
    DECLARE @new_snr smallint

    DECLARE before_cursor CURSOR FOR SELECT spelersnr FROM deleted ORDER BY spelersnr
    DECLARE after_cursor CURSOR FOR SELECT spelersnr FROM inserted ORDER BY spelersnr

    OPEN before_cursor
    OPEN after_cursor

    FETCH NEXT FROM before_cursor INTO @old_snr
    FETCH NEXT FROM after_cursor INTO @new_snr

    WHILE @@FETCH_STATUS = 0
    BEGIN
        EXEC usp_mutatie_insert @old_snr, 'U', @new_snr

        FETCH NEXT FROM before_cursor INTO @old_snr
        FETCH NEXT FROM after_cursor INTO @new_snr
    END

    CLOSE before_cursor
    CLOSE after_cursor

    DEALLOCATE before_cursor
    DEALLOCATE after_cursor
```

```sql
CREATE TRIGGER update_speler_optimalisatie ON SPELERS FOR update
AS
    DECLARE @old_snr smallint
    DECLARE @new_snr smallint

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
        EXEC usp_mutatie_insert @old_snr, 'U', @new_snr

        FETCH NEXT FROM before_cursor INTO @old_snr

        IF update(spelersnr)
            FETCH NEXT FROM after_cursor INTO @new_snr
        ELSE
            SET @new_snr = @old_snr
    END

    CLOSE before_cursor
    CLOSE after_cursor

    DEALLOCATE before_cursor
    DEALLOCATE after_cursor
```

Activatie van de trigger:

```sql
update top 1 spelers set geslacht = 'V' where geslacht = 'M'
```
