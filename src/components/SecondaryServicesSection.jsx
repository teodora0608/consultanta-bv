// src/common/secondary-services-section.jsx
import React from "react"
import * as Icons from "../icons"
import { ArrowRightIcon } from "../icons"

export const secondaryServices = {
  rezervareDenumire: {
    icon: Icons.FileTextIcon,
    title: "Rezervare denumire firmă (nume SRL/PFA/ONG)",
    summary:
      "Verificare disponibilitate și rezervare denumire firmă la ONRC, cu confirmare rapidă în format PDF.",
    meta: { acte: "CI", livrabile: "dovadă rezervare denumire", durata: "1 zi" },
    link: "/servicii",
  },
  infiintareONG: {
    icon: Icons.HeartIcon,
    title: "Înființare ONG (Asociație non-profit)",
    summary:
      "Înființare asociație non-profit cu consultanță și depunere la judecătorie",
    meta: { acte: "CI, denumiri, dovadă sediu", livrabile: "hotărâre + certificat + statut", durata: "~30 zile" },
    link: "/servicii",
  },
  gazduireSediu: {
    icon: Icons.MapPinIcon,
    title: "Găzduire sediu social (opțional)",
    summary: "Oferim adresă de sediu social pentru înregistrarea firmei",
    meta: { acte: "CI, date firmă", livrabile: "contract găzduire", durata: "1 zi" },
    link: "/servicii",
  },
  certificatConstatator: {
    icon: Icons.FileCheckIcon,
    title: "Certificat Constatator ONRC",
    summary: "Document oficial care atestă situația juridică actuală a unei firme",
    meta: { acte: "CUI, CI", livrabile: "PDF semnat", durata: "1–2 zile" },
    link: "/servicii",
  },
  mutareSediu: {
    icon: Icons.MapPinIcon,
    title: "Mutare sediu (SRL / PFA / II)",
    summary: "Schimbarea adresei sediului social la ONRC",
    meta: { acte: "titlu/contract, CI", livrabile: "mențiune ONRC", durata: "3–5 zile" },
    link: "/servicii",
  },
  alteMentiuni: {
    icon: Icons.FileSignatureIcon,
    title: "Alte mențiuni ONRC",
    summary: "Modificări CAEN, punct de lucru, statut, administratori, beneficiar real",
    meta: { acte: "variabil", livrabile: "mențiune ONRC", durata: "3–7 zile" },
    link: "/servicii",
  },
  cesiuniParti: {
    icon: Icons.UsersIcon,
    title: "Cesiuni părți sociale",
    summary: "Transfer de părți sociale între asociați sau către terți",
    meta: { acte: "CI, contract cesiune", livrabile: "mențiune ONRC", durata: "5–7 zile" },
    link: "/servicii",
  },
  suspendareReactivare: {
    icon: Icons.AlertCircleIcon,
    title: "Suspendare / Reactivare activitate",
    summary: "Suspendarea temporară sau reactivarea activității firmei",
    meta: { acte: "CI, hotărâre", livrabile: "mențiune ONRC", durata: "3–5 zile" },
    link: "/servicii",
  },
  reactivareFiscala: {
    icon: Icons.FileSpreadsheetIcon,
    title: "Reactivare fiscală & cazier fiscal",
    summary: "Reactivare cod TVA și obținere cazier fiscal",
    meta: { acte: "CI, documente firmă", livrabile: "cod TVA, cazier", durata: "5–10 zile" },
    link: "/servicii",
  },
  inchiriereAdministratori: {
    icon: Icons.UsersIcon,
    title: "Închiriere administratori/asociați",
    summary: "Serviciu special pentru situații complexe (cu disclaimer)",
    meta: { acte: "variabil", livrabile: "contract + mențiune", durata: "variabil" },
    link: "/servicii",
  },
  declaratieUnica: {
    icon: Icons.FileSpreadsheetIcon,
    title: "Depunere Declarația Unică (PF)",
    summary: "Completare și depunere declarație venituri persoane fizice",
    meta: { acte: "împuternicire, venituri, SPV", livrabile: "recipisă + PDF", durata: "1–2 zile" },
    link: "/servicii",
  },
  registruControl: {
    icon: Icons.FileCheckIcon,
    title: "Registru Unic de Control (ANAF)",
    summary: "Obținerea RUC pentru evidența controalelor fiscale",
    meta: { acte: "CI, date firmă", livrabile: "RUC emis", durata: "1–3 zile" },
    link: "/servicii",
  },
  autorizari: {
    icon: Icons.FileSignatureIcon,
    title: "Autorizări DSVSA / DSP / ISU / APM",
    summary:
      "Obținerea autorizațiilor: sanitară (DSP/DSVSA), pompieri (ISU), mediu (APM).",
    meta: { acte: "plan spațiu, CI", livrabile: "avize/autorizații", durata: "variabil" },
    link: "/servicii",
  },
  extrasCarte: {
    icon: Icons.MapPinIcon,
    title: "(Opțional) Extras Carte Funciară (ANCPI)",
    summary: "Document oficial privind situația juridică a unui imobil",
    meta: { acte: "nr. cadastral/adresă", livrabile: "PDF ANCPI", durata: "aceeași zi" },
    link: "/servicii",
  },
}

