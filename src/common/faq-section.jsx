// src/components/FAQSection.jsx
"use client"

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

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  // JSON-LD pentru rich results
  const faqLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
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
      <JsonLd data={faqLd} />

      <div className="page-container max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-[#0a2540] font-serif">
            Întrebări frecvente
          </h2>
        </div>

        <div className="space-y-4">
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
                  className="w-full text-left py-5 px-6 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:ring-inset"
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-lg font-semibold text-[#0a2540] pr-8 font-serif" itemProp="name">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-[#3eb89a] flex-shrink-0 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Panoul cu răspuns: animat doar cu CSS (max-height) */}
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`faq-panel transition-[max-height,opacity] duration-300 ease-in-out ${
                    open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden bg-white`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-6 py-4 text-gray-600 text-base leading-relaxed font-sans" itemProp="text">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Reduce motion respectat */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .transition-[max-height,opacity] { transition: none !important; }
        }
      `}</style>
    </section>
  )
}
