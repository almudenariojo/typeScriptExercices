function calculateScrabbleScore(word: string): number {
    // Definimos los valores de las letras en Scrabble
  const letterValues: { [key: string]: number } = {
    "A": 1,
    "E": 1,
    "I": 1,
    "O": 1,
    "U": 1,
    "L": 1,
    "N": 1,
    "R": 1,
    "S": 1,
    "T": 1,
    "D": 2,
    "G": 2,
    "B": 3,
    "C": 3,
    "M": 3,
    "P": 3,
    "F": 4,
    "H": 4,
    "V": 4,
    "W": 4,
    "Y": 4,
    "K": 5,
    "J": 8,
    "X": 8,
    "Q": 10,
    "Z": 10,
  };
    
// Declaramos contador de aciertos
    let score: number = 0;
    
// Recorremos todas las letras de la palabra y calculamos el puntaje
  for (let i = 0; i < word.length; i++) {
    const letter = word.charAt(i).toUpperCase();
    const value = letterValues[letter];
      
// Si encontramos una letra válida, sumamos su valor al puntaje
    if (value) {
      score += value;
    }
// Si encontramos un carácter no válido, mostramos un mensaje de error y retornamos -1
    else {
      console.log("Hemos encontrado caracteres no válidos: " + letter);
      return -1; // Return -1 to indicate an error
    }
  }

  return score;
}

// Ejemplos:
console.log(calculateScrabbleScore("cabbage")); // Salida: 14
console.log(calculateScrabbleScore("!!42")); //  Salida: Hemos encontrado caracteres no válidos: I, -1
