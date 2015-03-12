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

-> Wordt uitgevoerd bij het opstarten van een router, switch of computer.

| Commando               |
| ---------------------- |
| show version           |
| show flash             |
| show interface         |
| show processes         |
| show cdp neighbors     |
| show arp               |
| show mac-address-table |
| show vlan              |
| show running-config    |
| show startup-config    |

| TCP/IP          | uitleg                                                               |
| --------------- | -------------------------------------------------------------------- |
| Applicatie Laag | Je stuurt een mailtje **Data of packet**                             |
| Transport Laag  | Header toevoegen (protocol udp/tcp) (Ingepakt packetje: **segment**) |
| Netwerk Laag    | Segment wordt ingepakt (inkapseling) + IP wordt toegevoegd **IP-packet/Data gram** |
| Data-link Laag  | Ingepakt + header + trailer worden toegevoegd **Frame**              |
| Fysieke Laag    | &nbsp; |

> (Applicatie laag) Belangrijkste informatie van een header is de afkomst/bron poortnummers: 16bits
> 
> (Netwerk Laag) Belangrijkste informatie van een header is het IP adres van ontvanger & verzender
> 
> (Data-link Laag) Belangrijkste informatie van een header is het MAC Adres
> 
> (Fysieke Laag)

| Abbr. | Voluit                | Info |
| ----- | --------------------- | ---- |
| TCP | Transmission Control Protocol | Packetje komt 100% perfect aan, in de juiste volgorde: Dit packet is veel groter<br> 3-way handshake methode<br> controle via acknowledgment<br>id toevoegen om duplicaten te voorkomen<br> Correcte informatie aan de hand van een checksum<br> 20Byte groot aan headers max 60byte groot<br> lengte van header standaard = 0101 max 1111 |
| UDP | User Datagram Protocol | Zal niet altijd 100% perfect zijn, het wordt niet gegarandeerd<br> header is 2 regels groot; grootte van udp header is 8byte groot |
| IP | Internet Protocol | &nbsp; |
| ICMP | Internet Control Message Protocol | &nbsp; |
| CRC | Cyclic Rendundancy Check | &nbsp; |

IP & ICMP werken altijd samen.

Packet gemaakt met TCP: IP Packet

Packet gemaakt met UDP: Datagram

> **arp**: address resolution protocol

### Waarom de switch

1. Naam instellen
    1. beginnen met een letter
    2. geen spaties
    3. eindigen met een letter of cijfer
    4. gebruik alleen letters, cijfers en streepjes
    5. minder dan 64 tekens lang
2. beperkingen instellen
3. Banner berichten configureren
4. Configuratie bewaren


`enable` in de command line typen om van `Switch>` naar `Switch#` te gaan, dit is een user met alle priveleges!

### Banner berichten

`Welcome bob` als je aanmeldt.

`banner motd #This is a secure system. Authorized Access ONLY!!!#`

### IP Adressering van apparaten

Default gateway: IP van router in ander netwerk

DNS: Omzetten van hostname naar ip

## Hoofdstuk 3

Message (Bericht) > Transmitter (Stem) > Transmission Medium (Lucht) > Receiver (oor) > Message Destination (Hersenen)

1. Geïdentificeerde afzender en ontvanger
2. Een overeenkomst van de communicatie methode (face-to-face, telefonisch, per brief, ...)
3. Gemeenschappelijke taal en grammatica
4. Snelheid en timing van levering
5. Bevestiging of aanvaarding van de eisen

### Protocollen:

* Bericht *coderen*
* Bericht *opmaak* en *inkapseling*
* Bericht*grootte*
* Bericht *timing*
* *Leveringsopties* van het bericht

**Opmaak & Inkapseling**

Het plaatsen van een bericht in een ander bericht

Elk computerbericht wordt ingekapseld in een bepaald formaat, een frame genoemd, voordat deze over het netwerk wordt verzonden.

> De vorm en inhoud van een frame worden bepaald door het type bericht en het kanaal waarop het bericht verzonden wordt.

**Berichtgrootte**

* De grootte beperkingen van frames vereisen dat de bron host een lang bericht splitst in individuele stukken die voldoen aan zowel de minimum als de maximale grootte.
* Elk pakketje is ingekapseld in een afzonderlijke frame met de adresinformatie en wordt vervolgens over het netwerk verzonden.
* Aan de kant van ontvangende host worden de ingekapselde pakketjes terug uitgepakt en weer samengevoegd, verwerkt en geïnterpreteerd.

**Bericht Timing**

1. Togangsmethode
2. Flow Control
3. Response Timeout

**Leveringsopties van het bericht**

Unicast: naar 1 eindapparaat

Multicast: naar meerdere eindapparaten

Broadcast: naar alle eindapparaten in het netwerk (behalve naar de verzender)

> Een groep van onderling gerelateerde protocollen die nodig zijn om een communicatie-functie 
uit te voeren wordt een **protocol suite** genoemd.
>
> Een **protocol stack is een gelaagd model** dat laat zien hoe de afzonderlijke protocollen binnen een suite worden uitgevoerd.

Voorbeeld protocol stack:

1. Hypertext Transfer Protocol (HTTP)
2. Transmission Control Protocol (TCP)
3. Internet Protocol (IP)
4. Ethernet