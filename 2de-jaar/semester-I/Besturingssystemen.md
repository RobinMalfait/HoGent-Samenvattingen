---
title: Besturingssystemen
link: https://robinmalfait.com/2de-jaar/semester-I/Besturingssystemen.md
---

**Werk Colleges**

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
- **Begin jaren 70** -> OS kan computers met meer dan 1 processor aan
- **Begin jaren 80**-> gemeenschappelijk gebruik van informatie
- **Jaren 90** -> distributed computing, parallelle verwerking

> Multi Processor: Meerdere processors
>
> Multi core: Meerdere processors op 1 core

## 3. Soorten besturingssystemen

### 3.1. Single-tasking

> Systeem waarin 1 gebruiker 1 applicatie tegelijk draait

De gebruiker kan alle 100% gebruiken van de CPU, maar met 1 programma

![](https://robinmalfait.com/afbeeldingen/droplr/AK2Z.png)

### 3.2. Multitasking (single-user)

> Meestal 1 gebruiker die verscheidene taken kan uitvoeren tezelfdertijd

- Synchronisatie problemen
- RAM is niet oneindig

![](https://robinmalfait.com/afbeeldingen/droplr/10Y6l.png)

### 3.3. Multi-user-systemen

> Meerdere gebruikers maken simultaan gebruik van de computerresources

Elk process wordt afgewisseld onder de gebruikers, het geeft de indruk dat je alle resources gebruikt.

Elke gebruiker krijgt deze indruk, waardoor het performanter wordt.

**Nadeel:**

- Meerdere gebruikers kunnen hetzelfde bestand bewerken, synchronisatie problemen
- Beveiliging proberen

Hierbij is *scheduling* een belangrijk concept

*scheduling*: verwijst naar de manier waarop processen prioriteiten worden gegeven in een prioriteitenwachtrij.

Soorten multi-user-computers afhankelijk van de soorten programma's die ze aankunnen:

- **Interactieve programma's** snelle respons
- **Batch-programma's** geen directe respons
- **Real-time programma's** respons in een beperkte tijd
    - VB.: Zelfrijdende auto van google, wanneer er een voetganger gedetecteerd wordt, moet hij instant remmen en niet na 10 seconden pas.

![](https://robinmalfait.com/afbeeldingen/droplr/1kTA4.png)

### 3.4. Virtuele Machines

> **Virtuele Machine**: computerprogramma die een computer nabootsen, waar andere programma's op kunnen worden uitgevoerd

**Soorten:**
    - Programmeertaal specifiek: VB.: JVM
    - emulator

> **Virtuele machine monitor**: elke gebruiker heeft een uniek beeld van de computeromgeving

A.d.h.v. virtuele machines kunnen <font color=red>verschillende besturingssystemen tegelijkertijd op 1 computer</font> bestaan.

## 4. Concepten

1. User
2. Shell of command interpreter
3. Utilities
4. Kernel
5. Hardware

### 4.2. Processen

Elk programmaatje heeft 1 of meerdere processen.

> **Process**: een of meerdere reeksenopdrachten die door een besturingsprogramma worden beschouwd als een werkeenheid

![](https://robinmalfait.com/afbeeldingen/droplr/1gNBE.png)

### 4.3. Resources

Een process spreekt een resource (bron) aan:

- randapparatuur
- geheugen
- processen
- CPU
- bestanden

![](https://robinmalfait.com/afbeeldingen/droplr/1eK3w.png)

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

### 5.2 Basis Commando's

| commando | uitleg |
| -------- | ------ |
| ls -l | print alle bestanden in lijst vorm |
| pwd | print working directory (huidige map) |
| cd | Change directory |
| tree | boomstructuur |
| cat | Concatenate, laat de inhoud van een tekstbestand over het scherm lopen |
| less | laat je toe om de tekst, pagina per pagina op je scherm te bekijken |
| man | manuals (handleidingen) voor een gegeven commando: `man ls` |


> "On a linux system, everything is a file; if something is not a file, it is a process"
<br>
> **een inode**: elke file wordt op een schijf voorgesteld door een inode, inode komt van index-node of information node. Het is een soort van seriële nummering die informatie bijhoudt over het bestand (file)

Informatie geassocieerd met een bestand wordt bijgehouden in een inode:

- file type
- permissies: owner & group
- grootte
- aantal links
- access, modification & change date

Een inode wordt geïdentificeerd via een *inodenummer*

* elk inodenummer is uniek binnen dezelfde device
* men kan de inodenummers van files en directories zien via
    - `ls -i`
    - `stat`

![](https://robinmalfait.com/afbeeldingen/droplr/1lFa3.png)

#### 5.2.1 Oriëntatie in het bestandssysteem

> **PATH**: zorgt ervoor dat we niet steeds het volledige pad moeten ingeven om een commando uit te voeren of om een bestand te openen.
>
> PATH is een environment variable dat één of meerdere map verwijzingen bevat gescheiden met ":", Deze worden onderzocht om een commando te lokaliseren en uit te voeren.

**Absoluut vs relatief pad**:

- Absoluut pad: start steeds vanaf de root en begint steeds met een slash (/).
- Relatief pad: start vanaf de huidige map en begint nooit met een slash.

In relatieve paden kan ook gewerkt worden met:

- . (dot): verwijst naar de huidige map
- .. (dot dot): verwijst naar de hoger liggende map, de parent.

Alles is een bestand, zo is een map ook een bestand:

- mappen: bestanden die andere bestanden of mappen bevatten
- speciale bestanden: het mechanisme dat gebruikt wordt voor input en output. De meeste van deze bestanden bevinden zich in /dev.
- links: een systeem gebruikt om een bestand op meerdere plaatsen in het systeem zichtbaar te maken.
- sockets: een bestandstype voor netwerkcommunicatie tussen processen onderling.
- Named pipes: een bestandstype voor communicatie tussen processen zonder dat die gebruik maken van netwerksemantiek.

`ls -F` toont het bestandstype d.m.v. suffix

| Karakter | Bestandstype |
| -------- | ------------ |
| / | map |
| * | uitvoerbaar bestand, programma of script. |
| @ | link |
| = | socket |
| \| | named pipe |

Kleurenschema voor type bestanden

| Karakter | Bestandstype |
| -------- | ------------ |
| blauw | mappen |
| rood | gecompresseerde archieven |
| zwart | tekstbestanden |
| rose | afbeeldingen |
| cyaan | links |
| geel | randapparaten of devices |
| groen | uitvoerbare betanden |
| knipperend rood | gebroken links |

Lange lijst: `ls -l`

| Symbool | Betekenis |
| ------- | --------- |
| - | gewoon bestand |
| d | map (directory) |
| l | link |
| c | speciaal bestand |
| s | socket |
| p | named pipe |
| b | blokapparaat |
| c | karakterapparaat |

Nog meer details? `file` het geeft informatie over de aard en het formaat van bestanden.


### 5.2.2 Shell

> **SHELL**: is een programma dat wordt opgestart in een terminal venster.

Het is de interface naar het hart van je computer.

Verschillende shells:

- sh
- bash
- csh
- tcsh
- ksh
- zsh

Overzicht terug te vinden in `/etc/shell`

De default shell is gedeclareerd in `/etc/passwd`

Huidige shell: `echo $SHELL`

| Toets (combinatie) | Functie |
| ------------------ | ------- |
| <kbd>Ctrl</kbd>+<kbd>A</kbd> | Plaatst de cursor aan het begin van de lijn, vlak achter de prompt. |
| <kbd>Ctrl</kbd>+<kbd>C</kbd> | Beëindigt een lopend programma en geef je de prompt terug zodat je een nieuw commando kan starten. |
| <kbd>Ctrl</kbd>+<kbd>D</kbd> | Verlaat de huidige shell sessie, dit staat gelijk met exit of logout. |
| <kbd>Ctrl</kbd>+<kbd>E</kbd> | Plaatst de cursor aan het einde van de lijn. |
| <kbd>Ctrl</kbd>+<kbd>H</kbd> | Genereert een backspace, verwijdert het karakter links van de cursor. |
| <kbd>Ctrl</kbd>+<kbd>L</kbd> | Maakt de terminal leeg, zodat je prompt bovenaan komt te staan. |
| <kbd>Ctrl</kbd>+<kbd>R</kbd> | Zoek in de commandogeschiedenis |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Bevriest een programma |
| Pijltjes toetsen <kbd>◀</kbd> of <kbd>▶</kbd> | Beweeg de cursor over en weer op de commandolijn |
| Pijltjes toetsen <kbd>▲</kbd> of <kbd>▼</kbd> | Overloopt de commandogeschiedenis. Ga naar de lijn die je opnieuw wilt uitvoeren, editeer eventueel en druk <kbd>enter</kbd> |
| <kbd>Shift</kbd>+<kbd>PageUp</kbd> en <kbd>Shift</kbd>+<kbd>PageDown</kbd> | Overloopt de terminalbuffer om tekst te zien die al van het scherm gerold is. |
| <kbd>Tab</kbd> | Commando- of bestandsnaam vervolledigen. Als er meerdere mogelijkheden zijn, zal de shell je met een geluidje of een flits waarschuwen |
| <kbd>Tab</kbd> <kbd>Tab</kbd> | Toont de mogelijke bestandsnamen of commandonamen om te vervolledigen |

### 5.2.3 Werken met bestanden

`touch bestand1 bestand2` om bestanden aan te maken, wanneer het bestand reeds bestaat dan wordt de datum geüpdatet.

`cp BRON DEST` kopieert een bestand van bron naar dest.

Opties:

- -r: kopieert mappen, inclusief hun inhoud (recursief)
- -v: verbose, toont alle kopieacties op het scherm

`mv BRON DEST` verplaatst een bestand van bron naar dest.

Opties:

- -i: interactive mode, vraagt bevestiging
- -v: verbose
- -f: force, geeft geen waarschuwing
- -r: recursief, kan dus ook met mappen

`rm BRON` verwijdert een bestand

Opties:

- -r: recursief, verwijdert een map inclusief bestanden en submappen
- -f: force, geeft geen waarschuwing
- -v: verbose

> **!** Let op: `rm -rf /` als root uitvoeren, dan ben je alles kwijt...

`locate` zoekt bestandsnamen, maakt gebruik van een 's nachts opgebouwde database

`which commandonaam`  zoekt in de mappen die gedefinieerd staan in `PATH` vb `which cat` = `/bin/cat`

`find zoekmap zoekoptie[s] [tests] [acties]` geavanceerd zoeken (alle opties zie je in de man pages `man find`)

tests:

- -name patroon: naam van het bestand voldoet aan een zeker patroon
- -size n
- -type c

acties:

- -exec opdracht
- -print: stuurt resultaat naar standaard output

### 5.2.4 Werken met mappen

Aanmaken van mappen

`mkdir mapnaam` (meerdere namen mag) vb: `mkdir -p dir/dir1`

Verwijderen van mappen

`rmdir mapnaam` (meerdere namen mag), enkel lege mappen worden verwijderd

Links:

- **harde link**: associeert twee of meerdere bestandsnamen met dezelfde inode, harde links delen dezelfde datablokken op de harde schijf en gedragen zich onderling onafhankelijk van elkaar. Elk gewoon bestand is in principe een hardlink naar zichzelf
- **symbolische link**: is een pointer (wegwijze) naar een andere bestandsnaam. Een symbolische link is niet onafhankelijk van het doelbestand: als het doelbestand verdwijnt, werkt de link niet meer.

> Het voordeel van een symbolische link is dat dit type link partities kan overspannen. Een harde link moet binnen eenzelfde partitie blijven.

`ln doelbestand linknaam` of `ln -s doelbestand linknaam`

### 5.2.5 Inhoud van bestanden

- `cat`: concatenatie
- `tac`: zelfde als cat, maar omgekeerde volgorde van regels
- `head`: toont de eerste 10 lijnen van een bestand
- `tail`: toont de laatste 10 lijnen van een bestand, deze wordt veel gebruikt voor inhoud van log bestanden te bekijken, met de optie `tail -f /var/log/message..` houdt het commando het bestand in de gaten en update het automatisch.
- `more`: voorganger van `less` (`more` is less then `less`)
- `grep [OPTIES] tekenreeks [bestanden]`, enkele opties zijn:
    - -i, --ignore-case
    - -n, --line-number
    - -s, --silent (onderdrukt alle foutmeldingen)

# Hoofdstuk 2: Scheduling

> Om efficiënt middelen (bronnen, resources) in te zetten om de taken (opdrachten, jobs) uit te voeren.

> **Scheduling** verwijst dus naar de manier waarop processen prioriteiten worden gegeven. Deze taak wordt uitgevoerd door software die bekend staat als een **scheduler**.

**Doel:**

- Doelmatigheid en tevredenheid van de gebruiker
- Resources moeten effectief/efficiënt gebruikt worden
    - Op een snelle rendabele manier

**Efficiëntie** met betrekking tot gebruik resources wordt gemeten door:

- **Doorvoersnelheid (troughput)**
    - = aantal processen/tijdseenheid door het systeem
    - Gevolg:
        - Lage Troughput (weinig processen)
        - Hoge Troughput (veel processen)
            - Lijkt het interessants
            - Maar geen rekening met procesgrootte
            - => meest efficiënte systeem kan sommige processen negeren
            - => redelijkheid opgeofferd aan efficiëntie
- **Responstijd**
    - Interactive gebruikers -> snelle respons
    - Batch-gebruikers -> redelijke responstijd
    - Snelle reactie op elk proces -> processen/tijdseenheid
        - Responstijd lijkt hetzelfde als doorvoersnelheid
    - Doorvoersnelheid kan vergroot worden door enkel korte processen te behandelen en lange processen te negeren
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
        - => Besturingssysteem (BS) moet minder ingrijpen
        - => systeem efficiëntie neemt toe
    - *Ideale geval*: Besturingssysteem houdt elke processor aan het werk, zonder deze zwaar te belasten (CPU kan best aan 90% draaien)
        - Afhankelijk van mix van processen in systeem
    - Efficiënt werken, niet te veel idle staan
- **Prioriteiten**
    - Elk proces krijgt een prioriteit
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

- = Ingewikkelde zaak
- Moet rekening houden met
    - Behoeften van de processen
    - Systeemefficiëntie
    - Bestaande hardware
    - Wat eerlijk is
- < - > Conflicten!!!

## 3. Uitvoeren van een process

Instructiecyclus zonder onderbrekingen

![](https://robinmalfait.com/afbeeldingen/droplr/16GWm.png)

Instructiecyclus met onderbrekingen

![](https://robinmalfait.com/afbeeldingen/droplr/12e7r.png)

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

![](https://robinmalfait.com/afbeeldingen/droplr/L15G.png)

## 4. Systeembeeld van een proces

**Proces bestaat uit**

- Context
    - Id/Nummer
    - Status of toestand
    - PC (Process Counter)
    - Prioriteit
- Instructies
- Data

**BS (besturingssysteem)**

- Bekijkt de processen die het computersysteem binnenkomen
- Procestoestand
    - = Status
    - Gedefinieerd in termen van de mogelijkheid om te worden uitgevoerd
    - Rechthoek in procestoestandsdiagram
- Toestandsovergangen
    - Pijlen in procestoestandsdiagram

![](https://robinmalfait.com/afbeeldingen/droplr/13Glg.png)

### -> Procestoestanden

* **HOLD** -> is aangeboden
* **READY** -> gereed om uit te voeren
* **RUNNING** -> wordt uitgevoerd en onder besturing van de CPU
* **WAIT** -> wacht op iets
* **SUSPENDED** -> is opgeschort
* **COMPLETE** -> volledig afgewerkt

### -> Toestandsovergangen

1. niet-aangeboden -> HOLD
2. niet-aangeboden of HOLD -> READY
3. READY -> RUNNING
4. RUNNING -> READY
5. RUNNING -> WAIT
6. WAIT -> READY
7. RUNNING -> COMPLETE
8. READY -> SUSPEND
9. SUSPENDED -> READY

### Process Control Blocks (PCB)

bevatten:

- Proces-ID
- Procestoestand
- Maximale en actuele looptijd
- Huidige resources en limieten
- Procesprioriteit
- Opslaggebieden
- Locatie van de code of de segmenttable van een proces

### Niveaus van scheduling

![](https://robinmalfait.com/afbeeldingen/droplr/1dXSt.png)

- High-level (lange termijn, weinig)
    - 1, 2, 7

- Intermediate (middelkorte frequent)
    - 5, 6, 8, 9

- Low-level (Short term, heel frequent)
    - 3, 4

## 5. Strategieën voor low-level scheduling

**2 hoofdcategorieën:**

- algoritme voor **preëmptive** scheduling
    > Processen worden onderbroken om een ander proces te hervatten
- algoritme voor **nonpreëmptive** scheduling
    > een ander proces kan pas gestart worden nadat het huidige proces klaar is

**Criteria voor scheduler:**

- CPU-gebruik
- Throughput (doorvoersnelheid)
- Wachttijd
- Responstijd

### 5.1. Round Robin scheduling (RR)

Hier wordt gebruik gemaakt van **een vaste tijdswaarde of tijdkwantum**, wanneer dit overschreden wordt, zal de scheduler het proces onderbreken en een volgend proces inladen.

![](https://robinmalfait.com/afbeeldingen/droplr/143ad.png)

![](https://robinmalfait.com/afbeeldingen/droplr/1bsKh.png)

### 5.2. First-in-First-out** scheduling (FIFO) of First-come-first-served-scheduling (FCFS)

Wanneer een proces als eerste de CPU vraagt zal hij die ook krijgen, waarbij de andere processen die erna komen zullen moeten wachten.

![](https://robinmalfait.com/afbeeldingen/droplr/12TOf.png)

Een FIFO-scheduler kan deel uitmaken van een ingewikkeldere methode zoals bijvoorbeeld bij system die zowel batch-gebruikers als interactieve gebruikers hebben.

Een manier om hybride methode van scheduling te implementeren is met *batch-partities* (= virtuele geheugenconstructie die 1 batch-proces bevat)

![](https://robinmalfait.com/afbeeldingen/droplr/1anIs.png)

### 5.3. Multilevel feedback queues (MFQ)

Hierbij lijkt de scheduling-methode op Round-Robin als er veel I/O-activiteit is en op FIFO wanneer er weinig of geen I/O-activiteit is.

De beste scheduling-methode is afhankelijk van de soorten processen in de ready-toestand en het MFQ is gevoelig voor wijzigingen in de activiteiten (**adaptieve methode**)

![](https://robinmalfait.com/afbeeldingen/droplr/1bAy8.png)

### 5.4. Shortest-job-first-scheduling (SJF)

Er zijn twee strategieën die aan korte processen een hoge prioriteit geven:

- Shortest Remaining Job Next (SRJN) = preëmptieve versie van SJF
- Shortest Job First (SJF) -> hier zal de scheduler van het proces met de kleinste lengte uitvoeren

![](https://robinmalfait.com/afbeeldingen/droplr/14iTK.png)

### 5.5 Starvation

> Wanneer een heel lang proces nooit uitgevoerd zal worden, noemen we dit starvation.

Oplossingen:

- Negeren
- Opschorten van een aantal READY-processen
- Periodiek prioriteiten opnieuw berekenen

> Bij Round Robin en FIFO kan geen starvation optreden

### Samenvatting van de strategieën

| &nbsp;           | Round Robin | FIFO | MFQ | SJF | SRJN |
| ---------------: | ----------- | ---- | --- | --- | ---- |
| Doorvoersnelheid | Kan laag zijn als quantum te klein is | &nbsp; | Kan laag zijn als de quanta te klein zijn | hoog | hoog |
| Responstijd | Korte gemiddelde responstijd, als quantum juist is gekozen | kan gebrekkig zijn voor als en lang proces de besturing over de CPU heeft | goed voor I/O-gebonden processen, maar kan gebrekkig zijn voor de CPU-gebonden processen | Goed voor korte processen, maar kan gebrekkig zijn voor langere processen | goed voor korte processen, maar kan gebrekkig zijn voor langere processen |
| Overheat | laag | de laagste van alle methoden | kan hog zijn; ingewikkelde datastructuren en routines zijn nodig om na elke reschedule de juiste queue te vinden | Kan hoog zijn; vereist een routine om voor elke reschedule de kortste job te vinden | kan hoog zijn; vereist een routine om voor elke reschedule de minimale resterende tijd te vinden |
| CPU-gebonden processen | geen onderscheid tussen CPU-gebonden en I/O gebonden processen | geen onderscheid tussen CPU-gebonden en I/O gebonden processen | krijgt lage prioriteit als de I/O-gebonden processen aanwezig zijn | geen onderscheid tussen CPU-gebonden en I/O gebonden processen | geen onderscheid tussen CPU-gebonden en I/O gebonden processen |
| I/O-gebonden processen |geen onderscheid tussen CPU-gebonden en I/O gebonden processen | geen onderscheid tussen CPU-gebonden en I/O gebonden processen | krijgt hoge prioriteit om I/O processors actief te houden | geen onderscheid tussen CPU-gebonden en I/O gebonden processen | geen onderscheid tussen CPU-gebonden en I/O gebonden processen |
| Onbepaald uitstel | treedt niet op | treedt niet op | kan optreden bij CPU-gebonden processen | kan optreden bij processen met lange geschatte runtijden | kan optreden bij processen met lange geschatte runtijden |

# Hoofdstuk 3: Concurrency - Parallelle Processen

## 3.1 Wat is concurrency

- **Multiprogrammering**: het beheer van meerdere processen in een systeem met 1 processor
- **Multiprocessing**: Het beheer van meerdere processen in een systeem met meerdere processors
- **Gedistribueerde verwerking**: Het beheer van meerdere processen die worden uitgevoerd op een aantal verspreide computersystemen.

> Aan de basis van al deze zaken, en daarmee aan de basis van het ontwerp van besturingssystemen, ligt **concurrency** (**gelijktijdig**)

In de systemen met I/O channels(I/O-processors) zijn verscheidene acties tegelijkertijd gaande. De CPU werkt aan één proces, terwijl de I/O channels aan andere werken. Het is duidelijk dat het gebruik van meerdere processors de verwerkingscapaciteit vergroot.
Stel dat er een programmeertaal bestaat waarin je onafhankelijke processen kan specificeren, en dat er meerdere processors beschikbaar zijn om aan een proces te werken.

```
PARBEGIN
    statement1;
    statement2;
    ...
    statementn;
PAREND
```

Concurrency treedt op in 3 verschillende situaties:

- **Meerdere toepassingen**. Multiprogramming werd uitgevonden om verwerkingstijd dynamisch te kunnen verdelen tussen een aantal actieve toepassingen.
- **Gestructureerde toepassing**. Als uitbreiding op de beginselen van modulair ontwerpen en gestructureerd programmeren kunnen sommige toepassingen effectief worden geprogrammeerd als een verzameling gelijktijdige processen.
- **Structuur van het besturingssysteem**. Dezelfde voordelen van het structureren gelden voor de systeemprogrammeur en we hebben gezien dat besturingssystemen zelf vaak worden geïmplementeerd als een verzameling processen of thread.

## 3.2 Wederzijdse uitsluiting (mutual exclusion)

### 3.2.1 Concurrency met meerdere processors

Niet alleen processen, maar ook activiteiten binnen één proces kunnen gelijktijdig worden uitgevoerd.

De moeilijkheden ontstaan wanneer de processen het gemeenschappelijke geheugen aanspreken.

### 3.2.2 Concurrency met 1 processor

Hier zijn er ook parallelle processen mogelijk.
In een dergelijk geval kunnen de processen niet tegelijkertijd
worden uitgevoerd, maar ze kunnen wel op hetzelfde
moment proberen de besturing van de CPU te krijgen.

Wanneer twee van zulke processen het gemeenschappelijk
geheugen aanspreken, kunnen er nog steeds problemen
ontstaan.

**Voorbeeld:**

Beschouw een computersysteem met veel terminals. Stel dat de gebruikers elke regel, bestemd voor het computersysteem, beëindigen met de <kbd>enter</kbd>-toets. Stel dat wij het totaal aantal lijnen voor alle gebruikers samen wensen bij te houden in een variabele "linesentered". Veronderstel dat twee processen proberen de variabele "linesentered" simultaan te verhogen met 1.

Elk proces heeft dan zijn eigen kopij van volgende code:

```
load linesentered
add 1
store linesentered
```

> Dit is een vervelende situatie: de informatie in linesentered is fout!

### 3.2.3 Wederzijdse uitsluiting

> De kritieke sectie van een proces is de code die naar gemeenschappelijke data verwijst
>
> Net voor de kritieke sectie van een proces wordt ENTERMUTUALEXCLUSION uitgevoerd en na de kritieke sectie wordt EXITMUTUALEXCLUSION uitgevoerd

- ENTERMUTUALEXCLUSION doet het volgende:
    - Controleren of een ander proces in zijn kritieke sectie is en, als dat het geval is, wachten;
    - Doorgaan met de uitvoering van de kritieke sectie als er geen ander proces in de kritieke sectie bezig is.
- EXITMUTUALEXCLUSION moet alle andere processen vertellen dat een proces klaar is met de uitvoering van zijn kritieke sectie.

## 3.3 Het programmeren van wederzijdse uitsluiting

We gaan er van uit dat er slechts 2 gelijktijdige processen zijn.

### 3.3.1 Eerste poging

We declareren een <font color="red">booleaanse variabele "bezet"</font>, die voor beide processen globaal is. "Bezet" krijgt de waarde true als één van de processen zijn kritieke sectie ingaat en is false als dit niet het geval is.
Zo kan een proces dat aan zijn kritieke sectie moet beginnen, "bezet" controleren om te zien of het andere proces in zijn kritieke sectie is.
Het "wachten" en "wekken" kan op verschillende manieren worden geïmplementeerd. Een proces kan wachten en een ander proces kan het wekken.

Er is hier een probleem omdat de processen in ENTERMUTUALEXCLUSION gemeenschappelijk geheugen aanspreken.
Beide verwijzen naar "bezet". Een ongelukkige timing kan tot gevolg hebben dat het ene proces het andere ondermijnt.

### 3.3.2 Tweede poging

Eén manier om te voorkomen dat beide processen bijna gelijktijdig "bezet" controleren, is een tweede voorwaarde te gebruiken. We nemen aan dat beide processen op bijna hetzelfde moment proberen hun kritieke sectie in te gaan. Welk proces wanneer voorrang heeft, wordt geregeld door <font color="red">een globale variabele "welk"</font>, met een waarde van of 1, of 2, te declareren. Beide processen moeten de waarde van "welk" controleren voordat zij hun kritieke secties ingaan. Eén proces mag doorgaan, het andere moet wachten. Zo wordt wederzijdse uitsluiting afgedwongen.

Helaas is er een ongewenst neveneffect. De twee processen kunnen niet meer onafhankelijk worden uitgevoerd. Ze moeten hun kritieke secties om beurten uitvoeren. Zo kan een proces door onbepaald uitstel worden getroffen: het moet voor onbepaalde tijd wachten. <font color="red">Deze oplossing brengt wederzijdse uitsluiting tot stand, maar er moet wel veel voor worden ingeleverd</font>. Processen worden misschien helemaal niet uitgevoerd.

### 3.3.3 Derde poging

**Zwakke plek** in 2<sup>de</sup>poging -> gebruik van de variabele "welk" om te bepalen welk proces zijn kritieke sectie kan ingaan. De waarde van "welk" staat dit slechts aan één proces toe, zonder rekening te houden met wat het tweede proces aan het doen is. Dit is een te zware beperking.

Twee processen kunnen hun kritieke secties op hetzelfde moment ingaan omdat beide een "bezetting" pas claimen nadat gecontroleerd is of er een proces met zijn kritieke sectie bezig is.

**Zwakke plek** -> wanneer een proces "bezet" op true zet, moet het wachten omdat "bezet" true is. Het proces maakt het zichzelf onmogelijk in zijn kritieke sectie te komen. De poging mislukt omdat het hier geen verschil maakt welk proces in zijn kritieke sectie zit. Een proces moet onderscheid kunnen maken tussen zichzelf en andere processen.

Mogelijke oplossing -> twee globale booleaanse variabelen gebruiken "bezet1" en "bezet2". "Bezet1" is true als proces 1 in zijn kritieke sectie is en false als dit niet het geval is. "Bezet2" is true als proces 2 in zijn kritieke sectie is en false als het dat niet is. <font color="red">Een proces declareert dus het betreden van zijn kritieke sectie en controleert dan of het andere proces dat ook heeft gedaan.</font>

Als proces 1 in zijn kritieke sectie is en deze vervolgens verlaat, zet het "bezet1" op false. Als proces 2 staat te wachten, wordt het hervat. Het omgekeerde vindt plaats als proces 2 zijn kritieke sectie verlaat. Elk proces kan zijn kritieke sectie dus diverse malen uitvoeren indien het ander proces inactief is.

**Deze constructie zorgt voor wederzijdse uitsluiting zonder de processen te dwingen bij toerbeurt hun kritieke secties in te gaan**. Alleen als het andere proces niet in zijn kritieke sectie is of bezig is daar in te gaan, kan een proces zijn kritieke sectie betreden. **Wederzijdse uitsluiting is dus gegarandeerd.**

Helaas is er **nog een probleem** dat zich kan voordoen. Stel dat beide processen tegelijk, of vrijwel op hetzelfde moment hun kritieke sectie proberen in te gaan. Het probleem is dat elk proces denkt dat het andere in zijn kritieke sectie is. <font color="red">Elk wacht dus tot de ander EXITMUTUALEXCLUSION heeft uitgevoerd. Omdat beide wachten, gebeurt er niets, nooit meer.</font>

Een dergelijke situatie, waarin twee processen elk erop wachten dat de ander iets doet, noemen we een <font color="red">**deadlock (impasse)**</font>. Het resultaat is dat geen van de processen verder kan. Gewoonlijk moet één proces worden afgebroken, waarbij al het verrichte werk geheel of gedeeltelijk verloren gaat. Dan moet het proces opnieuw worden gestart.

## 4. Het algoritme van Dekker

> zonder ongewenste neveneffecten

Het staat in voor <font color="red">wederzijdse uitsluiting voor twee parallelle, asynchrone processen</font> door ideeën uit de eerder beschreven algoritmen te gebruiken.

```
int bezet1 = 0; // false
int bezet2 = 0; // false

int main(void)
{ // main
    void process1 (void);
    void process2 (void);
    parbegin
        process1();
        process2();
    parend
    return 0;
} // main

void process1(void)
{   // process1
    ...
    // Begin van ENTERMUTUALEXCLUSION
    bezet1 = 1; //true
    while (bezet2)
    {
        if (welk == 2)
        {
            bezet1 = 0; // false
            while (welk == 2); // wacht tot welk 1 wordt
            bezet1 = 1; // true
        }
    }
    // Einde van ENTERMUTUALEXCLUSION
    ...
    // Kritieke sectie van process1
    ...
    // begin van EXITMUTUALEXCLUSION
    welk = 2;
    bezet1 = 0; // false
    // einde van EXITMUTUALEXCLUSION
    ...
}

void process2(void)
{   // process2
    ...
    // begin van ENTERMUTUALEXCLUSION
    bezet2 = 1; // true
    while (bezet1)
    {
        if (welk == 1)
        {
            bezet2 = 0; // false
            while (welk == 1); // wacht tot welk 2 wordt
            bezet2 = 1; // true
        }
    }
    // einde van ENTERMUTUALEXCLUSION
    ...
    // kritieke sectie van proces2
    ...
    // begin van EXITMUTUALEXCLUSION
    welk = 1;
    bezet2 = 0; // false
    // einde van EXITMUTUALEXCLUSION
    ...
}
```

Er zijn twee grote verschillen tussen deze oplossing en de vorige

- 1<sup>ste</sup> -> de booleaanse variabelen geven niet aan of een proces daadwerkelijk in zijn kritieke sectie is; ze maken slechts kenbaar dat een proces dat wil gaan doen.
- 2<sup>de</sup> -> de voorrang niet streng wordt voorgeschreven, tenzij beide processen op vrijwel hetzelfde moment proberen hun kritieke secties in te gaan.

## 3.5 Het algoritme van Peterson

> biedt een eenvoudiger elegante oplossing

```
boolean flag [2];
int turn;
void P0()
{
    while(true)
    {
        flag[0] = true;
        turn = 1;
        while (flag[1] && turn == 1) {
            // Do nothing...
        }
        /* Critical section */
        flag[0] = false;
        /* ... */
    }
}
void P1()
{
    while(true)
    {
        flag[1] = true;
        turn = 0;
        while (flag[0] && turn == 0) {
            // Do nothing...
        }
        /* Critical section */
        flag[1] = false;
        /* ... */
    }
}
void main()
{
    flag[0] = false;
    flag[1] = false;
    parbegin(P0, P1);
}
```

## 3.7 Semaforen

![](https://robinmalfait.com/afbeeldingen/droplr/1hQt3.png)

> een integer-variabele die door slechts 2 primitieve operaties kan worden veranderd.

Een primitieve kan niet worden onderbroken; eenmaal begonnen, kan het proces tot het klaar is niet worden onderbroken of opgeschort. Primitieve operaties zijn afhankelijk van het systeemontwerp, daarom moet er bij het ontwerpen van computersystemen altijd rekening mee worden gehouden.

### 3.7.1 Inleiding

De primitieve operaties voor een semafoor zijn P en V, en worden als volgt gedefinieerd. Als S een semafoor is, dan is

```
P(S): (wait)
if (S > 0)
    S = S - 1;
else
    (proces uitstellen)

V(S): (signal)
if (een proces uitgesteld is als gevolg van P(S))
    (hervat een proces)
else
    S = S + 1;
```

Een proces dat de primitieve P uitvoert, moet misschien wachten (WAIT). Een proces dat de primitieve V uitvoert, geeft misschien het signaal dat een ander proces kan worden hervat. Het feit dat P en V niet onderbroken kunnen worden is essentieel. Een eenmaal begonnen operatie eindigt zonder onderbreking.

Het algoritme wordt dan:

```
int S = 1; // Semafoor

int main(void)
{
    void process1(void);
    void process2(void);
    parbegin
        process1();
        process2();
    perend
    return 0;
}

void process1(void)
{
    ...
    // Begin van ENTERMUTUALEXCLUSION
    P(S);
    // Einde van ENTERMUTUALEXCLUSION
    ...
    // Kritieke sectie van process1
    ...
    // begin van EXITMUTUALEXCLUSION
    V(S);
    // einde van EXITMUTUALEXCLUSION
    ...
}

void process2(void)
{
    ...
    // Begin van ENTERMUTUALEXCLUSION
    P(S);
    // Einde van ENTERMUTUALEXCLUSION
    ...
    // Kritieke sectie van process2
    ...
    // begin van EXITMUTUALEXCLUSION
    V(S);
    // einde van EXITMUTUALEXCLUSION
    ...
}
```

Naast de eenvoud en de elegantie van semaforen hebben ze nog een ander belangrijk voordeel. Het algoritme kan gemakkelijk worden uitgebreid voor een situatie geval met n parallelle processen.

<font color="red">Als 1 proces P(S) uitvoert, zijn alle andere gedwongen te wachten.</font>

Een semafoor is dus een onderdeel van een synchronisatie-mechanisme voor parallelle of gedistribueerde programma's.

### 3.7.2 Sterke Semaforen

- Voor het verzenden van een signaal via semafoor s voert een proces de primitieve signal(s) uit.
- Voor het ontvangen van een signaal via semafoor s voert een proces de primitieve wait(s) uit; is het corresponderende signaal nog niet verzonden, dan wordt het proces onderbroken totdat het versturen ervan plaats vindt.

Om het gewenste effect te bereiken kunnen we de semafoor beschouwen als een variabele die een gehele waarde heeft en waarvoor **3 bewerkingen zijn gedefinieerd:**

1. Een semafoor kan worden <font color="#0088cc">geïnitialiseerd op een niet-negatieve waarde</font>.
2. De bewerking <font color="#0088cc">**wait** verlaagt de semafoorwaarde</font>. Wordt de waarde negatief, dan wordt het proces dat de opdracht wait uitvoert, geblokkeerd.
3. De bewerking <font color="#0088cc">**signal** verhoogt de semafoorwaarde</font>. Is de waarde niet positief, dan wordt een proces dat is geblokkeerd door een bewerking wait gedeblokkeerd.

Er bestaat geen mogelijkheid, anders dan deze 3 bewerkingen, om semaforen te inspecteren of te bewerken.

```
struct semaphore {
    int count;
    queueType queue;
}

void wait(semaphore s)
{
    s.count--;
    if (s.count < 0)
    {
        place this process in s.queue;
        block this process
    }
}

void signal(semaphore s)
{
    s.count++;
    if (s.count <= 0)
    {
        remove a process P from s.queue;
        place process P on ready list;
    }
}
```

De primitieven **wait** en **signal** worden verondersteld atomair te zijn. D.w.z ze kunnen niet worden onderbroken en elke routine kan worden behandeld als 1 ondeelbare stap.

> Definitie van <font color="red">binaire</font> semafoorprimitieven:


```
struct binary_semaphore {
    enum (zero, one) value;
    queType queue;
};

void waitB(binary_semaphore s)
{
    if (s.value == 1) {
        s.value = 0;
    } else {
        place this process in s.queue;
        block this process;
    }
}

void signalB(binary_semaphore s)
{
    if (s.queue.is_empty()) {
        s.value = 1;
    } else {
        remove a process P from s.queue;
        place process P on ready list;
    }
}
```

Voor zowel semaforen als binaire semaforen wordt een wachtrij (queue) gebruikt, die alle processen bevat die op de semafoor wachten. Hierbij speelt de vraag in welke volgorde de processen uit de wachtrij worden verwijderd. De meest eerlijke strategie is <font color="red">FIFO</font>.


> **!** Verschil tussen zwakke en sterke semaforen:

- Bevat de definitie van een semafoor deze
FIFO-strategie, dan wordt dit een **sterke
semafoor genoemd**.
- Als niet is vastgelegd in welke volgorde
processen uit de wachtrij worden
verwijderd, is er sprake van een **zwakke
semafoor**.

Voorbeeld van een sterke semafoor:

![](https://robinmalfait.com/afbeeldingen/droplr/1cXb4.png)

**Het algoritme van wederzijdse uitsluiting:**

```
/* Program mutualexclusion */
const int n = /* number of processes */;
semaphore s = 1;
void P(int i)
{
    while (true) {
        wait(s);
        /* Cirtical Section */;
        signal(s);
        /* remainder */;
    }
}

void main()
{
    parbargin(P(1), P(2), ..., P(n));
}
```

Mogelijke volgorde van 3 processen die voor de wederzijdse uitsluiting de aanpak van bovenstaande code gebruiken:

![](https://robinmalfait.com/afbeeldingen/droplr/1fPBP.png)

> **!** Sterke semaforen garanderen de afwezigheid van starvation, zwakke semaforen doen dit niet!!!

Implementatie semaforen:

- 1ste mogelijkheid -> **implementeren in hardware of firmware**
- 2de mogelijkheid -> **softwarebenadering** zoals algoritme van Dekker of Peterson => leidt tot een aanzienlijke overhead in de verwerking.
- 3de mogelijkheid -> **het gebruiken van een in hardware ondersteund mechanisme voor wederzijdse uitsluiting** zoals bijvoorbeeld het gebruik van een instructie test and set waarbij de semafoor weer een datastructuur heeft en een nieuwe integere als component, s.flag bevat.
- 4de mogelijkheid -> bij een systeem met 1 processor is het mogelijk **interrupts** te **verbieden** tijdens de bewerkingen wait en signal.


**De instructie testset:**

```
wait(s)
{
    while ( ! testset(s.flag))
    {
        /* Do Nothing */
    }
    s.count--;
    if (s.count < 0)
    {
        place this process in s.queue;
        block this process (must also set s.flag to 0)
    }
}

signal(s)
{
    while ( ! testset(s.flag))
    {
        /* Do nothing */
    }
    s.count++;
    if (s.count <= 0)
    {
        remove a process P from s.queue;
        place process P on ready list;
    }
    s.flag = 0;
}
```

**Interrupts:**

```
wait(s)
{
    inhibit interrupts;
    s.count--;
    if (s.count < 0) {
        place this process in s.queue;
        block this process and allow interrupts
    } else {
        allow interrupts;
    }
}

signal(s)
{
    inhibit interrupts;
    s.count++;
    if (s.count <= 0) {
        remove a process P from s.queue;
    }

    allow interrupts;
}
```

## 3.8 Synchronisatie

Het gemak waarmee semaforen wederzijdse uitsluiting afdwingen, maakt het ons mogelijk ook andere problemen, bijvoorbeeld het <font color="red">synchroniseren van processen</font>, op te lossen.

We definiëren dit als het opleggen van een dwingende volgorde aan events die door concurrente, asynchrone processen worden uitgevoerd.

Wij moeten garanderen dat processen in een bepaalde volgorde verlopen.

**Illustratie van de problematiek van synchroniseren a.d.h.v. het filosofen probleem:**

De vijf filosofen zitten aan een tafel en kunnen twee dingen doen: spaghetti eten of filosoferen. Als ze eten kunnen ze niet denken en als ze denken kunnen ze niet eten. De spaghetti staat midden op de ronde tafel en om te eten heeft elke filosoof twee vorken nodig. Er zijn echter slechts vijf vorken. Zo heeft elke filosoof één vork aan zijn linker en één aan zijn rechterhand; de filosoof kan die oppakken, maar alleen een voor een.

Het probleem is nu om de filosofen zodanige instructies te geven dat ze niet zullen verhongeren.

Dit soort problemen zijn in het algemeen niet zo eenvoudig op te lossen.

![](https://robinmalfait.com/afbeeldingen/droplr/17VrF.png)

Stel bijvoorbeeld dat elke denker als filosofie heeft: ik pak een vork zo gauw ik kan, als beide beschikbaar zijn eerst de linkervork; zo gauw ik beide vorken heb eet ik wat; dan leg ik de vorken weer neer.

Op het eerste gezicht een redelijk plan, maar nu kan de situatie ontstaan dat elke filosoof de linker vork in de linkerhand heeft, eeuwig wachtend tot de rechter vork vrijkomt. Dit is een voorbeeld van <font color="red">**'deadlock'**</font>: er is helemaal geen voortgang in het systeem meer mogelijk. Elke filosoof zal verhongeren.

Er zijn technieken om tot oplossingen te komen die deadlock bewijsbaar voorkomen; Dijkstra heeft het probleem verzonnen om zulke technieken te demonstreren.

We kunnen bijvoorbeeld de denkers nummeren en elke denker alleen een vork laten pakken als er geen hoger genummerde denker al een vork vast heeft. Nu is deadlock onmogelijk.

Deadlock is echter niet het enige soort situatie dat in het ontwerp moet worden uitgesloten.

Stel bijvoorbeeld dat we een denker zelfs geen vork laten pakken als tegelijk een hoger genummerde hetzelfde probeert. Dan zal de hoogst genummerde altijd eten, terwijl de rest verhongert. Zo'n situatie wordt <font color="red">**starvation**</font> genoemd.

We kunnen dit nog verder aanscherpen, bijvoorbeeld door te eisen dat het systeem eerlijk is, in de zin dat de filosofen niet alleen allemaal altijd nog ooit de kans krijgen te eten, maar ze die kans zelfs even vaak krijgen; of door te eisen dat de totale wachttijd zo klein mogelijk is.

Deze situatie illustreert de problemen die zich kunnen voordoen bij het synchroniseren van toegang tot resources (de vorken), bijvoorbeeld door verschillende threads(de filosofen) in een computerprogramma.

Als verschillende threads gebruik maken van dezelfde variabelen of bestanden is het niet veilig dat ze die tegelijk proberen aan te passen; daarom kan het onvermijdelijk zijn dat threads op elkaar moeten wachten. Als deze synchronisatie niet correct wordt ontworpen kan het voorkomen dat een thread helemaal nooit meer aan de beurt komt (<font color="red">**starvation**</font>) of dat dat zelfs voor elke thread geldt (<font color="red">**deadlock**</font>).

Bij de interactie tussen processen moet aan twee fundamenten eisen worden voldaan: **synchronisatie** en **communicatie**.

Processen moeten worden gesynchroniseerd om wederzijdse uitsluiting af te dwingen; samenwerkende processen moeten soms informatie uitwisselen.

Een benadering die voorziet in beide functies, is het uitwisselen van berichten (<font color="red">**message passing**</font>).

Het uitwisselen van berichten heeft het bijkomende voordeel dat dit kan worden gebruikt in gedistribueerde systemen en in systemen met een of meer processors en bij gedeeld geheugen.

Er bestaan tal van manieren voor het uitwisselen van berichten.

De feitelijke functie voor het uitwisselen van berichten wordt meestal geformuleerd als een stel <font color="red">**primitieven**</font>:

```
send(bestemming, bericht)
receive(bron, bericht)
```

Dit is minimale aantal bewerkingen dat nodig is bij het uitwisselen van berichten door processen.

Een proces verstuurt met de primitieve verzenden (send) informatie in de vorm van een bericht (message) aan een proces dat wordt aangeduid als bestemming of doel (destination).

Een proces ontvangt informatie met de primitieve ontvangen (receive), waarbij de bron (source) van het verzendende proces en het bericht worden aangegeven.

Het uitwisselen van een bericht tussen 2 processen vraagt om een zekere mate van synchronisatie tussen beide processen.
De ontvanger kan pas een bericht ontvangen als dat is verzonden door een ander proces.

> Synchronisatie kunnen we dus definiëren als het coördineren van de activiteiten van twee of meer processen op basis van een conditie.

Soorten Synchronisatie

* Blokkerende zender, blokkerende ontvanger
    - Rendez-vous
    - Dichte synchronisatie processen
* Niet-blokkerende zender, blokkerende ontvanger
    - Meest gebruikt
    - Meerdere boodschappen naar verschilllende ontvangers
    - B.V.: Serverproces (= ontvanger)
* Niet-blokkerende zender, niet-blokkerende ontvanger
    - B.V.: UDP

**GEEN** Combinaties:

* Blokkerende zender, niet blokkerende ontvanger

![](https://robinmalfait.com/afbeeldingen/droplr/1e223.png)

## 3.9 Monitoren

Semaforen zijn een primitief maar krachtig en flexibel gereedschap voor het afdwingen van wederzijdse uitsluiting en voor het coördineren van processen.

Het kan echter moeilijk zijn een correct programma te maken met semaforen. De moeilijkheid is dat de bewerkingen **wait** en **signal** verspreid kunnen zijn over het programma en het is lastig te zien welke algehele invloed bewerkingen hebben op de betreffende semaforen.

De monitor is een constructie in een programmeertaal die een functionaliteit biedt die vergelijkbaar is met die van semaforen, maar die gemakkelijker te besturen is.

![](https://robinmalfait.com/afbeeldingen/droplr/UpMf.png)

Een monitor is een constructie die code kan bevatten die naar gemeenschappelijke gebruikte data verwijst. Oppervlakkig gezien lijkt het een verzameling datatypen, datastructuren en procedures, onder de monitor heading. Maar een monitor is veel meer

2 procedures binnen dezelfde monitor kunnen niet tegelijk actief zijn. Door de taal gedefinieerde <font color="red">**aanroep-protocollen**</font> (callingprotocollen) dwingen dit automatisch af.

Een kritieke sectie kunnen we daarom, i.p.v. deze in een proces te coderen, als monitor-procedureschrijven. De code wordt dan niet gedupliceerd. Wanneer een proces gemeenschappelijke data moet gebruiken, roept het een monitor-procedure aan.

Door een compiler gegeneerde code, die de besturing aan een monitor-procedure overdraagt, wordt wederzijdse uitsluiting gegarandeerd.

Op deze manier is er een aanzienlijk verschil tussen een monitor en een eenvoudige collectie procedures. Een monitor dwingt heel streng wederzijdse uitsluiting af tussen processen die proberen zijn procedures uit te voeren. Om dit verschil te benadrukken wordt een monitor-procedure een <font color="red">**procedure-entry genoemd**</font>.

Via conditionele variabelen kan de monitor processen uitstellen of hervatten om events te synchroniseren.

Monitoren werken het best wanneer ze centraal geïnstalleerd kunnen worden. Omdat alle processen de monitor aanspreken, is deze het middelpunt van alle discussies en analyses. Maar vele systemen hebben geen centrale component.

De monitorconstructie is geïmplementeerd in enkele programmeertalen waaronder Modula-3, Java, ... . Ook is ze geïmplementeerd als een programmabibliotheek. Dit biedt de mogelijkheid grendels op elk object te plaatsen. Vooral bij zoiets als een verbonden lijst kan het zinvol zijn alle verbonden lijsten te vergrendelen met 1 grendel, 1 grendel te gebruiken voor elke lijst of 1 grendel te gebruiken voor elk element van elke lijst.

> Monitor: Een constructie in een programmeertaal die voorziet in abstracte gegevenstypen en toegang, met wederzijdse uitsluiting, tot een aantal procedures.

## 3.10 Deadlocks

Een deadlock of een impassetoestand treedt op wanneer 2 of meer processen voor onbepaalde tijd wachten op een gebeurtenis die alleen door 1 van de wachtende processen kan worden veroorzaakt.

**2 methoden voor het behandelen van deadlocks:**

- gebruik één of ander protocol (afspraak) om te garanderen dat het systeem nooit in een deadlock-situatie zal komen;
- laat toe dat het systeem in een deadlock-situatie geraakt en los deze dan op

![](https://robinmalfait.com/afbeeldingen/droplr/1kUJ2.png)

Aspecten van deadlock:

- **Deadlock-preventie**

    Het besturingssysteem beperkt het gemeenschappelijk gebruik van resources om deadlock onmogelijk te maken.

- **Deadlock-vermijding**

    Het besturingssysteem onderzoekt alle aanvragen voor resources heel nauwkeurig. Ziet het besturingssysteem dat de toewijzing van een resource het risico van deadlock met zich meebrengt, dan weigert het de gevraagde toegang en vermijdt zo het probleem.

- **Deadlock-signalering**

    Als er een deadlock optreedt, moet het besturingssysteem dit kunnen signaleren. Het besturingssysteem ziet elk proces in een wachttoestand. Hoe kan het besturingssysteem erachter komen dat dit wachten permanent is?

- **Deadlock-herstel**

    Wat moet er gebeuren nadat het besturingssysteem een deadlock ontdekt? De processen moeten daar toch een keer uit bevrijd worden. Het besturingssysteem moet dit probleem oplossen.

### 3.10.1 Deadlock-preventie

Een deadlock kan alleen dan optreden indien en een systeem tegelijkertijd aan de volgende 4 voorwaarden is voldaan:

1. Wederzijdse uitsluiting (mutual exclusion)
2. bezet houden en wachten (hold en request)
3. geen voortijdig ontnemen (non-preëmption)
4. wachten in een kring (circular wait)

Om deadlock te voorkomen zorgen we ervoor dat tenminste 1 van de voorwaarden nooit optreedt.

Er ontstaan aanzienlijke problemen als we proberen deadlock te voorkomen door een noodzakelijke conditie op te heffen.

**Problemen:**

- Als er geen wederzijdse uitsluiting wordt afgedwongen, kunnen de activiteiten van het ene proces de voortgang van het andere proces beïnvloeden. Deze conditie mag dus niet worden verwijderd.
- Alvorens met zijn uitvoering te beginnen moet elk proces al de resources, die het nodig heeft, verkrijgen. Als een proces alle resources tegelijkertijd moet aanvragen, heeft het een aantal resources voor lange tijd onder beheer zonder ze daadwerkelijk te gebruiken. Dit beperkt de beschikbaarheid van de resources.
- Als het proces enkele resources vasthoudt en het vraagt nog een resource aan, en deze resource kan niet onmiddellijk aan dat proces worden toegewezen (d.w.z. het proces moet wachten), dan moet het proces al de resources die het op dat ogenblik vasthoudt, vrijgeven. Als we deze conditie verwijderen, dan kan een resource met geweld van een proces ontnomen worden.
- Onderwerp alle processen aan een lineair ordeningsschema. Ieder proces kan alleen resources in opklimmende volgorde verkrijgen.

### 3.10.2 Deadlock-vermijden

Het verschil tussen het vermijden en het voorkomen van een deadlock is dat in het eerste geval deadlock niet onmogelijk is. De idee is de aanvragen die eventueel tot deadlock kunnen leiden, te weigeren.

### 3.10.3 Deadlock Signaleren

Steeds wanneer een proces een resource aanvraagt is er deadlock mogelijk. We vragen ons af hoe het besturingssysteem deadlock kan signaleren en wat het besturingssysteem eraan doet als er een deadlock is.

Eén manier om deadlock te signaleren, is een resource allocationgraf. Dit is een georiënteerde graf die gebruikt wordt om de resource-toewijzingen weer te geven.

Een deadlock kunnen we signaleren door de resource allocationgraf te bekijken. Al deze een cyclus bevat, is er een deadlock. Om cycli in een georiënteerde graf te signaleren, heeft het besturingssysteem diverse algoritmen ter beschikking.

### 3.10.4 Herstel in een deadlock-situatie

Nu we weten hoe we een deadlock signaleren, rest ons nog 1 vraag: wat doen we eraan?

Eén mogelijkheid is een proces gewoon maar af te breken en de eraan toegewezen resources verwijderen. Hierdoor wordt de cyclus en dus ook de deadlock geëlimineerd ten koste van het proces.

Een andere mogelijkheid is een <font color="red">**rollback**</font> op het proces uit te voeren. Hierbij worden alle eraan toegewezen resources verwijderd. Het proces verliest alle updates die het met gebruik van deze resources heeft gemaakt, en al het werk dat inmiddels was gedaan, maar wordt niet afgebroken. Het besturingssysteem brengt het terug in de toestand van vóór de aanvraag en toewijzing van de verwijderde resources. Dit kan overeenkomen met de oorspronkelijke start van het proces, of met een checkpoint. Een checkpoint treedt op wanneer een proces vrijwillig alle resources vrijgeeft. Door het gebruik van checkpoints kan elk proces eventueel verlies van werk echter zo klein mogelijk houden.

## 3.11 Threads


Een proces bestaat uit 2 afzonderlijke en mogelijk onafhankelijke concepten: een concept dat samenhangt met de eigendom van bronnen en een concept dat samenhangt met de uitvoering. Dit onderscheid heeft in enkele besturingssystemen geleid tot de ontwikkeling van een constructie die bekendstaat als een <font color="red">**thread**</font>.

Om een onderscheid te maken tussen de 2 concepten, wordt de eenheid voor de verdeling (uitvoering) doorgaans een thread of lichtgewicht proces genoemd en de eenheid voor de eigendom van bronnen een proces of een taak.

Multithreading verwijst naar de mogelijkheid van een besturingssysteem binnen een proces meerdere threads of draden te gebruiken voor de uitvoering. De traditionele benadering met één uitvoeringsthread per proces, waarin het concept thread in feite niet bestaat, wordt ook wel een benadering met één thread genoemd.

![](https://robinmalfait.com/afbeeldingen/droplr/173QP.png)

In een omgeving met multithreading wordt een proces gedefinieerd als beveiligings-en brontoewijzingseenheid.

Het volgende is verbonden met processen:

- een **virtuele adresruimte**, die het procesbeeld bevat
- **beveiligde toegang** tot processors, andere processen (voor de communicatie tussen processen), bestanden en I/O bronnen (apparaten en kanalen)

![](https://robinmalfait.com/afbeeldingen/droplr/160FL.png)

Binnen een proces kunnen er een of meer threads zijn, elk met het volgende:

* een **uitvoeringstoestand** van de thread (actief, gereed, ...)
* een **context** die wordt opgeslagen als de thread niet actief is, een thread kan onder meer worden gezien als een onafhankelijke programmateller die binnen een proces werk
* **een stack** voor de uitvoering
* **enige statische opslagcapaciteit per thread** voor lokale variabelen
* toegang tot het geheugen en de bronnen van het bijhorende proces, die wordt gedeeld door alle threads binnen dat proces.

Alle threads van een proces delen de toestand en de bronnen van dat proces. Ze bevinden zich in dezelfde adresruimte en hebben toegang tot dezelfde gegevens.

De grootste voordelen van threads hangen samen met de gevolgen voor de prestaties: het creëren van een nieuwe thread binnen een bestaand proces kost veel minder tijd dan het creëren van een geheel nieuw proces en ditzelfde geldt voor het overschakelen tussen 2 threads binnen hetzelfde proces.

Threads verbeteren ook de efficiëntie van de communicatie tussen verschillende actieve programma's. Aangezien threads binnen hetzelfde proces echter geheugen en bestanden delen, kunnen ze rechtstreeks met elkaar communiceren.

Net zoals processen hebben threads uitvoeringstoestanden en kunnen ze met elkaar worden gesynchroniseerd.

![](https://robinmalfait.com/afbeeldingen/droplr/1jrg8.png)

1. Spawn
2. Unblock
3. Block
4. Finish

# Hoofdstuk 4: Processen in Linux

## 4.1 Wat is een proces

> **Proces**: is een uitvoerbaar deel van een programma, dat in het geheugen geladen wordt en daar instructies doorgeeft naar de processor.

**Multi**:

- **Multi-user** (veel gebruikers): verschillende gebruikers kunnen tezelfdertijd processen opstarten.
- **Multi-tasking** (veel taken uitvoeren): een gebruiker kan meerdere processen tezelfdertijd opstarten.
- Processen moeten beheerd worden: geheugen - schijfruimte - processor capaciteit - ...

## 4.2 Soorten Processen

3 soorten:

1. interactieve
2. automatische (batch)
3. daemons

### 4.2.1 Interactieve Processen

Opstarten en controleren vanuit een terminal sessie, m.a.w. er moet iemand aangemeld zijn op het systeem.

- **Interactieve** processen kunnen zowel op de voorgrond (foreground) als in de achtergrond (background) draaien.
- **Foreground** processen houden de terminal bezet zolang ze lopen.
- **Background** processen bezetten de terminal niet en kunnen andere taken uitgevoerd worden.

### 4.2.2 Automatische (batch) processen

Deze processen wachten eerst op uitvoering in een daartoe bestemde map. Vandaar uit worden ze opgeroepen door een programma dat de wachtrij analyseert en de programma's systematisch uitvoert.

Het programma dat het eerste in de wachtrij terecht kwam, wordt ook eerst uitgevoerd. De naam van dit systeem is "FIFO", wat staat voor "first in, first out".

2 manieren:

1. **at**: zie later
2. **batch**: systeemadministratie - (3<sup>e</sup> jaar)

### 4.2.3 Daemons (demonen)

Zijn server processen die continu draaien.

Meestal worden ze opgestart wanneer het systeem opstart, waarna ze in de achtergrond wachten tot hun diensten vereist zijn.

Vb.: Apache (httpd), mysql, redis, ...

## 4.3 Background

Door middel van job control beheer je processen in foreground of background.

Een process in background draaien heeft enkel zin als het over processen gaat die geen input verwachten en veel tijd nodig hebben.

Een process opstarten in background:

`tree / > boomStructuur.txt &`, het **&** teken zorgt voor de background job

![](https://robinmalfait.com/afbeeldingen/droplr/18GKH.png)

**PID**: Process identification - proces volgnummer.

Jobnummer - dit is een nummer dat door de shell gebruikt wordt.

## 4.4 Eigenschappen

Elk process heeft een **aantal vaste eigenschappen**:

- PID: uniek nummer dat verwijst naar een proces
- PID dat het process gestart heeft, **PPID** Komt van Parent-PID
- Het zogenaamde **nice number**: de mate van vriendelijkheid van dit proces: laat het nog veel processorcapaciteit over aan andere processen, of juist niet?
- De terminal van waaruit dit proces opgestart werd, als het om een interactief proces gaat. Dit wordt aangeduid met een **tty number**.
- De **gebruikersnaam** van de gebruiker aan wie het proces toebehoort.
- De **groepsnaam** van de groep aan wie het proces toebehoort.

## 4.5 Informatie weergeven

### Korte Informatie

`ps` zonder opties.

| PID | TTY | TIME | CMD |
| --- | --- | ---- | --- |
| het procesidentificatienummer. | het terminal type en nummer waaraan het proces verbonden is. Wij gebruiken pts, pseudo-terminals, in tegenstelling tot echte terminals waarbij je een toetsenbord en een scherm hebt, waarmee je niets anders kan doen dan 1 enkele shell openen, in een tekstuele omgeving (te vergelijken met DOS vroeger). Pseudo-terminals zijn terminal vensters in een grafische omgeving, of verbindingen van op een netwerk. | een relatieve indicatie van de tijd die het aantal processorcycli dat het process al verbruikt heeft. Gewone processen van gebruikers verbruiken slechts een klein deel van de totale processorkracht. | de naam van het commando. |

(Deze screenshot is genomen op een mac, dus kan iets anders zijn)
![](https://robinmalfait.com/afbeeldingen/droplr/18w9v.png)

### Uitgebreide Informatie

`ps -ef`

| UID | PID | PPID | TTY | CMD |
| --- | --- | ---- | --- | --- |
| de naam van de gebruiker die het proces opstartte | het procesidentificatienummer. | procesidentificatienummer van het *parent process, het proces dat dit proces opstartte*. | de terminal waaraan het proces verbonden is, "?" wil zeggen dat het proces niet aan een terminal verbonden is. | de naam van het commando. |

(Deze screenshot is genomen op een mac, dus kan iets anders zijn)
![](https://robinmalfait.com/afbeeldingen/droplr/12GZH.png)

`top` commando:

Geeft ongeveer dezelfde informatie als ps-ef, maar het wordt om de 5 seconden opgefrist.

Bovendien hebben we hier al automatisch een zeker vorm van sorteren: de zwaarste processen, dat wil zeggen de processen die het meeste processortijd verbruiken, worden bovenaan in de lijst getoond.
We krijgen ook niet alle processen te zien. Al naargelang de grootte van je terminal venster wordt de lijst ingekort.

We krijgen dus een "top" van de processen te zien.

`uptime` commando:

De output van het <font color="red">**uptime**</font> commando, met daarin informatie over hoe lang het systeem al draait, hoeveel gebruikers er verbonden zijn en wat de belasting is.

Het aantal processen en de status ervan: er draait altijd slechts 1 proces tegelijk op de CPU, terwijl de andere in een wachtrij staan.

De belasting van de processor(s): moet de processor veel berekeningen maken, dan is de belasting hoog.

Gebruik van het geheugen: alle programma's die actief zijn, nemen een plaatsje in op het geheugen.

Gebruik van de swap space (het virtuele geheugen): als er teveel programma's draaien, wordt alle beschikbare plaats in het geheugen opgevuld. Een speciale plek op de harde schijf wordt dan gebruikt als extra geheugen.

![](https://robinmalfait.com/afbeeldingen/droplr/13iFZ.png)

`pstree` commando: Samenhang van processen

De meeste processen stammen af van **systemd**
Het initiële proces waarmee het systeem gestart wordt.

## 4.6 Processen beheren

| (deel van) Commando | Betekenis |
| ------------------- | --------- |
| commandonaam | Draait het commando in de voorgrond |
| commandonaam **&** | Draait het commando in de achtergrond en geeft de terminal vrij.
| **jobs** | Toon de commando's die in de achtergrond aan het draaien zijn. |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Bevries het commando (in het Engels: Suspend) |
| <kbd>Ctrl</kbd>+<kbd>C</kbd> | Beëindig het commando dat in de voorgrond draait |
| **%n** | Elk commando in de achtergrond krijgt een jobnummer(in bovenstaand voorbeeld: 1. Gebruik de uitdrukking % met dit nummer om naar een proces te verwijzen |
| **bg** | Activeer een bevroren commando terug, na <kbd>Ctrl</kbd>+<kbd>Z</kbd>, maar wordt uitgevoerd in de background |
| **fg**  | Zelfde als bg, maar wordt in de foreground uitgevoerd. |
| **kill** | Beëindig een programma dat in de achtergrond draait. |

**Enkele handige commando's:**

| Commando | Uitleg |
| -------- | ------ |
| `time` | Het **time** commando werkt als een chronometer. Het geeft aan hoeveel uur, minuten en seconden een opdracht duurt om uit te voeren. Je gebruikt het door het te plaatsen vóór het commando dat je wilt uitvoeren. |
| `uptime` | Het commando **uptime** geeft informatie over de belasting van het systeem. |
| `w` | Het commando **w** geeft een overzicht van de aangemelde gebruikers en hun activiteit(en). |

Indien één van de processen die je zelf hebt opgestart, te veel middelen gebruikt, heb je twee mogelijkheden:

1. Zorg dat het proces minder belastend is door middel van het `renice` commando; hiervoor moet je het proces niet onderbreken.
2. Stop het process.

### De prioriteiten veranderen

Het werken met **nice** en **renice** vereist een uitgebreide kennis van het systeem. Er is echter een gemakkelijker manier: **top**.
Een belastend proces zal vermoedelijk een negatieve nicewaarde hebben in de kolom "NI".

Praktisch:

```bash
renice -n prioriteit -p PID
```

### Processen onderbreken

**Het `kill` commando.**

Een proces stoppen omdat het hangt, op hol slaat of teveel of te grote bestanden aanmaakt, doe je met kill.

Als je daartoe de gelegenheid hebt, probeer dan eerst de zachtaardige manier en stuur een SIGTERM (waarde 15) signaal.

Dit instrueert het proces om af te handelen waar het mee bezig is volgens de procedures zoals beschreven in de code van het programma. Op die manier wordt alle rommel opgeruimd en worden er geen bestanden beschadigd.

1. Zoek het procesidentificatienummer van het proces dat je wilt stoppen met behulp van **ps -ef**.
2. Gebruik het commando **kill -15 PID_nummer**.
3. Ga na met **ps** of het proces echt wel weg is.
4. Van sommige processen raak je echter niet zo makkelijk af. Probeer dan in eerste instantie **kill -2**, een interruptiesignaal. Dat is hetzelfde als een programma onderbreken met <kbd>Ctrl</kbd>+<kbd>C</kbd> als het in de voorgrond draait.
5. Als ook dat niet helpt, zit er niet veel anders op dan het sterkste signaal te sturen, een SIGKILL, met **kill -9**.
6. Kijk in elk geval altijd na met **ps** of het stoppen gelukt is.

![](https://robinmalfait.com/afbeeldingen/droplr/1fxX6.png)

**Het `xkill` commando**

Grafische programma's die vast hangen kan je proberen stoppen met `xkill`.

Na het ingeven van dit commando verandert de muispijl in een doodshoofd. Beweeg het doodshoofd over het venster van het programma dat je wilt stoppen en klik met de linker muistoets.

## 4.8 Processen programmeren voor automatische uitvoering

3 manieren op uitgestelde taken in te plannen:

1. Een korte tijd wachten en daarna de taak uitvoeren, gebruik makend van het **sleep** commando. Het tijdstip van uitvoering hangt af van het tijdstip waarop de taak gepland werd.
2. De taak uitvoeren op een welbepaald tijdstip met het **at** commando. Het tijdstip van uitvoering is niet afhankelijk van het tijdstip van planning.
3. Een taak steeds opnieuw uitvoeren, maandelijks, wekelijks, dagelijks, elk uur of elke minuut, door gebruik te maken van de **cron** faciliteit.

**Het `sleep` commando**

Het enige dat sleep doet is wachten. Standaard wordt de wachttijd uitgedrukt in seconden.

**Het `at` commando**

Geef het **at** commando in, gevolgd door het tijdstip waarop de geplande taak uitgevoerd moet worden.

Daarmee kom je in de at omgeving, gekenmerkt door de at prompt.Hier geef je het commando of de commando's in die gepland moeten worden.

Sluit af met <kbd>Ctrl</kbd>+<kbd>D</kbd> en de taak wordt gepland.

Je kan een overzicht krijgen van alle at jobs met het commando atq.

Met het **atrm** commando kan je de job verwijderen. Gebruik het jobnummer uit de eerste kolom van de output van atq als argument.

**Het `cron` systeem:**

De **cron** daemon draait constant op je systeem.

Deze dienst gaat elke minuut na of er taken uit te voeren zijn voor de gebruikers of voor de diensten die op een systeem draaien.

De taken worden opgeslagen in zogenaamde crontabs(tabellen).

Elke gebruiker kan een crontab hebben, waarin elke lijn een taak voorstelt die regelmatig herhaald moet worden.

Verder is er ook nog een crontab waarin de **systeem-specifieke taken** vernoemd worden, zoals bijvoorbeeld:

- Dagelijks de index maken waarvan het `locate` commando gebruik maakt
- Dagelijks nagaan of er **updates** zijn voor de software op het systeem
- Er dagelijks voor zorgen dat **logbestanden**, waarin informatie wordt opgeslagen over wat er allemaal op het systeem gebeurd is, niet te groot worden.
- Dagelijks en wekelijks een index maken van alle **man pagina's**, zodat apropos en whatis kunnen werken.

Andere taken kunnen zijn: het maken van backups, rapporten opmaken en doorsturen, systeeminformatie analyzeren en doormailen naar de administrator, herinneringsbrieven mailen, enzovoorts.

> Alle taken die periodiek uitgevoerd moeten worden, komen voor opname in het cronsysteem in aanmerking.

De crontabs voor het systeem vind je in de **/etc** map, die van de gebruikers in **/var/spool/cron/crontabs**, maar die map is niet toegankelijk voor de niet-geprivilegieerde gebruiker. In **/var/spool/cron** vind je ook nog atjobs en atspool, omdat de at jobs onder de verantwoordelijkheid van de cron daemon vallen.

## 4.9 Levenscyclus

**Een proces aanmaken**

Een nieuw proces wordt aangemaakt doordat een bestaand proces een exacte kopie van zichzelf maakt. Dit child process is eigenlijk net hetzelfde als het ouderproces, enkel het procesidentificatienummer verschilt. Deze procedure heet men een **fork** (letterlijk: een vork of splitsing).

Na de fork wordt de geheugenruimte van het kindproces overschreven met de nieuwe procesdata: het commando dat gevraagd werd, wordt in het geheugen geladen. Dit noemt men een **exec**.

Het geheel wordt **fork-and-exec** genoemd.

**Een proces aanmaken `fork-and-exec`**

![](https://robinmalfait.com/afbeeldingen/droplr/1aExM.png)

**De rol van `systemd`**

Zoals je kunt zien aan de output van het **pstree** commando, hebben veel processen systemd als ouderproces, terwijl dat helemaal niet mogelijk is.

Veel programma's "demoniseren" hun kindprocessen, zodanig dat die kunnen blijven draaien als de ouder stopt. Het systemd process neemt de rol van peetvader van zulke processen: als de ouder sterft, vallen ze onder de verantwoordelijkheid van systemd.

Heel af en toe wil het nog wel eens mislopen met de "adoptie" van processen. Een proces dat geen ouderproces heeft, noemt men een *zombie*. Het systeem heeft geen vat meer op zo'n zombie- proces, het blijft in het geheugen hangen tot je de computer herstart.

**Een proces beëindigen**

Wanneer een proces normaal eindigt, geeft het een code, de exit status, door aan de ouder. Als alles goed verlopen is, is de exit status nul.

De waarde van de exit status van shellcommando's wordt opgeslagen in een speciale variabele, aangeduid met `$?`. Met het `echo` commando kan je de inhoud van deze variabele bekijken.

Processen eindigen omdat ze een signaal krijgen. Je kan verschillende signalen naar een proces sturen. Om dat te doen gebruik je het **`kill` commando**.

# Hoofdstuk 5: Scripts in Linux

Een shell script is een bestand met instructies die door de shell(bash) gelezen en begrepen moeten worden. Met de scripttaal die in bash is ingebouwd is het mogelijk een volledig functionerend programma te schrijven. Shell soorten: sh, bash, csh, tcsh, ksh In het bestand /etc/shells vind je een overzicht van alle gekende shells op jouw linux systeem.

Elke script heeft een **shebang**

```bash
#!/bin/bash
```

Ook aangeraden op de volgende instructies bovenaan te vermelden

```bash
#!/bin/bash

# Script stoppen als instructie faalt
set -o errexit

# Script stoppen bij gebruik van niet-gedefinieerde variabele
set -o nounset
```

Een eerste voorbeeld script (mijnsysteem.sh):

```bash
#!/bin/bash
clear
cat << _EOF_
Deze informatie wordt aangeboden door ${0}
Het programma start nu

Hallo ${USER}

Vandaag zijn we $(date) en dit is week $(date +"%V").

Deze gebruikers zijn aangemeld:
$(w | cut -d " " -f 1 | grep -v USER | sort -u)

Dit OS is $(uname -s) en draait op een $(uname -m) processor.

Uptime informatie:
$(uptime)
_EOF_
```

De script kan je laten uitvoeren aan de hand van het commando `bash mijnsysteem.sh` of `./mijnsysyteem.sh`

```
chmod +x mijnsysteem.sh
./mijnsysteem.sh
```

Output:

```
Deze informatie wordt aangeboden door mijnsysteem.sh
Het programma start nu

Hallo robin

Vandaag zijn we Wed Dec 23 15:03:19 CET 2015 en dit is week 52.

Deze gebruikers zijn aangemeld:

robin

Dit OS is Darwin en draait op een x86_64 processor.

Uptime informatie:
15:03  up 13 days, 42 mins, 2 users, load averages: 2.26 2.39 2.88
```

Deze scripts kan je bewerken met `vim`, `nano`, ...

Kies altijd een goede naam voor je script, zoeken naar bestaande script op dezelfde naam kan met `which` of `whereis`.

## het activeren van een script

```bash
chmod u+x naam_van_het_script   # Dit maakt het executable
bash -x naam_van_het_script     # Dit runt het script, met debug mode aan
source naam_van_het_script      # Werkt ook zeker
```

## Debuggen van een bash script.

```
bash -x naam_van_het_script
```

Zo worden alle acties op het scherm afgedrukt.

Wil je enkele delen uit je script debuggen, kan je dit doen met `set`:

```bash
#!/bin/bash

set -o errexit
set -o nounset

set -x
exho Dit zal in debug mode komen...
set +x
```

## Werken met variabelen en parameters

1. `variabele=waarde`
2. `variabele="meerdere waarden"`
3. `variabele=`

Deze waarde kan je weer aanroepen door gebruik te maken van:

```bash
$naam_variabele
# Of
${naam_variabele} # Dit is de beste notatie hiervoor
```

### Types van variabelen

- Read-only variabelen
- Lokale variabelen
- Omgevingsvariabelen (env)
- Shell-variabelen

**Belangrijkste omgevingsvariabelen:**

| Variabele | Beschrijving |
| --------- | ------------ |
| $HOME | Home map van de gebruiker |
| $USER / $USERNAME | Naam van de gebruiker |
| $PWD | Huidige werkmap (print working directory) |
| $BASH / $SHELL | Locatie van bash of shell |
| $BASH_VERSION | Versie van bash |
| $OSTYPE | Info over het OS |
| $PATH | Alle locaties voor uitvoerbare bestanden |
| $IFS | Bevat alle scheidingstekens |

**Belangrijkste shellvariabelen:**

| Variabele | Beschrijving |
| --------- | ------------ |
| $0 | Scriptnaam |
| $# | Aantal meegegeven parameters |
| $@ | Alle meegegeven parameters |
| $1, $2, ... ${n} | Positionele parameter |
| $? | Uitvoerstatus laatste commando (exit status) |
| $$ | Proces-id van het script |
| $! | Proces-id van het laatste commando opgestart met `&` |

### Werken met invoer

```bash
#!/bin/bash

set -o errexit
set -o nounset

clear
echo "Geef een naam: ";read naam1
echo
echo "Geef nog een naam: "; read naam2
echo
echo "De eerste naam is ${naam1}"
echo "De tweede naam is ${naam2}"
echo
```

Output: ![](https://robinmalfait.com/afbeeldingen/droplr/1azML.png)

### Positionele parameters:

Dit zijn de parameters die je meegeeft aan je script, `$0` is je script zelf.

Voorbeeld:

```bash
#!/bin/bash

set -o errexit
set -o nounset

clear
echo "De opdrachtnaam is " $0
echo "De eerste parameter is " $1
echo "De negende parameter is " $9
echo
```

Output: ![](https://robinmalfait.com/afbeeldingen/droplr/tbE9.png)

Je kan met het commando `shift` de positie van de parameter naar links opschuiven.

Voorbeeld:

```bash
#!/bin/bash

set -o errexit
set -o nounset

clear
echo "De opdrachtnaam is " $0

# Loops komen nog, achja
while [[ "$#" -gt 0 ]]; do
    echo "De huidige parameter is " $1
    shift
done
```

Output: ![](https://robinmalfait.com/afbeeldingen/droplr/10ROd.png)

Met het commando `set` kan je nieuwe parameters instellen:

Voorbeeld:

```bash
#!/bin/bash

set -o errexit
set -o nounset

clear
echo "Meegegeven parameters ($#): $@"

x="een twee drie vier"
echo "Oproepen set met volgende waarde: ${x}"

set ${x}
echo "Nieuwe parameters ($#): $@"
```

Output: ![](https://robinmalfait.com/afbeeldingen/droplr/1hSeV.png)

### Speciale Parameters:

| Speciale Parameter | Betekenis |
| ------------------ | --------- |
| $# | Verwijst naar het aantal gegeven parameters |
| $* | Geeft als resultaat één tekenreeks waarin alle parameters voorkomen. Elke parameter wordt van de vorige gescheiden door het scheidingsteken dat is gedefinieerd als waarde van de systeemvariabele IFS. |
| $@ | Geeft als output alle parameters waarbij elke parameter als individuele tekenreeks kan worden gebruikt. |

## Commando substitution

Hiermee kan je de uitvoer van een commando opvangen en eventueel opslaan in een variabele

- ```
$(commando)
```
- ```
`commando`
```

Voorbeeld:

```bash
#!/bin/bash

set -o errexit
set -o nounset

clear
thatsMe=$(whoami)

echo "Ik ben" $thatsMe
```

Output: ![](https://robinmalfait.com/afbeeldingen/droplr/TwoQ.png)

## Reguliere Expressies

| Expression | Uitleg |
| ---------- | ------ |
| . | **Jokerteken**. Vervangt elk willekeurig teken met uitzondering van \n |
| ^ | Verwijst naar het **begin** van de regel |
| $ | Verwijst naar het **einde** van de regel |
| < | Verwijst naar het begin van een **woord** |
| > | Verwijst naar het einde van een **woord** |
| [] | Match met **één van de tekens** tussen de haken.<br>Vb.: [ab] is hetzelfde als [a\|b]; [a-d] = [a\|b\|c\|d] |
| [^] | Match met alle **tekens** die **niet** tussen de haken staan. <br>Vb.: ^[^a-z] regel die niet begint met een kleine letter
| () | Groepering. <br>Vb.: (va\|moe)der matcht met 'vader' en 'moeder'; (groot)?vader matcht met 'vader' en 'grootvader' |
| ? | Voorgaand teken of reguliere epxressie komt **nul** of **één** keer voor |
| * | Voorgaand teken of reguliere expressie mag 0, 1 of meerdere keren voorkomen |
| + | Voorgaand teken komt **één** of **meerdere** keren voor |
| {n} | Voorafgaand teken komt **juist n** keer voor |
| {n,} | Voorafgaand teken komt **minstens n** keer voor |
| {,n} | Voorafgaand teken komt **hoogstens n** keer voor
| \ | Escape teken: Voorkomt dat de shell de speciale regex tekens interpreteert en vervangt. |
| Lin.x | De tekens 'Lin' gevolgd door een willekeurig teken, gevolgd door 'x' **ergens** in de tekst. |
| ^[M\|W]ortel | Matcht met Mortel en Wortel aan het begin van een **regel** |
| ab*c | 'a' gevolgd door **0 of meer** 'b'-s gevolgd door 'c' (dus 'ac', 'abc', 'abbc', 'abbbc', ...) |
| a(bc){2,4} | Matcht met 'abcbc', 'abcbcbc' en 'abcbcbcbc' |
| ,[a-zA-Z0-9]$ | Matcht regels die eindigen op een komma, gevolgd door een alfanumeriek karakter. |

Om interpretatie problemen te voorkomen, is het aan te raden reguliere expressies altijd tussen aanhalingstekens te zetten, zo zorg je er voor dat ze niet door de shell geïnterpreteerd worden.

> *Note:* Wil je je regex skills testen, of nog meer informatie opdoen? [https://regexr.com](https://regexr.com). Check et ut gasten

## Programeerbare filters

In veel gevallen is het wenselijk tekst in bestanden te bewerken op basis van woorden die voorkomen in de regels van dat bestand.

Hiervoor kan gebruik gemaakt worden van `gawk` en `sed`


### SED

> Stream EDitor

De stream editor sed is een afgeleide van de oer editor ed.

Perl wordt vaak gezien als de opvolger van sed.

Op elke **regel** van het bestand wordt de **filteropdracht** uitgevoerd.

**Syntax** sed: `sed 'lijst van opdrachten' bestandsnaam`

De filteropdrachten kunnen ok uit een tekstbestand genomen worden (**-f** optie)

Gebruik de **-n** optie om te voorkomen dat het oorspronkelijk bestand ook uitgevoerd (getoond) wordt.

Regel selectie gebeurt met een reguliere expressie tussen **/** gevolgd door een opdracht:

- **p** voor afdrukken
- **d** voor delete
- **a** voor add

Voorbeeld:

```
Pieter Paashaas

Daar komt Pieter Paashaas aan
voor het kippenhok blijft hij staan
hij doet alle deurtjes open
kan ik hier ook eitjes kopen?
tok, tok, tok
tok, tok, tok
alle kippetjes zijn op stok
kukeleku, kukeleku
alle eitjes zijn voor u.
```

Output: ![](https://robinmalfait.com/afbeeldingen/droplr/17oHe.png)

#### Substitutieopdrachten

Syntax: `s/patroon/vervanging/[opties]`

Opties:

- getal -> vervang alleen de n-de keer
- g -> vervang elke keer
- p -> druk elke regel af waarin vervangen werd
- w bestand -> schrijf gewijzigde regels weg naar bestand

Voorbeelden:

![](https://robinmalfait.com/afbeeldingen/droplr/wbED.png)
![](https://robinmalfait.com/afbeeldingen/droplr/1aIQR.png)
![](https://robinmalfait.com/afbeeldingen/droplr/16zZJ.png)

## Flow Control

`if`, `else`, `case`, `for`, `while` & `until`

### Exit-status: exit

Elk script moet een exit-status terug geven `exit 0`, als de exit-status **0** is dan is alles correct, wanneer de exit-status 1 tot en met 255 is, dan is er wat fout gegaan.

Je kan de exit status opvragen met `$?`

### Return en test

Met het commando `return` doet men hetzelfde als exit, maar het wordt alleen gebruikt binnen een functie of een script dat is aangeroepen met het commando `source`.

Het commando `test` wordt gebruikt om een conditie te 'testen'

Voorbeeld: `if test -z $1` in bash kan dit vervangen worden door gebruik te maken van vierkante haken: `if [ -z $1 ]`

Voorbeeld:

```bash
#!/bin/bash

clear

if [ -z $1 ]
then
    echo "Foutmelding"
    exit 1
fi
```

Output: ![](https://robinmalfait.com/afbeeldingen/droplr/17Ayi.png)

Met het commando `test` wordt een expressie geëvalueerd:

- Is de uitkomst positief, wordt een exit-status 0 gegeven
- Is de uitkomst negatief, wordt een exit-status 1 gegeven.

Er kunnen 5 soorten tests worden uitgevoerd:

- File testers: waarmee gekeken wordt naar de eigenschappen van een bestand
- File comparisons: waarmee bestanden vergeleken worden;
- String tests: waarmee de lengte van een string bekeken kan worden;
- Expression test: waarmee gekeken wordt naar de uitkomst van expressies
- integer tests: waarmee 'getallen' vergeleken kunnen worden.

Voor elke test kan ook gekeken worden of niet aan de voorwaarde wordt voldaan; hiervoor dient het uitroepteken(**!**)

**FILE TESTER**

| Test        | Description |
| ----------- | ----------- |
| [ -b FILE ] | True if FILE exists and is a block-special file. |
| [ -c FILE ] | True if FILE exists and is a character-special file. |
| [ -d FILE ] | True if FILE exists and is a directory. |
| [ -e FILE ] | True if FILE exists. |
| [ -s FILE ] | True if FILE exists and has a size greater than zero. |
| [ -f FILE ] | True if FILE exists and is a regular file. |
| [ -h FILE ] | True if FILE exists and is a symbolic link. |
| [ -r FILE ] | True if FILE exists and is readable. |
| [ -w FILE ] | True if FILE exists and is writable. |
| [ -x FILE ] | True if FILE exists and is executable. |
| [ -O FILE ] | True if FILE exists and is owned by the effective user ID. |
| [ -G FILE ] | True if FILE exists and is owned by the effective group ID. |
| [ -L FILE ] | True if FILE exists and is a symbolic link. |
| [ -N FILE ] | True if FILE exists and has been modified since it was last read. |
| [ -S FILE ] | True if FILE exists and is a socket. |

**FILE COMPARISONS**

| Test | Description |
| ---- | ----------- |
| [ FILE1 -ntFILE2 ] | True if FILE1 has been changed more recently than FILE2, or if FILE1 exists and FILE2 does not. |
| [ FILE1 -otFILE2 ] | True if FILE1 is older than FILE2, or is FILE2 exists and FILE1 does not. |
| [ FILE1 -efFILE2 ] | True if FILE1 and FILE2 refer to the same device and inodenumbers. |

**STRING TESTS**

| Test | Description |
| ---- | ----------- |
| [ -z STRING ] | True if the length of "STRING" is zero. |
| [ -n STRING ] or [ STRING ] | True if the length of "STRING" is non-zero. |
| [ STRING1 == STRING2 ] | True if the strings are equal. |
| [ STRING1 != STRING2 ] | True if the strings are not equal. |

**INTEGER TESTS - operators**

`[ ARG1 OP ARG2 ]`

"OP" is one of `-eq`, `-ne`, `-lt`, `-le`, `-gt` or `-ge`.

These arithmetic binary operators return true if "ARG1" is equal to, not equal to, less than, less than or equal to, greater than, or greater than or equal to "ARG2", respectively.
"ARG1" and "ARG2" are integers.

## IF THEN ELSE

```
#!/bin/bash

set -o errexit
set -o nounset

clear

if [[ -e "${1}" ]]; then
    echo "${1) bestaat"
else
    echo "${1} bestaat niet"
fi
```

## CASE

```
#!/bin/bash

set -o errexit
set -o nounset

clear

case $1 in
    -a) echo u hebt optie -a ingegeven;;
    -b) echo u hebt optie -b ingegeven;;
    *) echo Fout!! U hebt een onbekende optie ingegeven; exit 1;;
esac
```

## FOR

```
#!/bin/bash

set -o errexit
set -o nounset

clear

# Zorgt er voor dat de separator ":" is ipv " "
IFS=:

for dir in $PATH
do
    ls --ld $dir
done
```

```
#!/bin/bash

set -o errexit
set -o nounset

clear

for ((getal=1; "${getal}" <= 10; getal++))
do
    echo "${getal}"
done
```

## WHILE / UNTIL

```
#!/bin/bash

set -o errexit
set -o nounset

clear

while who | grep elvis >/dev/null
do
    sleep 10
done
echo "Elvis left the building!"

until who | grep elvis >/dev/null
do
    sleep 10
done
echo "Elvis arrived"


count=1
while [ -n "$*" ]
do
    echo "Dit is parameter nummer $count: $1"
    shift
    count=`expr $count + 1`
done
```

## Meer over variabelen

Met het commando `declare`:

`declare opties variabele=waarde`

Enkele opties:

- -a -> variabele is een tabel
- -i -> variabele is een integer
- -p -> toont de kenmerken en de waarde van de variabele
- -r -> variabele is readonly


**Constanten:**

`readonly OPTION VARIABELE(N)`

## Rekenen in script

```
#!/bin/bash

set -o errexit
set -o nounset

clear

teller=1

while true
do
    teller=$((teller + 1))      # Optie 1: $(( ... ))
    echo teller is $teller
done

x=`expr $1 + $2 + $3`           # Optie 2: `expr ...`
echo $x

n=0
echo "n = $n"
(( n += 1 ))                    # Optie 3: (( ... ))
let n=n+3                       # Optie 4: let
```

## Functies

```
#!/bin/bash

set -o errexit
set -o nounset

clear

blub()
{
    echo "Dit is een functie..."
    echo "Met ${#} parameters:" $@
}

blub hallo alles goed
```

**Waarden uit functie teruggeven:**

```
#!/bin/bash

set -o errexit
set -o nounset

clear

product()
{
    echo "$(($1 * $2))"     # Optie 1: Door middel van echo waarde
}

k=$(product $1 $2)

echo "$1 * $2 = $k"


som=                        # Optie 2.1: Globale variabele declareren

plus()
{
    som=$(($1 + $2))        # Optie 2.2: Globale variabele instellen
}

product $1 $2

echo "$1 + $2 = $som"
```

## Opties

- manueel parsen
- `grep` zoeken met het koppelteken
- met `getopts`

### Manueel Parsen:

```
#!/bin/bash

# Optie [ -a -b -c ] parameters
set -o errexit
set -o nounset

clear

while [ "$#" -gt 0 ]
do
    # Met een If-elif-else-fi structuur
    if [ "$1" = "-a" ]; then # Als je de then op dezelfde lijn zet, met er een ; voor
        echo "Dit is de eerste optie"
    elif [ "$1" = "-b" ]
    then
        echo "Dit is de tweede optie"
    elif [ "$1" = "-c" ]
        echo "Dit is de derde optie"
    else
        echo "$1 is geen geldige optie"
    fi
    shift

    # Met een case-esac structuur
    case $1 in
        -a) echo "Dit is de eerste optie";;
        -b) echo "Dit is de tweede optie";;
        -c) echo "Dit is de derde optie";;
        *) echo "$1 is geen geldige optie";;
    esac
    shift
done

echo "parameter 1 is $1"
```

### GREP Parsen:

```
#!/bin/bash

# Optie [ -a -b -c ] parameters
set -o errexit
set -o nounset

clear

while [ -n "$(echo $1 | grep '-')" ]; do
    case $1 in
        -a) echo "dit is de eerste optie";;
        -b) echo "dit is de tweede optie";;
        -c) echo "dit is de derde optie";;
        *) echo "foute optie"; exit;;
    esac
    shift
done
echo "parameter 1 is $1" # en verdere afhandeling
```

### GETOPTS Parsen:

```
#!/bin/bash

# getoptions.sh [-a] [-b args] [-c] args...
# Toont de werking van getopts
set -o errexit
set -o nounset

clear

while getopts ":ab:c" opt
do
    case $opt in
        a) echo "Je hebt optie -a gekozen";;
        b) echo "Je hebt optie -b gekozen"
           echo "Het argument van -b is $OPTARG";;
        c) echo "Je hebt optie -c gekozen";;
        *) echo 'optie [-a] [-b argument] [-c] args...'
           exit 1;;
    esac
done
shift $(($OPTIND -1))
echo parameter 1 is $1
```
