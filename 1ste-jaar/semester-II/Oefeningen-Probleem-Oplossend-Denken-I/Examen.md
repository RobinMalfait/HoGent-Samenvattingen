# Voorbeeld Examen: Vragen/Oplossingen

## Oefening 1.C.

```pascal
BEGIN
    ALS k = 0 DAN
        RETOUR (a)
    ANDERS
        positie <- k
        max <- a[k]
        
        VOOR j = k - 1 TOT 0 STAP - 1 DOE
            ALS a[j] > max) DAN
                positie <- j
                max <- a[j]
            EINDE ALS
        EINDE VOOR
        a[positie] <- a[i]
        a[i] <- max
    EINDE ALS
    
    RETOUR selectionSortHulp(a, k - 1)
EINDE
```

## Oefening 2

**Push**

```pascal
 5
 10    5
 5     5
 7     7   
___   ___
 s     m
```

**Pop**

```pascal
 5     5
 7     7   
___   ___
 s     m
```

## Oefening 3

```pascal
BEGIN
    links <- eerste.volgende
    rechts <- laatste.vorige
    
    ZOLANG links ≠ rechts EN links ≠ rechts.volgende DOE
        tmp <- links.data
        links.data <- rechts.data
        rechts.data <- tmp
        
        links <- links.volgende
        rechts <- rechts.vorige
    EINDE ZOLANG
EINDE
```