"use client"

import { useState, useRef, useEffect } from "react"
import { CheckCircle2, ChevronDown } from "lucide-react"

export default function ContactForm({
  title = "Trimite cererea ta",
  subtitle = "Completează datele și te contactăm în cel mai scurt timp.",
  showServiceType = true,
  serviceTypeLabel = "Tip serviciu",
  className = "",
}) {
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
    if (showServiceType && !formData.serviceType) return false
    if (showOtherService && !formData.otherService.trim()) return false
    if (!formData.gdprConsent) return false
    if (formData.honeypot) return false
    return true
  }

  const handleSubmit = async (e) => {
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

  const selectedServiceLabel =
    serviceOptions.find((opt) => opt.value === formData.serviceType)?.label || "Selectează un serviciu"

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-10 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-2 font-serif">{title}</h2>
      <p className="text-gray-600 mb-8 font-sans">{subtitle}</p>

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

        {showServiceType && (
          <div className="flex flex-col gap-2">
            <label htmlFor="serviceType" className="text-sm font-semibold text-[#0a2540] font-sans">
              {serviceTypeLabel} <span className="text-red-500">*</span>
            </label>
            <div className="relative" ref={dropdownRef}>
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

              {isDropdownOpen && (
                <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                  <div className="py-1">
                    {serviceOptions.map((option) => (
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
                </div>
              )}
            </div>
          </div>
        )}

        {showOtherService && (
          <div className="flex flex-col gap-2">
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
          </div>
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
          <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
            <p className="text-sm text-green-800 font-sans">Am primit cererea. Te contactăm în curând.</p>
          </div>
        )}

        {formState.isError && (
          <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
            <span className="text-red-600 text-lg flex-shrink-0">⚠️</span>
            <p className="text-sm text-red-800 font-sans">Verifică datele și încearcă din nou.</p>
          </div>
        )}
      </form>
    </div>
  )
}
