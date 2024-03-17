/**
 * 中文
 *
 * @param containSpace 是否包含空格
 * @param mark 是否包含標點符號
 *
 * @example
 *
 * isChinese()('你好') // true
 * isChinese()('你 好') // false
 * isChinese(true)('你 好') // true
 * isChinese()('123') // false
 */
export const isChinese = (containSpace: boolean = false, mark: boolean = false) =>
  new RegExp(`^[\u4e00-\u9fa5${mark ? '\\p{P}' : ''}${containSpace ? '\\s' : ''}]+$`, 'u');

/**
 * 英文
 *
 * @param containSpace 是否包含空格
 * @param mark 是否包含標點符號
 * @param fullWidth 是否包含全形字
 * @param lowercase 是否包含小寫
 * @param uppercase 是否包含大寫
 *
 * @example
 *
 * isEnglish()('abc') // true
 * isEnglish()('abc def') // false
 * isEnglish(true)('abc def') // true
 * isEnglish(false, true)('abc!') // true
 * isEnglish(false, false, true)('ＡＢＣ') // true
 * isEnglish(false, false, false, false, true)('abc') // false
 * isEnglish(false, false, false, true, false)('ABC') // false
 */
export const isEnglish = (
  containSpace: boolean = false,
  mark: boolean = false,
  fullWidth: boolean = false,
  lowercase: boolean = true,
  uppercase: boolean = true,
) =>
  new RegExp(
    `^[${lowercase ? 'a-z' : ''}${uppercase ? 'A-Z' : ''}${
      fullWidth ? 'Ａ-Ｚａ-ｚ' : ''
    }${mark ? '\\p{P}' : ''}${containSpace ? '\\s' : ''}]+$`,
    'u',
  );

/**
 * email
 */
export const isEmail = () =>
  // eslint-disable-next-line no-useless-escape
  /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;

/**
 * 日期字串
 *
 * @param separator 分隔符號 (預設為 -)
 */
export const isDateString = (separator = '-') =>
  new RegExp(`^\\d{4}${separator}\\d{2}${separator}\\d{2}$`);

/**
 * 統一編號
 * */
export const isTaxId = () => /^\d{8}$/;
