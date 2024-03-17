/**
 * 數字
 *
 * @example
 * isNumber().test('123') // true
 */
export const isNumber = () => /^\d+$/;

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
