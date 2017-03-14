/*reverseArrayInPlace, does what the reverse method does: 
it modifies the array given as argument in order to reverse its elements.
 May not use the standard reverse method.*/
var arr = [1, 2,  3, 4, 5];
function reverseArrayInPlace(arr) {
  var temp;
  for (let i = 0; i < arr.length; i++) {
      temp = arr[i];
      arr.splice(i,1)
      arr.unshift(temp);

  } 
  console.log(arr);
  
  
}
reverseArrayInPlace(arr);