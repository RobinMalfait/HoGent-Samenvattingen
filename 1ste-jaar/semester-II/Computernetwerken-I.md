# Computernetwerken I

# Hoofdstuk 1

> Op verkenning binnen het netwerk.

| Term | Description           |
| ---- | --------------------- |
| BYOD | Bring your own device |
| QoS  | Quality of Service    |

## 1.1 Wereldwijd verbonden

Vroeger papier, dan vaste pc's, nu byod.

### Communicatie

**Vroeger**: wachten tot je een persoon tegen kwam.

**Nu**: Bellen, en er is meteen communicatie mogelijk.

> Besparingen mogelijk voor bedrijven. *Bijvoorbeeld: Skype ipv hotel & vliegtuigtickets.*

### Maten van netwerken

1. Small Home Networks (*thuisnetwerk*)
2. Small Office/Home Office Networks (*SOHO*)
3. Medium to Large Networks (*bedrijfsnetwerken*)
4. World Wide Web (*Virtuele Netwerk*, het volledige 'internet')

### Netwerk modellen

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


## 1.2 LANs, WANs en het Internet

1. Apparaten (*Switch, Router, ...*)
2. Media (*Kabels, transmissiekanalen, ...*)
3. Diensten (*Software, ...*)

### 2 soorten apparaten

**Eindapparaten:** bijvoorbeeld een koffiezet, printer, VoIP telefoon, Beveiligingscamera's, ...

**Tussenschakelstations:** een switch, router, firewalls, ...

#### Tussenschakelstations

Berichten/Packetjes worden gesegmenteerd, ze krijgen ook een header met informatie zoals van adres, naar adres, ...

> Bij een video primeerd de snelheid, en niet de kwaliteit. Kwaliteit van beeld/geluid moet niet 100% perfect zijn, want de mens hoort/ziet toch niet alles.

Je kan gegevens tegenhouden als ze bijvoorbeeld van een bepaalde locatie komen of via een bepaalde applicatie (*Via Firewall*).

![](/afbeeldingen/1ste-jaar/semester-II/Computernetwerken-I/devices.png)

#### Netwerk media

1. Koperkabels (UTP)
2. Fiber Optic (Glasvezel: fiber)
3. Wireless (Bluetooth, Wi-Fi, ...)

### Toplogie diagrammen.

> Topologie is geen technologie!

#### Fysieke Topologie

Plaats waar het apparaat fysiek staat in een bepaald gebouw.

#### Logische Topologie

Logisch opgebouwde topologie, wordt niet weergegeven op basis van plaats, maar op functie bijvoorbeeld:

1. Internet
2. Firewalls 
	1. Admin Group
	2. Classroom X
	3. Classroom Y
	
#### Technologie vs Topologie

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


### Het Internet

| Abbr. | Descrption.                                         | Welke standaarden |
| ----- | --------------------------------------------------- | ----------------- |
| IETF  | Internet Engineering Task Force                     | Laag 3 tot 5      |
| ICANN | Interent Corporation for Assigned Names and numbers | &nbsp;            |
| IAB   | Internet Architecture Board                         | &nbsp;            |

En vele anderen ...

### Intranet en Extranet

Intranet (Bedrijf) -> Extranet (Klanten, Werklui, ...) -> Internet (iedereen)

### Verbinden met het internet

| Abbr.        | Description             | Provider                     |
| ------------ | ----------------------- | ---------------------------- |
| DSl          | Digital Subscriber Line | Proximus                     |
| Cable        | COAX Cable              | Telenet                      |
| Cellular     | 3G, Edge, ...           | Proxiums, Telenet, Base, ... |

**Asymmetrisch dienst:** Download is hoger dan Upload.

**Symmetrisch dienst:** Download even hoog dan Upload.

## 1.3 Het netwerk als platform

### Het convergerend netwerk

**Vroeger:**

1. Telefoon Netwerk
2. Computer Netwerk

**Nu:**

Willen we 1 netwerk waar we al deze devices kunnen op aansluiten.

### Ondersteunende Netwerkarchitecture

1. Fouttolerantie
2. Kwalitiet van de dienst (QoS)
3. Schaalbaarheid
4. Veiligheid

