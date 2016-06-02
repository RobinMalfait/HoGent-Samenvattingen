---
title: Onderzoekstechnieken - R
link: http://robinmalfait.com/2de-jaar/semester-II/Onderzoekstechnieken/R.md
---

```R
# CLEAR
cat("\014")     # Clear the screen

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

modus <- function(x) {
  ux <- unique(x)
  ux[which.max(tabulate(match(x, ux)))]
}

bereik <- function(data) {
  return(abs(max(data) - min(data)))
}

### Variantie - Populatie:
variantiePopulatie <- function(data) {
  n <- length(data)
  mu <- mean(data)
  sigmaKwadraat = 0

  for (xi in data) {
    sigmaKwadraat <- sigmaKwadraat + ((mu - xi)^2)
  }

  return(sigmaKwadraat * (1 / n))
}

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

### Variantie Coëfficiënt
variantieCoefficientSteekproef <- function(data) {
  return(standaardafwijkingSteekproef(data) / abs(mean(data)))
}

variantieCoefficientPopulatie <- function(data) {
  return(standaardafwijkingPopulatie(data) / abs(mean(data)))
}

### Standaardafwijking - Populatie
standaardafwijkingPopulatie <- function(data) {
  return(sqrt(variantiePopulatie(data)))
}

### Standaardafwijking - Steekproef
standaardafwijkingSteekproef <- function(data) {
  return(sqrt(variantieSteekproef(data)))
}

## Percenteren
### Hoeveel percent is x van y
xOfY <- function(x, y) {
  return(100*(x/y))
}

### Om te weten hoeveel x% is van y
percentOf <- function(x, y) {
  return((x * y) / 100)
}

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
regressieRechte <- function(val) {
  return(lm(val))
}

## 3.4. Correlatie
### 3.4.1. Pearsons product-momentcorrelatiecoëfficiënt

### 3.4.2. Determinatiecoëfficiënt
covarianceSteekproef <- function(x, y, output = TRUE) {
  n <- mean(c(length(x), length(y))) - 1

  xBar <- mean(x)
  yBar <- mean(y)

  res <- sum((x - xBar) * (y - yBar)) / n

  if (output == TRUE) {
    if (res > 0) {
      print("Covariantie: Stijgend verband")
    } else {
      print("Covariantie: Dalend verband")
    }
  }

  return(res)
}

covariancePopulatie <- function(x, y, output = TRUE) {
  n <- mean(c(length(x), length(y)))

  xBar <- mean(x)
  yBar <- mean(y)

  res <- sum((x - xBar) * (y - yBar)) / n

  if (output == TRUE) {
    if (res > 0) {
      print("Covariantie: Stijgend verband")
    } else {
      print("Covariantie: Dalend verband")
    }
  }

  return(res)
}

#### Gemiddelde afwijking per meetpunt

#### Correlatiecoefficient (cor) = R
correlatiecoefficient <- function(x, y) {
  top <- covarianceSteekproef(x, y, output = FALSE)
  bottom <- standaardafwijkingSteekproef(x) * standaardafwijkingSteekproef(y)

  return(top / bottom)
}

#### Determinatiecoefficient = R^2
determinatiecoefficient <- function(x, y) {
  return(correlatiecoefficient(x, y) ^ 2)
}

#### R^2 Interpretatie
SSyy <- function(data) {
  res <- data - mean(data)
  res <- res ^ 2

  return(sum(res))
}

### 4.4.1. De standaardnormale verdeling
zScore <- function(x, mean, sd) {
  return((x - mean) / sd)
}

zValue <- function(zScore) {
  return(pnorm(zScore))
}

### 4.5.1. Centrale Limietstelling
# M ~ N(xBar, sigma / sqrt(n))
centraleLimietStelling <- function(n, sigma) {
  return(sigma / sqrt(n))
}
```
