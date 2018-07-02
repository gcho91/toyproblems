var array1=[2,2,2,2]
var array2=[1,2,3,4]

function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    var length = marks.length
    
    const reducer=(accum,currentValue) => accum+currentValue;
  
    var sum= marks.reduce(reducer);
  
    return Math.floor(sum/length);
    
  }


// one line
function getAverage2(marks) {
    return Math.floor( marks.reduce( (accum, currentVal) => accum+currentVal  )   / marks.length )
}

console.log(getAverage2(array2));

// Concepts: array, sum, reduce, floor