// Define un tipo personalizado para los valores de celdas posibles
type CellType = " " | "*" | number;

// Función que recibe un tablero de celdas y devuelve un nuevo tablero con la cantidad de minas por cada celda vacía
function countMinesCells(board: CellType[][]): CellType[][] {

  // Crea un nuevo tablero copiando el original
  const newBoard: CellType[][] = board.map(row => [...row]);

  // Recorre el tablero original para contar las minas de cada celda vacía
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === " ") { // Si la celda está vacía
        let count = 0;

        // Verifica las celdas adyacentes para contar las minas
        if (row > 0 && col > 0 && board[row - 1][col - 1] === "*") count++;
        if (row > 0 && board[row - 1][col] === "*") count++;
        if (row > 0 && col < board[row].length - 1 && board[row - 1][col + 1] === "*") count++;
        if (col > 0 && board[row][col - 1] === "*") count++;
        if (col < board[row].length - 1 && board[row][col + 1] === "*") count++;
        if (row < board.length - 1 && col > 0 && board[row + 1][col - 1] === "*") count++;
        if (row < board.length - 1 && board[row + 1][col] === "*") count++;
        if (row < board.length - 1 && col < board[row].length - 1 && board[row + 1][col + 1] === "*") count++;

        if (count > 0) { // Si hay minas alrededor de la celda vacía
          // Cambia el valor de la celda vacía por el número de minas adyacentes
          newBoard[row][col] = count;
        }
      }
    }
  }

  return newBoard; // Devuelve el nuevo tablero con la cantidad de minas por cada celda vacía
}

// Ejemplo de uso de la función countMinesCells
console.log(countMinesCells([
  [" ", "*", " ", " "],
  [" ", " ", "*", " "],
  ["*", " ", " ", " "],
  [" ", "*", " ", " "],
])); // Devuelve: [["1","*","2","1"],["3","4","*","3"],["*","3","2","1"],["2","*","2","1"]]
