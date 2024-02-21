import React from "react";
import Header from "./Header";
import LottieAnimation from "./LottieAnimation";
import Response from "./Response";
import ErrorAnimation from "../assets/lottie/error.json";
import { useTranslation } from "react-i18next";

const Error = () => {
    const { t } = useTranslation();

    return (
        <main>
            <Header />
            <LottieAnimation animationData={ErrorAnimation} />
            <Response orderStatus={t("errorMessage")} />
        </main>
    );
};

export default Error;
