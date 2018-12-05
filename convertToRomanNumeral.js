// Possible Data Structures to Consider:
const ints = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

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

const romanNumeralDictionary = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

const convertToRomanNumeral = (input) => {
  let result = '';

  romanNumeralValues.forEach(({integer, numeral}) => {
    let count = Math.floor(input / integer);
    result += numeral.repeat(count);
    input -= integer * count;
  });

  return result;
}
