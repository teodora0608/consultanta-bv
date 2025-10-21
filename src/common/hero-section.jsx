// src/components/hero-section.jsx
"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRightIcon, PhoneIcon, CheckCircleIcon, LockIcon, MessageCircleIcon, DollarSignIcon } from "../icons"

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
    const id = setInterval(() => {
      setCurrentTextIndex((i) => (i + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="acasa"
      aria-labelledby="hero-heading"
      className="relative isolate h-screen w-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image optimizată */}
      <picture className="absolute inset-0 w-full h-full">
        <source media="(min-width: 1024px)" srcSet="/images/hero-desktop.webp" type="image/webp" />
        <source media="(min-width: 640px)" srcSet="/images/hero-tablet.webp" type="image/webp" />
        <img
          src="/images/hero-mobile.webp"
          alt="Servicii juridice și înființare firme online în Brașov"
          className="w-full h-full object-cover object-center lg:object-[right_center] select-none brightness-[0.65]"
          decoding="async"
          fetchPriority="high"
          width="1200"      /* rezervă aspect ratio -> mai fluid pentru layout */
          height="800"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/45 via-[#0f2f3f]/55 to-[#0a2540]/70 z-[5]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,37,64,0.4)_100%)] z-[6]" />

      {/* Conținut */}
      <div className="page-container relative z-10 text-center py-32">
        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-serif opacity-0 translate-y-3 animate-[fadeInUp_.6s_ease-out_forwards]"
          style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}
        >
          Soluții juridice rapide și sigure
        </h1>

        {/* Text rotativ (fără Framer) */}
        <div className="h-[90px] md:h-[70px] flex items-center justify-center mb-16">
          <p
            key={currentTextIndex}
            className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto font-sans font-medium opacity-0 translate-y-2 animate-[fadeIn_.5s_ease-out_forwards]"
          >
            {rotatingTexts[currentTextIndex]}
          </p>
        </div>

        {/* CTA-uri */}
        <div className="opacity-0 translate-y-3 animate-[fadeInUp_.6s_.2s_ease-out_forwards] flex flex-col lg:flex-row gap-4 justify-center items-stretch lg:items-center mb-10">
          <Link
            to="/contact"
            className="w-full lg:w-auto inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085]
                       text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg
                       transition-all duration-300 group font-sans min-h-[44px]"
          >
            Solicită ofertă gratuită
            <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="tel:+40730140766"
            className="w-full lg:w-auto inline-flex items-center justify-center border-2 border-white/30
                       bg-white/0 text-white hover:bg-white/10 hover:border-white
                       font-semibold px-8 py-4 rounded-lg text-lg
                       transition-all duration-300 font-sans min-h-[44px]"
          >
            <PhoneIcon className="mr-2 h-5 w-5" />
            Sună acum
          </a>
        </div>

        {/* Beneficii */}
        <div className="opacity-0 translate-y-3 animate-[fadeInUp_.6s_.35s_ease-out_forwards] grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 max-w-4xl mx-auto px-4 justify-items-center lg:justify-items-start">
          {[
            { icon: MessageCircleIcon, text: "Asistență rapidă" },
            { icon: CheckCircleIcon, text: "Răspuns < 24h" },
            { icon: LockIcon, text: "Securitate juridică" },
            { icon: DollarSignIcon, text: "Prețuri corecte" },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex h-11 items-center justify-center lg:justify-start gap-2 text-white/90">
              <Icon className="w-5 h-5 block text-[#3eb89a]" />
              <span className="text-xs sm:text-sm md:text-base font-medium leading-none text-center lg:text-left">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animations (CSS) */}
      <style>{`
        @keyframes fadeInUp { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }
        @keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
        .animate-[fadeInUp_.6s_ease-out_forwards] { animation: fadeInUp .6s ease-out forwards; }
        .animate-[fadeIn_.5s_ease-out_forwards]   { animation: fadeIn .5s ease-out forwards; }
        .animate-[fadeInUp_.6s_.2s_ease-out_forwards] { animation: fadeInUp .6s .2s ease-out forwards; }
        .animate-[fadeInUp_.6s_.35s_ease-out_forwards]{ animation: fadeInUp .6s .35s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-"] { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  )
}
