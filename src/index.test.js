var expect = require("chai").expect;
var animalNames = require("./index.js");

describe("animalNames", () => {
  describe("all", () => {
    expect(animalNames.all).to.satisfy(isArrayOfStrings);

    function isArrayOfStrings(array) {
      return array.every(function (item) {
        return typeof item === "string";
      });
    }

    it("should contain `bacardi`", () => {
        expect(animalNames.all).to.include("bacardi");
    });
  });

  describe("random", () => {
    it("should return a random item from animalNames.all", () => {
      var randomItem = animalNames.random();
      expect(animalNames.all).to.include(randomItem);
      setTimeout(() => {
        process.exit();
      }, 10000);
    });

    it("should return an array of random items if passed a number", () => {
      var randomItems = animalNames.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function (item) {
        expect(animalNames.all).to.include(item);
      });
    });
  });
});
