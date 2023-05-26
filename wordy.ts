type Operation = "+" | "-" | "*" | "/";

function evaluateMathProblem(problem: string): number {
  // Separa la pregunta en partes, cada vez que encuentra "más", "menos", "multiplicado" o "dividido"
  const parts = problem.split(" ");
  let result = 0;
  let operation: Operation = "+";

  // Itera a través de cada parte de la pregunta y realiza la operación correspondiente
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (part === "+") {
      operation = "+";
    } else if (part === "-") {
      operation = "-";
    } else if (part === "*" || part === "x" || part === "por") {
      operation = "*";
    } else if (part === "/" || part === "dividido") {
      operation = "/";
    } else {
      const number = parseInt(part);
      if (!isNaN(number)) {
        switch (operation) {
          case "+":
            result += number;
            break;
          case "-":
            result -= number;
            break;
          case "*":
            result *= number;
            break;
          case "/":
            result /= number;
            break;
          default:
            break;
        }
      }
    }
  }

  return result;
}

// Ejemplos 
console.log(evaluateMathProblem("¿Qué es 5?")); // 5
console.log(evaluateMathProblem("¿Cuánto es 5 más 13?")); // 18
console.log(evaluateMathProblem("¿Cuánto es 7 menos 5?")); // 2
console.log(evaluateMathProblem("¿Cuánto es 6 multiplicado por 4?")); // 24
console.log(evaluateMathProblem("¿Cuánto es 25 dividido por 5?")); // 5
console.log(evaluateMathProblem("¿Cuánto es 5 más 13 más 6?")); // 24
console.log(evaluateMathProblem("¿Cuánto es 3 más 2 multiplicado por 3?")); // 15
console.log(evaluateMathProblem("¿Cuánto es 2 elevado a la quinta potencia?")); // 32

