/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/


function rot13(str) { // LBH QVQ VG!
  
  var newString = "";

  for (var i = 0; i < str.length; i++){
    var charCode = str[i].charCodeAt();
    if (charCode < 65 || charCode > 90) {
      newString += str[i];
    } else if (charCode <= 77) {
      newString += String.fromCharCode(charCode+13);
    } else {
      newString += String.fromCharCode(charCode-13);
    }
  }
  return newString.replace(/-/g, ' ');
}

// Change the inputs below to test
rot13("SERR CVMMN!");
