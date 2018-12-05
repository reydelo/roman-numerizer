const { romanNumeralValues } = require('./config.js');

const validateInput = (input) => {
  if (typeof input !== 'number') {
    throw new Error('Argument must be a number');
  }

  if (input <= 0 || input >= 5000) {
    throw new Error('Argument must be between 1 and 4999');
  }

  if (!Number.isInteger(input)) {
    throw new Error('Argument must be an integer');
  }
};

exports.toRomanNumeral = (input) => {
  validateInput(input);

  return romanNumeralValues.reduce((accumulator, { integer, numeral }) => {
    const count = Math.floor(input / integer);
    input -= integer * count;
    return accumulator + numeral.repeat(count);
  }, '');
};
