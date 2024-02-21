import React from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguageButton = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="fixed bottom-4 right-4">
            <select
                className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
            >
                <option value="en">English</option>
                <option value="pl">Polski</option>
            </select>
        </div>
    );
};

export default ChangeLanguageButton;
