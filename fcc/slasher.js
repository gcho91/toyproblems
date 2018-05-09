
function slasher(arr, howMany) {
    // it doesn't always pay to be first
     arr.splice(0,howMany);
    return arr;
  }
  
  slasher([1, 2, 3], 2);
  

  function slasher(arr, howMany) {
    // it doesn't always pay to be first
    return arr.splice(howMany);
    //behaves differently but prob a bad habit, modifies arr
  }
  
  slasher([1, 2, 3], 2);
  

// .slice() does not modify orig array 
function slasher(arr, howMany) {
    return arr.slice(howMany);
  }
  
  slasher([1, 2, 3], 2);
  