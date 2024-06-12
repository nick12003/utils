/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@nick12003/eslint-config-nick/typescript'],
  ignorePatterns: ['dist/'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
