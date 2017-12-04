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

1  3   5   7




1 8 16 24 32?
*/

// Varje ruta ökar med 8
// Max värdet i varje ruta är udda-talet^2

//console.log(Math.sqrt(8)); //--> 2.8284271247461903
//console.log(Math.sqrt(9)); //--> 3
//console.log(Math.sqrt(10)); //-> 3.1622776601683795
//console.log(Math.sqrt(11)); //-> 3.3166247903554
//                      23         4.795831523312719 diff 0.10314796225363665
//console.log(Math.sqrt(24)); //-> 4.898979485566356
// 25 ->>> 5

// 277678  ---> 526.951610681664

/*
console.log(527 / 526.951610681664);
*/
//console.log(Math.sqrt(277678)); //526.951610681664

function Part1(input) {
  var foundCorner = false;
  var stepsToCorner = 0;
  var boxSize = 0;
  while (!foundCorner) {
    var activeNumber = input + stepsToCorner;
    //console.log(activeNumber);
    if (Math.sqrt(activeNumber) % 2 == 1) {
      boxSize = Math.sqrt(activeNumber);
      foundCorner = true;
    } else {
      stepsToCorner++;
    }
  }

  var totalStepsInCircumferenceOfBox = boxSize * 2 + (boxSize - 2) * 2;

  var pointLeft =
    boxSize * boxSize -
    (totalStepsInCircumferenceOfBox - Math.floor(boxSize / 2));
  var pointTop = pointLeft + (boxSize - 1);
  var pointRight = pointTop + (boxSize - 1);
  var pointBottom = pointRight + (boxSize - 1);
  var distL = Math.abs(pointLeft - input);
  var distT = Math.abs(pointTop - input);
  var distR = Math.abs(pointRight - input);
  var distB = Math.abs(pointBottom - input);

  var stepsToNearestCenterPoint = Math.min(distL, distT, distR, distB);

  var hitMiddlePoint = false;
  var smallStep = input;

  /*console.log("PL Value: ", pointLeft);
  console.log("PL Value: ", pointTop);
  console.log("PL Value: ", pointRight);
  console.log("PL Value: ", pointBottom);*/

  console.log(`Value is ${stepsToCorner} steps from box corner`);
  console.log(
    `Box is ${boxSize}x${boxSize} blocks, with a circumference of ${
      totalStepsInCircumferenceOfBox
    }`
  );

  console.log(
    `There are ${stepsToNearestCenterPoint} steps to nearest center of a row`
  );

  return stepsToNearestCenterPoint + Math.floor(boxSize / 2); //sqrt - 1;
}

console.log(Part1(input)); //475

module.exports = { Part1 };
