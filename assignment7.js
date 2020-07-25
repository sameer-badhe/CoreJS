  /* ========================================================================
    7. Write a JavaScript function that reverse a number.
      Example x = 32243;
      Expected Output : 34223
  ========================================================================= */

var x = 12345;
function reverse(num) {
  return num.toString().split("").reverse();
}
console.log(reverse(x));
