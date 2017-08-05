/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/


function pairElement(str) {

  var result = [];

  var getChar = function(char){
    console.log('testing', char);
    switch (char) {
      case 'A':
        result.push(['A','T']);
        break;
      case 'T':
        result.push(['T','A']);
        break;
      case 'C':
        result.push(['C','G']);
        break;
      case 'G':
        result.push(['G','C']);
        break;
    }
  };


  for(var i=0;i<str.length;i++) {
    getChar(str[i]);
  }
  return result;
}

pairElement("ATCGA");
