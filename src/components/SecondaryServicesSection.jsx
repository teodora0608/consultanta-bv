"use client"
import { useEffect } from "react"
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

export const secondaryServices = {
  rezervareDenumire: {
    icon: FileTextIcon,
    title: "Rezervare denumire firmă (nume SRL/PFA/ONG)",
    summary: "Verificare disponibilitate și rezervare denumire firmă la ONRC, cu confirmare rapidă în format PDF.",
    meta: {
      acte: "CI",
      livrabile: "dovadă rezervare denumire",
      durata: "1 zi",
    },
    details: {
      ceEste:
        "Serviciu de verificare disponibilitate și rezervare denumire firmă la ONRC, necesar înainte de înființarea unei societăți comerciale sau PFA.",
      candTrebuie:
        "Înainte de a începe procedura de înființare a firmei, pentru a te asigura că denumirea dorită este disponibilă și pentru a o rezerva.",
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
    meta: {
      acte: "CI, denumiri, dovadă sediu",
      livrabile: "hotărâre + certificat + statut",
      durata: "~30 zile",
    },
    details: {
      ceEste:
        "Serviciu complet de înființare asociație non-profit (ONG), conform legii. Includem consultanță pentru denumire și obiective, redactare Act Constitutiv și Statut, depunere la judecătorie și înregistrare fiscală la ANAF.",
      candTrebuie:
        "Când dorești să înființezi o organizație non-profit pentru activități sociale, culturale, educaționale sau de altă natură non-profit.",
      acte: [
        "CI/Pașaport pentru minimum 3 membri fondatori",
        "3 denumiri propuse (rezervare nume)",
        "Dovada sediului (act proprietate + acord proprietar / contract)",
        "Date pentru scopul/activitățile asociației și structura de conducere",
      ],
      pasi: [
        "Consultanță pentru denumire și obiective, conform legii",
        "Redactare Act Constitutiv & Statut + autentificare notarială (după caz)",
        "Dosar complet pentru judecătorie + depunere și urmărire status",
        "Înregistrare fiscală la ANAF (certificat de înregistrare fiscală / cod fiscal)",
        "Ghid după înființare: cont bancar, evidențe, bune practici",
      ],
      durata: "Aproximativ 30 de zile calendaristice, în funcție de termenele instanței și calendarul notarului/ANAF",
      livrabile:
        "Hotărârea judecătorească și certificatul de înscriere în Registrul Asociațiilor, Actul Constitutiv și Statutul semnate, Certificatul de înregistrare fiscală (cod fiscal) ANAF, Set complet de documente în PDF semnat electronic",
    },
  },
  gazduireSediu: {
    icon: MapPinIcon,
    title: "Găzduire sediu social (opțional)",
    summary: "Oferim adresă de sediu social pentru înregistrarea firmei",
    meta: {
      acte: "CI, date firmă",
      livrabile: "contract găzduire",
      durata: "1 zi",
    },
    details: {
      ceEste:
        "Serviciu de găzduire a sediului social pentru firme care nu au un spațiu propriu sau închiriat pentru sediu.",
      candTrebuie:
        "Când înființezi o firmă și nu ai un spațiu fizic disponibil sau când vrei să separi sediul social de locația de lucru.",
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
    meta: {
      acte: "CUI, CI",
      livrabile: "PDF semnat",
      durata: "1–2 zile",
    },
    details: {
      ceEste:
        "Certificatul constatator este un document oficial emis de ONRC care confirmă datele de înregistrare și situația juridică actuală a unei societăți comerciale.",
      candTrebuie:
        "Necesar pentru deschiderea de conturi bancare, participarea la licitații, obținerea de credite sau verificarea situației juridice a unui partener de afaceri.",
      acte: ["CUI-ul firmei", "Copie CI solicitant"],
      pasi: ["Solicitare online la ONRC", "Plata taxei", "Obținere certificat în format electronic"],
      durata: "1–2 zile lucrătoare",
      livrabile: "Certificat constatator în format PDF cu semnătură electronică",
    },
  },
  mutareSediu: {
    icon: MapPinIcon,
    title: "Mutare sediu (SRL / PFA / II)",
    summary: "Schimbarea adresei sediului social la ONRC",
    meta: {
      acte: "titlu/contract, CI",
      livrabile: "mențiune ONRC",
      durata: "3–5 zile",
    },
    details: {
      ceEste:
        "Procedura de modificare a adresei sediului social în registrul comerțului, necesară când firma își schimbă locația.",
      candTrebuie: "Obligatoriu când firma se mută la o nouă adresă. Trebuie făcută în termen de 15 zile de la mutare.",
      acte: ["Titlu de proprietate sau contract de închiriere pentru noul sediu", "Copii CI administratori"],
      pasi: ["Pregătire documentație", "Depunere cerere la ONRC", "Obținere mențiune"],
      durata: "3–5 zile lucrătoare",
      livrabile: "Certificat de înregistrare cu mențiunea noii adrese",
    },
  },
  alteMentiuni: {
    icon: FileSignatureIcon,
    title: "Alte mențiuni ONRC",
    summary: "Modificări CAEN, punct de lucru, statut, administratori, beneficiar real",
    meta: {
      acte: "variabil",
      livrabile: "mențiune ONRC",
      durata: "3–7 zile",
    },
    details: {
      ceEste:
        "Servicii pentru înregistrarea oricăror modificări în datele firmei: coduri CAEN, puncte de lucru, modificări statut, schimbări administratori/asociați, actualizare beneficiar real.",
      candTrebuie: "Când apar modificări în structura sau activitatea firmei care trebuie raportate la ONRC.",
      acte: ["Documente specifice fiecărei modificări", "Hotărâri ale asociaților", "Copii CI"],
      pasi: ["Consultanță pentru tipul de modificare", "Pregătire documentație", "Depunere la ONRC"],
      durata: "3–7 zile lucrătoare, în funcție de complexitate",
      livrabile: "Certificat de înregistrare cu mențiunile actualizate",
    },
  },
  cesiuniParti: {
    icon: UsersIcon,
    title: "Cesiuni părți sociale",
    summary: "Transfer de părți sociale între asociați sau către terți",
    meta: {
      acte: "CI, contract cesiune",
      livrabile: "mențiune ONRC",
      durata: "5–7 zile",
    },
    details: {
      ceEste:
        "Procedura de transfer al părților sociale dintr-o SRL de la un asociat la altul sau către o persoană terță.",
      candTrebuie: "Când un asociat dorește să vândă sau să transfere părțile sale sociale.",
      acte: ["Contract de cesiune", "Copii CI ale părților", "Hotărâre asociați (dacă este necesar)"],
      pasi: ["Redactare contract cesiune", "Obținere acorduri necesare", "Depunere la ONRC"],
      durata: "5–7 zile lucrătoare",
      livrabile: "Certificat de înregistrare cu noua structură acționariat",
    },
  },
  suspendareReactivare: {
    icon: AlertCircleIcon,
    title: "Suspendare / Reactivare activitate",
    summary: "Suspendarea temporară sau reactivarea activității firmei",
    meta: {
      acte: "CI, hotărâre",
      livrabile: "mențiune ONRC",
      durata: "3–5 zile",
    },
    details: {
      ceEste:
        "Procedura de suspendare temporară a activității firmei (fără a o închide) sau de reactivare după o perioadă de suspendare.",
      candTrebuie: "Când firma nu desfășoară activitate temporar sau când dorește să reia activitatea după suspendare.",
      acte: ["Hotărâre asociați", "Copii CI administratori"],
      pasi: ["Pregătire documentație", "Depunere cerere la ONRC", "Notificare ANAF"],
      durata: "3–5 zile lucrătoare",
      livrabile: "Mențiune de suspendare/reactivare în registrul comerțului",
    },
  },
  reactivareFiscala: {
    icon: FileSpreadsheetIcon,
    title: "Reactivare fiscală & cazier fiscal",
    summary: "Reactivare cod TVA și obținere cazier fiscal",
    meta: {
      acte: "CI, documente firmă",
      livrabile: "cod TVA, cazier",
      durata: "5–10 zile",
    },
    details: {
      ceEste: "Servicii pentru reactivarea codului de TVA la ANAF și obținerea cazierului fiscal al firmei.",
      candTrebuie:
        "Când firma a fost dezactivată de ANAF sau când este nevoie de cazier fiscal pentru licitații sau contracte.",
      acte: ["Documente firmă", "Copii CI", "Dovezi activitate"],
      pasi: ["Verificare situație fiscală", "Pregătire documentație", "Depunere cerere ANAF"],
      durata: "5–10 zile lucrătoare",
      livrabile: "Cod TVA reactivat și/sau cazier fiscal",
    },
  },
  inchiriereAdministratori: {
    icon: UsersIcon,
    title: "Închiriere administratori/asociați",
    summary: "Serviciu special pentru situații complexe (cu disclaimer)",
    meta: {
      acte: "variabil",
      livrabile: "contract + mențiune",
      durata: "variabil",
    },
    details: {
      ceEste:
        "Serviciu special pentru situații în care este necesară schimbarea administratorilor sau asociaților. ATENȚIE: Acest serviciu trebuie folosit doar în situații legitime și conforme cu legea.",
      candTrebuie:
        "În situații specifice când este necesară o restructurare a conducerii societății. Consultați un avocat pentru legalitate.",
      acte: ["Documente specifice situației", "Acorduri între părți", "Copii CI"],
      pasi: ["Consultanță juridică obligatorie", "Evaluare situație", "Pregătire documentație", "Depunere ONRC"],
      durata: "Variabil, în funcție de complexitate",
      livrabile: "Contracte și mențiuni ONRC",
    },
  },
  declaratieUnica: {
    icon: FileSpreadsheetIcon,
    title: "Depunere Declarația Unică (PF)",
    summary: "Completare și depunere declarație venituri persoane fizice",
    meta: {
      acte: "împuternicire, venituri, SPV",
      livrabile: "recipisă + PDF",
      durata: "1–2 zile",
    },
    details: {
      ceEste:
        "Serviciu de completare și depunere a Declarației Unice pentru persoane fizice, necesară pentru raportarea veniturilor și calculul impozitelor.",
      candTrebuie:
        "Anual, până la 25 mai, pentru persoanele cu venituri din chirii, dividende, drepturi de autor, activități independente etc.",
      acte: ["Împuternicire", "Documente venituri", "Certificate SPV (dacă este cazul)"],
      pasi: ["Colectare documente", "Completare declarație", "Depunere online la ANAF"],
      durata: "1–2 zile lucrătoare",
      livrabile: "Recipisă de depunere și copie declarație în format PDF",
    },
  },
  registruControl: {
    icon: FileCheckIcon,
    title: "Registru Unic de Control (ANAF)",
    summary: "Obținerea RUC pentru evidența controalelor fiscale",
    meta: {
      acte: "CI, date firmă",
      livrabile: "RUC emis",
      durata: "1–3 zile",
    },
    details: {
      ceEste:
        "Registrul Unic de Control este documentul în care se înregistrează toate controalele efectuate de autoritățile fiscale la sediul firmei.",
      candTrebuie:
        "Obligatoriu pentru toate firmele. Trebuie păstrat la sediul social și prezentat la cererea autorităților.",
      acte: ["Copie CI administrator", "Date firmă (CUI, denumire)"],
      pasi: ["Solicitare online la ANAF", "Completare formular", "Descărcare RUC"],
      durata: "1–3 zile lucrătoare",
      livrabile: "Registru Unic de Control în format electronic",
    },
  },
  autorizari: {
    icon: FileSignatureIcon,
    title: "Autorizări DSVSA / DSP / ISU / APM",
    summary:
      "Obținerea autorizațiilor necesare de la diverse autorități: sanitară (DSP/DSVSA), pompieri (ISU), mediu (APM).",
    meta: {
      acte: "plan spațiu, CI",
      livrabile: "avize/autorizații",
      durata: "variabil",
    },
    details: {
      ceEste:
        "Servicii pentru obținerea autorizațiilor necesare de la diverse autorități: sanitară (DSP/DSVSA), pompieri (ISU), mediu (APM).",
      candTrebuie: "În funcție de domeniul de activitate: HoReCa, comerț alimentar, producție, depozitare etc.",
      acte: ["Plan al spațiului", "Copii CI", "Documente specifice activității"],
      pasi: ["Evaluare necesități", "Pregătire documentație", "Depunere cereri", "Inspecții", "Obținere autorizații"],
      durata: "Variabil, de la 2 săptămâni la 3 luni",
      livrabile: "Avize și autorizații de funcționare",
    },
  },
  extrasCarte: {
    icon: MapPinIcon,
    title: "(Opțional) Extras Carte Funciară (ANCPI)",
    summary: "Document oficial privind situația juridică a unui imobil",
    meta: {
      acte: "nr. cadastral/adresă",
      livrabile: "PDF ANCPI",
      durata: "aceeași zi",
    },
    details: {
      ceEste:
        "Extrasul de carte funciară este documentul oficial care atestă situația juridică a unui imobil, inclusiv proprietarul, sarcinile și drepturile înscrise.",
      candTrebuie:
        "Necesar înainte de cumpărarea unui imobil, pentru verificarea situației juridice, obținerea de credite ipotecare sau în proceduri juridice.",
      acte: ["Număr cadastral sau adresa completă a imobilului"],
      pasi: ["Solicitare online la ANCPI", "Plata taxei", "Descărcare extras"],
      durata: "De obicei în aceeași zi lucrătoare",
      livrabile: "Extras de carte funciară în format PDF de pe site-ul ANCPI",
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

export default function SecondaryServicesSection({
  title,
  subtitle,
  services,
  onServiceClick,
  bgColor = "bg-gray-50",
  lgCols = 2,
  containerMax = "",
}) {
  const gridColsLg = "lg:grid-cols-2"
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 ${gridColsLg} gap-6 auto-rows-[1fr]`
  const cardClass =
    "h-full flex flex-col p-5 rounded-xl bg-[#16475A] border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 overflow-hidden"

  const origin = (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"

  // JSON-LD pentru serviciile secundare (fără pagini proprii)
  const jsonLd = {
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
        url: `${origin}/servicii`, // fallback comun
        provider: {
          "@type": "Organization",
          name: "ConsultantaBV",
          url: origin,
          logo: `${origin}/logo.png`,
        },
      },
    })),
  }

  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(jsonLd)
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [services])

  return (
    <section className={`section-spacing ${bgColor}`}>
      <div className={`page-container ${containerMax}`}>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">{title}</h2>
          <p className="text-lg text-gray-600 font-sans">{subtitle}</p>
        </div>

        <div className={gridClass}>
          {services.map((s, i) => (
            <div key={i} className="h-full">
              <div onClick={() => onServiceClick(s)} className={cardClass}>
                <div className="flex items-center gap-3 mb-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-[#3eb89a]" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-serif truncate min-w-0">{s.title}</h3>
                </div>

                <p className="text-sm text-white/80 mb-4 font-sans line-clamp-2 leading-snug">{s.summary}</p>

                <div className="text-xs text-white/70 font-sans mb-4 line-clamp-2 leading-snug">
                  <span>Acte: {s.meta.acte}</span>
                  <span className="mx-2">•</span>
                  <span>Livrabile: {s.meta.livrabile}</span>
                  <span className="mx-2">•</span>
                  <span>Durată: {s.meta.durata}</span>
                </div>

                <button className="text-white hover:text-[#3eb89a] font-medium text-sm flex items-center gap-1 font-sans mt-auto transition-colors">
                  Detalii <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
