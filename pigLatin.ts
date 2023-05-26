function toPigLatin(english: string): string {
  // Separamos las palabras del texto en un arreglo
  const words = english.split(" ");

  // Arreglo donde guardaremos las palabras en Pig Latin
  const pigLatinWords: string[] = [];

  // Regexp para detectar si una palabra comienza con vocal
  //La i al final del regex indica que la expresión regular debe ser evaluada sin tener en cuenta las mayúsculas y minúsculas de las letras.
  const beginsWithVowel = /^[aeiou]|^(xr|yt)/i;

  // Regexp para detectar consonantes al inicio de una palabra
  const beginsWithConsonant = /^([^aeiou]?qu|[^aeiouy]+)([aeiou].*)/i;

  // Recorremos las palabras
  for (const word of words) {
    // Si la palabra comienza con vocal, simplemente le agregamos "ay"
    if (beginsWithVowel.test(word)) {
      pigLatinWords.push(`${word}ay`);
    } else {
      // Si la palabra comienza con consonante, buscamos la primera vocal
      const match = beginsWithConsonant.exec(word);
      if (match) {
        // Movemos la consonante (o consonante cluster) al final y agregamos "ay"
        pigLatinWords.push(`${match[2]}${match[1]}ay`);
      } else {
        // Si no se cumple ninguna de las reglas anteriores, simplemente agregamos "ay" al final
        pigLatinWords.push(`${word}ay`);
      }
    }
  }

  // Unimos las palabras en un texto y lo retornamos
  return pigLatinWords.join(" ");
}

console.log(toPigLatin('hello world')); // resultado imprimir "ellohay orldway"
console.log(toPigLatin('pig latin')); // resultado imprimir "igpay atinlay"
console.log(toPigLatin('the quick brown fox')); // resultado imprimir "ethay ickquay ownbray oxfay"
console.log(toPigLatin('square')); // resultado imprimir "aresquay"

