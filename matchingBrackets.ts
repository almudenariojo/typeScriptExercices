 

function matchingBrackets(input: string): boolean {

  const symbolPairs = {

    '[': ']',

    '(': ')',

    '{': '}',

  };

  const symbols = Object.keys(symbolPairs);

  const stack = [];

  let lastSymbol: string | undefined;

 

  for (const symbol of input) {

    if (symbols.includes(symbol)) {

      stack.push(symbol);

      lastSymbol = symbol;

    } else if (Object.values(symbolPairs).includes(symbol)) {

      if (lastSymbol === undefined || symbolPairs[lastSymbol as keyof typeof symbolPairs] !== symbol) {

        return false;

      }

      stack.pop();

      lastSymbol = stack.length === 0 ? undefined : stack[stack.length - 1];

    }

  }

  return stack.length === 0;

}
 
// Ejemplo
console.log(matchingBrackets('[()]{}{[()()]()}')); // true
console.log(matchingBrackets('[(])')); // false
 