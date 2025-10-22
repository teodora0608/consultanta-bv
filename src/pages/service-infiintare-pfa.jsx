"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"

// UI
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FAQSection from "../components/FAQSection"
import FinalCTA from "../common/final-cta"

// ✅ SEO helpers
import { setMetaTags } from "../seo/meta";
import JsonLd from "../components/JsonLd"

// ✅ Iconurile interne
import {
  CheckCircle2Icon as CheckCircle2,
  ArrowRightIcon as ArrowRight,
  MessageCircleIcon as MessageCircle,
  ChevronRightIcon as ChevronRight,
} from "../icons"

export default function ServiceInfiintarePFA() {
  // ─────────────── SEO VARS ───────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/servicii/infiintare-pfa"
  const canonical = `${origin}${path}`

  const pageTitle =
    "Înființare PFA online | ConsultantaBV – rapid, legal și fără bătăi de cap"
  const pageDescr =
    "Deschide un PFA rapid, 100% online. Consultanță pentru coduri CAEN, dosar ONRC, rezervare denumire, declarații fiscale și depunere la Registrul Comerțului. Suport în Brașov și în toată țara."
  const ogImage = `${origin}/images/hero-tablet.webp`

  // ─────────────── META (idempotent) ───────────────
  useEffect(() => {
    setMetaTags({
      title: pageTitle,
      description: pageDescr,
      canonical,
      image: ogImage,
    })
  }, [pageTitle, pageDescr, canonical, ogImage])

  // 📋 Content arrays
  const ceIncludem = [
    "Consultanță pentru alegerea formei potrivite (PFA, II, SRL)",
    "Rezervare denumire la Registrul Comerțului",
    "Redactarea actelor necesare pentru înființare",
    "Stabilirea codurilor CAEN potrivite activității",
    "Depunerea dosarului online la ONRC",
    "Obținerea certificatului de înregistrare și CUI",
  ]

  const pasi = [
    { number: "1", title: "Analiză inițială – alegerea formei și activităților" },
    { number: "2", title: "Rezervare denumire și pregătirea documentelor" },
    { number: "3", title: "Depunerea online a dosarului la ONRC" },
    { number: "4", title: "Aprobarea și obținerea certificatului de înregistrare" },
    { number: "5", title: "Ghid fiscal inițial – declarații și obligații" },
  ]

  const acteNecesare = [
    { title: "Buletinul (CI)", desc: "copie scanată față-verso" },
    { title: "Dovada sediului profesional", desc: "contract de comodat / proprietate" },
    { title: "Acordul asociației de proprietari (dacă e cazul)", desc: "pentru activitate la domiciliu" },
    { title: "Specimen semnătură", desc: "semnat olograf sau electronic" },
    { title: "Documente calificare (dacă e necesar)", desc: "pentru anumite coduri CAEN" },
  ]

  const faqItems = [
    {
      question: "Cât durează înființarea unui PFA?",
      answer: "De obicei 2–5 zile lucrătoare din momentul depunerii online a dosarului complet la ONRC.",
    },
    {
      question: "Pot înființa PFA fără prezență fizică?",
      answer: "Da. Tot procesul se poate face 100% online – semnare electronică și depunere digitală.",
    },
    {
      question: "Trebuie să am un contabil?",
      answer:
        "Nu e obligatoriu, dar recomandăm colaborarea cu un contabil pentru declarațiile periodice și TVA (dacă e cazul).",
    },
    {
      question: "Pot schimba ulterior codurile CAEN?",
      answer: "Da, poți adăuga sau modifica coduri CAEN printr-o procedură simplă de actualizare.",
    },
  ]

  // ─────────────── JSON-LD ───────────────
  const orgId = `${origin}#organization`
  const webSiteId = `${origin}#website`

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: origin },
      { "@type": "ListItem", position: 2, name: "Servicii", item: `${origin}/servicii` },
      { "@type": "ListItem", position: 3, name: "Înființare PFA", item: canonical },
    ],
  }

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    isPartOf: { "@id": webSiteId },
    name: pageTitle,
    description: pageDescr,
    primaryImageOfPage: ogImage,
    inLanguage: "ro-RO",
  }

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: "Înființare PFA online",
    description: pageDescr,
    url: canonical,
    image: ogImage,
    serviceType: "Înființare PFA",
    areaServed: { "@type": "Country", name: "România" },
    provider: { "@type": "Organization", "@id": orgId },
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Pașii înființării unui PFA",
    description: "Ghid succint al etapelor pentru deschiderea unui PFA.",
    step: pasi.map((p, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: p.title,
    })),
  }

  // 🧱 Layout
  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD idempotent */}
      <JsonLd data={[webPageLd, breadcrumbLd, serviceLd, faqLd, howToLd]} />

      <Navbar />

      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />
        <div className="page-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
              Înființare PFA rapidă și complet online
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 font-sans max-w-3xl leading-relaxed">
              Deschide un PFA legal și fără stres. Consultanță completă pentru coduri CAEN, documente, rezervare denumire și depunere online la Registrul Comerțului – în Brașov și în toată țara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3eb89a]"
              >
                Începe acum
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
              </Link>
<a
  href="https://wa.me/40730140766?text=Salut!%20Aș%20dori%20mai%20multe%20informații%20despre%20serviciile%20ConsultantaBV."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Scrie-ne pe WhatsApp"
  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0a2540] font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 min-h-[44px]"
>
  <MessageCircleIcon className="mr-2 h-5 w-5 shrink-0" />
  Întrebări? WhatsApp
</a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-sm font-sans" aria-label="breadcrumb">
            <Link to="/" className="text-gray-600 hover:text-[#3eb89a] flex items-center gap-1">
              Acasă <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <Link to="/servicii" className="text-gray-600 hover:text-[#3eb89a]">
              Servicii
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden />
            <span className="text-[#0a2540] font-semibold" aria-current="page">Înființare PFA</span>
          </nav>
        </div>
      </section>

      {/* CE INCLUDEM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Ce includem în serviciul de înființare PFA
            </h2>
            <div className="h-1 w-24 bg-[#3eb89a] mx-auto mt-3 rounded-full" />
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              De la consultanță până la depunerea online, gestionăm tot procesul pentru tine.
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

      {/* PAȘII PROCEDURII */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] text-white">
        <div className="page-container max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 font-serif text-center">
            Pașii înființării unui PFA
          </h2>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {pasi.map((pas, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#3eb89a] text-white text-xl font-bold flex items-center justify-center font-serif shadow-md flex-shrink-0">
                  {pas.number}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-serif">{pas.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTE NECESARE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Acte necesare pentru înființarea unui PFA
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              Documentele de bază pentru depunerea dosarului de înființare.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acteNecesare.map((a, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-[#0a2540] mb-2 font-serif">{a.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="page-container max-w-4xl mx-auto">
          {/* Dacă FAQSection la tine așteaptă `faqs`, schimbă prop-ul înapoi */}
          <FAQSection items={faqItems} />
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
