//Paso 1 Cifrado de Caesar

function encode(str: string, shift: number): string {
  let result = ""; // variable para almacenar el resultado cifrado
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // sólo cifrar letras minúsculas
    if (char.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      // letras minúsculas en el rango ASCII 97-122
      // aplicar el desplazamiento para el cifrado
      code = (code - 97 + shift) % 26 + 97;
      char = String.fromCharCode(code);
    }
    result += char; // añadir el carácter cifrado al resultado
  }
  return result;
}

function decode(str: string, shift: number): string {
  // el descifrado es el cifrado con un desplazamiento negativo
  return encode(str, 26 - shift);
}

// Ejemplo:
const message = "iamapandabear";
const shift = 3;
const encodedMessage = encode(message, shift);
console.log(encodedMessage); // ldpdsdqgdehdu
const decodedMessage = decode(encodedMessage, shift);
console.log(decodedMessage); // iamapandabear

//Paso 2 

function substitutionCipher(text: string, key: string): string {
  // Definimos el alfabeto que vamos a usar para el cifrado
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = ''; // Variable para guardar el resultado del cifrado

  for (let i = 0; i < text.length; i++) { // Iteramos por cada carácter del texto
    const char = text[i]; // Obtenemos el carácter actual
    const index = alphabet.indexOf(char); // Obtenemos el índice del carácter en el alfabeto

    if (index === -1) { // Si el carácter no está en el alfabeto, lo añadimos tal cual al resultado
      result += char;
    } else { // Si el carácter está en el alfabeto, lo ciframos
      const keyIndex = alphabet.indexOf(key[i % key.length]); // Obtenemos el índice del carácter de la clave que corresponde al carácter actual del texto
      const encodedIndex = (index + keyIndex) % 26; // Sumamos los índices y hacemos módulo 26 para obtener el índice del carácter cifrado
      const encodedChar = alphabet[encodedIndex]; // Obtenemos el carácter cifrado correspondiente al índice calculado
      result += encodedChar; // Añadimos el carácter cifrado al resultado
    }
  }

  return result; // Devolvemos el resultado del cifrado
}

//Ejemplo con clave "aaaa":

const plaintext = 'iamapandabear';
const key = 'aaaa';
const ciphertext = substitutionCipher(plaintext, key);

console.log(`Plaintext: ${plaintext}`); // Mostramos el texto plano
console.log(`Key: ${key}`); // Mostramos la clave
console.log(`Ciphertext: ${ciphertext}`); // Mostramos el texto cifrado

//Ejemplo con clave "dddd":

const plaintext1 = 'iamapandabear';
const key1 = 'dddd';
const ciphertext1 = substitutionCipher(plaintext1, key1);

console.log(`Plaintext: ${plaintext1}`); // Mostramos el texto plano
console.log(`Key: ${key1}`); // Mostramos la clave
console.log(`Ciphertext: ${ciphertext1}`); // Mostramos el texto cifrado

//Paso 3 si alguien no mete clave, cifrado aleatorio

function subCipher(text: string, key?: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  // Si no se proporciona una clave, generar una clave aleatoria
  if (!key) {
    const randomKey = Array.from({ length: 100 }, () =>
      alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
    key = randomKey;
  }
  // Asegurarse de que la clave solo contenga letras minúsculas
    key = key.toLowerCase();
    console.log("La clave creada: " + key);

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const index = alphabet.indexOf(char);

    if (index === -1) {
      result += char;
    } else {
      const keyIndex = alphabet.indexOf(key[i % key.length]);
      const encodedIndex = (index + keyIndex) % 26;
      const encodedChar = alphabet[encodedIndex];
      result += encodedChar;
    }
  }

  return result;
}

const plaintext3 = 'iamapandabear';
const key3 = '';
const ciphertext3 = subCipher(plaintext3, key3);

console.log(`Plaintext: ${plaintext3}`);
console.log(`Key: ${key3}`);
console.log(`Ciphertext: ${ciphertext3}`);


const plaintext4 = 'iamapandabear';
const key4 = 'aaaa';
const ciphertext4 = subCipher(plaintext4, key4);

console.log(`Plaintext: ${plaintext4}`);
console.log(`Key: ${key4}`);
console.log(`Ciphertext: ${ciphertext4}`);



