// src/common/faq-section.jsx
"use client"

import { useState, useMemo } from "react"
import { ChevronDownIcon } from "../icons"
import JsonLd from "../components/JsonLd"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  const faqs = [
    { question: "În cât timp primesc soluția?",
      answer: "Primești un răspuns inițial în mai puțin de 24 de ore, iar un plan complet în 24–48h. Documentele finale sunt pregătite în 3–5 zile lucrătoare." },
    { question: "Cât costă serviciile?",
      answer: "Lucrăm cu tarife fixe, comunicate transparent din start. Nu există costuri ascunse sau surprize neplăcute." },
    { question: "Se poate rezolva totul online?",
      answer: "Da, majoritatea serviciilor noastre sunt 100% online. Folosim semnătură digitală și platforme securizate pentru confort maxim." },
    { question: "Ce acte am nevoie?",
      answer: "Îți trimitem o listă clară cu documentele necesare pentru fiecare serviciu. Te ghidăm pas cu pas pentru completare corectă." },
    { question: "Pot primi o consultanță gratuită?",
      answer: "Da, oferim un răspuns inițial gratuit în mai puțin de 2 ore. Îți analizăm situația și îți oferim o primă orientare fără cost." },
  ]

  // JSON-LD pentru rich results
  const faqLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }), [faqs])

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-12 md:py-16 bg-white"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <JsonLd data={faqLd} />

      <div className="page-container max-w-4xl">
        <div className="text-center mb-8">
          {/* titlu mai mic + balans + anti-widow */}
          <h2
            id="faq-heading"
            className="no-widow font-serif font-bold text-[#0a2540] leading-tight
                       text-[clamp(1.25rem,1.2vw+0.9rem,1.8rem)]"
          >
            Întrebări frecvente
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i
            return (
              <div
                key={i}
                className="rounded-lg overflow-hidden border border-gray-100"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left py-4 px-5 bg-gray-50 hover:bg-gray-100
                             flex justify-between items-center transition-colors duration-200
                             focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:ring-inset"
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span
                    id={`faq-question-${i}`}
                    className="no-widow font-serif font-semibold text-[#0a2540] pr-6
                               leading-snug [text-wrap:balance]
                               text-[clamp(1rem,0.6vw+0.85rem,1.0625rem)]"
                    itemProp="name"
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

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`faq-panel transition-[max-height,opacity] duration-300 ease-in-out ${
                    open ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden bg-white border-t border-gray-100`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    className="px-5 py-3 text-gray-600 font-sans
                               leading-7 text-[clamp(0.9rem,0.5vw+0.8rem,1rem)]"
                    itemProp="text"
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .transition-[max-height,opacity] { transition: none !important; }
        }
      `}</style>
    </section>
  )
}
