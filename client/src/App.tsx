import React, { useState, useEffect } from "react";
import "./globals.css";
import { OrderStatus } from "./types";
import { Options } from "react-lottie";
import { DoneAnimation, PreparingAnimation } from "./assets";
import { Header, LottieAnimation, Response } from "./components";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";

export default function App(): JSX.Element {
    const [orderStatus, setOrderStatus] = useState<OrderStatus>(
        OrderStatus.PREPARATION,
    );
    const [image, setImage] =
        useState<Options["animationData"]>(PreparingAnimation);
    const { id } = useParams();
    const navigate: NavigateFunction = useNavigate();

    //todo: check for orer in DB
    useEffect(() => {
        if (id?.length !== 36) {
            // setImage() TODO @Gniewkoss: Add ERROR Lottie animation
            setOrderStatus(OrderStatus.ERROR);
            navigate("/");
        } else {
            setOrderStatus(OrderStatus.PREPARATION);
            setImage(
                orderStatus === OrderStatus.PREPARATION
                    ? PreparingAnimation
                    : DoneAnimation,
            );
        }
    }, [id, orderStatus, navigate]);

    return (
        <main style={{ overflowX: "hidden" }}>
            <Header />
            <LottieAnimation animationData={image} />
            <Response orderStatus={orderStatus} />
        </main>
    );
}
