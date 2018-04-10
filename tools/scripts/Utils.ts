export const getTranslationsFromString = (content: string): RegExpMatchArray => {
  return [
    ...content.match(/\$t\('.*'\)/g),
    ...content.match(/\$t\('.*'\s*\/\*[\r,\n, ,\S]*?\*\/\)/g),
  ];
};
export const sanitizeMessage = (message: string): string => {
  const replacements: Array<{ from: string | RegExp, to: string }> = [
    { from: /\s\s+/g, to: ' ' },
    { from: '/*', to: '' },
    { from: '*/', to: '' },
    { from: /\[/g, to: '<' },
    { from: /\]/g, to: '>' },
    { from: /"/g, to: '\\"' },
  ];

  replacements.forEach((replacement: { from: string | RegExp, to: string }) => {
    message = message.replace(replacement.from, replacement.to);
  });

  return message.trim();
};
export const getTranslationObject = (matches: string[]): any => {
  const translations: any = {};

  matches.forEach((translation: string) => {
    const idMatches: string[] = translation.match(/'\S*'/);
    const id: string = idMatches ? idMatches[0].replace(/[\\']/g, '') : '';
    const defaultMessageMatches: string[] = translation.match(/\/\*[\S\s]*\*\//);
    const defaultMessage: string = defaultMessageMatches
                                   ? defaultMessageMatches[0]
                                   : '';

    if (defaultMessage.length > 0) {
      translations[id] = sanitizeMessage(defaultMessage);
    }
  });

  return translations;
};
