"use client"

import { motion } from "framer-motion"

export default function DespreNoi() {
  const consultants = [
    {
      name: "Diana Popescu",
      role: "Consultant Juridic",
      blurb: "Oferă siguranță și încredere în fiecare pas.",
      image: "/images/diana.jpeg",
    },
    {
      name: "Teodora Ionescu",
      role: "Consultant Juridic",
      blurb:
        "Găsește soluții clare chiar și în situații dificile.",
      image: "/images/teodora.jpeg",
    },
  ]

  return (
    <section
      id="despre"
      className="section-spacing relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100/20 via-transparent to-transparent pointer-events-none" />

      <div className="page-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a2540] font-serif">Despre Noi</h2>

          {/* Decorative green line */}
          <div className="w-16 h-1 bg-[#3eb89a] mx-auto mb-6 rounded-full" />

          <p className="text-lg md:text-xl leading-relaxed text-[#0a2540]/70 font-sans">
Problemele juridice pot părea complicate. Noi le traducem în pași clari și te ghidăm până la rezultat.
Prioritatea noastră: soluții rapide, explicate pe înțelesul tău, fără birocrație inutilă.
Lucrăm transparent și cu grijă, ca tu să știi mereu unde ești și ce urmează.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {consultants.map((consultant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center border-2 border-[#3eb89a]/30 hover:border-[#3eb89a]/60">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0a2540]/10 via-[#3eb89a]/10 to-[#0a2540]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3eb89a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative mb-6">
                  {/* Gradient ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0a2540] via-[#3eb89a] to-[#0a2540] p-[3px] group-hover:p-[4px] transition-all duration-300">
                    <div className="bg-white rounded-full w-full h-full" />
                  </div>

                  {/* Photo with subtle translate on hover */}
                  <div className="relative rounded-full overflow-hidden w-32 h-32">
                    <img
                      src={consultant.image || "/placeholder.svg"}
                      alt={consultant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name - serif, bold */}
                <h3 className="text-2xl font-bold mb-2 text-[#0a2540] font-serif group-hover:text-[#3eb89a] transition-colors duration-300">
                  {consultant.name}
                </h3>

                <p className="text-sm text-[#0a2540]/50 font-sans mb-4 uppercase tracking-wide">{consultant.role}</p>

                <p className="text-base text-[#0a2540]/70 font-sans leading-relaxed">{consultant.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
