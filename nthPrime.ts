function findPrimeNumber(n: number){
  //declara un contador y una variable para el último número primo
  var c = 1, nPrime = 2, i = 3; 
  console.log('c %s nPrime %s',c,nPrime);

  //función que determina si un número es primo
  function isPrime(k: number){ 
    for( var j = 2; j < k; j++){
      if( k % j === 0 ){ return false; } 
    }
    return true;
  }

  //bucle que se ejecuta hasta encontrar el enésimo número primo
  while(c < n){ 
  //comprueba si cada número es primo
  //si es primo, incrementa el contador y actualiza el número primo
    if( isPrime(i) ) {  
      c++; 
      nPrime = i; 
    }
    i++; 
  } 
   
  return nPrime;
}

console.log(findPrimeNumber(156)); // encuentra el 156º número primo y lo muestra en la consola
