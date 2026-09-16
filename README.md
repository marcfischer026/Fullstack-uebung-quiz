# Quiz-Projekt

> **Hinweis:** Da das Quiz über die drei Tage hinweg kontinuierlich weiterentwickelt wird, kann es vorkommen, dass einzelne Code-Blöcke aus vorherigen Tagen angepasst oder komplett ersetzt werden müssen (z. B. wenn statischer HTML-Inhalt an Tag 2 durch dynamisches JavaScript abgelöst wird).

---

## Tag 1

Willkommen bei Tag 1!

deine Aufgabe ist, eine Quiz-webseite mit einem Thema deiner Wahl zu erstellen, die die folgenden Elemente benutzt: 
- header
- listen 
- anchor-images
- hyperlinks
- tabellen
- hübschmachen mit css


hint: das `<summary>` element kann benutzt werden, um Text einzuklappen:

```html
<details>
  <summary>
    Warum?
  </summary>
  Darum.
</details>
```

---

## Tag 2

Willkommen bei Tag 2!

deine Aufgabe ist, dein Quiz von Tag 1 interaktiv zu machen: 
- Quelle für Fragen und Antworten ist ab jetzt eine JSON-Datei
- dynamisches Laden der Fragen und Antworten mit JavaScript
- automatische Wahr/Falsch-Anzeige beim Auswählen einer Antwort

hint: eine `fragen.json` könnte zum Beispiel so aufgebaut sein (nicht einfach so kopieren – mach dir gerne eigene Gedanken dazu):

```json
[
  {
    "frage": "Was bedeutet HTML?",
    "antworten": {
      "a": "HyperText Markup Language",
      "b": "HighText Machine Language"
    },
    "korrekt": "a"
  }
]
```

hint: mit `fetch()` kannst du deine JSON-Datei im JavaScript laden:

```javascript
fetch("fragen.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
```

---

## Tag 3

Willkommen bei Tag 3!

deine Aufgabe ist, dein Quiz von Tag 2 um Spiellogik und eine Auswertung zu erweitern: 
- Fragen nacheinander anzeigen (mit einem Index durch das Array navigieren)
- Punktestand mitzählen bei jeder richtigen Antwort
- Auswertung am Ende anzeigen (z. B. erreichte Punktzahl und Feedback anhand von Bedingungen)
- Quiz-Neustart ermöglichen (Zurücksetzen von Punkten und Anzeige)
- Bonus: Fragen vor Beginn zufällig mischen

Hints:
- Mit einem Index und einer Bedingung (`if`) kannst du prüfen, ob noch Fragen im Array übrig sind oder das Quiz beendet ist und die Auswertung angezeigt werden soll.
- Falls dir bei deinem Quiz-Thema vollkommen die Ideen für Fragen ausgehen, darfst du dir Fragen im JSON-Format auch von einem Sprachmodell generieren lassen – das JSON-Format musst du dem Modell dafür aber unbedingt selbst vorgeben!

---

Denk daran: du kannst deinen Fortschritt regelmäßig mit git speichern.
