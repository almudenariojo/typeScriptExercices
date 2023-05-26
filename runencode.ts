// Codifica una cadena de caracteres en formato Run-Length Encoding
function runLengthEncode(data: string): string {
  let encodedData = '';
  let count = 1;
  let prevChar = data[0];
  for (let i = 1; i < data.length; i++) {
    const char = data[i];
    if (char === prevChar) { // Si el carácter es igual al anterior, aumenta el contador
      count++;
    } else { // Si es diferente, concatena el contador y el carácter anterior codificado y reinicia el contador
      encodedData += count.toString() + prevChar;
      count = 1;
      prevChar = char;
    }
  }
  encodedData += count.toString() + prevChar; // Agrega el último conjunto de caracteres codificados
  return encodedData;
}

// Decodifica una cadena de caracteres en formato Run-Length Encoding
function runLengthDecode(encodedData: string): string {
  let decodedData = '';
  let countStr = '';
  for (let i = 0; i < encodedData.length; i++) {
    const char = encodedData[i];
    if (/\d/.test(char)) { // Si el carácter es un número, agrega a la cadena de conteo
      countStr += char;
    } else { // Si es un carácter no numérico, convierte la cadena de conteo a número y repite el carácter esa cantidad de veces
      const count = parseInt(countStr, 10);
      decodedData += char.repeat(count);
      countStr = '';
    }
  }
  return decodedData;
}

// Ejemplo
const data = "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB";
const encodedData = runLengthEncode(data); // Codifica la cadena de caracteres
const decodedData = runLengthDecode(encodedData); // Decodifica la cadena de caracteres codificada
console.log(encodedData); // Muestra la cadena de caracteres codificada en consola
console.log(decodedData); // Muestra la cadena de caracteres decodificada en consola
