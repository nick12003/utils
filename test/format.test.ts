import { formatAmount, formatStarMask } from '../src/stringFormat';

describe('formatAmount', () => {
  it('should return a string with thousand separators when the input is a number', () => {
    expect(formatAmount(123456789)).toBe('123,456,789');
  });

  it('should return a string with thousand separators when the input is a correct string', () => {
    expect(formatAmount('123456789')).toBe('123,456,789');
  });

  it('should return the input string when the input is an incorrect string', () => {
    expect(formatAmount('123456789a')).toBe('123456789a');
    expect(formatAmount('0123456789')).toBe('0123456789');
  });
});

describe('formatStarMask', () => {
  it('should return a string with the n-m characters replaced by asterisks', () => {
    expect(formatStarMask('123456789', 2, 5)).toBe('12****789');
  });
});
