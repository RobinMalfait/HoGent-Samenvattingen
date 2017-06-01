---
title: Future IT - Artificiële Intelligentie
link: http://robinmalfait.com/3de-jaar/semester-I/Future-IT-AI.md
---

[Chamilo](https://chamilo.hogent.be/index.php?application=Chamilo%5CApplication%5CWeblcms&go=CourseViewer&course=22883)

# 1. Rationale Agenten

## 1.1 Definities van Artificiële Intelligentie

<table>
    <tr>
        <th>Denken</th>
        <td>"[The automation of] activities that we associate with human thinking, activities such as decision-making, problem solvig, learning ..." (Bellman, 1978)</td>
        <td>"The study of the computations that make it possible to perceive, reason and act." (Winston, 1992)</td>
    </tr>
    <tr>
        <th>Handelen</th>
        <td>"The study of ho to make computers do things at which, at the moment, people are better." (Rich and Knight, 1991)</td>
        <td>"AI ... is concerned with intelligent behavior in artifacts" (Nilsson, 1998)</td>
    </tr>
    <tr class="text-center">
        <td></td>
        <th>Mensenlijk</th>
        <th>Rationaliteit</th>
    </tr>
</table>

### Menselijk handelen

> Turing-test is **op zich** niet zo interessant, het belang wel:

- PC moet natuurlijke taal beheersen
- PC moet kennis hebben "wat is een hond"
- PC moet zich aanpassen
- PC moet patronen herkennen

> Om de definitie "menselijk handelen" af te sluiten merken we op dat de betrachting om artificieel te vliegen ook maar goed gelukt is toen men afstapte van het imiteren van vogels en inzette op het bestuderen van de aerodynamica.

### Menselijk denken

Men wil aan de hand van een gedetailleerd model van de werking van het menselijk brein hard- en software gebruiken om dit artificieel te implementeren.

### Rationaal denken

Het domein van *logica* en *syllogismen**.

VB.:

- Alle mannen zijn sterfelijk.
- Socrates is een man.
- *Dus*: Socrates is sterfelijk.


#### Moeilijkheden

1. Veel informele kennis (veel uitzonderingen)
2. "In principe is het opgelost" (in theorie), maar niet in de praktijk

### Rationaal handelen

Het gebied waarbij men tracht om rationale agenten te bouwen en dit is de manier waarop AI nu meestal wordt opgevat.

> Het is niet altijd nodig om de juiste redenering te volgen. Bijvoorbeeld bij Reflexen, je denkt hier ook niet eerst over na wat de voor / nadelen zijn.

![](http://d.pr/i/OHSY+)

## 1.2 Rationale Agenten

> **Definitie** Een AGENT is elke entiteit die zijn *omgeving* kan waarnemen aan de hand van zijn *sensoren* en die invloed kan uitoefenen op zijn omgeving aan de hand van zijn *actuatoren*.

Mensen:
- Sensoren: Zien, Ruiken, Smaak, Voelen, ...
- Actuatoren: Handen, Voeten, Stem, ...

Robots:
- Sensoren: Lichtsensor, Temperatuursensor, ...
- Actuatoren: Wieltjes, Armen, Geluid, ...


Op elk moment krijgt de agent één enkele waarneming binnen. Na verloop van tijd verzamelt de agent (conceptueel) een WAARNEMINGSSEQUENTIE en het is de taak van de agent om, voor elke mogelijke waarnemingssequentie te reageren met de "juiste" actie.

> **Definitie** De AGENTFUNCTIE is het mappen van waarnemingen naar acties.

<br/>

> **Definitie** Eeen PERFORMANTIEMAAT evalueert sequenties van (omgevings)toestanden. De performantiemaat kan (en zal) voor elke applicatie verschillend zijn. Het opstellen van een goede performantiemaat is echter niet zo eenvoudig als het lijkt.

Bijvoorbeeld: "We geven de stofzuiger 1 punten per hoeveelheid opgezogen vuil"

-> Niet goed want een agent kan zijn punten maximaliseren door het vuil op te zuigen, een punt te krijgen, het te dumpen en opnieuw op te zuigen. Je beloond gedrag ipv de gevolgen van zijn acties.

Wat rationaal is op een bepaald moment hangt in het algemeen af van de volgende vier factoren:

1. De performantiemaat die het succescriterium
2. De ingebouwde kennis van de agent betreffende de omgeving.
3. De acties die de agent kan ondernemen
4. De huidige waarnemingssequentie.

> **Definitie** Een RATIONALE AGENT selecteert, voor elke mogelijke waarnemingssequentie, die actie *waarvan verwacht* wordt dat deze zijn performantiemaat *maximaliseert*, rekening houdend met het bewijs aangebracht door de uidige waarnemingssequentie en de eventuele ingebouwde kennis van de agent.


## 1.3 Eigenschappen van Omgevingen

| makkelijker            | vs  | moeilijker                                 |
| ---------------------- | :-: | ------------------------------------------ |
| Compleet observeerbaar <br><small>BV. Je ziet alles</small> | vs | Partieel observeerbaar <br><small>Je ziet bijvoorbeeld niet alle kaarten bij een poker spel</small> |
| Eenpersoons | vs | Multipersoons <br><small>Cooperatief (samenwerken) of Competitief (tegenwerken)</small> |
| Deterministisch <br><small>Je kan de nieuwe state berekenen = `state = fn(currentState, action)`</small> | vs | Stochastisch <br> <small>Je weet de huidige toestand en actie, maar niet altijd de nieuwe omgeving. Gooien met een dobbelsteen, je weet wat je doet, maar je weet de uitkomst niet.</small>|
| Episodisch <br><small>Wat er gebeurd in 1 episode is **onafhankelijk** van de andere.</small> | vs | Sequentieel <br><small>Wat er gebeurd in 1 episode is **afhankelijk** van de andere.</small>|
| Statisch <br> <small>Een omgeving die niet verandert **terwijl de agent nadenkt** over de volgende actie</small>| vs | Dynamisch <br> <small>Omgeving die verandert terwijl de agent nadenkt.</small>|
| Discreet<br><small>Een eindig aantal stappen</small>| vs | Continue<br><small>Een oneindig aantal stappen</small>|
