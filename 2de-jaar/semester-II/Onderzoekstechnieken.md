---
title: Onderzoekstechnieken
link: https://robinmalfait.com/2de-jaar/semester-II/Onderzoekstechnieken.md
---

[Cheat Sheet](/2de-jaar/semester-II/Statistics.md)

# 1. Het onderzoeksproces

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

- **Nominaal** Er is slechts keuze uit een beperkt aantal categorieën, waarbij geen volgorde aanwezig is tussen de antwoorden. `Categorieën`. Bv.: Geslacht, ras, land, vorm, ...
- **Ordinaal** Een variabele die is ingedeeld in categorieën, waar er echter wel een logische volgorde is tussen de categorieën. `Volgorde`. Bv.: militaire rang, opleidingsniveau, ...

### Kwantitatieve schalen:

- **Interval** Variabelen die niet in categorieën voorkomen, en waarbij berekeningen kunnen mee uitgevoerd worden, maar zonder nulpunt. Meting: getal + meeteenheid, nulpunt niet belangrijk.

    bv.: 20°C - 15°C = 5°C, maar 20°C is *NIET* 1/3 warmer dan 15°C

- **Ratio** Intervalniveau met nulpunt. Je kunt hierdoor verhoudingen berekenen tussen verschillende waarden op de schaal. Meting t.o.v. absoluut nulpung.

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
* Alcohol leidt tot minder oplettendheid
* ...

- **Oorzaak**: Onafhankelijke variabele
- **Gevolg** Afhankelijke variabele


> **Let Op!** Een verband tussen variabelen duidt niet noodzakelijk op een oorzakelijk verband

- Gaming leidt tot gewelddadige gedrag
- Vaccinaties leiden tot autisme
- Correlatie tussen drinken van Cola-light en zwaarlijvigheid
- ...

# 2. Analyse op 1 variabele

> **Beschrijvende statistiek** Met beschrijvende statistiek bedoelen we een verzameling van technieken om data synthetisch voor te stellen en samen te vatten.

## Centrummaten

### 2.2. Gemiddelde

> Het gemiddelde is de som van alle waarden gedeeld door het aantal waarden

Het gemiddelde is gevoelig aan uitschieters (outliers). Elk cijfer levert een bijdrage aan de uitkomst

```
μ = 1/n * sum(Xi)
```

- μ: populatie
- x̄: steekproef

### 2.3. Mediaan

> Om de mediaan te vinden, sorteer de waarden en kies het middelste nummer

- Oneven aantal getallen: geen probleem
- Event aantal getallen: gemiddelde van middelste twee getallen

Is minder gevoelig aan uitschieters, niet alle cijfers werken mee aan de uitkomst.

### 2.4. Modus

> De modus is het vaakst voorkomende getal in een reeks getallen.

Wanneer geen enkel getal meerdere keren voorkomt, waardoor elk getal slechts 1 keer voorkomt. Dan is er geen modus.

## Spreidingsmaten

### 2.5. Bereik (range)

> Het bereik van een reeks getallen is de absolute waarde van het verschil tussen het grootste en kleinste getal in de reeks.

```
bereik = | max(x) - min(x) |
```

### 2.6. Kwartielen (quartiles)

> De kwartielen van een gesorteerde reeks getallen zijn de waarden die de lijst in vier gelijke delen verdeelt. Elk deel vormt dus ene kwart van de dataset. Men spreekt van een eerste, tweede en derde kwartiel genoteersd als. `Q1, Q2, Q3`

- Q1: 0% - 25%
- Q2: 25% - 50%
- Q3: 50% - 75%
- Q4: 75% - 100%

> **kwartielafstand** is het verschil tussen Q3 en Q1 `Q3 - Q1`
>
> - Indien oneven:
>   - Q1: `(n + 1)/4`
>   - Q3: `(3n + 3)/4`
> - Indien even:
>   - Q1: `(n + 2)/4`
>   - Q3: `(3n + 2)/4`

Percentielen zijn gelijkaardig maar van 0..1

