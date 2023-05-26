function reverseString(input: string): string {
    let output: string = ''; // Creamos una variable "output" que va a almacenar la cadena invertida, inicialmente vacía
    for (let i = input.length - 1; i >= 0; i--) { // Recorremos la cadena de entrada en orden inverso, desde el último carácter hasta el primero
      output += input[i]; // Añadimos cada carácter al final de la cadena de salida
    }
    return output; // Devolvemos la cadena invertida
  }
  
  // Ejemplo
  const cadenaDeEntrada: string = 'cool';
  const cadenaInvertida: string = reverseString(cadenaDeEntrada);
  console.log(cadenaInvertida); // Muestra "looc" en la consola
  

  //También puede realizarse con métodos que tiene el string 
  function reversString(str: string): string {
    return str.split('').reverse().join('');
  }
  
  // Ejemplo
  const input10 = 'hola mundo';
  const output = reversString(input10);
  console.log(output); // Muestra "odnum aloh" en la consola
  