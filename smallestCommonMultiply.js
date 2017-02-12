// noprotect
function smallestCommons(arr) {
 arr = arr.sort();
 var firstNumber = arr[0];
 var lastNumber = arr[1];
 var numbers = [];

 for (var i = firstNumber; i < lastNumber+1; i++) {
   numbers.push(i);
 }

 var commonNum = 0;

 var count = 0;
 while(count !== numbers.length) {

   commonNum++;
   for(var j=numbers[0]; j <= numbers[numbers.length-1];j++) {
      if (commonNum % j !== 0) {
          count = 0;
          break;
      }
      else if (commonNum % j == 0) {
           count++;
      }

   }
 }
 console.log(commonNum);
 return commonNum;
}
smallestCommons([1, 5]);
