var fs = require("fs");

function readLines(filePath) {
  var lineReader = require("line-reader");
  var lines = [];
  // read all lines:
  lineReader
    .eachLine(filePath, function(line) {
      console.log(line);
      lines.push(line);
    })
    .then(function(err) {
      if (err) throw err;

      console.log("I'm done!!");
      console.log(lines);
    });

  console.log("lines: ", lines);
}

readLines("./Day2/input.txt");
/*
var input = "";

fs.readFile("./Day2/input.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  input = data;
});

var lineReader = require("readline").createInterface({
  input: fs.createReadStream("./Day2/input.txt")
});
var rows = [];

lineReader.on("line", function(line) {
  rows.push(line);
  console.log("Line from file:", line);
});
*/
//var rows = input.split("\n");
//console.log(rows);
/*
for (var i = 0; i < rows.length; i++) {
  rows[i];
}
row in input;
*/
