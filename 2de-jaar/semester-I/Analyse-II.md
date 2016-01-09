---
title: Analyse II
---

# 1. Inleiding

## Kwaliteitsvolle ICT Projecten Opleveren

> Voldoet aan alle eisen.

![](https://robinmalfait.com/afbeeldingen/droplr/1hwnp.png)

- Voldoet: TESTEN
- Alle: FR+NFR
- Eisen: verwachtingen -> klant
    - Opdrachtgever
    - Gebruikers -> UX & Tevreden

> **!** TESTEN

- **Functionele Requiremenets**
    - Use Case
- **Niet-functionele Requirements**
    - Meetvoorschriften (moeten SMART zijn)
    - Normen
    - Kritische Succes Factoren (KSF)

### Projecten:
Een project wordt gerealiseerd binnen een bepaald budget, tijd, team.
De opdrachtgever waakt over budget, tijd. De gebruiker zal ermee moeten werken.

- **Agile**
    - Scrum
    - Kanban
- **Time**
- **Money**
- **Resources**
    - Business Experts
    - Geld
    - Money
    - Analisten
    - Ontwerpers
    - Programmeurs

### Realiteit:

- 1994: +50% faalt
- Nu, door agile: +40% is succesvol

#### Het plaatje dat boven elke ICT'er zijn bed moet hangen

![](https://robinmalfait.com/afbeeldingen/droplr/1hFt.png)

> **! Examen Vraag**: Je krijgt een verhaal, en in dat verhaal een functionele requirement detecteren + use case uitschrijven
>
> **! Examen Vraag**: Je krijgt een verhaal, en in dat verhaal een niet-functionele requirement detecteren + uitschrijven

### Pareto Regel

> 80-20 regel: 80% van de bevolking gebruikt 20% van de mogelijkheden.

# 2. Use Cases

## 2.1 Requirements

Ieder systeem wordt ontwikkeld om een bepaalde reden:

- Beter procesbeheer
- Lagere kosten
- Beter benutten van commerciële mogelijkheden
- Verhogen van de servicegraad

> Vooraf de eisen helder en éénduidig formuleren
>
> = business case

Vooraf eisen helder en éénduidig formuleren:

- Identificeren van stakeholders (vb. alle gebruikers, medewerkers, ICT'ers, boekhouding)
- Formuleren van KSF (Kritische Succesfactoren)
- Formuleren van meetbare acceptatiecriteria

Iedere applicatie ontwikkeld met 1 doel:
- Winst maken


## 2.2 Requirements-KSF

Formuleren kritische succesfactoren (KSF) = redelijk abstract

Voorbeelden:

- **Business- to- consumer internetsite (grote heterogene groep gebruikers)**

    KSF: gemak waarmee de gebruiker het gewenste product kan bereiken
    KSF: begrijpbaarheid, zelfverklarend

- **Boekhoudpakket (beperkte groep van zeer professionele gebruikers)**

    KSF: traceerbaarheid
    Zelfverklarend is minder belangrijk

- **Grote batchgeoriënteerde administratieve systemen**

    KSF: snelheid en "middelen" beslag

- **PC-applicatie**

    KSF: werkbaar onder verschillende systeemsoftware

- **Webshop**

    KSF: snel, betrouwbaar, veilig


## 2.3 Requirements: Meetbare acceptatiecriteria

Formuleren van meetbare acceptatiecriteria

- KSF: redelijk abstract
- Meetbare acceptatiecriteria: concreet

Vb.:

**KSF**: klanten direct helpen aan de telefoon

```
Meetbare criteria

* De klantengegevens met behulp van een klantnr of NAW-gegevens binnen de 2 sec. op het scherm tonen
* Alle wijzigingen van toegestane elementen gebeuren online
* De effecten van deze online wijzigingen binnen de 2 sec weergeven op het scherm
```

Vb. (2):

**KSF**: Bij invoer van gegevens wordt gecontroleerd op juistheid en volledigheid

```
Meetbare criteria

* Van ieder veld wordt bepaald wat de mogelijke syntax van de invoer is (@: e-mail), invoercontrole op elk veld
```

## 2.4 Soorten Requirements

- Niet-functionele Requirements
- Functionele Requirements

### 2.4.1 Niet-Functionele Requirements

- Look & Feel Requirements

    VB.: In lijn met de huisstijl (UX Design)

- Usability & Humanity Requirements

    VB.: Is het bruikbaar voor slechtzienden of voor mensen met andere problemen?
    Accessibility is zeer belangrijk (UX Design)

- Performance Requirements

    VB.: Bankautomaat moet binnen de 5 seconden het geld geven om files aan de automaat te vermijden

- Operationele en Omgevingsrequirements

    VB.: De bankautomaat moet bruikbaar zijn bij laaghangende zon pal op het scherm

    -> Beperkingen opleggen aan te gebruiken kleuren.

- Onderhoudsrequirements

    VB.: Systeem-updates moeten automatisch kunnen verlopen, zonder dat de gebruiker iets moet doen.

- Security Requirements

    VB.: Voor het aanloggen is de e-ID nodig

- Culturele en Politieke Requirements

    VB.:
    - Een kruis mag nergens gebruikt worden, want dat is een religieus symbool
    - Het systeem moet beschikbaar zijn in het Nederlands, Frans, Engels en Chinees

- Legal Requirements

    VB.: De website moet beantwoorden aan de Belgische en Europese *privacy-* en *cookie-*wetgeving

**Sjabloon niet-functionele requirements:**

| NFR             | Categorie NFR                                                                        |
| --------------: | ------------------------------------------------------------------------------------ |
| Indicator       | De naam van de NFR.                                                                  |
| Meetvoorschrift | De wijze waarop de NFR gemeten kan worden.                                           |
| Norm            | De norm waaraan de NFR moet voldoen (= wat je verwacht als resultaat van de meting). |

> Een Niet-Functionele requirement moet **SMART** zijn.

| Letter | Voluit | Vraag | Beschrijving |
| ------ | ------ | ----- | ------------ |
| S | Specifiek | WAT? | Ik weet precies wat ik wil bereiken. |
| M | Meetbaar | WAARAAN? | Ik weet precies waaraan ik kan merken of het resultaat bereikt is. |
| A | Acceptabel | WAAROM? | Ik weet waarom ik deze doelstelling wil bereiken. |
| R | Realistisch | WELKE? | Ik weet welke haalbare acties ik onderneem om mijn doel te bereiken. |
| T | Tijdgebonden | WANNEER? | Ik weet duidelijk wanneer ik begin en wanneer mijn doel bereikt moet zijn. |

Voorbeeld:

| NFR             | Usability & Humanity |
| --------------: | -------------------- |
| Indicator       | Gebruiksvriendelijk  |
| Meetvoorschrift | Vijf klanten zoeken een van tevoren opgegeven boek, plaatsen die in hun winkelmandje en vervolledigen de bestelling door opgave van verzendadres en betaalmiddel. |
| Norm            | De tijd die nodig is om een boek te zoeken en de bestelling hiervan af te ronden, bedraagt hoogstens 3 minuten. |

### 2.4.2 Functionele Requirements

- Het vastleggen en éénduidig definiëren van de functionaliteit (taak van de functioneel ontwerper)
- Volgens "best practices" en/of gestructureerde methoden -> Use Cases

#### Use Cases:

- "Your use case is not my use case"
- "Manage your energy"
- KIS: Keep It Simple
- Communicatie: duidelijkheid
- Geef een globaal beeld van functies van het systeem (low-precision)
- Het verhaal wordt voorgesteld door opdrachtgever(s)
- Ieder schrijft eigen verhaal, ieder moet weten wat het systeem doet [groep]
- Scope en domein bepalen [groep]
- Verschillende functionaliteiten worden uitgeschreven [individueel of kleinere groep]
- Bespreking van de verschillende individuele verhalen [groep]

**Conclusie:**

- Visie op het systeem
- Scope
- Situering van het systeem
- Belanghebbende partijen (Primary actors, Stakeholder)
- User's goals / doelen
- Alle verhalen (elk verhaal max. 1/2 pagina lang)


Geef een voldoende gedetailleerde visie

* Brainstorming [groep]
    - Elementaire business processen = use cases
    - Primaire actoren
    - User goals
    - Prioriteiten
* Standaard vastleggen om use case uit te schrijven [groep]
* Schrijf de use case uit [individueel of per 2]
* Geef use cases door, individuele lezing [individueel of per 2]
* Voorstelling van de use cases aan de groep (discussie)

Tips:

- "Blijf in dezelfde kamer"
- Juiste info door de juiste mensen
- Kleinere groepen werken efficiënter
- Spendeer max. 1/2 dag met de eindgebruiker
- Management (opdrachtgever) mee in je boot
- Let op actor <> jobtitel
- "Use cases bij de kg" vermijden
- Je zal zeker vastlopen
- Use cases uitwerken is een sociale activiteit...
- Wees een minimalist

##### Primary Actors / Stakeholders

> **Stakeholders** zijn belanghebbende / deelnemende partijen
>
> **Primary Actor** is de belanghebbende partij die het systeem vraagt een taak (service) uit te voeren
>
> **Primary Actor** activeert dikwijls de use case/functionaliteit

#### Elementair business proces

VB.: Ik wil een verkoopscontract binnenhalen.
Om dat te doen moet ik met de manager gaan lunchen.
Om dat te doen moet ik geld halen van de rekening.
Om dat te doen moet ik mij kenbaar maken.
Om dat te doen moet ik mijn bankkaart hebben en moet mijn bankkaart ingelezen worden.
Om dat te doen moet ik ...

VB.: Ik wil de tab-toets vinden zo dat ik de cursor kan plaatsen in het adresveld,
zo kan ik mijn adres ingeven, zodat ik mijn persoonlijke gegevens kan ingeven in het pakket.
Zo kan ik een aanvraag indienen voor een autoverzekering,
zo kan ik mijn auto verzekeren, dan kan ik met mijn auto rijden

![](https://robinmalfait.com/afbeeldingen/droplr/1iPNo.png)

1. **Hoe**? (*Lower Level*)
2. **Wat** wil de primary actor? (*User's goal*)
3. **Waarom** doet de primary actor dit? (*Higher level*)

> Goede use case: 3 tot 10 stappen

Voorbeeld:

- Actor: Technieker
- Goals:
    - Bancontactsysteem laten werken (High-level)
    - Laat zelftest op bancontactsysteem lopen (User goal)

Voorbeeld 2:

- Actor: Klant
- Goals:
    - Gebruik bancontactsysteem (High-level)
    - Haal geld af (User goal)
    - Schrijf geld over (User goal)
    - Vraag saldo op (User goal)

#### Preconditie

- Preconditie geeft aan wat waar moet zijn bij de start van de use case
- Controle in de use case kan niet meer!
- In vele gevallen geeft de preconditie aan dat een andere use case reeds uitgevoerd is

VB.: ![](https://robinmalfait.com/afbeeldingen/droplr/AwG2.png)

#### Body

- **Normaal verloop:** Top-to-bottom beschrijving van een eenvoudige (meest voorkomende) situatie waarbij het doel van de Primary Actor gerealiseerd wordt.
- **Alternatieve wegen** zijn uitbreidingen hierop

#### Structuur (normaal verlop / uitbreidingen)

- Een **preconditie** onder de welke het scenario loopt
- Een **set actiestappen**
    - Zelfde regels voor elk scenario
    - Actiestap:
        - Interactie tussen 2 actoren: "Klant geeft adres in"
        - Een validatie: "Systeem valideert PINCode"
        - Een interne wijziging: "Systeem vermindert totale bedrag met hoeveelheid"

        - **TIP 1:** Eenvoudige zin: Onderwerp werkwoord voorwerp
        - **TIP 2:** "Wie heeft de bal"
            - Bij elke actie heeft 1 actor een boodschap
            - Duidelijkheid
        - **TIP 3:** Vogelperspectief (Bird's Eye View)
            - Van: "Geef bankkaart en pincode. Verminder saldo met opgegeven bedrag"
            - Naar: "De klant plaatst bankkaart in de kaartlezer en geeft pincode in. Systeem vermindert saldo met opgegeven bedrag."
        - **TIP 4:** Toon de vooruitgang in het proces
            - De grootte van de vooruitgang in 1 stap is gerelateerd aan het niveau van de use case
            - Te kleine stappen, te veel stappen, te lange use case (max. 10 stappen), te laag niveau (te veel details)
        - **TIP 5:** Toon wat de bedoeling van de actor is, niet de beweging
            - Beschrijf <font color="red">**geen** interacties met de GUI</font>
            - De dialoog die wordt beschreven is een veronderstelling van het ontwerp van de GUI
            - Functionele eisen
            - Voorbeeld: ![](https://robinmalfait.com/afbeeldingen/droplr/1bL8x.png)
        - **TIP 6:** Aanvaardbare set van actiestappen
            - Een transactie bestaat uit 4 delen
                1. Vraag en data
                2. Validatie
                3. Wijziging
                4. Resultaat
        - **TIP 7:** Valideer, controleer niet of ...
            - Vermijd "if statements" ![](https://robinmalfait.com/afbeeldingen/droplr/xQOF.png)
        - **TIP 8:** User laat systeem A systeem B aansturen
            - Beschrijf _**geen** interacties met de GUI_ ("User hits fetch button")
            - Mogelijke oplossing:
                - User signaleert het systeem data op te halen van systeem B
                - Systeem haalt achtergrondinfo op bij systeem B
                - User laat het systeem achtergrondinfo ophalen bij systeem B
- Een **postconditie**
    - Het doel is bereikt op het einde
    - Een scenario mag eindigen met het bereiken van het doel of het verlaten van het scenario
- Mogelijke **set van uitbreidingen**
    - Afwijkingen t.o.v. het normale verloop
    - Uitbreidingen eindigen ofwel in succes of maken dat de use case verlaten wordt
    - Belangrijk: uitbreidingen niet zomaar naast je neerleggen
        - Het normaal verloop is zeer goed gekend door het team
        - Uitbreidingen vragen dikwijls kennis van "business rules"
        - Soms aanleiding tot nieuwe use case
        - Voorbeeld:
            - Stel dat het netwerk uitvalt, wat doen we dan ?
            - Logging
            - Ok, als het netwerk opnieuw actief is ,wat moet er dan gebeuren ?
            - Ik vermoed dat we dan een nieuwe use case hebben "Systeem herstart na Netwerk fout". Van het systeem wordt een back-up genomen, je bekijkt de logging en je herbegint of beëindigt de transactie
            - Ok, maar wat als logging corrupt is ?
        - Brainstorming over alle mogelijke situaties
        - Evalueer, elimineer en voeg samen
        - Werk uit
        - Noteer "wat het systeem ontdekt heeft, niet wat er gebeurd is"
            - **Niet**: "Klant vergeet PINcode in te geven"
            - **Wel**: "tijdslimiet overschreden bij ingave PINcode"
        - Hoe noteren? ![](https://robinmalfait.com/afbeeldingen/droplr/1dymv.png)
        - Alternatieven vermelden is altijd goed

#### Veel voorkomende fouten
- Geen systeem
- Primary actor ontbreekt
- GUI details
- Teveel kleine stapjes

![](https://robinmalfait.com/afbeeldingen/droplr/1fth1.png)

# 3. Scrum & Kanban

## Ontwikkelstrategieën

- Inleiding
    - Waterfall
    - Agile
- Scrum
- Kanban

## Watervalmethode

![](https://robinmalfait.com/afbeeldingen/droplr/1iMMr.png)

## Agile

Wat is agile?

- Een filosofie
- Een mentaliteitswijziging (van Command & Control naar Collaboration)
- Geschiedenis
    - Reactie op waterval
    - Gebaseerd op Agile Manifesto

| &nbsp; | over | &nbsp; |
| -----: | :--: | :----- |
| Individuen en interacties | <-> | Processen en tools |
| Werkende software | <-> | Uitgebreide documentatie |
| Samenwerking met de klant | <-> | Contract onderhandelingen |
| Antwoorden op wijzigingen | <-> | Volgen van een plan |

**Principes achter Agile Manifesto**

- Hoogste prioriteit: klant tevreden
- Verwelkom wijzigingen
- Lever geregeld werkende software op
- Business en ontwikkelaars werken dagelijks samen
- Bouw producten rond gemotiveerde individuen
- "Face-to-face" communicatie binnen team
- Werkende software is de eerste meting van vooruitgang
- Eenvoud is essentieel
- Zelf organiserende teams
- Zelf bespiegelende teams

## Scrum

- Scrum is geen...
    - ...methodologie
    - ...afgebakend en vast proces
    - ...set van procedures
- Scrum is open framework met eenvoudige regels
- Regels gebaseerd op *CAS*
    - ***C***omplex ***A***daptieve ***S***ystemen (vb. school vissen)
    - Doel: CAS evolueren naar intelligentie
- Iteratief en incrementeel

    > **Iteratief**: het zal niet allemaal vanaf de eerste keer correct zijn
    >
    > **Incrementeel**: verticaal in plaats van horizontaal bouwen

### Scrum Regels

- Werken in **gesloten iteraties** (geen scopewijzigingen)
- Elke iteratie **productiewaardige software**
- **zelforganiserende** en **zelfreflecterende** teams
- Alles is **geprioritiseerd**

![](https://robinmalfait.com/afbeeldingen/droplr/1fAZt.png)

### Scrum in een notendop

1. Verdeel de opdracht in stukjes
2. Belangrijke opdrachten (€) eerst
3. Bepaal de mijlpalen (sprints)

![](https://robinmalfait.com/afbeeldingen/droplr/15b4b.png)

### Scrum Rollen:

#### Product-owner (eigenaar)

- Vertegenwoordigt de belanghebbende partijen
    - Klant, eindgebruiker, ...
- Één stem, liefst één persoon
- Bepaalt
    - Wat er gebouwd moet worden
    - Wat prioritair is
- Product-eigenaar doet commitment om het team met rust te laten tijdens sprint

#### Scrum-master

- Bewaakt het proces
    - Scrumconcepten toepassen
        - Zelforganiserende en zelfreflecterende teams
        - Werken in gesloten iteraties (geen scopewijzigingen)
        - Elke sprint productiewaardige software
        - Alles is geprioritiseerd
    - Kwaliteitscontrole
        - Verantwoordelijk voor softwarekwaliteit (Bugs zijn niet normaal)
        - Efficiëntie ~ kwaliteit (bewaakt grenzen: tijd: krijtlijnen, scope)
- Zorgt voor continuous improvement
    - Alles in vraag stellen
    - Mensen uit te dagen
    - Niet zelf met oplossingen te komen
    - Eerst: brandjes blussen
    - Later structureel verbeteren

#### Wat doet de Scrum-master niet?

- Taken bepalen
- Taken toewijzen
- Prioriteiten bepalen
- Schattingen bepalen
- Problemen oplossen
- Verantwoordelijkheid nemen of ontvangen

-> Wie wel? Het team

#### Team

- Typisch 5 à 9 mensen
    - Hoe meer mensen hoe groter de communicatie overhead
    - Indien groter team nodig; werken met meerdere teams
- Leden zouden full-time aan het project moeten werken
    - Uitzonderingen kunnen bestaan bij ondersteunende functies (vb.: systeembeheerders, ...)
- Teams zijn zelforganiserend
    - Leden brengen elk hun eigen achtergrond aan, maar zijn multidisciplinair, delen hun kennis en werken mee aan domeinen waar zij geen specialist op zijn

### Wat is een sprint?

- Scrum projecten worden uitgevoerd in een aantal "sprints"
    - Analoog aan XP iteraties
- Doel = **twee / drie weken**
- Product wordt **ontworpen, geschreven en getest tijdens de sprint**

![](https://robinmalfait.com/afbeeldingen/droplr/oHmw.png)

### Voorbereiding sprint

- Aantal features of taken worden opgemaakt door Product-eigenaar en de klant
- Oplijsting in een document (product backlog)
- Uniek geprioritiseerd (dus niet in blokken)

### Sprint planning deel 1

- Ruwe inschatting van aantal items dat opgenomen zal worden tijdens volgende sprint
- Inschatting door team, niet door Product-eigenaar
- Product-eigenaar kan antwoorden op alle vragen van het team
    - Indien niet mogelijk -> team neemt item niet op
- (Bepalen van een sprintdoel (deadlines))

### Sprint planning deel 2

- Backlog items worden opgesplitst door team
- Team is zelf-organiserend rond hoe het sprintdoel te bereiken
- Geen managers
    - Manager kent geen taken toe aan individuen
    - Managers maken geen beslissingen voor het team
- Sprint Backlog wordt gemaakt
    - Taken van 4-16uur
- (Bepalen van een sprintdoel)

### Schattingen

- Planning poker
- Uren of punten?
    - Sprint schatting en/of nieuwe teams: uren
    - Backlog schatting: punten
- Door mensen die het werk zullen gaan doen
    - Niet door de mensen die het werk geven
- Liefst verbale communicatie in plaats van gedetailleerde neergeschreven specificaties
- Opgelet voor anchoring!

### Anchoring

![](https://robinmalfait.com/afbeeldingen/droplr/16OJM.png)

### Stand-up

- Parameters:
    - Dagelijks
    - 15 minuten
    - Stand-up = rechtstaan !
    - Niet om problemen op te lossen
- Drie vragen (rond het bord?)
    - Wat deed je gisteren?
    - Wat ga je vandaag doen?
    - Welke obstakels liggen in je weg?

- Waarom dagelijks?
    - "Hoe kan een project een jaar te laat zijn?"
        - "Een dag per keer"
- Kan Stand-up vervangen worden door status rapporten via mail?
    - <font color="red">**Neen**</font>
        - Volledig team ziet elke dag volledig beeld
        - Creëer sociale druk: doen wat je zegt
        - Wanneer mensen niet elkaar face-to-face zien, zullen ze problemen op elkaar projecteren

### Demo/Sprint review

- Team stelt voor wat het bereikt heeft gedurende sprint: potentieel productie-waardige software
- Typisch een demo van het product of van de onderliggende architectuur
- Informeel
    - 2-uur voorbereidingstijd
- Deelnemers
    - Klanten
    - Management
    - Product Eigenaars
- Hoe valideren?
    - Door testen opgesteld tijdens product planning
- Wat is af?
    - 0 known defects!
    - Geeft nooit toe op kwaliteit
    - Klaar voor IT of klaar voor Business?

### Retrospective

- Deelnemers
    - Team
    - Scrum Master
    - Product-eigenaar (*optioneel*)
- Vragen
    - Wat ging goed gedurende laatste sprint?
    - Wat kan verbeteren in de volgende sprint?
- Resultaat
    - Altijd acties bepalen
    - Indien invloed op Product-eigenaar, toevoegen aan Product Backlog
    - Opgelet: moeten business value hebben

### Retrospective - tips

- Geen beschuldigingen!
- Gebruik nooit het woord: "JIJ"
- Gebruik een "spreekstok"

### Scrum - Documenten

- Scrum heeft heel weinig documenten
    - Product Backlog
    - Sprint Backlog
    - Burndown Statistieken
- Kan gebeuren door een Excel spreadsheet
- Meer geavanceerde / ingewikkelde tools bestaan
    - Mingle
    - Conchango (Scrumt for Team Foundation Server)
    - Trello
    - Scrumwise

### Backlog

- Een lijst van al het gewenste werk van het project
    - Meestal een combinatie van
        - Story-based werk ("Laat gebruiker zoeken en vervangen")
        - Task-based werk ("Verbeter exception handling")
- Lijst wordt geprioritiseerd door Product-eigenaar
    - Typisch een Product Manager, Marketing, Interne Klant, enz...

![](https://robinmalfait.com/afbeeldingen/droplr/11pBC.png)

### Sprint backlog

- Werkdocument van het team
- Opvolging van individuele taken
- Invullen van wat nog te doen valt om zo te zien en te corrigeren om het doel te behalen - en dit iedere dag openieuw
- Groot verschil met worksheets waarin na de feiten tijden worden ingevuld en worden vergeleken met de schatting
- Gebruik een bord (story/tasks/work in progress/verify/done)

### Burndown

- Er worden taken afgewerkt, maar heel traag:

    ![](https://robinmalfait.com/afbeeldingen/droplr/1237x.png)

- Er worden taken afgewerkt, niet genoeg

    ![](https://robinmalfait.com/afbeeldingen/droplr/Oonu.png)

- Taken werden te snel afgewerkt

    ![](https://robinmalfait.com/afbeeldingen/droplr/1eXwm.png)

### Sprint backlog - eerste meeting

![](https://robinmalfait.com/afbeeldingen/droplr/1eHD4.png)

## Kanban

- Geen rollen
- Visueel ("Kan") Bord ("Ban")
- Laagdrempelig
- Aantal
    - Bottle neck
    - Beperken
- Optimalisatie (Lean) - maximale waarde voor de klant te realiseren met zo min mogelijk verspillingen
- Gebruikt in productomgeving / systeembeheer
- Agile

### Scenario 1 - one piece flow

![](https://robinmalfait.com/afbeeldingen/droplr/rfWA.png)

### Scenario 2 - Deployment problem

![](https://robinmalfait.com/afbeeldingen/droplr/10Zee.png)


![](https://robinmalfait.com/afbeeldingen/droplr/1kozK.png)






