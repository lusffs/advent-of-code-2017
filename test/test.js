var assert = require("assert");

console.log("asdasdasdasd");

var Day1 = require("../Day1/index.js");
var Day3 = require("../Day3/index.js");

describe("Day1", function() {
  describe("Part1()", function() {
    it("should return 3 when the input is 1122", function() {
      assert.equal(3, Day1.Part1("1122"));
    });

    it("should return 4  when the input is 1111", function() {
      assert.equal(4, Day1.Part1("1111"));
    });

    it("should return 0 when the input is 1234", function() {
      assert.equal(0, Day1.Part1("1234"));
    });

    it("should return 9 when the input is 91212129", function() {
      assert.equal(9, Day1.Part1("91212129"));
    });
  });

  describe("Part2()", function() {
    it("should return 6 when the input is 1212", function() {
      assert.equal(6, Day1.Part2("1212"));
    });

    it("should return 0 when the input is 1221", function() {
      assert.equal(0, Day1.Part2("1221"));
    });

    it("should return 4 when the input is 123425", function() {
      assert.equal(4, Day1.Part2("123425"));
    });

    it("should return 12 when the input is 123123", function() {
      assert.equal(12, Day1.Part2("123123"));
    });
    it("should return 4 when the input is 12131415", function() {
      assert.equal(4, Day1.Part2("12131415"));
    });
  });
});

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
