// Definimos la interfaz para almacenar el valor de las alergias y sus nombres correspondientes
interface IAlergenos {
  [key: string]: number;
}

// Definimos un objeto con los alérgenos y sus valores
const alergenos: IAlergenos = {
  huevos: 1,
  cacahuetes: 2,
  mariscos: 4,
  fresas: 8,
  tomates: 16,
  chocolate: 32,
  polen: 64,
  gatos: 128,
};

// Función para determinar si el número de alergia dado corresponde a un alérgeno específico
function esAlergico(numeroDeAlergia: number, alergeno: string): boolean {
  return !!(numeroDeAlergia & alergenos[alergeno]);
}

// Función para obtener la lista de alergias a partir del número de alergia dado
function obtenerAlergias(numeroDeAlergia: number): string[] {
  const alergias: string[] = [];

  // Recorremos los alérgenos en orden inverso para agregar primero los de mayor valor
  for (const alergeno of Object.keys(alergenos).reverse()) {
    if (esAlergico(numeroDeAlergia, alergeno)) {
      alergias.push(alergeno);
      numeroDeAlergia -= alergenos[alergeno];
    }
  }

  // Si queda un valor sobrante, entonces es alérgico a los huevos
  if (numeroDeAlergia !== 0) {
    alergias.push("huevos");
  }

  return alergias;
}

// Función para determinar si la persona es alérgica a un alérgeno específico
function esAlergicoAPersona(score: number, alergeno: string): boolean {
  return esAlergico(score, alergeno);
}

// Ejemplo:
const scoreTom: number = 34; // Tom es alérgico a los cacahuetes y al chocolate
console.log(obtenerAlergias(scoreTom)); // Salida: [ "cacahuetes", "chocolate" ]
console.log(esAlergicoAPersona(scoreTom, "huevos")); // Salida: false

const scoreDavid: number = 257;
console.log(obtenerAlergias(scoreDavid)); // Salida: [ "huevos" ]
console.log(esAlergicoAPersona(scoreDavid, "huevos")); // Salida: true

const scoreEmilio: number = 96;
console.log(obtenerAlergias(scoreEmilio)); // Salida: [ "huevos" ]
console.log(esAlergicoAPersona(scoreEmilio, "huevos")); // Salida: true