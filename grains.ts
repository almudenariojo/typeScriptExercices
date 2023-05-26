function calcularGranosEnCasilla(casilla: number): bigint {
  // Comprueba que el número de casilla sea válido
  if (casilla < 1 || casilla > 64) {
    throw new Error("Número de casilla no válido");
  }

  // Calcula el número de granos en la casilla utilizando la fórmula 2^(casilla-1). 
  //Se duplica con respecto a anterior
  return BigInt(2) ** BigInt(casilla - 1);
}

function calcularTotalDeGranos(): bigint {
  let totalDeGranos: bigint = BigInt(0);

  // Itera sobre todas las casillas del tablero y suma el número de granos en cada casilla
  for (let casilla = 1; casilla <= 64; casilla++) {
    totalDeGranos += calcularGranosEnCasilla(casilla);
  }

  // Devuelve el total de granos en el tablero
  return totalDeGranos;
}

// Imprime el número de granos en las casillas 1, 2 y 64
console.log(`Granos en la casilla 1: ${calcularGranosEnCasilla(1)}`);
console.log(`Granos en la casilla 2: ${calcularGranosEnCasilla(2)}`);
console.log(`Granos en la casilla 64: ${calcularGranosEnCasilla(64)}`);

// Imprime el total de granos en el tablero
console.log(`Total de granos en el tablero de ajedrez: ${calcularTotalDeGranos()}`);
