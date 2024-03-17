/**
 * 台灣手機號碼
 *
 * 1. 09開頭
 * 2. 10碼數字
 *
 * @example
 *
 * isTWMobile()('0912345678') // true
 * isTWMobile()('091234567') // false
 */
export const isTWMobile = () => /09[0-9]{8}$/;

/**
 * 台灣市話
 *
 * 1. 0開頭
 * 2. 2~3碼區碼
 * 3. 區碼與號碼之間可以有-號
 * 4. 6~8碼號碼
 * 5. 區碼加上號碼最多10碼
 * 6. 可以有分機號碼，分機號碼為#號開頭，後面接1~5碼數字
 *
 * @example
 *
 * isTWPhone()('0212345678') // true
 * isTWPhone()('02-12345678') // true
 * isTWPhone()('023-1234567') // true
 * isTWPhone()('02-12345678#123') // true
 *
 * isTWPhone()('02123456789') // false
 * isTWPhone()('02-123456789') // false
 * isTWPhone()('02-12345678#123456') // false
 */
export const isTWPhone = () =>
  /^(((0[2-9]-?\d{6,8})(#\d{1,5})?)|((0[2-9][0-9]-?\d{6,7})(#\d{1,5})?))$/;
