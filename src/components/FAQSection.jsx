"use client"

import { useState } from "react"
import { ChevronDownIcon } from "../icons" // ✅ din icons.tsx

export default function FAQSection({ faqs, title = "Întrebări frecvente", className = "" }) {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i)

  const defaultFaqs = [
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
  ]

  const data = faqs || defaultFaqs

  return (
    <section id="faq" className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="page-container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] font-serif">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {data.map((faq, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full text-left py-5 px-6 bg-gray-50 hover:bg-gray-100 rounded-lg flex justify-between items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:ring-inset"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-lg font-semibold text-[#0a2540] pr-8 font-serif">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-[#3eb89a] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-6 py-4 text-gray-600 text-base leading-relaxed font-sans bg-white border-t border-gray-100"
                  style={{ animation: "slideDown 0.3s ease-out" }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 500px; }
        }
      `}</style>
    </section>
  )
}
