import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Header } from "./Components/Header/index.tsx";
import { Box } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Box sx={{ padding: "1rem" }}>
      <App />
    </Box>
  </React.StrictMode>
);
