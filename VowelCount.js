/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.*/

function getCount(str) {
  var vowelsCount = 0;
  for (letter of str) {
    if(/[aeiou]/.test(letter)) {
     vowelsCount++;
    }   
  }
 return vowelsCount;
}