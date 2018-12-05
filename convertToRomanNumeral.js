const convertToRomanNumeral = (input) => {
  let result = '';

  const ints = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (let i=0; i<ints.length; i++) {
    let count = Math.floor(input / ints[i]);
    result += numerals[i].repeat(count);
    input -= ints[i] * count;
  }

  return result;
}