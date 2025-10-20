// src/pages/ghid/insolventa-firma-2026.jsx
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

export default function GhidInsolventa2026() {
  // ─────────────── SEO VARS ───────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/ghid/insolventa-firma-2026"
  const canonical = `${origin}${path}`

  const title = "Insolvența firmei în 2026 – Ce este și când e recomandată | ConsultantaBV"
  const description =
    "Explicat simplu: ce este insolvența în 2026, diferențe față de restructurare/faliment, condiții de deschidere, pași esențiali și efecte juridice."
  const ogImage = `${origin}/images/ghiduri/insolventa-firma-2026.jpg`

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
      { "@type": "ListItem", position: 3, name: "Insolvență 2026", item: canonical },
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
    headline: "Insolvența firmei în 2026 – Ce este și când e recomandată",
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
    articleSection: ["Insolvență", "Restructurare", "Faliment", "Creditori", "Protecție juridică"],
  }

  const imageLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: ogImage,
    representativeOfPage: true,
  }

  // ─────────────── Conținut ───────────────
  const concepte = [
    { title: "Insolvență vs. dificultate", description: "Insolvență = imposibilitate de plată a datoriilor exigibile cu fondurile disponibile; dificultate = probleme temporare de lichiditate, dar cu perspective de redresare." },
    { title: "Deschiderea procedurii", description: "Poate fi cerută de debitor sau creditori. Există prag legal al creanței și termene procedurale. Instanța admite/respinge cererea." },
    { title: "Efecte imediate", description: "Suspendarea executărilor silite, numirea administratorului/lichidatorului judiciar, supravegherea operațiunilor." },
    { title: "Reorganizare vs. faliment", description: "Reorganizarea presupune un plan aprobat de creditori; falimentul duce la lichidarea activelor și radiere." },
  ]

  const cand = [
    "Datorii exigibile semnificative și lipsa resurselor pentru plată",
    "Executări silite multiple și blocaje operaționale",
    "Nevoia de protecție juridică pentru a implementa un plan de redresare",
    "Eșecul altor soluții: eșalonare, restructurare, refinanțare",
  ]

  const pasi = [
    "Analiză juridico-financiară a situației societății",
    "Întocmirea cererii și documentelor justificative",
    "Depunerea la instanță și judecarea deschiderii procedurii",
    "Derularea procedurii sub supraveghere (administrator judiciar)",
    "Plan de reorganizare sau trecere în faliment",
  ]

  const faq = [
    { q: "Insolvența șterge datoriile?", a: "Nu automat. Reorganizarea poate reduce/reșalona creanțe prin plan aprobat de creditori; falimentul lichidează patrimoniul pentru acoperirea datoriilor." },
    { q: "Pot continua activitatea în insolvență?", a: "Da, în reorganizare activitatea poate continua controlat; în faliment se merge spre lichidare." },
    { q: "Ce prag de datorie există?", a: "Există prag legal pentru deschiderea procedurii (valoare minimă a creanței) – verifică forma în vigoare la momentul depunerii." },
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
              Insolvența firmei în 2026 – ce este și când e recomandată
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-sans leading-relaxed">
              Diferențe față de dificultate și faliment, efecte juridice și pașii procedurii. Ghid pentru antreprenori.
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
            <span className="text-[#0a2540] font-semibold">Insolvență 2026</span>
          </nav>
        </div>
      </section>

      {/* COVER (picture + source) din /public/images/ghiduri */}
      <section className="py-8 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <picture>
            <source srcSet="/images/ghiduri/insolventa-firma-2026.webp" type="image/webp" />
            <img
              src="/images/ghiduri/insolventa-firma-2026.jpg"
              alt="Insolvență firmă 2026 – ce este, când e recomandată și efecte juridice"
              className="w-full h-auto rounded-xl border border-gray-200 shadow-sm cover-image"
              width="1200"
              height="675"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </picture>
        </div>
      </section>

      {/* CONCEPTE + CÂND */}
      <section className="py-12 md:py-16 bg-white">
        <div className="page-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {concepte.map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#0a2540] mb-3 font-serif">{c.title}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mt-12 mb-6 font-serif">Când e recomandată</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {cand.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PAȘI + NOTĂ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="page-container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-12 font-serif">Pașii procedurii</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            {pasi.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ol>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-gray-700 font-sans leading-relaxed">
              <strong>Atenție:</strong> insolvența este o procedură judiciară complexă. Analiza prealabilă și
              documentația corectă sunt esențiale. Pragurile legale și termenele pot fi actualizate.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
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
              Ai nevoie de protecție juridică?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-sans">
              Analizăm opțiunile: restructurare, insolvență sau alte soluții. Recomandare clară pentru 2026.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-sans"
            >
              Vorbește cu un specialist
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
