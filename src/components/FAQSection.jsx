"use client"

import { useState } from "react"
import { ChevronDownIcon } from "../icons"

export default function FAQSection({ faqs, title = "Întrebări frecvente", className = "" }) {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i)

  const defaultFaqs = [
    {
      question: "În cât timp primesc soluția?",
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
    <section id="faq" className={`py-12 md:py-16 bg-white ${className}`}>
      <div className="page-container max-w-4xl">
        <div className="text-center mb-8">
          {/* Titlu mai mic și fluid */}
          <h2 className="no-widow font-serif font-bold text-[#0a2540] leading-tight
                         text-[clamp(1.25rem,1.2vw+0.9rem,1.8rem)]">
            {title}
          </h2>
        </div>

        <div className="space-y-3">
          {data.map((faq, i) => {
            const open = openIndex === i
            return (
              <div key={i} className="rounded-lg overflow-hidden border border-gray-100">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full text-left py-4 px-5 bg-gray-50 hover:bg-gray-100
                             flex justify-between items-center transition-colors duration-200
                             focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:ring-inset"
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                >
                  {/* Întrebare: mai mică, balansată, anti-widow */}
                  <span
                    id={`faq-question-${i}`}
                    className="no-widow font-serif font-semibold text-[#0a2540] pr-6
                               leading-snug [text-wrap:balance]
                               text-[clamp(1rem,0.6vw+0.85rem,1.0625rem)]"
                  >
                    {faq.question}
                  </span>

                  <ChevronDownIcon
                    className={`h-4 w-4 text-[#3eb89a] flex-shrink-0 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Răspuns: font mai mic și mai strâns */}
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`faq-panel transition-[max-height,opacity] duration-300 ease-in-out ${
                    open ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden bg-white border-t border-gray-100`}
                >
                  <div
                    className="px-5 py-3 text-gray-600 font-sans
                               leading-7 text-[clamp(0.9rem,0.5vw+0.8rem,1rem)]"
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Respectă prefers-reduced-motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .transition-[max-height,opacity] { transition: none !important; }
        }
      `}</style>
    </section>
  )
}
