---
title: Probleemoplossend denken II
---

# Deel 1: Kansrekening

> **Definitie:** Het UNIVERSUM of  de UITKOMSTENRUIMTE van een experiment is de verzameling van alle mogelijke uitkomsten van dit experiment en wordt genoteerd met Ω.

Opmerkingen:

- De uitkomstriumte moet *volledig* zijn: elke mogelijke uitkosmt van ee nexperiment moet tot Ω behoren.
- Bovendien moet elke uitkosmt van een experiment overeenkomen met *juist één* element van Ω.

Voorbeelden:

- Ω = {Kop, Munt}
- Ω = {(1, 1), (1, 2), ..., (6, 6)}

## Gebeurtenis

[Oefeningen](/2de-jaar/semester-II/ProbleemOplossendDenken/Oefeningen_Gebeurtenis.md)

> **Definitie:** Een GEBEURTENIS is een DEELVERZAMELING van de uitkomstenruimte. Een ENKELVOUDIGE of ELEMENTAIRE gebeurtenis is een singleton; een SAMENGESTELDE GEBEURTENIS heeft cardinaliteit groter dan 1.

- Ω is een opsomming van *alle* mogelijke uitkomsten van een experiment
- Bv.: bij viermaal gooien van een dobbelsteen is Ω = {1, 2, 3, 4, 5, 6}<sup>4</up>, maar Chevalier de Méré was enkel geïnteresseerd of er minstens één zes was gegooid.

- A **of** B: `A ∪ B`
- A **en** B: `A ∩ B`
- **niet** A: `A`

## Kansen en kansruimte

[Oefeningen](/2de-jaar/semester-II/ProbleemOplossendDenken/Oefeningen_KansenEnKansruimte.md)

> Het toekennen van kansen aan gebeurtenissen dient aan de volgende drie regels te voldoen
1. Kansen zijn steeds positief: P(A) ≥ 0 voor elke A
2. De uitkomstenruimte heeft kans 1: P(Ω) = 1.
3. Wanneer A en B disjuncte gebeurtenissen zijn dan is

    ```
    P(A ∪ B) = P(A) + P(B)
    ```

    Dit noemt men de SOMREGEL

Wanneer de functie P aan de bovenstaande eigenschappen (axioma's) voldoet dan noemt men het drietal (Ω, P(Ω), P) een KANSRUIMTE.

### Eigenschappen van kansen

Kansen voldoen aan de volgende eigenschappen:

1. Voor elke gebeurtenis A geldt dat P(Ā) = 1 - P(A)
2. De onmogelijke gebeurtens heeft kans nul: P(∅) = 0
3. Als A ⊆ B, dan is P(A) ≤ P(B); i.h.b geldt P(A) = P(B) - P(B \ A).

    Dit is een soort van verschilregel

4. De UITGEBREIDE SOMREGEL is:

    P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

### Eindig universum

- Als Ω eindig is, i.e. Ω = {ω1, ω2, ω3, ..., ωn}

- Formule van Laplace:

```
       #(A)
P(A) = ----
       #(Ω)
```

## Voorwaardelijke kansen

Stel A is de gebeurtenis "er is een inbraak aan de gang"

Stel B is de gebeurtenis "het alarm gaat af"

### Voorbeeld

Er wordt tweemaal gegooid met een eerlijke dobbelsteen. at is de waarschijnlijkheid dat de som avn beide ogen 7 of meer is als gegeven is dat de eerste worp een twee opleverde?

```
Ω = {(1, 2, 3, 4, 5, 6)}

A = {(a, b) | a + b ≥ 7 met a, b ∈ N en a,b ≤ 6}
B = {(2, j) | 1 ≤ j ≤ 6 en j ∈ N}

           #({(2, 5), (2, 6)})
           -------------------
           36
P(A | B) = -------------------
            6
            --
            36

         = 2 / 6

```

# Deel 2: Bomen en Grafen

# Deel 3: Operationeel Onderzoek
