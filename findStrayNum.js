/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Implement the method stray which accepts such array, and returns that single different number.
The input array will always be valid! (odd-length >= 3) */

function stray(numbers) {
   numbers.sort();
   var numStart = numbers[0];
   var numEnd = numbers[numbers.length-1]
   var countStart = 0;
   var countEnd = 0;
    
    for (num of numbers) {
         if (num === numStart) {
             countStart++;
         } else {
          countEnd++;
        }
    }
    if (countStart > countEnd) {
       return  numEnd;
    }
    else {
      return numStart;
     
  }
