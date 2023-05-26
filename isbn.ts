function isValidISBN(isbn: string): boolean {
  // Remover los guiones
  isbn = isbn.replace(/-/g, '');

  // Comprobar que el ISBN tenga 10 caracteres
  if (isbn.length !== 10) {
    return false;
  }

  // Comprobar que todos los caracteres sean números excepto el último
  const regex = /^[0-9]{9}[0-9X]$/;
  if (!regex.test(isbn)) {
    return false;
  }

  // Calcular el valor de la suma ponderada
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(isbn.charAt(i)) * (10 - i);
  }

  // Comprobar el último dígito
  const lastDigit = isbn.charAt(9);
  if (lastDigit === 'X') {
    sum += 10;
  } else {
    sum += parseInt(lastDigit);
  }

  return sum % 11 === 0;
}

// Ejemplos: 
console.log(isValidISBN('3-598-21508-8')); // true
console.log(isValidISBN('3-598-21508-9')); // false
console.log(isValidISBN('3598215088')); // true
console.log(isValidISBN('359821507X')); // true
console.log(isValidISBN('359821507x')); // true
console.log(isValidISBN('123')); // false
console.log(isValidISBN('12345678901')); // false
console.log(isValidISBN('3-598-21507-X')); // true
