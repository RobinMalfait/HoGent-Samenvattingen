# Probleem Oplossend Denken I

## Hoofdstuk 1

* De sequentie
* De Selectie
* De Iteratie

**Algoritme: De Sequentie**

---

```pascal
opdracht 1
opdracht 2
opdracht n
```

Voorbeeld: **Algoritme** Bereken BMI

```pascal
VOERUIT(scherm, "geef lengte in meter: ")
VOERIN(klavier, lengte)
VOERUIT(scherm, "geef gewicht in kilo: ")
VOERIN(klavier, gewicht)
bodyMassIndex <- gewicht/(lengte . lengte)
RETOUR bodyMassIndex
```

**Algoritme: De Selectie**

---

```pascal
ALS voorwaarde DAN
	component1
ANDERS
	component2
EINDE ALS
```

**De eenzijdige Selectie:**

```pascal
ALS voorwaarde DAN
	component1
EINDE ALS
```

Voorbeeld: **Algoritme** Evalueer BMI.

```pascal
VOERUIT(scherm, "Geef BMI:")
VOERIN(klavier, bodyMassIndex)
ALS ((18,5 ≤ bodyMassIndex) EN (bodyMassIndex ≤ 25)) DAN
	VOERUIT(scherm, "Gezond")
ANDERS
	VOERUIT(scherm, "Risico")
EINDE ALS
```

**De Geneste selectiestructuur:**

```pascal
VOERUIT(scherm, "Geef BMI:")
VOERIN(klavier, bodyMassIndex)
ALS bodyMassIndex < 18,5 DAN
	VOERUIT(scherm, "Risico voor ondergewicht")
ANDERS
	ALS bodyMassIndex > 25 DAN
		VOERUIT(scherm, "Risico voor obesitas")
	ANDERS
		VOERUIT(scherm, "Gezond")
	EINDE ALS
EINDE ALS
```

**Algoritme: De iteratie**

---

```pascal
ZOLANG iteratievoorwaarde DOE
	iteratiecomponent
EINDE ZOLANG
```

> Er is geen do-while lus!

Voorbeeld: **Algoritme** Som van de eerste 10 strikt positieve gehele getallen.

Via `while` lus.

```pascal
i <- 1
som <- 0
ZOLANG i ≤ 10 DOE
	som <- som + i
	i <- i + 1
EINDE ZOLANG
VOERUIT(scherm, "som = " som)
```
Alternatief (for-loop):

> `i` moet niet verhoogd worden in deze lus.

```pascal
som <- 0
VOOR i = 1 TOT 10 DOE
	som <- som + i
EINDE VOOR
VOERUIT(scherm, "som = " som)
```

Met Stappen:

```pascal
som <- 0
VOOR i = 1 TOT 10 STAP 2 DOE
	som <- som + i
EINDE VOOR
VOERUIT(scherm, "som = " som)
```

### Methodes

**Sjabloon**

```pascal
naamAlgoritme (I: ...): ...
	* Preconditie: ...
	* Postconditie: ...
	* Gebruikt: ...
BEGIN
	1: ...
EINDE
```

Voorbeeld: Wat is het grootste getal?

```pascal
bepaalMaximum (I: a, b, c: gehele getallen): x: geheel getal
	* Preconditie: a, b en c zijn drie gehele getallen.
	* Postconditie: het maximum van drie getallen werd bepaald.
	* Gebruikt: /
BEGIN
	x <- a
	ALS (b > x) DAN
		x <- b
	EINDE ALS
	ALS (c > x) DAN
		x <- c
	EINDE ALS
	RETOUR X
EIND
```

Voorbeeld: Bepaal het aantal priemgetallen kleiner dan n.

```pascal
telPriemgetallen (I: n: geheel getal) : aantal: geheel getal
	* Preconditie: n is een natuurlijk getal.
	* Postconditie: het aantal priemgetallen kleiner dan n werd geretourneerd.
	* Gebruikt: /
BEGIN
	aantal <- 0
	p <- 2
	ZOLANG (p < n) DOE
		deler <- 2
		ZOLANG ((deler < p) EN (p MOD deler ≠ 0)) DOE
			deler <- deler + 1
		EINDE ZOLANG
		ALS (deler = p) DAN
			antal <- aantal + 1
		EINDE ALS
		p <- p + 1
	EINDE ZOLANG
	RETOUR aantal
EINDE
```

