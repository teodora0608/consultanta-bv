"use client"

import React, { useMemo } from "react"
import JsonLd from "../components/JsonLd"

import {
  ArrowRightIcon,
  FileCheckIcon,
  MapPinIcon,
  FileSignatureIcon,
  UsersIcon,
  AlertCircleIcon,
  FileSpreadsheetIcon,
  HeartIcon,
  FileTextIcon,
} from "../icons"

/* ===================== Data ===================== */

export const secondaryServices = {
  rezervareDenumire: {
    icon: FileTextIcon,
    title: "Rezervare denumire firmă (nume SRL/PFA/ONG)",
    summary: "Verificare disponibilitate și rezervare denumire firmă la ONRC, cu confirmare rapidă în format PDF.",
    meta: { acte: "CI", livrabile: "dovadă rezervare denumire", durata: "1 zi" },
    details: {
      ceEste:
        "Serviciu de verificare disponibilitate și rezervare denumire firmă la ONRC, necesar înainte de înființare.",
      candTrebuie:
        "Înainte de înființare, pentru a te asigura că denumirea dorită este disponibilă și pentru a o rezerva.",
      acte: ["Copie CI solicitant", "3 variante de denumire (în ordine de preferință)"],
      pasi: [
        "Verificare disponibilitate denumiri în baza de date ONRC",
        "Depunere cerere de rezervare pentru denumirea disponibilă",
        "Obținere dovadă de rezervare în format PDF",
      ],
      durata: "1 zi lucrătoare",
      livrabile: "Dovadă de rezervare denumire firmă în format PDF, valabilă 3 luni",
    },
  },
  infiintareONG: {
    icon: HeartIcon,
    title: "Înființare ONG (Asociație non-profit)",
    summary: "Înființare asociație non-profit cu consultanță și depunere la judecătorie",
    meta: { acte: "CI, denumiri, dovadă sediu", livrabile: "hotărâre + certificat + statut", durata: "~30 zile" },
    details: {
      ceEste:
        "Serviciu complet de înființare asociație non-profit (ONG), redactare acte, depunere la judecătorie și ANAF.",
      candTrebuie:
        "Când dorești să înființezi o organizație non-profit pentru activități sociale, culturale, educaționale etc.",
      acte: [
        "CI/Pașaport pentru minimum 3 membri fondatori",
        "3 denumiri propuse (rezervare nume)",
        "Dovada sediului (act proprietate + acord proprietar / contract)",
        "Date pentru scopul/activitățile asociației și structura de conducere",
      ],
      pasi: [
        "Consultanță pentru denumire și obiective",
        "Redactare Act Constitutiv & Statut",
        "Dosar pentru judecătorie + depunere",
        "Înregistrare fiscală la ANAF",
        "Ghid după înființare",
      ],
      durata: "≈ 30 de zile (în funcție de instanță/notar/ANAF)",
      livrabile:
        "Hotărâre judecătorească, certificat de înscriere, Act Constitutiv și Statut, CIF ANAF, set PDF semnat",
    },
  },
  gazduireSediu: {
    icon: MapPinIcon,
    title: "Găzduire sediu social (opțional)",
    summary: "Oferim adresă de sediu social pentru înregistrarea firmei",
    meta: { acte: "CI, date firmă", livrabile: "contract găzduire", durata: "1 zi" },
    details: {
      ceEste: "Serviciu de găzduire a sediului social pentru firme fără spațiu propriu.",
      candTrebuie: "La înființare sau când vrei să separi sediul social de locația de lucru.",
      acte: ["Copie CI administrator", "Date firmă (denumire, CUI)"],
      pasi: ["Semnare contract de găzduire", "Obținere documente necesare pentru ONRC"],
      durata: "1 zi lucrătoare",
      livrabile: "Contract de găzduire sediu social",
    },
  },
  certificatConstatator: {
    icon: FileCheckIcon,
    title: "Certificat Constatator ONRC",
    summary: "Document oficial care atestă situația juridică actuală a unei firme",
    meta: { acte: "CUI, CI", livrabile: "PDF semnat", durata: "1–2 zile" },
    details: {
      ceEste: "Document emis de ONRC care confirmă datele de înregistrare și situația juridică a societății.",
      candTrebuie: "Pentru bănci, licitații, credite sau verificarea partenerilor.",
      acte: ["CUI-ul firmei", "Copie CI solicitant"],
      pasi: ["Solicitare online la ONRC", "Plata taxei", "Obținere certificat electronic"],
      durata: "1–2 zile lucrătoare",
      livrabile: "Certificat constatator PDF cu semnătură electronică",
    },
  },
  mutareSediu: {
    icon: MapPinIcon,
    title: "Mutare sediu (SRL / PFA / II)",
    summary: "Schimbarea adresei sediului social la ONRC",
    meta: { acte: "titlu/contract, CI", livrabile: "mențiune ONRC", durata: "3–5 zile" },
    details: {
      ceEste: "Modificarea adresei sediului social în registrul comerțului.",
      candTrebuie: "Obligatoriu la schimbarea locației (în 15 zile de la mutare).",
      acte: ["Titlu de proprietate/contract închiriere", "Copii CI administratori"],
      pasi: ["Pregătire documentație", "Depunere cerere la ONRC", "Obținere mențiune"],
      durata: "3–5 zile lucrătoare",
      livrabile: "Certificat cu mențiunea noii adrese",
    },
  },
  alteMentiuni: {
    icon: FileSignatureIcon,
    title: "Alte mențiuni ONRC",
    summary: "Modificări CAEN, punct de lucru, statut, administratori, beneficiar real",
    meta: { acte: "variabil", livrabile: "mențiune ONRC", durata: "3–7 zile" },
    details: {
      ceEste:
        "Înregistrare modificări: coduri CAEN, puncte de lucru, statut, administratori/asociați, beneficiar real.",
      candTrebuie:
        "Când apar modificări în structura sau activitatea firmei ce trebuie raportate la ONRC.",
      acte: ["Documente specifice", "Hotărâri ale asociaților", "Copii CI"],
      pasi: ["Consultanță", "Pregătire documentație", "Depunere la ONRC"],
      durata: "3–7 zile lucrătoare",
      livrabile: "Certificat cu mențiunile actualizate",
    },
  },
  cesiuniParti: {
    icon: UsersIcon,
    title: "Cesiuni părți sociale",
    summary: "Transfer de părți sociale între asociați sau către terți",
    meta: { acte: "CI, contract cesiune", livrabile: "mențiune ONRC", durata: "5–7 zile" },
    details: {
      ceEste: "Transferul părților sociale între asociați sau către terți.",
      candTrebuie: "Când un asociat vinde sau transferă părțile sale sociale.",
      acte: ["Contract de cesiune", "Copii CI", "Hotărâre asociați (după caz)"],
      pasi: ["Redactare contract", "Obținere acorduri", "Depunere la ONRC"],
      durata: "5–7 zile lucrătoare",
      livrabile: "Certificat cu noua structură acționariat",
    },
  },
  suspendareReactivare: {
    icon: AlertCircleIcon,
    title: "Suspendare / Reactivare activitate",
    summary: "Suspendarea temporară sau reactivarea activității firmei",
    meta: { acte: "CI, hotărâre", livrabile: "mențiune ONRC", durata: "3–5 zile" },
    details: {
      ceEste: "Suspendare temporară sau reactivare după suspendare.",
      candTrebuie: "Când nu desfășori activitate temporar sau reiei activitatea.",
      acte: ["Hotărâre asociați", "Copii CI administratori"],
      pasi: ["Pregătire documentație", "Depunere la ONRC", "Notificare ANAF"],
      durata: "3–5 zile lucrătoare",
      livrabile: "Mențiune de suspendare/reactivare",
    },
  },
  reactivareFiscala: {
    icon: FileSpreadsheetIcon,
    title: "Reactivare fiscală & cazier fiscal",
    summary: "Reactivare cod TVA și obținere cazier fiscal",
    meta: { acte: "CI, documente firmă", livrabile: "cod TVA, cazier", durata: "5–10 zile" },
    details: {
      ceEste: "Reactivarea codului de TVA la ANAF și obținerea cazierului fiscal.",
      candTrebuie: "Când firma a fost dezactivată sau pentru licitații/contracte.",
      acte: ["Documente firmă", "Copii CI", "Dovezi activitate"],
      pasi: ["Verificare situație", "Pregătire documentație", "Depunere la ANAF"],
      durata: "5–10 zile lucrătoare",
      livrabile: "Cod TVA reactivat și/sau cazier fiscal",
    },
  },
  inchiriereAdministratori: {
    icon: UsersIcon,
    title: "Închiriere administratori/asociați",
    summary: "Serviciu special pentru situații complexe (cu disclaimer)",
    meta: { acte: "variabil", livrabile: "contract + mențiune", durata: "variabil" },
    details: {
      ceEste:
        "Schimbarea administratorilor/asociaților. ATENȚIE: Doar situații legitime și conforme cu legea.",
      candTrebuie: "Când este necesară o restructurare a conducerii. Consultați un avocat.",
      acte: ["Documente specifice", "Acorduri între părți", "Copii CI"],
      pasi: ["Consultanță juridică", "Evaluare", "Pregătire documente", "Depunere ONRC"],
      durata: "Variabil",
      livrabile: "Contracte și mențiuni ONRC",
    },
  },
  declaratieUnica: {
    icon: FileSpreadsheetIcon,
    title: "Depunere Declarația Unică (PF)",
    summary: "Completare și depunere declarație venituri persoane fizice",
    meta: { acte: "împuternicire, venituri, SPV", livrabile: "recipisă + PDF", durata: "1–2 zile" },
    details: {
      ceEste:
        "Completare și depunere a Declarației Unice pentru raportarea veniturilor și calculul impozitelor.",
      candTrebuie: "Anual, până la 25 mai, pentru chirii, dividende, drepturi de autor, PFA etc.",
      acte: ["Împuternicire", "Documente venituri", "SPV (dacă e cazul)"],
      pasi: ["Colectare documente", "Completare", "Depunere online ANAF"],
      durata: "1–2 zile lucrătoare",
      livrabile: "Recipisă și declarație PDF",
    },
  },
  registruControl: {
    icon: FileCheckIcon,
    title: "Registru Unic de Control (ANAF)",
    summary: "Obținerea RUC pentru evidența controalelor fiscale",
    meta: { acte: "CI, date firmă", livrabile: "RUC emis", durata: "1–3 zile" },
    details: {
      ceEste: "Registrul în care se înregistrează controalele autorităților fiscale.",
      candTrebuie: "Obligatoriu pentru toate firmele, păstrat la sediul social.",
      acte: ["Copie CI administrator", "Date firmă (CUI, denumire)"],
      pasi: ["Solicitare online ANAF", "Completare formular", "Descărcare RUC"],
      durata: "1–3 zile lucrătoare",
      livrabile: "Registru Unic de Control (electronic)",
    },
  },
  autorizari: {
    icon: FileSignatureIcon,
    title: "Autorizări DSVSA / DSP / ISU / APM",
    summary:
      "Obținerea autorizațiilor: sanitară (DSP/DSVSA), pompieri (ISU), mediu (APM).",
    meta: { acte: "plan spațiu, CI", livrabile: "avize/autorizații", durata: "variabil" },
    details: {
      ceEste:
        "Servicii pentru autorizațiile necesare, după domeniul de activitate (HoReCa, producție, depozitare etc.).",
      candTrebuie: "În funcție de activitate și cerințele legale aplicabile.",
      acte: ["Plan spațiu", "Copii CI", "Documente specifice"],
      pasi: ["Evaluare", "Pregătire documente", "Depuneri", "Inspecții", "Obținere autorizații"],
      durata: "2 săpt. – 3 luni",
      livrabile: "Avize și autorizații de funcționare",
    },
  },
  extrasCarte: {
    icon: MapPinIcon,
    title: "(Opțional) Extras Carte Funciară (ANCPI)",
    summary: "Document oficial privind situația juridică a unui imobil",
    meta: { acte: "nr. cadastral/adresă", livrabile: "PDF ANCPI", durata: "aceeași zi" },
    details: {
      ceEste:
        "Document oficial care atestă situația juridică a unui imobil (proprietar, sarcini, drepturi).",
      candTrebuie: "Înainte de cumpărare, pentru credite ipotecare sau proceduri juridice.",
      acte: ["Număr cadastral sau adresa completă"],
      pasi: ["Solicitare online ANCPI", "Plata taxei", "Descărcare extras"],
      durata: "De obicei în aceeași zi",
      livrabile: "Extras de carte funciară PDF (ANCPI)",
    },
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

/* ===================== Component ===================== */

export default function SecondaryServicesSection({
  title,
  subtitle,
  services,
  onServiceClick,
  bgColor = "bg-gray-50",
  lgCols = 2,
  containerMax = "",
}) {
  const gridColsLg = lgCols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 ${gridColsLg} gap-6 auto-rows-[1fr]`
  const cardClass =
    "h-full flex flex-col p-5 rounded-xl bg-[#16475A] border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 overflow-hidden"

  const origin = (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"

  // JSON-LD inline (no DOM mutation, fără dubluri)
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: title,
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
          url: `${origin}${s.link ?? "/servicii"}`,
          areaServed: "RO",
          provider: {
            "@type": "Organization",
            name: "ConsultantABV",
            url: origin,
            logo: `${origin}/images/logo.png`,
          },
        },
      })),
    }),
    [origin, services, title]
  )

  const titleId = useMemo(
    () => `sec-${(title || "servicii").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "")}`,
    [title]
  )

  return (
    <section className={`section-spacing ${bgColor}`} aria-labelledby={titleId}>
      <JsonLd data={jsonLd} />

      <div className={`page-container ${containerMax}`}>
        <div className="mb-12">
          <h2 id={titleId} className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">
            {title}
          </h2>
          {subtitle && <p className="text-lg text-gray-600 font-sans">{subtitle}</p>}
        </div>

        <div className={gridClass}>
          {services.map((s, i) => (
            <div key={`${s.title}-${i}`} className="h-full">
              {/* Card accesibil (click + tastatură) */}
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

                <p className="text-sm text-white/80 mb-4 font-sans line-clamp-2 leading-snug">{s.summary}</p>

                <div className="text-xs text-white/70 font-sans mb-4 leading-snug">
                  <span>Acte: {s.meta.acte}</span>
                  <span className="mx-2">•</span>
                  <span>Livrabile: {s.meta.livrabile}</span>
                  <span className="mx-2">•</span>
                  <span>Durată: {s.meta.durata}</span>
                </div>

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
