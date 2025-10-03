"use client"

import { ArrowRight, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="section-spacing bg-gradient-to-br from-[#0a2540] via-[#0d3a52] to-[#1a5c6b] relative overflow-hidden"
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h1v1H0V0zm40 40h1v1h-1v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="page-container relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif"
        >
          Ai nevoie de consultanță juridică?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-sans"
        >
          Spune-ne despre situația ta și primești un răspuns personalizat în mai puțin de 2 ore
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-4 justify-center items-stretch lg:items-center"
        >
          <a
            href="#contact"
            className="w-full lg:w-auto inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-xl transition-all duration-300 group font-sans min-h-[44px]"
          >
            Solicită consultație gratuită
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="w-full lg:w-auto inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300 font-sans min-h-[44px]"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Trimite mesaj WhatsApp
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-white/70 text-sm font-sans"
        >
          Peste 300 de clienți mulțumiți ne-au acordat încrederea lor
        </motion.p>
      </div>
    </section>
  )
}