> Waarom tot vierkantswortel van n lopen:
>
> Stel n = n<sub>1</sub> x n<sub>2</sub>
>
> dan n<sub>1</sub> ≤ √n of n<sub>2</sub> ≤ √n
>
> Bewijs
>
> Stel n<sub>1</sub> > √n en n<sub>2</sub> > √n
>
> n = n<sub>1</sub> x n<sub>2</sub> > √n x √n = n
>
> Dus, n > n, kan niet = contradictie

### Methode 2: De zeef van Eratosthenes

***2*** ***3*** 4 ***5*** 6 ***7*** 8 9 10 ***11*** 12 ***13*** 14 15 16 ***17*** 18 ***19*** 20 21 22 ***23*** 24 25 26 27 28 ***29***

```pascal
telPriemgetallenEratosthenes (I: n: geheel getal) : aantal: geheel getal
	* Preconditie: n is een natuurlijk getal.
	* Postconditie: het aantal priemgetallen kleiner dan n werd geretourneerd.
	* Gebruikt: /
BEGIN
	noteer de rij van natuurlijk getallen 2, 3, ..., n - 1
	p <- 2
	aantal <- 0
	ZOLANG (p < n) DOE
		schrap in de rij van getallen alle veelvouden van p
		aantal <- aantal + 1
		ALS alle elementen uit de rij zijn geschrapt DAN
			p <- n
		ANDERS
			p <- het eerste niet geschrapte element
		EINDE ALS
	EINDE ZOLANG
	RETOUR aantal
EINDE
```

## Hoofdstuk 2

> De tijd is rechtevenredig met het aantal instructies die uitgevoerd worden.
>
> We nemen aan dat alle basis instructies even lang duren, bijvoorbeeld: optelling, aftrekken, deling, vermenigvuldiging, ...

### Het aantal instructies exact gaan tellen.

#### Voorbeeld 1:

```pascal
BEGIN
    kwadraat <- n . n
    RETOUR (kwadraat)
EINDE
```

| &nbsp;            | # instructies | # keer | totaal |
| ----------------- | :-----------: | :----: | :----: |
| kwadraat <- n x n | 2             | 1      | 2      |
| RETOUR(kwadraat)  | 1             | 1      | 1      |
| &nbsp;            | &nbsp;        | &nbsp; | 3      |

T(n) = 3

#### Voorbeeld 2:

```pascal
BEGIN
    som <- 0
    VOOR i = 1 TOT n DOE
        som <- som + i . i
    EINDE VOOR
    RETOUR (som)
EINDE
```

| &nbsp;                                     | # instructies | # keer | totaal |
| ------------------------------------------ | :-----------: | :----: | :----: |
| som <- 0                                   | 1             | 1      | 1      |
| VOOR i = 1 TOT n DOE                       | 2             | n + 1  | 2n + 2 |
| &emsp;som <- som + i . i | 3               | n             | 3n     |        |
| EINDE VOOR                                 | &nbsp;        | &nbsp; | &nbsp; |
| RETOUR (som)                               | 1             | 1      | 1      |
| &nbsp;                                     | &nbsp;        | &nbsp; | 5n + 4 |

T(n) = 5n + 4

> Een `VOOR` lus heeft altijd 2 instructies.


#### Voorbeeld 3:

```pascal
BEGIN
    grootste <- 0
    VOOR i = 0 TOT n - 1 DOE
        ALS a[i] < grootste DAN
            grootste <- a[i]
        EINDE ALS
    EINDE VOOR
    RETOUR (grootste)
EINDE
```

| &nbsp;                          | # instructies | # keer | totaal       |
| ------------------------------- | :-----------: | :----: | :----------: |
| grootste <- 0                   | 1             | 1      | 1            |
| VOOR i = 0 TOT n - 1 DOE        | 2             | n + 1  | 2n + 2       |
| &emsp;ALS a[i] < grootste DAN   | **1** c       | &nbsp; | &nbsp;       |
| &emsp;&emsp;grootste <- a[i]    | **1** c       | n      | cn           |
| &emsp;EINDE ALS                 | &nbsp;        | &nbsp; | &nbsp;       |
| EINDE VOOR                      | &nbsp;        | &nbsp; | &nbsp;       |
| RETOUR (grootste)               | 1             | 1      | 1            |
| &nbsp;                          | &nbsp;        | &nbsp; | (2 + c)n + 4 |

