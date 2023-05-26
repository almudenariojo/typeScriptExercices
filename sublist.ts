// Función para determinar si listA es una sublista de listB
function isSublist(listA: any[], listB: any[]): boolean {
// Si ambas listas están vacías, son iguales y, por lo tanto, listA es una sublista de listB
if (listA.length === 0 && listB.length === 0) {
return true;
}
// Si la longitud de listA es mayor que la longitud de listB, listA no puede ser una sublista de listB
if (listA.length > listB.length) {
return false;
}
// Si listA es una sublista de listB, debe haber un punto de inicio en listB tal que todos los elementos de listA coincidan con los de listB a partir de ese punto
for (let i = 0; i < listB.length - listA.length + 1; i++) {
let match = true;
for (let j = 0; j < listA.length; j++) {
// Si algún elemento de listA no coincide con el elemento correspondiente de listB, listA no es una sublista de listB
if (listA[j] !== listB[i + j]) {
match = false;
break;
}
}
// Si se encuentra una coincidencia, listA es una sublista de listB
if (match) {
return true;
}
}
// Si no se encuentra ninguna coincidencia, listA no es una sublista de listB
return false;
}

// Función para determinar si listA es una superlista de listB
function isSuperlist(listA: any[], listB: any[]): boolean {
// Si ambas listas están vacías, son iguales y, por lo tanto, listA es una superlista de listB
if (listA.length === 0 && listB.length === 0) {
return true;
}
// Si listA está vacía, es una superlista de listB
if (listA.length === 0) {
return true;
}
// Si listB está vacía, listA no puede ser una superlista de listB
if (listB.length === 0) {
return false;
}
// Si listA es una superlista de listB, debe haber un punto de inicio en listB tal que todos los elementos de listB coincidan con los de listA a partir de ese punto
for (let i = 0; i < listB.length - listA.length + 1; i++) {
let match = true;
for (let j = 0; j < listA.length; j++) {
// Si algún elemento de listA no coincide con el elemento correspondiente de listB, listA no es una superlista de listB
if (listA[j] !== listB[i + j]) {
match = false;
break;
}
}
// Si se encuentra una coincidencia, listA es una superlista de listB
if (match) {
return true;
}
}
// Si no se encuentra ninguna coincidencia, listA no es una superlista de listB
return false;
}

// Función para determinar si dos listas son iguales
function areEqual(listA: any[], listB: any[]): boolean {
// Si las listas tienen diferentes longitudes, no pueden ser iguales
if (listA.length !== listB.length) {
return false;
}
for (let i = 0; i < listA.length; i++) {
if (listA[i] !== listB[i]) {
return false;
}
}
return true;
}

// Función para determinar la relación entre dos listas (igualdad, sublista, superlista o desigualdad)
function listRelationship(listA: any[], listB: any[]): string {
if (areEqual(listA, listB)) {
return "equal";
} else if (isSublist(listA, listB)) {
return "sublist";
} else if (isSuperlist(listA, listB)) {
return "superlist";
} else {
return "unequal";
}
}

// Ejemplos:
console.log(listRelationship([], [])); // igual
console.log(listRelationship([1, 2, 3], [])); // superlista
console.log(listRelationship([], [1, 2, 3])); // sublista
console.log(listRelationship([1, 2, 3], [1, 2, 3, 4, 5])); // sublista
console.log(listRelationship([3, 4, 5], [1, 2, 3, 4, 5])); // sublista
console.log(listRelationship([3, 4], [1, 2, 3, 4, 5])); // sublista
console.log(listRelationship([1, 2, 3], [1, 2, 3])); // igual
console.log(listRelationship([1, 2, 3, 4, 5], [2, 3, 4])); // superlista