import React, { useState, useEffect } from "react";
import "./index.css";
import PreparationImage from "./images/food.webp";
import Done from "./images/correct.png";
import Logo from "./images/logo.svg";
import { OrderStatus } from "./types/types";

function App() {
    const [orderStatus, setOrderStatus] = useState(OrderStatus.PREPARATION);
    const [image, setImage] = useState(PreparationImage);

    useEffect(() => {
        setImage(
            orderStatus === OrderStatus.PREPARATION ? PreparationImage : Done,
        );
    }, [orderStatus]);

    return (
        <div className="waiting-screen text-5xl flex justify-center items-center flex-col">
            <img className="logo" src={Logo} alt="" />
            <img className="orderImage" src={image} alt="" />
            <h1>{orderStatus}</h1>
        </div>
    );
}

export default App;
