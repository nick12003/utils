/**
 * 包含大寫英文
 */
export const hasUpperCase = () => /.*[A-Z].*/;

/**
 * 包含小寫英文
 */
export const hasLowerCase = () => /.*[a-z].*/;

/**
 * 包含數字
 */
export const hasNumber = () => /.*\d.*/;

/**
 * 包含特殊字元
 */
export const hasSpecialCharacter = () => /.*[\p{P}].*/u;
