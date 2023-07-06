import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
.use(Backend)
.use(I18nextBrowserLanguageDetector)
.use(initReactI18next)
.init({
    backend:{
        loadPath:"/asset/i18n/{{ns}}/{{lng}}.json",
    },
    fallbacklng:'it',
    debug:false,
    ns: ["common","home","entrypoint","profile"],
    interpolation:{
       espaceValue:false,
       formatSeparator:"," ,
    },
    react:{
        wait:true,
    },
});

export default i18n;