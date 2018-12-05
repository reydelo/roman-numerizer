const { romanNumeralKeys, romanNumeralDictionary } = require('./config.js');

const validateInput = (input) => {
  if (typeof input !== 'string') {
    throw new Error('Argument must be a string');
  }
};

exports.fromRomanNumeral = (input) => {
  validateInput(input);

  const result = romanNumeralKeys.reduce((accumulator, numeral) => {
    while (input.startsWith(numeral)) {
      accumulator += romanNumeralDictionary[numeral];
      input = input.substring(numeral.length);
    }
    return accumulator;
  }, 0);

  if (input.length) {
    throw new Error('Argument must be a valid roman numeral');
  }

  return result;
};
