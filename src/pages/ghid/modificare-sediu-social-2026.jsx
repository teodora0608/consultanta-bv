// src/pages/ghid/modificare-sediu-social-2026.jsx
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

export default function GhidModificareSediu2026() {
  // ─────────────── SEO VARS ───────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/ghid/modificare-sediu-social-2026"
  const canonical = `${origin}${path}`

  const title = "Modificare sediu social 2026 – Pași, acte și costuri | ConsultantaBV"
  const description =
    "Ghid 2026 pentru schimbarea sediului social: în aceeași localitate sau în alt județ, cu/fără activitate la sediu. Acte necesare, pași ONRC și efecte fiscale."
  const ogImage = `${origin}/images/ghiduri/modificare-sediu-social-2026.webp`

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
      { "@type": "ListItem", position: 3, name: "Modificare sediu social 2026", item: canonical },
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
    headline: "Modificare sediu social 2026 – Pași, acte și costuri",
    description,
    mainEntityOfPage: canonical,
    image: ogImage,
    author: { "@type": "Organization", name: "ConsultantaBV", url: origin },
    publisher: {
      "@type": "Organization",
      name: "ConsultantaBV",
      url: origin,
      logo: { "@type": "ImageObject", url: `${origin}/images//public/images/logo.svg` },
    },
    datePublished: "2026-01-01",
    articleSection: ["Sediu social", "ONRC", "Acte necesare", "Fiscal"],
  }

  const imageLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: ogImage,
    representativeOfPage: true,
  }

  // ─────────────── Conținut ───────────────
  const tipuri = [
    {
      title: "În aceeași localitate",
      description: "Actualizare la ONRC cu dovada spațiului; se emite certificat constatator actualizat.",
    },
    {
      title: "În altă localitate/județ",
      description:
        "Se radiază sediul vechi și se înregistrează cel nou. Pot exista pași suplimentari și notificări fiscale.",
    },
    {
      title: "Fără activitate la sediu",
      description:
        "Regim simplificat pentru apartamente/condominii. În general nu se cere acordul vecinilor, dar pot exista excepții.",
    },
    {
      title: "Cu activitate la sediu",
      description: "Pot fi necesare avize suplimentare (ex. sănătate, mediu) în funcție de CAEN și tipul imobilului.",
    },
  ]

  const acte = [
    "Contract de comodat/chirie sau titlu de proprietate + acord proprietar",
    "Extras de carte funciară (după caz) – cerințe locale pot varia",
    "Act constitutiv actualizat (reflectă noul sediu)",
    "Hotărâre AGA/Decizie asociat unic privind schimbarea sediului",
    "Formulare ONRC + declarații pe proprie răspundere",
  ]

  const pasi = [
    "Stabilește adresa noului sediu și regimul (cu/fără activitate)",
    "Redactează hotărârea/decizia și actualizează actul constitutiv",
    "Pregătește dovezile spațiului (contract, acord, extras CF după caz)",
    "Depune dosarul online/fizic la ONRC și obține noul certificat",
    "Actualizează la ANAF vectorul fiscal + notifică partenerii/băncile",
  ]

  const faq = [
    {
      q: "Am nevoie de acordul vecinilor?",
      a: 'În general, nu pentru „fără activitate la sediu”. Pentru activitate efectivă, verifică regulile condominiului și avizele cerute.',
    },
    { q: "Se poate face online?", a: "Da, prin portalul ONRC (RECOM), cu semnătură electronică." },
    {
      q: "Ce se întâmplă cu punctele de lucru?",
      a: "Dacă îți schimbi sediul în alt județ, verifică actualizarea/închiderea punctelor de lucru și notificările fiscale aferente.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD (idempotent, fără dubluri) */}
      <JsonLd data={[webPageLd, breadcrumbLd, articleLd, imageLd]} />

      <Navbar />

      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />
        <div className="page-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
              Modificare sediu social 2026 – pași, acte și costuri
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-sans leading-relaxed">
              Tot ce trebuie să știi pentru schimbarea sediului: documente, depunere la ONRC, efecte fiscale și
              notificări ulterioare.
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
            <span className="text-[#0a2540] font-semibold">Modificare sediu social 2026</span>
          </nav>
        </div>
      </section>

      {/* COVER (picture + source) din /public/images/ghiduri */}
      <section className="py-8 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <picture>
            <source srcSet="/images/ghiduri/modificare-sediu-social-2026.webp" type="image/webp" />
            <img
              src="/images/ghiduri/modificare-sediu-social-2026.jpg"
              alt="Modificare sediu social 2026 – pași, acte necesare și costuri pentru schimbare sediu firmă"
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

      {/* TIPURI + ACTE */}
      <section className="py-12 md:py-16 bg-white">
        <div className="page-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tipuri.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#0a2540] mb-3 font-serif">{t.title}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mt-12 mb-6 font-serif">Acte necesare</h2>
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
          <h2 className="text-3xl md:py-0 md:text-4xl font-bold text-[#0a2540] mb-12 font-serif">Pașii procedurii</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            {pasi.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-gray-700 font-sans leading-relaxed">
              <strong>Notă:</strong> pentru „cu activitate la sediu” pot fi cerute avize/autorizații în funcție de CAEN
              și caracteristicile spațiului.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-6 font-serif">
              Vrei să schimbi sediul social în 2026?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-sans">
              Îți pregătim rapid dosarul și depunem online. Primești documentele actualizate de la ONRC.
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
