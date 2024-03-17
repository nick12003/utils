import { formatAmount, formatStarMask } from '../src/stringFormat';

describe('formatAmount', () => {
  it('should return a string with thousand separators', () => {
    expect(formatAmount(123456789)).toBe('123,456,789');
  });

  it('should return an empty string if the input is not a number', () => {
    expect(formatAmount('123456789' as unknown as number)).toBe('');
  });
});

describe('formatStarMask', () => {
  it('should return a string with the n-m characters replaced by asterisks', () => {
    expect(formatStarMask('123456789', 2, 5)).toBe('12****789');
  });
});
