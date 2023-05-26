function findPythagoreanTriplets(sum: number): [number, number, number][] {
  const triplets: [number, number, number][] = []; // Inicializa un arreglo vacío para guardar los tripletes pitagóricos encontrados
  for (let c = sum; c > 0; c--) { // Recorre los posibles valores de c, empezando por el más grande (sum) y disminuyendo hasta 1
    for (let b = c - 1; b > 0; b--) { // Para cada valor de c, recorre los posibles valores de b, empezando por el siguiente a c y disminuyendo hasta 1
      const a = sum - c - b; // Calcula el valor de a que hace que la suma de los tres sea igual a sum
      if (a < b && a ** 2 + b ** 2 === c ** 2) { // Comprueba si se cumple la condición de triple pitagórico y si a es menor que b
        triplets.push([a, b, c]); // Si se cumple, agrega el triplete al arreglo de tripletes pitagóricos encontrados
      }
    }
  }
  return triplets; // Devuelve el arreglo de tripletes pitagóricos encontrados
}

// Ejemplo: busca los tripletes pitagóricos para los cuales la suma es 1000
const triplets = findPythagoreanTriplets(1000);
console.log(triplets); // Imprime el resultado [ [ -250, 600, 650 ], [ 200, 375, 425 ] ]
