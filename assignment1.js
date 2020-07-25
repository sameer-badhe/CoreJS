/* ========================================================================
    1. There are two arrays with individual values, write a JavaScript
        program to compute the sum of each individual index value from the
        given arrays.
        Sample array :
        array1 = [1,0,2,3,4, 22];
        array2 = [3,5,6,7,8,13, 11];
        Expected Output :
        [4, 5, 8, 10, 12, 13, 33]
  ========================================================================= */
    
  array1 = [1,0,2,3,4];
  array2 = [3,5,6,7,8,13];

  var result = [];
  // created FinalArray function and passed 2 array as a param
  function FinalArray(array1, array2){
    // created 2 variables and assigned the intitial value to 0
    let aa = 0;
    let bb = 0;
    // this while loop compares the array lengths to variables and 
    // push the values into the result array while 
    while (aa < array1.length && aa < array2.length) {
      result.push(array1[aa] + array2[aa]);
      aa++;
    }

    if (aa === array1.length) {
      for (bb = aa; bb < array2.length; bb++) {
        result.push(array2[bb]);
      }
    }
    else {
      for (bb = aa; bb < array1.length; bb++) {
        result.push(array1[bb]);
      }
    }
    return result;
  }

  console.log(FinalArray(array1, array2));
