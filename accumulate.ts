// Definimos un tipo de función genérica que toma un input de tipo T y devuelve un output de tipo U

type Operation1<T, U> = (input: T) => U;

// Definimos la función accumulate que toma una colección de tipo T[] y una operación de tipo Operation<T, U>

function accumulate<T, U>(collection: T[], operation: Operation1<T, U>): U[] {

  // Creamos un array vacío para almacenar los resultados de aplicar la operación a cada elemento de la colección

  const result: U[] = [];

  // Iteramos sobre cada elemento de la colección

  for (const element of collection) {

    // Aplicamos la operación al elemento actual y añadimos el resultado al array de resultados

    result.push(operation(element));

  }

  // Devolvemos el array de resultados

  return result;

}

// Ejemplo

const input4 = [1, 2, 3, 4, 5];

const operation = (x: number) => x * x; // función que eleva al cuadrado un número

const output4 = accumulate(input4, operation);

 

console.log(output4); // [1, 4, 9, 16, 25]