## Probleem Oplossend Denken I

## Hoofdstuk 1

* De sequentie
* De Selectie
* De Iteratie

**Algoritme: De Sequentie**

---

```pseudocode
opdracht 1
opdracht 2
opdracht n
```

Voorbeeld: **Algoritme** Bereken BMI

```pseudocode
VOERUIT(scherm, "geef lengte in meter: ")
VOERIN(klavier, lengte)
VOERUIT(scherm, "geef gewicht in kilo: ")
VOERIN(klavier, gewicht)
bodyMassIndex <- gewicht/(lengte . lengte)
RETOUR bodyMassIndex
```

**Algoritme: De Selectie**

---

```pseudocode
ALS voorwaarde DAN
	component1
ANDERS
	component2
EINDE ALS
```

**De eenzijdige Selectie:**

```pseudocode
ALS voorwaarde DAN
	component1
EINDE ALS
```

Voorbeeld: **Algoritme** Evalueer BMI.

```pseudocode
VOERUIT(scherm, "Geef BMI:")
VOERIN(klavier, bodyMassIndex)
ALS ((18,5 <= bodyMassIndex) EN (bodyMassIndex <= 25)) DAN
	VOERUIT(scherm, "Gezond")
ANDERS
	VOERUIT(scherm, "Risico")
EINDE ALS
```

**De Geneste selectiestructuur:**

```pseudocode
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

```pseudocode
ZOLANG iteratievoorwaarde DOE
	iteratiecomponent
EINDE ZOLANG
```

> Er is geen do-while lus!

Voorbeeld: **Algoritme** Som van de eerste 10 strikt positieve gehele getallen.

Via `while` lus.

```pseudocode
i <- 1
som <- 0
ZOLANG i <= 10 DOE
	som <- som + i
	i <- i + 1
EINDE ZOLANG
VOERUIT(scherm, "som = " som)
```
Alternatief (for-loop):

> `i` moet niet verhoogd worden in deze lus.

```pseudocode
som <- 0
VOOR i = 1 TOT 10 DOE
	som <- som + i
EINDE VOOR
VOERUIT(scherm, "som = " som)
```

Met Stappen:

```pseudocode
som <- 0
VOOR i = 1 TOT 10 STAP 2 DOE
	som <- som + i
EINDE VOOR
VOERUIT(scherm, "som = " som)
```

### Methodes

**Sjabloon**

```pseudoCode
naamAlgoritme (I: ...): ...
	* Preconditie: ...
	* Postconditie: ...
	* Gebruikt: ...
BEGIN
	1: ...
EINDE
```

```pseudocode
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
