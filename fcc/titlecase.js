function titleCase(str) {
var gloria = str.split(" ").map(function(x, ind) {
  return x[0].toUpperCase() + x.toLowerCase().substring(1)
})
return gloria.join(" ")

}
