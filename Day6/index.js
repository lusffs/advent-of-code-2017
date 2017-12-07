var fs = require("fs");
var inputFile = fs
  .readFileSync("./Day6/input.txt", "utf8")
  .split("\t")
  .map(Number);
//.map(Number);
var inputFile2 = fs
  .readFileSync("./Day6/input.txt", "utf8")
  .split("\t")
  .map(Number);

function getAccessIndex(memoryBanks) {
  return memoryBanks.indexOf(Math.max(...memoryBanks));
}

function Part1(input) {
  var memoryBanks = input;
  var previousValues = [];
  var foundAPreviousValue = false;
  var cycles = 0;

  while (true) {
    var memoryIndex = getAccessIndex(memoryBanks);

    var value = memoryBanks[memoryIndex];
    memoryBanks[memoryIndex] = 0;

    for (var i = 0; i < value; i++) {
      var takeIndex = i + memoryIndex + 1;

      if (takeIndex >= memoryBanks.length) {
        takeIndex = takeIndex - memoryBanks.length;
      }
      memoryBanks[takeIndex]++;
    }

    var currentMemorySetup = input.join();
    cycles++;
    if (previousValues.indexOf(currentMemorySetup) !== -1) {
      break;
    }
    previousValues.push(currentMemorySetup);
  }

  return cycles;
}

function Part2(input) {
  return "No answer...";
}

module.exports = { Part1, Part2 };

//console.log("Step 1: ", Part1(inputFile)); //14029
console.log("Step 2: ", Part2(inputFile2));
