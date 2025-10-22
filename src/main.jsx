"use client"

import { StrictMode, lazy, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./global.css"

import ScrollToTop from "./components/ScrollToTop.jsx"
import NoWidowProvider from "./providers/NoWidowProvider.jsx"

const CookieConsent = lazy(() => import("./components/CookieConsent.jsx"))

const HomePage = lazy(() => import("./pages/homepage.jsx"))
const ContactPage = lazy(() => import("./pages/contactpage.jsx"))
const NotFound = lazy(() => import("./pages/not-found.jsx"))
const ServicesPage = lazy(() => import("./pages/services-page.jsx"))
const ServiceInfiintareSRL = lazy(() => import("./pages/service-infiintare-srl.jsx"))
const ServiceInfiintarePFA = lazy(() => import("./pages/service-infiintare-pfa.jsx"))
const ServiceConsultantaJuridica = lazy(() => import("./pages/service-consultanta-juridica.jsx"))
const ServiceInchidereFirma = lazy(() => import("./pages/service-inchidere-firma.jsx"))
const ServiceInchidereFirmaCuDatorii = lazy(() => import("./pages/service-inchidere-firma-cu-datorii.jsx"))
const ServiceInsolventaFirma = lazy(() => import("./pages/service-insolventa-firma.jsx"))
const PoliticaConfidentialitate = lazy(() => import("./pages/politica-confidentialitate.jsx"))
const TermeniConditii = lazy(() => import("./pages/termeni-conditii.jsx"))
const PoliticaCookies = lazy(() => import("./pages/politica-cookies.jsx"))
const ResursePage = lazy(() => import("./pages/resurse-page.jsx"))
const DespreNoiPage = lazy(() => import("./pages/despre-noi-page.jsx"))

// GHIDURI 2026
const GhidInfiintareSRL2026 = lazy(() => import("./pages/ghid/infiintare-srl-2026.jsx"))
const GhidInchidereFirma2026 = lazy(() => import("./pages/ghid/inchidere-firma-2026.jsx"))
const GhidInsolventa2026 = lazy(() => import("./pages/ghid/insolventa-firma-2026.jsx"))
const GhidModificareSediu2026 = lazy(() => import("./pages/ghid/modificare-sediu-social-2026.jsx"))
const GhidModificariONRC2026 = lazy(() => import("./pages/ghid/modificari-onrc-2026.jsx"))
const SRLvsPFA2026 = lazy(() => import("./pages/ghid/srl-vs-pfa-2026.jsx"))

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      {/* Provider global: prinde H1/H2/H3 și orice are .no-widow */}
      <NoWidowProvider selector="h1, h2, h3, .no-widow" keep={2} />

      <Suspense fallback={<div className="p-8 text-center text-gray-500">Se încarcă...</div>}>
        <CookieConsent />

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

          {/* GHIDURI 2026 */}
          <Route path="/ghid/infiintare-srl-2026" element={<GhidInfiintareSRL2026 />} />
          <Route path="/ghid/inchidere-firma-2026" element={<GhidInchidereFirma2026 />} />
          <Route path="/ghid/insolventa-firma-2026" element={<GhidInsolventa2026 />} />
          <Route path="/ghid/modificare-sediu-social-2026" element={<GhidModificareSediu2026 />} />
          <Route path="/ghid/modificari-onrc-2026" element={<GhidModificariONRC2026 />} />
          <Route path="/ghid/srl-vs-pfa-2026" element={<SRLvsPFA2026 />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
