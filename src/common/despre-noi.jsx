"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function DespreNoi() {
  const consultants = [
    {
      name: "Diana Popescu",
      role: "Legal Consultant",
      blurb: "Provides confidence and clarity every step of the way.",
      image: "/images/diana.jpeg",
    },
    {
      name: "Teodora Ionescu",
      role: "Legal Consultant",
      blurb: "Finds clear solutions even in complex situations.",
      image: "/images/teodora.jpeg",
    },
  ]

  return (
    <section
      id="despre"
      className="section-spacing bg-gradient-to-b from-[#0f2f3f] to-[#16475A] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h1v1H0V0zm40 40h1v1h-1v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="page-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif">Our Team</h2>

          <p className="text-lg md:text-xl leading-relaxed text-white/80 font-sans max-w-3xl mx-auto">
            We're a small, detail-oriented team that explains things clearly and guides you step by step toward results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {consultants.map((consultant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center border-2 border-transparent hover:scale-105">
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0a2540] via-[#3eb89a] to-[#0a2540] opacity-30 group-hover:opacity-60 transition-opacity duration-500 -z-10 blur-sm" />

                <div className="relative mb-6">
                  {/* Gradient ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#0a2540] via-[#3eb89a] to-[#0a2540] opacity-70 blur-sm" />
                  <div className="relative rounded-full overflow-hidden w-32 h-32 border-4 border-white shadow-xl">
                    <img
                      src={consultant.image || "/placeholder.svg"}
                      alt={consultant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-[#0a2540] font-serif">{consultant.name}</h3>

                <p className="text-sm text-[#0a2540]/50 font-sans mb-4 uppercase tracking-wide">{consultant.role}</p>

                <p className="text-base text-[#0a2540]/70 font-sans leading-relaxed">{consultant.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-10 py-4 rounded-lg text-lg shadow-xl transition-all duration-300 group font-sans"
          >
            Let's discuss your case
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
