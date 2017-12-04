
function titleCase(str) {
  var split= str.split(" ");
var gloria = split.map(function(x, index) {
  // console.log(x[0].toUpperCase())
  return x[0].toUpperCase() + x.toLowerCase().substring(1)
})
console.log(gloria.join(" "))
  return gloria.join(" ")
}
