import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./global.css"

import HomePage from "./pages/homepage.jsx"
import ContactPage from "./pages/contactpage.jsx"
import NotFound from "./pages/not-found.jsx"
import ServicesPage from "./pages/services-page.jsx"
import ServiceInfiintareSRL from "./pages/service-infiintare-srl.jsx"
import ServiceInfiintarePFA from "./pages/service-infiintare-pfa.jsx" // 👈 nou import
import ServiceConsultantaJuridica from "./pages/service-consultanta-juridica.jsx"
import ServiceInchidereFirma from "./pages/service-inchidere-firma.jsx"
import ServiceInchidereFirmaCuDatorii from "./pages/service-inchidere-firma-cu-datorii.jsx"
import ServiceInsolventaFirma from "./pages/service-insolventa-firma.jsx"
 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/servicii" element={<ServicesPage />} />
        <Route path="/servicii/infiintare-srl" element={<ServiceInfiintareSRL />} />
        <Route path="/servicii/infiintare-pfa" element={<ServiceInfiintarePFA />} /> {/* 👈 nouă rută */}
           <Route path="/servicii/consultanta-juridica" element={<ServiceConsultantaJuridica />} />{" "}
           <Route path="/servicii/inchidere-firma" element={<ServiceInchidereFirma />} />
           <Route path="/servicii/preluare-firma" element={<ServiceInchidereFirmaCuDatorii />} />
           <Route path="/servicii/insolventa-firma" element={<ServiceInsolventaFirma />} />
           
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
