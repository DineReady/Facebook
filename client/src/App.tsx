import React, { useState, useEffect } from "react";
import "./globals.css";
import { OrderStatus } from "./types";
import { Options } from "react-lottie";
import { DoneAnimation, PreparingAnimation } from "./assets";
import { Header, LottieAnimation, Response } from "./components";

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

    return (
        <main style={{ overflowX: "hidden" }}>
            <Header />
            <LottieAnimation animationData={image} />
            <Response orderStatus={orderStatus} />
        </main>
    );
}
