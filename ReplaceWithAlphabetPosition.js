/*Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. As an example:*/
 function alphabetPosition(text) {
  var alpha = ['a','b','c','d','e','f' ,'g' ,'h','i','j','k','l','m','n',
  'o' ,'p','q' ,'r','s','t' ,'u' ,'v' ,'w' ,'x','y','z'];

  text = text.toLowerCase();
  var newText = [];

  for (letter of text) {
    if (alpha.indexOf(letter) !== -1) {
          newText.push(alpha.indexOf(letter)+1);
       }
  }

  return newText.join(" ");

}
alphabetPosition("The sunset sets at twelve o' clock.");
