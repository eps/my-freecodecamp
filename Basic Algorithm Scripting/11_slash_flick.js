/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/


function slasher(arr, howMany) {
  // it doesn't always pay to be first

  arr.splice(0, howMany);
  return arr;

}

slasher([1, 2, 3], 2);


// slice(1, 3) extract items in an array from index 1-2
// does not inlude the end index

//splice(start 3, delete 1), removes 1 item from index3
