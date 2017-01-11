---
title: Analyse III
link: http://robinmalfait.com/3de-jaar/semester-I/Analyse-III.md
---

# 1. Modelleren van processen

## Processen ontdekken

- Opzetten van het project
    - samenstellen van het team
- Informatie verzamelen
    - het bekomen van een goed begrip van het proces
    - elicitatietechnieken
- Begeleiden van de modelleertaak
    - Creëren van het procesmodel
    - Modelleermethode
- Kwaliteitsborging
    - De procesmodellen beantwoorden aan de vooropgestelde kwaliteitscriteria
    - Vertrouwen creëren in de procesmodellen voor alle stakeholders

> **!** Proces-instance = een unieke passage doorheen een proces: voor één bepaaldek lant, leverancier, artikel, enz.
VB. Proces "boeken van een reis"
- "Elke reis is verschillend"
- "Er zit niet echt een lijn in: onze klanten gaan naar verschillende bestemmingen, in verschillende seizoenen met verschillende transportmiddelen"
- "We doen nooit iets op dezelfde manier; er zijn zoveel speciale voorwaarden"

## Expertise van procesanalisten

- Problemen begrijpen
    - Kennis van het probleemdomein
    - De kennis van de organisatie helpt om het probleem te structureren.
- Problemen oplossen
    - Identificatie van de procestriggers
    - Hypothese-beheer: formuleren en testen van hypotheses
    - Uitzetten van doelstellingen: wat is de volgende stap
    - Top-down strategie gebasseerd op de doelstellingen
- Modelleerskills
    - Goed gestructureerd, duidelijke layout
    - Systematische labels
    - Expliciete start- en eindpunten
    - Gepaste granulariteit en decompositie (subprocessen)

## Elicitatietechnieken

- **Creatieve technieken**

    - Brainstorm
        - **nadelen**
            - ervaren moderator nodig
            - sommige deelnemers veel dominanter
        - **alternatief** brainwriting 6-3-5
            - Iedereen komt aan bod
            - Werkt verder om andere ideeen
            - Duurt niet lang
    - Invalshoek veranderen
        - Je gaat in een soort van 'rol', je denkt niet aan je eigen mening maar aan de mening van de 'hoed'.
    - Gebruik maken van een analogie
        - Je komt los van de huidige situatie
        - stimuleren creativiteit

- **Uitvraagtechnieken**

    - Interviewen
        - Gestructureerd vs. ongestructureerd
        - Combinatie van open & gesloten vragen
        - Veronderstelling: analist en stakeholder verstaan elkaars terminologie
        - **LSD** Luisteren, Samenvatten en Doorvragen
        - Luistervaardigheden:
            - Empathie
            - Analyse
            - Synthese
        - Geen manipulatieve vragen
        - Goed voorbereiden
        - Informatie nodig over persoon, bedrijf, ...
        - Begin met neutrale vragen (afwijken mag, maar hou de focus)
            - **Veel prater** gesloten of half open vragen
            - **Niet-prater** open vragen
        - **Nadelen**
            - Neemt veel tijd in beslag door feedbacksessies (LSD)

    - Enquête houden
        - fysieke of digitale vragenlijkst
        - Open of gesloten vragen (meerkeuzevragen) of combinatie
        - eventueel anoniem
        - **Voordelen**
            - Veel informatie in korte tijd
            - Snelle verwerking bij gesloten vragen
            - Geen remmingen indien anoniem (maar: anonimiteit is moeilijk in de praktijk!)
        - **Nadelen**
            - deelnemers kunnen vragen verkeerd interpreteren
            - Je mist 'body language' = non verbale communicatie

- **Observatietechnieken**

    - Veldobservatie
        - Gebruiker werkt in bijzijn van analist
        - varianten
            - geen interactie
            - gebruiker legt uit wat hij doet

    - Werkstage
        - Analist voert zelf het werk uit
        - zeer tijdrovend mara levert diepgaande kennis op

- **Documentatie-georiënteerde technieken**

    - Systeemarcheologie
    - Lezen vanuit specifiek oogpunt
        - Documenten verwijzen naar rollen, activiteiten business-objecten
        - Formele documentatie
            - Organigram van de organisatie
            - Tewerkstellingsplannen
            - Kwaliteitsrapporten (bij. bij certificaties), auditrapporten
            - Woordenlijsten en handboeken
            - Workinstructies
    - Hergebruik van requirements
        - eerder uitgevoerde analyses
        - kunnen tijd en kosten voor analsye sterk reduceren

