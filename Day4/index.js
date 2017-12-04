var fs = require("fs");
var input = fs.readFileSync("./Day4/input.txt", "utf8");

var input_rows = input.split("\n");

var correct_phrases = 0;

for (var i = 0; i < input_rows.length; i++) {
  if (input_rows[i] === "") {
    continue;
  }
  var check_array = [];
  var cols = input_rows[i].split(" ");
  var valid = true;

  for (var j = 0; j < cols.length; j++) {
    if (check_array.indexOf(cols[j]) === -1) {
      check_array.push(cols[j]);
    } else {
      valid = false;
    }
  }

  if (valid) {
    correct_phrases++;
  }
}

console.log(correct_phrases); //325
