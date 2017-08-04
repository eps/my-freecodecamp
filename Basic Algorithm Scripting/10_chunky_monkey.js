/* Write a function that splits an array (first argument) into groups the length of
size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {

  var i = 0;
  var newArray = [];
  while (i < arr.length) {
    newArray.push(arr.slice(i, i+size));
    i+=size;
  }
  return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
