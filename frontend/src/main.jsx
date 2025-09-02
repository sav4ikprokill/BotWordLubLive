import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import WebApp from "@twa-dev/sdk";
import "./index.css"; // тут Tailwind

// Telegram WebApp API
WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
