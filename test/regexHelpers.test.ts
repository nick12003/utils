import {
  hasLowerCase,
  hasNumber,
  hasSpecialCharacter,
  hasUpperCase,
  isChinese,
  isDateString,
  isEmail,
  isEnglish,
  isNonZeroStart,
  isNumber,
  isNumberAtLeastN,
  isNumberN,
  isNumberNM,
  isTaxId,
  isTWMobile,
  isTWPhone,
} from '../src/regexHelpers';

describe('regexHelpers', () => {
  describe('isChinese', () => {
    it('should return true if the string is Chinese', () => {
      expect(isChinese().test('中文')).toBe(true);
    });

    it('should return false if the string is not Chinese', () => {
      expect(isChinese().test('abc')).toBe(false);
    });

    it('should return false if the string is Chinese and contain white space', () => {
      expect(isChinese().test('中 文')).toBe(false);
    });

    it('should return true if the string is Chinese and contain white space', () => {
      expect(isChinese(true).test('中 文')).toBe(true);
    });

    it('should return false if the string is Chinese and contain punctuation', () => {
      expect(isChinese(false).test('中文。')).toBe(false);
    });

    it('should return true if the string is Chinese and contain punctuation', () => {
      expect(isChinese(false, true).test('中文。')).toBe(true);
    });
  });

  describe('isEnglish', () => {
    it('should return true if the string is English', () => {
      expect(isEnglish().test('abc')).toBe(true);
    });

    it('should return false if the string is not English', () => {
      expect(isEnglish().test('中文')).toBe(false);
    });

    it('should return false if the string is English and contain white space', () => {
      expect(isEnglish().test('abc def')).toBe(false);
    });

    it('should return true if the string is English and contain white space', () => {
      expect(isEnglish(true).test('abc def')).toBe(true);
    });

    it('should return false if the string is English and contain punctuation', () => {
      expect(isEnglish(false).test('abc!')).toBe(false);
    });

    it('should return true if the string is English and contain punctuation', () => {
      expect(isEnglish(false, true).test('abc!')).toBe(true);
    });

    it('should return false if the string is English and contain full width character', () => {
      expect(isEnglish(false, false).test('ＡＢＣ')).toBe(false);
    });

    it('should return true if the string is English and contain full width character', () => {
      expect(isEnglish(false, false, true).test('ＡＢＣ')).toBe(true);
    });

    it('should return false if the string is English and not contain lower case character', () => {
      expect(isEnglish(false, false, false, false).test('abc')).toBe(false);
    });

    it('should return false if the string is English and not contain upper case character', () => {
      expect(isEnglish(false, false, false, true, false).test('ABC')).toBe(false);
    });
  });

  describe('isEmail', () => {
    it('should return true if the string is email', () => {
      expect(isEmail().test('abc@gmail.com')).toBe(true);
    });

    it('should return false if the string is not email', () => {
      expect(isEmail().test('abc')).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('should return true if the string is number', () => {
      expect(isNumber().test('123')).toBe(true);
    });

    it('should return false if the string is not number', () => {
      expect(isNumber().test('abc')).toBe(false);
    });
  });

  describe('isNonZeroStart', () => {
    it('should return true if the string is non zero start number', () => {
      expect(isNonZeroStart().test('123')).toBe(true);
    });

    it('should return false if the string is zero start number', () => {
      expect(isNonZeroStart().test('0123')).toBe(false);
    });

    it('should return false if the string is zero start number and not allow zero', () => {
      expect(isNonZeroStart().test('0')).toBe(false);
    });

    it('should return false if the string is zero start number and allow zero', () => {
      expect(isNonZeroStart(true).test('0')).toBe(true);
    });
  });

  describe('isDateString', () => {
    it('should return true if the string is date', () => {
      expect(isDateString().test('2020-01-01')).toBe(true);
    });

    it('should return false if the string is not date', () => {
      expect(isDateString().test('2020-01-01-01')).toBe(false);
    });

    it('should return true if the string is date and contain custom separator', () => {
      expect(isDateString('/').test('2020/01/01')).toBe(true);
    });
  });

  describe('isTaxId', () => {
    it('should return true if the string is Taiwan tax id', () => {
      expect(isTaxId().test('12345678')).toBe(true);
    });

    it('should return false if the string is not Taiwan tax id', () => {
      expect(isTaxId().test('123456789')).toBe(false);
    });
  });

  describe('isNumberN', () => {
    it('should return true if the string is n digit number', () => {
      expect(isNumberN(3).test('123')).toBe(true);
    });

    it('should return false if the string is not n digit number', () => {
      expect(isNumberN(3).test('1234')).toBe(false);
    });

    it('should return false if the string is not number', () => {
      expect(isNumberN(3).test('abc')).toBe(false);
    });
  });

  describe('isNumberNM', () => {
    it('should return true if the string is n to m digit number', () => {
      expect(isNumberNM(3, 5).test('123')).toBe(true);
    });

    it('should return true if the string is n to m digit number', () => {
      expect(isNumberNM(3, 5).test('12345')).toBe(true);
    });

    it('should return false if the string is not n to m digit number', () => {
      expect(isNumberNM(3, 5).test('123456')).toBe(false);
    });
  });

  describe('isNumberAtLeastN', () => {
    it('should return true if the string is at least n digit number', () => {
      expect(isNumberAtLeastN(3).test('123')).toBe(true);
    });

    it('should return true if the string is at least n digit number', () => {
      expect(isNumberAtLeastN(3).test('1234')).toBe(true);
    });

    it('should return false if the string is not at least n digit number', () => {
      expect(isNumberAtLeastN(3).test('12')).toBe(false);
    });
  });

  describe('isTWMobile', () => {
    it('should return true if the string is Taiwan mobile number', () => {
      expect(isTWMobile().test('0912345678')).toBe(true);
    });

    it('should return false if the string is not Taiwan mobile number', () => {
      expect(isTWMobile().test('09123456789')).toBe(false);
    });
  });

  describe('isTWPhone', () => {
    it('should return true if the string is Taiwan phone number', () => {
      expect(isTWPhone().test('0212345678')).toBe(true);
    });

    it('should return true if the string is Taiwan phone number and contain dash', () => {
      expect(isTWPhone().test('02-12345678')).toBe(true);
    });

    it('should return true if the string is Taiwan phone number and contain extension number', () => {
      expect(isTWPhone().test('02-12345678#123')).toBe(true);
    });

    it('should return false if the string is not Taiwan phone number', () => {
      expect(isTWPhone().test('02123456789')).toBe(false);
    });

    it('should return false if the string is not Taiwan phone number and contain invalid extension number', () => {
      expect(isTWPhone().test('02-12345678#123456')).toBe(false);
    });
  });

  describe('hasUpperCase', () => {
    it('should return true if the string has upper case', () => {
      expect(hasUpperCase().test('abcA')).toBe(true);
    });

    it('should return false if the string does not have upper case', () => {
      expect(hasUpperCase().test('abc')).toBe(false);
    });
  });

  describe('hasLowerCase', () => {
    it('should return true if the string has lower case', () => {
      expect(hasLowerCase().test('abcA')).toBe(true);
    });

    it('should return false if the string does not have lower case', () => {
      expect(hasLowerCase().test('ABC')).toBe(false);
    });
  });

  describe('hasNumber', () => {
    it('should return true if the string has number', () => {
      expect(hasNumber().test('abc1')).toBe(true);
    });

    it('should return false if the string does not have number', () => {
      expect(hasNumber().test('abc')).toBe(false);
    });
  });

  describe('hasSpecialCharacter', () => {
    it('should return true if the string has special character', () => {
      expect(hasSpecialCharacter().test('abc!')).toBe(true);
    });

    it('should return false if the string does not have special character', () => {
      expect(hasSpecialCharacter().test('abc')).toBe(false);
    });
  });
});
