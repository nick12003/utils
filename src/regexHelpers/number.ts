/**
 * 數字
 *
 * @example
 * isNumber().test('123') // true
 * isNumber().test('abc') // false
 */
export const isNumber = () => /^\d+$/;

/**
 * 整數
 *
 * @example
 * isInteger().test('0') // true
 * isInteger().test('0123') // false
 * isInteger().test('123') // true
 * isInteger().test('-123') // true
 * isInteger().test('123.123') // false
 * isInteger().test('-123.123') // false
 */
export const isInteger = () => /^(-?[1-9]\d*|0)$/;

/**
 * 小數
 *
 * @example
 * isDecimal().test('123') // false
 * isDecimal().test('-123') // false
 * isDecimal().test('123.123') // true
 * isDecimal().test('0123.123') // false
 * isDecimal().test('-123.123') // true
 * isDecimal().test('0.123') // true
 * isDecimal().test('-0.123') // true
 */
export const isDecimal = () => /^(-?[1-9]\d*\.\d+|-?0\.\d+)$/;

/**
 * 負數
 *
 * @example
 * isNegativeNumber().test('-123') // true
 * isNegativeNumber().test('123') // false
 * isNegativeNumber().test('-123.123') // true
 * isNegativeNumber().test('0') // false
 */
export const isNegativeNumber = () => /^-\d+(\.\d+)?$/;

/**
 * 非零開頭的數字
 *
 * @param allowZero 是否允許0
 *
 * @example
 * isNonZeroNumber().test('123') // true
 * isNonZeroNumber().test('0123') // false
 * isNonZeroNumber().test('0') // false
 * isNonZeroNumber(true).test('0') // true
 *
 * @deprecated Will be removed in the 2.0.0 version, please use `isInteger` instead
 */
export const isNonZeroStart = (allowZero: boolean = false) =>
  allowZero ? /^[1-9]\d*|0$/ : /^[1-9]\d*$/;

/**
 * n位數的數字
 *
 * @param n 位數
 *
 * @example
 * isNumberN(3).test('123') // true
 * isNumberN(3).test('1234') // false
 */
export const isNumberN = (n: number) => new RegExp(`^\\d{${n}}$`);

/**
 * n - m 位數的數字
 *
 * @param n 最小位數
 * @param m 最大位數
 *
 * @example
 * isNumberNM(3, 5).test('123') // true
 * isNumberNM(3, 5).test('12345') // true
 * isNumberNM(3, 5).test('123456') // false
 */
export const isNumberNM = (n: number, m: number) => new RegExp(`^\\d{${n},${m}}$`);

/**
 * 至少n位數的數字
 *
 * @param n 最小位數
 *
 * @example
 * isNumberAtLeastN(3).test('123') // true
 * isNumberAtLeastN(3).test('1234') // true
 * isNumberAtLeastN(3).test('12') // false
 */
export const isNumberAtLeastN = (n: number) => new RegExp(`^\\d{${n},}$`);
