import { createArray } from '../src/array';

describe('createArray function', () => {
  it('should create an array with the specified length and the callback should return the correct value', () => {
    const length = 5;
    const arr = createArray(length);
    expect(arr).toHaveLength(5);
    expect(arr[4]).toEqual({ id: 5 });
  });
});
