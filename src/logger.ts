/* eslint-disable no-console */
const reset = '\x1b[0m';

export const logger = {
  info: (message: string, prefix: boolean = true) =>
    console.log(`\x1b[34m${prefix ? '[Info] ' : ''}${message}${reset}`),
  error: (message: string, prefix: boolean = true) =>
    console.log(`\x1b[31m${prefix ? '[Error] ' : ''}${message}${reset}`),
};
