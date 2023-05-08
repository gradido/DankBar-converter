# DankBar-converter
DankBar to GDD converter
Ein Service der Gradido Academie [https://gradido.net]

Vue3, Vite, Vuetify

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/1324583/236632068-0d77e81e-3423-4037-a334-97aebb17e55b.gif)

Demo: https://gradido.github.io/DankBar-converter/

# Workflow

  - $ git clone https://github.com/gradido/DankBar-converter.git
  - $ cd DankBar-converter
  - $ yarn
  - $ yarn dev

  build
  - $ yarn build


# DankBar zu Gradido Umrechner

## Faktor Berechnung
https://github.com/gradido/DankBar-converter/blob/master/src/components/Converter.vue

### Faktor Formel

Wenn wir, am 7. Mai 2023, den Code ausführen, würde der Wert von faktor1() den Wert von Math.pow(0.998098, this.tag) haben, wobei this.tag die Anzahl der Tage seit dem 1. Januar 2023 ist.

Die Anzahl der Tage seit dem 1. Januar 2023 bis zum heutigen Tag (7. Mai 2023) beträgt 126 Tage. Daher wäre der Wert von faktor1():

Math.pow(0.998098, 126) = 0.6785977265658498
Also wäre der aktuelle Wert von faktor1() ungefähr 0.6786 (auf vier Nachkommastellen gerundet).  

 


### this.tag
```
this.tag = 

            const start = new Date(this.year, 0, 1)
            const v1 = this.now - start
            const v2 = start.getTimezoneOffset() - this.now.getTimezoneOffset()
            const diff =  v1 + (v2 * 60 * 1000)
            return Math.floor(diff / (1000 * 60 * 60 * 24))
```
**const start = new Date(this.year, 0, 1)**
Hier wird ein neues Datum-Objekt erstellt, das den 1. Januar des Jahres enthält, das in der Variable "this.year" gespeichert ist. Der Monat wird mit 0 angegeben, da JavaScript die Monate von 0 bis 11 zählt.

**const v1 = this.now - start**
Hier wird die Zeitdauer zwischen dem 1. Januar des aktuellen Jahres und dem aktuellen Datum und Uhrzeit berechnet und in der Variablen "v1" gespeichert. Die Subtraktion der beiden Datum-Objekte ergibt die Differenz in Millisekunden.

**const v2 = start.getTimezoneOffset() - this.now.getTimezoneOffset()**
Hier wird die Differenz zwischen der Zeitzone des 1. Januar des aktuellen Jahres und der Zeitzone des aktuellen Datums berechnet und in der Variablen "v2" gespeichert. getTimezoneOffset() gibt die Differenz in Minuten zwischen der Ortszeit und der UTC-Zeit zurück.

**const diff =  v1 + (v2 * 60 * 1000)**
Hier wird die Gesamtdifferenz in Millisekunden zwischen dem 1. Januar des aktuellen Jahres und dem aktuellen Datum berechnet, indem die Differenz in Millisekunden zwischen dem 1. Januar und dem aktuellen Datum (v1) und die Differenz in Minuten zwischen den beiden Zeitzonen (v2) multipliziert mit 60 (für Minuten) und 1000 (für Millisekunden) addiert werden.

**return Math.floor(diff / (1000 * 60 * 60 * 24))**
Hier wird die Gesamtdifferenz in Millisekunden in die Anzahl der vergangenen Tage seit dem 1. Januar des aktuellen Jahres umgewandelt, indem die Differenz in Millisekunden durch die Anzahl der Millisekunden pro Tag (1000 * 60 * 60 * 24) geteilt und auf den nächstniedrigeren ganzzahligen Wert abgerundet wird. Das Ergebnis wird zurückgegeben.

diese ganzen werte ergeben this.tag
dadurch lässt sich der faktor1  ausrechnen :

### faktor1

 faktor1() {
            return  Math.pow(0.998098, this.tag)
        },



# GDD - Berechnung der monatlichen Vergänglichkeit und Zeitmenge


## Daten

Das System stabilisiert sich automatisch auf die Zeitmenge, bei der die monatliche Schöpfung und die monatliche Vergänglichkeit gleich sind:

- Vergänglichkeit im Monat: 5,61%
- Dreisatz zur Berechnung der Pro-Kopf-Zeitmenge: 5,61% sind gleich 3.000 GDD / 1000 GDD

Die Tabelle enthält die folgenden Daten:

| Monat | Stand | Abbuchung vom Vormonat | Differenz zum Monatsbeginn | Pro-Kopf-GDD |
| --- | --- | --- | --- | --- |
| 0 | 100,00 | 5,61 | 0 | 1000,00 |
| 1 | 94,39 | 5,30 | -5,61 | 1052,63 |
| 2 | 89,09 | 5,00 | -10,91 | 1111,11 |
| 3 | 84,10 | 4,72 | -15,90 | 1176,47 |
| 4 | 79,38 | 4,45 | -20,62 | 1250,00 |
| 5 | 74,93 | 4,20 | -25,07 | 1333,33 |
| 6 | 70,72 | 3,97 | -29,28 | 1428,57 |
| 7 | 66,75 | 3,74 | -33,25 | 1515,15 |
| 8 | 63,01 | 3,53 | -36,99 | 1587,30 |
| 9 | 59,47 | 3,34 | -40,53 | 1666,67 |
| 10 | 56,14 | 3,15 | -43,86 | 1785,71 |
| 11 | 52,99 | 2,97 | -47,01 | 1886,79 |
| 12 | 50,02 | N/A | -50,00 | 2000,00 |

### Berechnung der Vergänglichkeit von GDD pro Tag

Zusätzlich zur monatlichen Vergänglichkeit ist auch die Berechnung der Vergänglichkeit pro Tag relevant. Die Daten lauten wie folgt:

- Vergänglichkeit pro Monat: 5,61%
- tage pro Monat: 30,5
- Vergänglichkeit pro Tag (linear): 0,184%

Die Tabelle zur Berechnung der Vergänglichkeit pro Tag enthält die folgenden Daten:

| Tag | Stand | Abbuchung vom Vortag | Differenz zum Monatsbeginn |
| --- | --- | --- | --- |
| 0 | 100,00 | 0,18500 | 0 |
| 1 | 99,82 | 0,18466 | 0,19 |
| 2 | 99,63 | 0,18432 | 0,37 |
| 3 | 99,45 | 0,18398 | 0,55 |
| 4 | 99,26 | 0,18363 | 0,74 |
| 5 | 99,08 | 0,18330
