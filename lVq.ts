// Esta función codifica un valor en formato VLQ (Variable Length Quantity) a un array de bytes
function encodeVLQ(value: number): number[] {
  const result: number[] = [];
  let currentValue = value;

  // Hacer mientras que el valor actual no sea 0
  do {
    let byte = currentValue & 0b01111111; // Obtener los 7 bits menos significativos
    currentValue >>>= 7; // Desplazar el valor actual 7 bits a la derecha
    if (currentValue !== 0) {
      byte |= 0b10000000; // Establecer el MSB en 1 si hay más bytes por venir
    }
    result.push(byte);
  } while (currentValue !== 0);

  return result;
}

// Esta función decodifica un array de bytes en formato VLQ a un número
function decodeVLQ(bytes: number[]): number {
  let result = 0;
  let shift = 0;

  // Iterar a través de cada byte en el array de bytes
  for (const byte of bytes) {
    const value = byte & 0b01111111; // Obtener los 7 bits menos significativos
    result |= value << shift;
    shift += 7;
    if ((byte & 0b10000000) === 0) {
      // El MSB es 0, por lo que este es el último byte
      break;
    }
  }

  return result;
}

// Ejemplo de uso
const value = 0x3FFFFFFF; // Máximo valor entero sin signo de 32 bits
const encoded = encodeVLQ(value);
const decoded1 = decodeVLQ(encoded);
console.log("Valor:", value);
console.log("Codificado:", encoded);
console.log("Decodificado:", decoded1);

