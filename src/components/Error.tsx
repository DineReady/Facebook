import React from "react";
import Header from "./Header";
import LottieAnimation from "./LottieAnimation";
import Response from "./Response";

const Error = () => {
    return (
        <main>
            <Header />
            {/* TODO: Lottie for error in Lottie.tsx */}
            <LottieAnimation animationData={null} />
            <Response orderStatus="error" />
        </main>
    );
};

export default Error;
