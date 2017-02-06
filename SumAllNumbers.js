/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.*/

function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);

  for (var i = min+1; i < max; i++) {
    arr.push(i);
  }
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  var sum = arr.reduce(function(a, b) {
  return a + b;
}, 0);
  return sum;
}
sumAll([1, 4]);
