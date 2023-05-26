// Definimos la clase AtbashCipher
class AtbashCipher {
  // Definimos las propiedades del alfabeto normal y el alfabeto cifrado
  private normalAlphabet: string;
  private cipheredAlphabet: string;

  // Definimos el constructor que inicializa las propiedades con los alfabetos correspondientes
  constructor() {
    this.normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    this.cipheredAlphabet = "zyxwvutsrqponmlkjihgfedcba";
  }

  // Definimos el método para cifrar un mensaje
  public encode(message: string): string {
    // Convertimos el mensaje a minúsculas y eliminamos la puntuación
    const normalizedMessage = message.toLowerCase().replace(/[^\w]/g, "");

    // Inicializamos la variable donde se guardará el mensaje cifrado
    let cipheredMessage = "";

    // Recorremos cada letra del mensaje y la reemplazamos con la letra correspondiente del alfabeto cifrado
      for (let i = 0; i < normalizedMessage.length; i++) {
        //método indexOf devuelve el índice de la primera aparición del elemento en el array
      const index = this.normalAlphabet.indexOf(normalizedMessage[i]);
      if (index !== -1) {
        cipheredMessage += this.cipheredAlphabet[index];
      } else {
        cipheredMessage += normalizedMessage[i];
      }
    }

    // Separamos el mensaje cifrado en grupos de 5 letras
    const groups = cipheredMessage.match(/.{1,5}/g);

    // Devolvemos el mensaje cifrado con los grupos separados por espacios
    return groups ? groups.join(" ") : "";
  }

  // Definimos el método para descifrar un mensaje
  public decode(cipheredMessage: string): string {
    // Eliminamos los espacios y convertimos el mensaje a minúsculas
    const normalizedMessage = cipheredMessage.replace(/\s/g, "").toLowerCase();

    // Inicializamos la variable donde se guardará el mensaje descifrado
    let decodedMessage = "";

    // Recorremos cada letra del mensaje cifrado y la reemplazamos con la letra correspondiente del alfabeto normal
    for (let i = 0; i < normalizedMessage.length; i++) {
      const index = this.cipheredAlphabet.indexOf(normalizedMessage[i]);
      if (index !== -1) {
        decodedMessage += this.normalAlphabet[index];
      } else {
        decodedMessage += normalizedMessage[i];
      }
    }

    // Devolvemos el mensaje descifrado
    return decodedMessage;
  }
}

// Creamos una instancia de la clase AtbashCipher
const cipher = new AtbashCipher();

// Codificamos el mensaje "test" y lo mostramos en consola
console.log(cipher.encode("test")); // Debería imprimir "gvhg"

// Decodificamos el mensaje "gvhg" y lo mostramos en consola
console.log(cipher.decode("gvhg")); // Debería imprimir "test"

// Decodificamos el mensaje "gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt" y lo mostramos en consola
console.log(cipher.decode("gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt")); // Debería imprimir "thequickbrownfoxjumpsoverthelazydog"
