import { logger } from '../src/logger';

describe('logger', () => {
  const originalConsoleLog = console.log;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalConsoleLog;
  });

  it('should log the info message with the prefix', () => {
    logger.info('Info message');
    expect(console.log).toHaveBeenCalledWith('\x1b[34m[Info] Info message\x1b[0m');
  });

  it('should log the info message without the prefix', () => {
    logger.info('Info message', false);
    expect(console.log).toHaveBeenCalledWith('\x1b[34mInfo message\x1b[0m');
  });

  it('should log the error message with the prefix', () => {
    logger.error('Error message');
    expect(console.log).toHaveBeenCalledWith('\x1b[31m[Error] Error message\x1b[0m');
  });

  it('should log the error message without the prefix', () => {
    logger.error('Error message', false);
    expect(console.log).toHaveBeenCalledWith('\x1b[31mError message\x1b[0m');
  });
});
