// Define la cantidad de segundos en un año en la Tierra
const EARTH_YEAR_SECONDS = 31557600;

// Define un tipo de dato que se refiere a los planetas del sistema solar
type Planet = 'earth' | 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

// Define los períodos orbitales de los planetas en relación con la Tierra
const ORBITAL_PERIODS: Record<Planet, number> = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

// Define una función que acepta el planeta y la cantidad de segundos como parámetros y devuelve la edad en años en el planeta dado
function age(planet: Planet, seconds: number): number {
  // Calcula el período orbital del planeta multiplicando el período orbital de la Tierra por el factor orbital del planeta
  const orbitalPeriod = ORBITAL_PERIODS[planet] * EARTH_YEAR_SECONDS;
  // Calcula la edad en años dividiendo la cantidad de segundos por el período orbital
  const ageOnPlanet = seconds / orbitalPeriod;
  // Devuelve la edad en años redondeada a 2 decimales
  return Number(ageOnPlanet.toFixed(2));
}

// Define la cantidad de segundos que se desea convertir a años en otro planeta
const edadEnSegundos = 1000000000;
// Calcula la edad de una persona en años en Marte
const edadEnAniosMarcianos = age('mars', edadEnSegundos);
// Imprime el resultado de la conversión
console.log(`Tu edad en años marcianos es ${edadEnAniosMarcianos}`);
