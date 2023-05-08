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



