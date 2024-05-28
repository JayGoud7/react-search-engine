import React from "react";
import reactdom from "react-dom/client";
import App from "./App";
import "./index.css";

const el = document.querySelector("#root");

const root = reactdom.createRoot(el);

root.render(<App />);
