var fs = require("fs");
var inputFile = fs
  .readFileSync("./Day5/input.txt", "utf8")
  .split("\n")
  .map(Number);
var inputFile2 = fs
  .readFileSync("./Day5/input.txt", "utf8")
  .split("\n")
  .map(Number);

function Part1(input) {
  var outsideMaze = false;
  var currentIndex = 0;
  var jumps = 0;

  while (!outsideMaze) {
    var offset = input[currentIndex];

    //Increment current index by one
    input[currentIndex]++;

    //Jump forward/backward the offset value
    currentIndex += offset;

    //Count the number of jumps
    jumps++;

    if (currentIndex > input.length - 1) outsideMaze = true;
  }
  return jumps;
}

function Part2(input) {
  var outsideMaze = false;
  var currentIndex = 0;
  var jumps = 0;

  while (!outsideMaze) {
    var offset = input[currentIndex];

    //Increment current index by one
    if (offset >= 3) {
      input[currentIndex]--;
    } else {
      input[currentIndex]++;
    }

    //Jump forward/backward the offset value
    currentIndex += offset;

    //Count the number of jumps
    jumps++;

    if (currentIndex > input.length - 1) outsideMaze = true;
  }
  return jumps;
}

module.exports = { Part1, Part2 };

//Function mutates the inputFile vaiable between the two Steps ;) Don't run them in succession with the same input, cause JavaScript ;)
console.log("Step1: ", Part1(inputFile)); // 318883
console.log("Step2: ", Part2(inputFile2)); // 23948711
