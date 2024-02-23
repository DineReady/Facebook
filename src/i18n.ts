import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Deklaracja tłumaczeń - import plików JSON z tłumaczeniami
import translationEN from "./locales/en/translation.json"; // plik z tłumaczeniami dla języka angielskiego
import translationPL from "./locales/pl/translation.json"; // plik z tłumaczeniami dla języka polskiego
import translationES from "./locales/es/translation.json"; // plik z tłumaczeniami dla języka hiszpańskiego
import translationFR from "./locales/fr/translation.json"; // plik z tłumaczeniami dla języka francuskiego
import translationDE from "./locales/de/translation.json"; // plik z tłumaczeniami dla języka niemieckiego
import translationIT from "./locales/it/translation.json"; // plik z tłumaczeniami dla języka włoskiego

// Deklaracja zasobów - obiekt zawierający tłumaczenia w różnych językach
const resources = {
    en: {
        translation: translationEN, // ustawienie tłumaczeń dla języka angielskiego
    },
    pl: {
        translation: translationPL, // ustawienie tłumaczeń dla języka polskiego
    },
    es: {
        translation: translationES, // ustawienie tłumaczeń dla języka hiszpańskiego
    },
    fr: {
        translation: translationFR, // ustawienie tłumaczeń dla języka francuskiego
    },
    de: {
        translation: translationDE, // ustawienie tłumaczeń dla języka niemieckiego
    },
    it: {
        translation: translationIT, // ustawienie tłumaczeń dla języka włoskiego
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