T(n) = (2 + c)n + 4


#### Voorbeeld 4:

```pascal
BEGIN
    som <- 0
    VOOR i = 0 TOT n DOE
        VOOR j = 1 TOT n DOE
            som <- som + i . j
        EINDE VOOR
    EINDE VOOR
    RETOUR (som)
EINDE
```

| &nbsp;                          | # instructies | # keer        | totaal                  |
| ------------------------------- | :-----------: | :-----------: | :---------------------: |
| som <- 0                        | 1             | 1             | 1                       |
| VOOR i = 0 TOT n DOE            | 2             | n + 1         | 2n + 2                  |
| &emsp;VOOR j = 1 TOT n DOE      | 2             | (n + 1)n      | 2n<sup>2</sup> + 2n     |
| &emsp;&emsp;som <- som + i . j  | 3             | n<sup>2</sup> | 3n<sup>2</sup>          |
| &emsp;EINDE VOOR                | &nbsp;        | &nbsp;        | &nbsp;                  |
| EINDE VOOR                      | &nbsp;        | &nbsp;        | &nbsp;                  |
| RETOUR (grootste)               | 1             | 1             | 1                       |
| &nbsp;                          | &nbsp;        | &nbsp;        | 5n<sup>2</sup> + 4n + 4 |

T(n) = 5n<sup>2</sup> + 4n + 4

T(n) = &Theta;(n<sup>2</sup>)

> **Examen:** zorg dat je er de &Theta; bij zet!


### &Theta; notatie

> **EXAMEN:** bepaal theta notatie. (Big &Theta; Notation).

![](/afbeeldingen/1ste-jaar/semester-II/Probleem-Oplossend-Denken-I/n_is_5.png)

![](/afbeeldingen/1ste-jaar/semester-II/Probleem-Oplossend-Denken-I/n_is_50.png)

**Voorbeeld 1:**

```pascal
som <- o
VOOR i = 1 TOT n DOE
    som <- som + i
EINDE VOOR
```

T(n) = c<sub>1</sub> + c<sub>2</sub>n

= &Theta;(n)

**Voorbeeld 2:**

```pascal
som <- 0
VOOR i = 1 TOT n DOE
    VOOR j = 1 TOT i DOE
        som <- som + j
    EINDE VOOR
EINDE VOOR
```

| i    | # keer lijn 4 |
| :--: | :-----------: |
| 1    | 1             |
| 2    | 2             |
| 3    | 3             |
| n    | n             |

1 + 2 + 3 + ... + n

= ((n + 1) n) / 2

> `((n + 1) n) / 2` is een geslote formule.

T(n) = &Theta;(n<sup>2</sup>)

**Voorbeeld 3:**

```pascal
som <- 0
VOOR i = 1 TOT n DOE
    VOOR j = 1 TOT n DOE
        som <- som + j
    EINDE VOOR
EINDE VOOR
```

T(n) = &Theta;(n<sup>2</sup>)

**Voorbeeld 4:**

Stel: n = 2<sup>k</sup>

```pascal
som <- 0
i <- i
ZOLANG i ≤ n DOE
    VOOR j = 1 TOT n DOE
        som <- som + j
    EINDE VOOR
    i <- i . 2
EINDE ZOLANG
```

bv.: n = 8 = 2<sup>3</sup>

| i      | # keer lijn 6 |
| :----: | :-----------: |
| 1      | 8 (n keer)    |
| 2      | 8 (n keer)    |
| 4      | 8 (n keer)    |
| 8      | 8 (n keer)    |
| 16     | /             |
| &nbsp; | (k + 1)n      |

T(n) = ((lg(n)) + 1 ) n

T(n) = n . lg(n) + n

T(n) = &Theta;(ng lg(n))

