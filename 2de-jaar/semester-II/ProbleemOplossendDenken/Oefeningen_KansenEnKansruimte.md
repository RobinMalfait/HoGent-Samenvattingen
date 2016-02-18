---
title: POD II - Oefeningen - kansen en kansruimte
---

```
       #(A)         (Aantal van uitkomst)
P(A) = ----
       #(Ω)         (Aantal van alles)
```

# Oefening 1

## Oefening 1.1

Wat is de kans op een even getal?

```
P(A) = 3 / 6
     = 0,5
```

## Oefening 1.2

Wat is de kans op een oneven getal?

```
P(A) = 3 / 6
     = 0,5
```

## Oefening 1.3

Wat is de kans op een priemgetal?

```
P(A) = 3 / 6
     = 0,5
```

# Oefening 2

Wat is de kans om met twee dobbelstenen meer dan acht te gooien?

```
Totaal: 36 want 6*6 = 36

P(A) = 10 / 36
     = 5 / 18
```

# Oefening 3

Een duistere urne bevat 6 blauwe en 4 rode bollen die verder identiek zijn. Men trekt één na één, twee bollen uit de urne met teruglegging van de getrokken bol. Wat is de kans dat men twee blauwe bollen heeft getrokken?

```
B = {1, ..., 6}
R = {7, ..., 10}

A = {(i, j) | i ∈ B, j ∈ B}

         6 * 6 = 36
P(A) = --------------- = 9/25
        10 * 10 = 100
```

# Oefening 4

Wat is de kans om bij de Belgische lotto zes juiste cijfers te hebben? Er zitten 45 ballen in de tromm en er worden er zes getrokken zonder teruglegging.

```
      45!
# Ω = ---
      39!

#A = 6!

       6!
P(A) = ---
       45!
       ---
       39!

P(A) = 0,000001273
```

# Oefening 5

Als huishoudens groepen mensen zijn die samenleven, dan vindt men voor de kansen op het aantal leden van een huishouden respectievelijk:

| Omvang | 1    | 2     | 3     | 4     | 5     | 6     | 7 of meer |
| -----: | :---: | :---: | :---: | :---: | :---: | :---: | :-------: |
| Kans   | 0,236 | 0,320 | 0,181 | 0,156 | 0,069 | 0,024 | 0,014     |

Het kleine aantal huishoudens met meer dan 7 leden werd samengevoegd in de laatste categorie. Wat is de kans dat er meer dan twee mensen in een huishouden zijn?

```
P(A) = 1 - 0,236 - 0,320 = 0,444
```

# Oefening 6

Een toegangscode tot een (amateurs) computersysteem bestaat uit drie letters die door een randomgenerator worden toegewezen.

## Oefening 6.1

Wat is de kans dat een code wordt toegewezen zonder letter x?

## Oefening 6.2

Wat is de kans dat een code wordt toegewezen waarvan alle letters verschillend zijn?
