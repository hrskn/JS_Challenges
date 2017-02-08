/* Convert to roman numerals*/
function convertToRoman(num) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var newString = '';
for (var [key, value] of Object.entries(roman)) {
   while (num >= value) {
     newString += key;
     num -= value;
   }
}
  return newString;
}
convertToRoman(36);
