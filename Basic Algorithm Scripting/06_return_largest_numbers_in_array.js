/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/


function largestOfFour(arr) {
  // You can do this!
  var result = [];
  // arr.length = 4
  for (var i = 0; i < arr.length; i++) {
    var largeNum = 0;
    // largeNum will be a number to compare the current number in the array
    for (var j = 0; j < arr[i].length; j++) {
      // arr[i].length will be the subarrays length
      if (arr[i][j] > largeNum) {
        // example: arr[0][0] = 4
        // 4 > 0 => then largeNum will equal to 4 
        largeNum = arr[i][j];
      }
      result[i] = largeNum;
      // store largeNum which is 4 for arr[0][0] to the temp result array
    }
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
