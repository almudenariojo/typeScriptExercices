enum ColorCode { // define un tipo enumerado `ColorCode` con valores numéricos asignados a diferentes colores.
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}

function getColorCode(color: string): number { // define una función que toma un color como argumento y devuelve su código numérico.
 const result = ColorCode[color.toLowerCase() as keyof typeof ColorCode];
;

  if (result >= 0) { // si el código es válido, devuelve el código.
    return result;
  }

  console.log(`Invalid color: ${color}`); // si el código es inválido, imprime un mensaje de error en la consola.
  return -1; // devuelve un valor por defecto en caso de error
}


function getColorCode2(colors: string[]) { // define una función que toma una matriz de colores y devuelve un arreglo con los códigos numéricos de los colores válidos.
  const codes = [];

  for (let i = 0; i < colors.length; i++) { // recorre la matriz de colores.
    const colorCode = getColorCode(colors[i]); // llama a la función `getColorCode` para cada color en la matriz.
    if(colorCode>=0){ // si el código es válido, lo agrega al arreglo `codes`.
      codes.push(colorCode); 
    }
  }

  return codes; // devuelve el arreglo con los códigos de los colores válidos.
}

let codeValue = getColorCode2(['black']); // llama a la función `getColorCode2` con una matriz de colores y almacena el resultado en la variable `codeValue`.
codeValue =  getColorCode2(['black', 'orange']); // también se pueden llamar a la función con otras matrices de colores.
console.log(codeValue = getColorCode2(['black', 'green', 'red']));