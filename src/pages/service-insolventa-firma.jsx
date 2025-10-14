"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { CheckCircle2, ArrowRight, MessageCircle, ChevronRight } from "lucide-react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FinalCTA from "../common/final-cta"

export default function ServiceInsolventaFirma() {
  // SEO tags
  useEffect(() => {
    document.title = "Insolvență firmă – Reorganizare, lichidare și asistență juridică | Avocat SRL"

    const metaDescription =
      "Asistență juridică completă în procedurile de insolvență: analiză juridică și financiară, redactare cerere de deschidere, reprezentare în instanță și relația cu lichidatorul judiciar."
    const canonicalUrl = "https://consultantabv.ro/servicii/insolventa-firma"

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

  const scrollToDocuments = () => {
    document.getElementById("acte-necesare")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-white">
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
              insolvență. La Avocat SRL, oferim analiză juridică și financiară, redactăm cererea de deschidere și te
              reprezentăm în instanță, de la prima etapă până la închiderea procedurii.
            </p>

            {/* CTA Box */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToDocuments}
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
              Conform legislației în vigoare, orice firmă care nu poate plăti obligațiile scadente mai vechi de 60 de
              zile este obligată să solicite deschiderea procedurii de insolvență.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              În caz contrar, administratorii pot fi trași la răspundere personală pentru prejudiciile cauzate
              creditorilor.
            </p>
          </div>
        </div>
      </section>

      {/* GRID 2x2 - ACTE NECESARE & CUM TE PUTEM AJUTA */}
      <section
        id="acte-necesare"
        className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] text-white"
      >
        <div className="page-container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Acte necesare */}
            <div className="p-8 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 font-serif">
                Acte necesare pentru deschiderea procedurii de insolvență
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">
                    Cererea de deschidere a procedurii (conform Legii 85/2014)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">
                    Bilanț și balanță de verificare actualizată
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">Lista creditorilor și a creanțelor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">
                    Documente justificative privind imposibilitatea de plată (extrase, somații, popriri)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">Fișa rol fiscal emisă de ANAF</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">
                    Act constitutiv și certificate constatatoare ONRC
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">
                    Declarație pe proprie răspundere privind starea patrimoniului
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Cum te putem ajuta */}
            <div className="p-8 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 font-serif">Cum te putem ajuta</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">
                    Consultanță privind opțiunile legale și analiza situației firmei
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">Redactarea cererii de deschidere</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">
                    Reprezentare în fața instanței de judecată
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">
                    Asistență în relația cu lichidatorul/administratorul judiciar
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">
                    Elaborarea planului de reorganizare (dacă este cazul)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">Asistență la lichidarea activelor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">Negocierea relației cu creditorii</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">
                    Monitorizarea procedurii și informarea constantă a clientului
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GRID 2x2 - TIPURI & DURATĂ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 3 - Tipuri de insolvență */}
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#0a2540] font-serif">Tipuri de insolvență</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-relaxed">
                    Insolvență la cererea debitorului (firma)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-relaxed">Insolvență la cererea creditorului</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-relaxed">Reorganizare judiciară</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-relaxed">Lichidare judiciară (faliment)</span>
                </li>
              </ul>
            </div>

            {/* Card 4 - Cât durează */}
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#0a2540] font-serif">Cât durează procedura</h3>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Durata procedurii variază în funcție de complexitatea cazului și de numărul creditorilor.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-semibold text-[#0a2540] mb-1">Procedura simplificată de faliment</p>
                    <p className="text-sm text-gray-600">între 6 luni și 1,5 ani</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
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
