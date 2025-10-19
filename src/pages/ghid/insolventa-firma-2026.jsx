"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronRight, AlertCircle } from "lucide-react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function GhidInsolventa2026() {
  useEffect(() => {
    document.title = "Insolvența firmei în 2026 – Ce este și când e recomandată | ConsultantaBV"
    const metaDescription =
      "Explicat simplu: ce este insolvența în 2026, diferențe față de restructurare/faliment, condiții de deschidere, pași esențiali și efecte juridice."

    // helper pt. meta/link
    const ensureMeta = (sel, attrs) => {
      let el = document.querySelector(sel)
      if (!el) {
        el = document.createElement("meta")
        document.head.appendChild(el)
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
    }
    const ensureLink = (rel, href) => {
      let el = document.querySelector(`link[rel='${rel}']`)
      if (!el) {
        el = document.createElement("link")
        el.setAttribute("rel", rel)
        document.head.appendChild(el)
      }
      el.setAttribute("href", href)
    }

    let tag = document.querySelector("meta[name='description']")
    if (!tag) {
      tag = document.createElement("meta")
      tag.setAttribute("name", "description")
      document.head.appendChild(tag)
    }
    tag.setAttribute("content", metaDescription)

    const ogUrl = "https://consultantabv.ro/ghid/insolventa-firma-2026"
    const ogTitle = "Insolvența firmei în 2026 – Ce este și când e recomandată"
    const ogImage = "https://consultantabv.ro/images/ghiduri/insolventa-firma-2026.jpg" // ✅ din public/images/ghiduri/

    // ✅ OG/Twitter corecte
    ensureMeta("meta[property='og:type']", { property: "og:type", content: "article" })
    ensureMeta("meta[property='og:title']", { property: "og:title", content: ogTitle })
    ensureMeta("meta[property='og:description']", { property: "og:description", content: metaDescription })
    ensureMeta("meta[property='og:url']", { property: "og:url", content: ogUrl })
    ensureMeta("meta[property='og:image']", { property: "og:image", content: ogImage })
    ensureMeta("meta[name='twitter:card']", { name: "twitter:card", content: "summary_large_image" })
    ensureMeta("meta[name='twitter:title']", { name: "twitter:title", content: ogTitle })
    ensureMeta("meta[name='twitter:description']", { name: "twitter:description", content: metaDescription })
    ensureMeta("meta[name='twitter:image']", { name: "twitter:image", content: ogImage })
    ensureLink("canonical", ogUrl)

    // JSON-LD
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://consultantabv.ro" },
        { "@type": "ListItem", position: 2, name: "Resurse", item: "https://consultantabv.ro/resurse" },
        { "@type": "ListItem", position: 3, name: "Insolvență 2026", item: ogUrl },
      ],
    }
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: ogTitle,
      description: metaDescription,
      author: { "@type": "Organization", name: "ConsultantaBV" },
      publisher: { "@type": "Organization", name: "ConsultantaBV" },
      datePublished: "2026-01-01",
      mainEntityOfPage: ogUrl,
      image: ogImage,
      articleSection: ["Insolvență", "Restructurare", "Faliment", "Creditori", "Protecție juridică"],
    }
    const imgSchema = {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      contentUrl: ogImage,
      representativeOfPage: true,
    }

    const s1 = document.createElement("script")
    s1.type = "application/ld+json"
    s1.text = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(s1)
    const s2 = document.createElement("script")
    s2.type = "application/ld+json"
    s2.text = JSON.stringify(articleSchema)
    document.head.appendChild(s2)
    const s3 = document.createElement("script")
    s3.type = "application/ld+json"
    s3.text = JSON.stringify(imgSchema)
    document.head.appendChild(s3)

    return () => {
      document.head.removeChild(s1)
      document.head.removeChild(s2)
      document.head.removeChild(s3)
    }
  }, [])

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
      <Navbar />

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

      {/* ✅ COVER din public/images/ghiduri/ */}
      <section className="py-8 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <img
            src="/images/ghiduri/insolventa-firma-2026.jpg"  // ✅ (fără /assets, fără /public)
            alt="Insolvență firmă 2026 – ce este, când e recomandată și efecte juridice"
            className="cover-image"
            width="1200"
            height="675"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </div>
      </section>

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

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="page-container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-12 font-serif">Pașii procedurii</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            {pasi.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ol>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700">
              <strong>Atenție:</strong> insolvența este o procedură judiciară complexă. Analiza prealabilă și
              documentația corectă sunt esențiale. Pragurile legale și termenele pot fi actualizate.
            </p>
          </div>
        </div>
      </section>

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
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
