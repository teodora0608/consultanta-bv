"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Phone, CheckCircle, Lock, MessageCircle, DollarSign } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="acasa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <picture className="absolute inset-0 w-full h-full">
        <source media="(min-width: 1024px)" srcSet="/images/hero-desktop.png" />
        <source media="(min-width: 640px)" srcSet="/images/hero-tablet.jpg" />
        <img src="/images/hero-mobile.jpg" alt="" className="w-full h-full object-cover object-center" />
      </picture>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-serif"
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085]
                       text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg
                       transition-all duration-300 group font-sans"
          >
            Solicită ofertă gratuită
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="tel:+40123456789"
            className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/30
                       text-white hover:bg-white/10 hover:border-white
                       font-semibold px-8 py-4 rounded-lg text-lg
                       transition-all duration-300 font-sans"
          >
            <Phone className="mr-2 h-5 w-5" />
            Sună acum
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:flex md:flex-nowrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-3 text-white/85 text-sm md:text-base font-sans mt-12 md:mt-16 py-0.5"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#3eb89a] flex-shrink-0" />
            <span>Răspuns &lt; 2h</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 md:h-5 md:w-5 text-[#3eb89a] flex-shrink-0" />
            <span>Confidențial</span>
          </div>
          <span className="hidden md:inline text-white/40">•</span>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-[#3eb89a] flex-shrink-0" />
            <span>Suport dedicat</span>
          </div>
          <span className="hidden md:inline text-white/40">•</span>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 md:h-5 md:w-5 text-[#3eb89a] flex-shrink-0" />
            <span>Fără costuri ascunse</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
