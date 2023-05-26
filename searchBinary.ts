// Definimos una función llamada "busquedaBinaria" que recibe como parámetros una lista ordenada y el elemento que estamos buscando.
function busquedaBinaria(lista: number[], elemento: number): number {
// Definimos las variables "inicio" y "fin" que representan los índices del inicio y fin de la lista.
let inicio = 0;
let fin = lista.length - 1;
// Mientras el índice de inicio sea menor o igual al índice de fin...
while (inicio <= fin) {
// Definimos la variable "medio" que representa el índice del elemento medio de la lista.
const medio = Math.floor((inicio + fin) / 2);
// Si el elemento medio es igual al elemento que buscamos, lo hemos encontrado y devolvemos su índice.
if (lista[medio] === elemento) {
return medio;
}
// Si el elemento medio es mayor que el elemento que buscamos, eliminamos la mitad derecha de la lista.
if (lista[medio] > elemento) {
fin = medio - 1;
}
// Si el elemento medio es menor que el elemento que buscamos, eliminamos la mitad izquierda de la lista.
else {
inicio = medio + 1;
}
}
// Si llegamos a este punto, hemos eliminado toda la lista y no hemos encontrado el elemento, así que devolvemos -1.
return -1;
}

// Ejemplo:
const listaEjemplo = [4, 8, 12, 16, 23, 28, 32];
const elementoEjemplo = 23;
const indiceElemento = busquedaBinaria(listaEjemplo, elementoEjemplo);
if (indiceElemento === -1) {
console.log(`El elemento ${elementoEjemplo} no está en la lista`);
} else {
console.log(`El elemento ${elementoEjemplo} está en la posición ${indiceElemento} de la lista`);
}

// El resultado de este ejemplo sería: "El elemento 23 está en la posición 4 de la lista".