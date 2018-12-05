// This is the same "configuration" for the other method.
// DRY this up by extracting this to another file and use the same data structure as the base for both arguments.
// Instead of modifying the configuration data to meet this functions needs, consider reworking the other method to work with a dictionary format
const romanNumeralValues = [
  { integer: 1000, numeral: 'M' },
  { integer: 900, numeral: 'CM' },
  { integer: 500, numeral: 'D' },
  { integer: 400, numeral: 'CD' },
  { integer: 100, numeral: 'C' },
  { integer: 90, numeral: 'XC' },
  { integer: 50, numeral: 'L' },
  { integer: 40, numeral: 'XL' },
  { integer: 10, numeral: 'X' },
  { integer: 9, numeral: 'IX' },
  { integer: 5, numeral: 'V' },
  { integer: 4, numeral: 'IV' },
  { integer: 1, numeral: 'I' }
];

const romanNumeralKeys = romanNumeralValues.sort((a, b) => b.integer - a.integer).map(e => e.numeral);
Object.freeze(romanNumeralKeys);

const romanNumeralDictionary = romanNumeralValues.reduce((obj, {integer, numeral}) => {
  obj[numeral] = integer;
  return obj;
}, {});

const validateInput = (input) => {
  if (typeof input !== 'string') {
    throw new Error('Argument must be a string');
  }
}

exports.convertFromRomanNumeral = (input) => {
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
}
