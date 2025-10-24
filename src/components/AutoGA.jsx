"use client"
import { useEffect } from "react"
import { trackEvent } from "../utils/ga"

export default function AutoGA() {
  useEffect(() => {
    const handler = (e) => {
      const el = e.target.closest("[data-ga]")
      if (!el) return

      const name = el.getAttribute("data-ga")
      const label = el.getAttribute("data-ga-label") || el.textContent?.trim() || ""
      const section = el.getAttribute("data-ga-section") || ""
      const type = el.getAttribute("data-ga-type") || ""

      trackEvent(name, { label, section, type })
    }

    document.addEventListener("click", handler)
    return () => document.removeEventListener("click", handler)
  }, [])

  return null
}