> In &Theta; notatie zijn alle `log`, `lg`, `ln` gelijk. Ze verschillen van een factor die geen rol speelt bij deze notatie.


**Voorbeeld 5:**

Stel: n = 2<sup>k</sup>

```pascal
som <- 0
i <- i
ZOLANG i ≤ n DOE
    VOOR j = 1 TOT i DOE
        som <- som + j
    EINDE VOOR
    i <- i . 2
EINDE ZOLANG
```

| i      | # keer lijn 5 |
| :----: | :-----------: |
| 1      | 1             |
| 2      | 2             |
| 4      | 4             |
| 8      | 8             |
| 16     | /             |
| &nbsp; | (k + 1)n      |

T(n) = 1 + 2 + 4 + 8 + ... + 2<sup>k</sup>

a = 2

= 2<sup>k + 1</sup> - 1 / 2 - 1 = 2<sup>k + 1</sup> - 1 = 2 . 2<sup>k</sup> - 1 = 2n - 1

T(n) = &Theta;(n)

**Formule:**

S<sub>k</sub> = 1 + a + a<sup>2</sup> + a<sup>3</sup> + ... + a<sup>k</sup>

a . S<sub>k</sub> = a + a<sup>2</sup> + a<sup>3</sup> + ... + a<sup>k</sup> + a<sup>k + 1</sup>

---

S<sub>k</sub> - a . S<sub>k</sub> = 1 - a<sup>k + 1</sup>

(1 - a)S<sub>k</sub> = 1 - a<sup>k + 1</sup> / 1 - a = a<sup>k + 1</sup> - 1 / a - 1 = S<sub>k</sub>

## Hoofdstuk 3


```pascal
0! = 1
n! = n x (n - 1)!       als n ≥ 1
```
Voorbeeld:

```
4! = 4 x 3!
   = 4 x (3 x 2!)
   = 4 x (3 x (2 x 1!))
   = 4 x (3 x (2 x (1 x 0!)))
   = 4 x (3 x (2 x (1 x 1)))
   = 4 x (3 x (2 x 1))
   = 4 x (3 x 2)
   = 4 x 6
   = 24
```
```pascal
berekenFaculteit(I: n: geheel getal): fac: geheel getal
    * preconditie: n is een natuurlijk getal
    * postcondotie: n! werd berekend
    * gebruikt: berekenFaculteit
BEGIN
    ALS n = 0 DAN
        faculteit <- 1
    ANDERS
        faculteit <- n . berekenFaculteit(n - 1)
    EINDE ALS
    RETOUR (faculteit)
EINDE
```
**Hoe lang duurt dit?**

T(0) = &Theta;(1)<br>
T(n) = T(n - 1) + &Theta;(1)    als n ≥ 1

**Na vereenvoudiging:**

T(0) = 1<br>
T(n) = T(n - 1) + 1             als n ≥ 1

**Uitwerking:**

T(0) = 1<br>
T(1) = T(0) + 1 = 1 + 1 = 2<br>
T(2) = T(1) + 1 = 2 + 1 = 3<br>
T(3) = T(2) + 1 = 3 + 1 = 4<br>
T(4) = T(3) + 1 = 4 + 1 = 5<br>

Gok:<br>
T(n) = n + 1


### Bewijs (Door inductie):

> Stel je hebt een oneindige rij van personen P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, P<sub>3</sub>, P<sub>4</sub>, P<sub>5</sub>, ...

1. De eerste persoon in de rij weet een geheim
2. Als een persoon een geheim weet dan vertelt die het door aan de volgende persoon in de rij.

Wie weet het geheim? Iedereen want het wordt doorgegeven.

---

```pascal
Gegeven:        T(0) = 1
                T(n) = T(n - 1) + 1             als n ≥ 1
```

Te bewijzen:    T(n) = n + 1

**Bewijs:**

> Kan op een examen komen!


```pascal
1. Basisstap: verifieer dat het te bewijzen waar is voor n = 0
    Linker Lid:     T(0)                        = 1 (gegeven)
    Rechter Lid:    n + 1 = 0 + 1               = 1

2. Inductiestap: 
    Veronderstel dat T(m) = m + 1               als m ≤ n
                     (Inductiehypothese)
    T(n + 1) = T(n) + 1                         (gegeven)
             = (n + 1) + 1
             = n + 2                            QED
```

