/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 In other words, return the symmetric difference of the two arrays.*/
function diffArray(arr1, arr2) {
  var arr = arr1.concat(arr2);
  arr = arr.filter(function(i) {
    return arr.filter(function(j){
      return i == j;
    }).length == 1;
  });

  return arr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
