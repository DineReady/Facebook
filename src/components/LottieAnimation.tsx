import React, { FC } from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
    animationData: any;
}

const LottieAnimation: FC<LottieAnimationProps> = ({ animationData }) => {
    return (
        <div style={{ pointerEvents: "none" }}>
            <Lottie
                loop
                autoplay
                animationData={animationData}
                height={400}
                width={400}
            />
        </div>
    );
};

export default LottieAnimation;
