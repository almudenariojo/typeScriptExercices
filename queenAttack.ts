// Definir el tipo QueenPosition para representar la posición de una reina
type QueenPosition = {
row: number;
col: number;
};

// Función que determina si dos reinas pueden atacarse entre sí
function canQueensAttackEachOther(
white: QueenPosition = { row: 0, col: 3 },
black: QueenPosition = { row: 7, col: 3 },
): boolean {
// Si ambas reinas están en la misma posición, entonces no se atacan
if (white.row === black.row && white.col === black.col) {
return false;
}

// Comprobar si las reinas están en la misma fila, columna o diagonal
return (
white.row === black.row ||
white.col === black.col ||
Math.abs(white.row - black.row) === Math.abs(white.col - black.col)
);
}

// Ejemplos
console.log(canQueensAttackEachOther({ row: 2, col: 2 }, { row: 5, col: 5 }));
console.log(canQueensAttackEachOther({ row: 1, col: 3 }, { row: 5, col: 3 }));
console.log(canQueensAttackEachOther({ row: 0, col: 0 }, { row: 7, col: 7 }));
console.log(canQueensAttackEachOther({ row: 0, col: 0 }, { row: 0, col: 0 }));
console.log(canQueensAttackEachOther({ row: 0, col: 0 }, { row: 0, col: 1 }));