### 2.7. Variantie (variance) en standaardafwijking (standard deviation)

> De variantie (σ^2 (sigma kwadraat)) is het gemiddelde gekwadrateerde verschil tussen de elementen van de dataset en zijn gemiddelde.

Dit kan nooit negatief zijn, omdat we enkel optellen en een kwadraat nemen

Binnen een steekproef:

```
    sum(xi - avg(x))^2
s = ------------------
            n
```

Binnen de populatie:

```
      sum(μ - avg(x))^2
σ^2 = ------------------
            n
```

> Een waarde uitdrukken op basis van u meetpunt heet `Normaliseren` x^2/n (zoals bij variantie)

Variantie wordt aangeduid door `s` (als het over de steekproef gaat) of door `σ^2` (als het over de populatie gaat)

> De standaardafwijking is de vierkantswortel van de variantie

Aangeduid door sigma

```
σ = sqrt(σ^2)
```

### 2.8. Toepassing spreidingsmaten en maten centraliteit op verschillende soorten variabelen

| Analyse | Nominaal | Ordinaal | Interval of Ratio |
| ------- | -------- | -------- | ----------------- |
| **Centrum** | <ul><li>Modus</li><li>Modale klasse</li></ul> | <ul><li>Mediaan</li><li>Modus</li><li>Modale klasse</li></ul> | <ul><li>Gemiddelde</li><li>Mediaan</li><li>Modale klasse</li> </ul> |
| **Spreiding** | &nbsp; | <ul><li>Range</li><li>Interkwartielafstand</li></ul> | <ul><li>Range</li><li>Interkwartielafstand</li><li>standaardafwijking</li></ul> |

#### Eigenschappen

- Kan de standaardafwijking negatief zijn? Neen
- Wat is de kleinst mogelijke waarde? Wat duidt dit aan? 0 -> er is geen range
- Wat is de invloed van uitschieters op de standaardafwijking?
- In welke eenheden staat de standaardafwijking?
- Hoe interpreteer je de standaardafwijking in combinatie met het gemiddelde? Wanneer je dataset normaal verdeeld is.

### 2.9. Grafieken

> Probeer cirkeldiagrammen te vermijden, bar charts zijn makkelijker interpreteerbaar!

#### 2.9.1. Boxplot

De boxplot wordt gevormd door een rechthoek begrensd door de kwartielwaarden (25% en 75%). In deze rechthoek wordt ook de mediaan getekend. De stelen, die aan de rechthoek zitten, bevatten de rest van de waarnemingen op de uitschieters en extremen na.

- Een uitschieters is een waarde die meer dan 1,5 keer de interkwartielafstand boven/onder het derde/eerste kwartiel ligt. Wordt aangeduid met een cirkeltje.
- Een extremum is een waarde die meer dan 3 keer de interkwartielafstand boven/onder het derde/eerste kwartiel ligt. Wordt aangeduid met een sterretje.

# Analyse op 2 variabelen

## Bivariate Analyse

### Afhankelijke en onafhankelijke variabele

Verbanden tussen verschillende verschijnselen.

## Kruistabellen en Cramér's V

- Metingen: `a`
- Verwachte waarde: `e`