export const serviceGroups = {
  infiintare: [
    secondaryServices.rezervareDenumire,
    secondaryServices.gazduireSediu,
    secondaryServices.certificatConstatator,
    secondaryServices.infiintareONG,
  ],
  modificari: [
    secondaryServices.mutareSediu,
    secondaryServices.alteMentiuni,
    secondaryServices.cesiuniParti,
    secondaryServices.suspendareReactivare,
    secondaryServices.reactivareFiscala,
    secondaryServices.inchiriereAdministratori,
  ],
  documente: [
    secondaryServices.declaratieUnica,
    secondaryServices.registruControl,
    secondaryServices.autorizari,
    secondaryServices.extrasCarte,
  ],
}

// ==== Componentă UI  =====
export default function SecondaryServicesSection({
  title = "Servicii conexe",
  subtitle = "Proceduri și documente complementare pentru firmă.",
  services = [],
  onServiceClick,
  bgColor = "bg-gray-50",
  lgCols = 2,
  containerMax = "",
  columns, // alias opțional (dacă ai folosit `columns` în pagină)
}) {
  const effectiveCols = columns ?? lgCols
  const gridColsLg = effectiveCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 ${gridColsLg} gap-6 auto-rows-[1fr]`
  const cardClass =
    "h-full flex flex-col p-5 rounded-xl bg-[#16475A] border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 overflow-hidden"

  return (
    <section className={`py-16 ${bgColor}`} aria-labelledby="secondary-services-heading">
      <div className={`page-container ${containerMax}`}>
        <header className="mb-12">
          <h2 id="secondary-services-heading" className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
            {title}
          </h2>
          {subtitle && <p className="text-lg text-gray-600 font-sans">{subtitle}</p>}
        </header>

        <div className={gridClass}>
          {services.map((s, i) => (
            <div key={`${s.title}-${i}`} className="h-full">
              <div
                role="button"
                tabIndex={0}
                onClick={() => onServiceClick?.(s)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    onServiceClick?.(s)
                  }
                }}
                className={cardClass}
                aria-label={`Detalii: ${s.title}`}
              >
                <div className="flex items-center gap-3 mb-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-[#3eb89a]" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-white font-serif truncate min-w-0">{s.title}</h3>
                </div>

                <p className="text-sm text-white/80 mb-4 font-sans line-clamp-2 leading-snug">
                  {s.summary}
                </p>

                {s.meta && (
                  <div className="text-xs text-white/70 font-sans mb-4 leading-snug">
                    {"acte" in s.meta && <>Acte: {s.meta.acte}<span className="mx-2">•</span></>}
                    {"livrabile" in s.meta && <>Livrabile: {s.meta.livrabile}<span className="mx-2">•</span></>}
                    {"durata" in s.meta && <>Durată: {s.meta.durata}</>}
                  </div>
                )}

                <div className="text-white hover:text-[#3eb89a] font-medium text-sm flex items-center gap-1 font-sans mt-auto transition-colors">
                  Detalii <ArrowRightIcon className="w-4 h-4" aria-hidden />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
