// select

// Write a function called "select".

// Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.

// Notes:

// If keys are present in the given array, but are not in the given object, it should ignore them.
// It does not modify the passed in object.

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function select(arr, obj) {
  // your code here
  let newObj = {};
  for(let key in obj){
    for (let i in arr){
      if(key === arr[i]){
        console.log(newObj)
      newObj[key] = obj[key]
      }
    }
  }
  return newObj
}

var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }