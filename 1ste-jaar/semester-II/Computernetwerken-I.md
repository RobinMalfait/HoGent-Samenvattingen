# Computernetwerken I

| Term | Description           |
| ---- | --------------------- |
| BYOD | Bring your own device |
| QoS  | Quality of Service    |

# Evolutie

Vroeger papier, dan vaste pc's, nu byod.

## Communicatie

**Vroeger**: wachten tot je een persoon tegen kwam.

**Nu**: Bellen, en er is meteen communicatie mogelijk.

> Besparingen mogelijk voor bedrijven. *Bijvoorbeeld: Skype ipv hotel & vliegtuigtickets.*

# Maten van netwerken

1. Small Home Networks (*thuisnetwerk*)
2. Small Office/Home Office Networks (*SOHO*)
3. Medium to Large Networks (*bedrijfsnetwerken*)
4. World Wide Web (*Virtuele Netwerk*, het volledige 'internet')

## Netwerk modellen

**Clients and Server**

Client vraagt request, server bied response.

**Peer to Peer**

Ieder toestel is een client en een server tegelijkertijd. (**Denk aan:** *torrents*)

> **Examen**: voordelen en nadelen van peer to peer & client and servers. Voordelen van een client-server zijn nadelen voor een peer-to-peer, en vice versa.

**Voordelen:**

- Geen kosten voor een server.

**Nadelen:**

- Beheer kan niet worden gecentraliseerd.
- Beveiliging: elke pc gaan beveiligen.
- Niet schaalbaar.
- Performantie: tragere pc's omdat iedereen op jou pc kan.


# Componenten van een netwerk

1. Apparaten (*Switch, Router, ...*)
2. Media (*Kabels, transmissiekanalen, ...*)
3. Diensten (*Software, ...*)

## 2 soorten apparaten

**Eind Apparaten:** bijvoorbeeld een koffiezet, printer, ...

**Tussenschakelstations:** een switch, router, ...

### Tussenschakelstations

Berichten/Packetjes worden gesegmenteerd, ze krijgen ook een header met informatie zoals van adres, naar adres, ...

> Bij een video primeerd de snelheid, en niet de kwaliteit. Kwaliteit van beeld/geluid moet niet 100% perfect zijn, want de mens hoort/ziet toch niet alles.

Je kan gegevens tegenhouden als ze bijvoorbeeld van een bepaalde locatie komen of via een bepaalde applicatie (*Via Firewall*).

![](/afbeeldingen/1ste-jaar/semester-II/Computernetwerken-I/devices.png)


## Toplogie diagrammen.

> Topologie is geen technologie!

**Technologie:** Techniek om iets te versturen, binaire logica op fysiek kanaal zetten.

**Topologie:** De manier waarop apparaten met elkaar verbonden zijn.

| Abbr. | Description               |
| ----- | ------------------------- |
| LAN   | Local Area Network        |
| WAN   | Wide Area Network         |
| PAN   | Personal Area Network     |
| MAN   | Metropolitan Area Network |
| WLAN  | Wireless LAN              |
| SAN   | Storage Area Network      |
| BAN   | Body Area Network         |


## Het Internet

| Abbr. | Descrption.                                         | Welke standaarden |
| ----- | --------------------------------------------------- | ----------------- |
| IETF  | Internet Engineering Task Force                     | Laag 3 tot 5      |
| ICANN | Interent Corporation for Assigned Names and numbers | &nbsp;            |
| IAB   | Internet Architecture Board                         | &nbsp;            |

En vele anderen ...

## Intranet en Extranet

Intranet (Bedrijf) -> Extranet (Klanten, Werklui, ...) -> Internet (iedereen)

## Verbinden met het internet

| Abbr. | Description             | Provider |
| ----- | ----------------------- | -------- |
| DSl   | Digital Subscriber Line | Proximus |
| Cable | COAX Cable              | Telenet  |

**Asymmetrisch dienst:** Download is hoger dan Upload.

**Symmetrisch dienst:** Download even hoog dan Upload.

## Het convergerend netwerk

**Vroeger:**

1. Telefoon Netwerk
2. Computer Netwerk

**Nu:**

Willen we 1 netwerk om met alle devices op te kunnen.

### Ondersteunende Netwerkarchitecture

1. Fouttolerantie
2. Kwalitiet van de dienst (QoS)
3. Schaalbaarheid
4. Veiligheid


## Circuit Switched Network

Er wordt een `path` vastgelegd en gereserveerd. Communicatie kan in bijde richtingen. Bijvoorbeeld: Als je telefoneert naar persoon X, en persoon Y belt jou, dan kan je niet communiceren.

## Packet-Switched Network

Welke verbinding is optimaal om jouw informatie te versturen. Bijvoorbeeld: werken via het internet.

Fouttolerantie: foutje? Andere weg kiezen.

## Schaalbaarheid

> **Tier**: Lagen (Telenet, Proximus, ...)

Het internet heeft een hiërarchische gelaagde structuur.


# Commando's

prompt command space argument.

BV.: `ping 192.168.1.1`

> Je hoeft niet het volledige commando te typen; Met een ? kan je meer info krijgen; Staat er een ^ onder dan is dat de plaats waar er iets fout staat.

| Sneltoetsen | Beschrijving |
| ----------- | ------------ |
| Tab | Vult de rest van een gedeeltelijk getypt commando of sleutelwoord |
| Ctrl-R | geeft opnieuw een lijn |
| Ctrl-A | Gaat naar het begin van de regel |
| Ctrl-Z | Sluit de configuratie mode en keert terug naar de gebruiker EXEC. |
| Pijl omloog | Hiermee kan de gebruiker voorwaarts bladeren doorheen coormalige commando's |
| Pijl omhoog | Hiermee kan de gebruiker achteruit bladeren doorheen voormalige commando's |
| Ctrl-shift-6 | Hiermee kan een IOS proces onderbroken zoals ping of traceroute worden. |
| Ctrl-C | Verlaat de huidige configuratie of het huidig commando. |

> **Belangrijk: Slide 27!**

NVRAM: Non-volatile random-access memory

-> Om je configuratie file op te slaat, moest je je machine uitschakelen en opnieuw starten.

POST: Power On Self Test