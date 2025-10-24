// src/pages/resurse-page.jsx
"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"

import { ClockIcon as Clock, ArrowRightIcon as ArrowRight, BookOpenIcon as BookOpen } from "../icons"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

// ✅ SEO
import { setMetaTags } from "../seo/meta"
import JsonLd from "../components/JsonLd"

export default function ResursePage() {
  // ─────────────── SEO VARS ───────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/resurse"
  const canonical = `${origin}${path}`

  const title = "Resurse și Ghiduri Juridice | ConsultantaBV"
  const description =
    "Ghiduri complete 2026: acte pentru înființare SRL, SRL vs PFA 2026, închidere firmă, modificări ONRC, insolvență și modificare sediu social. Explicat clar, pas cu pas."
  const ogImage = `${origin}/images/inchidere-firma-2026.jpg`

  // ─────────────── META (idempotent) ───────────────
  useEffect(() => {
    setMetaTags({
      title,
      description,
      canonical,
      image: ogImage,
      siteName: "ConsultantaBV",
      ogType: "website", // listă/colectie
      locale: "ro_RO",
    })
  }, [title, description, canonical, ogImage])

  // ─────────────── Date pentru listă ───────────────
  const guides = [
    {
      title: "Acte necesare pentru înființarea unui SRL în 2026 – Ghid complet",
      description:
        "Pașii legali, actele obligatorii, costurile și durata pentru înființarea unui SRL în 2026. Checklist descărcabil și greșeli frecvente.",
      readTime: "8 min",
      slug: "/ghid/infiintare-srl-2026",
    },
    {
      title: "SRL sau PFA în 2026 – Care formă juridică ți se potrivește?",
      description:
        "Comparație 2026: impozite, contribuții, costuri, răspundere. Când alegi SRL și când alegi PFA, pe exemple reale.",
      readTime: "10 min",
      slug: "/ghid/srl-vs-pfa-2026",
    },
    {
      title: "Cum închizi o firmă în 2026 – Procedură pas cu pas",
      description:
        "Lichidare voluntară 2026: etape la ONRC, documente, termene, costuri și ce verifică ANAF. Evită blocajele.",
      readTime: "7 min",
      slug: "/ghid/inchidere-firma-2026",
    },
    {
      title: "Modificări ONRC 2026 – Ghid complet",
      description:
        "Cum faci schimbări la firmă în 2026: sediu social, obiecte CAEN, administratori, asociați, denumire. Pași, taxe, modele.",
      readTime: "6 min",
      slug: "/ghid/modificari-onrc-2026",
    },
    {
      title: "Ce este insolvența firmei în 2026 și când e recomandată",
      description:
        "Explicat simplu: insolvență vs. restructurare vs. faliment în 2026. Când se recomandă și ce protecții ai legal.",
      readTime: "8 min",
      slug: "/ghid/insolventa-firma-2026",
    },
    {
      title: "Modificare sediu social 2026 – Pași, acte, costuri",
      description:
        "Ghid 2026 pentru schimbarea sediului social: cu sau fără activitate, în aceeași localitate sau alt județ. Documente și taxe.",
      readTime: "6 min",
      slug: "/ghid/modificare-sediu-social-2026",
    },
  ]

  // ─────────────── JSON-LD (fără dubluri; doar referințe prin @id) ───────────────
  const orgId = `${origin}/#organization`
  const webSiteId = `${origin}/#website`

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: origin },
      { "@type": "ListItem", position: 2, name: "Resurse", item: canonical },
    ],
  }

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    isPartOf: { "@id": webSiteId },
    name: title,
    description,
    primaryImageOfPage: ogImage,
    inLanguage: "ro-RO",
  }

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ghiduri juridice 2026",
    itemListElement: guides.map((g, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Article",
        "@id": `${origin}${g.slug}#article`,
        url: `${origin}${g.slug}`,
        name: g.title,
        description: g.description,
        inLanguage: "ro-RO",
        isPartOf: { "@id": webSiteId }, // referință, nu WebSite nou
        publisher: { "@id": orgId },   // referință la Organization-ul de pe homepage
      },
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD idempotent */}
      <JsonLd data={[webPageLd, breadcrumbLd, itemListLd]} />

      <Navbar />

      {/* Hero */}
      <section
        className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden"
        aria-labelledby="resurse-hero-title"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />
        <div className="page-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <BookOpen className="w-16 h-16 text-[#3eb89a] mb-6" aria-hidden="true" />
            <h1
              id="resurse-hero-title"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight"
            >
              Resurse și Ghiduri Juridice
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-sans max-w-3xl leading-relaxed">
              Ghiduri actualizate pentru 2026: înființare SRL, SRL vs PFA, închidere firmă, modificări ONRC,
              insolvență și modificare sediu social — explicate clar, pas cu pas.
            </p>
          </div>
        </div>
      </section>

      {/* Grid ghiduri */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="page-container max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Lista ghidurilor disponibile"
          >
            {guides.map((guide) => (
              <article
                key={guide.slug}
                role="listitem"
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#3eb89a]/30"
              >
                <Link
                  to={guide.slug}
                  className="block focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:ring-offset-2 focus:ring-offset-white"
                  aria-label={`${guide.title} – deschide ghidul`}
                  data-ga="view_content"
                  data-ga-type="guide_card"
                  data-ga-section="resurse"
                  data-ga-label={guide.title}
                >
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-[#0a2540] mb-4 font-serif group-hover:text-[#3eb89a] transition-colors leading-tight">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 mb-6 font-sans leading-relaxed">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        <span>Timp de citire: {guide.readTime}</span>
                      </div>
                      <ArrowRight
                        className="w-5 h-5 text-[#3eb89a] group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b]">
        <div className="page-container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">Ai nevoie de ajutor?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-sans">
              Spune-ne pe scurt situația ta și îți răspundem rapid cu pașii potriviți pentru 2026.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-sans"
              data-ga="generate_lead"
              data-ga-type="CTA"
              data-ga-section="resurse"
              data-ga-label="Cere ofertă"
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
