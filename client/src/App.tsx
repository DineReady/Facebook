import React, { useState, useEffect } from "react";
import "./globals.css";
import { OrderStatus } from "./types";
import { Done, Logo, PreparationImage } from "./assets";

export default function App(): JSX.Element {
    const [orderStatus, setOrderStatus] = useState(OrderStatus.PREPARATION);
    const [image, setImage] = useState(PreparationImage);

    useEffect(() => {
        setImage(
            orderStatus === OrderStatus.PREPARATION ? PreparationImage : Done,
        );
    }, [orderStatus]);

    return (
        <main className="main-section">
            <img className="logo" src={Logo} alt="logo" />
            <img src={image} alt="order_img" />
            <h1 className="response-text">{orderStatus}</h1>
        </main>
    );
}
