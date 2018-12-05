const { fromRomanNumeral } = require('./fromRomanNumeral.js');

describe('fromRomanNumeral', () => {
  it('should convert roman numerals to numbers', () => {
    expect(fromRomanNumeral('I')).toBe(1);
    expect(fromRomanNumeral('V')).toBe(5);
    expect(fromRomanNumeral('XLIX')).toBe(49);
    expect(fromRomanNumeral('MMXVIII')).toBe(2018);
    expect(fromRomanNumeral('MMMMCMXCIX')).toBe(4999);
  });

  it('should only accept strings', () => {
    expect(() => fromRomanNumeral()).toThrow();
    expect(() => fromRomanNumeral(5)).toThrow();
    expect(() => fromRomanNumeral(['V', 'XLIX'])).toThrow();
  });

  it('should only accept strings with the characters M, C, D, X, L, I, or V', () => {
    expect(() => fromRomanNumeral('MCDXLIVB')).toThrow();
    expect(() => fromRomanNumeral('ABC')).toThrow();
  });

  it('should only accept valid roman numeral strings', () => {
    expect(() => fromRomanNumeral('IMCDXLIV')).toThrow();
  });

});
