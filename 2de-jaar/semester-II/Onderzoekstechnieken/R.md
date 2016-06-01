---
title: Onderzoekstechnieken - R
link: http://robinmalfait.com/2de-jaar/semester-II/Onderzoekstechnieken/R.md
---

```R
# CLEAR
rm(list = ls()) # Clear the workspace environment
cat("\014")     # Clear the screen

# Example Data Set
example <- c(1, 5, 4, 8, 9, 9, 7, 6, 5, 3, 2, 4, 5, 6, 1, 2, 10, 9, 8, 7, 3, 15)

## Loading files...
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

# Centrummaten
## 2.2. Gemiddelde
mean(example)

## 2.3. Mediaan
median(example)

## 2.4. Modus
modus <- function(x) {
  ux <- unique(x)
  ux[which.max(tabulate(match(x, ux)))]
}
modus(example)

# Spreidingsmaten
## 2.5a.Range
range(example)

## 2.5b. Bereik
abs(max(example) - min(example))

## 2.6a. Kwartielen
kwartielen <- quantile(example)

### Q1
kwartielen[2]

### Q2
kwartielen[3]

### Q3
kwartielen[4]

### Q4
kwartielen[5]

## 2.6b. (Inter)kwartielafstand
IQR(example) # Inter Quartile Range: Q3 - Q1

## 2.7. Variantie & Standaardafwijking

### Variantie - Populatie: n
variantiePopulatie <- function(data) {
  n <- length(data)
  mu <- mean(data)
  sigmaKwadraat = 0

  for (xi in data) {
    sigmaKwadraat <- sigmaKwadraat + ((mu - xi)^2)
  }

  return(sigmaKwadraat * (1 / n))
}

variantiePopulatie(example)

### Variantie - Steekproef: n-1
variantieSteekproef <- function(data) {
  n <- length(data)
  mu <- mean(data)
  sigmaKwadraat = 0

  for (xi in data) {
    sigmaKwadraat <- sigmaKwadraat + ((mu - xi)^2)
  }

  return(sigmaKwadraat * (1 / (n - 1)))
}

variantieSteekproef(example)
var(example)

### Standaardafwijking - Populatie
standaardafwijkingPopulatie <- function(data) {
  return(sqrt(variantiePopulatie(data)))
}

standaardafwijkingPopulatie(example)

### Standaardafwijking - Steekproef
standaardafwijkingSteekproef <- function(data) {
  return(sqrt(variantieSteekproef(data)))
}

standaardafwijkingSteekproef(example)
sd(example)

## Percenteren
### Hoeveel percent is x van y
xOfY <- function(x, y) {
  return(100*(x/y))
}

xOfY(10, 100) # 10 van 100 = 10%
xOfY(10, 20)  # 10 van  20 = 50%

### Om te weten hoeveel x% is van y
percentOf <- function(x, y) {
  return((x * y) / 100)
}

percentOf(10, 100) # 10% van 100 = 10
percentOf(50, 20)  # 50% van  20 = 10

## 3.1. Chi-kwadraat
chiKwadraat <- function(data) {
  chiSquared = chisq.test(data, simulate.p.value = TRUE)
  return(unname(chiSquared$statistic))
}

## 3.2. Kruistabellen en Cramér's V
cramersV <- function(data) {
  n <- sum(data)                   # Het aantal waarnemingen, in dit geval een som van alle gegevens
  k <- min(nrow(data), ncol(data)) # De kleinste waarde van het aantal kolommen of het anatal rijen van de tabel.
  chiSqrd <- chiKwadraat(data)     # De berekende chi-kwadraatwaarde.

  result <- sqrt(chiSqrd / (n * (k - 1)))

  grens <- function(min, max) {
    return(max + ((max - min) / 2))
  }

  # V =  0     geen samenhang
  # V ~= 0,1   zwakke samenhang
  # V ~= 0,25  redelijk sterke samenhang
  # V ~= 0,50  sterke samenhang
  # V ~= 0,75  zeer sterke samenhang
  # V =  1     volledige samenhang

  if (result == 0) {
    print("geen samenhang")
  } else if (result == 1) {
    print("volledige samenhang")
  } else if (result <= grens(0, 0.1)) {
    print("zwakke samenhang")
  } else if (result <= grens(0.1, 0.25)) {
    print("redelijk sterke samenhang")
  } else if (result <= grens(0.25, 0.50)) {
    print("sterke samenhang")
  } else if (result <= grens(0.50, 0.75)) {
    print("zeer sterke samenhang")
  }

  return(result)
}

## 3.3. Regressie
regression <- function(data) {
  print("Data:")
  print(data)

  # Met x & y werken is "simpeler"
  print("Step 1: Rename columns")
  names(data)[1] <- "x"
  names(data)[2] <- "y"
  print(data)

  print("Step 2: calculate average of first column")
  xBar <- mean(data[[1]])
  print(xBar)

  print("Step 3: add new column x - xBar")
  xMinusXBar <- data[1] - xBar
  data["x-xBar"] <- xMinusXBar
  print(data)

  print("Step 4: calculate average of second column")
  yBar <- mean(data[[2]])
  print(yBar)

  print("Step 5: add new column y - yBar")
  yMinusYBar <- data[2] - yBar
  data["y-yBar"] <- yMinusYBar
  print(data)

  print("Step 6: add new column (x - xBar)*(y - yBar)")
  b1Top <- xMinusXBar * yMinusYBar
  data["(x - xBar)(y - yBar)"] <- b1Top
  print(data)
  b1Top <- sum(b1Top)

  print("Step 7: add new column (x - xBar)^2")
  b1Bottom <- xMinusXBar * xMinusXBar
  data["(x - xBar)^2"] <- b1Bottom
  print(data)
  b1Bottom <- sum(b1Bottom)

  print("Step 8: B1 = ")
  b1 <- b1Top/b1Bottom
  print(b1)

  print("Step 9: B0 = ")
  b0 <- yBar - (b1 * xBar)
  print(b0)
}

regression(example3)
lsfit(example3$eiwitgehalte, example3$gewichtstoenamem)

## 3.4. Correlatie
### 3.4.1. Pearsons product-momentcorrelatiecoëfficiënt

### 3.4.2. Determinatiecoëfficiënt
covarianceSteekproef <- function(x, y) {
  n <- mean(c(length(x), length(y))) - 1

  xBar <- mean(x)
  yBar <- mean(y)

  return(sum((x - xBar) * (y - yBar)) / n)
}

covariancePopulatie <- function(x, y) {
  n <- mean(c(length(x), length(y)))

  xBar <- mean(x)
  yBar <- mean(y)

  return(sum((x - xBar) * (y - yBar)) / n)
}

#### Gemiddelde afwijking per meetpunt
covarianceSteekproef(example3$eiwitgehalte, example3$gewichtstoenamem)
cov(example3$eiwitgehalte, example3$gewichtstoenamem)
covariancePopulatie(example3$eiwitgehalte, example3$gewichtstoenamem)

r <- function(x, y) {
  top <- covarianceSteekproef(x, y)
  bottom <- standaardafwijkingSteekproef(x) * standaardafwijkingSteekproef(y)

  return(top / bottom)
}

r(example3$eiwitgehalte, example3$gewichtstoenamem)
cor(example3$eiwitgehalte, example3$gewichtstoenamem)

#### R^2 Interpretatie
SSyy <- function(data) {
  res <- data - mean(data)
  res <- res ^ 2

  return(sum(res))
}

SSyy(example3$eiwitgehalte)

## 4.4. De normale verdeling

dnorm(5, 1.5)

### 4.4.1. De standaardnormale verdeling

print("De standaardnormale verdeling: Z ~ N(0,1)")

zScore <- function(x, mean, sd) {
  return((x - mean) / sd)
}

zValue <- function(zScore) {
  return(pnorm(zScore))
}

oef41 <- zValue(zScore(4, 5, 1.5)) # Oefening 4.1. Pagina 39
oef42 <- zValue(zScore(7, 5, 1.5)) # Oefening 4.2. Pagina 39
oef43 <- zValue(zScore(3, 5, 1.5)) # Oefening 4.3. Pagina 40
oef44 <- zValue(zScore(6.5, 5, 1.5)) - zValue(zScore(2, 5, 1.5)) # Oefening 4.4. Pagina 40

print(oef41)
print(oef42)
print(oef43)
print(oef44)

# Deze z-scores opzoeken in de tabel of via pnorm (geeft lichtelijke verschillen)!

### 4.5.1. Centrale Limietstelling
# M ~ N(xBar, sigma / sqrt(n))
centraleLimietStelling <- function(n, sigma) {
  return(sigma / sqrt(n))
}

n <- 100
xBar <- 90
sigma <- 60

x <- 104

zValue(zScore(x, xBar, centraleLimietStelling(n, sigma)))
```
