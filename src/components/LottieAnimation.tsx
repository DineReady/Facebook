import React from "react";
import Lottie, { Options } from "react-lottie";

const LottieAnimation = ({
    animationData,
}: {
    animationData: Options["animationData"];
}) => {
    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData,
    };

    return (
        <div style={{ pointerEvents: "none" }}>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
                isStopped={false}
            />
        </div>
    );
};

export default LottieAnimation;
