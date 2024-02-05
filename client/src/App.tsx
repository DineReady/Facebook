import React, { useState, useEffect } from "react";
import "./globals.css";
import { OrderStatus } from "./types";
import Logo from "./assets/logo.svg";
import Lottie, { Options } from "react-lottie";
import PreparingAnimation from "./assets/food.json";
import DoneAnimation from "./assets/done.json";

export default function App(): JSX.Element {
    const [orderStatus, setOrderStatus] = useState(OrderStatus.PREPARATION);
    const [image, setImage] = useState<any>(PreparingAnimation);

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
