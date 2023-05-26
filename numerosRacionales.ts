// Clase que representa un número racional
class RationalNumber {
private _numerator: number;
private _denominator: number;

constructor(numerator: number, denominator: number) {
// Se calcula el máximo común divisor para reducir el número a su forma más simple
const gcd = this.gcd(numerator, denominator);
this._numerator = numerator / gcd;
this._denominator = denominator / gcd;
// Si el denominador es negativo, se cambian el signo del numerador y el denominador
if (this._denominator < 0) {
this._numerator *= -1;
this._denominator *= -1;
}
}

// Getters para acceder a los valores del numerador y el denominador
get numerator() {
return this._numerator;
}

get denominator() {
return this._denominator;
}

// Función que calcula el máximo común divisor entre dos números utilizando el algoritmo de Euclides
private gcd(a: number, b: number): number {
if (b === 0) {
return a;
}
return this.gcd(b, a % b);
}

// Función que suma dos números racionales y devuelve un nuevo objeto de la clase RationalNumber con el resultado
add(other: RationalNumber): RationalNumber {
const numerator = this._numerator * other.denominator + other.numerator * this._denominator;
const denominator = this._denominator * other.denominator;
return new RationalNumber(numerator, denominator);
}

// Función que resta dos números racionales y devuelve un nuevo objeto de la clase RationalNumber con el resultado
subtract(other: RationalNumber): RationalNumber {
const numerator = this._numerator * other.denominator - other.numerator * this._denominator;
const denominator = this._denominator * other.denominator;
return new RationalNumber(numerator, denominator);
}

// Función que multiplica dos números racionales y devuelve un nuevo objeto de la clase RationalNumber con el resultado
multiply(other: RationalNumber): RationalNumber {
const numerator = this._numerator * other.numerator;
const denominator = this._denominator * other.denominator;
return new RationalNumber(numerator, denominator);
}

// Función que divide dos números racionales y devuelve un nuevo objeto de la clase RationalNumber con el resultado
divide(other: RationalNumber): RationalNumber {
const numerator = this._numerator * other.denominator;
const denominator = this._denominator * other.numerator;
return new RationalNumber(numerator, denominator);
}

// Función que devuelve el valor absoluto del número racional como un nuevo objeto de la clase RationalNumber
absoluteValue(): RationalNumber {
const numerator = Math.abs(this._numerator);
const denominator = Math.abs(this._denominator);
return new RationalNumber(numerator, denominator);
}

// Función que eleva el número racional a una potencia entera y devuelve un nuevo objeto de la clase RationalNumber con el resultado
power(n: number): RationalNumber {
if (n === 0) {
return new RationalNumber(1, 1);
}
const absN = Math.abs(n);
    const numerator = Math.pow(this._numerator, absN);
    const denominator = Math.pow(this._denominator, absN);
    const result = new RationalNumber(numerator, denominator);
    if (n < 0) {
      return new RationalNumber(result.denominator, result.numerator);
    }
    return result;
  }

  powerReal(x: number): number {
    return Math.pow(this._numerator, x) / Math.pow(this._denominator, x);
  }

  static powerReal(x: number, r: RationalNumber): number {
    return Math.pow(x, r.numerator / r.denominator);
  }

  toString(): string {
    return `${this._numerator}/${this._denominator}`;
  }
}

// Ejemplo de uso
const r1 = new RationalNumber(3, 2);
const r2 = new RationalNumber(1, 4);
console.log(`r1 = ${r1.toString()}`);
console.log(`r2 = ${r2.toString()}`);

console.log(`r1 + r2 = ${r1.add(r2).toString()}`);
console.log(`r1 - r2 = ${r1.subtract(r2).toString()}`);
console.log(`r1 * r2 = ${r1.multiply(r2).toString()}`);
console.log(`r1 / r2 = ${r1.divide(r2).toString()}`);

