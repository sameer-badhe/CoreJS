
function primeNumber(number) { 
  for(var i = 2; i < number; i++)
      if(number % i === 0) return false;
      return number > 1;
  }
console.log(primeNumber(2));
        
 