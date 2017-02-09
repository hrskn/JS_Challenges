/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.*/
function pairElement(str) {
  var dnapairs = [];
  str = str.split("");
  let pair = "";
  for (dna of str) {
   switch (dna) {
     case "G":
       pair = "C";
       dnapairs.push([...dna+pair]);
       break;

     case "C":
       pair = "G";
       dnapairs.push([...dna+pair]);
       break;
     case "A":
       pair = "T";
       dnapairs.push([...dna+pair]);
       break;

     case "T":
       pair = "A";
       dnapairs.push([...dna+pair]);
       break;

     default:
      break;
    }
  }
  return dnapairs;
}

pairElement("ATCGA");
