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

const romanNumeralDictionary = romanNumeralValues.reduce((obj, { integer, numeral }) => {
  obj[numeral] = integer;
  return obj;
}, {});

module.exports = {
  romanNumeralValues,
  romanNumeralKeys,
  romanNumeralDictionary
}
