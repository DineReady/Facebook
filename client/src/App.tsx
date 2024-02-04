import React, { useState, useEffect } from "react";
import "./app.css";
import { OrderStatus } from "./types";
import { Done, Logo, PreparationImage } from "./assets";

export default function App(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [orderStatus, setOrderStatus] = useState<string>(
        OrderStatus.PREPARATION,
    );
    const [image, setImage] = useState<string>(PreparationImage);

    useEffect(() => {
        setImage(
            orderStatus === OrderStatus.PREPARATION ? PreparationImage : Done,
        );
    }, [orderStatus]);

    return (
        <main className="max-w-screen max-h-screen m-0 p-10 text-5xl flex justify-center items-center flex-col">
            <img className="w-20" src={Logo} alt="logo" />
            <img className="orderImage" src={image} alt="order_img" />
            <h1 className="text-2xl">{orderStatus}</h1>
        </main>
    );
}
