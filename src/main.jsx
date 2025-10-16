import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./global.css"

// Componentă scroll top automat
import ScrollToTop from "./components/ScrollToTop.jsx"
// Banner cookies
import CookieConsent from "./components/CookieConsent.jsx"
// Anti “widow” — text fallback
import NoWidowProvider from "./providers/NoWidowProvider.jsx"

// Pagini
import HomePage from "./pages/homepage.jsx"
import ContactPage from "./pages/contactpage.jsx"
import NotFound from "./pages/not-found.jsx"
import ServicesPage from "./pages/services-page.jsx"
import ServiceInfiintareSRL from "./pages/service-infiintare-srl.jsx"
import ServiceInfiintarePFA from "./pages/service-infiintare-pfa.jsx"
import ServiceConsultantaJuridica from "./pages/service-consultanta-juridica.jsx"
import ServiceInchidereFirma from "./pages/service-inchidere-firma.jsx"
import ServiceInchidereFirmaCuDatorii from "./pages/service-inchidere-firma-cu-datorii.jsx"
import ServiceInsolventaFirma from "./pages/service-insolventa-firma.jsx"
import PoliticaConfidentialitate from "./pages/politica-confidentialitate.jsx"
import TermeniConditii from "./pages/termeni-conditii.jsx"
import PoliticaCookies from "./pages/politica-cookies.jsx"

// ✅ Root render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />          {/* Reveniți automat sus la fiecare rută */}
      <CookieConsent />        {/* Banner cookies */}
      <NoWidowProvider />      {/* Protecție anti “widow words” */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/servicii" element={<ServicesPage />} />
        <Route path="/servicii/infiintare-srl" element={<ServiceInfiintareSRL />} />
        <Route path="/servicii/infiintare-pfa" element={<ServiceInfiintarePFA />} />
        <Route path="/servicii/consultanta-juridica" element={<ServiceConsultantaJuridica />} />
        <Route path="/servicii/inchidere-firma" element={<ServiceInchidereFirma />} />
        <Route path="/servicii/preluare-firma" element={<ServiceInchidereFirmaCuDatorii />} />
        <Route path="/servicii/insolventa-firma" element={<ServiceInsolventaFirma />} />
        <Route path="/politica-confidentialitate" element={<PoliticaConfidentialitate />} />
        <Route path="/termeni-conditii" element={<TermeniConditii />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
