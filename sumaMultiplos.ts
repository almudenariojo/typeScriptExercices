function sum(factors: number[], limit: number): number {
  // Inicializar la suma en cero
  let sum = 0;
  
  // Iterar sobre los números desde cero hasta el límite
  for (let i = 0; i < limit; i++) {
    // Comprobar si i es un múltiplo de alguno de los factores
    if (factors.some(factor => i % factor === 0)) {
      // Si lo es, añadir i a la suma
      sum += i;
    }
  }
  
  // Devolver el resultado
  return sum;
}

// Ejemplo:

const factors = [3, 5];
const limit = 100;

const result = sum(factors, limit);

console.log(`The sum of multiples of ${factors.join(' or ')} up to ${limit} is ${result}.`);
