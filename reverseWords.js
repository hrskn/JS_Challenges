/*Write a reverseWords function that accepts a string a parameter, 
and reverses each word in the string.
Every space should stay, so you cannot use words from Prelude.*/

function reverseWords(str) {
 var reversed = [];
 str = str.split("").reverse().join("");
 str = str.split(" ");
 for (var i=str.length-1;i >= 0; i--) {
   reversed.push(str[i]);
 }

  return reversed.join(" ");
  
}
reverseWords("This is an example!");
// returns  "sihT si na !elpmaxe"