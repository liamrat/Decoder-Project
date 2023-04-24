// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //create array of normal alphabet
    const normAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
    //return false if alphabet is not given
    if (!alphabet) return false;
    //return false if alphabet length is not 26 or has repeating values
    if (alphabet.length != 26 || [...new Set(alphabet)].length != 26)
      return false;

    const codeKey = alphabet.toLowerCase().split("");

    return input
      .toLowerCase()
      .split("")
      .map((word) =>
        encode
          ? subsituteEncoder(word, normAlpha, codeKey)
          : subsituteEncoder(word, codeKey, normAlpha)
      )
      .join("");
  }
  //helper function that does charcter translation
  function subsituteEncoder(input, from, to) {
    //ignore spaces
    if (input.match(/\s/)) return input;
    //find matching index of letter from original key
    const index = from.indexOf(input);
    //maps original character to new character
    return to[index];
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
