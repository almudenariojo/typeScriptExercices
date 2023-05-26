function sieveOfEratosthenes(n: number): number[] {
  const primes: boolean[] = new Array(n + 1).fill(true); // Inicializa un arreglo de booleanos de tamaño n+1, y los llena con true
  primes[0] = false; // 0 no es primo
  primes[1] = false; // 1 no es primo

  for (let i = 2; i <= Math.sqrt(n); i++) { // Recorre hasta la raíz cuadrada de n
    if (primes[i]) { // Si el número es primo
      for (let j = i ** 2; j <= n; j += i) { // Recorre todos los múltiplos de i
        primes[j] = false; // Marca los múltiplos como no primos
      }
    }
  }

  const result: number[] = []; // Inicializa un arreglo vacío para los números primos
  for (let i = 2; i <= n; i++) { // Recorre desde 2 hasta n
    if (primes[i]) { // Si el número es primo
      result.push(i); // Agrega el número al resultado
    }
  }

  return result; // Devuelve los números primos
}

console.log(sieveOfEratosthenes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
