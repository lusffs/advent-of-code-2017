var fs = require("fs");
var input = fs.readFileSync("./Day4/input.txt", "utf8");

var input_rows = input.split("\n");

function Step1(input) {
  var correct_phrases = 0;

  for (var i = 0; i < input.length; i++) {
    if (input[i] === "") {
      continue;
    }
    var check_array = [];
    var cols = input[i].split(" ");
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
  return correct_phrases;
}

function Step2(input) {
  var correct_phrases = 0;

  for (var i = 0; i < input.length; i++) {
    if (input[i] === "") {
      continue;
    }
    var check_array = [];
    var cols = input[i].split(" ");
    var valid = true;

    for (var j = 0; j < cols.length; j++) {
      var sortedWord = cols[j]
        .split("")
        .sort()
        .join("");

      if (check_array.indexOf(sortedWord) === -1) {
        check_array.push(sortedWord);
      } else {
        valid = false;
      }
    }

    if (valid) {
      correct_phrases++;
    }
  }
  return correct_phrases;
}

//console.log("Step 1: ", Step1(input_rows)); //325
//console.log("Step 2: ", Step2(input_rows)); //119
