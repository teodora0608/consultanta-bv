"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useMemo } from "react"
import { ChevronDownIcon } from "../icons"
import JsonLd from "../components/JsonLd"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Cât durează până primesc soluția?",
      answer:
        "Primești un răspuns inițial în mai puțin de 24 de ore, iar un plan complet în 24–48h. Documentele finale sunt pregătite în 3–5 zile lucrătoare.",
    },
    {
      question: "Cât costă serviciile?",
      answer:
        "Lucrăm cu tarife fixe, comunicate transparent din start. Nu există costuri ascunse sau surprize neplăcute.",
    },
    {
      question: "Se poate rezolva totul online?",
      answer:
        "Da, majoritatea serviciilor noastre sunt 100% online. Folosim semnătură digitală și platforme securizate pentru confort maxim.",
    },
    {
      question: "Ce acte am nevoie?",
      answer:
        "Îți trimitem o listă clară cu documentele necesare pentru fiecare serviciu. Te ghidăm pas cu pas pentru completare corectă.",
    },
    {
      question: "Pot primi o consultanță gratuită?",
      answer:
        "Da, oferim un răspuns inițial gratuit în mai puțin de 2 ore. Îți analizăm situația și îți oferim o primă orientare fără cost.",
    },
  ]

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i)

  // ✅ JSON-LD (FAQPage)
  const faqLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    }),
    [faqs]
  )

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 md:py-20 bg-white"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* JSON-LD pentru rich results */}
      <JsonLd data={faqLd} />

      <div className="page-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-[#0a2540] font-serif">
            Întrebări frecvente
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full text-left py-5 px-6 bg-gray-50 hover:bg-gray-100 rounded-lg flex justify-between items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:ring-inset"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-lg font-semibold text-[#0a2540] pr-8 font-serif" itemProp="name">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-[#3eb89a] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div className="px-6 py-4 text-gray-600 text-base leading-relaxed font-sans" itemProp="text">
                      {faq.answer}
                    </div>
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
