  /* ========================================================================
    6. Write a JavaScript program which iterates the integers from 1 to 100.
    But for multiples of three print "Fizz" instead of the number and for the
    multiples of five print "Buzz". For numbers which are multiples of both
    three and five print "FizzBuzz"
  ========================================================================= */

function buzzfuzzmultiply(numbers) {
           
    if (numbers % 3 === 0 && numbers % 5 === 0){
        console.log('FizzBuzz');
    } 
    else if(numbers % 3 === 0) {
        console.log('Fizz');
    } 
    else if(numbers % 5 === 0) {
        console.log('Buzz');
    } 
    else {
        console.log('Error'); 
    }
}
buzzfuzzmultiply(100);
