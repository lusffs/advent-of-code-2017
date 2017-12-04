var assert = require("assert");
var Day3 = require("../../Day3/index.js");

describe("Day3", function() {
  describe("Part1()", function() {
    it("should return 0 steps when the input is 1", function() {
      assert.equal(0, Day3.Part1(1));
    });

    it("should return 3 steps when the input is 12", function() {
      assert.equal(3, Day3.Part1(12));
    });

    it("should return 2 steps when the input is 23", function() {
      assert.equal(2, Day3.Part1(23));
    });

    it("should return 31 steps when the input is 1024", function() {
      assert.equal(31, Day3.Part1(1024));
    });
  });
});
