// Esta función toma una cadena de entrada y un número de clave y encripta la cadena utilizando el cifrado de rotación.
function rotationalCipher(input: string, key: number): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // Creamos una cadena que contiene todas las letras del alfabeto
  let output = ''; // Creamos una cadena vacía que contendrá el resultado cifrado

  for (let i = 0; i < input.length; i++) { // Iteramos a través de cada carácter de la entrada
    const char = input[i]; // Obtenemos el carácter actual
    let index = alphabet.indexOf(char.toLowerCase()); // Obtenemos el índice del carácter en la cadena del alfabeto

    if (index !== -1) { // Si el carácter es una letra del alfabeto
      const newIndex = (index + key) % alphabet.length; // Calculamos el nuevo índice utilizando el cifrado de rotación
      const newChar = alphabet[newIndex]; // Obtenemos el nuevo carácter

      output += char === char.toUpperCase() ? newChar.toUpperCase() : newChar; // Agregamos el nuevo carácter al resultado, manteniendo su mayúscula o minúscula original
    } else { // Si el carácter no es una letra del alfabeto
      output += char; // Simplemente agregamos el carácter al resultado sin cifrar
    }
  }

  return output; // Devolvemos la cadena cifrada
}

const input3 = 'omg'; // Definimos la entrada que queremos encriptar
const key6 = 5; // Definimos la clave de cifrado
const output1 = rotationalCipher(input3, key6); // Encriptamos el texto utilizando la función
console.log(output1); // Mostramos el resultado en consola
