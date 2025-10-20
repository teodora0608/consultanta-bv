// src/pages/not-found.jsx
"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

// icons proprii
import { HomeIcon } from "../icons"

// SEO helper
import { setMetaTags } from "../seo/meta"

export default function NotFound() {
  useEffect(() => {
    const origin =
      (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
    const canonical = `${origin}/404`

    setMetaTags({
      title: "404 – Pagina nu a fost găsită | ConsultantaBV",
      description: "Ne pare rău, dar pagina pe care o căutați nu există sau a fost mutată.",
      canonical,
      image: `${origin}/images/og/default.jpg`,
      siteName: "ConsultantaBV",
      ogType: "website",
      robots: "noindex,nofollow", // ✅ 404 nu se indexează
      locale: "ro_RO",
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a2540] via-[#0d3a5c] to-[#0a2540] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-white/20 mb-4 font-serif">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Pagina nu a fost găsită</h2>
        <p className="text-lg text-white/80 mb-8 max-w-md mx-auto font-sans">
          Ne pare rău, dar pagina pe care o căutați nu există sau a fost mutată.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300 group font-sans"
        >
          <HomeIcon className="mr-2 h-5 w-5" />
          Înapoi la pagina principală
        </Link>
      </motion.div>
    </div>
  )
}
