// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if no shift is provded", () => {
    const input = "Hi";
    const actual = caesar(input);
    expect(actual).to.be.false;
  });
  it("should return false if shift is less than -25", () => {
    const input = "Hi";
    const actual = caesar(input, -26);
    expect(actual).to.be.false;
  });
  it("should return false if shift is more than 25", () => {
    const input = "Hi";
    const actual = caesar(input, 26);
    expect(actual).to.be.false;
  });
  it("should return false if shift is 0", () => {
    const input = "Hi";
    const actual = caesar(input, 0);
    expect(actual).to.be.false;
  });
  it("should ignore capital letters", () => {
    const input = "AbCdEfG";
    const actual = caesar(input, 1);
    expect(actual).to.eql("bcdefgh");
  });
  it("should wrap around to beguinning of alphabet", () => {
    const input = "xyz";
    const actual = caesar(input, 3);
    expect(actual).to.eql("abc");
  });
  it("should maintain nonalphabetic symbols", () => {
    const input = "!AbC dEfG!";
    const actual = caesar(input, 1);
    expect(actual).to.eql("!bcd efgh!");
  });
});
