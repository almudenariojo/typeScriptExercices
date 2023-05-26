function encontrarPuntosDeSilla(matriz: number[][]): [number, number, number][] {
  const puntosDeSilla: [number, number, number][] = []; // Inicializa el arreglo para almacenar los puntos de silla encontrados

  // Itera por cada fila y cada columna de la matriz
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const elemento = matriz[i][j]; // Almacena el elemento actual en una variable
      let esPuntoDeSilla = true; // Asigna un valor inicial de "verdadero" a la variable que determinará si el elemento es un punto de silla

      // Comprueba si el elemento es mayor o igual a todos los elementos de la fila
      for (let k = 0; k < matriz[i].length; k++) {
        if (matriz[i][k] > elemento) { // Si encuentra un elemento mayor, establece la variable de "esPuntoDeSilla" como "falso" y sale del ciclo
          esPuntoDeSilla = false;
          break;
        }
      }

      // Comprueba si el elemento es menor o igual a todos los elementos de la columna
      if (esPuntoDeSilla) {
        for (let k = 0; k < matriz.length; k++) {
          if (matriz[k][j] < elemento) { // Si encuentra un elemento menor, establece la variable de "esPuntoDeSilla" como "falso" y sale del ciclo
            esPuntoDeSilla = false;
            break;
          }
        }
      }

      // Si el elemento es un punto de silla, lo agrega a la lista de puntos de silla
      if (esPuntoDeSilla) {
        puntosDeSilla.push([i, j, elemento]);
      }
    }
  }

  return puntosDeSilla; // Devuelve el arreglo de puntos de silla encontrados
}

// Ejemplo 
const matrizEjemplo = [
  [9, 8, 7],
  [5, 3, 2],
  [6, 6, 7],
];

const puntosDeSilla = encontrarPuntosDeSilla(matrizEjemplo); // Busca los puntos de silla en la matriz de ejemplo
console.log(puntosDeSilla); // Muestra en la consola los puntos de silla encontrados

