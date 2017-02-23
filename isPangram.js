/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram.
 Return True if it is, False if not. Ignore numbers and punctuation.
*/
function isPangram(string){
   let alphabet = new RegExp("^[a-zA-Z]+$");
   let length = 0;
   let pangram = [];
   for (letter of string) {
       if (alphabet.test(letter)) {
          if (!pangram.includes(letter)){
              pangram.push(letter);
          }
       }     
    }
  if (pangram.length == 27 || pangram.length == 26  ) {
    return true
  } else {
    return false;
  }

}
isPangram("The quick brown fox jumps over the lazy dog.");