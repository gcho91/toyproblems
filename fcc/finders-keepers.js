// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function findElement(arr, func) {
  let num = 0;
  return arr.find(func)
}

// notes

function findElement(arr, func) {
    let num = 0;
    return num;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  
  // func = even test. is it even 
  
  var array1 = [5, 12, 8, 130, 44];
  
  function test(num){
    // return num % 2 === 0
    return 5;
  }


