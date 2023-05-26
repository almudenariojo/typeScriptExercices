// Función que recibe las medidas de los tres lados de un triángulo y devuelve el tipo de triángulo
function tipoTriangulo(a: number, b: number, c: number): string {
    // Verificamos si las medidas forman un triángulo válido
    if (a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b) {
        // Verificamos si el triángulo es equilátero (todos los lados iguales)
        if (a === b && b === c) {
            return 'Equilátero';
        }
        // Verificamos si el triángulo es isósceles (al menos dos lados iguales)
        else if (a === b || b === c || a === c) {
            return 'Isósceles';
        }
        // Si no es equilátero ni isósceles, entonces es escaleno (todos los lados diferentes)
        else {
            return 'Escaleno';
        }
    } else {
        return 'No es un triángulo válido';
    }
}

// Ejemplo
const triangulo1 = tipoTriangulo(5, 5, 5);
console.log(triangulo1); // Muestra "Equilátero"

const triangulo2 = tipoTriangulo(15, 15, 5);
console.log(triangulo2); // Muestra "Isósceles"

const triangulo3 = tipoTriangulo(0, 15, 5);
console.log(triangulo3); // Muestra "No es un triángulo válido"

const triangulo4 = tipoTriangulo(3, 4, 5);
console.log(triangulo4); // Muestra "Escaleno"
