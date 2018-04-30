function titleCase(str) {
var gloria = str.split(" ").map(function(x, ind) {
  return x[0].toUpperCase() + x.toLowerCase().substring(1)
})
return gloria.join(" ")

}



// 4/30/2018
function titleCase(str) {
  
    var words = str.split(" ");
    
    var upper = words.map(function(word) {
    return  word[0].toUpperCase() + word.substring(1).toLowerCase();
     
    });
    return upper.join(" ");
    
    
  }
  titleCase("I'm a little tea pot");


function titleCase(str) {
  var end = str.split(" ").map(function(word) {
   return word[0].toUpperCase() + word.substring(1).toLowerCase();
  });
  return end.join(" ");
}

titleCase("I'm a little tea pot");


  