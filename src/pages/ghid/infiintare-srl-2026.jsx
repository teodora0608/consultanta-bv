// src/pages/ghid/infiintare-srl-2026.jsx
"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRightIcon,
  ChevronRightIcon,
  AlertCircleIcon,
} from "../../icons"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

// ✅ SEO helpers
import { setMetaTags } from "../../seo/meta"
import JsonLd from "../../components/JsonLd"

export default function GhidInfiintareSRL2026() {
  // ─────────────── SEO VARS ───────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/ghid/infiintare-srl-2026"
  const canonical = `${origin}${path}`

  const title =
    "Acte necesare pentru înființare SRL în 2026 – Ghid complet | ConsultantaBV"
  const description =
    "Ghid complet 2026 pentru înființarea unui SRL: pași ONRC, acte necesare, costuri, termene, condiții legale, CAEN, sediu social, UBO. Totul explicat clar, pas cu pas."
  const ogImage = `${origin}/images/ghiduri/infiintare-srl-2026.webp`

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
      { "@type": "ListItem", position: 3, name: "Înființare SRL 2026", item: canonical },
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
    headline: "Acte necesare pentru înființarea unui SRL în 2026 – Ghid complet",
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
    articleSection: ["Înființare SRL", "Acte necesare", "ONRC", "Sediu social", "UBO", "CAEN"],
  }

  const imageLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: ogImage,
    representativeOfPage: true,
  }

  // ─────────────── Conținut ───────────────
  const acte = [
    {
      title: "Rezervare denumire firmă",
      description:
        "Se face online în portalul ONRC (RECOM) sau la ghișeu. Valabilă 3 luni. Poți propune mai multe variante de denumire.",
    },
    {
      title: "Act constitutiv SRL",
      description:
        "Documentul de bază al societății. Include asociații, administratori, capital social, obiectul principal CAEN, modul de funcționare. Se poate redacta în formă simplă (sub semnătură privată).",
    },
    {
      title: "Dovada sediului social",
      description:
        "Contract de comodat/chirie sau titlu de proprietate + acordul proprietarului. Pentru „sediu fără activitate” nu mai este nevoie, de regulă, de acordul vecinilor/Asociației.*",
    },
    {
      title: "Declarații pe propria răspundere",
      description:
        "Declarațiile-tip privind îndeplinirea condițiilor legale pentru desfășurarea activităților (Model 1/Model 2) + declarație privind beneficiarul real (UBO).",
    },
    {
      title: "Specimen de semnătură",
      description:
        "NU se mai solicită separat la ONRC. Semnătura se află pe documentele depuse; dacă depui online ai nevoie de semnătură electronică calificată.",
    },
    {
      title: "Alte avize (dacă e cazul)",
      description:
        "Pentru activități reglementate (ex. mediu, sanitar, transport) pot fi necesare avize/autorizații suplimentare.",
    },
  ]

  const pasi = [
    {
      title: "Alege denumirea și codurile CAEN",
      description:
        "Rezervă denumirea și stabilește obiectul principal de activitate (CAEN) + secundare. Alege corect CAEN-ul pentru facturare și licențe.",
    },
    {
      title: "Stabilește sediul social",
      description:
        "Poți opta pentru găzduire sediu social, sediu la domiciliu sau spațiu închiriat. Pentru „fără activitate la sediu” procedura este mai simplă.",
    },
    {
      title: "Redactează actul constitutiv",
      description:
        "Include asociații, administratori, capitalul social (de la 1 leu), părțile sociale, modul de administrare, durata, etc.",
    },
    {
      title: "Depune dosarul la ONRC",
      description:
        "Online în portalul RECOM (semnătură electronică) sau fizic la ghișeu. ONRC solicită cazierul fiscal automat, nu îl mai aduci tu.",
    },
    {
      title: "Obține certificatul și CUI",
      description:
        "După aprobare primești CUI, certificatul de înregistrare și certificatul constatator pentru punctul de lucru/sediu.",
    },
    {
      title: "Pași post-înființare",
      description:
        "Deschidere cont bancar, vărsare capital (poate fi după înmatriculare), opțional înregistrare TVA, registru UBO dacă e cazul, semnare contracte, facturare.",
    },
  ]

  const costuri = [
    {
      title: "Taxe ONRC",
      description:
        "Taxele de înmatriculare pentru SRL sunt 0 lei (conform modificărilor legislative în vigoare). Poate exista cost de publicare în BPI pentru unele operațiuni conexe.",
    },
    {
      title: "Capital social",
      description:
        "De la 1 leu (poți vărsa ulterior în termen legal). Multe bănci permit deschiderea contului după obținerea CUI.",
    },
    {
      title: "Servicii profesionale",
      description:
        "Opțional: redactare dosar/consultant, găzduire sediu social, avizier, semnătură electronică – tarife variabile.",
    },
    {
      title: "Termen ONRC",
      description:
        "De regulă 1–3 zile lucrătoare de la depunerea completă a documentelor (online de obicei mai rapid).",
    },
  ]

  const faq = [
    {
      q: "Care este capitalul social minim pentru un SRL în 2026?",
      a: "Minim 1 leu. Poți vărsa capitalul social după înmatriculare (termenul este prevăzut în actul constitutiv).",
    },
    {
      q: "Am nevoie de acordul vecinilor pentru sediu social?",
      a: "Nu, dacă declari „fără activitate la sediu”. Pentru activitate efectivă la sediu, pot exista cerințe suplimentare în funcție de imobil/activitate.",
    },
    {
      q: "Se mai cere specimenul de semnătură la ONRC?",
      a: "Nu. Dacă depui online ai nevoie de semnătură electronică calificată pentru documentele încărcate.",
    },
    {
      q: "Când depun declarația Beneficiar Real (UBO)?",
      a: "UBO se depune la înmatriculare sau în termenul legal după înființare. Nu mai este necesară anual, doar la modificări.",
    },
    {
      q: "Pot să mă înregistrez direct în scopuri de TVA?",
      a: "Da, dar este o procedură separată (formularul 700/089, documente justificative). Discutăm și îți spunem dacă e necesar în cazul tău.",
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
              Înființare SRL în 2026 – Acte, pași, costuri
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-sans leading-relaxed">
              Ghid complet pentru deschiderea unui SRL: ce documente îți trebuie, cum depui dosarul la ONRC, cât costă
              și cât durează. Totul explicat clar, pas cu pas.
            </p>
          </div>
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
            <span className="text-[#0a2540] font-semibold">Înființare SRL 2026</span>
          </nav>
        </div>
      </section>

      {/* COVER (picture + source) din /public/images/ghiduri */}
      <section className="py-8 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <picture>
            <source srcSet="/images/ghiduri/infiintare-srl-2026.webp" type="image/webp" />
            <img
              src="/images/ghiduri/infiintare-srl-2026.jpg"
              alt="Înființare SRL 2026 – acte necesare, pași ONRC, costuri și termene"
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

      {/* NOTE */}
      <section className="py-12 md:py-16 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8 flex items-start gap-3">
            <AlertCircleIcon className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-gray-700 font-sans leading-relaxed">
              <strong>Important:</strong> în 2026, înmatricularea unui SRL se poate face integral online în portalul
              ONRC (RECOM), cu semnătură electronică. Taxele de înmatriculare sunt 0 lei. Capital social: minim 1 leu.
            </p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed font-sans mb-6">
            Alegerea corectă a codului CAEN, stabilirea sediului social și redactarea actului constitutiv sunt esențiale
            pentru o pornire fără complicații. Mai jos ai lista de acte necesare și pașii exacți.
          </p>
        </div>
      </section>

      {/* ACTE NECESARE */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="page-container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-12 font-serif">Acte necesare SRL 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {acte.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0a2540] mb-3 font-serif">{item.title}</h3>
                <p className="text-gray-700 font-sans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            * Cerințele privind acordurile din condominiu pot varia în funcție de regimul imobilului și de activitatea
            declarată.
          </p>
        </div>
      </section>

      {/* PAȘI ONRC */}
      <section className="py-16 md:py-20 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-12 font-serif">
            Pași pentru înființarea SRL
          </h2>
          <div className="space-y-6">
            {pasi.map((pas, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#3eb89a] text-white font-bold flex items-center justify-center flex-shrink-0 font-serif">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2 font-serif">{pas.title}</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">{pas.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COSTURI & TERMENE */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="page-container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-12 font-serif">Costuri & termene 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {costuri.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0a2540] mb-3 font-serif">{item.title}</h3>
                <p className="text-gray-700 font-sans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-12 font-serif">Întrebări frecvente</h2>
          <div className="space-y-6">
            {faq.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-[#0a2540] mb-3 font-serif">{item.q}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{item.a}</p>
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
              Vrei să deschizi un SRL în 2026? Îți pregătim noi toate actele.
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-sans">
              Redactăm dosarul, depunem la ONRC și îți predăm firma în 1–3 zile lucrătoare.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-sans"
            >
              Solicită ofertă
              <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
