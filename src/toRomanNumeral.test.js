const { toRomanNumeral } = require('./toRomanNumeral.js');

describe('toRomanNumeral', () => {
  it('should convert numbers to roman numerals', () => {
    expect(toRomanNumeral(1)).toBe('I');
    expect(toRomanNumeral(5)).toBe('V');
    expect(toRomanNumeral(49)).toBe('XLIX');
    expect(toRomanNumeral(2018)).toBe('MMXVIII');
    expect(toRomanNumeral(4999)).toBe('MMMMCMXCIX');
  });

  it('should only accept numbers between 1-4999', () => {
    expect(() => toRomanNumeral(-1)).toThrow();
    expect(() => toRomanNumeral(0)).toThrow();
    expect(() => toRomanNumeral(5000)).toThrow();
  });

  it('should only accept numbers', () => {
    expect(() => toRomanNumeral('5')).toThrow();
    expect(() => toRomanNumeral('abc')).toThrow();
    expect(() => toRomanNumeral([5, 10])).toThrow();
  });

  it('should only accept integers', () => {
    expect(() => toRomanNumeral(5.5)).toThrow();
  });
});
