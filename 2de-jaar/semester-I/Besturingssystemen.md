# Besturingssystemen

# Werk Colleges

- [Linux Werkcollege](/2de-jaar/semester-I/Besturingssystemen/Linux.md)

# Hoofdstuk 1: Inleiding

> **Besturingssysteem**: programma dat het mogelijk maakt de hardware van een computer te gebruiken.

## 1. Functies

- opslaan en ophalen
- programma's afschermen
- gegevensstroom regelen (VB.: Om te printen: gegevens -> printer)
- prioriteiten regelen
- mogelijk maken om bronnen te delen
- tijdelijke samenwerking tussen onafhankelijke programma's mogelijk te maken.
    - Word & Printer
    - ...
- reageren op fouten
- tijdsplanning maken

## 2. Historisch Overzicht

- **Eerste computers** geen OS
- **Jaren 50** -> eenvoudige OS:
    - sequentieel opladen en opstarten van programma's
        - ponskaarten
        - debugging is hard
        - 1 programma tegelijk
    - alle bronnen bruikbaar door slechts 1 programma
- **Begin jaren 60** -> geavanceerder OS:
    - Verscheidene programma's konden tegelijkertijd opgeslagen worden in het geheugen
    - Beurtelingse uitvoering van programma's
    - Gemeenschappelijke bronnen
- **Midden jaren 60** -> verschillende computers van hetzelfde type gebruikten één OS
- **Begin jaren 70** -> OS kan computers met meer dan 1 prcoessor aan
- **Begin jaren 80**-> gemeenschappelijk gebruik van informatie
- **Jaren 90** -> distributed computing

> Multi Processor: Meerdere processors
>
> Multi core: Meerdere processors op 1 core

## 3. Soorten besturingssystemen

### 3.1. Single-tasking

> Systeem waarin 1 gebruiker 1 applicatie tegelijk draait

De gebruiker kan alle 100% gebruiken van de CPU, maar met 1 programma

### 3.2. Multitasking (single-user)

> Meestal 1 gebruiker die verscheidene taken kan uitvoeren tezelfdertijd

- Synchronisatie problemen
- RAM is niet oneindig

### 3.3. Multi-user-systemen

> Meerdere gebruikers maken simultaan gebruik van de computerresources

Elk process wordt afgewisseld onder de gebruikers, het geeft de indruk dat je alle resources gebruikt.

Elke gebruiker krijgt deze indruk, waardoor het performanter wordt.

**Nadeel:**

- Meerdere gebruikers kunnen hetzelfde bestand bewerken, synchronisatie problemen
- Beveiliging proberen

Hierbij is *scheduling* een belangrijk concept

*scheduling*: verwijst naar de manier waarop processen prioriteiten worden gegeven in een prioriteitenwachtrij.

Soorten mult-user-computers afhankelijk van de soorten programma's die ze aankunnen:

- **Interactieve programma's** snelle respons
- **Batch-programma's** geen directe respons
- **Real-time programma's** respons in een beperkte tijd
    - VB.: Zelfrijdende auto van google, wanneer er een voetganger gedetecteerd wordt, moet hij instant remmen en niet na 10 seconden pas.

### 3.4. Virtuele Machines

> **Virtuele Machine**: computerprogramma die een computer nabootsen, waar andere programma's op kunnen worden uitgevoerd

**Soorten:**
    - Programmeertaal specifiek: VB.: JVM
    - emulator

## 4. Concepten

1. User
2. Shell of command interpreter
3. Utilities
4. Kernel
5. Hardware

### 4.2. Processen

Elk programmatje heeft 1 of meerdere processen.

### 4.3. Resources

Een OS moet

- zorgen voor voldoende geheugen voor het proces
- het gebruik van de CPU regelen
- de gegevensstroom regelen van of naar devices
- bestanden en records kunnen lokaliseren

### 4.4. Concurrency

Processen zijn meestal niet onafhankelijk, processen zijn concurrent

OS regelt in welke volgorde processen afgehandeld worden = synchronisatie

### 4.5. Ontwerp-criteria

- Consistentie
- Flexibiliteit
- Overdraagbaarheid

### 4.6. Compromissen

Vaak is het onmogelijk om aan alle criteria te voldoen en worden sommige opgeofferd ten gunste van het andere.

## 5. Inleiding Linux

### 5.1. Wat is Linux

- Is een voorbeeld van een multi-usersysteem
- Is een besturingssysteem dat overal is
- Is ontwikkeld vanuit UNIX
- Is ontwikkeld door Linus Torvalds
- Verschillende distributies: wij kiezen voor Fedora (huidige versie: Fedora 22)

# Hoofdstuk 2: Scheduling

