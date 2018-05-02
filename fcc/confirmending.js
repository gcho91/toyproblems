
function confirmEnding(str, target) {
    return str.substring(str.length-target.length) === target ;
     
 }
 
 confirmEnding("Bastian", "n");

 
 // substr 


function confirmEnding(str, target) {
  
  
    return str.substr(-target.length) === target.toLowerCase();
  }

// Negative Substr starts counting from index from back