class PalindromeProducts {
  private products: Map<number, Set<[number, number]>>;

  constructor(min: number, max: number) {
    this.products = new Map();

    // Recorre todos los pares de números dentro del rango especificado
    for (let i = min; i <= max; i++) {
      for (let j = i; j <= max; j++) {
        const product = i * j;

        // Si el producto es palíndromo, lo añade al mapa de productos y sus factores
        if (this.isPalindrome(product)) {
          if (!this.products.has(product)) {
            this.products.set(product, new Set());
          }
          this.products.get(product)?.add([i, j]);
        }
      }
    }
  }

  // Comprueba si un número es palíndromo
  private isPalindrome(num: number): boolean {
    const numStr = num.toString();
    return numStr === numStr.split("").reverse().join("");
  }

  // Devuelve el palíndromo más pequeño encontrado
  public getSmallest(): number {
    return Math.min(...this.products.keys());
  }

  // Devuelve el palíndromo más grande encontrado
  public getLargest(): number {
    return Math.max(...this.products.keys());
  }

  // Devuelve todos los factores del palíndromo especificado
  public getFactors(num: number): [number, number][] {
    return [...this.products.get(num)?.values() ?? []];
  }
}

// Crea una instancia de PalindromeProducts con el rango especificado
const palindromes = new PalindromeProducts(1, 9);

// Obtiene el palíndromo más pequeño y sus factores
const smallest = palindromes.getSmallest();
console.log(`El palíndromo más pequeño es ${smallest} y sus factores son ${JSON.stringify(palindromes.getFactors(smallest))}`);

// Obtiene el palíndromo más grande y sus factores
const largest = palindromes.getLargest();
console.log(`El palíndromo más grande es ${largest} y sus factores son ${JSON.stringify(palindromes.getFactors(largest))}`);
