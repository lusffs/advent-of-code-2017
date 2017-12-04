/*
37  36  35  34  33  32  31
38  17  16  15  14  13  30
39  18   5   4   3  12  29
40  19   6   1   2  11  28
41  20   7   8   9  10  27
42  21  22  23  24  25  26 ---> ...
43  44  45  46  47  48  49

For example:
- Data from square 1 is carried 0 steps, since it's at the access port.
- Data from square 12 is carried 3 steps, such as: down, left, left.
- Data from square 23 is carried only 2 steps: up twice.
- Data from square 1024 must be carried 31 steps.
*/

var input = 277678;
/*
1  9  25  49

1  3  5  7




1 8 16 24 32?
*/

// Varje ruta ökar med 8
//Max värdet i varje ruta är udda-talet^2
/*console.log(Math.sqrt(8)); //  2.8284271247461903
console.log(Math.sqrt(9)); //  3
console.log(Math.sqrt(10)); // 3.1622776601683795
console.log(Math.sqrt(11)); // 3.3166247903554
console.log("---");
console.log(2.8284271247461903 / 3);
*/
/*console.log(Math.sqrt(25)); //5

console.log(527 / 526.951610681664);
*/
//console.log(Math.sqrt(277678)); //526.951610681664

//console.log(3.1622776601683795 % 3);
//console.log(3 % 3.1622776601683795);

function Part1(input) {
  var sqrt = Math.sqrt(input);

  //console.log("sqrt ", sqrt);

  var test = Math.ceil(sqrt);

  //console.log(sqrt, test);
  return sqrt - 1;
}

module.exports = { Part1 };

/*
for (var i = 1; i < 199; i = i + 2) {
  console.log(i);
}
*/
