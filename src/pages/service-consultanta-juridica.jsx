"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CheckCircle2, ArrowRight, MessageCircle, ChevronRight } from "lucide-react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FAQSection from "../components/FAQSection"
import FinalCTA from "../common/final-cta"

export default function ServiceConsultantaJuridica() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const scrollToFinalCTA = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  // SEO tags handled natively by React (no Helmet)
  useEffect(() => {
    document.title = "Consultanță juridică pentru SRL, SA și PFA | Consultant ABV"

    const metaDescription =
      "Consultanță juridică completă pentru SRL, SA și PFA: acte, modificări ONRC, contracte comerciale, litigii, drept comercial și civil. Rapid, clar, adaptat afacerii tale."
    const metaKeywords =
      "consultanta juridica, avocati, drept comercial, modificari ONRC, contracte comerciale, consultanta SRL, consultanta SA, consultanta PFA"
    const canonicalUrl = "https://consultantabv.ro/servicii/consultanta-juridica"

    const setMeta = (name, content) => {
      if (!content) return
      let tag = document.querySelector(`meta[name='${name}']`)
      if (!tag) {
        tag = document.createElement("meta")
        tag.setAttribute("name", name)
        document.head.appendChild(tag)
      }
      tag.setAttribute("content", content)
    }

    const setCanonical = (href) => {
      if (!href) return
      let link = document.querySelector("link[rel='canonical']")
      if (!link) {
        link = document.createElement("link")
        link.setAttribute("rel", "canonical")
        document.head.appendChild(link)
      }
      link.setAttribute("href", href)
    }

    setMeta("description", metaDescription)
    setMeta("keywords", metaKeywords)
    setCanonical(canonicalUrl)
  }, [])

  // Content arrays
  const ceIncludem = [
    "Consultanță pentru redactarea și revizuirea actelor constitutive",
    "Înregistrări și modificări la Registrul Comerțului (sediu, asociați, obiecte de activitate)",
    "Redactare și negociere contracte comerciale",
    "Asistență juridică în reorganizări, fuziuni sau lichidări",
    "Reprezentare și corespondență cu autoritățile",
    "Consultanță în drept comercial și civil",
  ]

  const tipuriConsultanta = [
    {
      title: "Consultanță pentru SRL",
      description:
        "Asistență la înființare, modificări statutare, transmitere părți sociale, contracte, reorganizări și soluționarea litigiilor.",
    },
    {
      title: "Consultanță pentru SA",
      description:
        "Sprijin pentru adunări generale, conformitate, raportare și relația cu autoritățile; obligații specifice companiilor pe acțiuni.",
    },
    {
      title: "Consultanță pentru PFA",
      description:
        "Înființare, actualizări CAEN, contracte de prestări servicii și consultanță fiscal-juridică pentru conformitate.",
    },
    {
      title: "Consultanță generală",
      description:
        "Conformitate (GDPR, muncă, fiscalitate), mediere conflicte, strategie juridică, reorganizare și optimizare.",
    },
  ]

  const pasi = [
    { number: "1", title: "Analiză inițială și înțelegerea obiectivelor" },
    { number: "2", title: "Colectarea informațiilor și a documentelor" },
    { number: "3", title: "Redactare / revizuire documente și propuneri" },
    { number: "4", title: "Depuneri, reprezentare și implementare" },
    { number: "5", title: "Follow-up și suport continuu" },
  ]

  const deCeABV = [
    { title: "Profesionalism și claritate", description: "Comunicare transparentă și soluții juridice adaptate" },
    { title: "Termene rapide și comunicare eficientă", description: "Răspundem prompt și respectăm deadlineurile" },
    { title: "Documente corecte, fără erori", description: "Verificare atentă înainte de depunere" },
    { title: "Suport complet după implementare", description: "Te asistăm și după finalizarea proiectului" },
  ]

  const faqItems = [
    {
      question: "Ce tipuri de firme pot beneficia de consultanță juridică?",
      answer:
        "Oferim consultanță pentru SRL, SA, PFA și alte forme de organizare. Adaptăm serviciile în funcție de nevoile specifice ale fiecărei afaceri.",
    },
    {
      question: "Puteți reprezenta firma la ONRC sau alte autorități?",
      answer:
        "Da, oferim reprezentare completă la Registrul Comerțului, ANAF și alte instituții, inclusiv depuneri online și urmărirea dosarelor.",
    },
    {
      question: "Cât durează redactarea unui contract comercial?",
      answer:
        "Depinde de complexitate, dar de obicei livrăm contracte simple în 2-3 zile lucrătoare. Pentru contracte complexe, discutăm termene personalizate.",
    },
    {
      question: "Oferiți consultanță și după finalizarea proiectului?",
      answer:
        "Da, rămânem disponibili pentru întrebări ulterioare, actualizări de documente și orice alte nevoi juridice care apar în activitatea firmei.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />
        <div className="page-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
              Consultanță juridică – clar, rapid, adaptată afacerii tale
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 font-sans max-w-3xl leading-relaxed">
              Oferim servicii juridice complete pentru antreprenori și persoane juridice – redactare acte, asistență
              ONRC, modificări statutare, contracte comerciale, litigii și consultanță în drept comercial sau civil, în
              Brașov și în toată țara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToFinalCTA}
                className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300"
              >
                Solicită ofertă
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="https://wa.me/40123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0a2540] font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
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
              Acasă <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/servicii" className="text-gray-600 hover:text-[#3eb89a]">
              Servicii
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#0a2540] font-semibold">Consultanță juridică</span>
          </nav>
        </div>
      </section>

      {/* CE INCLUDEM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Ce includem în pachetul de consultanță juridică
            </h2>
            <div className="h-1 w-24 bg-[#3eb89a] mx-auto mt-3 rounded-full" />
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              Serviciile noastre acoperă toate etapele legale din viața unei firme – de la înființare și modificări
              statutare până la reprezentare juridică și redactare contracte.
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

      {/* TIPURI DE CONSULTANȚĂ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b]">
        <div className="page-container max-w-7xl mx-auto text-white">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 font-serif">
              Tipuri de consultanță oferite
            </h2>
            <p className="text-base sm:text-lg text-white/80 mt-6 max-w-3xl mx-auto leading-relaxed">
              Adaptăm soluțiile juridice în funcție de forma de organizare și nevoile afacerii tale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tipuriConsultanta.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all h-full"
              >
                <h3 className="text-lg font-bold mb-2 font-serif">{item.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAȘII COLABORĂRII */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Pașii colaborării
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto font-sans leading-relaxed">
              Clar și transparent – de la analiza situației până la implementarea soluției și suportul ulterior.
            </p>
          </div>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {pasi.map((pas, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-6 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-all min-h-[100px]"
              >
                <div className="w-12 h-12 rounded-full bg-[#3eb89a] text-white text-xl font-bold flex items-center justify-center font-serif shadow-md flex-shrink-0">
                  {pas.number}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a2540] font-serif leading-relaxed">
                  {pas.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DE CE ABV */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] text-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 font-serif">
              De ce să alegi Consultant ABV
            </h2>
            <p className="text-base sm:text-lg text-white/80 mt-6 max-w-3xl mx-auto leading-relaxed">
              Experiență practică în drept comercial și civil, termene rapide și comunicare clară – oferim consultanță
              la nivel național, inclusiv online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deCeABV.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all h-full"
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
          <FAQSection faqs={faqItems} />
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
