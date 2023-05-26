// Definición de la función contarPalabras que toma una frase como argumento
// y devuelve un objeto Map que cuenta la cantidad de veces que aparece cada palabra en la frase
function contarPalabras(frase: string): Map<string, number> {
    // Convertimos la frase a minúsculas y la dividimos en palabras utilizando una expresión regular
    const palabras = frase.toLowerCase().split(/[^\w']+/); //divide la cadena de entrada en un array de palabras, utilizando cualquier caracter que no sea una letra, un número o un apóstrofe como separador
    // Creamos un objeto Map para almacenar la cuenta de cada palabra
    const contador = new Map<string, number>();
    // Recorremos las palabras y las agregamos al contador utilizando el método Map.get() y Map.set()
    for (const palabra of palabras) {
      // Obtenemos la cuenta actual de la palabra del contador
      const cuenta = contador.get(palabra) || 0;
      // Incrementamos la cuenta de la palabra y la almacenamos en el contador
      contador.set(palabra, cuenta + 1);
    }
    // Devolvemos el objeto Map con la cuenta de cada palabra
    return contador;
  }
  
  // Ejemplo 
  const frase = "Erase una vez una frase con muchas palabras, muchas palabras y muchas palabras...";
  // Contamos la cantidad de palabras en la frase utilizando la función contarPalabras()
  const contador = contarPalabras(frase);
  // Iteramos a través de las entradas del objeto Map utilizando el método Map.entries()
  const resultado: [string, number][] = Array.from(contador);
  for (const [palabra, cuenta] of resultado) {
    console.log(`${palabra}: ${cuenta}`);
  }
  