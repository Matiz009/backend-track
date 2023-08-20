import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/app.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
export const server = "http://localhost:4000";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
