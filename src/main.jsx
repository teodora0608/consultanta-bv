// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './global.css' 

// Pagina principală
import HomePage from "./pages/homepage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Ruta principală */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </StrictMode>
);