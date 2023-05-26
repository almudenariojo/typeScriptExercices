// Definimos un objeto con las frases correspondientes a cada día del verso
const gifts: {[key: number]: string} = {
  1: "un Perdiz en un Peral",
  2: "dos Tórtolas",
  3: "tres Gallinas Francesas",
  4: "cuatro Llamas",
  5: "cinco Anillos de Oro",
  6: "seis Gansos",
  7: "siete Cisnes",
  8: "ocho Criadas",
  9: "nueve Bailarinas",
  10: "diez Señores saltando",
  11: "once Músicos",
  12: "doce Tambores"
};

// Definimos la función que generará el verso correspondiente a cada día
function generateVerse(day: number): string {
  // Creamos la primera línea del verso
  let verse = `En el ${day}º día de Navidad mi amor verdadero me dio:\n`;

  // Generamos el verso correspondiente a cada día anterior, hasta llegar al primer día
  for (let i = day; i >= 1; i--) {
    if (i === 1 && day !== 1) {
      // Si estamos en el último día, añadimos "y" antes del último regalo
      verse += `y ${gifts[i]}`;
    } else {
      // En caso contrario, añadimos el regalo correspondiente al día
      verse += `${gifts[i]}, `;
    }
  }

  // Añadimos el final del verso
  verse += "\n";

  return verse;
}

// Generamos los doce versos de la canción
for (let i = 1; i <= 12; i++) {
  console.log(generateVerse(i));
}
console.log(generateVerse(12));