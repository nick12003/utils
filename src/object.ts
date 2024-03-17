/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */

type SnakeCase<T> = T extends object
  ? { [K in keyof T as CamelToSnake<K & string>]: SnakeCase<T[K]> }
  : T;

type CamelToSnake<S extends string> = S extends `${infer Head}${infer Tail}`
  ? Head extends Uppercase<Head>
    ? Head extends '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
      ? `${Head}${CamelToSnake<Tail>}`
      : `${Head extends '_' ? '' : '_'}${Lowercase<Head>}${CamelToSnake<Tail>}`
    : `${Head}${CamelToSnake<Tail>}`
  : S;

type CamelCase<T> = T extends object
  ? { [K in keyof T as SnakeToCamel<K & string>]: CamelCase<T[K]> }
  : T;

type SnakeToCamel<T extends string> = T extends `${infer Head}_${infer Tail}`
  ? `${Uncapitalize<Head>}${Capitalize<SnakeToCamel<Tail>>}`
  : T;

/**
 * 將深層物件的 key 轉換成 SnakeCase 格式，遇到不可序列化的 key 會跳過該 key 往下處理
 * @param obj 要轉換的物件
 */
export function toSnakeCase<T extends Record<string, any>>(obj: T): SnakeCase<T> {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map((item) => toSnakeCase(item)) as any;

  return Object.keys(obj).reduce((acc: { [key: string]: any }, key) => {
    const camelCaseKey = key.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);
    const value = obj[key];
    acc[camelCaseKey] = toSnakeCase(value);
    return acc;
  }, {}) as SnakeCase<T>;
}

/**
 * 將深層物件的 key 轉換成 CamelCase 格式，遇到不可序列化的 key 會跳過該 key 往下處理
 * @param obj 要轉換的物件
 */
export function toCamelCase<T extends Record<string, any>>(obj: T): CamelCase<T> {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(toCamelCase) as any;
  return Object.keys(obj).reduce((acc: { [key: string]: any }, key) => {
    const camel = key.replace(/([_][a-z0-9])/g, (group) => group.toUpperCase().replace('_', ''));
    const value = obj[key] as Record<string, unknown>;
    acc[camel] = toCamelCase(value);
    return acc;
  }, {}) as CamelCase<T>;
}

/**
 * 將物件中的某些 key 排除
 *
 * @param object 原始物件
 * @param keys 要排除的 key
 *
 * @example
 * const a = { a: 1, b: 2, c: 3, d: 4 };
 * const b = omit(a, 'a', 'b'); // { c: 3, d: 4 }
 */
export const omit = <T extends object, K extends [...(keyof T)[]]>(
  object: T,
  ...keys: K
): {
  [K2 in Exclude<keyof T, K[number]>]: T[K2];
} =>
  (Object.keys(object) as Array<keyof typeof object>).reduce(
    (acc, cur) => {
      if (keys.includes(cur)) {
        return acc;
      }
      return {
        ...acc,
        [cur]: object[cur],
      };
    },
    {} as {
      [K3 in keyof T]: T[K3];
    },
  );

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

/**
 * 將物件中的某些 value 排除
 *
 * @param object 原始物件
 * @param values 要排除的 key
 *
 * @example
 * const a = { a: undefined, b: null, c: 3, d: 4 };
 * const b = omitByValue(a, undefined, null); // { c: 3, d: 4 }
 */
export const omitByValue = <T extends object, K extends any[]>(
  object: T,
  ...values: K
): Pick<T, { [K2 in keyof T]: T[K2] extends K[number] ? never : K2 }[keyof T]> =>
  (Object.entries(object) as Entries<T>).reduce(
    (acc, [key, value]) => {
      if (values.includes(value)) {
        return acc;
      }
      return {
        ...acc,
        [key]: value,
      };
    },
    {} as {
      [K3 in keyof T]: T[K3];
    },
  );
