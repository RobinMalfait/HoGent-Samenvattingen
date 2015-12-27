<!--
title: Analyse II
-->

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

# 2. Use Cases (FR)

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

| Letter | Voluit | W | Beschrijving |
| ------ | ------ | - | ------------ |
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


