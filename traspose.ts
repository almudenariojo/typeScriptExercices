// Se define una constante "input" de tipo string y se le asigna el valor "hola como estas"
const input: string = "hola como estas";

// Se define un arreglo de strings "rows" y se le asigna el resultado de dividir "input" en espacios en blanco
const rows: string[] = input.split(" ");

// Se define una constante "maxRowLength" y se le asigna el valor máximo de la longitud de cada string dentro del arreglo "rows"
const maxRowLength: number = Math.max(...rows.map(row => row.length));

// Se define un nuevo arreglo "paddedRows" y se le asigna el resultado de aplicar la función "padEnd" a cada elemento del arreglo "rows" con el valor de "maxRowLength" y un espacio en blanco como caracter de relleno
const paddedRows: string[] = rows.map(row => row.padEnd(maxRowLength, " "));

// Se define un nuevo arreglo bidimensional "columns"
const columns: string[][] = [];

// Se recorre cada columna de "paddedRows"
for (let i = 0; i < maxRowLength; i++) {

// Se agrega una nueva columna vacía al arreglo "columns"
columns.push([]);

// Se recorre cada fila de "paddedRows"
  for (let j = 0; j < paddedRows.length; j++) {
  // Se agrega el caracter de la posición i-ésima de la fila j-ésima de "paddedRows" a la columna i-ésima de "columns"
    columns[i].push(paddedRows[j][i]);
    }
}

// Concatena los caracteres de cada arreglo de columna para formar un nuevo string, separando cada fila con un salto de línea
const transposed: string = columns.map(column => column.join("")).join("\n");

// Imprime el string transpuesto
console.log(transposed);


