"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronRight, AlertCircle } from "lucide-react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function GhidModificariONRC2026() {
  useEffect(() => {
    document.title = "Modificări ONRC 2026 – Ghid complet | ConsultantaBV"
    const metaDescription =
      "Ghid 2026 pentru modificări la ONRC: schimbare sediu social, administratori, asociați, denumire, obiect CAEN, puncte de lucru. Pași, documente, termene."

    // helpers
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

    // description
    let tag = document.querySelector("meta[name='description']")
    if (!tag) {
      tag = document.createElement("meta")
      tag.setAttribute("name", "description")
      document.head.appendChild(tag)
    }
    tag.setAttribute("content", metaDescription)

    // ✅ OG/Twitter + canonical
    const ogUrl = "https://consultantabv.ro/ghid/modificari-onrc-2026"
    const ogTitle = "Modificări ONRC 2026 – Ghid complet"
    const ogImage = "https://consultantabv.ro/images/ghiduri/modificari-onrc-2026.jpg" // ✅ din public/images/ghiduri/

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
        { "@type": "ListItem", position: 3, name: "Modificări ONRC 2026", item: ogUrl },
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
      articleSection: ["ONRC", "Sediu social", "CAEN", "Asociați", "Administratori", "Puncte de lucru"],
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
      <Navbar />

      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden">
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

      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-sm font-sans flex-wrap">
            <Link to="/" className="text-gray-600 hover:text-[#3eb89a]">Acasă</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/resurse" className="text-gray-600 hover:text-[#3eb89a]">Resurse</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#0a2540] font-semibold">Modificări ONRC 2026</span>
          </nav>
        </div>
      </section>

      {/* ✅ COVER din public/images/ghiduri/ */}
      <section className="py-8 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <img
            src="/images/ghiduri/modificari-onrc-2026.jpg" // ✅ fără /assets, fără /public
            alt="Modificări ONRC 2026 – schimbare sediu, CAEN, administratori, asociați, denumire"
            className="cover-image"
            width="1200"
            height="675"
            loading="lazy"
            decoding="async"
            fetchpPiority="low"
          />
        </div>
      </section>

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
            <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 font-sans leading-relaxed">
              <strong>Notă:</strong> modificările pot genera obligații la ANAF (actualizarea vectorului fiscal), bănci,
              parteneri sau licențe. Verifică întotdeauna impactul secundar.
            </p>
          </div>
        </div>
      </section>

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
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
