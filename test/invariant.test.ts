import { invariant } from '../src/invariant';

describe('invariant function', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should not throw an error if the condition passes', () => {
    expect(() => invariant(true)).not.toThrow();
  });

  it(`should throw an error with the message Invariant failed if the condition fails in production`, () => {
    process.env = {
      ...originalEnv,
      NODE_ENV: 'production',
    };
    expect(() => invariant(false, 'Custom error message')).toThrow(new Error('Invariant failed'));

    expect(() => invariant(false, () => 'Custom error message')).toThrow(
      new Error('Invariant failed'),
    );
  });

  it(`should throw an error with the message Invariant failed if the condition fails without pass message`, () => {
    expect(() => invariant(false)).toThrow(new Error('Invariant failed'));
  });

  it(`should throw an error with the custom message if the condition fails not in production`, () => {
    expect(() => invariant(false, 'Custom error message')).toThrow(
      new Error('Invariant failed: Custom error message'),
    );

    expect(() => invariant(false, () => 'Custom error message')).toThrow(
      new Error('Invariant failed: Custom error message'),
    );
  });

  // describe.each`
  //   nodeEnv
  //   ${'production'}
  //   ${'test'}
  // `('when process.env.NODE_ENV="$nodeEnv"', ({ nodeEnv }) => {
  //   beforeEach(() => {
  //     jest.resetModules();
  //     process.env = {
  //       ...originalEnv,
  //       NODE_ENV: nodeEnv,
  //     };
  //   });

  //   afterEach(() => {
  //     process.env = originalEnv;
  //   });

  //   if (nodeEnv === 'production') {
  //     it(`should throw an error with the message Invariant failed if the condition fails in production`, () => {
  //       expect(() => invariant(false, 'Custom error message')).toThrow(
  //         new Error('Invariant failed'),
  //       );
  //     });
  //   }

  //   if (nodeEnv === 'test') {
  //     it(`should throw an error with the message Invariant failed if the condition fails without pass message`, () => {
  //       expect(() => invariant(false)).toThrow(new Error('Invariant failed'));
  //     });

  //     it(`should throw an error with the custom message if the condition fails not in production`, () => {
  //       expect(() => invariant(false, 'Custom error message')).toThrow(
  //         new Error('Invariant failed: Custom error message'),
  //       );
  //     });
  //   }
  // });
});
