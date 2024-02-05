import React, { useState, useEffect } from "react";
import "./globals.css";
import { OrderStatus } from "./types";
import { Done, Logo, PreparationImage } from "./assets";
import Lottie from "react-lottie";
import animationData from "./assets/food.json";

export default function App(): JSX.Element {
    const [orderStatus, setOrderStatus] = useState(OrderStatus.PREPARATION);
    const [image, setImage] = useState(PreparationImage);

    useEffect(() => {
        setImage(
            orderStatus === OrderStatus.PREPARATION ? PreparationImage : Done,
        );
    }, [orderStatus]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: "svg",
    };

    return (
        <main className="main-section">
            <img className="logo" src={Logo} alt="logo" />
            {/* <img src={image} alt="order_img" /> */}
            <div>
                <Lottie options={defaultOptions} height={500} width={500} />
            </div>
            <h1 className="response-text">{orderStatus}</h1>
        </main>
    );
}