> T(n) = &Theta;(n)


### Torens van Hanoi

| n | # Bewegingen | 
| - | ------------ |
| 1 | 1            |
| 2 | 3            |
| 3 | 7            |
| 4 | 15           |
| 5 | 31           |

**Recursiebetrekking:**

```pascal
T(1) = 1
T(n) = 2 T(n - 1) + 1       als n ≥ 2
```

Gok: (n) = 2<sup>n</sup>-1

---

```pascal
Gegeven:        T(1) = 1
                T(n) = 2T(n - 1) + 1             als n ≥ 2
```

Te bewijzen: T(n) = 2<sup>n</sup>-1 als ≥ 1

**Bewijs:**


1. Basisstap: verifieer dat het te bewijzen waar is voor n = 1

    Linker Lid:     T(1) = 1                    (gegeven)<br>
    Rechter Lid:    2<sup>n</sup>-1 = 2<sup>1</sup> - 1 = 2 - 1 = 1

2. Inductiestap: 
    Veronderstel dat T(m) = 2<sup>m</sup> - 1   als m ≤ n
                     (Inductiehypothese)
                     
    T(n + 1) = 2T(n) + 1 (gegeven)<br>
    (inductiefase)<br>
    = 2 . (2<sup>n</sup> - 1) + 1<br>
    = 2<sup>n + 1</sup> - 2 + 1<br>
    = 2<sup>n + 1</sup> - 1<br>
    
T(n) = &Theta;(2<sup>n</sup>)

\# Zetten = 2<sup>64</sup>-1 = 1,84467441 x 10<sup>19</sup>

1 Schijf per dag

\# jaar = 5,05 x 10<sup>16</sup> jaar

leeftijd aarde = 4,5 x 10<sup>19</sup> jaar

1 schijf per seconde

\# jaar = 5,85 x 10<sup>11</sup> jaar

leeftijd universum = 13,8 x 10<sup>9</sup> jaar

### De rij van Fibonacci

F<sub>0</sub> = 1<br>
F<sub>1</sub> = 1<br>
F<sub>n</sub> = F<sub>n - 1</sub> + F<sub>n - 2</sub> als n ≥ 2

> Het volgende algoritme werkt maar is zeer traag.

```pascal
berekenFibRec(I: n: geheel getal): getal: geheel getal
    * Preconditie: n is een natuurlijk getal.
    * Postconditie: het n-de Fibonacci-getal werd geretourneerd.
    * Gebruikt: berekenFibRec
BEGIN
    ALS (n = 0 of n = 1) DAN
        getal <- 1
    ANDERS
        getal <- berekenFibRec(n - 1) + berekenFibRec(n - 2)
    EINDE ALS
    RETOUR (getal)
EINDE
```
T(n) = T(n - 1) + T(n - 2) + &Theta;(1)<br>
T(n) ≥ (3/2)<sup>n-2</sup> voor n ≥ 1

> Het volgende algoritme is veel sneller.

```pascal
berekenFibIter(I: n: geheel getal): getal: geheel getal
    * Preconditie: n is een natuurlijk getal.
    * Postconditie: het n-de Fibonacci-getal werd geretourneerd.
    * Gebruikt: /
BEGIN
    voorvorig <- 1
    vorig <- 1
    getal <- 1
    VOOR i = 2 TOT n
        getal <- voorvorig + vorig
        voorvorig <- vorig
        vorig <- getal
    EINDE VOOR
    RETOUR (getal)
EINDE
```

T(n) = &Theta;(n)


## Hoofdstuk 4

> Zoek- en sorteeralgoritmen

```pascal
zoekSequentieel(I: zoekGetal: geheel getal, rij: array[] van gehele getallen): index: geheel getal
    * Preconditie: rij is een array van lengte n van gehele getallen; zoekGetal is het te zoeken element in de array.
    * Postconditie: index geeft de waarde -1 als zoekGetal niet voorkomt in rij en de waarde van de index van zoekGetal in rij als zoekGetal wel voorkomt in de rij.
    * Gebruikt: /
BEGIN
    i <- 0
    // Volgorde is cruciaal (vals en iets anders is altijd vals bij een AND) => Short Circuit Evaluation
    ZOLANG (i < n) EN (rij[i] ≠ zoekGetal) DOE
        i <- i + 1 
    EINDE ZOLANG

    ALS (i = n) DAN
        index <- -1
    ANDERS
        index <- i
    EINDE ALS
    
    RETOUR (index)
EINDE
```