> Om efficiënt middelen (bronnen, resources) in te zetten om de taken (opdrachten, jobs) uit te voeren.

**Doel:**

- doematigheid en tevredenheid van de gebruiker
- resources moeten effectief/efficiënt gebruikt worden
    - op een snelle rendabele manier

**Efficiëntie** met betrekking tot gebruik resources wordt gemeten door:

- **Doorvoersnelheid (troughput)**
    - > aantal processen/tijdseenheid door het systeem
    - Gevolg:
        - Hoge Troughput (veel processen)
        - Lage Troughput (weinig processen)
- **Responstijd**
    - Interactive gebruikers -> snelle respons
    - Batch-gebruikers -> redelijke responstijd
    - Snelle reactie op elk proces -> processen/tijdseenheid
        - Responstijd lijkt hetzelfde als doorvoersnelheid
    - Dorovoersnelheid kan vergroot worden door enkel korte processen te behandelen en lange processen te negeren
        - lange processen worden niet beantwoord
- **Consistentie**
    - Eisen gesteld aan systeem:
        - Dezelfde om 15u en om 10u
        - => Responstijd moet ongeveer gelijk zijn
    - Als respons sterk varieert, dan weten de gebruikers niet wat ze mogen verwachten
        - => problemen met werkindeling
- **Houd de processor aan het werk**
    - Besturingssysteem moet resources aan het werk houden
    - VB.: I/O-processors
        - => meer aandacht aan processen die veel I/O vragen
        - => meer processors aan het werk => meer gedaan
        - Als ze allemaal bezig zijn => geen I/O request meer genereren
        - => CPU verwerkt andere processen die op CPU wachten
        - => Besturingssysteem moet minder ingrijpen
        - => systeem efficiëntie neemt toe
    - *Ideale geval*: Besturingssysteem houdt elke processor aan het werk, zonder deze zwaar te belasten (CPU kan best aan 90% draaien)
        - Afhankelijk van mix van processen in systeem
    - Efficiënt werken, niet te veel idle staan
- **Prioriteiten**
    - Elk proces krijgt ene prioriteit
        - Hoe hoger hoe belangrijker
    - Besturingssysteem baseert zich hierop bij de scheduling
    - Lever ook problemen:
        - Wie bepaalt de prioriteiten?
            - <font color=red>Gebruiker</font>
            - <font color=green>Besturingssysteem</font>
            - <font color=red>Planner</font>
        - Wie kent ze toe?
            - <font color=green>Besturingssysteem</font>
        - Welke richtlijnen zijn er?
        - Wanneer is een proces belangrijk en verdient het daarom een hogere prioriteit?
        - Wat gebeurt er als scheduling op basis van prioriteiten de systeemefficiëntie verlaagt?
            - Besturingssysteem de prioriteiten aanpassen -> betere planning
- **Real-time systemen**
    - Snelle respons voor besturing van een doorgaand proces => hoogste prioriteit
        - > Een process die in 1 keer doorgaat `binnen -> afhandelen -> buiten`
    - Rechtvaardigheid en systeemefficiëntie => lagere prioriteit
        - > Iedereen / elk process krijgt de kans om uitgevoerd te worden.

**Scheduling**

- Ingewikkelde zaak
- Moet rekening houden met
    - Behoeften van de processen
    - Systeemefficiëntie
    - Bestaande hardware
    - Wat eerlijk is
- < - > Conflicten!!!

| &nbsp; | MEM |
| ------ | --- |
| 30 | 1901|
| 31 | 2902 |
| 32 | 4902 |
| 901 | 0001 |
| 902 | 0002 |

| &nbsp; | CPU |
| ------ | --- |
| PC | 30 |
| IR | 1901 |
| ACC | 0001 |

| &nbsp; | CPU |
| ------ | --- |
| PC | 31 |
| IR | 2902 |
| ACC | 0003 |

| &nbsp; | CPU |
| ------ | --- |
| PC | 32 |
| IR | 5902 |
| ACC | 0003 |

-> het adres 902 wordt overschreven met 0003

| PROCES      |
| ----------- |
| CONTEXT     |
| Instructies |
| Data        |

## 3 Soorten

![](http://d.pr/i/1dXSt+)

- High-level (lange termijn, weinig)
    - 1, 2, 7

- Intermediate (middelkorte frequent)
    - 5, 6

- Low-level (Short term, heel frequent)
    - 3, 4

## Process

- data
- instructies

> => PCB
> - id
> - prioriteit
> - looptijd

## Round Robin

# Hoofdstuk 3: Concurrency - Parallelle Processen

# Hoofdstuk 4: processen in Linux

# Hoofdstuk 5: Scripts in Linux
