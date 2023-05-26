class Robot {
  private name: string; // El nombre es privado y solo se puede acceder a través de los métodos públicos
  
  constructor() {
    this.name = this.generateName(); // Al crear un Robot, se genera un nombre nuevo automáticamente
  }
  
  public getName(): string { // Método público para obtener el nombre del Robot
    return this.name;
  }
  
  public resetName(): void { // Método público para reiniciar el nombre del Robot
    this.name = this.generateName(); // Se genera un nuevo nombre y se asigna a la propiedad de nombre del Robot
  }
  
  private generateName(): string { // Método privado para generar un nuevo nombre aleatorio para el Robot
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letras disponibles para usar en el nombre
    let name = "";
    for (let i = 0; i < 2; i++) { // Se agregan dos letras aleatorias del conjunto de letras disponibles
      name += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 3; i++) { // Se agregan tres dígitos aleatorios al nombre
      name += Math.floor(Math.random() * 10);
    }
    return name; // Devuelve el nombre generado
  }
}

  
  const robot1 = new Robot();
  console.log(robot1.getName()); // Ejemplo de salida: 'NE753'
  
  const robot2 = new Robot();
  console.log(robot2.getName()); // Ejemplo de salida: 'BW409'
  
  robot1.resetName();
  console.log(robot1.getName()); // Ejemplo de salida: 'FR216'
  