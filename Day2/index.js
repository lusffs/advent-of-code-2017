var rows = require("./manipulated_input.js");
var sum = 0;

for (var i = 0; i < rows.length; i++) {
  values = rows[i].split("\t");
  sum += Math.max(...values) - Math.min(...values);
}

console.log("Part 1: ", sum); //45972
