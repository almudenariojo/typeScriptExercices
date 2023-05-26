// Enumeración para las direcciones posibles
enum Direction {
  North,
  East,
  South,
  West
}

// Interfaz para la posición del robot
interface Position {
  x: number,
  y: number
}

// Interfaz para el robot
interface Robot {
  position: Position,
  direction: Direction
}

// Función para mover el robot
function moveRobot(robot: Robot, instructions: string): Robot {
  // Convertir la cadena de instrucciones a un array de caracteres
  const moves = instructions.split('');

  // Iterar sobre cada movimiento
  for (const move of moves) {
    switch (move) {
      case 'R':
        // Girar a la derecha
        robot.direction = (robot.direction + 1) % 4;
        break;
      case 'L':
        // Girar a la izquierda
        robot.direction = (robot.direction + 3) % 4;
        break;
      case 'A':
        // Avanzar en la dirección actual
        switch (robot.direction) {
          case Direction.North:
            robot.position.y++;
            break;
          case Direction.East:
            robot.position.x++;
            break;
          case Direction.South:
            robot.position.y--;
            break;
          case Direction.West:
            robot.position.x--;
            break;
        }
        break;
    }
  }

  return robot;
}

// Ejemplo
const robot: Robot = {
  position: { x: 7, y: 3 },
  direction: Direction.North
};

const instructions = 'RAALAL';
const newRobot = moveRobot(robot, instructions);

console.log(`Posición final: (${newRobot.position.x}, ${newRobot.position.y})`);
console.log(`Dirección final: ${Direction[newRobot.direction]}`);
