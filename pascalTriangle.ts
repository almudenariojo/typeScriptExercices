// Clase que genera el triángulo de Pascal
class PascalTriangle {
// Método estático que genera el triángulo
static generateTriangle(numRows: number): number[][] {
if (numRows <= 0) return [];
const triangle: number[][] = [[1]];
// Generar cada fila del triángulo
for (let i = 1; i < numRows; i++) {
  // Obtener la fila anterior
  const prevRow = triangle[i - 1];
  const newRow: number[] = [1];

  // Generar cada número en la fila actual
  for (let j = 1; j < i; j++) {
    // Cada número es la suma de los dos números de la fila anterior que están a sus lados
    newRow.push(prevRow[j - 1] + prevRow[j]);
  }

  newRow.push(1);
  triangle.push(newRow);
}

return triangle;

  }
}

// Ejemplo 
const numRows = 5;
const pascalTriangle = PascalTriangle.generateTriangle(numRows);
console.log(pascalTriangle); // Imprimir el triángulo de Pascal generado
