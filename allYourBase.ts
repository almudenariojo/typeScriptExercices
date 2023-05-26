/**
* Convierte un número de una base a otra.
*
* @param number El número a convertir en forma de cadena.
* @param fromBase La base en la que se encuentra el número.
* @param toBase La base a la que se desea convertir el número.
* @returns El número convertido a la nueva base en forma de cadena.
*/
function convertBase(number: string, fromBase: number, toBase: number): string {
  // Cadena de caracteres que contiene los dígitos de las bases.
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Cadena vacía que contendrá el número convertido a la nueva base.
  let result = "";
  // Se convierte el número de entrada a un entero en la base original.
  let num = parseInt(number, fromBase);
 
  // Se realiza la conversión de manera iterativa.
  while (num > 0) {
    // Se toma el residuo de la división entre el número y la nueva base.
    // Este residuo representa el dígito correspondiente en la nueva base.
    // Se agrega el dígito al principio de la cadena 'result'.
    result = digits[num % toBase] + result;
    // Se actualiza el número dividiéndolo por la nueva base.
    num = Math.floor(num / toBase);
  }
 
  // Se devuelve la cadena 'result' que contiene el número convertido a la nueva base.
  return result;
}
 
// Ejemplo: 
const number = "101010";
const fromBase = 2;
const toBase = 10;
const result7 = convertBase(number, fromBase, toBase);
 
// Se muestra el resultado en la consola.
console.log(result7); // "42"