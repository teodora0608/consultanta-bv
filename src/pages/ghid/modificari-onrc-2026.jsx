// src/pages/ghid/modificari-onrc-2026.jsx
"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRightIcon as ArrowRight,
  ChevronRightIcon as ChevronRight,
  AlertCircleIcon as AlertCircle,
} from "../../icons"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

// ✅ SEO helpers
import { setMetaTags } from "../../seo/meta"
import JsonLd from "../../components/JsonLd"

export default function GhidModificariONRC2026() {
  // ─────────────── SEO VARS ───────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/ghid/modificari-onrc-2026"
  const canonical = `${origin}${path}`

  const title = "Modificări ONRC 2026 – Ghid complet | ConsultantaBV"
  const description =
    "Ghid 2026 pentru modificări la ONRC: schimbare sediu social, administratori, asociați, denumire, obiect CAEN, puncte de lucru. Pași, documente, termene."
  const ogImage = `${origin}/images/modificari-onrc-2026.webp`

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
      { "@type": "ListItem", position: 3, name: "Modificări ONRC 2026", item: canonical },
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
    headline: "Modificări ONRC 2026 – Ghid complet",
    description,
    mainEntityOfPage: canonical,
    image: ogImage,
    author: { "@type": "Organization", name: "ConsultantaBV", url: origin },
    publisher: {
      "@type": "Organization",
      name: "ConsultantaBV",
      url: origin,
      logo: { "@type": "ImageObject", url: `${origin}/images/logo.svg` },
    },
    datePublished: "2026-01-01",
    articleSection: ["ONRC", "Sediu social", "CAEN", "Asociați", "Administratori", "Puncte de lucru"],
  }

  const imageLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: ogImage,
    representativeOfPage: true,
  }

  // ─────────────── Conținut ───────────────
  const modificari = [
    { title: "Schimbare sediu social", description: "În aceeași localitate sau alt județ; cu/fără activitate la sediu. Necesită dovada spațiului + actualizare certificatul constatator." },
    { title: "Schimbare denumire firmă", description: "Se verifică disponibilitatea și unicitatea; se actualizează documentele și se emite rezoluție ONRC." },
    { title: "Schimbare obiect de activitate (CAEN)", description: "Stabilirea obiectului principal și/sau adăugarea codurilor secundare; actualizare act constitutiv." },
    { title: "Numire/revocare administrator", description: "Hotărâre AGA/Decizie asociat unic; specimen de semnătură integrat în documentele depuse." },
    { title: "Cesiune părți sociale / schimbare asociați", description: "Contract de cesiune, actualizare act constitutiv, respectarea drepturilor de preferință." },
    { title: "Înființare/încetare punct de lucru", description: "Declarare la ONRC + actualizare certificat constatator, după caz notificări fiscale." },
  ]

  const acte = [
    "Hotărâre AGA/Decizie asociat unic privind modificarea",
    "Act constitutiv actualizat (în forma cerută de ONRC)",
    "Dovezi: contract sediu/avize (dacă e cazul), documente identitate, consimțăminte",
    "Formulare ONRC + declarații pe proprie răspundere",
    "Taxe aferente (acolo unde se aplică) și dovada publicării, dacă e cazul",
  ]

  const pasi = [
    { title: "Stabilește modificarea", description: "Clarifică exact ce se schimbă (sediu, CAEN, asociați, administratori etc.)" },
    { title: "Redactează documentele", description: "Hotărâri/decizii, acte actualizate, declarații; verifică dacă sunt necesare avize." },
    { title: "Depune dosarul", description: "Online în portalul ONRC (semnătură electronică) sau la ghișeu. Urmărește rezoluția." },
    { title: "Actualizează la fiscal", description: "După caz, notificări în vectorul fiscal/ANAF, bănci, parteneri, contracte și licențe." },
  ]

  const faq = [
    { q: "Se pot face modificările 100% online?", a: "Da, majoritatea se pot depune online în RECOM (cu semnătură electronică). Pentru cazuri particulare, ONRC poate solicita clarificări." },
    { q: "Trebuie schimbat și actul constitutiv?", a: "Da, pentru modificări de denumire, sediu, obiect, asociați/administratori se actualizează actul constitutiv." },
    { q: "Cât durează?", a: "1–5 zile lucrătoare, în funcție de tipul modificării și de completitudinea dosarului." },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD (idempotent, fără dubluri) */}
      <JsonLd data={[webPageLd, breadcrumbLd, articleLd, imageLd]} />

      <Navbar />

      {/* HERO */}
      <section
        className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />
        <div className="page-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
              Modificări ONRC 2026 – Ghid complet
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-sans leading-relaxed">
              Schimbare sediu, denumire, CAEN, administratori, asociați sau puncte de lucru. Pașii legali și actele
              necesare.
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-sm font-sans flex-wrap" aria-label="breadcrumb">
            <Link to="/" className="text-gray-600 hover:text-[#3eb89a]">Acasă</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <Link to="/resurse" className="text-gray-600 hover:text-[#3eb89a]">Resurse</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <span className="text-[#0a2540] font-semibold">Modificări ONRC 2026</span>
          </nav>
        </div>
      </section>


      <section className="py-8 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <picture>
            <source srcSet="/images/modificari-onrc-2026.webp" type="image/webp" />
            <img
              src="/images/modificari-onrc-2026.jpg"
              alt="Modificări ONRC 2026 – schimbare sediu, CAEN, administratori, asociați, denumire"
              width="1200"
              height="675"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="w-full h-auto rounded-xl border border-gray-200 shadow-sm"
            />
          </picture>
        </div>
      </section>

      {/* LISTE MODIFICĂRI + ACTE */}
      <section className="py-12 md:py-16 bg-white">
        <div className="page-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modificari.map((m, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#0a2540] mb-3 font-serif">{m.title}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mt-12 mb-6 font-serif">Acte uzuale</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {acte.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PAȘI + NOTĂ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="page-container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-12 font-serif">Pașii procedurali</h2>
          <div className="space-y-6">
            {pasi.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0a2540] mb-2 font-serif">{p.title}</h3>
                <p className="text-gray-700">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-gray-700 font-sans leading-relaxed">
              <strong>Notă:</strong> modificările pot genera obligații la ANAF (actualizarea vectorului fiscal), bănci,
              parteneri sau licențe. Verifică întotdeauna impactul secundar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b]">
        <div className="page-container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
              Ai nevoie să faci o modificare ONRC?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-sans">
              Îți pregătim documentele și depunem online dosarul pentru soluționare rapidă.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-sans"
            >
              Cere ofertă
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
