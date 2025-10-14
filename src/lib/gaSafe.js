// src/lib/gaSafe.js
export function gtagSafe(...args) {
  const consent = localStorage.getItem("cookieConsent")
  if (consent === "accepted" && typeof window.gtag === "function") {
    window.gtag(...args)
  }
}
