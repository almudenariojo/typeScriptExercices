function twoFer(name?: string): string {
    if (name) {
      return `One for ${name}, one for me.`; // utiliza comillas invertidas para incluir el valor de la variable `name`.
    } else {
      return 'One for you, one for me.'; // devuelve una cadena sin variables.
    }
  }
  
  console.log(twoFer()); // imprime "One for you, one for me."
  console.log(twoFer('Alice')); // imprime "One for Alice, one for me."
  console.log(twoFer('Bob')); // imprime "One for Bob, one for me."
  
  