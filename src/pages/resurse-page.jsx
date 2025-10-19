"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Clock, ArrowRight, BookOpen } from "lucide-react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function ResursePage() {
  useEffect(() => {
    document.title = "Resurse și Ghiduri Juridice | ConsultantaBV"

    const metaDescription =
      "Ghiduri complete 2026: acte pentru înființare SRL, SRL vs PFA 2026, închidere firmă, modificări ONRC, insolvență și modificare sediu social. Explicat clar, pas cu pas."
    let tag = document.querySelector("meta[name='description']")
    if (!tag) {
      tag = document.createElement("meta")
      tag.setAttribute("name", "description")
      document.head.appendChild(tag)
    }
    tag.setAttribute("content", metaDescription)

    // JSON-LD: BreadcrumbList
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://consultantabv.ro" },
        { "@type": "ListItem", position: 2, name: "Resurse", item: "https://consultantabv.ro/resurse" }
      ]
    }

    // JSON-LD: ItemList cu cele 6 ghiduri
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Ghiduri juridice 2026",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: "https://consultantabv.ro/ghid/infiintare-srl-2026",
          name: "Acte necesare pentru înființarea unui SRL în 2026 – Ghid complet"
        },
        {
          "@type": "ListItem",
          position: 2,
          url: "https://consultantabv.ro/ghid/srl-vs-pfa-2026",
          name: "SRL sau PFA în 2026 – Care formă juridică ți se potrivește?"
        },
        {
          "@type": "ListItem",
          position: 3,
          url: "https://consultantabv.ro/ghid/inchidere-firma-2026",
          name: "Cum închizi o firmă în 2026 – Procedură pas cu pas"
        },
        {
          "@type": "ListItem",
          position: 4,
          url: "https://consultantabv.ro/ghid/modificari-onrc-2026",
          name: "Modificări ONRC 2026 – Ghid complet"
        },
        {
          "@type": "ListItem",
          position: 5,
          url: "https://consultantabv.ro/ghid/insolventa-firma-2026",
          name: "Ce este insolvența firmei în 2026 și când e recomandată"
        },
        {
          "@type": "ListItem",
          position: 6,
          url: "https://consultantabv.ro/ghid/modificare-sediu-social-2026",
          name: "Modificare sediu social 2026 – Pași, acte, costuri"
        }
      ]
    }

    const s1 = document.createElement("script")
    s1.type = "application/ld+json"
    s1.text = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(s1)

    const s2 = document.createElement("script")
    s2.type = "application/ld+json"
    s2.text = JSON.stringify(itemListSchema)
    document.head.appendChild(s2)

    return () => {
      document.head.removeChild(s1)
      document.head.removeChild(s2)
    }
  }, [])

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

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />
        <div className="page-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <BookOpen className="w-16 h-16 text-[#3eb89a] mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
              Resurse și Ghiduri Juridice
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-sans max-w-3xl leading-relaxed">
              Ghiduri actualizate pentru 2026: înființare SRL, SRL vs PFA, închidere firmă, modificări ONRC,
              insolvență și modificare sediu social — explicate clar, pas cu pas.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="page-container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, idx) => (
              <Link
                key={idx}
                to={guide.slug}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#3eb89a]/30"
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#0a2540] mb-4 font-serif group-hover:text-[#3eb89a] transition-colors leading-tight">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-sans leading-relaxed">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Timp de citire: {guide.readTime}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#3eb89a] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="page-container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-6 font-serif">
              Ai nevoie de consultanță personalizată?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-sans">
              Spune-ne pe scurt situația ta și îți răspundem rapid cu pașii potriviți pentru 2026.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-sans"
            >
              Solicită ofertă
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
