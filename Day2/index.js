var rows = require("./manipulated_input.js");

function Step1(rows) {
  var sum = 0;
  for (var i = 0; i < rows.length; i++) {
    values = rows[i].split("\t");
    sum += Math.max(...values) - Math.min(...values);
  }
  return sum;
}

function Step2(rows) {
  var sum = 0;
  for (var i = 0; i < rows.length; i++) {
    values = rows[i].split("\t");
    sum += Math.max(...values) - Math.min(...values);
  }
  return "-";
}
console.log("Part 1: ", Step1(rows)); //45972
console.log("Part 2: ", Step2(rows)); //-
