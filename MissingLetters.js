/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {
  let numbers = [];
  numbers.push(str.charCodeAt(0));
  let count = numbers[0];
  let finalNumber = str.charCodeAt(str.length-1);
  let letter = "";
  while(finalNumber > count) {
    count++;
    numbers.push(count);
  }
  for (change of numbers) {
    letter += String.fromCharCode(change);
  }
 for (x of letter) {
   if (!str.includes(x)) {
       return x;
   }
 }
}

fearNotLetter("abce");
