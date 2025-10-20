"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// ✅ folosește-ți setul local de icon-uri, nu lucide-react
import {
  CheckCircle2Icon,
  ArrowRightIcon,
  MessageCircleIcon,
  ChevronRightIcon,
} from "../icons"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FAQSection from "../components/FAQSection"
import FinalCTA from "../common/final-cta"

// ✅ SEO
import { setMetaTags } from "../seo/meta"
import JsonLd from "../components/JsonLd"

// ─────────────────────────────────────────────────────────────────────────────
// Date statice (liste/arrays) 
// ─────────────────────────────────────────────────────────────────────────────

const ceIncludem = [
  "Analiză inițială a situației și recomandări rapide",
  "Consultanță scrisă (rezumat + pași) pe e-mail",
  "Redactare/revizuire contracte comerciale",
  "Asistență la ONRC: mențiuni, modificări, dosare",
  "Recomandări pentru conformitate (GDPR, sancțiuni, fiscal)",
  "Suport în relația cu banca/ANAF/parteneri (explicații/confirmări)",
]

const tipuriConsultanta = [
  {
    title: "Pentru SRL/SA",
    description:
      "Modificări statutare, administratori/asociați, obiecte CAEN, puncte de lucru, cesiuni părți sociale, contracte, conformitate și strategie.",
  },
  {
    title: "Pentru PFA/II",
    description:
      "Înființare, autorizări, schimbare activități, suspendare/reactivare, relația cu ANAF, obligații fiscale și documente uzuale.",
  },
  {
    title: "Drept comercial",
    description:
      "Negociere și redactare contracte, termeni și condiții, clauze de confidențialitate, penalități, răspundere și managementul riscului.",
  },
  {
    title: "Drept civil",
    description:
      "Contracte civile, răspundere contractuală/delictuală, recuperare creanțe, notificări, puneri în întârziere, conciliere.",
  },
]

const pasi = [
  { number: "1", title: "Ne trimiți pe scurt situația (formular sau WhatsApp)" },
  { number: "2", title: "Primești analiza inițială + opțiuni și cost (24h)" },
  { number: "3", title: "Redactăm/rezolvăm documentele și depunem unde e cazul" },
  { number: "4", title: "Livrăm soluția și ghid pentru pașii următori" },
]

const deCeABV = [
  {
    title: "Rapid și clar",
    description:
      "Răspuns inițial în < 24h. Explicăm simplu, pe pași, fără limbaj juridic complicat.",
  },
  {
    title: "Experiență practică",
    description:
      "Proiecte zilnice cu ONRC/ANAF, contracte și situații comerciale reale, în toată țara.",
  },
  {
    title: "100% online sau la sediu",
    description:
      "Semnături electronice, documente PDF semnate și traseu complet digital – sau întâlnire la sediu (cu programare).",
  },
  {
    title: "Prețuri corecte",
    description:
      "Tarife fixe, comunicate de la început. Fără costuri ascunse sau surprize.",
  },
]

const faqItems = [
  {
    question: "În cât timp primesc răspunsul?",
    answer:
      "Răspuns inițial în < 24 de ore. Pentru proiecte complexe, stabilim împreună termene și pași.",
  },
  {
    question: "Cum lucrăm la distanță?",
    answer:
      "100% online: schimb de documente, semnături electronice, ședințe pe telefon/meet. La nevoie, depunem noi actele la ONRC/ANAF.",
  },
  {
    question: "Pot primi un cost clar dinainte?",
    answer:
      "Da. Îți dăm tariful fix înainte să începem. Dacă apar extra-pași, te informăm înainte.",
  },
  {
    question: "Facem și reprezentare în instanță?",
    answer:
      "În mod curent oferim consultanță și pregătire documente. Pentru litigii, te putem pune în legătură cu un avocat partener.",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Pagina: Consultanță juridică
// ─────────────────────────────────────────────────────────────────────────────

export default function ServiceConsultantaJuridica() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const scrollToFinalCTA = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  // SEO VARS
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/servicii/consultanta-juridica"
  const canonical = `${origin}${path}`

  const pageTitle = "Consultanță juridică pentru SRL, SA și PFA | ConsultantaBV"
  const pageDescr =
    "Consultanță juridică completă pentru SRL, SA și PFA: acte, modificări ONRC, contracte comerciale, litigii, drept comercial și civil. Rapid, clar, adaptat afacerii tale."
  const ogImage = `${origin}/images/hero-tablet.jpg`

  // META la mount
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

  // JSON-LD
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: origin },
      { "@type": "ListItem", position: 2, name: "Servicii", item: `${origin}/servicii` },
      { "@type": "ListItem", position: 3, name: "Consultanță juridică", item: canonical },
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
    name: "Consultanță juridică pentru SRL, SA și PFA",
    description: pageDescr,
    url: canonical,
    image: ogImage,
    serviceType: "Consultanță juridică",
    areaServed: { "@type": "Country", name: "România" },
    provider: {
      "@type": "Organization",
      name: "ConsultantaBV",
      url: origin,
      logo: `${origin}/images/logo.png`,
    },
  }

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD inline (idempotent) */}
      <JsonLd data={[webPageLd, breadcrumbLd, serviceLd]} />

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
              ONRC, modificări statutare, contracte comerciale, consultanță în drept comercial și civil, în Brașov și în toată țara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToFinalCTA}
                className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300"
              >
                Solicită ofertă
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <a
                href="https://wa.me/40730140766"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0a2540] font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
              >
                <MessageCircleIcon className="mr-2 h-5 w-5" />
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
              Acasă <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link to="/servicii" className="text-gray-600 hover:text-[#3eb89a]">
              Servicii
            </Link>
            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
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
              statutare până la redactare contracte și conformitate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ceIncludem.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-6 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-all"
              >
                <CheckCircle2Icon className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
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
              De ce noi?
            </h2>
            <p className="text-base sm:text-lg text-white/80 mt-6 max-w-3xl mx-auto leading-relaxed">
              Experiență practică, termene rapide și comunicare clară – consultanță la nivel național, inclusiv online.
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
