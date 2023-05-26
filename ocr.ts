// Definición de cada número como una cadena de caracteres que representa su forma en un display de 3x3 dígitos
const ZERO = ' _ | ||_|';
const ONE = '     |  |';
const TWO = ' _  _||_ ';
const THREE = ' _  _| _|';
const FOUR = '   |_|  |';
const FIVE = ' _ |_  _|';
const SIX = ' _ |_ |_|';
const SEVEN = ' _   |  |';
const EIGHT = ' _ |_||_|';
const NINE = ' _ |_| _|';

// Mapeo de las cadenas de caracteres de cada número con su valor numérico correspondiente
const DIGIT_MAP: Record<string, string> = {
  [ZERO]: '0',
  [ONE]: '1',
  [TWO]: '2',
  [THREE]: '3',
  [FOUR]: '4',
  [FIVE]: '5',
  [SIX]: '6',
  [SEVEN]: '7',
  [EIGHT]: '8',
  [NINE]: '9',
};

/**
 * Función que toma una cadena de caracteres que representa varios números en formato de display de 3x3 dígitos
 * y los reconoce y devuelve como una cadena de caracteres numéricos.
 * @param input Cadena de caracteres que representa varios números en formato de display de 3x3 dígitos
 * @returns Cadena de caracteres que representa los números reconocidos en la entrada
 */
function recognizeNumbers(input: string): string {
  const lines = input.trim().split('\n');

  // Comprobación de que la entrada tiene un número múltiplo de 4 de líneas
  if (lines.length % 4 !== 0) {
    throw new Error('Número incorrecto de líneas');
  }

  let result = '';

  // Procesamiento de cada bloque de 4 líneas
  for (let i = 0; i < lines.length; i += 4) {
    const block = lines.slice(i, i + 4);

    // Comprobación de que cada línea en el bloque tiene la misma longitud
    if (block.some((line) => line.length !== block[0].length)) {
      throw new Error('Longitud de línea inconsistente');
    }

    let number = '';

    // Procesamiento de cada dígito en el bloque
    for (let j = 0; j < block[0].length; j += 3) {
      const digit = block.map((line) => line.slice(j, j + 3)).join('');

      if (digit in DIGIT_MAP) {
        number += DIGIT_MAP[digit];
      } else {
        number += '?';
      }
    }

    result += number;
  }

  return result;
}

// Ejemplo de uso de la función con una cadena de caracteres que representa varios números en formato de display de 3x3 dígitos
console.log(
  recognizeNumbers(`
 _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|
                           
   |  |  |  |  |  |  |  |  |
|_|  |  |  |  |  |  |  |  |
|_|  |  |  |  |  |  |  |  |
                           
 _  _  _  _  _  _  _  _  _
 `)
);
