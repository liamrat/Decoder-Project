// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // if shift doesn't meet parameters, return false
    if (!shift || shift < -25 || shift > 25 || shift === 0) return false;

    //if decoding (encode === false), have shift negatively
    shift *= encode ? 1 : -1;

    return input
    //ignore uppercase
    .toLowerCase()
    //split into array with an item for each character
    .split("")
    //map array that uses shifter function to shift characters
    .map((character) => shifter(character, shift))
    //join characters back into string
    .join("")
  }
//helper function that shifts
  function shifter(character, shift) {
    //create an array of normal alphabet
    const key = "abcdefghijklmnopqrstuvwxyz".split("");
    // if charater is not a number, don't change character
    if (!character.match(/[a-z]/)) return character;
    //quantifying index of character
    let index = key.indexOf(character);
    //shifter that wraps around alphabet
    let shifted = (((index + shift) % 26) + 26) % 26;
    return key[shifted];
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
