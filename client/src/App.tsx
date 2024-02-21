import React, { useState, useEffect } from "react";
import "./globals.css";
import { OrderStatus } from "./types";
import Lottie, { Options } from "react-lottie";
import {
    DoneAnimation,
    Logo,
    PreparingAnimation,
    firstAnimation,
    thirdAnimation,
} from "./assets";

export default function App(): JSX.Element {
    const [orderStatus] = useState<OrderStatus>(OrderStatus.READY);
    const [animations] = useState<Options["animationData"][]>([
        PreparingAnimation,
        firstAnimation,
        thirdAnimation,
    ]);
    const [currentAnimation, setCurrentAnimation] = useState<number>(0);

    useEffect(() => {
        if (orderStatus === OrderStatus.READY) {
            setCurrentAnimation(-1); // -1 oznacza, że będzie wyświetlana animacja "Done"
        } else {
            const randomIndex = Math.floor(Math.random() * animations.length);
            setCurrentAnimation(randomIndex);
        }
    }, [orderStatus, animations]);

    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData:
            currentAnimation === -1
                ? DoneAnimation
                : animations[currentAnimation],
    };

    return (
        <main className="" style={{ overflowX: "hidden" }}>
            <img className="logo p-6" src={Logo} alt="logo" />
            <div style={{ pointerEvents: "none" }}>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={false}
                />
            </div>
            <h1 className="response-text p-6 mt-10 text-4xl">{orderStatus}</h1>
        </main>
    );
}
