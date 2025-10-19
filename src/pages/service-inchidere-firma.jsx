"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CheckCircle2, ArrowRight, MessageCircle, ChevronRight } from "lucide-react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FAQSection from "../components/FAQSection"
import FinalCTA from "../common/final-cta"

export default function ServiceInchidereFirma() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const scrollToDeceVoluntara = () => {
    document.getElementById("de-ce-voluntara")?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  // ✅ SEO tags handled natively by React (no Helmet)
  useEffect(() => {
    document.title = "Închidere firmă (lichidare voluntară) | ConsultantaBV – legal și sigur"

    const metaDescription =
      "Închidere firmă 100% online. Dizolvare, lichidare și radiere conform legii. Documente, depuneri ONRC, Monitorul Oficial. Suport complet, în Brașov și în toată țara."
    const canonicalUrl = "https://consultantabv.ro/servicii/inchidere-firma"

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
    setCanonical(canonicalUrl)
  }, [])

  // Content arrays
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
    { title: "Procedură reglementată, transparentă", description: "Proces clar și previzibil conform legislației" },
    {
      title: "Eviti costurile și riscurile închiderilor forțate",
      description: "Soluție controlată, fără surprize neplăcute",
    },
    {
      title: "Documente verificate înainte de depunere",
      description: "Redactare atentă pentru evitarea respingerilor",
    },
    { title: "Suport până la finalizare", description: "Te asistăm la fiecare etapă până la radiere" },
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
        "Lichidarea voluntară este adecvată dacă nu există datorii restante; dacă apar obligații, îți recomandăm opțiunea legală potrivită.",
    },
    {
      question: "Aveți servicii și pentru închidere cu datorii / insolvență?",
      answer: "Oferim consultanță separată pentru scenarii cu datorii; îți propunem traseul corect legal după analiză.",
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
              Închidere firmă (lichidare voluntară) – procedură legală, clară și sigură
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 font-sans max-w-3xl leading-relaxed">
              Îți închidem firma 100% online, în condiții legale și transparente. Te ajutăm cu redactarea hotărârii de
              dizolvare, pregătirea dosarului, publicitatea în Monitorul Oficial și depunerile la ONRC – până la
              radierea societății. Fără drumuri inutile, cu ghidaj clar, în Brașov și în toată țara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToDeceVoluntara}
                className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300"
              >
                Află detalii
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
            <span className="text-[#0a2540] font-semibold">Închidere firmă</span>
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
              Tot ce ai nevoie pentru o lichidare voluntară corectă și sigură – consultanță, documente, depuneri și
              radiere.
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

      {/* ACTE / CADRUL LEGAL */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b]">
        <div className="page-container max-w-7xl mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Col stânga - Abordarea noastră */}
            <div className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 font-serif">Abordarea noastră</h3>
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Lucrăm direct cu asociații și administratorii pentru a gestiona eficient închiderea voluntară: relație
                transparentă cu instituțiile, programarea corectă a pașilor, optimizarea fiscală în limitele legii și
                comunicare clară până la radiere.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Analiză eligibilitate și calendar de pași
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Set complet de documente pentru ONRC și Monitorul Oficial
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Corelare cu situațiile contabile și închiderea obligațiilor curente
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Suport la fiecare etapă – până la radierea definitivă
                  </span>
                </li>
              </ul>
            </div>

            {/* Col dreapta - Cadrul legal */}
            <div className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2 font-serif">Cadrul legal aplicabil (exemple uzuale)</h3>
              <p className="text-xs text-white/70 mb-6 italic">
                Aplicăm întotdeauna legislația în vigoare relevantă situației tale specifice.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">Legea 31/1990 privind societățile</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Reglementări ONRC privind dizolvarea și lichidarea
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Norme metodologice aplicabile publicității în Monitorul Oficial
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Alte dispoziții incidente (fiscale / contabile), după caz
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PAȘII PROCEDURII */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Pașii procedurii de închidere a firmei (lichidare voluntară)
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto font-sans leading-relaxed">
              Clar și transparent – de la decizia de dizolvare până la radierea din Registrul Comerțului.
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
              Dacă firma nu mai desfășoară activitate și nu are datorii restante, poți opta pentru închiderea voluntară
              – o procedură reglementată, clară și previzibilă. Aceasta presupune dizolvarea, lichidarea patrimoniului
              și radierea definitivă din Registrul Comerțului, fără instanță.
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
