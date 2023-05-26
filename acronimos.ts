function convertirAcrónimo(frase: string): string {
  // Lista de palabras a omitir.
  const omitir = ['del', 'de', 'la', 'los', 'las', 'y', 'o', 'a', 'en', 'con', 'para', 'por', 'un', 'una', 'el'];
  
  // Si se desea dividir una frase en palabras separadas 
  //por espacios en blanco, se debe utilizar una cadena con un espacio en blanco
  const palabras = frase.split("");
  
  // Inicializar la variable para almacenar el acrónimo
  let acrónimo = "";
  
  // Iterar a través de cada palabra
  for (let i = 0; i < palabras.length; i++) {
    // Verificar si la palabra actual debe ser omitida
    if (!omitir.includes(palabras[i])) {
      // Obtener la primera letra de cada palabra y pasarla a mayúsculas
      const letra = palabras[i].charAt(0).toUpperCase();
      
      // Agregar la letra al acrónimo
      acrónimo += letra;
    }
  }
  
  // Devolver el acrónimo completo
  return acrónimo;
}

// Ejemplo
const frases = "Organización del Tratado del Atlántico Norte";
const acrónimo = convertirAcrónimo(frases);
console.log(acrónimo); // "OTAN"
