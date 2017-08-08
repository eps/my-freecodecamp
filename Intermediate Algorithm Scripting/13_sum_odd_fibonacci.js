/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {

  var list = fibsUpTo(num);
  var total = 0;

  //get the sum of all odd numbers
  for (var i = 0; i < list.length; i++) {
    if (list[i] % 2 == 1) {
      total += list[i];
    }
  }
  return total;
}


function fibsUpTo(num) {

  if (num === 1) {
    return [1,1];
  }

  var list = [1,1];

  while(true) {
    //get the next number
    var next = list[list.length-1] + list[list.length-2];
    if (next <= num) {
      list.push(next);
    } else {
      return list;
    }
  }

}

fibsUpTo(4);
