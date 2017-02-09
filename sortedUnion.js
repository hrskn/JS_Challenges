/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.*/
function uniteUnique(arr1) {

   var args = []
   for (var i = 1; i < arguments.length; i++) {
     args.push(arguments[i]);
   }
   arr1 = arr1.concat(...args);
   uniqueArray = arr1.filter(function(item, pos) {
     return arr1.indexOf(item) == pos;
   });

   return uniqueArray;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
