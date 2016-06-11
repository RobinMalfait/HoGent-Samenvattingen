## VRAAG 1: installatie van een back-up file.

## vraag 2: drie opgaven waarvan 1 trigger, 1 view en 1 stored procedure

> **!!** dit jaar view in combinatie met een common table

vb: geef de meeste geschikte oplossing voor de volgende 3 vragen door gebruik te maken van trigger view en sp.

## Vraag 2 A:

zorg ervoor dat wanneer de famileinaam van de patient gewijzigd wordt er automatisch een notitie aangemaakt wordt met de datum waarop de familienaam werd gewijzgid en de boodschap '[oude familienaam] word gewijzigd naar [nieuwe famielienaam]

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

manager van de dienst radiologie is enkel geinteresseerd in de familienaam en voornaam van de radiologen het salaris en het aantal dagen dat de specialtist al in dienst is verekend. uiteraard wil hij enkel radiologen zien.
zorg voor een gepersonaliseerde weergave op maat van de manager

```sql
create view vraag_1
as
select persvoornaam, persachternaam, perssalarsis, datadiff(weekday, persdatupindienst, getdate()) AS 'aantaldageinINDienst'
from personleel s join personeel_medspec sm on spers_nr = sm.pm_pers_nr
where sm.pm_medspec_cd LIKE 'RA%'
```

## vraag 2 C

De dienst interge geneeskudne is op zoek naar een oplossing om wanneer zij een pation_nr ingeven, ze snel een afdruk zien met alle behandelingen en verrichten die er reeds gebeurt zijn voor deze patient. geef ook aan hoe je deze code kan activeren.

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
	where behandling_patione_nr = @pat_id

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

en welke plaasten wonen meer dan 10 patienten die ouder zijn dan 40 jaar geef patione_plaats, geboortedatum van de oudste patioen en het aanal patiënten

- classic for group by and having (7 punten)
- functies zoals datediff zullen staan in een lijst waar we op examen gebruik van kunnnen maken

```sql
select patione_plaats, min(patient_geboortedatum), count(*)
from patione
where datediff(year, patioen_geboortedatum, getdate()) > 40
group by patient_plaats
having count(*) > 10;
```

## vraag 4 (7p): Bepaal per afdeling wie het meeste verdient.

geef naam van de afdeling, achter en voornaam van het personeelslid en het salaris. bij de afdeling zonder personeel schrijf je 'geen personeel' in de kolom "salaris" en
laat je achter- en voornaam leeg. sorteer op afdelingsnaam

- subquerie
- dit is opgelost met een union maar het kan ook met een case

```sql
select a.afdleing_naam, p.pers_achternaam, p.pers_voornaam, str(p.pers_salaris) as salaris
from afdeling a joint personeel p on a.afdlings_nr = p.pers_afd_toegewezen
where p.pers_salaris = (select max(pers_salaris) from personeel wehere pers_afd_toegewerzen = a.adfelings_nr)
union
select a.adfelingsnaam,' ', ' ','GEEN PERSONEEL'
from afdleing a left join personeel p on a.afdleings_nr = p.pers_afd_toegewezen
where p.pers_nr is null
order by afeling_naam
```

## vraag 5 (5punten)

bestudeer odnerstaande query's:

```sql
select behandeling_nr, behandleing_datum, behandeling_opmerking
from behandleing
order by behaing_nr;
```

```sql
select behandling_nr, behaning_datum, behandeling_opmerking
from behandeling
order by behandeling_huidig_rek_totaal.
```

### a) hoeveelkeer is de eerste query sneller dan de tweede (verkaar)

- -> dankzij sql performance
- -> de eerset is sneller omdat daar primary key is en dus clusterd index op staat.

### b ) stel dat de tweede query heel vaak gebruit wordt hoe kun je dit versllenenn

- -> index toevoengen op bhenalidign_iets maak je coverd index en behandlikg_opmerking includen

### c) welke tool gebruik je hievoor
