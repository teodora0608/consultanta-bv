"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { CheckCircle2Icon, ChevronDownIcon } from "../icons"
import { gtagSafe } from "../lib/gaSafe"

const nameRegex = /^[A-Za-zĂÂÎȘȚăâîșț'’\-\. ]{2,}(?:\s+[A-Za-zĂÂÎȘȚăâîșț'’\-\. ]{2,})+$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

function isValidRoPhone(v) {
  const raw = (v || "").replace(/[^\d+]/g, "")
  return /^\+407\d{8}$/.test(raw) || /^00407\d{8}$/.test(raw) || /^07\d{8}$/.test(raw)
}

function normalizeRoPhone(v) {
  const digits = (v || "").replace(/\D/g, "")
  if (digits.startsWith("00407")) return `+4${digits.slice(2)}`     // 00407 -> +407
  if (digits.startsWith("07")) return `+4${digits}`                // 07xxxxxxxx -> +407xxxxxxxx
  if (digits.startsWith("407")) return `+${digits}`                 // 407xxxxxxxx -> +407xxxxxxxx
  if (digits.startsWith("40") && digits.length === 11) return `+${digits}` // 40xxxxxxxxx -> +40xxxxxxxxx
  if ((v || "").startsWith("+407")) return v
  return v
}

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
    errorMsg: "",
  })

  const [showOtherService, setShowOtherService] = useState(false)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)
  const listboxRef = useRef(null)

  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})

  const serviceOptions = [
    { value: "", label: "Selectează un serviciu, te rugăm", disabled: true },
    { value: "infiintare-srl", label: "Înființare SRL" },
    { value: "infiintare-pfa", label: "Înființare PFA" },
    { value: "consultanta-juridica", label: "Consultanță juridică" },
    { value: "inchidere-firma", label: "Închidere firmă" },
    { value: "preluare-firma", label: "Preluare firmă cu datorii" },
    { value: "insolventa-firma", label: "Insolvență firmă" },
    { value: "alte-servicii", label: "Altă solicitare" },
  ]

  // Click în afara dropdown-ului -> închidere
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Când deschidem lista, setăm opțiunea activă și focusăm listbox-ul
  useEffect(() => {
    if (isDropdownOpen) {
      const currentIndex = Math.max(
        0,
        serviceOptions.findIndex((o) => o.value === formData.serviceType && !o.disabled)
      )
      setActiveIndex(currentIndex === -1 ? 0 : currentIndex)
      setTimeout(() => listboxRef.current?.focus(), 0)
    }
  }, [isDropdownOpen, formData.serviceType])

  const validators = useMemo(
    () => ({
      fullName: (v) =>
        !v?.trim()
          ? "Te rugăm să completezi numele."
          : !nameRegex.test(v.trim())
          ? "Introdu numele real (minim două cuvinte, doar litere/diacritice)."
          : null,
      email: (v) =>
        !v?.trim()
          ? "Te rugăm să completezi emailul."
          : !emailRegex.test(v.trim())
          ? "Adresă de email invalidă."
          : null,
      phone: (v) =>
        !v?.trim()
          ? "Te rugăm să completezi telefonul."
          : !isValidRoPhone(v)
          ? "Număr invalid (ex: 07xxxxxxxx sau +407xxxxxxxx)."
          : null,
      serviceType: (v) => (showServiceType && !v ? "Alege tipul de serviciu." : null),
      otherService: (v) => (showOtherService && !v?.trim() ? "Descrie pe scurt solicitarea." : null),
      gdprConsent: (v) => (!v ? "Este necesar acordul pentru prelucrarea datelor." : null),
      honeypot: (v) => (!!v ? "Eroare formular." : null),
    }),
    [showOtherService, showServiceType]
  )

  const runValidation = (f, val = formData[f]) => validators[f]?.(val) || null

  const validateAll = () => {
    const e = {}
    for (const k of Object.keys(validators)) {
      const msg = runValidation(k)
      if (msg) e[k] = msg
    }
    return e
  }

  // ───────────────────────── Handlers & helpers ─────────────────────────
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    const next = type === "checkbox" ? checked : value

    setFormData((prev) => {
      const updated = { ...prev, [name]: next }
      if (name === "serviceType") {
        const show = next === "alte-servicii"
        setShowOtherService(show)
        if (!show) updated.otherService = ""
      }
      return updated
    })

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: runValidation(name, next) }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: runValidation(name) }))
  }

  const handleServiceSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: value,
      otherService: value === "alte-servicii" ? prev.otherService : "",
    }))
    setShowOtherService(value === "alte-servicii")
    setIsDropdownOpen(false)
    setTimeout(() => buttonRef.current?.focus(), 0)

    if (touched.serviceType) {
      setErrors((prev) => ({ ...prev, serviceType: runValidation("serviceType", value) }))
    }
  }

  const onListboxKeyDown = (e) => {
    const enabledOptions = serviceOptions.filter((o) => !o.disabled)
    const lastIndex = enabledOptions.length - 1
    const currentEnabledIndex = Math.max(
      0,
      enabledOptions.findIndex((o) => o.value === serviceOptions[activeIndex]?.value)
    )

    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault()
        const nextEnabled = (currentEnabledIndex + 1) % enabledOptions.length
        const globalIndex = serviceOptions.findIndex((o) => o.value === enabledOptions[nextEnabled].value)
        setActiveIndex(globalIndex)
        break
      }
      case "ArrowUp": {
        e.preventDefault()
        const prevEnabled = (currentEnabledIndex - 1 + enabledOptions.length) % enabledOptions.length
        const globalIndex = serviceOptions.findIndex((o) => o.value === enabledOptions[prevEnabled].value)
        setActiveIndex(globalIndex)
        break
      }
      case "Home": {
        e.preventDefault()
        const first = enabledOptions[0]
        const globalIndex = serviceOptions.findIndex((o) => o.value === first.value)
        setActiveIndex(globalIndex)
        break
      }
      case "End": {
        e.preventDefault()
        const last = enabledOptions[lastIndex]
        const globalIndex = serviceOptions.findIndex((o) => o.value === last.value)
        setActiveIndex(globalIndex)
        break
      }
      case "Enter": {
        e.preventDefault()
        const opt = serviceOptions[activeIndex]
        if (opt && !opt.disabled) handleServiceSelect(opt.value)
        break
      }
      case "Escape": {
        e.preventDefault()
        setIsDropdownOpen(false)
        setTimeout(() => buttonRef.current?.focus(), 0)
        break
      }
      default:
        break
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const all = validateAll()
    setErrors(all)

    if (Object.keys(all).length > 0) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMsg: "Verifică câmpurile marcate cu roșu.",
      })
      return
    }

    setFormState({ isSubmitting: true, isSuccess: false, isError: false, errorMsg: "" })

    try {
      const fd = new FormData()
      fd.append("fullName", formData.fullName.trim())
      fd.append("email", formData.email.trim())
      fd.append("phone", normalizeRoPhone(formData.phone))
      fd.append("serviceType", formData.serviceType)
      fd.append("otherService", formData.otherService.trim())
      fd.append("notes", formData.notes.trim())
      fd.append("gdprConsent", formData.gdprConsent ? "1" : "")
      fd.append("honeypot", formData.honeypot || "")

      // 🔧 dacă rulezi din subfolder sau pe alt domeniu, schimbă URL-ul absolut
      const url = "/sendmail.php"

      const res = await fetch(url, { method: "POST", body: fd })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const data = await res.json().catch(() => ({}))
      if (!data || data.ok !== true) throw new Error("Răspuns neașteptat de la server.")

      setFormState({ isSubmitting: false, isSuccess: true, isError: false, errorMsg: "" })

      const selectedService =
        formData.serviceType === "alte-servicii"
          ? formData.otherService || "altele"
          : serviceOptions.find((s) => s.value === formData.serviceType)?.label || "n/a"

      gtagSafe("event", "generate_lead", { method: "contact_form", service: selectedService })

      // Reset după câteva secunde
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
        setTouched({})
        setErrors({})
        setFormState({ isSubmitting: false, isSuccess: false, isError: false, errorMsg: "" })
      }, 3500)
    } catch (err) {
      console.error(err)
      const msg =
        err?.message?.startsWith("HTTP ")
          ? "Serverul a întâmpinat o problemă. Încearcă din nou mai târziu."
          : "Nu am putut trimite cererea. Verifică conexiunea și reîncearcă."
      setFormState({ isSubmitting: false, isSuccess: false, isError: true, errorMsg: msg })
    }
  }

  // ───────────────────────── UI helpers ─────────────────────────
  const selectedServiceLabel =
    serviceOptions.find((opt) => opt.value === formData.serviceType)?.label || "Selectează un serviciu"

  const inputBase =
    "w-full px-4 pt-6 pb-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:border-transparent transition-all font-sans text-base min-h-[56px]"

  const listboxId = "serviceType-listbox"

  // ───────────────────────── Markup ─────────────────────────
  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-10 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-2 font-serif">{title}</h2>
      <p className="text-gray-600 mb-8 font-sans">{subtitle}</p>

      <form
        onSubmit={handleSubmit}
        noValidate
        aria-busy={formState.isSubmitting}
        className="flex flex-col gap-6"
      >
        {/* Nume complet */}
        <div className="relative">
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "err-fullName" : undefined}
            placeholder=" "
            className={`${inputBase} ${errors.fullName ? "border-red-400 ring-red-100" : "border-gray-300"}`}
            autoComplete="name"
            required
          />
          <label htmlFor="fullName" className="absolute left-4 top-2 text-xs font-semibold text-gray-600 font-sans">
            Nume complet <span className="text-red-500">*</span>
          </label>
          {errors.fullName && (
            <p id="err-fullName" role="alert" className="mt-1 text-sm text-red-600 font-sans">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            placeholder=" "
            className={`${inputBase} ${errors.email ? "border-red-400 ring-red-100" : "border-gray-300"}`}
            autoComplete="email"
            required
          />
          <label htmlFor="email" className="absolute left-4 top-2 text-xs font-semibold text-gray-600 font-sans">
            Email <span className="text-red-500">*</span>
          </label>
          {errors.email && (
            <p id="err-email" role="alert" className="mt-1 text-sm text-red-600 font-sans">
              {errors.email}
            </p>
          )}
        </div>

        {/* Telefon */}
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
            onBlur={handleBlur}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:border-transparent transition-all font-sans text-base min-h-[48px] ${
              errors.phone ? "border-red-400 ring-red-100" : "border-gray-300"
            }`}
            placeholder="+40 730 140 766"
            autoComplete="tel"
            inputMode="tel"
            required
          />
          {errors.phone && (
            <p id="err-phone" role="alert" className="text-sm text-red-600 font-sans">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Tip serviciu (dropdown custom) */}
        {showServiceType && (
          <div className="flex flex-col gap-2">
            <label htmlFor="serviceType" className="text-sm font-semibold text-[#0a2540] font-sans">
              {serviceTypeLabel} <span className="text-red-500">*</span>
            </label>

            <div className="relative" ref={dropdownRef}>
              <button
                ref={buttonRef}
                id="serviceType"
                type="button"
                onClick={() => setIsDropdownOpen((v) => !v)}
                className={`w-full px-4 py-3.5 pr-12 border-2 rounded-lg focus:outline-none transition-all duration-300 font-sans text-base min-h-[56px] bg-white text-left flex items-center justify-between ${
                  isDropdownOpen
                    ? "border-[#3eb89a] ring-2 ring-[#3eb89a]/20"
                    : errors.serviceType
                    ? "border-red-400"
                    : "border-[#3eb89a] hover:border-[#35a085] hover:shadow-md"
                } ${!formData.serviceType ? "text-gray-400" : "text-[#0a2540]"}`}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                aria-controls={isDropdownOpen ? listboxId : undefined}
                aria-invalid={!!errors.serviceType}
                aria-describedby={errors.serviceType ? "err-serviceType" : undefined}
              >
                <span>{selectedServiceLabel}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-[#0a2540] transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isDropdownOpen && (
                <div
                  id={listboxId}
                  role="listbox"
                  tabIndex={-1}
                  ref={listboxRef}
                  aria-activedescendant={
                    activeIndex >= 0 ? `service-option-${serviceOptions[activeIndex].value || "empty"}` : undefined
                  }
                  onKeyDown={onListboxKeyDown}
                  className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl overflow-auto max-h-72 focus:outline-none"
                >
                  <div className="py-1">
                    {serviceOptions.map((option, idx) => {
                      const id = `service-option-${option.value || "empty"}`
                      const isActive = idx === activeIndex
                      const isSelected = formData.serviceType === option.value
                      const common =
                        "w-full px-4 py-3 text-left text-base font-sans transition-colors duration-150 focus:outline-none"

                      return (
                        <button
                          key={option.value + idx}
                          id={id}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onMouseEnter={() => !option.disabled && setActiveIndex(idx)}
                          onClick={() => !option.disabled && handleServiceSelect(option.value)}
                          disabled={option.disabled}
                          className={
                            option.disabled
                              ? `${common} text-gray-400 cursor-not-allowed bg-white`
                              : isActive
                              ? `${common} bg-gray-100 text-[#0a2540]`
                              : isSelected
                              ? `${common} bg-[#B3E5FC] text-[#0a2540] font-medium`
                              : `${common} text-[#0a2540] hover:bg-gray-50`
                          }
                        >
                          {option.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {errors.serviceType && (
              <p id="err-serviceType" role="alert" className="text-sm text-red-600 font-sans">
                {errors.serviceType}
              </p>
            )}
          </div>
        )}

        {/* Câmp pentru “Altă solicitare” */}
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
              onBlur={handleBlur}
              aria-invalid={!!errors.otherService}
              aria-describedby={errors.otherService ? "err-otherService" : undefined}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:border-transparent transition-all font-sans text-base min-h-[44px] ${
                errors.otherService ? "border-red-400 ring-red-100" : "border-gray-300"
              }`}
              placeholder="Descrie serviciul dorit"
              required
            />
            {errors.otherService && (
              <p id="err-otherService" role="alert" className="text-sm text-red-600 font-sans">
                {errors.otherService}
              </p>
            )}
          </div>
        )}

        {/* Mesaj */}
        <div className="flex flex-col gap-2">
          <label htmlFor="notes" className="text-sm font-semibold text-[#0a2540] font-sans">
            Mesaj
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:border-transparent transition-all font-sans text-base resize-none"
            placeholder="Adaugă detalii suplimentare..."
          />
        </div>

        {/* GDPR */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="gdprConsent"
            name="gdprConsent"
            checked={formData.gdprConsent}
            onChange={handleInputChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.gdprConsent}
            aria-describedby={errors.gdprConsent ? "err-gdpr" : undefined}
            required
            className={`mt-1 w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-[#3eb89a] text-[#3eb89a] flex-shrink-0 ${
              errors.gdprConsent ? "ring-red-200" : ""
            }`}
          />
          <label htmlFor="gdprConsent" className="text-sm text-gray-700 font-sans">
            Sunt de acord cu{" "}
            <a href="/politica-confidentialitate" className="text-[#3eb89a] hover:underline">
              Politica de confidențialitate
            </a>
            . <span className="text-red-500">*</span>
          </label>
        </div>
        {errors.gdprConsent && (
          <p id="err-gdpr" role="alert" className="text-sm text-red-600 font-sans -mt-2">
            {errors.gdprConsent}
          </p>
        )}

        {/* Honeypot anti-spam (ascuns) */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleInputChange}
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-full bg-gradient-to-r from-[#3eb89a] to-[#35a085] hover:from-[#35a085] hover:to-[#2d8f75] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-sans min-h-[56px]"
        >
          {formState.isSubmitting ? "Se trimite..." : "Trimite cererea"}
        </button>

        {/* Status alerts */}
        <div aria-live="polite" className="space-y-3">
          {formState.isSuccess && (
            <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg" role="status">
              <CheckCircle2Icon className="w-5 h-5 text-green-600 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-green-800 font-sans">Am primit cererea. Te contactăm în curând.</p>
            </div>
          )}
          {formState.isError && (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
              <span className="text-red-600 text-lg flex-shrink-0" aria-hidden="true">⚠️</span>
              <p className="text-sm text-red-800 font-sans">
                {formState.errorMsg || "Verifică datele și încearcă din nou."}
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
