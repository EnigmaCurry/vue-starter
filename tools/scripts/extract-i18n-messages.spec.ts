import { getTranslationsFromString, sanitizeMessage } from './Utils';

describe('extract i18n messages', () => {

  test('should remove comments, line breaks and double white spaces', () => {
    const message: string = `/*
    test \\n test
    test

    test
    */`;

    expect(sanitizeMessage(message)).toBe('test \\n test test test');

  });

  test('should escape double quotes', () => {
    const message: string = `/* "foo" */`;

    expect(sanitizeMessage(message)).toBe('\\"foo\\"');
  });

  test('should replace <> with []', () => {
    const message: string = `/* [a]test[/a] */`;

    expect(sanitizeMessage(message)).toBe('<a>test</a>');
  });

  test('should parse translations from a string', () => {
    const content: string = `<div>
      {{ $t('test' /* this is a test */) }}
      {{ $t('test.test') }}
      {{ $t('test.foo' /* test (test) [test] test */) }}
    </div>`;

    expect(getTranslationsFromString(content))
    .toEqual([
               '$t(\'test.test\')',
               '$t(\'test\' /* this is a test */)',
               '$t(\'test.foo\' /* test (test) [test] test */)',
             ]);
  });

});
