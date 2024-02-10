import React from "react";

const Response = ({ orderStatus }: { orderStatus: string }) => {
    return <h1 className="response-text">{orderStatus}</h1>;
};

export default Response;
