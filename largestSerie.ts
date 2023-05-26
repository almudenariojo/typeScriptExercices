/**
 * Función que calcula el mayor producto para una subcadena contigua de dígitos de longitud n.
 * @param digits Cadena de dígitos.
 * @param n Longitud de la subcadena de dígitos para la cual se quiere calcular el mayor producto.
 * @returns El mayor producto encontrado.
 */
function largestProduct(digits: string, n: number): number {
  // Si n es cero, el mayor producto es 1, según se indica en el enunciado.
  if (n === 0) {
    return 1;
  }

  // Variable para almacenar el mayor producto encontrado.
  let largest = 0;

  // Recorremos la cadena de dígitos con un bucle for.
  // El índice i marca el inicio de la subcadena.
  for (let i = 0; i <= digits.length - n; i++) {
    // Inicializamos la variable product en 1.
    let product = 1;
    // Recorremos los n dígitos consecutivos a partir de la posición i con otro bucle for.
    // El índice j marca la posición actual dentro de la subcadena.
    for (let j = i; j < i + n; j++) {
      // Multiplicamos el dígito correspondiente al producto actual.
      product *= Number(digits[j]);
    }
    // Si el producto actual es mayor que el mayor producto encontrado hasta ahora, lo actualizamos.
    largest = Math.max(largest, product);
  }

  // Devolvemos el mayor producto encontrado.
  return largest;
}

// Ejemplos: 
console.log(largestProduct('1027839564', 3)); // Resultado: 270
console.log(largestProduct('1027839564', 5)); // Resultado: 7560
console.log(largestProduct('73167176531330624919225119674426574742355349194934', 6)); // Resultado: 23520
console.log(largestProduct('123456789', 0)); // Resultado: 1
