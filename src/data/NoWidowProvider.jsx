"use client"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function noWidowText(txt) {
  if (!txt) return txt
  return txt.replace(/\s+([^\s]+)\s*$/, "\u00A0$1") // ultimul spațiu -> nbsp
}

export default function NoWidowProvider() {
  const location = useLocation()

  useEffect(() => {
    let raf = requestAnimationFrame(() => {
      const selector = "h1, h2, h3"
      document.querySelectorAll(selector).forEach((el) => {
        if (el.dataset.nowidowApplied === "1") return
        el.dataset.nowidowApplied = "1"
        el.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.nodeValue = noWidowText(node.nodeValue)
          }
        })
      })
    })
    return () => cancelAnimationFrame(raf)
  }, [location.pathname]) // rulează doar când se schimbă ruta

  return null
}
