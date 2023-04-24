// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should return 42 for I and J", () => {
      const input = "jiji";
      const expected = "42424242"
      const actual = polybius(input);
      expect(actual).to.eql(expected);
    });
    it("should return (i/j) for 42", () => {
      const input = "42";
      const expected = "(i/j)";
      const actual = polybius(input, false);
      expect(actual).to.eql(expected);
    });
    it("should ignore capital letters", () => {
      const input = "AbCdE";
      const expected = "1121314151"
      const actual = polybius(input);
      expect(actual).to.eql(expected);
    });
    it("should maintain spaces withing message", () => {
      const input = "ji ji";
      const expected = "4242 4242"
      const actual = polybius(input);
      expect(actual).to.eql(expected);
    });
  });