- **Ondersteunende technieken**

    - Mind mapping
    - Workshops
        - breng alle key-stakeholders samen
        - Deelnemers discussiëren om zo een gedeeld begrip te creëren
        - Dikwijls software-ondersteund
            - Afzonderlijke rol naast moderator
            - Tijdens workshop worden modellen getekend
        - Model dient als referentie voor verdere discussies
    - CRC-kaarten
        - **Class Responsibility Collaboration**
        - Tijdens workshop worden relevante business-objecten op **kaarten** geschreven
            - Voorbeeld: bestelling, product, klant
        - Workshopdeelnemers voegen daar **eigenschappen** aan toe
        - Kaarten worden gebruikt om processen en requirements in kaart te brengen
    - Audio en video opnamen
        - Gebruikt bij veldobservatie, interviews en workshops
        - **Nadeel**
            - deelnemers gaan zich misschien anders gedragen
    - Use cases
        - Zijn elementaire bedrijfsprocessen: **1** persoon, **1** tijdsspanne, **1** plaats
        - Maken deel uit van een groter geheel
        - Helpen om het elicitatieprocess te **structureren**
    - Prototypen
        - = Werkende software van kritieke delen van een toekomstig systeem

### Techniekkeuze

- Elke techniek heeft voor- en nadelen
- **!** **Combinatie** van technieken is nodig
- Houd bij de keuze rekening met
    - Menselijke aspecten
        - Communicatieve en persoonlijke vaardigheden van stakeholders
        - Ervaring met bepaalde technieken
        - De mate waarin stakeholders zich beust zijn van requirements
    - Organisatorische aspecten
        - **Beschikbaarheid** belanghebbenden
            - Weinig tijd => verkies veldobservatie boven interviews
        - Beschikbare **budget** en **doorlooptijd**
        - workshop is tijdsbesparen
            - Moeilijk bij geografische spreiding van stakeholders
        - Creatieve technieken minder gangbaar bij fixed price / fixed date projecten
        - kies bij vervanging van bestaand systeem voor documentatiegebaseerde technieken
    - Vakinhoudelijk aspecten
        - vereiste detailniveau beïnvloedt keuze
        - ervaring analist met bepaalde technieken

### Invloed van de bedrijfscultuur

#### Open Cultuur

Waar alle medewerkers aangemoedigd worden om hun ideeën en kritiek te uiten

> maak gebruik van workshop aangezien de deelnemers gewoon zijn om hun ideeën te spuiens

#### Strict-hiërarschie organisaties

- draag er zorg voor dat iedere stakeholder in gelijke mate aan bod komt
- zorg ervoor dat iedeeën en kritiek niet achtergehouden worden. Kies bijvoorbeeld voor anonieme enquëtes als aanvullende techniek.

# 2. Documentatie technieken

## Funcitonele requirements beschrijven

- Use Cases (Analyse II)
- User stories
- Use cases 2.0 (use case slices)

## User Stories

- Korte beschrijving
- Wat een gebruiker wil
- Gewone spreektaal
- Past op een post-it
- Begrip binnen agile software development
- 'wie', 'wat', 'waarom'

```
As a <role>
I want to <goal/desire>
So that <benefit>
```

```
Als een <rol>
Wil ik <doel>
Zodat <voordeel>
```

### Waarom user stories?

- Verbale communicatie stimuleren/forceren
- Snelle feedback
- Face-to-face communicatie
- Geen technisch jargon
- Planning faciliteren
- Detailleer waar en wanneer nodig (korte termijn versus midellange termijn)

### User stories schrijven

Een goede user story is

- Independent (Onafhankelijk)
- Negotiable (Onderhandelbaar)
- Valuable (Waardevol voor gebruiker en opdrachtgever)
- Estimatable (Schatbaar)
- Small (Klein)
- Testable (Testbaar)

> **!** INVEST

#### Tips

- Identificeer de stories
    - Start met vastleggen van de doelstellingen
- "Slice the cake"
    - Bij het schrijven (opsplitsen) van user stories aandacht dat alle lagen van de applicatie voorkomen
- "gesloten" stories
    - Gesloten story eindigt met een user's goal
- Leg beperkingen vast
- Focus op de belangrijke zaken in de nabije toekomst
- GUI zo lang mogelijk uitstellen
- Gebruik "user roles" in de story
- Schrijf voor 1 user
- Schrijf in actieve taal
- Laat de gebruiker/opdrachtgever meeschrijven
- User stories worden niet genummerd
- Zijn niet gebonden aan IEEE-guidelines
- Zijn geen use cases
    - Scope
    - Volledigheid
    - Levensduur
    - Doel

## Story map

> Een story map is een voorstelling van de user stories volgens prioriteit (hoog , laag, verticale as) en functionaliteit (van links naar rechts, horizontale as)

