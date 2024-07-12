import { getLanguage } from './storage';
import { translationsEnUs } from './language/en-us';

const language = {
  code: 'en-us',
  content: translationsEnUs
};

const checkLanguage = () => {
  const langCode = getLanguage();
  if (langCode === language.code) {
    switch (langCode) {
    case 'en-us':
      language.code = 'en-us';
      language.content = translationsEnUs;
      break;
    default:
      language.code = 'en-us';
      language.content = translationsEnUs;
    }
  }
};

export const translate = (slug) => {
  checkLanguage();
  const keys = slug.split('.');
  let item = language.content;
  for (let i = 0; i < keys.length; i++) {
    item = item[keys[i]];
    if (!item) {
      return '';
    }
  }
  return item;
};
