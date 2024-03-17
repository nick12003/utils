/* eslint-disable no-promise-executor-return */
import { debounce, throttle } from '../src/optimize';

describe('debounce', () => {
  it('should return a debounced function', () => {
    const debounced = debounce(() => {}, 100);
    expect(debounced).toBeInstanceOf(Function);
  });

  it('should call the function after the delay', async () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);
    debounced();
    expect(fn).not.toHaveBeenCalled();
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(fn).toHaveBeenCalled();
  });

  it('should call the function only once', async () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);
    debounced();
    debounced();
    debounced();
    debounced();
    debounced();
    expect(fn).not.toHaveBeenCalled();
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should call the function with the last arguments', async () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);
    debounced(1);
    debounced(2);
    debounced(3);
    debounced(4);
    debounced(5);
    expect(fn).not.toHaveBeenCalled();
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(fn).toHaveBeenCalledWith(5);
  });
});

describe('throttle', () => {
  it('should return a throttled function', () => {
    const throttled = throttle(() => {}, 100);
    expect(throttled).toBeInstanceOf(Function);
  });

  it('should call the function immediately', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);
    throttled();
    expect(fn).toHaveBeenCalled();
  });

  it('should call the function only once', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);
    throttled();
    throttled();
    throttled();
    throttled();
    throttled();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should call the function with the first arguments', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);
    throttled(1);
    throttled(2);
    throttled(3);
    throttled(4);
    throttled(5);
    expect(fn).toHaveBeenCalledWith(1);
  });

  it('should call the function again after the delay', async () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);
    throttled();
    await new Promise((resolve) => setTimeout(resolve, 100));
    throttled();
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
