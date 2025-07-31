
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import en from './resources/en/common.json';
import vi from './resources/vn/common.json';

const languageCode = getLocales()[0]?.languageCode || 'vi';

if (!i18n.isInitialized) {
    i18n
        .use(initReactI18next)
        .init({

            lng: languageCode,
            fallbackLng: 'vi',
            resources: {
                en: { translation: en },
                vi: { translation: vi },
            },
            interpolation: {
                escapeValue: false,
            },
        });
}

export default i18n;
