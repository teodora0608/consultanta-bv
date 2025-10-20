// src/pages/ghid/inchidere-firma-2026.jsx
"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRightIcon, ChevronRightIcon, AlertCircleIcon } from "../../icons"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

// ✅ SEO helpers
import { setMetaTags } from "../../seo/meta"
import JsonLd from "../../components/JsonLd"

export default function GhidInchidereFirma2026() {
  // ─────────────── SEO VARS ───────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/ghid/inchidere-firma-2026"
  const canonical = `${origin}${path}`

  const title =
    "Cum închizi o firmă în 2026 – Procedură pas cu pas | ConsultantaBV"
  const description =
    "Ghid 2026 pentru închiderea unui SRL: lichidare voluntară, pași ONRC, documente, termene, radiere și verificări fiscale. Explicat clar, pas cu pas."
  // ✅ servește imaginea din /public/images/ghiduri
  const ogImage = `${origin}/images/ghiduri/inchidere-firma-2026.jpg`

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

  // ─────────────── JSON-LD ───────────────
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: origin },
      { "@type": "ListItem", position: 2, name: "Resurse", item: `${origin}/resurse` },
      { "@type": "ListItem", position: 3, name: "Închidere firmă 2026", item: canonical },
    ],
  }

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { "@type": "WebSite", url: origin, name: "ConsultantaBV" },
    primaryImageOfPage: ogImage,
    inLanguage: "ro-RO",
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cum închizi o firmă în 2026 – Procedură pas cu pas",
    description,
    mainEntityOfPage: canonical,
    image: ogImage,
    author: { "@type": "Organization", name: "ConsultantaBV", url: origin },
    publisher: {
      "@type": "Organization",
      name: "ConsultantaBV",
      url: origin,
      logo: { "@type": "ImageObject", url: `${origin}/images/logo.png` },
    },
    datePublished: "2026-01-01",
    articleSection: ["Lichidare voluntară", "Radiere", "ONRC", "ANAF"],
  }

  const imageLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: ogImage,
    representativeOfPage: true,
  }

  // ─────────────── Conținut ───────────────
  const pasi = [
    {
      title: "Decizia de dizolvare și lichidare",
      description:
        "AGA/Decizie asociat unic pentru dizolvare urmată de lichidare. Se numește lichidator (asociat/administrator sau profesionist).",
    },
    {
      title: "Depunerea la ONRC a dizolvării",
      description:
        "Cerere + hotărâre, publicare în BPI (datorii/opoziții creditori). ONRC emite rezoluție de dizolvare.",
    },
    {
      title: "Inventariere și lichidare",
      description:
        "Valorificare active, stingere datorii, încasare creanțe, închidere puncte de lucru, denunțare contracte după caz.",
    },
    {
      title: "Bilanț de lichidare",
      description:
        "Situații financiare de lichidare (intermediare/finale), repartizarea activului net (dacă există) între asociați.",
    },
    {
      title: "Cerere de radiere la ONRC",
      description:
        "Se depune dosarul cu dovada publicării, raport lichidator, bilanț final, declarații. ONRC dispune radierea.",
    },
    {
      title: "Închiderea fiscală",
      description:
        "Declarațiile fiscale finale, închiderea vectorului fiscal, arhivarea documentelor, închiderea conturilor.",
    },
  ]

  const acte = [
    "Hotărâre AGA/Decizie asociat unic pentru dizolvare + lichidare",
    "Dovada publicării în BPI și expirarea termenelor de opoziție",
    "Raport lichidator și bilanț(uri) de lichidare",
    "Certificate constatatoare și formulare ONRC specifice",
    "Declarații pe proprie răspundere (model ONRC) și situații financiare",
  ]

  const faq = [
    {
      q: "Cât durează închiderea unei firme?",
      a: "Depinde de datorii/active/opoziții creditorilor. În practică, câteva luni (include publicarea în BPI și termenele procedurale).",
    },
    {
      q: "Pot închide firma cu datorii?",
      a: "Procedura standard presupune stingerea datoriilor înaintea radierii. Dacă nu este posibil, se analizează insolvența sau alte soluții legale.",
    },
    {
      q: "Trebuie control ANAF?",
      a: "Nu obligatoriu, dar ANAF poate realiza verificări documentare/controale. Depinde de situația fiscală a societății.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD (idempotent) */}
      <JsonLd data={[webPageLd, breadcrumbLd, articleLd, imageLd]} />

      <Navbar />

      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />
        <div className="page-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
              Cum închizi o firmă în 2026 – Procedură pas cu pas
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-sans leading-relaxed">
              Dizolvare, lichidare și radiere SRL: pașii legali, documentele și termenele obligatorii la ONRC și fiscal.
            </p>
          </div>
        </div>
      </section>

      {/* COVER din /public/images/ghiduri (webp + jpg fallback) */}
      <section className="py-8 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <picture>
            <source srcSet="/images/ghiduri/inchidere-firma-2026.webp" type="image/webp" />
            <img
              src="/images/ghiduri/inchidere-firma-2026.jpg"
              alt="Procedură închidere firmă 2026 – dizolvare, lichidare și radiere SRL pas cu pas"
              className="rounded-2xl shadow-md w-full border border-gray-200"
              width="1200"
              height="675"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </picture>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-sm font-sans flex-wrap" aria-label="breadcrumb">
            <Link to="/" className="text-gray-600 hover:text-[#3eb89a]">Acasă</Link>
            <ChevronRightIcon className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <Link to="/resurse" className="text-gray-600 hover:text-[#3eb89a]">Resurse</Link>
            <ChevronRightIcon className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <span className="text-[#0a2540] font-semibold">Închidere firmă 2026</span>
          </nav>
        </div>
      </section>

      {/* NOTE + CONȚINUT */}
      <section className="py-12 md:py-16 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 flex items-start gap-3">
            <AlertCircleIcon className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-gray-700 font-sans leading-relaxed">
              <strong>Important:</strong> închiderea legală a unei firme are două etape-cheie:{" "}
              <em>dizolvare + lichidare</em> și apoi <em>radiere</em> la ONRC. Publicarea în BPI și respectarea
              termenelor pentru opozițiile creditorilor sunt obligatorii.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-8 font-serif">Pașii procedurii</h2>
          <div className="space-y-6">
            {pasi.map((p, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#3eb89a] text-white font-bold flex items-center justify-center flex-shrink-0 font-serif">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2 font-serif">{p.title}</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mt-12 mb-6 font-serif">Documente uzuale</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {acte.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="page-container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-12 font-serif">Întrebări frecvente</h2>
          <div className="space-y-6">
            {faq.map((f, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#0a2540] mb-3 font-serif">{f.q}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b]">
        <div className="page-container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
              Vrei să închizi firma corect și rapid?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-sans">
              Te ghidăm în toate etapele: dosare ONRC, BPI, bilanț de lichidare, radiere.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-sans"
            >
              Solicită consultanță
              <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
