"use client"

import React, { useMemo } from "react"
import { Link } from "react-router-dom"
import JsonLd from "../components/JsonLd"

import {
  CheckCircle2Icon,
  ArrowRightIcon,
  Building2Icon,
  FileTextIcon,
  BriefcaseIcon,
  XCircleIcon,
  TrendingDownIcon,
  AlertCircleIcon,
} from "../icons"

// ✅ exportă și lista de servicii ca să o poți refolosi
export const mainServices = [
  {
    icon: Building2Icon,
    title: "Înființare SRL",
    bullets: ["Consultanță CAEN", "Redactare acte", "Depunere ONRC"],
    link: "/servicii/infiintare-srl",
  },
  {
    icon: FileTextIcon,
    title: "Înființare PFA",
    bullets: ["Coduri CAEN", "Dosar complet", "Depunere online"],
    link: "/servicii/infiintare-pfa",
  },
  {
    icon: BriefcaseIcon,
    title: "Consultanță juridică",
    bullets: ["Analiză rapidă", "Recomandări scrise", "Redactare contracte"],
    link: "/servicii/consultanta-juridica",
  },
  {
    icon: XCircleIcon,
    title: "Închidere firmă",
    bullets: ["Analiză opțiuni", "Documentație completă", "Reprezentare"],
    link: "/servicii/inchidere-firma",
  },
  {
    icon: TrendingDownIcon,
    title: "Preluare firmă cu datorii",
    bullets: ["Due-diligence", "Plan de transfer", "Cesiune conformă"],
    link: "/servicii/preluare-firma",
  },
  {
    icon: AlertCircleIcon,
    title: "Insolvență firmă",
    bullets: ["Evaluare viabilitate", "Pregătire dosar", "Asistență procedură"],
    link: "/servicii/insolventa-firma",
  },
]

/**
 * MainServicesGrid
 * - withJsonLd: true|false → controlează injectarea JSON-LD (ItemList + Service)
 *   * true pe pagina de Servicii
 *   * false pe homepage, ca să eviți dublurile de schema
 */
export default function MainServicesGrid({
  items = mainServices,
  title,
  subtitle,
  cta,                 // opțional: { to: "/contact", label: "Vezi ofertele" }
  withJsonLd = true,   // 🔥 default on (dezactivezi pe homepage)
  className = "",
}) {
  const origin = (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"

  const jsonLd = useMemo(() => {
    if (!withJsonLd) return null
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: title || "Servicii principale",
      itemListElement: items.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: s.title,
          description: s.bullets?.length ? s.bullets.join(", ") : undefined,
          url: `${origin}${s.link}`,
          provider: {
            "@type": "Organization",
            name: "ConsultantaBV",
            url: origin,
            logo: `${origin}/images//public/images/logo.svg`,
          },
        },
      })),
    }
  }, [withJsonLd, items, origin, title])

  return (
    <section className={`section-spacing bg-white ${className}`}>
      {/* ✅ JSON-LD doar când withJsonLd = true */}
      {jsonLd && <JsonLd data={jsonLd} />}

      <div className="page-container">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif bg-gradient-to-r from-[#0f3a52] via-[#1a5c6b] to-[#3eb89a] bg-clip-text text-transparent max-w-5xl mx-auto leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-600 font-sans max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-6">
          {items.map((service, idx) => (
            <div
              key={idx}
              className="basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${idx * 50}ms`, animationFillMode: "forwards" }}
            >
              <Link
                to={service.link}
                aria-label={`Detalii – ${service.title}`}
                className="relative flex flex-col justify-between p-6 rounded-2xl bg-[#16475A] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3eb89a] focus-visible:ring-offset-2"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      {React.createElement(service.icon, {
                        className: "w-6 h-6 text-white/90",
                        "aria-hidden": true,
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-white font-serif">{service.title}</h3>
                  </div>

                  <ul className="flex flex-col gap-2 mb-4">
                    {service.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-center gap-2 text-sm text-white/90 font-sans">
                        <CheckCircle2Icon className="w-4 h-4 text-[#3eb89a]" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-6 right-6 text-white/90 hover:text-[#3eb89a] font-semibold text-sm inline-flex items-center gap-1 font-sans">
                  Detalii <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {cta && (
          <div className="mt-12 text-center">
            <Link
              to={cta.to}
              className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-sans min-h-[56px]"
            >
              {cta.label}
              <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden />
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeInUp { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  )
}