![](https://robinmalfait.com/afbeeldingen/droplr/1eMcm.png)

Percentages: ![](https://robinmalfait.com/afbeeldingen/droplr/1iVAp.png)
Verwachte waarde `e`: ![](https://robinmalfait.com/afbeeldingen/droplr/19ksK.png)

Resultaten: ![](https://robinmalfait.com/afbeeldingen/droplr/17VEc.png)

# 4. Steekproefonderzoek

> **populatie** De verzameling van **alle** objecten of personen waar men in geïnteresseerd is en onderzoek naar wil doen noemt men de populatie. Een ander woord is ook wel onderzoeksgroep of doelgroep.


> **Steekproef** Wanneer met een subgroep uit een populatie gaat onderzoeken, dan noemen we die groep een steekproef.


> **Steekproefkader** Een steekproefkader is een lisjt van alle leden van een te onderzoeken populatie


## 4.2. Kiezen van steekproefmethode

> **Gestratificeerde steekproef**. Een **gestratificeerde** steekproef is proportioneel als het aandel van de subpopulatie in de steekproef gelijk is aan het aandel van de subpopulatie in de populatie als geheel.

## 4.3. Kansverdeling van een steekproef

### 4.3.1. Stochastisch experiment

> **Universum of Uitkomstenruimte** het universum of uitkomstenruimte van een experiment is de verzameling van alle mogelijke uitkomsten van dit experiment en wordt genoteerd met Ω

<br>

> **Gebeurtenis** Een gebeurtenis is een deelverzameling van de uitkomstenruimte. Een enkelvoudige of elementaire gebeurtenis is een singleton; een samengestelde gebeurtenis heeft cardinaliteit groter dan 1

## 4.4. De normale verdeling

```
X ~ Nor(μ = 5; σ = 1,5)
```

Eigenschappen:

- Normale verdeling is klokvormig
- De normale verdeling is symmetrisch
- Vanwege de symmetrie is gemiddelde, mediaan en modus aan elkaar gelijk
- De totale oppervlakte onder de klokvormige figuur is 1
- In gebied σ onder μ en σ boven μ (het zogenoemde sigma gebied) ligt ongeveer 68% van de waarnemingen
- In het gebied 2σ boven en onder μ ligt ongeveer 95% van alle waarnemingen

### 4.5.2. Schatten van een parameter

> **puntschatter** een puntschatter voor een populatieparameter is een regel of een formule die ons zegt hoe we uit de steekproef een getal moeten berekenen om de populatieparameter te schatten. Een puntschatter is dus een steekproefgrootheid.

### 4.5.3. Betrouwbaarheidsinterval populatiegemiddelde bij grote steekproef

> **Betrouwbaarheidsinterval**. Een betrouwbaarheidsinterval is een regel of een formule die ons zegt hoe we uit de steekproef een interval moeten berekenen dat de waarde van de parameter met een bepaalde hoge waarschijnlijkheid bevat.


# 5. Toetsingsprocedures

## 5.2.1 Elementen van een hypothesetoets

1. **Nullhypothese** H<sub>0</sub>: Deze hypothese proberen wete ontkrachten door een redenering in het ongerijmde. We gaan deze hypothese accepteren, tenzij de gegevens overtuigend wijzen op het tegendeel.
2. **Alternatieve hypothese** H<sub>1</sub>: De hypothese die meestal gesteund wordt door de onderzoeker. Deze hypothese zal alleen worden geaccepteerd als de gegevens overtuigend wijzen op zijn juistheid.
3. **Teststatistiek** De veranderlijke die berekend wordt uit de steekproef
4.
    - **Aanvaardingsgebierd** Het gebeid van waarden die de nullhypothese H0 ondersteunt
    - **Verwerpingsgebied**: gebied dat waarden bevat die de nullhypothese verwerpen (ook kritiek gebied genoemd)

# R

## Laden van datasets

### 1 function to rule them all!

```R
load_file <- function(path) {
  library(tools)
  type <- file_ext(path)

  if (type == "xlsx") {
    library(readxl)
    return(read_excel(path))
  } else if (type == "sav") {
    library(foreign)
    return(read.spss(path, to.data.frame=TRUE))
  } else if (type == "csv") {
    library(foreign)
    return(read.csv(path))
  } else if (type == "txt") {
    return(read.delim(path))
  }
}
```

### .sav files

```R
library(foreign)
data <- read.spss("path/to/sav/file.sav", to.data.frame=TRUE)
```

### .csv files

```R
library(foreign)
data <- read.csv("path/to/csv/file.csv")
```

### .xlsx files

```R
library(readxl)
data <- read_excel("path/to/xlsx/file.xlsx", sheet="Sheet1")
```

### .txt files

```R
data <- read.delim("path/to/txt/file.txt")

## of

data <- read.table("path/to/txt/file.txt",
  header=TRUE, sep="\t", na.strings="NA", dec=".", strip.white=TRUE)
```
