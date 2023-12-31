// ========== Math-Level-1_1 ========

// In dieser Übung lernst du das Math.PI Object kennen.
// Zeige in der Konsole Math.PI.
// Deklariere die const PI mit dem passenden Wert.
// Runde den Wert von PI auf zwei Dezimalstellen und weise den Wert der Variablen roundedPI zu.
// Gib roundedPI in der Konsole aus.

console.log(Math.PI);

const PI = Math.PI;
const roundedPI = PI.toFixed(2);

console.log(roundedPI);

// ========== Math-Level-1_1 ========

// In dieser Übung werden wir Math.round() kennenlernen.
// Schreibe eine Funktion, die eine Zahl rundet.
// Verwende die Zahlen aus dem Kommentar.
// Gib das Ergebnis in der Konsole aus.

let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

const roundIt = () => {
  array.map((elt) => {
    let roundedNumber = Math.round(elt);
    console.log(roundedNumber);
  });
};

roundIt();

// ========== Math-Level-1_3 ========

// In dieser Übung geht es um Math.random() und Math.floor().
// Deklariere die Variable randomNum und und gebe darin eine zufällige Nummer aus.
// Deklariere die Variable randomNum1_10 und gebe darin eine zufällige Nummer zwischen 1 und 10 aus.
// Deklariere die Variable randomNum1_100 und gebe darin eine zufällige Nummer zwischen 1 und 100 aus.

const randomNum = Math.random();
console.log(randomNum);

const randomNum1_10 = Math.random() * 11;
console.log(randomNum1_10);

const randomNum1_100 = Math.random() * 101;
console.log(randomNum1_100);

// ========== Math-Level-1_4 ========

// In dieser Übung lernst du Math.min und Math.max kennen.
// Finde mit Math.min den niedrigsten Wert aus den Zahlen im Code-Snippet.
// Finde nun mit Math.max den höchsten Wert aus den Zahlen im Code-Snippet.

console.log(
  Math.min(
    393,
    205,
    479,
    47,
    376,
    267,
    385,
    2,
    190,
    383,
    286,
    462,
    115,
    138,
    331,
    409,
    427,
    245,
    224,
    276,
    483,
    55,
    147,
    177,
    208,
    347,
    135,
    282,
    33,
    270,
    475,
    426,
    476,
    453,
    474,
    351,
    219,
    358,
    354,
    410,
    240,
    139,
    371,
    356,
    277,
    202,
    264,
    204,
    447,
    488
  )
);

console.log(
  Math.max(
    393,
    205,
    479,
    47,
    376,
    267,
    385,
    2,
    190,
    383,
    286,
    462,
    115,
    138,
    331,
    409,
    427,
    245,
    224,
    276,
    483,
    55,
    147,
    177,
    208,
    347,
    135,
    282,
    33,
    270,
    475,
    426,
    476,
    453,
    474,
    351,
    219,
    358,
    354,
    410,
    240,
    139,
    371,
    356,
    277,
    202,
    264,
    204,
    447,
    488
  )
);

// ========== Math-Level-1_4 ========

// Lernziel: Verwendung von math-Methoden, um Zahlen zu runden.
// Erstell eine Function roundTo(Zahl, Genauigkeit){...}, die eine Zahl auf genaue Dezimalstellen rundet. So können die User:innen selber bestimmen, auf wie viele Nachkommastellen sie runden möchten.
// Um es zu testen, schreibe: console.log(roundTo(3.1415926535, 5)); // 3.14159

const roundTo = (zahl, genauigkeit) => {
  return zahl.toFixed(genauigkeit);
};

console.log(roundTo(3.1415926535, 5)); // 3.14159

// ========== lev2_2: Math.random() Math.floor() Game ========

// Schreibe ein kleines Spiel/Programm – das wie folgt funktioniert:

// Das Programm “denkt”  sich eine Zahl zwischen 1-10 mithilfe von Math.Random aus und Du musst sie erraten.
// Nach Eingabe deiner Zahl sagt dir das Programm (in der Konsole), ob du richtig oder falsch geraten hast.

// Hinweis: In der Ergebnisvorschau wird die Methode prompt() verwendet.

const game = () => {
  let randomNumGame = (Math.random() * 11).toFixed();

  const userInput = window.prompt("Errate eine Zahl zwischen 1 und 10");

  if (randomNumGame == userInput) {
    console.log(`Das stimmt die Zahl war ${randomNumGame}`);
  } else {
    console.log(`Das stimmt nicht die Zahl war ${randomNumGame}`);
  }
};

game();
