// filterEvenElements

// Write a function called "filterEvenElements".

// Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.

function filterEvenElements(arr) {
    // your code here
    let result = arr.filter(el => el % 2 === 0)
    return result
  }
  
  var output = filterEvenElements([2, 3, 4, 5, 6]);
  console.log(output); // --> [2, 4, 6]