![](http://d.pr/i/sPMe+)

## Use Cases 2.0 (Use case slices)

- Houd de informatie-uitwisseling **simpel** door het vertellen van verhalen (gebruik van stories)
- Overzie en begrijp het **grote geheel**
- **Focus** op de **(business) value**
- Bouw het systeem in **use case slices**
- Lever het systeem **incrementeel** op
- **Flexibiliteit**, ieder project kent eigen karakteristieken en vergt daarom een eigen aanpak

![](http://d.pr/i/VbkT+)
![](http://d.pr/i/gf2t+)

### Stappenplan

- Beschrijf de **actoren** en de **use cases**
- **Verdeel** de use case in **use case slices**
- Voorbereiden van de use case slice
- Analyseer de use case slice
- Implementeer de software (voor een slice)
- **test het systeem** (voor een **slice**)
- **test het systeem in zijn geheel**
- **inspecteer en wijzig de use cases**

# 3. Wat is een proces

- Ieder systeem wordt ontwikkeld om een bepaalde reden
    - Beter procesbeheer
    - Lagere kosten
    - Beter benutten van commerciële mogelijkheden
    - Verhogen van de servicegraad

> Vooraf eisen helder en éénduidig formuleren = business case

## Business Process Management vs Business Analyse

### BPM

- Gericht op bedrijfsorganisatie
- Meestal voortraject van IT-project

### Business Analyse

- Vertrekt van resultaat BPM-oefening
- Gericht op IT-project
- Tijdens Business Analyse blijkt vaak nood aan procesoptimalisatie

## Wat is een proces? Waarom BPM?

### 1. Definitie van een proces

- Transformatie van input naar output
- Creëren van waarde voor afnemer of klant (= belanghebbenden) **BUSINESS VALUE**
- Realiseren van doelen
    - Bepaald door verwachtingen van de afnemers of belanghebbenden
- ![](http://d.pr/i/uHLV+)

*opmerkingen*:

- Input in een proces is in het algemeen output van andere processen.
- Processen in een organisatie wordne in het algemeen gepland en uitgevoerd onder beheerste omstandigheden om waarde toe te voegen.

### 2. BPM (Waarom? Hoe?)

#### Waarom?

- Om je proces goedkoper te doen
- Om je proces sneller te doen
- Om je proces beter te doen

#### Hoe?

- Continuous Process Improvement (CPI)
    - Stelt de hiudige processtructuur niet in vraag
    - Identificeert problemen en lost ze één voor één op. Stap voor stap
- Business Process Re-Engineering (BPR)
    - Stelt de fundamentele veronderstellingen en principes van de huidige processtructuur in vraag.
    - Gericht op het realiseren van een doorbraak, bij. door dure taken zonder directe toegevoegde warade te elimineren.

> - "Hoe zit een proces in elkaar" momenteel -> **AS-IS**
> - Reengineering Process -> **TO-BE**

### 3. Verklaring van enkele begrippen

| Begrip | Uitleg                                |
| ------ | ------------------------------------- |
| **input** | Iets dat transformeerd, verbruikt, verwerkt wordt (klantenvraag, te behandelen dossier, ...) |
| **output** | iets dat geproduceerd wordt. (attest, antwoord, behandeld dossier, ...) |
| **beheersing/besturing** |  Hoe en wanneer een proces/activiteit plaatsvindt; wordt niet verwerkt of verbruikt (een instructie, richtlijn, doelstelling, ...) |
| **middelen** |  Personen, systemen, tools, uitrusting, activa, ...; worden niet verwerkt of verbruikt -> worden <em>gebruikt</em> |

### 4. End-to-End

- Proces begint bij de behoefte van exteren klant of afnemer
    - Klant of afnemer triggert het proces
- Proces eindigt bij dezelfde klant/afnemer
    - Trigger is volledig beatnwoord
    - Één of meerdere outputs

#### Proces vs functie

- Proces
    - Verzameling activiteiten
    - Gericht op het bereiken van één of meerdere outputs
- Functie
    - Verzameling activiteiten
    - Gegroepeerd volgens competentie
- ![](http://d.pr/i/nZQS+)

#### Proces vs. afdeling

- ![](http://d.pr/i/i4Fs+)

#### Belang van processen

- Processen = hart van een organisatie
- Processen lopen vaak fout bij  transfer tussen
    - Andere persoon
    - Andere afdeling
    - Andere instantie

##### 2 belangrijke dimensies in organisatie

1. Strategische dimensie (de juiste dingen doen) **Effectiviteit**
    - Inspanningen van een organisatie moeten gericht zijn op het verbeteren van het vermogen om waarde te creëren
    - Kosten vs baten van het resultaat afwegen
    - 1e stap (in bpm): **identificeren van de 'waarde creërende stromen**'
2. Operationele dimensie (de dingen goed doen) **Efficiëntie**

##### Creëren van waarden

- Gebeurt via **processen**
- Niet alle processen gericht op waarde creëren
    - Niet alle processen zijn evenwaarding
    - Vaak sappen zonder toegevoegde waarde
    - identificieren van deze processen = 1e stap

##### 3 clusters van processen

1. **Primaire processen (core business processen)**

    - Processen die nodig zijn om de behoeften van de externe klanten te vervullen

2. **Ondersteunende processen (support business processen)**

    - Processen die de primaire processen ondersteuenen

3. **Sturende processen (management processen)**

    - Processen die nodig zijn om de organisatie te besturen teneinde te voldoen aan de doelstellingen en aan de wet- en regelgeving.

| &nbsp;    | Sturend | Primair | Ondersteunend |
| --------- | :-----: | :-----: | :-----------: |
| Afhandelen van een klacht van een klant (van ontvangst tot antwoord) | &nbsp; | &nbsp; | x |
| Goedkeuren van binnenkomende facturen bij een stadsbestuur | &nbsp; | &nbsp; | x |
| De aanwerving van nieuwe medewerkers in een call center | &nbsp; | &nbsp; | x |
| Organisatie van de bachelorproef aan een hogeschool | &nbsp; | x | &nbsp; |
| Agile project management | x | &nbsp; | &nbsp; |

##### Problemen bij processen:

- Functioneel georganiseerde organisaties
    - Functie/Afdeling = verticaal
    - Proces = horizontaal
- Dalende doeltreffendheid door groei
    - Groei leidt tot specialisatie: men wordt efficiënter op een bepaald domein maar men verlist het einddoel, de klant, uit het oog
- Gewoontevorming
    - Men stelt niet meer in vraag wat men doet en hoe men het doet

![](http://d.pr/i/dexX+)

##### Vericale functionele "kachelpijpen"

- Elke kachelpijp stelt een **specifieke functie of dienst** voor:
    - IT, marketing, financien, HR, ...
- Komt voor in **hierarchische, gecentraliseerde organisaties**
- **Expertise** wordt **gedeeld** over **gans het bedrijf**
- **Duidelijke carriere-pade en opleidingsprogramma's**
- Voor elke functie bestaan **backups**
- Managers zijn **vertrouwd** met het werk van hun ondergeschikten
- **Standaarden** kunnen gemakkelijk gehanteerd worden

###### NADELEN

- Een **eenheid op zich**
- **Focus** op de individuele dienstverlening (bv.: IT) i.p.v. op de dienstverlening aan de klant
- Processen zijn gericht op efficiëntie (de dingen juist doen), niet op effectiviteit (de juiste dingen doen voor de organisatie)
- **Communicatieproblemen** (eigen jargon)
- Business prioriteiten kunnen **afwijken** van de functionele prioriteiten
- Opgeleverde projecten **voldoen niet aan de noden** van de business units

##### Horizontale process-tunels

- Komt voor in **gedecentraliseerde** organisaties
- Units worden gecreëerd om te focussen op een **bepaald business domein**
- Prioriteiten zijn gebasseerd op de noodzaak van producten en processen
- De **communicatie** tussen de diesnten is **veel beter**
- Het personeel is op de hoogte van diverse aspecten van de producten en processen

###### NADELEN

- De perceptie: opwaartse carierepaden beperkt
- Jobevaluaties gebeuren vaak door leidinggevenden die de job zelf niet kennen
- Vaak weinig backup-personeel
- Weinig synergie in het gedrag
    - Iedere business unit werkt op zijn eigen manier, wat kan leiden tot redundantie en inefficiëntie

### 5. Starten met procesverbetering

#### "Kritische" of sleutelprocessen

- Staan in functie van **de strategie van een organisatie**
- Dragen bij tot het **voldoen aan de behoeften van de belanghebbenden**
- Zijn de sleutel tot het **success of continuïteit van de organisatie**
- Worden bepaald op basis van **kritische successfactoren**

| Proces \ Succesfactor | Verhogen klanttevredenheid | Versterken competenties | Verhogen marktaandeel | Verminderen voorraad | Verbeteren van ... |
| ---- | :--: | :--: | :--: | :--: | :--: |
| Ontwikkelen vna producten / diensten | x | &nbsp; | &nbsp; | &nbsp; | &nbsp; |
| Opleiden van personeel | &nbsp; | x | &nbsp; | &nbsp; | &nbsp; |
| Promotie | &nbsp; | &nbsp; | x | &nbsp; | &nbsp; |
| Leveren van producten / diensten | x | &nbsp; | &nbsp; | x | &nbsp; |