### Circuit Switched Network

Er wordt een `path` vastgelegd en gereserveerd. Communicatie kan in beide richtingen. Bijvoorbeeld: Als je telefoneert naar persoon X, en persoon Y belt jou, dan kan je niet communiceren.

### Packet-Switched Network

Welke verbinding is optimaal om jouw informatie te versturen. Bijvoorbeeld: werken via het internet.

Fouttolerantie: foutje? Andere weg kiezen.

### Schaalbaarheid

> **Tier**: Lagen (Telenet, Proximus, ...)

Het internet heeft een hiërarchische gelaagde structuur.

### Jet verstrekken van QoS

**Tijdgevoelige communicatie**

* Prioriteit verhogen voor diesnten zoals telefonie of videodistributie.

**Niet tijdgevoelige communicatie**

* Prioriteit verlagen voor het ophalen van webpagina of e-mail.

**Van groot belang voor de organisatie**

* Prioriteit verhogen voor productiecontrole of zakelijke transactie data.

**Ongewenste communicatie**

* Afname prioriteit of blokkeren van ongewenste activiteit, zoals peer-to-peer file sharing of live entertainment.

### Het verstrekken van Netwerkveiligheid

Er zijn twee soorten van bezorgdheden betreffende de veiligheid van een netwerk die moet aangepakt worden:

1. De netwerkinfrastructuur beveiliging
2. De informatiebeveiliging


> Encryptie, firewalls, access policies, ...

Beveiligingsmaatregelen die zouden genomen moeten worden in een netwerk zijn:

* Voorkomen van onbevoegde login
* Voorkomen van informatie diefstal
* Voorkomen van niet toegestane wijziging van informatie
* Voorkomn van Denial of Service (DoS)

Om de doelstellingen van veiligheid van een netwerk te realiseren, zijn er drie primaire eisen:

* Waarborging van de vertrouwelijkheid
* De integriteit van de communicatie bewaren
* Zorgen voor beschikbaarheid

## 1.4 De veranderende netwerkomgeving

Trends:

* Bring Your Own Device (**BYOD**)
* Online samenwerken
* Video
* Cloud computing

### BYOD

Het concept van om het even welk apparaat, naar om het even welke inhoud, op om het even welke moment in is een belangrijke mondiale trend die belangrijke wijzigingen met zich meebrengen in de manier waarop apparaten worden gebruikt.

### Online Collaboration

IP Communication (VoIP), messaging, online conferenties (Google Hangouts), ...

### Video Communication

Skype, Google Hangouts, ...

### Cloud Computing

* Organisatorische flexibiliteit
* Behendigheid en snelle inzet
* Lagere kosten van infrastructuur
* Heroriëntering van de IT-middelen
* Oprichting van nieuwe bedrijven

### Data Centers

Een datacenter is een faciliteit die gebruikt wordt door computer systemen thuis en bijbehorende componenten waaronder:

* Redundante data communicatieverbindingen
* High-speed virtuele servers (soms aangeduid als server farms of server clusters)
* Redundante opslag systemen (maakt meestal gebruik van SAN-technologie)
* Redundante back-up voedingen
* Omgevingscontroles (bijvoorbeeld airconditioning, brandbestrijding)
* Veiligheidsvoorzieningen


### Veiligheidsbedreigingen

De meest voorkomende externe bedreigingen voor netwerken zijn:

* virussen, wormen en Trojaanse paarden
* Spyware en adware
* Zero-day aanvallen, ook wel zero-hour-aanvallen
* Aanvallen van hackers
* Denial of Service (DoS of DDoS) aanvallen
* Onderschepping van gegevens en diefstal
* Identiteitsdiefstal

### Veiligheidsoplossingen

Netwerkbeveiligingsinrichtingen kunnen onder meer zijn:

* Antivirus- en antispyware
* Firewall filtering
* Firewall-systemen
* Access control lists (ACL)
* Intrusion prevention systemen (IPS)
* Virtual Private Networks (VPN)


# Hoofdstuk 2

Het configureren van een NOS

## 2.0 Inleiding

### Het thuisnetwerk

