import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Box sx={{ padding: "1rem" }}>
        <App />
      </Box>
    </BrowserRouter>
  </React.StrictMode>
);
