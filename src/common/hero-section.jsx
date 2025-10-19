"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Phone, CheckCircle, Lock, MessageCircle, DollarSign } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

function FeatureItem({ Icon, label, tweakY = 0 }) {
  return (
    <div
      className="flex items-center justify-center lg:justify-start gap-2 text-white/90 text-sm md:text-base font-sans min-h-[44px]"
      style={{ textShadow: "0 1px 4px rgba(0,0,0,.4)" }}
    >
      {/* container fix – pătrat 20×20, fără baseline */}
      <span className="inline-flex items-center justify-center w-5 h-5 flex-shrink-0 leading-none">
        <Icon className={`block w-full h-full text-[#3eb89a] ${tweakY ? `translate-y-[${tweakY}px]` : ""}`} />
      </span>
      <span className="text-white leading-none">{label}</span>
    </div>
  )
}

export default function HeroSection() {
  const rotatingTexts = [
    "Înființare societate (SRL) în 3–5 zile",
    "Consultanță juridică pentru afaceri",
    "Închidere firmă cu datorii, reprezentare completă",
    "Găzduire sediu social – conform ONRC",
    "Înființare PFA – rapid, fără bătăi de cap",
    "Insolvență firmă – analiză & plan de acțiune",
  ]

  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setCurrentTextIndex((i) => (i + 1) % rotatingTexts.length),
      3000
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section id="acasa" className="relative isolate h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* BG image */}
      <picture className="absolute inset-0 w-full h-full">
        <source media="(min-width: 1024px)" srcSet="/images/hero-desktop.png" />
        <source media="(min-width: 640px)" srcSet="/images/hero-tablet.jpg" />
        <img
          src="/images/hero-mobile.jpg"
          alt="Hero background"
          className="w-full h-full object-cover object-center md:object-center lg:object-[right_center] select-none brightness-[0.65]"
        />
      </picture>

      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/45 via-[#0f2f3f]/55 to-[#0a2540]/70 z-[5]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,37,64,0.4)_100%)] z-[6]" />

      {/* content */}
      <div className="page-container relative z-10 text-center py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-serif"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,.3)" }}
        >
          Soluții juridice rapide și sigure
        </motion.h1>

        <div className="h-[90px] md:h-[70px] flex items-center justify-center mb-16">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto font-sans font-medium"
            >
              {rotatingTexts[currentTextIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col lg:flex-row gap-4 justify-center items-stretch lg:items-center mb-10"
        >
          <Link
            to="/contact"
            className="w-full lg:w-auto inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300 group font-sans min-h-[44px]"
          >
            Solicită ofertă gratuită
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="tel:+40123456789"
            className="w-full lg:w-auto inline-flex items-center justify-center border-2 border-white/30 bg-white/0 text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 font-sans min-h-[44px]"
          >
            <Phone className="mr-2 h-5 w-5" />
            Sună acum
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-w-3xl mx-auto mt-12 lg:mt-16"
        >
          <FeatureItem Icon={CheckCircle}   label="Răspuns < 24h" />
          <FeatureItem Icon={Lock}          label="Securitate juridică" />
          <FeatureItem Icon={MessageCircle} label="Asistență rapidă" />
          {/* DollarSign – ușor ridicat optic cu 1px */}
          <FeatureItem Icon={DollarSign}    label="Prețuri corecte" tweakY={-1} />
        </motion.div>
      </div>
    </section>
  )
}
