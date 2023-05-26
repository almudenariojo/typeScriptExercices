// Definición de la función keep, que recibe una colección de elementos de tipo T y una función predicado que determina cuáles elementos se mantienen en la colección resultante
function keep<T>(collection: T[], predicate: (elem: T) => boolean): T[] {
// Se define un array vacío para almacenar los elementos que cumplan el predicado
const kept: T[] = [];

// Se itera sobre los elementos de la colección original
for (const elem of collection) {
// Si el elemento cumple con el predicado, se agrega al array de elementos mantenidos
if (predicate(elem)) {
kept.push(elem);
}
}

// Se devuelve el array de elementos que cumplen el predicado
return kept;
}

// Definición de la función discard, que recibe una colección de elementos de tipo T y una función predicado que determina cuáles elementos se descartan de la colección resultante
function discard<T>(collection: T[], predicate: (elem: T) => boolean): T[] {
// Se define un array vacío para almacenar los elementos que no cumplan el predicado
const discarded: T[] = [];

// Se itera sobre los elementos de la colección original
for (const elem of collection) {
// Si el elemento no cumple con el predicado, se agrega al array de elementos descartados
if (!predicate(elem)) {
discarded.push(elem);
}
}

// Se devuelve el array de elementos que no cumplen el predicado
return discarded;
}

// Ejemplo de uso de las funciones keep y discard
const nums = [1, 2, 3, 4, 5];

// Se define una función predicado que determina si un número es par o no
const isEven = (n: number) => n % 2 === 0;

// Se utiliza la función keep para obtener un array con los números pares
const evenNums = keep(nums, isEven);

// Se utiliza la función discard para obtener un array con los números impares
const oddNums = discard(nums, isEven);

// Se imprimen los resultados por consola
console.log(evenNums); // [2, 4]
console.log(oddNums); // [1, 3, 5]
