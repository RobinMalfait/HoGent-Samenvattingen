---
title: Onderzoekstechnieken
---

2 taken (doorheen het jaar):

- Voorstel bachelorproef uitwerken
- Mini-onderzoek (waar alle technieken uit de cursus worden toegepast)

> **Wetenschappelijke methode** ![](https://robinmalfait.com/afbeeldingen/droplr/1cqTO.png)

## Hoe vergaren we kennis?

* Niet-wetenschappelijke methode
    - "Mijn buikgevoel zegt van wel"
    - "Mijn vader zegt van wel, dus moet het wel"
    - "Er zijn verschillende beelden van UFO's en dus kan het niet anders"
    - "Ik heb het gelezen op het Internet!"
* Wetenschappelijke methode
    - "Er zijn veel planeten"
    - "Moleculen nodig voor het leven vind je overal"
    - => "Dus ik zou verwonderd zijn indien er geen leven is"
    - **Maar er is nog geen bewijs voor**

## De Wetenschappelijke methode

Aan de hand van **empirisch onderzoek** zijn we geïnteresseerd in volgende zaken:

> Empirisch onderzoek beschrijft elke onderzoeksactiviteit die directe of indirecte waarnemingen gebruikt.
>
> ~ [https://nl.wikipedia.org/wiki/Empirisch_onderzoek](https://nl.wikipedia.org/wiki/Empirisch_onderzoek)

1. Exploratie (domein verkennen)
2. Beschrijving
3. Voorspelling
4. Controle


- Generalisatie
    - BV.: "Agressie komt vaak voor in deze bevolkingsgroep"
- Verstaan, begrijpen
    - Er is een verband tussen frustratie en agressie
    - Theorieontwikkeling

## Het onderzoeksproces

1. Formuleren probleemstelling
    * Wat is de onderzoeksvraag
2. Exacte informatiebehoefte definiëren
    * Welke specifieke vragen moeten we stellen?
3. Uitvoeren onderzoek
    * Enquêtes, simulaties, ...
4. Verwerken gegevens
    * Statistische software
5. Analyseren gegevens
    * Uitvoeren statistische methodes
6. Conclusies schrijven
    * Schrijven onderzoeksverslag

## Variabelen en waarden

> **Variabele** Algemene eigenschap van een object waardoor we objecten van elkaar kunnen onderscheiden
>
> **Waarde** Specifieke eigenschap, invulling voor die variabele

## Meetniveaus

### Kwalitatieve schalen:

- **Nominaal** Categorieën. Bv.: Geslacht, ras, land, vorm, ...
- **Ordinaal** Volgorde. Bv.: militaire rang, opleidingsniveau, ...

### Kwantitatieve schalen:

- **Interval** Meting: getal + meeteenheid, nulpunt niet belangrijk.

    bv.: 20°C - 15°C = 5°C, maar 20°C is *NIET* 1/3 warmer dan 15°C

- **Ratio** Meting t.o.v. absoluut nulpung.

    bv.: Afstand (m), enregie (J), massa (kg), ... BV.: 20m is *wel* 1/3 langer dan 15m

## Verbanden tussen variabelen

Er is een verband tussen variabelen als hun waarden **systematisch** veranderen.

| Afbeelding 1 | Afbeelding 2 |
| :----------: | :----------: |
| ![](https://robinmalfait.com/afbeeldingen/droplr/1lnWx.png) | ![](https://robinmalfait.com/afbeeldingen/droplr/Eszm.png) |

### Verbanden tussen variabelen: voorbeeld

| &nbsp; | Pepsi  | Coca Cola | Totaal |
| -----: | :----: | :-------: | :----: |
| Lekker | 56 | 24 | 80 |
| Niet Lekker | 14 | 6 | 20 |
| Totaal | 70 | 30 | 100 |

## Oorzakelijke Verbanden

We zijn vooral op zoek naar **oorzakelijke verbanden**, bv.

* Frustratie leidt tot agressie
* Alcohol leidt tot mindero plettendheid
* ...

- **Oorzaak**: Onafhankelijke variabele
- **Gevolg** Afhankelijke variabele


> **Let Op!** Een verband tussen variabelen duidt niet noodzakelijk op een oorzakelijk verband

- Gaming leidt tot gewelddadige gedrag
- Vaccinaties leiden tot autisme
- Correlatie tussen drinken van Cola-light en zwaarlijvigheid
- ...

# Analyse op 1 variabele

## Centrummaten

### Gemiddelde

> Het gemiddelde is de som van alle waarden gedeeld door het aantal waarden

Het gemiddelde is gevoelig aan uitschieters. Elk cijfer levert een bijdrage aan de uitkomst.

### Mediaan

> Om de mediaan te vinden, sorteer de waarden en kies het middelste nummer

- Oneven aantal getallen: geen probleem
- Event aantal getallen: gemiddelde van middelste twee getallen

Is minder gevoelig aan uitschieters, niet alle cijfers werken mee aan de uitkomst.

### Modus

> De modus is het vaakst voorkomende getal in een reeks getallen.

Wanneer geen enkel getal meerdere keren voorkomt, waardoor elk getal slechts 1 keer voorkomt. Dan is er geen modus.

## Spreidingsmaten

### Bereik (range)

> Het bereik van een reeks getallen is de absolute waarde van het verschil tussen het grootste en kleinste getal in de reeks.

```
bereik = | max(x) - min(x) |
```

### Kwartielen (quartiles)

> De kwartielen van een gesorteerde reeks getallen zijn de waarden die de lijst in vier gelijke delen verdeelt. Elk deel vormt dus ene kwart van de dataset. Men spreekt van een eerste, tweede en derde kwartiel genoteersd als. `Q1, Q2, Q3`

Percentielen zijn gelijkaardig maar van 0..1

### Variantie (variance) en standaardafwijking (standard deviation)

> De variantie is het gemiddelde gekwadrateerde verschil tussen de elementen van de dataset en zijn gemiddelde.


Dit kan nooit negatief zijn, omdat we enkel optellen en een kwadraat nemen

```
    sum(xi - avg(x))^2
s = ------------------
            n
```

> De standaardafwijking is de vierkantswortel van de variantie


Aangeduid door sigma

```
σ = sqrt(s)
```

#### Eigenschappen

- Kan de standaardafwijking negatief zijn? Neen
- Wat is de kleinst mogelijke waarde? Wat duidt dit aan? 0 -> er is geen range
- Wat is de invloed van uitschieters op de standaardafwijking?
- In welke eenheden staat de standaardafwijking?
- Hoe interpreteer je de standaardafwijking in combinatie met het gemiddelde? Wanneer je dataset normaal verdeeld is.


## Diagrammen

> Probeer cirkeldiagrammen te vermijden, bar charts zijn makkelijker interpreteerbaar!
