// src/pages/contactpage.jsx
"use client"

import { useState, useEffect } from "react"
import {
  MailIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircle2Icon,
  MapPinIcon,
  CalendarCheckIcon,
} from "../icons"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ContactForm from "../components/ContactForm"

// ✅ SEO
import { setMetaTags } from "../seo/meta"
import JsonLd from "../components/JsonLd"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    otherService: "",
    notes: "",
    gdprConsent: false,
    honeypot: "",
  })

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
  })

  const [showOtherService, setShowOtherService] = useState(false)

  const serviceOptions = [
    { value: "", label: "Selectează un serviciu", disabled: true },
    { value: "consultanta-rapida", label: "Consultanță rapidă" },
    { value: "contracte-documente", label: "Contracte & documente" },
    { value: "litigii-reprezentare", label: "Litigii / reprezentare" },
    { value: "dreptul-muncii", label: "Dreptul muncii" },
    { value: "drept-comercial", label: "Drept comercial" },
    { value: "alte-servicii", label: "Alte servicii" },
  ]

  // ───────────── SEO VARS ─────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/contact"
  const canonical = `${origin}${path}`

  const title = "Contact ConsultantaBV | Asistență juridică rapidă și profesionistă"
  const description =
    "Contactează echipa ConsultantaBV pentru soluții juridice rapide, transparente și sigure. Răspundem în mai puțin de 2 ore – online sau la sediu, în Brașov."
  const ogImage = `${origin}/images/hero-tablet.webp`

  // ───────────── META la mount (idempotent) ─────────────
  useEffect(() => {
    setMetaTags({
      title,
      description,
      canonical,
      image: ogImage,
      siteName: "ConsultantaBV",
      ogType: "website",
      locale: "ro_RO",
    })
  }, [title, description, canonical, ogImage])

  // ───────────── JSON-LD (fără dubluri) ─────────────
  const orgId = `${origin}/#organization`
  const webSiteId = `${origin}/#website`

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: origin },
      { "@type": "ListItem", position: 2, name: "Contact", item: canonical },
    ],
  }

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    isPartOf: { "@id": webSiteId },
    name: title,
    description,
    primaryImageOfPage: ogImage,
    inLanguage: "ro-RO",
  }

  const contactPageLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${canonical}#contactpage`,
    url: canonical,
    isPartOf: { "@id": webSiteId },
    name: title,
    description,
    image: ogImage,
    inLanguage: "ro-RO",
    // doar referință la organizație, să evităm duplicate
    mainEntity: { "@id": orgId },
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    if (name === "serviceType") {
      const isOther = value === "alte-servicii"
      setShowOtherService(isOther)
      if (!isOther) {
        setFormData((prev) => ({ ...prev, otherService: "" }))
      }
    }
  }

  const validateForm = () => {
    if (!formData.fullName.trim()) return false
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false
    if (!formData.phone.trim()) return false
    if (!formData.serviceType) return false
    if (showOtherService && !formData.otherService.trim()) return false
    if (!formData.gdprConsent) return false
    if (formData.honeypot) return false
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) {
      setFormState({ isSubmitting: false, isSuccess: false, isError: true })
      return
    }

    setFormState({ isSubmitting: true, isSuccess: false, isError: false })
    setTimeout(() => {
      setFormState({ isSubmitting: false, isSuccess: true, isError: false })
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          serviceType: "",
          otherService: "",
          notes: "",
          gdprConsent: false,
          honeypot: "",
        })
        setShowOtherService(false)
        setFormState({ isSubmitting: false, isSuccess: false, isError: false })
      }, 5000)
    }, 1500)
  }

  const infoBullets = [
    "Analizăm situația ta juridică în detaliu",
    "Oferim soluții clare și personalizate",
    "Te ghidăm pas cu pas până la rezultat",
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* JSON-LD (idempotent) */}
      <JsonLd data={[webPageLd, breadcrumbLd, contactPageLd]} />

      <Navbar />

      {/* HERO */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />
        <div className="page-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">Contact</h1>
            <p className="text-lg md:text-xl text-white/90 font-sans font-light leading-relaxed">
              Fie că ai nevoie de o soluție juridică rapidă sau de o analiză detaliată, completează formularul de mai
              jos. În mai puțin de două ore vei primi un răspuns clar, personalizat și fără obligații.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 md:py-20 bg-gray-50" aria-labelledby="contact-info-heading">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            {/* Stânga */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div
                role="status"
                aria-live="polite"
                className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 shadow-sm"
              >
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <CalendarCheckIcon className="w-5 h-5 text-amber-700" />
                </div>
                <p className="text-amber-900 text-sm md:text-base font-sans leading-relaxed">
                  Întâlnirile la sediu se fac <span className="font-semibold">doar pe bază de programare prealabilă</span>.
                  Te rugăm să ne contactezi în avans pentru a stabili data și ora.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 id="contact-info-heading" className="text-2xl font-bold text-[#0a2540] mb-6 font-serif">
                  Cum te ajutăm
                </h3>
                <ul className="flex flex-col gap-4">
                  {infoBullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2Icon className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700 font-sans">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact direct */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-lg font-bold text-[#0a2540] mb-4 font-serif">Contact direct</h4>
                <address className="flex flex-col gap-4 not-italic">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3eb89a]/10 flex items-center justify-center flex-shrink-0">
                      <MailIcon className="w-5 h-5 text-[#3eb89a]" />
                    </div>
                    <a
                      href="mailto:contact@consultantabv.ro"
                      className="text-base text-gray-700 hover:text-[#3eb89a] transition-colors font-sans"
                    >
                      contact@consultantabv.ro
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3eb89a]/10 flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-5 h-5 text-[#3eb89a]" />
                    </div>
                    <a
                      href="tel:+40730140766"
                      className="text-base text-gray-700 hover:text-[#3eb89a] transition-colors font-sans"
                    >
                      0730 140 766
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3eb89a]/10 flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-5 h-5 text-[#3eb89a]" />
                    </div>
                    <div className="text-base text-gray-700 font-sans">
                      Strada Nicolae Pop nr 13, etaj 1, ap 7
                      <br />
                      Brașov, România
                    </div>
                  </div>
                </address>
              </div>

              <div className="bg-gradient-to-br from-[#0a2540] to-[#0d3a5c] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <ClockIcon className="w-6 h-6 text-[#3eb89a]" />
                  <h4 className="text-lg font-bold text-white font-serif">Program</h4>
                </div>
                <p className="text-white/90 font-sans text-base">
                  Luni – Vineri
                  <br />
                  <span className="text-xl font-semibold text-[#3eb89a]">10:00 – 15:00</span>
                </p>
              </div>
            </div>

            {/* Dreapta (formular) */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <ContactForm
                className="flex-1"
                formData={formData}
                setFormData={setFormData}
                formState={formState}
                setFormState={setFormState}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                showOtherService={showOtherService}
                serviceOptions={serviceOptions}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
