/*Perform a search and replace on the sentence using the arguments provided and return the new sentence.*/
function myReplace(str, before, after) {

  var re = new RegExp(before,"g");

  if (before[0] == before[0].toUpperCase()) {
      after = after.split("");
      after[0] = after[0].toUpperCase();
      after = after.join("");
      return str.replace(re, after);
    }else {
      return str.replace(re, after);
    }
}


myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
