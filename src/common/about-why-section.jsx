// src/common/about-why-section.jsx
"use client"

import { ArrowRightIcon } from "../icons"
import { Link } from "react-router-dom"
import JsonLd from "../components/JsonLd"

export default function AboutWhySection() {
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const canonical = `${origin}/#despre`

  const team = [
    {
      name: "Diana Milotin",
      role: "Specialist servicii juridice",
      description:
        "Oferă sprijin pas cu pas și explică procedurile pe înțelesul fiecărui client. Se asigură că fiecare etapă este clară și ușor de urmat.",
      image: "/images/diana.webp",
      url: `${origin}/#diana-milotin`,
    },
    {
      name: "Teodora Croitoru",
      role: "Specialist servicii juridice",
      description:
        "Organizează și verifică fiecare detaliu pentru ca procesul să decurgă simplu și fără întârzieri. Menține o comunicare clară și eficientă.",
      image: "/images/teodora.webp",
      url: `${origin}/#teodora-croitoru`,
    },
  ]

  const steps = [
    { number: "1", title: "Completează formularul", description: "Simplu și rapid — durează doar câteva minute." },
    { number: "2", title: "Te contactăm în < 24 ore", description: "Primești analiza inițială și lista documentelor necesare." },
    { number: "3", title: "Primești soluția ta juridică", description: "Ghidare clară până la finalizarea procedurilor." },
  ]

  // ---------- JSON-LD (idempotent) ----------
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ConsultantaBV",
    url: origin,
    logo: `${origin}/images/logo.svg`, // ✅ fix
    sameAs: [
      "https://www.facebook.com/consultantabv",
      "https://www.linkedin.com/company/consultantabv",
    ],
    employee: team.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      description: m.description,
      image: `${origin}${m.image}`,
      url: m.url,
      worksFor: { "@type": "Organization", name: "ConsultantaBV" },
    })),
  }

  const teamItemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Echipa ConsultantaBV",
    itemListElement: team.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        description: m.description,
        image: `${origin}${m.image}`,
        url: m.url,
      },
    })),
  }

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cum lucrăm la ConsultantaBV",
    description:
      "Etapele prin care clienții obțin soluția juridică: completare formular, contact în < 24h și livrarea soluției.",
    url: canonical,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  }

  return (
    <section
      id="despre"
      aria-labelledby="about-heading"
      className="py-16 md:py-20 bg-[radial-gradient(ellipse_at_top,_#0b2a3a_0%,_#0f3546_40%,_#0f3a4b_100%)] relative overflow-hidden"
    >
      {/* JSON-LD (nu afectează UI-ul) */}
      <JsonLd data={[organizationLd, teamItemListLd, howToLd]} />

      <div className="page-container">
        <div className="max-w-5xl mx-auto text-center">
          {/* Titlu */}
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif">
            Echipa noastră
          </h2>

          {/* Descriere */}
          <p className="text-base md:text-lg leading-relaxed text-white/80 mb-12 font-sans max-w-3xl mx-auto">
            Suntem o echipă dedicată, atentă la detalii și mereu aproape de clienți. Oferim ghidare clară și sprijin în
            toate etapele procedurilor juridice — cu accent pe transparență, seriozitate și comunicare eficientă.
          </p>

          {/* Carduri echipă */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10 items-stretch mb-16">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative h-full transition-transform duration-300 hover:scale-[1.01]"
              >
                <div className="absolute -inset-[2px] bg-gradient-to-br from-[#3eb89a] via-[#0a2540] to-[#3eb89a] rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />
                <div className="relative bg-white rounded-2xl p-8 h-full flex flex-col items-center text-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      className="w-[120px] h-[120px] rounded-full object-cover shadow-md"
                      width="120"
                      height="120"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#0a2540] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-sans">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cum lucrăm */}
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-10">
            Cum lucrăm
          </h3>

          {/* Pașii */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start relative max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#3eb89a] text-white font-bold flex items-center justify-center mb-4 mx-auto text-sm">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 font-serif">
                  {step.title}
                </h4>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Buton CTA */}
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Hai să discutăm cazul tău
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
