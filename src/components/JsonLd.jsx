// src/components/JsonLd.jsx
import React from "react"

/**
 * Renderizează JSON-LD valid (schema.org) într-un <script type="application/ld+json">,
 * evitând cicluri și valori non-serializabile (funcții, elemente React, noduri DOM).
 * Acceptă obiect sau array de obiecte.
 */
export default function JsonLd({ data }) {
  if (!data) return null

  const arr = Array.isArray(data) ? data : [data]
  const clean = arr.filter(Boolean)

  const json = safeStringify(clean, 2)
  if (!json) return null

  return (
    <script
      key={Array.isArray(data) ? "jsonld-multi" : "jsonld-single"}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}

/**
 * JSON.stringify “safe”:
 *  - taie ciclurile (WeakSet)
 *  - exclude funcții, elemente React (val.$$typeof), noduri DOM și Symbol
 *  - lasă doar tipuri JSON-valid
 */
function safeStringify(value, space = 0) {
  const seen = new WeakSet()

  try {
    return JSON.stringify(
      value,
      (_key, val) => {
        // elimină funcții și symbol
        if (typeof val === "function" || typeof val === "symbol") return undefined

        // elimină elemente React (au $$typeof)
        if (val && typeof val === "object" && val.$$typeof) return undefined

        // elimină noduri DOM dacă există în runtime
        if (
          typeof Element !== "undefined" &&
          val instanceof Element
        ) {
          return undefined
        }

        if (val && typeof val === "object") {
          if (seen.has(val)) return undefined // oprește ciclul
          seen.add(val)
        }

        return val
      },
      space
    )
  } catch {
    return null
  }
}
