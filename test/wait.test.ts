import { wait } from '../src/wait';

describe('wait', () => {
  it('should wait for the given amount of time', () => {
    const start = Date.now();
    wait(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(100);
  });
});
