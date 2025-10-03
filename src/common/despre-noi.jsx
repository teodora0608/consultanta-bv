"use client"

import { motion } from "framer-motion"

export default function DespreNoi() {
  return (
    <section id="despre" className="section-spacing bg-gray-50 relative overflow-hidden">
      <div className="page-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0a2540] font-serif">Despre Noi</h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#0a2540]/70 font-sans">
            La consultantabv.ro îmbinăm expertiza juridică cu soluții digitale moderne pentru a-ți oferi servicii rapide
            și clare, fără birocrație inutilă. Suntem partenerul de încredere al antreprenorilor care își doresc
            rezultate concrete și protecție juridică solidă, la cele mai înalte standarde de profesionalism.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
