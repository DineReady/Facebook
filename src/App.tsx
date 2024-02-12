/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import "./globals.css";
import { OrderStatus } from "./types";
import { Options } from "react-lottie";
import { DoneAnimation, PreparingAnimation } from "./assets";
import { Header, LottieAnimation, Response } from "./components";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function App(): JSX.Element {
    const [orderStatus, setOrderStatus] = useState<OrderStatus>(
        OrderStatus.ERROR,
    );
    const [image, setImage] =
        useState<Options["animationData"]>(PreparingAnimation);
    const { id } = useParams();
    const navigate: NavigateFunction = useNavigate();

    async function getOrderDetails() {
        try {
            const order = await axios.get(`http://localhost:8080/orders/${id}`);
            const orderStatus: string = order.data.status;
            console.log(order.data);
            setOrderStatus(
                orderStatus === "pending"
                    ? OrderStatus.PREPARATION
                    : OrderStatus.READY,
            );
            setImage(
                orderStatus === OrderStatus.READY
                    ? DoneAnimation
                    : PreparingAnimation,
            );
        } catch (error) {
            console.error(error);
            setOrderStatus(OrderStatus.ERROR);
        }
    }

    // todo: App context to handle the order status error for <Error />
    useEffect(() => {
        if (id?.length !== 36 || !id) {
            // setImage() TODO @Gniewkoss: Add ERROR Lottie animation
            setOrderStatus(OrderStatus.ERROR);
            navigate("/");
        } else getOrderDetails();
    }, [id, orderStatus, navigate]);

    return (
        <main style={{ overflowX: "hidden" }}>
            <Header />
            <LottieAnimation animationData={image} />
            <Response orderStatus={orderStatus} />
        </main>
    );
}
