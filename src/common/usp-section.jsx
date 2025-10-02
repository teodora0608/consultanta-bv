"use client"

import { motion } from "framer-motion"
import { Zap, DollarSign, Smartphone, Shield, ArrowRight } from "lucide-react"

export default function USPSection() {
  const steps = [
    {
      number: "1",
      title: "Completezi formularul",
      description: "Simplu și rapid, în câteva minute",
      color: "text-[#3eb89a]",
    },
    {
      number: "2",
      title: "Te contactăm în mai puțin de 2 ore",
      description: "Răspuns rapid și personalizat",
      color: "text-[#3eb89a]",
    },
    {
      number: "3",
      title: "Primești soluția juridică",
      description: "Clară, completă și profesională",
      color: "text-[#3eb89a]",
    },
  ]

  const usps = [
    {
      icon: Zap,
      title: "Rapid",
      description: "Documente pregătite în 3–5 zile lucrătoare",
    },
    {
      icon: DollarSign,
      title: "Transparent",
      description: "Tarife fixe, comunicate din start, fără surprize",
    },
    {
      icon: Smartphone,
      title: "Digital",
      description: "Procese 100% online, de oriunde te afli",
    },
    {
      icon: Shield,
      title: "Sigur",
      description: "Reprezentare completă și confidențialitate garantată",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Why section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0a2540]">De ce consultantabv.ro?</h2>
          <p className="text-lg text-[#0a2540]/70 max-w-3xl mx-auto">
            Combinăm expertiza juridică cu tehnologia pentru a-ți oferi servicii de calitate superioară
          </p>
        </motion.div>

        {/* 3-step process */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className={`text-5xl font-bold mb-4 ${step.color}`}>{step.number}</div>
                <h3 className="text-xl font-bold mb-3 text-[#0a2540]">{step.title}</h3>
                <p className="text-[#0a2540]/70">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-[#3eb89a]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* USP cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp, index) => {
            const Icon = usp.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-[#1a3d52] text-white p-8 hover:bg-[#234a61] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#3eb89a] transition-colors duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{usp.title}</h3>
                <p className="text-white/80 leading-relaxed">{usp.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
