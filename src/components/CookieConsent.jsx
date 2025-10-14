"use client"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const GA_ID = "G-XXXXXXX" // ← pune ID-ul tău GA4

function loadGA() {
  if (!GA_ID) return
  const s = document.createElement("script")
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  function gtag(){ window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag("js", new Date())
  gtag("config", GA_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    anonymize_ip: true,
  })
}

export default function CookieConsent() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // afișează bannerul DOAR pe homepage
    if (pathname !== "/") {
      setVisible(false)
      return
    }

    const consent = localStorage.getItem("cookieConsent")
    if (consent === "accepted") {
      loadGA()         // dacă a acceptat anterior, încarcă GA direct (dar tot DOAR pe homepage)
      setVisible(false)
    } else if (consent === "declined") {
      setVisible(false)
    } else {
      setVisible(true) // nu a ales încă → arată bannerul pe homepage
    }
  }, [pathname])

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setVisible(false)
    loadGA()
  }

  const decline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="text-sm text-white/90 max-w-2xl">
          Folosim cookie-uri doar pentru statistici (Google Analytics 4). Fără publicitate, fără profilare.
          Detalii în <a href="/politica-cookies" className="underline hover:text-teal-300">Politica Cookies</a>.
        </p>
        <div className="flex gap-3">
          <button onClick={decline} className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-lg">
            Refuz
          </button>
          <button onClick={accept} className="px-4 py-2 text-sm bg-teal-500 hover:bg-teal-600 rounded-lg">
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
