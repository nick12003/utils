/**
 * Wait for a given amount of time
 * @param ms time to wait in milliseconds
 */
export const wait = (ms: number) => {
  const start = Date.now();
  let now = start;
  while (now - start < ms) {
    now = Date.now();
  }
};
