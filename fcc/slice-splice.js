function frankenSplice(arr1, arr2, n) {
    let arr2copy= arr2.slice();
  arr2copy.splice(n,0,...arr1)
  return arr2copy
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

// create shallow copy of arr2 with slice
// splice the copy
// return spliced copy

// ...spread operator to remove [] 