import React, { useState, useEffect } from "react";
import "./globals.css";
import { OrderStatus } from "./types";
import Lottie, { Options } from "react-lottie";
import {
    PreparationImage as PreparingAnimation,
    Done as DoneAnimation,
    Logo,
} from "./assets";

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
        <main className="main-section">
            <img className="logo" src={Logo} alt="logo" />
            <div style={{ pointerEvents: "none" }}>
                <Lottie
                    options={defaultOptions}
                    height={500}
                    width={500}
                    isStopped={false}
                />
            </div>
            <h1 className="response-text">{orderStatus}</h1>
        </main>
    );
}
