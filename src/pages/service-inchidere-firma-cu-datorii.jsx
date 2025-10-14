"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CheckCircle2, ArrowRight, MessageCircle, ChevronRight, AlertCircle } from "lucide-react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FAQSection from "../components/FAQSection"
import FinalCTA from "../common/final-cta"

export default function ServiceInchidereFirmaCuDatorii() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const scrollToDeceAceastaSolutie = () => {
    document.getElementById("de-ce-aceasta-solutie")?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  // ✅ SEO tags handled natively by React (no Helmet)
  useEffect(() => {
    document.title = "Închidere / Preluare firmă cu datorii | Consultant ABV"

    const metaDescription =
      "Preluare sau închidere firmă cu datorii: analiză juridică și fiscală, soluții legale (cesiune părți sociale, insolvență, faliment), documente, depuneri și reprezentare."
    const canonicalUrl = "https://consultantabv.ro/servicii/inchidere-firma-cu-datorii"

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
    "Analiză juridică & fiscală a situației (debite, litigii, garanții, istoricul fiscal)",
    "Propunere de soluție legală: cesiune părți sociale / insolvență / faliment",
    "Documente & redactare (hotărâri, mandate, contracte, corespondență instituții)",
    "Depuneri la ONRC & publicitate în Monitorul Oficial (după caz)",
    "Reprezentare în relația cu ANAF, creditori, lichidator / instanță (când e necesar)",
    "Radierea societății / finalizarea procedurii și livrarea documentelor (PDF semnate)",
  ]

  const pasi = [
    { number: "1", title: "Analiză inițială & eligibilitate" },
    { number: "2", title: "Hotărâri asociat(ți) / AGA & pregătirea documentelor" },
    { number: "3", title: "Depuneri ONRC & publicitate în Monitorul Oficial (unde e cazul)" },
    { number: "4", title: "Formalități fiscale, comunicări către creditori & închiderea obligațiilor curente" },
    { number: "5", title: "Radiere / finalizarea procedurii & livrarea documentelor (PDF)" },
  ]

  const deCeAceastaSolutie = [
    {
      title: "Procedură reglementată, transparentă",
      description: "Proces clar, pași previzibili, documente corect redactate.",
    },
    {
      title: "Eviți costurile și riscurile închiderilor forțate",
      description: "Soluție controlată, fără surprize inutile.",
    },
    {
      title: "Documente verificate înainte de depunere",
      description: "Reducem riscul respingerilor.",
    },
    { title: "Suport până la finalizare", description: "Răspundem rapid, te ghidăm până la radiere." },
  ]

  const garantii = [
    "Preluare responsabilă doar după analiză – sunt eligibile doar firmele care trec de verificări juridice/fiscale/contabile; nu preluăm cazuri ce implică fapte penale.",
    "Respectarea strictă a legii – fără artificii, doar proceduri legale: cesiune, insolvență, faliment, radiere.",
    "Documente conforme & în termene – redactări corecte (sub semnătură privată sau formă autentică, unde e cazul) și depuneri la ONRC.",
    "Alternative pentru situații neeligibile la cesiune – deschidere procedură de insolvență/faliment, cu documentația aferentă.",
    "Asistență în caz de risc de răspundere patrimonială – reprezentare juridică acolo unde e necesar.",
  ]

  const noteJuridice = [
    "Datorii bugetare: neplata poate duce la popriri/executare; în anumite cazuri, insolvența e obligatorie.",
    "Garanții personale (aval/fidejusiune): pot menține răspunderea persoanei care a garantat.",
    "Leasing / furnizori cu bilete la ordin: obligațiile rămân, se analizează opțiuni (novatie/continuare plăți).",
    "Nedepunerea declarațiilor fiscale creează alte riscuri (cazier fiscal); păstrăm conformitatea până la final.",
    "Schimbarea administratorului se face legal; scopul este prevenirea răspunderii solidare nejustificate.",
  ]

  const faqItems = [
    {
      question: "Cât durează procedura?",
      answer: "Depinde de soluția aleasă și de răspunsul instituțiilor. Dăm termene orientative după evaluare.",
    },
    {
      question: "Este necesară prezența la ONRC / instanță?",
      answer: "În general lucrăm prin împuternicire; te anunțăm dacă sunt necesare semnături.",
    },
    {
      question: "Ce se întâmplă cu datoriile garantate (bilete la ordin / ipoteci)?",
      answer: "Garanțiile rămân valabile conform contractelor; oferim opțiuni legale și pași documentați.",
    },
    {
      question: "Preluați orice firmă cu datorii?",
      answer: "Nu. Acceptăm cazuri doar după verificări complete și doar dacă soluția e 100% legală și fezabilă.",
    },
    {
      question: "Puteți ajuta dacă există risc de răspundere a administratorului?",
      answer: "Da, analizăm situația și recomandăm calea legală corectă; oferim reprezentare unde e necesar.",
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
             Preluare firmă cu datorii – soluții legale, predictibile
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 font-sans max-w-3xl leading-relaxed">
              Analizăm obiectiv situația firmei și propunem varianta potrivită: preluare responsabilă (după verificări),
              cesiune părți sociale, insolvență sau faliment, urmate de radiere. Lucrăm clar, documentat și în limitele
              legii.
            </p>
            {/* Disclaimer note */}
            <p className="text-xs text-white/60 mb-8 italic">
              *Soluția finală se stabilește după analiza documentelor și a cadrului legal aplicabil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToDeceAceastaSolutie}
                className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300"
              >
                Solicită evaluare
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
            <span className="text-[#0a2540] font-semibold">Închidere / Preluare firmă cu datorii</span>
          </nav>
        </div>
      </section>

      {/* CE INCLUDEM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              Ce includem în pachetul pentru închidere / preluare cu datorii
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

      {/* ABORDAREA NOASTRĂ / CADRUL LEGAL */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b]">
        <div className="page-container max-w-7xl mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Col stânga - Abordarea noastră */}
            <div className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 font-serif">Abordarea noastră</h3>
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Lucrăm direct cu asociații și administratorii pentru a clarifica rapid starea societății. Punem accent
                pe transparență cu instituțiile, calendar realist al pașilor, corelare cu evidențele contabile și
                optimizarea fiscală în limitele legii, până la radierea definitivă.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Analiză de eligibilitate & plan de măsuri
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Set complet de documente pentru ONRC / instanță / Monitorul Oficial
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Corelare cu situațiile contabile & închiderea obligațiilor curente
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Asistență la fiecare etapă până la radiere
                  </span>
                </li>
              </ul>
            </div>

            {/* Col dreapta - Cadrul legal */}
            <div className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2 font-serif">Cadrul legal aplicabil (exemple uzuale)</h3>
              <p className="text-xs text-white/70 mb-6 italic">
                Aplicăm strict legislația relevantă pentru cazul tău specific.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">Legea nr. 31/1990 (societăți)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">Codul insolvenței – Legea nr. 85/2014</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Codul de procedură fiscală (Legea 207/2015)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Norme metodologice publicitate Monitorul Oficial
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Alte dispoziții incidente (fiscale / civile), după caz
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
              Pașii procedurii
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto font-sans leading-relaxed">
              De la analiza inițială până la radierea finală – un proces structurat și transparent.
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

      {/* ACTE NECESARE & VERIFICĂRI OBLIGATORII */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b]">
        <div className="page-container max-w-7xl mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Col stânga - Acte necesare */}
            <div className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 font-serif">Acte necesare</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Copii CI/pașaport pentru asociați / administratori (pentru identificare)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Certificat de înregistrare (CUI) – foto/scan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Date de contact & transmiterea documentelor (WhatsApp / email)
                  </span>
                </li>
              </ul>
            </div>

            {/* Col dreapta - Verificări obligatorii */}
            <div className="p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 font-serif">Verificări obligatorii</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Bilete la ordin avalizate / garanții personale – pot menține răspunderea avalistului
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Ipoteci & credite bancare – obligațiile garantate nu pot fi radiate până la stingere
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">
                    Contracte cu clauze de fidejusiune sau avansuri – evaluare punctuală a riscurilor
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DE CE ACEASTĂ SOLUȚIE */}
      <section id="de-ce-aceasta-solutie" className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
              De ce această soluție
            </h2>
            <div className="h-1 w-24 bg-[#3eb89a] mx-auto mt-3 rounded-full" />
            <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              Beneficiile unei abordări legale, structurate și transparente pentru închiderea firmelor cu datorii.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deCeAceastaSolutie.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold mb-2 font-serif text-[#0a2540]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANȚII & LIMITĂRI */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] text-white">
        <div className="page-container max-w-5xl mx-auto">
          <div className="p-8 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-serif">
              Garanții & principii în gestionarea firmelor cu datorii
            </h2>
            <ul className="space-y-4">
              {garantii.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NOTE JURIDICE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-5xl mx-auto">
          <div className="p-8 bg-gray-50 border border-gray-200 rounded-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif text-[#0a2540]">Note juridice utile</h2>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              Închiderea unei societăți cu datorii se face numai în limitele legii. Alegerea între cesiune părți
              sociale, insolvență, faliment sau radiere rezultă dintr-o analiză documentată a datoriilor, garanțiilor
              (ex. bilete la ordin, ipoteci), contractelor și istoricului fiscal. Răspunderea administratorului poate fi
              atrasă doar în condițiile prevăzute de lege (ex. Codul insolvenței, jurisprudență relevantă), nu prin
              prezumții. Pentru obligații garantate (ex. credite ipotecare, garanții personale), stingerea datoriilor
              ori continuarea plăților rămân necesare conform contractelor. Ne limităm la soluții licite și documentate;
              orice neconformitate poate genera riscuri suplimentare.
            </p>
            <ul className="space-y-3">
              {noteJuridice.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
