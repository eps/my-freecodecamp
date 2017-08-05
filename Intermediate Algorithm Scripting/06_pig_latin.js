/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {

  var result = str.split('');
      vowels = ['a','e','i','o','u'],
      consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];


  if (vowels.includes(str[0])) {
    return str += "way";
  } else {
    for (var i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        result.push(result.shift())
      } else {
        result.push('ay');
        return result.join('');
      }
    }
  }
}

translatePigLatin("glove");
