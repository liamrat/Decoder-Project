// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("subsitution", () => {
  it("should return false if more than 26 characters", () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz123";
    const actual = substitution("test", alphabet);
    expect(actual).to.be.false;
  });
  it("should return false if more than 26 characters", () => {
    const alphabet = "ababababababababababababab";
    const actual = substitution("test", alphabet);
    expect(actual).to.be.false;
  });
  it("should return convert phrase based off given alphabet", () => {
    const alphabet = "!bcdefghijklmnopqrstuvwxyz";
    const actual = substitution("cat", alphabet);
    const expected = "c!t";
    expect(actual).to.eql(expected);
  });
  it("should return convert phrase based off given alphabet", () => {
    const alphabet = "!bcdefghijklmnopqrstuvwxyz";
    const actual = substitution("c!t", alphabet, false);
    const expected = "cat";
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters", () => {
    const alphabet = "!bcdefghijklmnopqrstuvwxyz";
    const actual = substitution("CAT", alphabet);
    const expected = "c!t";
    expect(actual).to.eql(expected);
  });
  it("should maintain spaces", () => {
    const alphabet = "!bcdefghijklmnopqrstuvwxyz";
    const actual = substitution("cute cat", alphabet);
    const expected = "cute c!t";
    expect(actual).to.eql(expected);
  });
});
