"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Cât durează până primesc soluția?",
      answer:
        "Primești un răspuns inițial în mai puțin de 24 de ore, iar un plan de acțiune complet în 24–48 de ore. Documentele finale sunt pregătite în 3–5 zile lucrătoare, în funcție de complexitatea cazului.",
    },
    {
      question: "Cât costă serviciile?",
      answer:
        "Lucrăm cu tarife fixe, comunicate transparent din start. Nu există costuri ascunse sau surprize neplăcute. Îți oferim o estimare clară înainte de a începe colaborarea.",
    },
    {
      question: "Se poate rezolva totul online?",
      answer:
        "Da, majoritatea serviciilor noastre sunt 100% online. Folosim semnătură digitală și platforme securizate pentru a-ți oferi confort maxim, indiferent unde te afli.",
    },
    {
      question: "Ce acte am nevoie?",
      answer:
        "Îți trimitem o listă clară și detaliată cu documentele necesare pentru fiecare serviciu în parte. Te ghidăm pas cu pas pentru a te asigura că ai tot ce îți trebuie.",
    },
    {
      question: "Pot primi o consultanță gratuită?",
      answer:
        "Da, oferim un răspuns inițial gratuit în mai puțin de 2 ore. Îți analizăm situația și îți oferim o primă orientare fără niciun cost.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="page-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] font-serif">Întrebări frecvente</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-5 px-6 bg-gray-50 hover:bg-gray-100 rounded-lg flex justify-between items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-[#0a2540] pr-8 font-serif">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-[#3eb89a] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-600 text-base leading-relaxed font-sans">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
