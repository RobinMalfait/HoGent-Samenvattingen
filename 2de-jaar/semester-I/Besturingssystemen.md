<!--
title: Besturingssystemen
-->

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

# Hoofdstuk 2: Scheduling

# Hoofdstuk 3: Concurrency - Parallelle Processen

# Hoofdstuk 4: processen in Linux

# Hoofdstuk 5: Scripts in Linux
