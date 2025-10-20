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
// GHIDURI 2026
import ResursePage from "./pages/resurse-page.jsx"
import GhidInfiintareSRL2026 from "./pages/ghid/infiintare-srl-2026.jsx";
import GhidInchidereFirma2026 from "./pages/ghid/inchidere-firma-2026.jsx";
import GhidInsolventa2026 from "./pages/ghid/insolventa-firma-2026.jsx";
import GhidModificareSediu2026 from "./pages/ghid/modificare-sediu-social-2026.jsx";
import GhidModificariONRC2026 from "./pages/ghid/modificari-onrc-2026.jsx";
import SRLvsPFA2026 from "./pages/ghid/srl-vs-pfa-2026.jsx";
import DespreNoiPage from "./pages/despre-noi-page.jsx"

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
        <Route path="/resurse" element={<ResursePage />} />
        <Route path="/despre-noi" element={<DespreNoiPage />} />
       
        {/* GHIDURI 2026 – slugs CONSISTENTE */}
        <Route path="/ghid/infiintare-srl-2026" element={<GhidInfiintareSRL2026 />} />
        <Route path="/ghid/inchidere-firma-2026" element={<GhidInchidereFirma2026 />} />
        <Route path="/ghid/insolventa-firma-2026" element={<GhidInsolventa2026 />} />
        <Route path="/ghid/modificare-sediu-social-2026" element={<GhidModificareSediu2026 />} />
        <Route path="/ghid/modificari-onrc-2026" element={<GhidModificariONRC2026 />} />
        <Route path="/ghid/srl-vs-pfa-2026" element={<SRLvsPFA2026 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
