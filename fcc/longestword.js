// My first solution


function findLongestWord(str) {
    var splitString =  str.split(" ");
    var arr = [];
  
  //   return splitString;
    for (var i=0; i<splitString.length; i++) {
      arr.push(splitString[i].length);
    }
    return Math.max.apply(null, arr);
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");

  
//   FCC Solution


function findLongestWord(str) {
    var words = str.split(" ");
    var longestLength = 0;
    
    for (var i=0; i<words.length; i++) {
      if (words[i].length > longestLength) {
      longestLength = words[i].length;
      }
    }
  return longestLength;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");
  