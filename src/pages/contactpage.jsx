"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Clock, CheckCircle2, MapPin } from "lucide-react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ContactForm from "../components/ContactForm"

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

            <div className="w-full lg:w-1/2 flex flex-col">
              <ContactForm className="flex-1" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
