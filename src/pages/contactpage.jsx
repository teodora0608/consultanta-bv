"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Mail, Phone, Clock, CheckCircle2, MapPin, ChevronDown } from "lucide-react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    otherService: "",
    notes: "",
    gdprConsent: false,
    honeypot: "", // Anti-spam field
  })

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
  })

  const [showOtherService, setShowOtherService] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const serviceOptions = [
    { value: "", label: "Selectează un serviciu", disabled: true },
    { value: "consultanta-rapida", label: "Consultanță rapidă" },
    { value: "contracte-documente", label: "Contracte & documente" },
    { value: "litigii-reprezentare", label: "Litigii / reprezentare" },
    { value: "dreptul-muncii", label: "Dreptul muncii" },
    { value: "drept-comercial", label: "Drept comercial" },
    { value: "alte-servicii", label: "Alte servicii" },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Show/hide conditional field
    if (name === "serviceType") {
      setShowOtherService(value === "alte-servicii")
      if (value !== "alte-servicii") {
        setFormData((prev) => ({ ...prev, otherService: "" }))
      }
    }
  }

  const handleServiceSelect = (value) => {
    setFormData((prev) => ({ ...prev, serviceType: value }))
    setShowOtherService(value === "alte-servicii")
    if (value !== "alte-servicii") {
      setFormData((prev) => ({ ...prev, otherService: "" }))
    }
    setIsDropdownOpen(false)
  }

  const validateForm = () => {
    if (!formData.fullName.trim()) return false
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false
    if (!formData.phone.trim()) return false
    if (!formData.serviceType) return false
    if (showOtherService && !formData.otherService.trim()) return false
    if (!formData.gdprConsent) return false
    if (formData.honeypot) return false // Bot detection
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setFormState({ isSubmitting: false, isSuccess: false, isError: true })
      return
    }

    setFormState({ isSubmitting: true, isSuccess: false, isError: false })

    // Simulate API call
    setTimeout(() => {
      setFormState({ isSubmitting: false, isSuccess: true, isError: false })
      // Reset form after success
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

  const selectedServiceLabel =
    serviceOptions.find((opt) => opt.value === formData.serviceType)?.label || "Selectează un serviciu"

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-20 md:py-24 bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden">
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,184,154,0.1),transparent_50%)]" />

        <div className="page-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif"
            >
              Contact
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/90 font-sans font-light leading-relaxed"
            >
              Fie că ai nevoie de o soluție juridică rapidă sau de o analiză detaliată, completează formularul de mai
              jos. În mai puțin de două ore vei primi un răspuns clar, personalizat și fără obligații.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col gap-6"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#0a2540] mb-6 font-serif">Cum te ajutăm</h3>
                <div className="flex flex-col gap-4">
                  {infoBullets.map((bullet, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#3eb89a] flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700 font-sans">{bullet}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-lg font-bold text-[#0a2540] mb-4 font-serif">Contact direct</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3eb89a]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#3eb89a]" />
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
                      <Phone className="w-5 h-5 text-[#3eb89a]" />
                    </div>
                    <a
                      href="tel:+40123456789"
                      className="text-base text-gray-700 hover:text-[#3eb89a] transition-colors font-sans"
                    >
                      +40 123 456 789
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3eb89a]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#3eb89a]" />
                    </div>
                    <div className="text-base text-gray-700 font-sans">
                      Strada Nicolae Pop nr 13,
                      <br />
                      etaj 1, ap 7
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0a2540] to-[#0d3a5c] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#3eb89a]" />
                  <h4 className="text-lg font-bold text-white font-serif">Program</h4>
                </div>
                <p className="text-white/90 font-sans text-base">
                  Luni – Vineri
                  <br />
                  <span className="text-xl font-semibold text-[#3eb89a]">09:00 – 17:00</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300 flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-2 font-serif">Trimite cererea ta</h3>
                <p className="text-gray-600 mb-8 font-sans">
                  Completează datele și te contactăm în cel mai scurt timp.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:border-transparent transition-all font-sans text-base min-h-[56px]"
                    />
                    <label
                      htmlFor="fullName"
                      className="absolute left-4 top-2 text-xs font-semibold text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#3eb89a] font-sans"
                    >
                      Nume complet <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:border-transparent transition-all font-sans text-base min-h-[56px]"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-2 text-xs font-semibold text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#3eb89a] font-sans"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-[#0a2540] font-sans">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:border-transparent transition-all font-sans text-base min-h-[48px]"
                      placeholder="+40 123 456 789"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="serviceType" className="text-sm font-semibold text-[#0a2540] font-sans">
                      Tip serviciu <span className="text-red-500">*</span>
                    </label>
                    <div className="relative" ref={dropdownRef}>
                      {/* Custom Select Trigger */}
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full px-4 py-3.5 pr-12 border-2 rounded-lg focus:outline-none transition-all duration-300 font-sans text-base min-h-[56px] bg-white text-left flex items-center justify-between ${
                          isDropdownOpen
                            ? "border-[#3eb89a] ring-2 ring-[#3eb89a]/20"
                            : "border-[#3eb89a] hover:border-[#35a085] hover:shadow-md"
                        } ${!formData.serviceType ? "text-gray-400" : "text-[#0a2540]"}`}
                      >
                        <span>{selectedServiceLabel}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#0a2540] transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Custom Dropdown Menu */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden"
                          >
                            <div className="py-1">
                              {serviceOptions.map((option, index) => (
                                <button
                                  key={option.value}
                                  type="button"
                                  onClick={() => !option.disabled && handleServiceSelect(option.value)}
                                  disabled={option.disabled}
                                  className={`w-full px-4 py-3 text-left text-base font-sans transition-colors duration-150 ${
                                    option.disabled
                                      ? "text-gray-400 cursor-not-allowed bg-white"
                                      : formData.serviceType === option.value
                                        ? "bg-[#B3E5FC] text-[#0a2540] font-medium"
                                        : "text-[#0a2540] hover:bg-gray-50"
                                  }`}
                                >
                                  {option.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {showOtherService && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-2"
                    >
                      <label htmlFor="otherService" className="text-sm font-semibold text-[#0a2540] font-sans">
                        Descrie pe scurt <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="otherService"
                        name="otherService"
                        value={formData.otherService}
                        onChange={handleInputChange}
                        required={showOtherService}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:border-transparent transition-all font-sans text-base min-h-[44px]"
                        placeholder="Descrie serviciul dorit"
                      />
                    </motion.div>
                  )}

                  <div className="flex flex-col gap-2">
                    <label htmlFor="notes" className="text-sm font-semibold text-[#0a2540] font-sans">
                      Notițe
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:border-transparent transition-all font-sans text-base resize-none"
                      placeholder="Adaugă detalii suplimentare..."
                    />
                    <p className="text-xs text-gray-500 font-sans">Opțional: adaugă detalii utile.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdprConsent"
                      name="gdprConsent"
                      checked={formData.gdprConsent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-[#3eb89a] text-[#3eb89a] flex-shrink-0"
                    />
                    <label htmlFor="gdprConsent" className="text-sm text-gray-700 font-sans">
                      Sunt de acord cu{" "}
                      <a href="#" className="text-[#3eb89a] hover:underline">
                        politica de confidențialitate
                      </a>
                      . <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className="w-full bg-gradient-to-r from-[#3eb89a] to-[#35a085] hover:from-[#35a085] hover:to-[#2d8f75] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-sans min-h-[56px]"
                  >
                    {formState.isSubmitting ? "Se trimite..." : "Trimite cererea"}
                  </button>

                  {formState.isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <p className="text-sm text-green-800 font-sans">✅ Am primit cererea. Te contactăm în curând.</p>
                    </motion.div>
                  )}

                  {formState.isError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <span className="text-red-600 text-lg flex-shrink-0">⚠️</span>
                      <p className="text-sm text-red-800 font-sans">Verifică datele și încearcă din nou.</p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

