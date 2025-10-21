"use client"

import { Link } from "react-router-dom"
import { useEffect } from "react"
import { setMetaTags } from "../seo/meta"
import JsonLd from "../components/JsonLd"

export default function PoliticaConfidentialitate() {
  const updated = "octombrie 2025"

  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/politica-confidentialitate"
  const canonical = `${origin}${path}`

  const title = "Politica de confidențialitate | ConsultantaBV"
  const description =
    "Politica de confidențialitate a ConsultantaBV. Află cum colectăm, folosim și protejăm datele tale personale conform GDPR."
  const ogImage = `${origin}/images/og/default.jpg`

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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: origin },
      { "@type": "ListItem", position: 2, name: "Politica de confidențialitate", item: canonical },
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

  const privacyPolicyLd = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: "Politica de confidențialitate - ConsultantaBV",
    url: canonical,
    inLanguage: "ro-RO",
    datePublished: "2024-01-15",
    dateModified: "2025-10-01",
    publisher: {
      "@type": "Organization",
      "@id": `${origin}#organization`,
      name: "ConsultantaBV",
      email: "contact@consultantabv.ro",
      telephone: "+40730140766",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Strada Nicolae Pop nr. 13, etaj 1, ap. 7",
        addressCountry: "RO",
      },
      logo: `${origin}/images//public/images/logo.svg`,
      url: origin,
    },
    isPartOf: { "@type": "WebSite", url: origin, name: "ConsultantaBV" },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <JsonLd data={[webPageLd, breadcrumbLd, privacyPolicyLd]} />

      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0a2540 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#3eb89a] mb-3 sm:mb-4">
            Document legal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#0a2540] mb-4 sm:mb-6 leading-tight">
            Politica de confidențialitate
          </h1>
          <div className="mx-auto w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-[#3eb89a] to-transparent mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">
            Află cum colectăm, folosim și protejăm datele tale personale atunci când utilizezi site-ul și formularul
            nostru de contact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 lg:p-12">
          <p className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-10">
            Ultima actualizare: <span className="font-medium text-[#0a2540]">{updated}</span>
          </p>

          {/* …conținutul legal… */}

          <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 font-serif text-[#0a2540]" id="contact">
            Contact & operator
          </h2>
          <p className="text-gray-700 mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Operator: <strong className="text-[#0a2540]">ConsultantaBV</strong>
            <br />
            Adresă: Strada Nicolae Pop nr. 13, etaj 1, ap. 7, România
            <br />
            E-mail:{" "}
            <a href="mailto:contact@consultantabv.ro" className="text-[#3eb89a] hover:underline break-all">
              contact@consultantabv.ro
            </a>
            <br />
            Telefon:{" "}
            <a href="tel:+40730140766" className="text-[#3eb89a] hover:underline">
              0730140766
            </a>
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#3eb89a] px-6 py-3 text-white font-medium shadow-sm hover:bg-[#35a085] transition-colors text-center"
          >
            Ai întrebări? Contactează-ne
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-[#0a2540] font-medium hover:border-gray-400 transition-colors text-center"
          >
            Înapoi la pagina principală
          </Link>
        </div>
      </section>

      <footer className="py-6 sm:py-8 text-center text-xs sm:text-sm text-gray-500 border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} ConsultantaBV. Toate drepturile rezervate.</p>
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <Link to="/politica-cookies" className="hover:text-[#3eb89a] transition-colors">
              Politica cookies
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/termeni-conditii" className="hover:text-[#3eb89a] transition-colors">
              Termeni și condiții
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
