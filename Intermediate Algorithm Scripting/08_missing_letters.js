/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {

  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    console.log('not missing', char);
    if (char !== str.charCodeAt(0) + i) {
      var missing = char-1;
      return String.fromCharCode(missing);
    }
  }
  return undefined;
}

fearNotLetter("abce");
