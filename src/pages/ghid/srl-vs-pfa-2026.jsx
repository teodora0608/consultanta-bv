// src/pages/ghid/srl-vs-pfa-2026.jsx
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

// ✅ SEO
import { setMetaTags } from "../../seo/meta"
import JsonLd from "../../components/JsonLd"

export default function GhidSRLvsPFA2026() {
  // ─────────────── SEO VARS ───────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/ghid/srl-vs-pfa-2026"
  const canonical = `${origin}${path}`

  const title =
    "SRL sau PFA în 2026 – Care ți se potrivește? Avantaje, costuri și obligații | ConsultantaBV"
  const description =
    "Comparație SRL vs PFA în 2026: avantaje, dezavantaje, costuri, taxe, contribuții, răspundere și când să alegi fiecare formă. Ghid actualizat, cu pași rapizi pentru înființare."
  const ogImage = `${origin}/images/ghiduri/srl-vs-pfa-2026.webp`

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
      { "@type": "ListItem", position: 3, name: "SRL vs PFA 2026", item: canonical },
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
    headline: "SRL vs PFA în 2026 – Care ți se potrivește?",
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
    articleSection: ["SRL", "PFA", "Taxe", "Contribuții", "Înființare", "Contabilitate"],
  }

  const imageLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: ogImage,
    representativeOfPage: true,
  }

  // ► AVANTAJE/DEZAVANTAJE
  const blocuri = [
    {
      title: "Când alegi SRL",
      bullets: [
        "Vrei răspundere limitată (protejezi patrimoniul personal).",
        "Ai clienți corporate / licitații / proiecte mari.",
        "Plănuiești angajați, investiții, creditare sau finanțare.",
        "Venituri în creștere și nevoie de optimizare fiscală pe termen mediu.",
      ],
    },
    {
      title: "Când alegi PFA",
      bullets: [
        "Activitate individuală, simplă, cu costuri administrative mici.",
        "Începi rapid: mai puține formalități, contabilitate mai simplă.",
        "Normă de venit/cheltuieli deductibile reale pot fi avantajoase la venituri moderate.",
        "Clienți preponderent B2C sau contracte de servicii pe persoană fizică.",
      ],
    },
  ]

  const costuriSRL = [
    {
      title: "Taxare (în linii mari)",
      description:
        "Regimul poate fi microîntreprindere (impozit pe venitul micro, dacă îndeplinești condițiile) sau impozit pe profit. Praguri și condiții se pot modifica – verifică legislația curentă ANAF.",
    },
    {
      title: "Contribuții",
      description:
        "Dacă ai salarii: CAS/CASS/Impozit salarii conform legislației. Dividendele au impozit și, peste anumite praguri, CASS. Verifică plafoanele în vigoare.",
    },
    {
      title: "Contabilitate",
      description:
        "Evidență contabilă în partidă dublă, bilanț anual, raportări periodice. Costuri contabile mai mari decât la PFA.",
    },
  ]

  const costuriPFA = [
    {
      title: "Impozit pe venit",
      description:
        "De regulă 10% la venitul net (sistem real) sau la norma de venit (unde e disponibilă).",
    },
    {
      title: "CAS / CASS",
      description:
        "Obligații în funcție de plafoane (ex.: 12/24 salarii minime pentru CAS; plafoane pentru CASS). Pragurile se actualizează anual – verifică nivelul 2026.",
    },
    {
      title: "Contabilitate",
      description:
        "Evidență în partidă simplă. Costuri mai mici. Poate fi necesară casă de marcat sau alte obligații, în funcție de activitate.",
    },
  ]

  const pasiSRL = [
    "Rezervare denumire + alegere CAEN.",
    "Sediu social (contract/comodat/găzduire).",
    "Act constitutiv și declarații (inclusiv UBO).",
    "Depunere online în portalul ONRC (RECOM) sau la ghișeu.",
    "CUI, certificat înmatriculare, cont bancar, opțional TVA.",
  ]

  const pasiPFA = [
    "Verifică cod CAEN și calificări/atestate (unde e cazul).",
    "Dovadă sediu profesional (acolo unde se cere).",
    "Formulare ONRC: înregistrare PFA (online/fizic).",
    "Înregistrări ANAF (după caz): vector fiscal, TVA, case de marcat etc.",
  ]

  const faq = [
    {
      q: "Din punct de vedere fiscal, ce e mai avantajos în 2026?",
      a: "Depinde de venituri, cheltuieli, tipul activității și planurile pe termen mediu. PFA poate fi avantajos la venituri moderate (normă/real), SRL devine preferabil când vrei răspundere limitată, clienți corporate sau creștere. Reglementările fiscale pot suferi modificări – verifică pragurile și condițiile în vigoare.",
    },
    {
      q: "Pot trece de la PFA la SRL ulterior?",
      a: "Da. Mulți antreprenori pornesc ca PFA și trec la SRL când cresc volumul contractelor sau când apar nevoi de echipă/finanțare.",
    },
    {
      q: "Am nevoie de TVA de la început?",
      a: "Nu neapărat. Există prag de înregistrare și criterii specifice (ex. parteneri UE, achiziții intracomunitare). Discutăm și alegem varianta potrivită.",
    },
    {
      q: "Ce aleg dacă lucrez cu o singură companie pe termen lung?",
      a: "Juridic și fiscal poate fi sensibil. Discutăm riscurile de recalificare. Uneori SRL cu contract de prestări servicii e mai sigur pe termen lung decât PFA.",
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
              SRL sau PFA în 2026 – Care ți se potrivește?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-sans leading-relaxed">
              Comparație completă: răspundere, taxe, contribuții, costuri și când e mai avantajos SRL sau PFA. Ghid
              actualizat și ușor de parcurs.
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-sm font-sans flex-wrap">
            <Link to="/" className="text-gray-600 hover:text-[#3eb89a]">Acasă</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <Link to="/resurse" className="text-gray-600 hover:text-[#3eb89a]">Resurse</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <span className="text-[#0a2540] font-semibold">SRL vs PFA 2026</span>
          </nav>
        </div>
      </section>

      {/* COVER (picture + source) */}
      <section className="py-8 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <picture>
            <source srcSet="/images/ghiduri/srl-vs-pfa-2026.webp" type="image/webp" />
            <img
              src="/images/ghiduri/srl-vs-pfa-2026.jpg"
              alt="Comparație SRL vs PFA 2026 – avantaje, costuri și când să alegi fiecare formă juridică"
              width="1200"
              height="675"
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-xl border border-gray-200 shadow-sm"
            />
          </picture>
        </div>
      </section>

      {/* NOTE */}
      <section className="py-12 md:py-16 bg-white">
        <div className="page-container max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-gray-700 font-sans leading-relaxed">
              <strong>Atenție:</strong> regulile fiscale (praguri micro, plafoane CAS/CASS, norme de venit, TVA) pot fi
              actualizate periodic. Informațiile de mai jos sunt orientative pentru 2026. Înainte de decizie, verifică
              ultimele reglementări ANAF/Ministerul Finanțelor.
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed font-sans mb-6">
            Alegerea formei juridice îți influențează fiscalitatea, riscul, costurile și modul de lucru cu clienții. Mai
            jos găsești comparația pe scurt, apoi detaliile utile pentru fiecare opțiune.
          </p>
        </div>
      </section>

      {/* COMPARAȚIE PE SCURT */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="page-container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-12 font-serif">
            Pe scurt: când SRL, când PFA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blocuri.map((b, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0a2540] mb-3 font-serif">{b.title}</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 font-sans">
                  {b.bullets.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROs & CONs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="page-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0a2540] mb-4 font-serif">Avantaje SRL</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 font-sans">
                {[
                  "Răspundere limitată la patrimoniul firmei.",
                  "Imagine comercială bună; ușor de lucrat cu companii mari.",
                  "Posibilitatea de a atrage asociați, investiții, credite, leasing.",
                  "Opțiuni fiscale: microîntreprindere/profit (în funcție de praguri și condiții legale).",
                ].map((t, i) => <li key={i}>{t}</li>)}
              </ul>
              <h4 className="text-xl font-bold text-[#0a2540] mt-6 mb-2 font-serif">Dezavantaje</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 font-sans">
                {[
                  "Formalități mai multe: înființare, raportări, registre.",
                  "Costuri contabile și administrative mai mari decât PFA.",
                  "Retragerea banilor către asociat se face cu reguli (dividende/salariu).",
                ].map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0a2540] mb-4 font-serif">Avantaje PFA</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 font-sans">
                {[
                  "Înființare rapidă, costuri administrative reduse.",
                  "Contabilitate simplificată; poți lucra în sistem real sau normă de venit (unde există).",
                  "Poți folosi veniturile direct, fără dividende.",
                ].map((t, i) => <li key={i}>{t}</li>)}
              </ul>
              <h4 className="text-xl font-bold text-[#0a2540] mt-6 mb-2 font-serif">Dezavantaje</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 font-sans">
                {[
                  "Răspundere nelimitată: răspunzi cu bunurile personale.",
                  "Contribuțiile CAS/CASS depind de plafoane și nivelul veniturilor.",
                  "Anumite companii preferă SRL la colaborări mari/pe termen lung.",
                ].map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COSTURI & OBLIGAȚII */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="page-container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-12 font-serif">Costuri & obligații 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-[#0a2540] mb-3 font-serif">SRL</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 font-sans">
                {costuriSRL.map((c, i) => (
                  <li key={i}><strong>{c.title}:</strong> {c.description}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-[#0a2540] mb-3 font-serif">PFA</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 font-sans">
                {costuriPFA.map((c, i) => (
                  <li key={i}><strong>{c.title}:</strong> {c.description}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Notă: pragurile micro, impozitele, plafoanele CAS/CASS, norma de venit, scutirile și regulile TVA pot fi
            modificate anual. Confirmă întotdeauna la data deciziei.
          </p>
        </div>
      </section>

      {/* PAȘI DE ÎNFIINȚARE (rapid) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="page-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0a2540] mb-4 font-serif">Pași rapizi – SRL</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700 font-sans">
                {pasiSRL.map((p, i) => <li key={i}>{p}</li>)}
              </ol>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0a2540] mb-4 font-serif">Pași rapizi – PFA</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700 font-sans">
                {pasiPFA.map((p, i) => <li key={i}>{p}</li>)}
              </ol>
            </div>
          </div>
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
              Nu ești sigur dacă să alegi SRL sau PFA?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-sans">
              Îți analizăm situația și îți recomandăm varianta optimă fiscal și juridic pentru 2026.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-sans"
            >
              Programează o discuție
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
