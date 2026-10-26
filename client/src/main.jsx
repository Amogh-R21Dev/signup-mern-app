import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/playfair-display/400.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(<App />);
