// src/pages/servicii.jsx
"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { FileCheckIcon, MessageCircleIcon, ArrowRightIcon, XIcon, ClockIcon } from "../icons"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import MainServicesGrid, { mainServices } from "../components/MainServicesGrid"
import SecondaryServicesSection, { serviceGroups } from "../components/SecondaryServicesSection"

// ✅ SEO
import { setMetaTags } from "../seo/meta";
import JsonLd from "../components/JsonLd"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null)
  const closeBtnRef = useRef(null)

  const openModal = (service) => {
    setSelectedService(service)
    document.body.style.overflow = "hidden"
    // focus pe butonul de închidere după render
    setTimeout(() => closeBtnRef.current?.focus(), 0)
  }

  const closeModal = () => {
    setSelectedService(null)
    document.body.style.overflow = "unset"
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedService) closeModal()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [selectedService])

  // ───────────── SEO VARS ─────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/servicii"
  const canonical = `${origin}${path}`

  const title = "Servicii | ConsultantaBV"
  const description =
    "Toate serviciile ConsultantaBV: înființare SRL/PFA, modificări ONRC/ANAF, documente, autorizații și închidere firmă. Soluții rapide, 100% online, în toată țara."
  const ogImage = `${origin}/images/og/default.jpg`

  // ───────────── META la mount (idempotent) ─────────────
  useEffect(() => {
    setMetaTags({
      title,
      description,
      canonical,
      image: ogImage,
      siteName: "ConsultantaBV",
    })
  }, [title, description, canonical, ogImage])

  // ───────────── JSON-LD ─────────────
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: origin },
      { "@type": "ListItem", position: 2, name: "Servicii", item: canonical },
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

  // Colectăm toate item-urile de listă pentru ItemList (fără să atingem UI)
  const allListItems =
    [
      ...(Array.isArray(mainServices) ? mainServices : []),
      ...(serviceGroups?.infiintare || []),
      ...(serviceGroups?.modificari || []),
      ...(serviceGroups?.documente || []),
    ].filter(Boolean) || []

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Lista serviciilor",
    itemListElement: allListItems.map((it, idx) => {
      const name = it?.title || it?.name || "Serviciu"
      const summary =
        it?.summary || it?.description || it?.subtitle || it?.details?.ceEste || description
      const url = it?.link ? `${origin}${it.link}` : canonical
      return {
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Service",
          name,
          description: summary,
          url,
          areaServed: "RO",
          provider: {
            "@type": "Organization",
            name: "ConsultantaBV",
            url: origin,
            // ✅ FIX: path corect pentru logo
            logo: `${origin}/images/logo.svg`,
          },
        },
      }
    }),
  }

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD sus în JSX (idempotent, fără dubluri) */}
      <JsonLd data={[webPageLd, breadcrumbLd, itemListLd]} />

      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[35vh] py-20 md:py-24 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />

        <div className="page-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white/90">
              Toate serviciile
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-sans max-w-4xl leading-relaxed">
              De la înființare și modificări până la închidere, insolvență și documente conexe. 100% online, simplu și
              rapid. Lucrăm în toată țara, cu redactare corectă a actelor, depunere la ONRC/ANAF și urmărirea statusului
              până la final.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full sm:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-sans min-h-[56px]"
              >
                Solicită ofertă
                <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden />
              </Link>
              <a
                href="https://wa.me/40730140766?text=Salut!%20Aș%20dori%20mai%20multe%20informații%20despre%20serviciile%20ConsultantaBV."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scrie-ne pe WhatsApp"
                data-ga="contact"
                data-ga-type="whatsapp"
                data-ga-section="Servicii"
                data-ga-label="Scrie-ne pe WhatsApp"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0a2540] font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 min-h-[44px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5 mr-2"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="page-container">
          <nav className="flex items-center gap-2 text-sm font-sans" aria-label="breadcrumb">
            <Link to="/" className="text-gray-600 hover:text-[#3eb89a] flex items-center gap-1">
              Acasă <ArrowRightIcon className="w-4 h-4" aria-hidden />
            </Link>
            <span className="text-[#0a2540]" aria-current="page">Servicii</span>
          </nav>
        </div>
      </section>

      {/* Main 6 Services */}
      <MainServicesGrid
        title="Servicii principale"
        subtitle="Soluții complete pentru afacerea ta."
        items={mainServices}
      />

      {/* Secondary Services Sections */}
      <SecondaryServicesSection
        title="Înființare & înregistrare"
        subtitle="Servicii complementare pentru înființarea firmei."
        services={serviceGroups.infiintare}
        onServiceClick={openModal}
        // ✅ FIX: prop corect pentru 3 coloane
        lgCols={3}
        bgColor="bg-gray-50"
      />

      <SecondaryServicesSection
        title="Modificări & actualizări"
        subtitle="Actualizează datele firmei rapid și conform legii."
        services={serviceGroups.modificari}
        onServiceClick={openModal}
        // ✅ FIX: prop corect pentru 3 coloane
        lgCols={3}
        bgColor="bg-white"
      />

      <SecondaryServicesSection
        title="Documente & autorizații"
        subtitle="Documente și autorizații necesare pentru activitate."
        services={serviceGroups.documente}
        onServiceClick={openModal}
        bgColor="bg-gray-50"
        lgCols={2}
        containerMax="lg:max-w-[1000px] mx-auto"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="page-container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-6 font-serif">
              Nu știi ce ți se potrivește?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-sans">
              Îți recomandăm varianta corectă după un scurt apel.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all durata-300 font-sans min-h-[56px]"
            >
              Solicită ofertă
              <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                {selectedService.icon && <selectedService.icon className="w-6 h-6 text-[#3eb89a]" aria-hidden />}
                <h3 id="modal-title" className="text-2xl font-bold text-[#0a2540] font-serif">
                  {selectedService.title}
                </h3>
              </div>
              <button
                ref={closeBtnRef}
                onClick={closeModal}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:ring-offset-2"
                aria-label="Închide"
              >
                <XIcon className="w-5 h-5 text-gray-500" aria-hidden />
              </button>
            </div>

            <div className="p-6">
              {selectedService.details && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-[#0a2540] mb-2 font-serif">Ce este</h4>
                    <p className="text-gray-700 font-sans leading-relaxed">{selectedService.details.ceEste}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#0a2540] mb-2 font-serif">Când îți trebuie</h4>
                    <p className="text-gray-700 font-sans leading-relaxed">{selectedService.details.candTrebuie}</p>
                  </div>

                  {(selectedService.title === "Găzduire sediu social (opțional)" ||
                    selectedService.title === "Certificat Constatator ONRC" ||
                    selectedService.title === "Registru Unic de Control (ANAF)") && (
                    <div className="flex flex-col gap-3">
                      <div className="p-3 rounded-lg bg-gray-50">
                        <div className="font-semibold text-[#0a2540] font-serif mb-1">Acte necesare</div>
                        <div className="text-gray-700 font-sans text-sm">{selectedService.meta.acte}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-gray-50">
                        <div className="font-semibold text-[#0a2540] font-serif mb-1">Livrabile</div>
                        <div className="text-gray-700 font-sans text-sm">{selectedService.meta.livrabile}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-gray-50">
                        <div className="font-semibold text-[#0a2540] font-serif mb-1">Durată</div>
                        <div className="text-gray-700 font-sans text-sm">{selectedService.meta.durata}</div>
                      </div>
                    </div>
                  )}

                  {selectedService.title !== "Găzduire sediu social (opțional)" &&
                    selectedService.title !== "Certificat Constatator ONRC" &&
                    selectedService.title !== "Registru Unic de Control (ANAF)" && (
                      <>
                        <div>
                          <h4 className="text-lg font-bold text-[#0a2540] mb-3 font-serif">Acte necesare</h4>
                          <ul className="flex flex-col gap-2">
                            {selectedService.details.acte.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700 font-sans">
                                <span className="text-[#3eb89a] font-bold">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-[#0a2540] mb-3 font-serif">Pași</h4>
                          <ol className="flex flex-col gap-2">
                            {selectedService.details.pasi.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-700 font-sans">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3eb89a] text-white text-sm font-bold flex items-center justify-center">
                                  {idx + 1}
                                </span>
                                {item}
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                            <ClockIcon className="w-5 h-5 text-[#3eb89a] flex-shrink-0" aria-hidden />
                            <div>
                              <span className="font-bold text-[#0a2540] font-serif">Durată: </span>
                              <span className="text-gray-700 font-sans">{selectedService.details.durata}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                            <FileCheckIcon className="w-5 h-5 text-[#3eb89a] flex-shrink-0" aria-hidden />
                            <div>
                              <span className="font-bold text-[#0a2540] font-serif">Livrabile: </span>
                              <span className="text-gray-700 font-sans">{selectedService.details.livrabile}</span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3eb89a] focus-visible:ring-offset-2"
                  >
                    Solicită ofertă
                    <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.2s ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn, .animate-scaleIn { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </main>
  )
}
