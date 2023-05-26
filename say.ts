//Paso 1

function numberToWords(num: number): string {
  // Verificar que el número esté en el rango permitido (0 a 99)
  if (num < 0 || num > 99) {
    return "Número fuera de rango";
  }

  // Definir los arreglos de unidades, decenas y números del 10 al 19
  const units: string[] = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const tens: string[] = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const teens: string[] = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];

  // Convertir el número en palabras
  if (num === 0) {
    return 'cero';
  } else if (num < 10) {
    return units[num];
  } else if (num < 20) {
    return teens[num - 10];
  } else {
    const ten = Math.floor(num / 10);
    const unit = num % 10;
    if (unit === 0) {
      return tens[ten];
    } else {
      return `${tens[ten]} y ${units[unit]}`; // Agregar "y" para separar las decenas de las unidades
    }
  }
}

// Ejemplos
console.log("\nEJEMPLOS PASO 1\n");
console.log(numberToWords(0)); // 'cero'
console.log(numberToWords(14)); // 'catorce'
console.log(numberToWords(50)); // 'cincuenta'
console.log(numberToWords(98)); // 'noventa y ocho'
console.log(numberToWords(-1)); //  Número fuera de rango
console.log(numberToWords(100)); //  Número fuera de rango

//Paso 2 

function divideEnPartesDeMiles(num: number): number[] {
  // Verificar que el número esté en el rango permitido (0 a 999999999)
  if (num < 0 || num > 999999999) {
    console.log("Número fuera de rango") ;
  }

  // Convertir el número a una cadena y agregar ceros al comienzo si es necesario
  let strNum: string = String(num);
  while (strNum.length % 3 !== 0) {
    strNum = '0' + strNum;
  }

  // Dividir la cadena en partes de tres dígitos
  const numParts: string[] = [];
  for (let i = 0; i < strNum.length; i += 3) {
    numParts.push(strNum.slice(i, i + 3));
  }

  // Convertir las partes de la cadena de nuevo a números
  return numParts.map(part => parseInt(part));
}

// Ejemplos
console.log("\nEJEMPLOS PASO 2\n");
console.log(divideEnPartesDeMiles(0)); // [0]
console.log(divideEnPartesDeMiles(123)); // [123]
console.log(divideEnPartesDeMiles(1000)); // [1, 0]
console.log(divideEnPartesDeMiles(1234567890)); // [1, 234, 567, 890]
console.log(divideEnPartesDeMiles(-1)); // Error: Número fuera de rango
console.log(divideEnPartesDeMiles(1000000000)); // Error: Número fuera de rango

//Paso 3
// Esta función convierte un número en palabras
function convertNumberToWords(num: number): string {
  // Verifica si el número está fuera del rango
  if (num < 0 || num >= 1000000000000) {
    return "Número fuera de rango";
  }
// Verifica si el número es cero
  if (num === 0) {
    return "cero";
  }
// Declaración de arrays con palabras correspondientes a las unidades, decenas, centenas, miles y millones
  const units = [
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];

  const tens = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];

  const decades = [
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];

  const hundreds = [
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  const thousands = ["mil", "millón", "mil millones"];
// Función para convertir las centenas en palabras
  function convertHundreds(n: number): string {
    let words = "";

    if (n >= 100) {
      words += hundreds[Math.floor(n / 100) - 1] + " ";
      n %= 100;
    }

    if (n >= 10 && n <= 19) {
      words += tens[n - 10] + " ";
      n = 0;
    } else if (n >= 20) {
      words += decades[Math.floor(n / 10) - 2] + " ";
      n %= 10;
    }

    if (n >= 1 && n <= 9) {
      if (n === 1 && words === "") {
        words += "cien ";
      } else {
        words += units[n - 1] + " ";
      }
    }

    return words.trim();
  }
// Variable para almacenar las palabras correspondientes al número
  let words = "";
// Conversión de miles en palabras
  if (num >= 1000000 && num <= 999999999) {
    words += convertHundreds(Math.floor(num / 1000000)) + " " + thousands[1] + " ";
    num %= 1000000;
  }

  if (num >= 1000 && num <= 999999) {
    words += convertHundreds(Math.floor(num / 1000)) + " " + thousands[0] + " ";
    num %= 1000;
  }
// Conversión de centenas en palabras
  words += convertHundreds(num);

  return words.trim();
}

// Ejemplos
console.log("\nEJEMPLOS PASO 3\n");
console.log(convertNumberToWords(123456789)); // "ciento veintitrés millones cuatrocientos cincuenta y seis mil setecientos ochenta y nueve"
console.log(convertNumberToWords(0)); // "cero"
console.log(convertNumberToWords(-100)); // "Número fuera de rango"
console.log(convertNumberToWords(1000000000000)); // "Número fuera de rango"

//Paso 4 
function convertNumberToWords1(num: number): string {
  // Check if number is out of range
  if (num < 0 || num >= 1000000000000) {
    return "Number out of range";
  }

  // Check for zero
  if (num === 0) {
    return "zero";
  }

  // Arrays for word representation of digits
  const units = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const tens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const decades = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const hundreds = [
    "",
    "one hundred",
    "two hundred",
    "three hundred",
    "four hundred",
    "five hundred",
    "six hundred",
    "seven hundred",
    "eight hundred",
    "nine hundred",
  ];
  const thousands = ["", "thousand", "million", "billion"];

  // Recursive function to convert a three-digit number to words
  function convertHundreds(n: number): string {
    let words = "";

    if (n >= 100) {
      words += hundreds[Math.floor(n / 100)] + " ";
      n %= 100;
    }

    if (n >= 10 && n <= 19) {
      words += tens[n - 10] + " ";
      return words.trim();
    } else if (n >= 20) {
      words += decades[Math.floor(n / 10)] + " ";
      n %= 10;
    }

    if (n >= 1 && n <= 9) {
      words += units[n - 1] + " ";
    }

    return words.trim();
  }

  // Convert millions, thousands, and hundreds to words
  let words = "";
  let i = 0;

  while (num > 0) {
    const chunk = num % 1000;
    num = Math.floor(num / 1000);

    if (chunk !== 0) {
      words = `${convertHundreds(chunk)}${thousands[i]} ${words}`;
    }

    i++;
  }

  return words.trim();
}

// Ejemplos: 
console.log("\nEJEMPLOS PASO 4\n");
console.log(convertNumberToWords1(12345)); // "twelve thousand three hundred forty-five"
console.log(convertNumberToWords1(0)); // "zero"
console.log(convertNumberToWords1(-100)); // "Number out of range"
console.log(convertNumberToWords1(1000000000000)); // "Number out of range"
