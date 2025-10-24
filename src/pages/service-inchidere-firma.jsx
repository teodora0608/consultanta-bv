// src/pages/service-inchidere-firma.jsx
"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FinalCTA from "../common/final-cta"
import FAQSectionUI from "../common/FAQSectionUI.jsx"

import { setMetaTags } from "../seo/meta"
import JsonLd from "../components/JsonLd"

import {
  ArrowRightIcon as ArrowRight,
  ChevronRightIcon as ChevronRight,
  CheckCircle2Icon as CheckCircle2,
} from "../icons"

export default function ServiceInchidereFirma() {
  // ─────────────── SEO VARS ───────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/servicii/inchidere-firma"
  const canonical = `${origin}${path}`

  const pageTitle = "Închidere firmă (lichidare voluntară) | ConsultantaBV – legal și sigur"
  const pageDescr =
    "Închidere firmă 100% online. Dizolvare, lichidare și radiere conform legii. Documente, depuneri ONRC, Monitorul Oficial. Suport complet, în Brașov și în toată țara."
  const ogImage = `${origin}/images/hero-tablet.webp`

  // ─────────────── META (idempotent) ───────────────
  useEffect(() => {
    setMetaTags({
      title: pageTitle,
      description: pageDescr,
      canonical,
      image: ogImage,
      siteName: "ConsultantaBV", // ✅ coerență OG
      ogType: "article",         // ✅ subpagină serviciu
      locale: "ro_RO",
    })
  }, [pageTitle, pageDescr, canonical, ogImage])

  // ─────────────── Content ───────────────
  const ceIncludem = [
    "Consultanță juridică privind închiderea societății",
    "Redactarea hotărârii de dizolvare și a documentelor necesare",
    "Depunerea dosarului la Registrul Comerțului și publicitatea în Monitorul Oficial",
    "Asistență în relația cu ANAF, creditori și (dacă e cazul) lichidator",
    "Urmărirea statusului până la soluționare",
    "Radierea societății și predarea documentelor (PDF semnate)",
  ]

  const pasi = [
    { number: "1", title: "Analiză inițială & eligibilitate" },
    { number: "2", title: "Hotărârea asociaților / AGA & pregătirea documentelor" },
    { number: "3", title: "Depuneri ONRC & publicitate în Monitorul Oficial" },
    { number: "4", title: "Formalități fiscale & închiderea obligațiilor curente" },
    { number: "5", title: "Radierea societății & livrarea documentelor" },
  ]

  const deCeVoluntara = [
    { title: "Procedură reglementată, transparentă", description: "Proces clar și previzibil conform legislației." },
    { title: "Eviți costurile și riscurile închiderilor forțate", description: "Soluție controlată, fără surprize." },
    { title: "Documente verificate înainte de depunere", description: "Redactare atentă, fără respingeri." },
    { title: "Suport până la finalizare", description: "Te asistăm la fiecare etapă până la radiere." },
  ]

  const faqItems = [
    {
      question: "Cât durează închiderea voluntară?",
      answer:
        "Depinde de complexitate și termenele instituțiilor; în practică, câteva săptămâni de la depunerea dosarului complet.",
    },
    {
      question: "Este necesară prezența la ONRC?",
      answer: "De regulă, lucrăm prin împuternicire; te anunțăm dacă este nevoie de semnături.",
    },
    {
      question: "Ce se întâmplă cu datoriile?",
      answer:
        "Lichidarea voluntară e adecvată dacă nu există datorii; dacă apar obligații, îți recomandăm varianta corectă legal.",
    },
    {
      question: "Oferiți servicii și pentru firme cu datorii / insolvență?",
      answer: "Da, oferim consultanță separată pentru cazuri cu datorii sau insolvență.",
    },
  ]

  // ─────────────── JSON-LD ───────────────
  const orgId = `${origin}/#organization` // ✅ cu slash
  const webSiteId = `${origin}/#website`  // ✅ cu slash

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: origin },
      { "@type": "ListItem", position: 2, name: "Servicii", item: `${origin}/servicii` },
      { "@type": "ListItem", position: 3, name: "Închidere firmă", item: canonical },
    ],
  }

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    isPartOf: { "@id": webSiteId }, // ✅ referință, nu obiect nou
    name: pageTitle,
    description: pageDescr,
    primaryImageOfPage: ogImage,
    inLanguage: "ro-RO",
  }

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: "Închidere firmă (lichidare voluntară)",
    description: pageDescr,
    url: canonical,
    image: ogImage,
    serviceType: "Dizolvare, lichidare și radiere firme",
    areaServed: { "@type": "Country", name: "România" },
    provider: { "@type": "Organization", "@id": orgId }, // ✅ fără dublură
  }

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Pașii procedurii de închidere a firmei",
    description: "Ghid succint al etapelor pentru dizolvare, lichidare și radiere.",
    step: pasi.map((p, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: p.title,
    })),
  }

  // ─────────────── Layout ───────────────
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* JSON-LD idempotent */}
      <JsonLd data={[webPageLd, breadcrumbLd, serviceLd, howToLd]} />

      <a
        href="#content-start"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-[#0a2540] px-3 py-2 rounded"
      >
        Sari la conținut
      </a>

      <Navbar />

      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />
        <div className="page-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
              Închidere firmă (lichidare voluntară) – procedură legală, clară și sigură
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 font-sans max-w-3xl leading-relaxed">
              Îți închidem firma 100% online, legal și transparent. Te ajutăm cu redactarea hotărârii de dizolvare,
              depunerile ONRC și publicitatea în Monitorul Oficial – până la radierea finală. Totul fără drumuri inutile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                aria-label="Solicită evaluare - mergi la pagina de contact"
                data-ga="generate_lead"
                data-ga-type="CTA"
                data-ga-section="inchidere_firma"  // ✅ lowercase + underscore
                data-ga-label="Solicită evaluare - Închidere firmă"
                className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3eb89a]"
              >
                Solicită evaluare
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <a
                href="https://wa.me/40730140766?text=Salut!%20Aș%20dori%20mai%20multe%20informații%20despre%20serviciile%20ConsultantaBV."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scrie-ne pe WhatsApp"
                data-ga="contact"
                data-ga-type="whatsapp"
                data-ga-section="inchidere_firma"  // ✅ uniform
                data-ga-label="Scrie-ne pe WhatsApp"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0a2540] font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 min-h-[44px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5 mr-2"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="py-4 bg-gray-50 border-b border-gray-200" id="content-start">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-sm font-sans" aria-label="breadcrumb">
            <Link to="/" className="text-gray-600 hover:text-[#3eb89a] flex items-center gap-1">
              Acasă <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <Link to="/servicii" className="text-gray-600 hover:text-[#3eb89a]">
              Servicii
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden />
            <span className="text-[#0a2540] font-semibold" aria-current="page">
              Închidere firmă
            </span>
          </nav>
        </div>
      </section>

      {/* CE INCLUDEM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Ce includem în pachetul pentru închiderea firmei
            </h2>
            <div className="h-1 w-24 bg-[#3eb89a] mx-auto mt-3 rounded-full" />
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              Tot ce ai nevoie pentru o lichidare voluntară corectă și sigură – consultanță, documente, depuneri și radiere.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ceIncludem.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-6 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" aria-hidden />
                <span className="text-base text-gray-700 font-sans leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CADRUL LEGAL + ABORDAREA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] text-white">
        <div className="page-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 font-serif">Abordarea noastră</h3>
            <p className="text-base text-white/90 mb-6 leading-relaxed">
              Lucrăm direct cu asociații și administratorii pentru o gestionare eficientă și transparentă a procesului.
            </p>
            <ul className="space-y-3">
              {[
                "Analiză eligibilitate și calendar de pași",
                "Set complet de documente pentru ONRC și Monitorul Oficial",
                "Corelare cu situațiile contabile și închiderea obligațiilor curente",
                "Suport complet până la radierea definitivă",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] mt-0.5" aria-hidden />
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-2 font-serif">Cadrul legal aplicabil</h3>
            <p className="text-xs text-white/70 mb-6 italic">
              Aplicăm întotdeauna legislația în vigoare relevantă situației tale.
            </p>
            <ul className="space-y-3">
              {[
                "Legea 31/1990 privind societățile",
                "Reglementări ONRC privind dizolvarea și lichidarea",
                "Norme privind publicitatea în Monitorul Oficial",
                "Dispoziții fiscale și contabile relevante",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] mt-0.5" aria-hidden />
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PAȘII PROCEDURII */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Pașii procedurii de închidere a firmei
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              Clar și transparent – de la decizia de dizolvare până la radierea din Registrul Comerțului.
            </p>
          </div>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {pasi.map((pas, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-6 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 flex-none rounded-full bg-[#3eb89a] text-white text-xl font-bold flex items-center justify-center font-serif shadow-md">
                  {pas.number}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a2540] font-serif">{pas.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DE CE LICHIDARE VOLUNTARĂ */}
      <section
        id="de-ce-voluntara"
        className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] text-white"
      >
        <div className="page-container max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 font-serif">
              De ce să alegi lichidarea voluntară?
            </h2>
            <p className="text-base sm:text-lg text-white/80 mt-6 leading-relaxed">
              Dacă firma nu mai desfășoară activitate și nu are datorii, poți opta pentru închiderea voluntară – o
              procedură reglementată, clară și fără instanță. Include dizolvarea, lichidarea patrimoniului și radierea
              definitivă din Registrul Comerțului.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deCeVoluntara.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all"
              >
                <h3 className="text-lg font-bold mb-2 font-serif">{item.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="page-container max-w-4xl mx-auto">
          <FAQSectionUI faqs={faqItems} />
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
