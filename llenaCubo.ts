function medirFluidos(
  tamanoCuboUno: number,
  tamanoCuboDos: number,
  litrosDeseados: number,
  llenarPrimero: "cuboUno" | "cuboDos"
): [number, "cuboUno" | "cuboDos", number] {
  let cuboUno = 0;
  let cuboDos = 0;
  let acciones = 0;

  while (cuboUno !== litrosDeseados && cuboDos !== litrosDeseados) {
    if (llenarPrimero === "cuboUno") {
      if (cuboUno === 0) {
        // llenar cuboUno
        cuboUno = tamanoCuboUno;
        acciones++;
      } else if (cuboUno + cuboDos > tamanoCuboDos) {
        // verter desde cuboUno a cuboDos hasta que cuboDos esté lleno
        const espacioRestante = tamanoCuboDos - cuboDos;
        cuboUno -= espacioRestante;
        cuboDos = tamanoCuboDos;
        acciones++;
      } else {
        // verter todo el contenido de cuboUno a cuboDos
        cuboDos += cuboUno;
        cuboUno = 0;
        acciones++;
      }
      // verificar si cuboDos contiene ahora los litros deseados
      if (cuboDos === litrosDeseados) {
        return [acciones, "cuboDos", cuboUno];
      }
      // vaciar cuboDos y empezar de nuevo
      cuboDos = 0;
      acciones++;
    } else {
      if (cuboDos === 0) {
        // llenar cuboDos
        cuboDos = tamanoCuboDos;
        acciones++;
      } else if (cuboUno + cuboDos > tamanoCuboUno) {
        // verter desde cuboDos a cuboUno hasta que cuboUno esté lleno
        const espacioRestante = tamanoCuboUno - cuboUno;
        cuboDos -= espacioRestante;
        cuboUno = tamanoCuboUno;
        acciones++;
      } else {
        // verter todo el contenido de cuboDos a cuboUno
        cuboUno += cuboDos;
        cuboDos = 0;
        acciones++;
      }
      // verificar si cuboUno contiene ahora los litros deseados
      if (cuboUno === litrosDeseados) {
        return [acciones, "cuboUno", cuboDos];
      }
      // vaciar cuboUno y empezar de nuevo
      cuboUno = 0;
      acciones++;
    }
  }

  // código inalcanzable, pero requerido por TypeScript
  return [0, "cuboUno", 0];
}

const [acciones, cuboFinal, litrosRestantes] = medirFluidos(3, 5, 2, "cuboUno");
console.log(`Se necesitaron ${acciones} acciones para medir 2 litros.`);
console.log(`El cubo ${cuboFinal} terminó con los 2 litros deseados.`);
console.log(`Quedaron ${litrosRestantes} litros en el otro cubo.`);
