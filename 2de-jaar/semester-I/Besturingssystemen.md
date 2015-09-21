<!--
title: Besturingssystemen
-->

# Inleiding

`CLI`: Command Line Interface
`GUI`: Graphical User Interface

## Commando's

`commando -optie argument(en)`

> **!** Linux is hoofdletter gevoelig!
>
> Enkel systeem variabelen (ENV) worden in hoofdletters gezet.

Het commando leer je van buiten. De opties zijn niet nodig, die kan je verkrijgen via de `man` pagina's.

> `man commando` om de man pagina aan te roepen.

## Gebruikers

- Gebruiker
- Super User (su) of Root

> De primaire prompt ziet er uit als `$ ...` dan ben je een gewone gebruiker.
>
> Ben je ingelogd als super user of root, dan zie je `# ...`.

## Mappenstructuur

Om de hele boomstructuur te zien, gebruik je het commando `tree`

Wanneer je meerdere commando's gebruikt, moet je ze gaan *pipen*: `tree | less`

Wanneer je `less` wil stoppen, kan je <kbd>q</kbd> drukken.

## Navigeren

Navigeren in het bestandensysteem kan je met het commando `cd`. cd staat voor change directory.

Met `cd` kan je paden meegeven.

Er is een *relatief* en een *absoluut* pad.

- Relatief: Pad vanaf waar je staat
- Absoluut: Vanaf de root (/)

> **!** Oefeningen maken met absolute paden!
>
> **!** In scripts ook absolute paden meegeven!

Met `cd` kan je teruggaan naar een parent map met het commando `cd ..`

Als je naar je home directory wilt navigeren kan je dit doen door:

- `cd`
- `cd ~`
- `cd /home/username`

De huidige map wordt aangeduid door een `.`

Met het commando `ls` kan je alles in een bepaalde map zien.

Tekstbestanden hun inhoud kan je bekijken met het commando `cat`

Om bestanden aan te maken, kan je dit snel doen met het commando `touch`

Om iets snel in een bestand te plaatsen, kan je gebruik maken van het commando `echo welkom > testbestand`.
Op deze manier kan je je standaard input redirecten naar het testbestand.

Wanneer je `ls -l` gebruikt krijg je een lijst met informatie bij.
In de informatie staat bijvoorbeeld als eerste character het type, zoals `d: directory, l: link`
Daarna volgen de permissies:

- r: read
- w: write
- x: execute

Dit voor alle 3 de groepen:

- user
- group
- other

# Labo 1

[Labo 1](/2de-jaar/semester-I/Besturingssystemen/Linux-Labo-1.md)
