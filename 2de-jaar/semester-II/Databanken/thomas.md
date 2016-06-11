> Credits @ [Thomas Detemmerman](https://www.facebook.com/groups/630952883612310/1275441322496793/).

## VRAAG 1: installatie van een back-up file.

## vraag 2: drie opgaven waarvan 1 trigger, 1 view en 1 stored procedure

> **!!** dit jaar view in combinatie met een common table

vb: geef de meeste geschikte oplossing voor de volgende 3 vragen door gebruik te maken van trigger view en sp.

## Vraag 2 A:

Zorg ervoor dat wanneer de familienaam van de patient gewijzigd wordt er automatisch een notitie aangemaakt wordt met de datum waarop de familienaam werd gewijzgid en de boodschap '[oude familienaam] word gewijzigd naar [nieuwe famielienaam]

- -> opl: dit word auto door systeem gedaan dus een trigger op table patient

```sql
CREATE TRIGGER t_vraag3a ON patient FOR UPDATE
AS
	IF UPDATE(patient_achternaam)
	BEGIN
		DECLARE @old_name VARCHAR(50)
		DECLARE @new_name VARCHAR(50)

		SELECT @new_name = patient_achternaam
		FROM inserted

		SELECT @old_name = patient_achternaam
		FROM deleted

		IF @old_name <> @new_name BEGIN -- controle of de namen wel degelijk verschillend zijn

			INSERT INTO patient_notitie (pn_patient_nr, pn_notitie_datum, pn_notitie_commentaar)
				SELECT patient_nr, GETUPDATE(), @old_name + ' werd gewijzigd in ' + @new_name + ' door ' + CURRENT_USER
				FROM inserted
		END
END
```

## vraag 2 B:

De manager van de dienst radiologie is enkel geinteresseerd in de familienaam en voornaam van de radiologen, het salaris en het aantal dagen dat de specialist al in dienst is verrekend. Uiteraard wil hij enkel radiologen zien.
Zorg voor een gepersonaliseerde weergave op maat van de manager

```sql
create view vraag_1
as
select persvoornaam, persachternaam, perssalarsis, datadiff(weekday, persdatupindienst, getdate()) AS 'aantaldageinINDienst'
from personleel s join personeel_medspec sm on spers_nr = sm.pm_pers_nr
where sm.pm_medspec_cd LIKE 'RA%'
```

## vraag 2 C

De dienst interne geneeskunde is op zoek naar een oplossing om wanneer zij een patient_nr ingeven, ze snel een afdruk zien met alle behandelingen en verrichtingen die er reeds gebeurd zijn voor deze patient. Geef ook aan hoe je deze code kan activeren.

> **Let op:** geen join gebruiken en de verrichting service is ..(eigen aan situatie?)

```sql
create procedure usp_examen
    @pat_id char(6)
as
daclare @comment varchar(2000)
declare @sid char(5)
dcare c_treatements cursor for
	select behandeling_opmerking, behandleikgn_verrichtg_nr
	from behandeling
	where behandling_patiente_nr = @pat_id

open c_treatements

fecht next from c_treatemenst into @comments, @sid

while @@frechts_status = 0 Begin

print 'behandling:' = + @coments

select @comments = verrictng_oppmmerkign
from verrichtign
wehre verrichtnig_nr = @sid
print ' > verricth/service ' +@comments

frecht next jfrom c_treatemsnt into @comments, @sid

end
close c_treate
dealocate c_treatemetns

exec esp_exhapen 100nummer
```

## vraag 3

In welke plaatsen wonen meer dan 10 patienten die ouder zijn dan 40 jaar geef patient_plaats, geboortedatum van de oudste patient en het aantal patiënten

- classic for group by and having (7 punten)
- functies zoals datediff zullen staan in een lijst waar we op examen gebruik van kunnnen maken

```sql
select patiente_plaats, min(patient_geboortedatum), count(*)
from patiente
where datediff(year, patioen_geboortedatum, getdate()) > 40
group by patient_plaats
having count(*) > 10;
```

## vraag 4 (7 punten): Bepaal per afdeling wie het meeste verdient.

Geef naam van de afdeling, achter- en voornaam van het personeelslid en het salaris. Bij de afdeling zonder personeel schrijf je 'geen personeel' in de kolom "salaris" en
laat je achter- en voornaam leeg. Sorteer op afdelingsnaam

- subquery
- dit is opgelost met een union maar het kan ook met een case

```sql
select a.afdeling_naam, p.pers_achternaam, p.pers_voornaam, str(p.pers_salaris) as salaris
from afdeling a join personeel p on a.afdlings_nr = p.pers_afd_toegewezen
where p.pers_salaris = (select max(pers_salaris) from personeel wehere pers_afd_toegewerzen = a.adfelings_nr)
union
select a.adfelingsnaam,' ', ' ','GEEN PERSONEEL'
from afdeling a left join personeel p on a.afdelings_nr = p.pers_afd_toegewezen
where p.pers_nr is null
order by afdeling_naam
```

## vraag 5 (5 punten)

Bestudeer onderstaande query's:

```sql
select behandeling_nr, behandeling_datum, behandeling_opmerking
from behandleing
order by behandeilng_nr;
```

```sql
select behandling_nr, behandeling_datum, behandeling_opmerking
from behandeling
order by behandeling_huidig_rek_totaal.
```

### a) hoeveel keer is de eerste query sneller dan de tweede (verkaar)

- -> dankzij sql performance
- -> de eerste is sneller omdat daar een primary key is en dus clustered index op staat.

### b ) stel dat de tweede query heel vaak gebruikt wordt hoe kun je dit versnellen

- -> index toevoegen op behandeling_iets maak je covered index en behandeling_opmerking includen

### c) welke tool gebruik je hiervoor