**Oefeing a)**

```pascal
rij = [1, 2, 3, 4, 6]
zoekGetal = 6
```

| i   | rij[i] | iteratievoorwaarde | 
| :-: | :----: | :----------------: |
| 0   | 1      | Waar               |
| 1   | 2      | Waar               |
| 2   | 3      | Waar               | 
| 3   | 4      | Waar               |
| 4   | 6      | Vals               |


```pascal
? i = n
<=> 4 = 5 -> Vals
    index <- i
    index <- 4
```

> &Theta;(n)

**Oefening b)**

```pascal
rij = [6, 4, 3, 2, 1]
zoekGetal = 6
```

| i   | rij[i] | iteratievoorwaarde | 
| :-: | :----: | :----------------: |
| 0   | 6      | Vals               |


```pascal
? i = n
<=> 0 = 5 -> Vals
    index <- i
    index <- 0
```

> Als je getal voorraan staat, maakt het niet uit hoe lang de rij is, je uitvoeringsstij is constant

**Oefening C)**

```pascal
rij = [1, 3, 6, 4, 2]
zoekGetal = 6
```

| i   | rij[i] | iteratievoorwaarde | 
| :-: | :----: | :----------------: |
| 0   | 1      | Waar               |
| 1   | 3      | Waar               |
| 2   | 6      | Vals               |

```pascal
? i = n
<=> 2 = 5 -> Vals
    index <- i
    index <- 2
```

**Oefening D)**

```pascal
rij = [0, 2, 4, 6, 8]
zoekGetal = 5
```

| i   | rij[i] | iteratievoorwaarde | 
| :-: | :----: | :----------------: |
| 0   | 0      | Waar               |
| 1   | 2      | Waar               |
| 2   | 4      | Waar               |
| 3   | 6      | Waar               |
| 4   | 8      | Waar               |
| 5   | &nbsp; | Vals               |

```pascal
? i = n
<=> 5 = 5 -> Waar
    index <- -1
```

### Gesorteerde rij

```pascal
zoekSequentieelGesorteerd(I: zoekGetal: geheel getal, rij: array[] van gehele getallen): index: geheel getal
    * Preconditie: rij is een gesorteere array van lengte n van gehele getallen; zoekGetal is het te zoeken element in de array.
    * Postconditie: index geeft de waarde -1 als zoekGetal niet voorkomt in rij en de waarde van de index van zoekGetal in rij als zoekGetal wel voorkomt in de rij.
    * Gebruikt: /
BEGIN
    i <- 0
    ZOLANG (i < n) EN (rij[i] < zoekGetal) DOE
        i <- i + 1 
    EINDE ZOLANG

    ALS (i = n) OF (rij[i] > zoekGetal) DAN
        index <- -1
    ANDERS
        index <- i
    EINDE ALS
    
    RETOUR (index)
EINDE
```

**Oefening a)**


```pascal
rij = [1, 3, 5, 7, 9]
zoekGetal = 1
```

| i   | rij[i] | iteratievoorwaarde | 
| :-: | :----: | :----------------: |
| 0   | 1      | Vals               |

```pascal
? (i = n) OF (rij[i] > zoekGetal)
<=> (0 = 5) OF (1 > 1 ) -> Vals
    index <- i
    index <- 0
```

**Oefening b)**


```pascal
rij = [1, 3, 5, 7, 9]
zoekGetal = 6
```

| i   | rij[i] | iteratievoorwaarde | 
| :-: | :----: | :----------------: |
| 0   | 1      | Waar               |
| 1   | 3      | Waar               |
| 2   | 5      | Waar               |
| 3   | 7      | Vals               |

```pascal
? (i = n) OF (rij[i] > zoekGetal)
<=> (3 = 5) OF (7 > 6 ) -> Waar
    index <- -1
```