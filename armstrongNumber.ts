function isArmstrongNumber(n: number): boolean {
    // Convertir el número a una cadena para contar el número de dígitos
    const numStr: string = n.toString();
    // Contar el número de dígitos
    const numDigits: number = numStr.length;
    // Inicializar la suma a cero
    let sum: number = 0;
  
    // Iterar a través de cada dígito en el número
    for (let i = 0; i < numDigits; i++) {
      // Obtener el valor numérico del dígito actual
      const digit: number = parseInt(numStr.charAt(i), 10);
      // Agregar el valor del dígito elevado a la potencia del número de dígitos al total de la suma
      sum += Math.pow(digit, numDigits);
    }
  
    // Comprobar si el número es un número de Armstrong
    if (sum === n) {
      return true;
    } else {
      return false;
    }
  }
  
  // Ejemplo de uso
  console.log(isArmstrongNumber(9)); // true
  console.log(isArmstrongNumber(10)); // false
  console.log(isArmstrongNumber(153)); // true
  console.log(isArmstrongNumber(154)); // false
  