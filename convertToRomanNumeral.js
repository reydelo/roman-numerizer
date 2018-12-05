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

const convertToRomanNumeral = (input) => {
  return romanNumeralValues.reduce((accumulator, { integer, numeral }) => {
    const count = Math.floor(input / integer);
    input -= integer * count;
    return accumulator + numeral.repeat(count);
  }, '');
}
