/**
 * debounce function
 *
 * @param {Function} fn function to be executed
 * @param {number} delay time to wait before executing the function
 *
 * @example
 * const debouncedFunction = debounce((a: number, b: number) => console.log(a + b), 1000);
 * debouncedFunction(1, 2);
 * debouncedFunction(3, 4);
 * // after 1 second
 * // 7
 */
export const debounce = <P, R>(
  fn: (...args: P[]) => R,
  delay: number,
  // isAsync: boolean = false,
) => {
  let timeout: ReturnType<typeof setTimeout>;

  // if (isAsync) {
  //   return (...args: P[]) =>
  //     new Promise((resolve) => {
  //       if (timeout) {
  //         clearTimeout(timeout);
  //       }
  //       timeout = setTimeout(() => {
  //         resolve(fn(...args));
  //       }, delay);
  //     });
  // }

  return (...args: P[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

/**
 * throttle function
 *
 * @param {Function} fn function to be executed
 * @param {number} delay time to wait before executing the function
 *
 * @example
 * const throttledFunction = throttle((a: number, b: number) => a + b, 1000);
 * throttledFunction(1, 2); // 3
 * throttledFunction(3, 4); // undefined
 * setTimeout(() => {
 *  throttledFunction(5, 6); // 11
 * }, 2000);
 */
export const throttle = <P, R>(fn: (...args: P[]) => R, delay: number) => {
  let wait = false;
  return (...args: P[]) => {
    if (wait) return undefined;
    const val = fn(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
    return val;
  };
};
