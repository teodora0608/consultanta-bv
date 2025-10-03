"use client"

import { Building2, Scale, XCircle, Home, User, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Building2,
    title: "Înființare SRL",
    description: "Înființăm societatea ta cu răspundere limitată rapid și eficient, cu toate documentele necesare.",
    featured: true,
  },
  {
    icon: Scale,
    title: "Consultanță juridică",
    description: "Consultanță juridică personalizată pentru afacerea ta, cu răspunsuri clare și soluții practice.",
    featured: false,
  },
  {
    icon: XCircle,
    title: "Închidere firmă cu datorii",
    description: "Te ajutăm să închizi firma în mod legal, chiar și în situații complexe cu datorii.",
    featured: false,
  },
  {
    icon: Home,
    title: "Găzduire sediu social",
    description: "Oferim servicii de sediu social pentru firma ta, cu toate avizele necesare.",
    featured: false,
  },
  {
    icon: User,
    title: "Înființare PFA",
    description: "Înregistrare rapidă ca persoană fizică autorizată, cu asistență completă.",
    featured: false,
  },
  {
    icon: AlertTriangle,
    title: "Insolvență firmă",
    description: "Asistență juridică completă în procedurile de insolvență și reorganizare.",
    featured: false,
  },
]

function ServicesSection() {
  return (
    <section id="servicii" className="section-spacing bg-white relative overflow-hidden">
      <div className="page-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-[#0B3556] to-[#36A87C] bg-clip-text text-transparent font-serif">
            Servicii juridice complete
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-pretty leading-relaxed text-[rgba(11,53,86,1)] font-sans">
            De la înființare la consultanță și insolvență – echipa noastră te susține în fiecare etapă
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-[#1a3a52] backdrop-blur-sm border-2 border-[#36A87C]/30 hover:border-[#36A87C] transition-all duration-500 hover:shadow-2xl hover:shadow-[#36A87C]/20 cursor-pointer">
                <div className="mb-6">
                  <div className="p-4 rounded-xl w-fit transition-all duration-500 group-hover:scale-110 bg-white/5 border-2 border-white/10 group-hover:bg-[#36A87C]/20 group-hover:border-[#36A87C]">
                    <service.icon
                      className="h-8 w-8 transition-colors duration-500 text-white group-hover:text-[#36A87C]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 text-white group-hover:text-[#36A87C] font-serif">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-white/70 group-hover:text-white/90 transition-colors duration-300 font-sans">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
