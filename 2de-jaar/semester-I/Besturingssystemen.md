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
- **Jaren 90** -> distributed computing, parallelle verwerking

> Multi Processor: Meerdere processors
>
> Multi core: Meerdere processors op 1 core

## 3. Soorten besturingssystemen

### 3.1. Single-tasking

> Systeem waarin 1 gebruiker 1 applicatie tegelijk draait

De gebruiker kan alle 100% gebruiken van de CPU, maar met 1 programma

![](http://d.pr/i/AK2Z+)

### 3.2. Multitasking (single-user)

> Meestal 1 gebruiker die verscheidene taken kan uitvoeren tezelfdertijd

- Synchronisatie problemen
- RAM is niet oneindig

![](http://d.pr/i/10Y6l+)

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

![](http://d.pr/i/1kTA4+)

### 3.4. Virtuele Machines

> **Virtuele Machine**: computerprogramma die een computer nabootsen, waar andere programma's op kunnen worden uitgevoerd

**Soorten:**
    - Programmeertaal specifiek: VB.: JVM
    - emulator

> **Virtuele machine monitor**: elke gebruker heeft een uniek beeld van de computeromgeving

A.d.h.v. virtuele machines kunnen <font color=red>verschillende besturingssystemen tegelijkertijd op 1 computer</font> bestaan.

## 4. Concepten

1. User
2. Shell of command interpreter
3. Utilities
4. Kernel
5. Hardware

### 4.2. Processen

Elk programmatje heeft 1 of meerdere processen.

> **Process**: een of meerdere reeksenopdrachten die door een besturingsprogramma worden beschouwd als een werkeenheid

![](http://d.pr/i/1gNBE+)

### 4.3. Resources

Een process spreekt een resource (bron) aan:

- randapparatuur
- geheugen
- processen
- CPU
- bestanden

![](http://d.pr/i/1eK3w+)

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
| cat | Concatenate, laat de inhoud van een tekstbestand ove rhet scherm lopen |
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

Een inode wordt geindentificeerd via een *inodenummer*

* elk inodenummer is uniek binnen dezelfde device
* men kan de inodenummers van files en directories zien via
    - `ls -i`
    - `stat`

![](http://d.pr/i/1lFa3+)

#### 5.2.1 Oriëntatie in het bestandssysteem

> **PATH**: zorgt ervoor dat we niet steeds het volledige pad moeten ingeven om een commando uit te voeren of om een bestand te openen.
>
> PATH is een environment variable dat één of meerdere map verwijzigen bevat gescheiden met ";", Deze worden onderzocht om een commando te lokaliseren en uit te voeren.

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
| Pijtljes toetsen <kbd>◀</kbd> of <kbd>▶</kbd> | Beweeg de cursor over en weer op de commandolijn |
| Pijtljes toetsen <kbd>▲</kbd> of <kbd>▼</kbd> | Overloopt de commandogeschiedenis. Ga naar de lijn die je opnieuw wilt uitvoeren, editeer eventueel en druk <kbd>enter</kbd> |
| <kbd>Shift</kbd>+<kbd>PageUp</kbd> en <kbd>Shift</kbd>+<kbd>PageDown</kbd> | Overloopt de terminalbuffer om tekst te zien die al van het scherm gerold is. |
| <kbd>Tab</kbd> | Commando- of bestandsnaam vervolledigen. Als er meerdere mogelijkheden zijn, zal de shell je met een geluidje of een flits waarschuwen |
| <kbd>Tab</kbd> <kbd>Tab</kbd> | Toont de mogelijke bestandsnamen of commandonamen om te vervolledigen |

### 5.2.3 Werken met bestanden

`touch bestand1 bestand2` om bestanden aan te maken, wanneer het bestand reeds bestaat dan wordt de datum geupdatet.

`cp BRON DEST` kopieert een bestand van bron naar dest.

Opties:

- -r: kopieert mappen, inclusief hun inhoud (recursief)
- -v: verbose, toont alle copieacties op het scherm

`mv BRON DEST` verplaatst een bestand van bron naar dest.

Opties:

- -i: interactive mode, vraagt bevestiging
- -v: verbose
- -f: force, geeft geen waarshuwing
- -r: recursief, kan dus ook met mappen

`rm BRON` verwijdert een bestand

Opties:

- -r: recursief, verwijdet een map inclusief bestanden en submappen
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
- -print: stuurt resultaat naar standard output

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
- `tac`: zelfde als cat, maar omgekeerde volgoerde van regels
- `head`: toont de eerste 10 lijnen van een bestand
- `tail`: toont de laatste 10 lijnen van een bestand, deze wordt veel gebruikt voor inhoud van log bestanden te bekijken, met de optie `tail -f /var/log/message..` houdt het commando het bestand in de gaten en update het automatisch.
- `more`: voorganger van `less` (`more` is less then `less`)
- `grep [OPTIES] tekenreeks [bestanden]`, enkele opties zijn:
    - -i, --ignore-case
    - -n, --line-number
    - -s, --slient (onderdrukt alle foutmeldingen)

# Hoofdstuk 2: Scheduling

> Om efficiënt middelen (bronnen, resources) in te zetten om de taken (opdrachten, jobs) uit te voeren.

> **Scheduling** verwijst dus naar de manier waarop processen prioriteiten worden gegeven. Deze taak wordt uitgevoerd door software die bekend staat als een **scheduler**.

**Doel:**

- Doematigheid en tevredenheid van de gebruiker
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
            - => meest efficiënte systeem kan sommigep rocessen negeren
            - => redelijkheid opgeofferd aan efficiëntie
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
        - => Besturingssysteem (BS) moet minder ingrijpen
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

- = Ingewikkelde zaak
- Moet rekening houden met
    - Behoeften van de processen
    - Systeemefficiëntie
    - Bestaande hardware
    - Wat eerlijk is
- < - > Conflicten!!!

## 3. Uitvoeren van een process

Instructiecyclus zonder onderbrekingen

![](http://d.pr/i/16GWm+)

Instructiecyclus met onderbrekingen

![](http://d.pr/i/12e7r+)

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

![](http://d.pr/i/L15G+)

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

![](http://d.pr/i/13Glg+)

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

![](http://d.pr/i/1dXSt+)

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

Hier wordt gebruik gemaakt van **een vaste tijdswaarde of tijdkwantum**, wanneer dit overschreden wordt, zal de scheduler het procs onderbreken en een volgend proces inladen.

![](http://d.pr/i/15Nfe+)

![](http://d.pr/i/1bsKh+)

### 5.2. First-in-First-out*$ scheduling (FIFO) of First-come-first-served-scheduling (FCFS)

Wanneer een proces als eerste de CPU vraagt zal hij die ook krijgen, waarbij de andere processen die erna komen zullen moeten wachten.

![](http://d.pr/i/1hJUS+)

Een FIFO-scheduler kan deel uitmaken van een ingewikkeldere methode zoals bijvoorbeeld bij system die zowel batch-gebruikers als interactieve gebruikers hebben.

Een manier om hybride methode van scheduling te implementeren is met *batch-partities* (= virtuele geheugenconstructie die 1 batch-proces bevat)

![](http://d.pr/i/1anIs+)

### 5.3. Multilevel feedback queues (MFQ)

Hierbij lijkt de scheduling-methode op Round-Robin als er veel I/O-activiteit is en op FIFO wanneer er weinig of geen I/O-activiteit is.

De beste scheduling-methode is afhankelijk van de soorten processen in de ready-toestan en het MFQ is gevoelig voor wijzigingen in de activiteiten (**adaptieve methode**)

![](http://d.pr/i/1bAy8+)

### 5.4. Shortest-job-first-scheduling (SJF)

Er zijn twee strategieën die ana korte processen een hoge prioriteit geven:

- Shortest Remaining Job Next (SRJN) = preëmptieve versie van SJF
- Shortest Job First (SJF) -> hier zal de scheduler van het proces met de kleinste lengte uitvoeren

![](http://d.pr/i/1ecG+)

### 5.5 Starvation

> Wanneer een heel lang proces nooit uitgevoerd zal worden, noemen we di starvation.

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
| Onbepaald uitstel | treedt niet op | treedt niet op | kan optreden bij CPU-gebonden processen | kan optreden bij processe met lange geschatte runtijden | kan optreden bij processe met lange geschatte runtijden |

# Hoofdstuk 3: Concurrency - Parallelle Processen

## 3.1 Wat is concurrency

- **Multiprogrammering**: het beheer van meerdere processen in een systeem met 1 processor
- **Multiprocessing**: Het beheer van meerdere processen in een systeem met meerdere processors
- **Gedistribueerde verwerking**: Het beheer van meerdere processen die worden uitgevoerd op een aantal verspreide computersystemen.

> Aan de basis van al deze zaken, en daarmee aan de basis van het ontwerp van besturingssystemen, ligt **concurrency** (**gelijktijdig**)

In de systemen met I/O channels(I/O-processors) zijn verscheidene acties tegelijkertijd gaande. De CPU werkt aan één proces, terwijl de I/O channelsaan andere werken. Het is duidelijk dat het gebruik van meerdere processors de verwerkingscapaciteit vergroot.
Stel dat er een programmeertaal bestaat waarin je onafhankelijke processen kan specificeren, en dat er meerdere processors beschikbaar zijn om aan een proces te werken.

```
PARBEGIN
    statement1;
    statement2;
    ...
    statementn;
PAREND
```

Concurrency treedt op in 3 verschilllende situaties:

- **Meerdere toepassingen**. Multiprogramming werd uitgevonden om verwerkingstijd dynamisch te kunnen verdelen tussen een aantal actieve toepassingen.
- **Gestructureerde toepassing**. Als uitbreiding op de beginselen van modulair ontwerpen en gestructureerd programmeren kunnen sommige toepassingn effectief worden geprogrammeerd als een verzameling gelijktrijdige processen.
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

Beschouw een computersysteem met veel terminals. Stel dat de gebruikers elke regel, bestemd voor het computersysteem, beëindigen met de <enter>-toets. Stel dat wij het totaal aantal lijnen voor alle gebruikers samen wensen bij te houden in een variabele "linesentered". Veronderstel dat twee processen proberen de variabele "linesentered" simultaan te verhogen met 1.

Elk proces heeft dan zijn eigen kopij van volgende code:

```
load linesentered
add 1
store linesentered
```

> Dit is een vervelende situatie: de informatie in linesentered is fout!

### 3.2.3 Wederzijdse uitsluiding

> De kritieke sectie van een proces is de code die naar gemeenschappelijke data verwijst
>
> Net voor de kritieke sectie van een proces wodt ENTERMUTUALEXCLUSION uitgevoerd en na de kritieke sectie wordt EXITMUTUALEXCLUSION uitgevoerd

- ENTERMUTUALEXCLUSION doet het volgende:
    - Controleren of een ander proces in zijn kritieke sectie is en, als dat het geval is, wachten;
    - Doorgaan met de uitvoering van de kritieke sectie als er geen ander proces in de kritieke sectie bezig is.
- EXITMUTUALEXCLUSION moet alle andere processen vertellen dat een proces klaar is met de uitvoering van zijn kritieke sectie.

## 3.3 Het programmeren van wederzijdse uitsluiting

We gaan er van uit dat er slechts 2 gelijktijdige processen zijn.

### 3.3.1 Eerste poging

We declareren een <font color="red">booleaanse variabele "bezet"</font>, die voor beide processen globaal is. "Bezet" krijgt de waarde trueals één van de processen zijn kritieke sectie ingaat en is falseals dit niet het geval is.
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

**Zwakke plek** -> wanneer een proces "bezet" op truezet, moet het wachten omdat "bezet" trueis. Het proces maakt het zichzelf onmogelijk in zijn kritieke sectie te komen. De poging mislukt omdat het hier geen verschil maakt welk proces in zijn kritieke sectie zit. Een proces moet onderscheid kunnen maken tussen zichzelf en andere processen.

Mogelijke oplossing -> twee globale booleaanse variabelen gebruiken "bezet1" en "bezet2". "Bezet1" is trueals proces 1 in zijn kritieke sectie is en falseals dit niet het geval is. "Bezet2" is trueals proces 2 in zijn kritieke sectie is en falseals het dat niet is. <font color="red">Een proces declareert dus het betreden van zijn kritieke sectie en controleert dan of het andere proces dat ook heeft gedaan.</font>

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
    void proces1 (void);
    void proces2 (void);
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

# Hoofdstuk 4: processen in Linux

# Hoofdstuk 5: Scripts in Linux
