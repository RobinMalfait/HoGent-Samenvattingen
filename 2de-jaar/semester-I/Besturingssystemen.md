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

Navigeren in het bestandensysteem kan je met het commando `cd`.

Met `cd` kan je paden meegeven.

Er is een *relatief* en een *absoluut* pad.

- Relatief: Pad vanaf waar je staat
- Absoluut: Vanaf de root (/)

> **!** Oefeningen maken met absolute paden!
>
> **!** In scripts ook absolute paden meegeven!

Met `cd` kan je teruggaan naar een parent map met het commando `cd ..`

Met het commando `ls` kan je alles in een bepaalde map zien.

