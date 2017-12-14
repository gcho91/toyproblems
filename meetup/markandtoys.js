function maximumToys(prices, k) {

var accum = 0;
var count = 0;

  var toys = prices.sort(function(a,b) {
    if (a>b) {
      return 1;
    } else {
      return -1;
    }
    return toys
  })

for (var i=0; i<toys.length; i++) {

  accum += toys[i];

  if (accum > k) {
      break;
  }
  count++;

}
return count;

}
maximumToys([500,1,50,80,60],50)
