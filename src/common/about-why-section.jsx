"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function AboutWhySection() {
  const team = [
    {
      name: "Diana Milotin",
      role: "CONSULTANT JURIDIC",
      description:
        "Oferă încredere și claritate la fiecare pas. Explică opțiunile pe înțelesul tău și ajunge rapid la o soluție.",
      image: "/images/diana.jpeg",
    },
    {
      name: "Teodora Croitoru",
      role: "CONSULTANT JURIDIC",
      description:
        "Găsește soluții clare chiar și în situații complexe. Te ține informat și elimină orice complicație inutilă.",
      image: "/images/teodora.jpeg",
    },
  ]

  const steps = [
    {
      number: "1",
      title: "Completează formularul",
      description: "Simplu și rapid — durează doar câteva minute.",
    },
    {
      number: "2",
      title: "Te contactăm în mai puțin de 2 ore",
      description: "Răspuns rapid și personalizat.",
    },
    {
      number: "3",
      title: "Primești soluția ta juridică",
      description: "Clară, completă și profesionistă.",
    },
  ]

  return (
    <>
      <section
        id="despre"
        className="py-16 md:py-20 bg-[radial-gradient(ellipse_at_top,_#0b2a3a_0%,_#0f3546_40%,_#0f3a4b_100%)] relative overflow-hidden"
      >
        <div className="page-container">
          <div className="max-w-5xl mx-auto text-center">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif"
            >
              Echipa noastră
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg leading-relaxed text-white/80 mb-12 font-sans max-w-3xl mx-auto"
            >
              Suntem o echipă atentă la detalii care explică lucrurile clar și te ghidează pas cu pas spre rezultat.
              Lucrăm transparent și cu grijă, ca să știi mereu unde te afli și ce urmează.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10 items-stretch mb-12">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group relative h-full"
                >
                  <div className="absolute -inset-[2px] bg-gradient-to-br from-[#3eb89a] via-[#0a2540] to-[#3eb89a] rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />

                  <div className="relative bg-white rounded-2xl p-8 h-full flex flex-col items-center text-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-[1.01]">
                    <div className="mb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={`${member.name} – Consultant juridic la Consultant ABV`}
                        className="w-30 h-30 rounded-full object-cover shadow-md"
                        width="120"
                        height="120"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <h3 className="text-xl font-serif font-semibold text-[#0a2540] mb-1">{member.name}</h3>

                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-sans">{member.role}</p>

                    <p className="text-sm text-gray-600 leading-relaxed font-sans">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="contact"
                className="inline-flex items-center justify-center bg-[#3eb89a] hover:bg-[#35a085] text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 group font-sans"
              >
                Hai să discutăm cazul tău
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="page-container">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-serif font-bold text-[#0a2540] text-center mb-10"
            >
              Cum lucrăm
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-[calc(100%+0.75rem)] text-[#3eb89a]/40">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}

                  <div className="w-10 h-10 rounded-full bg-[#3eb89a] text-white font-bold flex items-center justify-center mb-4 mx-auto text-sm">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-semibold text-[#0a2540] mb-2 font-serif">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
