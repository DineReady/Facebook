import React from "react";
import { useTranslation } from "react-i18next";
import ChangeLanguageButton from "./ChangeLangBtn";

const Response = ({ orderStatus }: { orderStatus: string }) => {
    const { t } = useTranslation();

    console.log("orderStatus", orderStatus);

    return (
        <div>
            <h1 className="response-text">{t(orderStatus)}</h1>

            <ChangeLanguageButton />
        </div>
    );
};

export default Response;
