// src/pages/despre-noi-page.jsx
"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FinalCTA from "../common/final-cta"
import JsonLd from "../components/JsonLd"
import { setMetaTags } from "../seo/meta"
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  ShieldIcon,
  ZapIcon,
  HeartIcon,
} from "../icons"

export default function DespreNoiPage() {
  // ─────────────── SEO VARS ───────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const canonical = `${origin}/despre-noi`

  const pageTitle = "Despre noi | Consultanță juridică online & Brașov – ConsultantaBV"
  const pageDescr =
    "Echipa ConsultantaBV oferă consultanță juridică pentru firme în Brașov și online, înființări SRL/PFA, modificări ONRC și închideri. Rapid, transparent, 100% online."
  const ogImage = `${origin}/images/hero-tablet.webp`

  // ─────────────── META (idempotent) ───────────────
  useEffect(() => {
    setMetaTags({
      title: pageTitle,
      description: pageDescr,
      canonical,
      image: ogImage,
      siteName: "ConsultantaBV",
      ogType: "website",
      locale: "ro_RO",
    })
  }, [pageTitle, pageDescr, canonical, ogImage])

  // ─────────────── JSON-LD (fără dubluri) ───────────────
  const orgId = `${origin}/#organization`
  const webSiteId = `${origin}/#website`

  const aboutPageLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    isPartOf: { "@id": webSiteId },
    name: pageTitle,
    description: pageDescr,
    primaryImageOfPage: ogImage,
    inLanguage: "ro-RO",
    // referim organizația existentă de pe homepage, nu creăm una nouă
    mainEntity: { "@id": orgId },
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: origin },
      { "@type": "ListItem", position: 2, name: "Despre noi", item: canonical },
    ],
  }

  // ─────────────── Content ───────────────
  const team = [
    {
      name: "Diana Milotin",
      role: "Specialist servicii juridice",
      description:
        "Ghidează clienții prin pași clari și se asigură că dosarele pentru ONRC sunt corecte din prima – atât online, cât și în Brașov.",
      image: "/images/diana.webp",
    },
    {
      name: "Teodora Croitoru",
      role: "Specialist servicii juridice",
      description:
        "Organizează documentele, urmărește termenele și comunică transparent stadiul fiecărei proceduri juridice.",
      image: "/images/teodora.webp",
    },
  ]

  const values = [
    { icon: ShieldIcon, title: "Securitate juridică", description: "Documente verificate și conforme cu legislația curentă." },
    { icon: ZapIcon, title: "Rapiditate", description: "Timp de răspuns < 24h și proceduri finalizate în cel mai scurt timp." },
    { icon: HeartIcon, title: "Transparență", description: "Explicăm simplu, fără jargon, și comunicăm clar costurile." },
    { icon: CheckCircle2Icon, title: "Profesionalism", description: "Experiență în proiecte locale (Brașov) și 100% online." },
  ]

  const steps = [
    { number: "1", title: "Completezi formularul", description: "Ne spui pe scurt ce ai nevoie (SRL, PFA, ONRC, închidere, consultanță)." },
    { number: "2", title: "Te contactăm în < 24h", description: "Primești analiza inițială + lista de documente, adaptate pentru Brașov sau online." },
    { number: "3", title: "Implementăm soluția", description: "Pregătim actele, depunem online la ONRC și te ținem la curent până la final." },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD idempotent */}
      <JsonLd data={[aboutPageLd, breadcrumbLd]} />

      <Navbar />

      {/* HERO */}
      <section
        className="py-16 md:py-20 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden"
        aria-labelledby="about-hero-title"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />
        <div className="page-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 id="about-hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
              Despre noi — consultanță juridică în Brașov și online
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 font-sans max-w-3xl leading-relaxed">
              Suntem ConsultantaBV: echipă specializată în <strong>înființări SRL/PFA</strong>, <strong>modificări ONRC</strong> și
              <strong> închideri de firmă</strong>. Lucrăm 100% online, iar pentru clienții din <strong>Brașov</strong> oferim și suport local, rapid și transparent.
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="py-4 bg-gray-50 border-b border-gray-200" aria-label="breadcrumb">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-sm font-sans">
            <Link to="/" className="text-gray-600 hover:text-[#3eb89a] flex items-center gap-1">
              Acasă <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <span className="text-[#0a2540] font-semibold">Despre noi</span>
          </nav>
        </div>
      </section>

      {/* MISIUNE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-6 font-serif">
                Misiunea noastră în Brașov și online
              </h2>
              <div className="space-y-4 text-gray-700 font-sans leading-relaxed">
                <p>
                  La <strong>ConsultantaBV</strong> simplificăm procedurile juridice pentru antreprenori și IMM-uri.
                  Oferim servicii complete de <strong>înființare SRL/PFA</strong>, <strong>modificări la ONRC</strong> și
                  <strong> închidere de firmă</strong>, cu livrare <strong>100% online</strong> sau cu prezență locală în <strong>Brașov</strong>.
                </p>
                <p>
                  Ne diferențiem prin <em>rapiditate</em>, <em>documente corecte din prima</em> și
                  <em> comunicare clară</em>. Indiferent dacă ești în Brașov sau în alt oraș, îți livrăm soluții eficiente,
                  fără drumuri inutile la ghișeu.
                </p>
                <p>
                  Ai nevoie de <strong>consultant juridic în Brașov</strong> sau vrei totul online?
                  Îți oferim aceeași calitate și aceeași trasabilitate a pașilor până la finalul procedurii.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/hero-tablet.webp"
                alt="Consultanță juridică pentru firme în Brașov și online – ConsultantaBV"
                className="rounded-2xl shadow-2xl w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALORI */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">Valorile noastre</h2>
            <div className="h-1 w-24 bg-[#3eb89a] mx-auto mt-3 rounded-full" />
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto font-sans leading-relaxed">
              Principii care aduc rezultate — fie că lucrăm online sau direct cu antreprenorii din Brașov.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-[#3eb89a]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#3eb89a]/10 flex items-center justify-center mb-4" aria-hidden="true">
                  <value.icon className="w-6 h-6 text-[#3eb89a]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-3 font-serif">{value.title}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECHIPA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b]">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-serif">Echipa noastră</h2>
            <p className="text-lg text-white/80 mt-6 max-w-3xl mx-auto font-sans leading-relaxed">
              Specialiști în servicii juridice pentru firme — cu proiecte livrate în Brașov și la nivel național, 100% online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            {team.map((member, i) => (
              <div key={i} className="group relative h-full">
                <div className="absolute -inset-[2px] bg-gradient-to-br from-[#3eb89a] via-[#0a2540] to-[#3eb89a] rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />
                <div className="relative bg-white rounded-2xl p-8 h-full flex flex-col items-center text-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-[1.01]">
                  <div className="mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} — ${member.role}`}
                      className="w-[120px] h-[120px] rounded-full object-cover shadow-md"
                      width="120"
                      height="120"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#0a2540] mb-1">{member.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-sans">{member.role}</p>
                  <p className="text-sm text-gray-200 md:text-gray-600 leading-relaxed font-sans text-white/90 md:text-inherit">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUM LUCRĂM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">Cum lucrăm</h2>
            <div className="h-1 w-24 bg-[#3eb89a] mx-auto mt-3 rounded-full" />
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto font-sans leading-relaxed">
              Proces simplu și previzibil — adaptat clienților din Brașov și celor care preferă 100% online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start relative max-w-5xl mx-auto">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#3eb89a] text-white font-bold flex items-center justify-center mb-4 mx-auto text-xl shadow-lg">
                  {step.number}
                </div>
                <h4 className="text-xl font-semibold text-[#0a2540] mb-2 font-serif">{step.title}</h4>
                <p className="text-base text-gray-600 leading-relaxed font-sans">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