Alle apparaten zijn meestal verbonden met een router waarin vier apparaten zijn geïntegreerd namelijk:

* Een Router (Data packets versturen en ontvangen van en naar het internet)
* Een Switch (Devices met elkaar verbinden met netwerk kabels)
* Een Draadloos Toegangspunt (Devices met elkaar verbinden draadloos)
* Een Firewall (Uitgaand verkeer beveiligen en inkomend verkeer beperken)

## 2.1 IOS Bootcamp

> **IOS**: Internetwork Operating System


* Alle netwerkapparatuur zijn afhankelijk van besturingssystemen 
* Het besturingssysteem op de router thuis wordt meestal firmware genoemd
* Cisoc IOS -> Een verzameling besturingssystemen die gebruikt worden op Cisco-apparaten

### Operating System

1. Hardware 
	 * Fysieke gedeelte van de computer)
2. Kernel 
	* Communiceert tussen hardware en software van de computer
	* Beheert hoe hardware middelen worden gebruikt om software-eisen te voldoen
3. Shell
	* De gebruikersinterface dat er voor zorgt dat een commando van een gebruiker een specifieke taak van de computer uitvoert. Deze commando's (requests) kunnen via de CLI of via de GUI uitgevoerd worden.
	
### Doel van een besturingssysteem

Een PC-besturingssysteem (Windows 8 en OS X) maakt het onder andere mogelijk:

* Om een muis te gebruiken
* Om de uitvoer te visualiseren op het scherm
* Om tekst in te voeren

Een switch of router IOS biedt volgende opties aan:

* Interfaces configureren
* Kan routing- en schakelfuncties activeren

> Alle netwerkapparaten worden geleverd met een standaard IOS. Het is mogelijk om de IOS versie of feature set te upgraden. In deze cursus focussen: Cisco IOS release 15.x

### Locatie van de Cisco IOS

-> Cisco IOS is opgeslagen in de Flash

* Niet-vluchtige geheugen die dus niet verloren gaat wanneer de stroom uitvalt
* Kan worden gewijzigd of overschreven indien nodig
* Kan gebruikt worden om meerdere versies van het IOS op te slaan
* IOS wordt gekopieerd van flash naar vluchtig RAM
* De Hoeveelheid flash-en RAM-geheugen bepaalt welk IOS kan gebruikt worden

### IOS Functies

Dit zijnde belangrijkste functies die worden uitgevoerd of mogelijk zijn bij Cisco routers en switches.

* Security
* Routing
* QoS
* Addressing
* Managing Resources
* Interfaces

### Toegang methoden tot de console

1. Console
2. Telnet of SSH
3. AUX-poort

#### Console Poort

* Het apparaat is toegankelijk zelfs als er geen netwerkdiensten zijn geconfigureerd (out-of-band)
* Heeft een speciale console kabel nodig
* Maakt het mogelijk configuratie commando's in te voeren
* Moeten worden uitgerust met wachtwoorden om ongeautoriseerde toegang te voorkomen
* Het apparaat moet zich in een beveiligde kamer bevinden, zodat de console poort niet gemakkelijk toegankelijk is

#### Telnet, SSH en AUX

**Telnet**

* Methode voor toegang op afstand tot de CLI via een netwerk
* Vereist actieve netwerkdiensten en een actieve interface die is geconfigureerd

**Secure Shell (SSH)**

* Aanmelden op afstand vergelijkbaar met Telnet, maar maakt gebruik van meer veiligheid
* Sterkere wachtwoordauthenticatie
* Gebruikt encryptie bij het transport van data

**AUX-poort**

* Gebruikt de telefoonlijn
* Kan worden gebruikt als console-poort

### Terminal emulatie programma's

> Software beschikbaar voor het aansluiten van een netwerkapparaat:

* PuTTY
* Tera Term
* SecureCRT
* HyperTerminal
* OS X Terminal
* iTerm

### Cisco IOS Werk Modes

![](/afbeeldingen/1ste-jaar/semester-II/Computernetwerken-I/ios_werk_modes.png)

#### Primare Modes

User EXEC Mode: View-only mode
Privileged EXEC Mode: Alle monitoring commands & executie van configuratie en management commando's.

