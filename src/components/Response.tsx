import React from "react";
import { useTranslation } from "react-i18next";
import ChangeLanguageButton from "./ChangeLangBtn";

const Response = ({ orderStatus }: { orderStatus: string }) => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="response-text">{orderStatus}</h1>
            <h1>{t("myPageTitle")}</h1>
            <ChangeLanguageButton />
            <h2>{t("myHeader")}</h2>
            <p>{t("myDescription")}</p>
        </div>
    );
};

export default Response;
