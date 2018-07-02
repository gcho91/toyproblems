function bouncer(arr) {
    // Don't show a false ID to this bouncer.
  
   return arr.filter(x => Boolean(x) )
    
    
  }
  
  bouncer([7, "ate", "", false, 9]);

//   Boolean (x) returns true or false
//filter method creates new array that passes test
// if Boolean(x) returns true, returns every element in array that passes test