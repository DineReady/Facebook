import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(Backend) // Load translation using http backend
    .use(LanguageDetector) // Detect language automatically
    .use(initReactI18next) // Pass the i18n instance to react-i18next.
    .init({
        fallbackLng: "en", // Use 'en' if detected lng is unavailable
        debug: true, // Enable debug mode in development
        interpolation: {
            escapeValue: false, // Not needed for React as it escapes by default
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json", // Path to the translation files
        },
    });

export default i18n;
