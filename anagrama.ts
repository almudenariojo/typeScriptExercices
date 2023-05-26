function buscarAnagramas(palabra: string, candidatos: string[]): string[] {
    // Convertir la palabra a un arreglo de caracteres, ordenarlos y volver a unirlos como una cadena
    const palabraOrdenada = palabra.split('').sort().join('');
  
    // Inicializar un arreglo para almacenar los anagramas encontrados
    const anagramas: string[] = [];
  
    // Iterar a través de cada candidato
    for (let candidato of candidatos) {
      // Convertir el candidato a un arreglo de caracteres, ordenarlos y volver a unirlos como una cadena
      const candidatoOrdenado = candidato.split('').sort().join('');
  
      // Si la palabra ordenada es igual al candidato ordenado, es un anagrama
      if (palabraOrdenada === candidatoOrdenado) {
        // Agregar el candidato a la lista de anagramas
        anagramas.push(candidato);
      }
    }
  
    // Devolver la lista de anagramas encontrados
    return anagramas;
  }
  
  // Ejemplos
  const palabra = 'listen';
  const candidatos = ['enlists', 'google', 'inlets', 'banana'];
  
  const anagramas = buscarAnagramas(palabra, candidatos);
  console.log(anagramas); // ['inlets']
  