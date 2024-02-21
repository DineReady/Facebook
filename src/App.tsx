/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import "./globals.css";
import { OrderStatus } from "./types";
import Lottie from "lottie-react";
import { DoneAnimation, PreparingAnimation } from "./assets";
import { Header, LottieAnimation, Response } from "./components";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface Options {
    animationData: any;
}

export default function App(): JSX.Element {
    const [orderStatus, setOrderStatus] = useState<OrderStatus>(
        OrderStatus.ERROR,
    );
    const [image, setImage] =
        useState<Options["animationData"]>(PreparingAnimation);
    const { id } = useParams();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        async function getOrderDetails() {
            try {
                const order = await axios.get(
                    `http://localhost:8080/orders/${id}`,
                );
                const orderStatus: string = order.data.status;
                console.log(order.data);
                setOrderStatus(orderStatus as OrderStatus);
                setImage(
                    orderStatus === "DONE" ? DoneAnimation : PreparingAnimation,
                );
            } catch (error) {
                console.error(error);
            }
        }
        getOrderDetails();
    }, [id]);

    return (
        <main style={{ overflowX: "hidden" }}>
            <Header />
            <LottieAnimation animationData={image} />
            <Response orderStatus={orderStatus} />
        </main>
    );
}
