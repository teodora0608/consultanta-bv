"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FileCheck, MessageCircle, ArrowRight, X, Clock } from "lucide-react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import MainServicesGrid from "../components/MainServicesGrid"
import SecondaryServicesSection from "../components/SecondaryServicesSection"
import { mainServices } from "../data/mainServices"
import { serviceGroups } from "../data/secondaryServices"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null)

  const openModal = (service) => {
    setSelectedService(service)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedService(null)
    document.body.style.overflow = "unset"
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedService) {
        closeModal()
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [selectedService])

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[35vh] py-20 md:py-24 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />

        <div className="page-container relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            {/* Reduced title size to match "Echipa noastră" */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif bg-gradient-to-r from-[#ffffff] via-[#e0f2f1] to-[#3eb89a] bg-clip-text text-transparent">
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
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/40123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0a2540] font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 font-sans min-h-[56px]"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Întrebări? WhatsApp
              </a>
            </div>
          </div>
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
        columns={3}
        bgColor="bg-gray-50"
      />

      <SecondaryServicesSection
        title="Modificări & actualizări (ONRC/ANAF)"
        subtitle="Actualizează datele firmei rapid și conform legii."
        services={serviceGroups.modificari}
        onServiceClick={openModal}
        columns={3}
        bgColor="bg-white"
      />

      <SecondaryServicesSection
        title="Documente & autorizații"
        subtitle="Documente și autorizații necesare pentru activitate."
        services={serviceGroups.documente}
        onServiceClick={openModal}
        bgColor="bg-gray-50"
        lgCols={2} // 2×2 la desktop
        containerMax="lg:max-w-[1000px] mx-auto" // Increased container width from 900px to 1000px for better spacing
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
              className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-sans min-h-[56px]"
            >
              Solicită ofertă
              <ArrowRight className="ml-2 h-5 w-5" />
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
                {selectedService.icon && <selectedService.icon className="w-6 h-6 text-[#3eb89a]" />}
                <h3 id="modal-title" className="text-2xl font-bold text-[#0a2540] font-serif">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                aria-label="Închide"
              >
                <X className="w-5 h-5 text-gray-500" />
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
                            <Clock className="w-5 h-5 text-[#3eb89a] flex-shrink-0" />
                            <div>
                              <span className="font-bold text-[#0a2540] font-serif">Durată: </span>
                              <span className="text-gray-700 font-sans">{selectedService.details.durata}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                            <FileCheck className="w-5 h-5 text-[#3eb89a] flex-shrink-0" />
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
                    <ArrowRight className="ml-2 h-5 w-5" />
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn,
          .animate-scaleIn {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  )
}
