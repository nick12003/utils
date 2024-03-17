/**
 * 將數字轉換成金額千分位格式
 *
 * @param num - 數字
 *
 * @example
 *
 * formatAmount(1234567) // '1,234,567'
 */
export const formatAmount = (num: number) => {
  if (typeof num !== 'number') return '';

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

/**
 * 將字串的第 n - m 個字轉換成星號
 *
 * @param str - 字串
 * @param n - 起始位置
 * @param m - 結束位置
 *
 * @example
 *
 * formatString('123456', 1, 4) // '1****6'
 */
export const formatStarMask = (str: string, n: number, m: number) =>
  str.slice(0, n) + '*'.repeat(m - n + 1) + str.slice(m + 1);
