function countNucleotides(dna: string): { // La función cuenta el número de nucleótidos de una cadena de ADN dada
  [nucleotide: string]: number // Devuelve un objeto con el número de cada nucleótido o un mensaje de error
} | string {
  const nucleotideCount: { [nucleotide: string]: number } = { A: 0, C: 0, G: 0, T: 0 }; // Objeto que almacena el número de cada nucleótido, inicialmente todos en cero
  
  for (let i = 0; i < dna.length; i++) { // Recorre la cadena de ADN
    const nucleotide = dna[i]; // Obtiene el nucleótido actual
    
    if (nucleotideCount.hasOwnProperty(nucleotide)) { // Verifica si el nucleótido es válido
      nucleotideCount[nucleotide]++; // Incrementa el contador de nucleótidos si es un nucleótido válido
    } else {
      return "error"; // Retorna "error" si el nucleótido no es válido
    }
  }
  
  return nucleotideCount; // Retorna el objeto con el número de cada nucleótido
}

// Ejemplos
console.log(countNucleotides("GATTACA")); // { A: 3, C: 1, G: 1, T: 2 }
console.log(countNucleotides("INVALID")); // "error"

