var assert = require("assert");
var Day5 = require("../../Day5/index.js");

describe("Day5", function() {
  describe("Part1()", function() {
    it("should jump 5 steps when the input is [0, 3, 0, 1, -3]", function() {
      assert.equal(5, Day5.Part1([0, 3, 0, 1, -3]));
    });
  });

  describe("Part2()", function() {
    it("should jump 10 steps when the input is [0, 3, 0, 1, -3]", function() {
      assert.equal(10, Day5.Part2([0, 3, 0, 1, -3]));
    });
  });
});
