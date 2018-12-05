const { convertToRomanNumeral } = require('./convertToRomanNumeral');

describe('convertToRomanNumeral', () => {
  it('should convert numbers to roman numerals', () => {
    expect(convertToRomanNumeral(1)).toBe('I');
    expect(convertToRomanNumeral(5)).toBe('V');
    expect(convertToRomanNumeral(49)).toBe('XLIX');
    expect(convertToRomanNumeral(2018)).toBe('MMXVIII');
    expect(convertToRomanNumeral(4999)).toBe('MMMMCMXCIX');
  });

  it('should only accept numbers between 1-4999', () => {
    expect(() => convertToRomanNumeral(-1)).toThrow();
    expect(() => convertToRomanNumeral(0)).toThrow();
    expect(() => convertToRomanNumeral(5000)).toThrow();
  });

  it('should only accept numbers', () => {
    expect(() => convertToRomanNumeral('5')).toThrow();
    expect(() => convertToRomanNumeral('abc')).toThrow();
    expect(() => convertToRomanNumeral([5, 10])).toThrow();
  });

  it('should only accept integers', () => {
    expect(() => convertToRomanNumeral(5.5)).toThrow();
  });
});
