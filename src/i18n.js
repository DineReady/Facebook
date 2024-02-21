import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Deklaracja tłumaczeń - import plików JSON z tłumaczeniami
import translationEN from "./locales/en/translation.json"; // plik z tłumaczeniami dla języka angielskiego
import translationPL from "./locales/pl/translation.json"; // plik z tłumaczeniami dla języka polskiego

// Deklaracja zasobów - obiekt zawierający tłumaczenia w różnych językach
const resources = {
    en: {
        translation: translationEN, // ustawienie tłumaczeń dla języka angielskiego
    },
    pl: {
        translation: translationPL, // ustawienie tłumaczeń dla języka polskiego
    },
};

i18n.use(initReactI18next) // inicjalizacja i18next
    .init({
        resources,
        lng: "en", // domyślny język
        keySeparator: false,

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
