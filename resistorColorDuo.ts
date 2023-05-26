// Función para decodificar el valor de dos colores en una resistencia
function decodedValue(colors: string[]): number {
// Códigos de colores y su valor numérico
const colorCodes: { [key: string]: number } = {
black: 0,
brown: 1,
red: 2,
orange: 3,
yellow: 4,
green: 5,
blue: 6,
violet: 7,
grey: 8,
white: 9,
};

// Obtener el valor numérico de cada color y calcular el valor de la resistencia
const firstColor = colorCodes[colors[0]];
const secondColor = colorCodes[colors[1]];
const resistanceValue = firstColor * 10 + secondColor;

return resistanceValue;
}

// Ejemplo
const colors = ["brown", "black", "red"];
const decoded = decodedValue(colors);
console.log(`El valor decodificado de ${colors.join("-")} es ${decoded}`);