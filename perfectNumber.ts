// Función que clasifica un número en perfecto, deficiente o abundante
function classify(n: number): string {
// Verificar que el número es natural
if (n <= 0) {
throw new Error('La clasificación solo es posible para números naturales.')
}

// Calcular la suma de los divisores propios del número
let sum = 0
for (let i = 1; i < n; i++) {
if (n % i === 0) {
sum += i
}
}

// Determinar la clasificación en función de la suma de los divisores propios
if (sum === n) {
return 'perfecto'
} else if (sum < n) {
return 'deficiente'
} else {
return 'abundante'
}
}

// Ejemplo
// Clasificación de un número
const num = 28;
const classification = classify(num);
console.log(`El número ${num} es ${classification}.`);
// Salida: El número 28 es perfecto.
