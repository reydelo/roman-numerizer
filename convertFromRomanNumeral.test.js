const { convertFromRomanNumeral } = require('./convertFromRomanNumeral');

describe('convertFromRomanNumeral', () => {
  it('should convert roman numerals to numbers', () => {
    expect(convertFromRomanNumeral('I')).toBe(1);
    expect(convertFromRomanNumeral('V')).toBe(5);
    expect(convertFromRomanNumeral('XLIX')).toBe(49);
    expect(convertFromRomanNumeral('MMXVIII')).toBe(2018);
    expect(convertFromRomanNumeral('MMMMCMXCIX')).toBe(4999);
  });

  it('should only accept strings', () => {
    expect(() => convertFromRomanNumeral()).toThrow();
    expect(() => convertFromRomanNumeral(5)).toThrow();
    expect(() => convertFromRomanNumeral(['V', 'XLIX'])).toThrow();
  });

  it('should only accept strings with the characters M, C, D, X, L, I, or V', () => {
    expect(() => convertFromRomanNumeral('MCDXLIVB')).toThrow();
    expect(() => convertFromRomanNumeral('ABC')).toThrow();
  });


  it('should only accept valid roman numeral strings', () => {
    expect(() => convertFromRomanNumeral('IMCDXLIV')).toThrow();
  });

});
