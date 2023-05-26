function primeFactors(num: number): number[] {
  const factors: number[] = []; // Array donde se guardan los factores primos
  let divisor = 2; // Iniciamos el divisor en 2

  while (num > 1) { // Mientras el número a factorizar sea mayor que 1
    if (num % divisor === 0) { // Si el número es divisible por el divisor actual
      factors.push(divisor); // Añadimos el divisor al array de factores
      num /= divisor; // Dividimos el número por el divisor actual
    } else {
      divisor++; // Si no es divisible, probamos con el siguiente número
    }
  }

  return factors; // Devolvemos el array con los factores primos
}

// Ejemplo: 

console.log(primeFactors(60)); // Resultado esperado: [2, 2, 3, 5]
