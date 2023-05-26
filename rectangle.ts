/**
 * Función para contar los rectángulos en un diagrama ASCII
 * @param diagrama El diagrama ASCII a analizar
 * @returns El número de rectángulos encontrados
 */
function contarRectangulos(diagrama: string[]): number {
  let count: number = 0;

  for (let i = 0; i < diagrama.length; i++) {
    for (let j = 0; j < diagrama[i].length; j++) {
      if (diagrama[i][j] === '+') {
        for (let k = i + 1; k < diagrama.length; k++) {
          if (diagrama[k][j] === '+') {
            for (let l = j + 1; l < diagrama[i].length; l++) {
              if (diagrama[i][l] === '+' && diagrama[k][l] === '+') {
                count++;
              }
            }
          }
        }
      }
    }
  }

  return count;
}



// Ejemplo 
const diagrama: string[] = [
  "+--+",
  "++ |",
  "+-++--+",
  "|  |  |",
  "+--+--+"
];

const numRectangulos: number = contarRectangulos(diagrama);
console.log(`El diagrama tiene ${numRectangulos} rectángulos.`);

