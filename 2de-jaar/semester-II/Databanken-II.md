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
<parent>
    <child>Some Child</child>
    <child>Some Other Child</child>
    <child name="special">Some Other Child with an attribute</child>
</parent>
```

## XML Schema

Een opmaak waaraan het XML document moet voldoen, alle tags en eventuele waarden.
