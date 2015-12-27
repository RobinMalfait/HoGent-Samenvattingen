# Analyse II

# 1. Inleiding

## Kwaliteitsvollen ICT Projecten Opleveren

> Voldoet aan alle eisen.

![](https://d.pr/i/1hwnp+)

- Voldoet: TESTEN
- Alle: FR+NFR
- Eisen: verwachtingen -> klant
    - Opdrachtgever
    - Gebruikers -> UX & Tevreden

> **!** TESTEN

- **Functionele Requiremenets**
    - Use Case
- **Niet-functionele Requirements**
    - Meetvoorschriften
    - Normen
    - Kritische Succes Factoren (KSF)

### Projecten:

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
    - Ontwerpen
    - Programmeurs

### Realiteit:

- 1994: +50% faalt
- Nu, door agile: +40% is succesvol

#### Het plaatje dat boven elke ICT'ers zijn bed moet hangen

![](https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fdeceth.com%2Fwp-content%2Fuploads%2F2010%2F03%2Frequirements_tree_swing.png&f=1)

> **! Examen Vraag**: Je krijgt een verhaal, en in dat verhaal een functionele requirement detecteren + use case uitschrijven
>
> **! Examen Vraag**: Je krijgt een verhaal, en in dat verhaal een niet-functionele requirement detecteren


### Pareto Regel

> 80-20 regel: 80% van de bevolking gebruikt 20% van de mogelijkheden.

# 2. Use Cases

## 2.1. Requirements

Ieder systeem wordt ontwikkeld om een bepaalde reden:

- Beter procesbeheer
- Lagere kosten
- Beter benutten van commerciële mogelijkheden
- Verhogen van de servicegraad

> Vooraf eisen helder en éénduidig formuleren
>
> = business case

Vooraf eisen helder en éénduidig formuleren:

- Identificeren van stakeholders
- Formuleren van KSF (Kritische Succesfactoren)
- Formuleren van meetbare acceptatiecriteria

## 2.2 Requirements-KSF

Formuleren kritische succesfactoren (KSF)

Voorbeelden:

- **Business- to- consumer internetsite (grote heterogene groep gebruikers)**

    KSF: gemak waarmee de gebruiiker het gewenste product kan bereiken
    KSF: begrijpbaarheid, zelfverklarend

- **Boekhoudpakket (beperkte groep van zeer professionele gebruikers)**

    KSF: traceerbaarheid
    Zelfverklared is minder

- **Grote batchgeoriënteerde administratieve systemen**

    KSF: snelheid en "middelen" beslag

- **PC-applicatie**

    KSF: werkbaar onder verschillende systeemsoftware

## 2.3 Requirements: Meetbare acceptatiecriteria

Formuleren van meetbare acceptatiecriteria

- KSF: redelijk abstract
- Meetbare acceptatiecriteria: concreet

Vb.:

**KSF**: klanten direct helpen aan de telefoon

```
Meetbare cireteria

* De klantengegevens met behulp van een klantnr of NAW-gegevens binnen de 2 sec. op het scherm tonen
* Alle wijzigingen van toegestane elementen gebeuren online
* De effecten van deze online wijzigigen binnen de 2 sec weergeven op het scherm
```

Vb. (2):

**KSF**: Bij invoer van gegevens wordt geconrtoleerd op juistheid en volledigheid

```
Meetbare cireteria

* Van ieder veld wordt bepaald wat de mogelijke syntax van de invoer is (@: e-mail), invoercontorle op elk veld
```

## 2.4 Soorten Requirements

- Niet-functionele requirements
- Functionele Requirements

### 2.4.1 Niet-Functionele Requirements

- Look & Feel Requirements

    VB.: In lijn met de huisstijl (UX Design)

- Usability & Humanity Requirements

    VB.: Is het bruikbaar voor slechtzienden of andere problemen?
    Accessibility is zeer belangrijk (UX Design)

- Performance Requirements

    VB.: Bankautomaat moet binnen de 5 seconden het geld geven om files aan de automaat te vermijden

- Operationele en Omgevingsrequirements

    VB.: De bankautomaat moet bruikbaar zijn bij laaghangende zon, pal op het scherm

    -> Beperkingen opleggen aan te gebruiken kleuren.

- Onderhouds-Requirements

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

| NFR | Categorie NFR |
| --: | ------------- |
| Indicator | De naam van de NFR. |
| Meetvoorschrift | De wijze waarop de NFR gemeten kan worden. |
| Norm | De norm waaraan de NFR moet voldoen (= wat je verwacht als resultaat van de meting). |

> Een Niet-Functionele requirement moet **SMART** zijn.

| Letter | Voluit | Vraag | Beschrijving |
| ------ | ------ | ----- | ------------ |
| S | Specifiek | WAT? | Ik weet precies wat ik wil bereiken. |
| M | Meetbaar | WAARAAN? | Ik weet precies waaraan ik kan merken of het resultaat bereikt is. |
| A | Acceptabel | WAAROM? | Ik weet waarom ik deze doelstelling wil bereiken. |
| R | Realistisch | WELKE? | Ik weet welke haalbare acties ik onderneem om mijn doel te bereiken. |
| T | Tijdgebonden | WANNEER? | Ik weet duidelijk wanneer ik begin en wanneer mijn doel bereikt moet zijn. |

Voorbeeld:

| NFR | Usability & Humanity |
| --: | Gebruiksvriendelijk |
| Meetvoorschrift | Vijf klanten zoeken een van tevoren opgegeven boek, plaatsen die in hun winkelmandje en vervolledigen de bestelling door opgave van verzendadres en betaalmiddel. |
| Norm | De tijd dat nodig is om een boek te zoeken en de bestelling hiervan af te ronden, bedraagt hoogstens 3 minuten. |

### 2.4.1 Functionele Requirements

- Het vastleggen en éénduidig definiëren va nde functionaliteit (taak van de functioneel ontwerpen)
- Volgens "best practices" en/of gestructureerde methoden

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

VB.: Ik wil een verkoopscontract binnenhalen. Om dat te doen moet ik met de manager gaan lunchen. Om dat te doen moet ik geld halen van de rekening. Om dat te doen moet ik mij kenbaar maken . Om dat te doen moet ik mijn bankkaart hebben en moet mijn bankkaart ingelezen worden. Om dat te doen moet ik ….

VB.: Ik wil de tab-toets vinden zo dat ik de cursor kan plaatsen in het adresveld, zo kan ik mijn adres ingeven, zodat ik mijn persoonlijke gegevens kan ingeven in het pakket. Zo kan ik een aanvraag indienen voor een autoverzekering, zo kan ik mijn auto verzekeren, dan kan ik met mijn auto rijden

![](https://d.pr/i/1iPNo+)

1. **Hoe**? (*Lower Lever*)
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

VB.: ![](https://d.pr/i/AwG2+)

#### Body

- **Normala verloop:** Top-to-bottom beschrijving van een eenvoudige (meest voorkomende) situatie waarbij het doel van de Primary Actor gerealiseerd wodt.
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
            - Voorbeeld: ![](https://d.pr/i/1bL8x+)
        - **TIP 6:** Aanvaardbare set van actiestappen
            - Een transactie bestaat uit 4 delen
                1. Vraag en data
                2. Validatie
                3. Wijziging
                4. Resultaat
        - **TIP 7:** Valideer, controleer neit of ...
            - Vermijd "if statements" ![](https://d.pr/i/xQOF+)
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





