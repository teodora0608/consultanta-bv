// src/pages/service-preluare-firma-cu-datorii.jsx
"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"

import Navbar from "../components/navbar.jsx"
import Footer from "../components/footer.jsx"
import FinalCTA from "../common/final-cta.jsx"
import FAQSectionUI from "../common/FAQSectionUI.jsx"

// ✅ SEO
import { setMetaTags } from "../seo/meta.js"
import JsonLd from "../components/JsonLd.jsx"

// ✅ Iconuri
import {
  ArrowRightIcon as ArrowRight,
  ChevronRightIcon as ChevronRight,
  CheckCircle2Icon as CheckCircle2,
} from "../icons.js"

export default function ServicePreluareFirmaCuDatorii() {
  // ─────────────── SEO VARS ───────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/servicii/preluare-firma-cu-datorii"
  const canonical = `${origin}${path}`

  const title = "Preluare firmă cu datorii | ConsultantaBV – soluții legale și sigure"
  const description =
    "Preluare firmă cu datorii: analiză juridică și fiscală, soluții legale (cesiune părți sociale, insolvență, faliment), documente, depuneri și reprezentare completă."
  const ogImage = `${origin}/images/hero-tablet.webp`

  // ─────────────── META (idempotent) ───────────────
  useEffect(() => {
    setMetaTags({
      title,
      description,
      canonical,
      image: ogImage,
      siteName: "ConsultantaBV",
      ogType: "article",
      locale: "ro_RO",
    })
  }, [title, description, canonical, ogImage])

  // ─────────────── Content arrays ───────────────
  const ceIncludem = [
    "Analiză juridică & fiscală a situației (debite, litigii, garanții, istoricul fiscal)",
    "Propunere de soluție legală: cesiune părți sociale / insolvență / faliment",
    "Documente & redactare (hotărâri, mandate, contracte, corespondență instituții)",
    "Depuneri la ONRC & publicitate în Monitorul Oficial (după caz)",
    "Reprezentare în relația cu ANAF, creditori, lichidator / instanță (unde e necesar)",
    "Radierea societății / finalizarea procedurii și livrarea documentelor (PDF semnate)",
  ]

  const pasi = [
    { number: "1", title: "Analiză inițială & eligibilitate" },
    { number: "2", title: "Hotărâri asociat(ți) / AGA & pregătirea documentelor" },
    { number: "3", title: "Depuneri ONRC & publicitate în Monitorul Oficial" },
    { number: "4", title: "Formalități fiscale & comunicări către creditori" },
    { number: "5", title: "Radiere / finalizarea procedurii & livrarea documentelor" },
  ]

  const deCeAceastaSolutie = [
    { title: "Procedură reglementată, transparentă", description: "Proces clar și pași previzibili, documente corecte." },
    { title: "Eviți costurile și riscurile închiderilor forțate", description: "Soluție controlată, fără surprize." },
    { title: "Documente verificate înainte de depunere", description: "Reducem riscul respingerilor și întârzierilor." },
    { title: "Suport până la finalizare", description: "Asistență completă, de la analiză până la radiere." },
  ]

  const garantii = [
    "Preluare doar după analiză completă – verificări juridice, fiscale și contabile.",
    "Respectarea strictă a legii – fără artificii, doar soluții legale (cesiune, insolvență, faliment).",
    "Documente conforme, redactate corect și depuse în termene.",
    "Alternative pentru cazuri neeligibile – deschidere procedură de insolvență/faliment.",
    "Asistență în caz de risc de răspundere patrimonială – reprezentare juridică unde e necesar.",
  ]

  const noteJuridice = [
    "Datorii bugetare: neplata poate duce la executare; insolvența devine obligatorie peste un anumit prag.",
    "Garanții personale (aval/fidejusiune): pot menține răspunderea persoanei garante.",
    "Leasing / furnizori cu bilete la ordin: obligațiile se tratează prin acorduri sau proceduri legale.",
    "Nedepunerea declarațiilor fiscale creează cazier fiscal – menținem conformitatea până la radiere.",
    "Schimbarea administratorului se face doar prin proceduri legale pentru a evita răspunderea solidară.",
  ]

  const faqItems = [
    { question: "Cât durează procedura?", answer: "Depinde de soluția aplicabilă și de răspunsul instituțiilor. Oferim termene estimative după evaluare." },
    { question: "Este necesară prezența la ONRC / instanță?", answer: "De regulă, nu. Lucrăm prin împuternicire, te anunțăm doar dacă e necesară semnătura fizică." },
    { question: "Ce se întâmplă cu garanțiile personale?", answer: "Acestea rămân valabile conform contractelor; oferim consultanță punctuală pentru fiecare caz." },
    { question: "Preluați orice firmă cu datorii?", answer: "Nu. Acceptăm doar cazurile care trec analiza de eligibilitate juridică, fiscală și contabilă." },
  ]

  // ─────────────── JSON-LD ───────────────
  const orgId = `${origin}/#organization`
  const webSiteId = `${origin}/#website`

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: origin },
      { "@type": "ListItem", position: 2, name: "Servicii", item: `${origin}/servicii` },
      { "@type": "ListItem", position: 3, name: "Preluare firmă cu datorii", item: canonical },
    ],
  }

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    isPartOf: { "@id": webSiteId }, // ✅ referință, nu obiect nou
    name: title,
    description,
    primaryImageOfPage: ogImage,
    inLanguage: "ro-RO",
  }

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: "Preluare firmă cu datorii",
    description,
    url: canonical,
    image: ogImage,
    serviceType: "Consultanță juridică și fiscală pentru firme cu datorii",
    areaServed: { "@type": "Country", name: "România" },
    provider: { "@type": "Organization", "@id": orgId }, // ✅ fără dublură
  }

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Pașii gestionării unei firme cu datorii",
    description: "Etapele posibile: analiză, documente, depuneri, comunicări și finalizare.",
    step: pasi.map((p, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: p.title,
    })),
  }

  // ─────────────── Layout ───────────────
  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD idempotent */}
      <JsonLd data={[webPageLd, breadcrumbLd, serviceLd, howToLd]} />

      <Navbar />

      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />
        <div className="page-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
              Preluare firmă cu datorii – soluții legale, predictibile
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 font-sans max-w-3xl leading-relaxed">
              Analizăm obiectiv situația firmei și propunem varianta potrivită: preluare responsabilă (după verificări),
              cesiune părți sociale, insolvență sau faliment. Totul documentat și conform legii.
            </p>
            <p className="text-xs text-white/60 mb-8 italic">
              *Soluția finală se stabilește după analiza completă a documentelor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                aria-label="Solicită evaluare - mergi la pagina de contact"
                data-ga="generate_lead"
                data-ga-type="CTA"
                data-ga-section="preluare_firma_cu_datorii"  // ✅ lowercase + underscore
                data-ga-label="Solicită evaluare - Preluare firmă cu datorii"
                className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300"
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
                data-ga-section="preluare_firma_cu_datorii"  // ✅ uniform
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
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-sm font-sans">
            <Link to="/" className="text-gray-600 hover:text-[#3eb89a] flex items-center gap-1">
              Acasă <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/servicii" className="text-gray-600 hover:text-[#3eb89a]">
              Servicii
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#0a2540] font-semibold">Preluare firmă cu datorii</span>
          </nav>
        </div>
      </section>

      {/* CE INCLUDEM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Ce includem în pachetul pentru preluare / închidere cu datorii
            </h2>
            <div className="h-1 w-24 bg-[#3eb89a] mx-auto mt-3 rounded-full" />
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              Analiză completă, soluții legale și asistență până la finalizare – pentru cazuri complexe cu datorii.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ceIncludem.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-6 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                <span className="text-base text-gray-700 font-sans leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABORDAREA / CADRUL LEGAL */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] text-white">
        <div className="page-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 font-serif">Abordarea noastră</h3>
            <p className="text-base text-white/90 mb-6 leading-relaxed">
              Lucrăm direct cu asociații și administratorii pentru a clarifica rapid starea societății, în mod legal și
              transparent.
            </p>
            <ul className="space-y-3">
              {[
                "Analiză de eligibilitate & plan de măsuri",
                "Set complet de documente pentru ONRC / instanță / Monitorul Oficial",
                "Corelare cu situațiile contabile & închiderea obligațiilor curente",
                "Asistență până la radierea definitivă",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a]" />
                  <span className="text-sm text-white/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-2 font-serif">Cadrul legal aplicabil</h3>
            <p className="text-xs text-white/70 mb-6 italic">Aplicăm strict legislația relevantă pentru fiecare caz.</p>
            <ul className="space-y-3">
              {[
                "Legea 31/1990 privind societățile",
                "Codul insolvenței – Legea 85/2014",
                "Codul de procedură fiscală – Legea 207/2015",
                "Norme privind publicitatea în Monitorul Oficial",
                "Alte dispoziții fiscale și civile relevante",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a]" />
                  <span className="text-sm text-white/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PAȘII PROCEDURII */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Pașii procedurii
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              De la analiza inițială până la radierea finală – un proces clar, legal și structurat.
            </p>
          </div>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {pasi.map((pas, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-6 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#3eb89a] text-white text-xl font-bold flex items-center justify-center font-serif shadow-md flex-shrink-0">
                  {pas.number}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a2540] font-serif leading-relaxed">{pas.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DE CE ACEASTĂ SOLUȚIE */}
      <section id="de-ce-aceasta-solutie" className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] text-white">
        <div className="page-container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 font-serif">De ce această soluție</h2>
            <div className="h-1 w-24 bg-[#3eb89a] mx-auto mt-3 rounded-full" />
            <p className="text-base sm:text-lg text-white/80 mt-6 max-w-3xl mx-auto leading-relaxed">
              Beneficiile unei abordări legale, structurate și transparente pentru gestionarea firmelor cu datorii.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deCeAceastaSolutie.map((item, idx) => (
              <div key={idx} className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all">
                <h3 className="text-lg font-bold mb-2 font-serif">{item.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANȚII */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-5xl mx-auto">
          <div className="p-8 bg-gray-50 border border-gray-200 rounded-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-serif text-[#0a2540]">
              Garanții & principii în gestionarea firmelor cu datorii
            </h2>
            <ul className="space-y-4">
              {garantii.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a]" />
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NOTE JURIDICE */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] text-white">
        <div className="page-container max-w-5xl mx-auto">
          <div className="p-8 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif">Note juridice utile</h2>
            <p className="text-base text-white/90 mb-6 leading-relaxed">
              Închiderea sau preluarea unei societăți cu datorii se face doar în limitele legii. Alegerea între cesiune părți sociale,
              insolvență, faliment sau radiere depinde de analiza datoriilor, garanțiilor și contractelor.
            </p>
            <ul className="space-y-3">
              {noteJuridice.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a]" />
                  <span className="text-sm text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="page-container max-w-4xl mx-auto">
          <FAQSectionUI faqs={faqItems} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="final-cta">
        <FinalCTA />
      </section>

      <Footer />
    </main>
  )
}
