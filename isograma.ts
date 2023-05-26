function esIsograma(palabra: string): boolean {
    // Eliminamos espacios y guiones y convertimos a minúsculas
    palabra = palabra.replace(/ |-/g, "").toLowerCase();
  
    // Convertimos la palabra a un array de caracteres
    const caracteres = palabra.split("");
  
    // Verificamos si hay algún caracter repetido
    for (let i = 0; i < caracteres.length; i++) {
      if (caracteres.indexOf(caracteres[i]) !== i) {
        // Si encontramos un caracter repetido, no es un isograma
        return false;
      }
    }
  
    // Si no encontramos caracteres repetidos, es un isograma
    return true;
  }
  
  // Ejemplos
  console.log(esIsograma("lumberjacks")); // true
  console.log(esIsograma("background")); // true
  console.log(esIsograma("downstream")); // true
  console.log(esIsograma("six-year-old")); // true
  console.log(esIsograma("isograms")); // false
  