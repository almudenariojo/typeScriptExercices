// Función que convierte una secuencia de ADN en su correspondiente secuencia de ARN
function toRna(dna: string): string {
  // Objeto que define las bases de ADN y sus correspondientes bases de ARN
  const complements: { [key: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  // Convertir la secuencia de ADN en un array de caracteres
  const dnaArray = dna.split("");

  // Aplicar la función "map" a cada caracter de la secuencia de ADN
  const rnaArray = dnaArray.map((nucleotide) => {
    // Verificar que el caracter esté definido en el objeto de bases
    if (!complements[nucleotide]) {
      // Lanzar un error si la base no está definida
      throw new Error("Invalid input DNA.");
    }
    // Devolver la base de ARN correspondiente
    return complements[nucleotide];
  });

  // Convertir el array de bases de ARN en una cadena de texto y devolverla
  return rnaArray.join("");
}
