// Declaramos una función que recibe como argumento la cantidad inicial de botellas
function singBottlesOfBeer(numBottles: number) {
  // Iteramos desde el número inicial de botellas hasta 1
  for (let i = numBottles; i > 0; i--) {
    // Definimos los strings que necesitaremos para la canción
    let bottlesString = i === 1 ? "bottle" : "bottles"; // En singular o plural
    let bottlesLeft = i - 1 === 0 ? "no more" : i - 1; // Si llegamos a 0, decimos "no more"
    let bottlesLeftString = bottlesLeft === 1 ? "bottle" : "bottles"; // En singular o plural

    // Imprimimos el verso actual
    console.log(`${i} ${bottlesString} of beer on the wall, ${i} ${bottlesString} of beer.`);
    console.log(`Take one down and pass it around, ${bottlesLeft} ${bottlesLeftString} of beer on the wall.\n`);
    // Usamos \n para imprimir una línea en blanco entre cada verso
  }

  // Imprimimos el verso final (cuando ya no quedan botellas)
  console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
  console.log(`Go to the store and buy some more, ${numBottles} bottles of beer on the wall.\n`);
}

// Llamamos a la función con 99 botellas
singBottlesOfBeer(99);

