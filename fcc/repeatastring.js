
function repeatStringNumTimes(str, num) {
    // repeat after me
    return num > 0 ? str.repeat(num) :  "";
  }
  
  repeatStringNumTimes("abc", 3);

  
// solution #2
function repeatStringNumTimes(str, num) {
    // repeat after me
    
    let empty = [];
    
    if (num>=0) {
    for (var i=0; i<num; i++) {
      empty.push(str);
    }
    return empty.join("")
    }
    return "";
  }
  
  repeatStringNumTimes("abc", 0);
  