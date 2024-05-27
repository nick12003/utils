/**
 * 建立一個長度為 length 的陣列
 *
 * @param length 陣列長度
 */

export const createArray = (length: number) => Array.from({ length }, (_, i) => ({ id: i + 1 }));
