"use client"

import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

function waitForGtag(timeoutMs = 3000) {
  return new Promise((resolve) => {
    const start = Date.now()
    const tick = () => {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        resolve(true)
      } else if (Date.now() - start >= timeoutMs) {
        resolve(false)
      } else {
        requestAnimationFrame(tick)
      }
    }
    tick()
  })
}

export default function GAReporter() {
  const { pathname } = useLocation()
  const lastPathRef = useRef(null)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (consent !== "accepted") return

    if (lastPathRef.current === pathname) return
    lastPathRef.current = pathname

    ;(async () => {
      const ok = await waitForGtag()
      if (!ok) return

      window.gtag("event", "page_view", {
        page_title: document.title || "",
        page_location: window.location.href,
        page_path: pathname,
      })

      if (import.meta.env.DEV) {
        console.log("[GA] page_view →", pathname)
      }
    })()
  }, [pathname])

  return null
}
