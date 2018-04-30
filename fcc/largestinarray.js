
function largestOfFour(arr) {

    var largest = [];
    
  
    for (var i=0; i<arr.length; i++) {
   var max= Math.max.apply(null, arr[i]);
    largest.push(max);
  }
    return largest;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26]]);
  

//   http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
//  Study difference between .bind() and .apply();