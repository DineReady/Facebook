import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM, { Root } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "./components";
import "./i18n";

const root: Root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <ChakraProvider>
        <BrowserRouter>
            <Routes>
                {/* TODO: Loader component in <Route /> props */}
                <Route path="*" element={<Error />} />
                <Route path="/:id" element={<App />} />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>,
);

reportWebVitals();
