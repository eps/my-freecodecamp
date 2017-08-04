/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/


function findLongestWord(str) {

  var splitStr = str.split(' ');
  var tempStr = 0;

  for (var i = 0; i < splitStr.length;i++) {
    if (splitStr[i].length > tempStr) {
      tempStr = splitStr[i].length;
    }
  }
  return tempStr;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
