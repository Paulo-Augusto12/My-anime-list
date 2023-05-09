import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../src/ui/Pages/Home/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
