var input = 277678;

function Part1(input) {
  var foundCorner = false;
  var stepsToCorner = 0;
  var boxSize = 0;
  while (!foundCorner) {
    var activeNumber = input + stepsToCorner;
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

  var stepsToNearestCenterPoint = Math.min(
    Math.abs(pointLeft - input),
    Math.abs(pointTop - input),
    Math.abs(pointRight - input),
    Math.abs(pointBottom - input)
  );

  var hitMiddlePoint = false;
  var smallStep = input;

  return stepsToNearestCenterPoint + Math.floor(boxSize / 2); //sqrt - 1;
}

//console.log(Part1(input)); //475

module.exports = { Part1 };
