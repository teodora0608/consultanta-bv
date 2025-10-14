"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CheckCircle2, ArrowRight, MessageCircle, ChevronRight } from "lucide-react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FAQSection from "../components/FAQSection"
import FinalCTA from "../common/final-cta"

export default function ServiceInfiintareSRL() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  // ✅ SEO tags handled natively by React (no Helmet)
  useEffect(() => {
    document.title = "Înființare SRL Online Brașov | Consultant ABV - 3–5 Zile Lucrătoare"

    const metaDescription =
      "Înființare SRL 100% online în Brașov și în toată România. Consultanță juridică, redactare acte, depunere ONRC. Livrare documente în 3–5 zile lucrătoare."
    const metaKeywords =
      "înființare SRL, înființare firmă Brașov, consultant juridic Brașov, înființare SRL online, deschidere firmă, ONRC, coduri CAEN"
    const canonicalUrl = "https://consultantabv.ro/servicii/infiintare-srl"

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
    "Consultanță pentru coduri CAEN (principal + secundare)",
    "Redactarea Actului Constitutiv și a documentației SRL",
    "Împuternicire / semnătură electronică (după caz)",
    "Depunere online și relația cu ONRC",
    "Urmărirea statusului până la soluționare",
    "Certificatul de înregistrare + actele societății (PDF semnate)",
  ]

  const acteNecesare = [
    { title: "Copie CI / Pașaport", description: "pentru fiecare asociat și administrator" },
    {
      title: "Documente pentru sediul social",
      description: "act de proprietate + acordul proprietarului / contract (ori soluția de găzduire)",
    },
    { title: "Denumirea societății", description: "cel puțin 3 variante pentru rezervare la ONRC" },
    { title: "Coduri CAEN", description: "activitatea principală și, la nevoie, activități secundare" },
  ]

  const pasi = [
    { number: "1", title: "Consultanță inițială și alegere coduri CAEN / denumire" },
    { number: "2", title: "Pregătirea și verificarea documentelor" },
    { number: "3", title: "Semnare (electronic / împuternicire)" },
    { number: "4", title: "Depunere online la ONRC & urmărire status" },
    { number: "5", title: "Confirmare înființare & livrare documente (PDF semnate)" },
  ]

  const deCeCuNoi = [
    { title: "100% online", description: "Semnături electronice și depuneri digitale" },
    { title: "Acte curate", description: "Redactare atentă, verificare înainte de depunere" },
    { title: "Răspuns rapid", description: "Status transparent, comunicare clară" },
    { title: "Suport continuu", description: "RUC, TVA, cont bancar, găzduire (opțional)" },
  ]

  const faqItems = [
    {
      question: "Se poate face 100% online?",
      answer:
        "Da. Folosim semnătură electronică sau împuternicire și depunem dosarul online. Primești actele firmei în PDF semnat.",
    },
    {
      question: "Ce acte sunt obligatorii?",
      answer:
        "CI, dovada sediului (act + acord / contract), denumiri propuse și coduri CAEN. În unele cazuri se poate cere specimen de semnătură sau capital social.",
    },
    {
      question: "Cât durează înființarea unui SRL?",
      answer: "Uzual 3–5 zile lucrătoare după depunerea dosarului complet (în funcție de ONRC).",
    },
    {
      question: "Mă ajutați și după înființare?",
      answer: "Da: RUC, cont bancar, înregistrare TVA (dacă e cazul) și alte formalități.",
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
              Înființare SRL & SRL-D – rapid, 100% online, fără drumuri inutile
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 font-sans max-w-3xl leading-relaxed">
              Îți înființăm firma în doar 3–5 zile lucrătoare, complet online. Consultanță pentru denumire, coduri CAEN,
              redactarea actelor și depunerea la ONRC – totul fără deplasări, indiferent dacă ești în Brașov sau oriunde
              în țară.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
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
            <span className="text-[#0a2540] font-semibold">Înființare SRL</span>
          </nav>
        </div>
      </section>

      {/* CE INCLUDEM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Ce includem în pachetul pentru înființare SRL
            </h2>
            <div className="h-1 w-24 bg-[#3eb89a] mx-auto mt-3 rounded-full" />
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              De la consultanță juridică până la livrarea actelor semnate electronic – totul pentru o înființare rapidă
              și sigură, realizată integral online.
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

      {/* ACTE NECESARE */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b]">
        <div className="page-container max-w-7xl mx-auto text-white">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 font-serif">
              Acte necesare pentru înființarea unei firme SRL
            </h2>
            <p className="text-base sm:text-lg text-white/80 mt-6 max-w-3xl mx-auto leading-relaxed">
              Documentele cerute de ONRC pentru deschiderea unei firme SRL – fie că înființezi compania în Brașov, fie
              în alt județ.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {acteNecesare.map((item, idx) => (
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

      {/* PAȘII PROCESULUI */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Pașii procesului de înființare SRL
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto font-sans leading-relaxed">
              Îți deschidem firma pas cu pas, clar și transparent. Urmărim întregul proces – de la alegerea codurilor
              CAEN până la livrarea documentelor digitale.
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

      {/* DURATĂ + DE CE CU NOI */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] text-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 font-serif">
              Durata procesului de înființare SRL
            </h2>
            <p className="text-base sm:text-lg text-white/80 mt-6 leading-relaxed">
              În medie, înființarea unui SRL durează 3–5 zile lucrătoare, în funcție de complexitatea dosarului și
              disponibilitatea semnăturii electronice. Lucrăm cu clienți din toată România – inclusiv firme din Brașov
              care aleg varianta 100% online.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 font-serif">
              De ce să ne alegi pentru înființarea firmei în Brașov sau online?
            </h2>
            <p className="text-base sm:text-lg text-white/80 mt-6 mb-12 leading-relaxed">
              Suntem o echipă specializată în consultanță juridică pentru înființări firme, cu experiență în proiecte
              din Brașov și din întreaga țară. Verificăm atent fiecare document, comunicăm clar și te ghidăm până la
              final.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deCeCuNoi.map((item, idx) => (
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
        </div>
      </section>

      {/* FAQ (fără titlu dublat) */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="page-container max-w-4xl mx-auto">
          <FAQSection faqs={faqItems} />
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
