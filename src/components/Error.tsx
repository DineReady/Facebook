import React from "react";
import Header from "./Header";
import LottieAnimation from "./LottieAnimation";
import Response from "./Response";
import ErrorAnimation from "../assets/lottie/error.json";

const Error = () => {
    return (
        <main>
            <Header />
            <LottieAnimation animationData={ErrorAnimation} />
            <Response orderStatus="Order doesn't exist" />
        </main>
    );
};

export default Error;