#### Globale Configuratie Mode en Submodes

> `configure terminal` is het commando om naar de Global Configuration Mode te gaan.

Gebruik het `exit`-commando om een specifieke mode te verlaten, gebruik het `end`-commando of `Ctrl-Z` om de configuratie mode te verlaten en terug te keren naar de privileged EXEC mode.


#### Navigatie tussen IOS Modes

`Router>` is de User EXEC Mode Prompt<br>
`Router>enable` om naar de Privileged EXEC Mode Prompt te gaan<br>
`Router#` is de Privileged EXEC Mode Prompt<br>
`Router#disable` Om terug naar de User EXEC Mode Prompt te gaan<br>
`Router>exit` om alles te verlaten 

```terminal
Switch> enable
Switch# configure terminal
Enter configuration commands, one per line.
End with CNTL/A.
Switch(config)# interface vlan 1
Switch(config-if)# exit
Switch(config)# exit
Switch#

Switch# configure terminal
Enterl configuration commands, one per line.
End with CNTL/Z.
Switch(config)# vlan 1
Switch(config-vlan)# end // Of Ctrl-Z
Switch#

Switch configure terminal
Enter configuration commands, one per line.
End with CNTL/Z.
Switch(config)# line vty 0 4
Switch(config-line)# interface fastethernet 0/1
Switch(config-if)# end
Switch#
```

### Commando's

prompt command space argument.

BV.: `ping 192.168.1.1`

> Je hoeft niet het volledige commando te typen; Met een `?` kan je meer info krijgen; Staat er een `^` onder dan is dat de plaats waar er iets fout staat.

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

![](/afbeeldingen/1ste-jaar/semester-II/Computernetwerken-I/commando.png)

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
| Fysieke Laag    | **Bits** |

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

## 2.2 De basis

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

#### Beveiligen van de toegang tot het apparaat

* `enable password` beperkt de toegang tot de bevoorrechte EXEC modus
* `enable secret` Geëncrypteerde, beperkte toegang tot de bevoorrechte EXEC modus
* `console password` Bepekrt toegang tot en apparaat met behulp van de console verbinding
* `VTY password` beperkt toegang tot een over Telnet

#### Beveiligen van de Privileged Exec toegangsmode

* Gebruik het `enable secret` commando, niet het oude `enable password` commando.
* Het `enable secret` commando biedt meer veiligheid omdat het wachtwoord wordt versleuteld.

```terminal
Sw-Floor-1>enable
Sw-Floor-1#
Sw-Floor-1#conf terminal
Sw-Floor-1(config)#enable secret class
Sw-Floor-1(config)#exit
Sw-Floor-1#
Sw-Floor-1#disable
Sw-Floor-1>enable
Password:
Sw-Floor-1#
```

#### Beveiligen van de User EXEC toegang

```terminal
Sw-Floor-1(config)#line console 0
Sw-Floor-1(config-line)#password cisco
Sw-Floor-1(config-line)#login
Sw-Floor-1(config-line)#exit
Sw-Floor-1(config)#
Sw-Floor-1(config)#line vty 0 15
Sw-Floor-1(config-line)#password cisco
Sw-Floor-1(config-line)#login
Sw-Floor-1(config-line)#
```

* Console poort moet beveiligd worden. Dit vermindert de kans dat onbevoegd personeel fysiek een kabel in het apparaat plugt en zo toegang verkrijgt tot het apparaat.
* VTY lijnen geven toegang tot een Cisco-apparaat via Telnet. Het aantal VTY lijnen die ondersteund worden is afhankelijk van het type paparaat en de IOS.

> Plain text passwords encrypteren door: `service password-encryption`

#### Banner berichten

`Welcome bob` als je aanmeldt.

`banner motd #This is a secure system. Authorized Access ONLY!!!#`

#### Configuratie bestanden

```terminal
Switch#show running-config
```

Om de configuratie te herladen

```terminal
Switch#reload
```

Om een configuratie te verwijderen

```terminal
Switch#erase startup-config
```

Om een vlan te deleten

```terminal
Switch#delete vlan.dat
```

## 2.3 Adresseringsregelingen

