import { sanitizeMessage } from './Utils';

describe('extract i18n messages', () => {

  test('sanitize message', () => {

    //npm run test:tools -- extract-i18n-messages

    console.log(sanitizeMessage(`
    /* this is a\n test
     multi line*/
    `));

  });

});
