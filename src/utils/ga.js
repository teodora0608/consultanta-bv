// src/utils/ga.js
export function canSend() {
  return (
    localStorage.getItem("cookieConsent") === "accepted" &&
    typeof window.gtag === "function"
  )
}

export function trackEvent(name, params = {}) {
  if (!canSend()) return
  window.gtag("event", name, {
    page_path: window.location.pathname,
    page_location: window.location.href,
    ...params,
  })
}