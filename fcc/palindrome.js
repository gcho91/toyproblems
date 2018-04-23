
function palindrome(str) {
    // Good luck!
  //   var lower= str.toLowerCase();
  //   var removedSymbols = lower.replace(/[^A-Z0-9]+/ig, "");
  //   var reversedStr;
    
  //   //if str and str.split("").reverse().join("") is same as str, return true
  //   reversedStr = removedSymbols.split("").reverse().join("");
  //   if (removedSymbols === reversedStr) {
  //     return true;
  //   } return false;
    
    
    return str.toLowerCase().replace(/[^A-Z0-9]+/ig, "") ===  str.toLowerCase().replace(/[^A-Z0-9]+/ig, "").split("").reverse().join("");
  }
  
  
  
  
  
  
  palindrome("race car");
  