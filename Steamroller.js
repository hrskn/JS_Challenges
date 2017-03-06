/*Flatten a nested array. You must account for varying levels of nesting.*/
function steamrollArray(arr) {
let count = 0;
while(count !== arr.length) {
  for (num of arr) {
    if (Array.isArray(num)) {
      arr = [].concat.apply([], arr); 
      count = 0;
    } else {
      count++;
    }
  }  
}
return arr;
}

steamrollArray([1, {}, [3, [[4]]]])
