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
    values = rows[i]
      .split("\t")
      .map(Number)
      .sort((a, b) => b - a);

    var dividedValue = 0;

    for (var x = 0; x < values.length; x++) {
      for (var j = 0; j < values.length; j++) {
        if (values[j] != values[x] && values[j] % values[x] == 0) {
          dividedValue = values[j] / values[x];
          break;
        }
      }
    }
    sum += dividedValue;
  }
  return sum;
}
console.log("Part 1: ", Step1(rows)); // 45972
console.log("Part 2: ", Step2(rows)); // 326
