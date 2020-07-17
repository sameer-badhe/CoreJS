    array1 = [1,0,2,3,4];
    array2 = [3,5,6,7,8,13];
    var result = [];

    function FinalArray(array1, array2){
      let aa = 0;
      let bb = 0;
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
