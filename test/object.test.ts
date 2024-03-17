import { omit, omitByValue, toCamelCase, toSnakeCase } from '../src/object';

describe('toCamelCase', () => {
  it('should return a camelCase object', () => {
    const snakeCase = {
      user_id: 1,
      user_name: 'John',
      user_info: {
        email_address: 'john@gmail.com',
      },
      user_messages: [
        { message_id: 1, message_text: 'Hello' },
        { message_id: 2, message_text: 'Hi' },
      ],
    };
    const camelCase = toCamelCase(snakeCase);
    expect(camelCase).toEqual({
      userId: 1,
      userName: 'John',
      userInfo: {
        emailAddress: 'john@gmail.com',
      },
      userMessages: [
        { messageId: 1, messageText: 'Hello' },
        { messageId: 2, messageText: 'Hi' },
      ],
    });
  });
});

describe('toSnakeCase', () => {
  it('should return a snake_case object', () => {
    const camelCase = {
      userId: 1,
      userName: 'John',
      userInfo: {
        emailAddress: 'john@gmail.com',
      },
      userMessages: [
        { messageId: 1, messageText: 'Hello' },
        { messageId: 2, messageText: 'Hi' },
      ],
    };
    const snakeCase = toSnakeCase(camelCase);
    expect(snakeCase).toEqual({
      user_id: 1,
      user_name: 'John',
      user_info: {
        email_address: 'john@gmail.com',
      },
      user_messages: [
        { message_id: 1, message_text: 'Hello' },
        { message_id: 2, message_text: 'Hi' },
      ],
    });
  });
});

describe('omit function', () => {
  it('should omit the keys', () => {
    const a = { a: 1, b: 2, c: 3, d: 4 };
    const b = omit(a, 'a', 'b');
    expect(b).toEqual({ c: 3, d: 4 });
  });
});

describe('omitByValue function', () => {
  it('should omit the values', () => {
    const a = { a: undefined, b: null, c: 3, d: 4 };
    const b = omitByValue(a, undefined, null);
    expect(b).toEqual({ c: 3, d: 4 });
  });
});
