var string = "A-tisket a-tasket A green and yellow basket"
string.length

function truncateString(str, num) {
  // if str.length > num, return str slice num -3;
  if (num <= 3) {
    return str.slice(0,num) + "..."
  }

  if (str.length > num) {
    return str.slice(0, num-3) + "...";
  }  
  else {
    return str;
  }
}


//Advanced
function truncateString(str, num) {
    if (str.length > num)
      return str.slice(0, num > 3 ? num-3 : num) + '...';
    return str;
  }
  
  
  truncateString("A-tisket a-tasket A green and yellow basket","A-tisket a-tasket A green and yellow basket".length)
  
  
  
  