### IP Adressering van apparaten

Default gateway: IP van router in ander netwerk

DNS: Omzetten van hostname naar ip

# Hoofdstuk 3

Message (Bericht) > Transmitter (Stem) > Transmission Medium (Lucht) > Receiver (oor) > Message Destination (Hersenen)

1. Geïdentificeerde afzender en ontvanger
2. Een overeenkomst van de communicatie methode (face-to-face, telefonisch, per brief, ...)
3. Gemeenschappelijke taal en grammatica
4. Snelheid en timing van levering
5. Bevestiging of aanvaarding van de eisen

## Protocollen

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

1. **(Applicatieprotocol)** Hypertext Transfer Protocol (HTTP)
2. **(Transportprotocol)** Transmission Control Protocol (TCP)
3. **(Internetprotocol)** Internet Protocol (IP/ICMP)
4. **(Netwerk Toegangsprotocol)** Ethernet

**Netwerkprotocollen**

1. Bepalen hoe het bericht wordt geformatteerd of gestructureerd
2. Bepalen het proces waarbij netwerkapparaten informatie over padsbepaling uitwisselen met andere netwerken
3. Bepalen hoe en wanneer fout- en systeem
4. boodschappen worden doorgegeven tussen apparaten
4. Bepalen de setup en de beëindiging van de data-overdracht sessies

> Protocol Suite: verzameling protocollen die samenwerken.

![](/afbeeldingen/1ste-jaar/semester-II/Computernetwerken-I/protocol_suite.png)

> Examen: plaats protocol op juiste laag

**Inkapseling**: inpakken van informatie

**Dekapseling**: uitpakken van informatie

## Open Standaarden

* The Internet Society (ISOC)
* The Internet Architecture Board (IAB)
* The Internet Engineering Task Force (IETF) (Netwerk, transport, applicatie)
* Institute of Electrical and Electronics * Engineers (IEEE) (Data-link, fysieke laag)
* The International Organization for Standards (ISO)

> IEEE 802.3 standaard voor bekabelde netwerken
> IEEE 802.11 standaard voor draadloze netwerken
> IEEE 802.15 bluetooth

**Referentiemodel (OSI: 7 lagen)**

OSI: Open System Interconenction

* Application
* Presentation
* Session
* Transport
* Network
* Data Link
* Physical

## Andere Standaarden Organisaties

* The Electronic Industries Alliance (EIA)
* The Telecommunications Industry Association (TIA)
* The International Telecommunications Union – Telecommunications Standardization Sector (ITU-T)
* The Internet Corporation for Assigned Names and Numbers (ICANN)
* The Internet Assigned Numbers Authority (IANA)
 
## Communiceren van de berichten

**Voordelen** van het segmenteren van een bericht:

* Verschillende gesprekken kunnen worden verweven
* Verhoogd de betrouwbaarheid van netwerkcommunicatie

**Nadeel** van het segmenteren van een bericht:

* verhoogd het niveau van complexiteit

> TDN: Time Division Multiplexing
> 
> FDN: Frequency Division Multiplexing

## Protocol Data Units (PDUs)

De vorm die een stukje data aanneemt op elke laag wordt een Protocol Data Unit (PDU) genoemd.

* Data
* Segment
* IP-Packat / Data-gram
* Frame
* Bits

# Hoofdstuk 4

De fysieke laag.

`Home Router` Om de draadloze mogelijkheid te bieden, moet een netwerk over een draadloos toegangspunt (WAP) beschikken zodat apparaten verbinding kunnen maken.

- Embedded Wireles Antenna
- Ethernet Switch
- Internet Connection (router)

## Netwerk Interface Cards (NICs)

Netwerkkaarten

## Het fysieke medium

- TP kabels (Twisted Pair)
- Coax kabels
- Draadloos: Microwaves

![](/afbeeldingen/1ste-jaar/semester-II/Computernetwerken-I/fysieke_medium.png)

PM: Fase

## Kabels

* UTP: Unshielded Twisted Pair
* STP: Shielded Twisted Pair
* FTP: Foiled Twisted Pair

> Examen: plaats encoding bij media (Slide 13)