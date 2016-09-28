---
title: Native Apps II (iOS)
link: http://robinmalfait.com/3de-jaar/semester-I/Native-Apps-II-IOS.md
---

# Inleiding Swift

## Variabelen & Types

```swift
// Variabelen
var sum = 0
var average: Double

let firstName = "Robin" // Constanten

firstName
print(firstName)

// Types
// Int, Double
let answer = 42

let formatted = 1_000_000_000
let hex = 0xCAFE_BABE
let binary = 0b10011101

let pi = 3.1415
let sciency = 1e3
let hexSciency = 0xC2p10

var a = 3
var b = 2
var c = 1

var x = 3.0
var y = 2.0
var z = 1.2

a + b
a - b
a * b
a / b // 2 ints delen door elkaar is ook een int (met afkapping)

x + y
x - y
x * y
x / y

a % b // Enkel voor 2 ints
x.truncatingRemainder(dividingBy: y) // Voor Doubles

a + (b * c) // Wiskunde regels, haakjes zijn beter voor leesbaarheid

Double(a) + z // Je kan enkel zelfde types optellen
a + Int(z) // Is geen casting, is een constructor van een klasse

a + 3 // Deze mag omdat 3, 3 is en geen variabele
x + 3

x += y
x -= y
x *= y
x /= y

Double.pi
y * .pi // y is double, dus Double.pi

import Foundation // Voor andere functies
sin(3.0)
M_PI // Pi van C bibliotheken
sqrt(4.0)

// Bool
let earthIsround = true

let t = true
let f = false

t && f // && heeft voorrang op ||
t || f
!t
!f

let aa = 4
let bb = 5

// Equatable
aa == bb
aa != bb

// Comparable

aa < bb
aa > bb
aa <= bb
aa >= bb


// String
let reaction = "We ❤️ Swift"
let lastName = "Malfait"

firstName + " " + lastName

let lat = 4
let long = 2

let message = "Hello \(firstName), your loncation is (x: \(lat), y: \(long))" // String interpolatie
message.characters.count // Lengte van string
message.hasPrefix("Hello") // Predicate: functie met parameter die een boolean teruggeeft

firstName == lastName
firstName > lastName

// Character
let heart: Character = "❤️"
```

## Controlestructuren

```swift
// Controlestructuren

// Selectiestructuren
let score = 12
if score > 14 {
    print("Good job")
} else if score > 10 {
    print("You passed")
} else {
    print("You failed")
}

let result = score > 10 ? "You passed" : "You failed"

switch score {
case 0...9: // 0 tot en met 9
    print("You failed")
    fallthrough // Doorvallen, break is default
case 10..<14: // 10 tot 14 (zonder 14)
    print("You passed")
case 14, 15, 16, 17, 18, 19, 20: // Mag met comma seperated zijn
    print("Good job")
default: // default: break kan ook want elke case moet iets hebben
    print("Did not participate")
}

/**
 Intervallen:

 x...y [x, y]
 x..<y [x, y[
 */

switch score {
case let result where result < 10: // Lange vorm "binding" -> "let result" dan voorwaarde "where result < 10"; voorwaarde is optioneel
    print("something")
case _ where score < 10: // Korte vorm, _ is whatever
    print("nice")
case _ where score >= 14:
    print("blub")
default:
    break
}

// Iteratiestructuren

// while, repeat-while, for-in

var solved = false
while !solved {
    // ...
    solved = true
}

solved = false
repeat {
    // ...
    solved = true
} while !solved

for index in 1...10 { // Geen interval (continue) maar een range (discreet) range heeft stappen van 1
    print(index)
}

for index in (1...10).reversed() { // van groot naar klein
    print(index)
}

// Strides
for index in stride(from: 1, to: 10, by: 2) {
    print(index)
}
for index in stride(from: 0, through: 10, by: 2) {
    print(index)
}
for index in stride(from: 10, through: 0, by: -2) {
    print(index)
}
for index in stride(from: 1, to: 10, by: 2) where index % 3 != 0 {
    print(index)
}

// break continue
```

## Functies

```swift
// Functies

func sayHello () {
    print("Hello")
}

sayHello()

func greet (person: String) {
    print("Hello: \(person)")
}

greet(person: "Robin")

func sayHello (to person: String) { // to is argument label, person is interne parameter naam
    print("Hello: \(person)")
}

sayHello(to: "Robin")

// functions die iets doen (met sideeffects: print) hebben werkwoorden

func maximum (_ a: Double, _ b: Double) -> Double {
    return a > b ? a : b
}

maximum(1, 3)

func greet2 (_ person: String, with greeting: String) {
    print("\(greeting), \(person)")
}

greet2("Robin", with: "Hi")

func greet3 (_ person: String, with greeting: String = "Jooow") {
    print("\(greeting), \(person)")
}

greet3("Robin")
greet3("Robin", with: "Ciao")

var xx = 3

func increment (_ number: inout Int) { // By reference inout
    number += 1
}

increment(&xx) // By reference
xx
```