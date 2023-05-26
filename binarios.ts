// Función que convierte un número decimal a su representación binaria como una cadena de texto
function decimalABinario(decimal: number): string {
    return decimal.toString(2);
  }
  
  // Función que invierte una cadena de texto
  function invertirCadena(cadena: string): string {
    return cadena.split("").reverse().join("");
  }
  
  // Constantes que representan los eventos del saludo secreto
  const EVENTOS_SALUDO_SECRETO: {[key: number]: string} = {
    1: "guiño",
    10: "parpadeo doble",
    100: "cerrar los ojos",
    1000: "saltar"
  };
  
  // Función que convierte un número decimal en su correspondiente saludo secreto
  function saludoSecreto(decimal: number): string[] {
    // Convertir el número decimal a binario y luego invertir la cadena
    const binarioInvertido = invertirCadena(decimalABinario(decimal));
  
    // Inicializar el saludo secreto como un arreglo vacío
    let saludo: string[] = [];
  
    // Recorrer los primeros 4 bits de la cadena binaria invertida
    for (let i = 0; i < 4 && i < binarioInvertido.length; i++) {
      // Convertir el bit a un número entero
      const bit = parseInt(binarioInvertido[i]);
  
      // Si el bit es 1, agregar el evento correspondiente al saludo secreto
      if (bit === 1) {
        const evento = EVENTOS_SALUDO_SECRETO[10 ** i];
        if (evento) {
          saludo.push(evento);
        }
      }
    }
  
    // Si el quinto bit de la cadena binaria invertida es 1, invertir el orden del saludo secreto
    if (binarioInvertido.length >= 5 && binarioInvertido[4] === "1") {
      saludo.reverse();
    }
  
    return saludo;
  }
  
  // Ejemplo 
  console.log(saludoSecreto(19)); // ["parpadeo doble", "guiño"]
  console.log(saludoSecreto(3)); // [ 'guiño', 'parpadeo doble' ]