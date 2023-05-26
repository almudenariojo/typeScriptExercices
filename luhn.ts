class LuhnValidator {
  static validate(input: string): boolean {
    // Eliminamos los espacios en blanco y verificamos si la longitud es mayor que 1
    const number = input.replace(/\s+/g, "");
    if (number.length <= 1) {
      return false;
    }
    
    // Convertimos el número a un arreglo de dígitos
    const digits = number.split("").map(Number);
    
    // Duplicamos los dígitos empezando por la derecha y sumamos los dígitos del resultado
    let sum = 0;
    for (let i = digits.length - 2; i >= 0; i -= 2) {
      let doubled = digits[i] * 2;
      if (doubled > 9) {
        doubled -= 9;
      }
      sum += doubled;
    }
    
    // Sumamos los dígitos que no fueron duplicados
    for (let i = digits.length - 1; i >= 0; i -= 2) {
      sum += digits[i];
    }
    
    // Verificamos si la suma es divisible por 10
    return sum % 10 === 0;
  }
}

// Ejemplos
const input1 = "4539 3195 0343 6467";
const input2 = "8273 1232 7352 0569";

console.log(`El número ${input1} es ${LuhnValidator.validate(input1) ? "válido" : "inválido"}`);
console.log(`El número ${input2} es ${LuhnValidator.validate(input2) ? "válido" : "inválido"}`);
