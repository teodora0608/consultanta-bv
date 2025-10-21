"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FinalCTA from "../common/final-cta"

import JsonLd from "../components/JsonLd"
import { setMetaTags } from "../seo/meta"

import {
  CheckCircle2Icon,
  ArrowRightIcon,
  MessageCircleIcon,
  ChevronRightIcon,
} from "../icons"

export default function ServiceInsolventaFirma() {
  // ── SEO constants
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const canonical = `${origin}/servicii/insolventa-firma`
  const pageTitle =
    "Insolvență firmă – Reorganizare, lichidare și asistență juridică | ConsultantaBV"
  const pageDescr =
    "Asistență juridică completă în procedurile de insolvență: analiză juridică și financiară, redactare cerere de deschidere, reprezentare în instanță și relația cu lichidatorul judiciar."
  const ogImage = `${origin}/images/hero-tablet.webp`

  // ── JSON-LD data
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: origin },
      { "@type": "ListItem", position: 2, name: "Servicii", item: `${origin}/servicii` },
      { "@type": "ListItem", position: 3, name: "Insolvență firmă", item: canonical },
    ],
  }

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: pageTitle,
    description: pageDescr,
    isPartOf: { "@type": "WebSite", url: origin, name: "ConsultantaBV" },
    primaryImageOfPage: ogImage,
    inLanguage: "ro-RO",
  }

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Insolvență firmă",
    description: pageDescr,
    url: canonical,
    image: ogImage,
    serviceType: "Consultanță juridică insolvență și reorganizare firme",
    areaServed: { "@type": "Country", name: "România" },
    provider: {
      "@type": "Organization",
      name: "ConsultantaBV",
      url: origin,
      logo: `${origin}/images//public/images/logo.svg`,
    },
  }

  // ── Meta tags (idempotent)
  useEffect(() => {
    setMetaTags({
      title: pageTitle,
      description: pageDescr,
      canonical,
      image: ogImage,
      siteName: "ConsultantaBV",
      ogType: "article",
      locale: "ro_RO",
    })
  }, [pageTitle, pageDescr, canonical, ogImage])

  const scrollToDocuments = () => {
    document.getElementById("acte-necesare")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD */}
      <JsonLd data={[webPageLd, breadcrumbLd, serviceLd]} />

      <Navbar />

      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />
        <div className="page-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
              Insolvență firmă – Reorganizare, lichidare și asistență juridică completă
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 font-sans max-w-3xl leading-relaxed">
              Dacă firma ta nu își mai poate achita datoriile scadente, legea impune deschiderea procedurii de
              insolvență. ConsultantaBV oferă analiză juridică și financiară, redactăm cererea de deschidere și te
              reprezentăm în instanță, de la prima etapă până la închiderea procedurii.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToDocuments}
                className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300"
              >
                Află detalii
                <ArrowRightIcon className="icon ml-2" />
              </button>
              <a
                href="https://wa.me/40730140766"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0a2540] font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
              >
                <MessageCircleIcon className="icon mr-2" />
                Întrebări? WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-sm font-sans">
            <Link to="/" className="text-gray-600 hover:text-[#3eb89a] flex items-center gap-1">
              Acasă <ArrowRightIcon className="icon" />
            </Link>
            <Link to="/servicii" className="text-gray-600 hover:text-[#3eb89a]">
              Servicii
            </Link>
            <ChevronRightIcon className="icon text-gray-400" />
            <span className="text-[#0a2540] font-semibold">Insolvență firmă</span>
          </nav>
        </div>
      </section>

      {/* CÂND TREBUIE SĂ APELEZI */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Când trebuie să apelezi la procedura de insolvență?
            </h2>
            <div className="h-1 w-24 bg-[#3eb89a] mx-auto mt-3 rounded-full" />
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Conform legislației, orice firmă care nu poate plăti obligațiile scadente mai vechi de 60 de zile este
              obligată să solicite deschiderea procedurii de insolvență.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              În caz contrar, administratorii pot fi trași la răspundere personală pentru prejudiciile cauzate
              creditorilor.
            </p>
          </div>
        </div>
      </section>

      {/* GRID 2x2 – ACTE & AJUTOR */}
      <section
        id="acte-necesare"
        className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] text-white"
      >
        <div className="page-container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Acte necesare */}
            <div className="p-8 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 font-serif">
                Acte necesare pentru deschiderea procedurii de insolvență
              </h3>
              <ul className="space-y-3">
                {[
                  "Cererea de deschidere a procedurii (conform Legii 85/2014)",
                  "Bilanț și balanță de verificare actualizată",
                  "Lista creditorilor și a creanțelor",
                  "Documente justificative privind imposibilitatea de plată (extrase, somații, popriri)",
                  "Fișa rol fiscal emisă de ANAF",
                  "Act constitutiv și certificate constatatoare ONRC",
                  "Declarație pe proprie răspundere privind starea patrimoniului",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2Icon className="icon text-[#3eb89a] mt-0.5" />
                    <span className="text-sm text-white/90 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cum te putem ajuta */}
            <div className="p-8 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 font-serif">Cum te putem ajuta</h3>
              <ul className="space-y-3">
                {[
                  "Consultanță privind opțiunile legale și analiza situației firmei",
                  "Redactarea cererii de deschidere",
                  "Reprezentare în fața instanței de judecată",
                  "Asistență în relația cu lichidatorul/administratorul judiciar",
                  "Elaborarea planului de reorganizare (dacă este cazul)",
                  "Asistență la lichidarea activelor",
                  "Negocierea relației cu creditorii",
                  "Monitorizarea procedurii și informarea constantă a clientului",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2Icon className="icon text-[#3eb89a] mt-0.5" />
                    <span className="text-sm text-white/90 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tipuri + Durată */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tipuri */}
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#0a2540] font-serif">Tipuri de insolvență</h3>
              <ul className="space-y-3">
                {[
                  "Insolvență la cererea debitorului (firma)",
                  "Insolvență la cererea creditorului",
                  "Reorganizare judiciară",
                  "Lichidare judiciară (faliment)",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-base text-gray-700 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Durată */}
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#0a2540] font-serif">Cât durează procedura</h3>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Durata procedurii variază în funcție de complexitatea cazului și de numărul creditorilor.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRightIcon className="icon text-[#3eb89a] mt-0.5" />
                  <div>
                    <p className="text-base font-semibold text-[#0a2540] mb-1">
                      Procedura simplificată de faliment
                    </p>
                    <p className="text-sm text-gray-600">între 6 luni și 1,5 ani</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRightIcon className="icon text-[#3eb89a] mt-0.5" />
                  <div>
                    <p className="text-base font-semibold text-[#0a2540] mb-1">Reorganizarea judiciară</p>
                    <p className="text-sm text-gray-600">între 3 și 4 ani, în funcție de planul aprobat</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
