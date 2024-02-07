import React, { useState, useEffect } from "react";
import "./globals.css";
import { OrderStatus } from "./types";
import Lottie, { Options } from "react-lottie";
import { DoneAnimation, Logo, PreparingAnimation } from "./assets";

export default function App(): JSX.Element {
    const [orderStatus] = useState<OrderStatus>(OrderStatus.PREPARATION);
    const [image, setImage] =
        useState<Options["animationData"]>(PreparingAnimation);

    useEffect(() => {
        setImage(
            orderStatus === OrderStatus.PREPARATION
                ? PreparingAnimation
                : DoneAnimation,
        );
    }, [orderStatus]);

    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData: image,
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
