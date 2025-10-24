// src/common/FAQSectionUI.jsx
"use client"

import { useState, useMemo } from "react"
import { ChevronDownIcon } from "../icons"

/**
 * FAQSectionUI – componentă doar de UI/UX (fără JSON-LD, fără microdata)
 *
 * Props:
 * - faqs?: Array<{ question?: string, answer?: string, q?: string, a?: string }>
 * - title?: string (default: "Întrebări frecvente")
 * - className?: string (clase Tailwind suplimentare pentru <section>)
 */
export default function FAQSectionUI({
  faqs,
  title = "Întrebări frecvente",
  className = "",
}) {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  // fallback + normalizare de chei (acceptă question/answer sau q/a)
  const data = useMemo(() => {
    const base = faqs && faqs.length
      ? faqs
      : [
          {
            question: "În cât timp primesc soluția?",
            answer:
              "Răspuns inițial < 24h. Plan complet în 24–48h. Documente finale în 3–5 zile lucrătoare.",
          },
          {
            question: "Cât costă serviciile?",
            answer:
              "Tarife fixe, transparente, fără costuri ascunse.",
          },
          {
            question: "Se poate rezolva totul online?",
            answer:
              "Da, majoritatea serviciilor sunt 100% online. Semnătură digitală și flux securizat.",
          },
                    {
            question: "De ce acte am nevoie?",
            answer:
              "Îți trimitem o listă clară cu documentele necesare pentru fiecare serviciu. Te ghidăm pas cu pas pentru completare corectă.",
          },
                    {
            question: "Pot primi o consultanță gratuită ?",
            answer:
              "Da, oferim un răspuns inițial gratuit în mai puțin de 2 ore. Îți analizăm situația și îți oferim o primă orientare fără cost.",
          },
        ]
        

    return base.map((it) => ({
      question: it.question ?? it.q ?? "",
      answer: it.answer ?? it.a ?? "",
    }))
  }, [faqs])

  return (
    <section id="faq" className={`py-12 md:py-16 bg-white ${className}`}>
      <div className="page-container max-w-4xl">
        <div className="text-center mb-8">
          <h2
            id="faq-heading"
            className="no-widow font-serif font-bold text-[#0a2540] leading-tight
                       text-[clamp(1.25rem,1.2vw+0.9rem,1.8rem)]"
          >
            {title}
          </h2>
        </div>

        <div className="space-y-3">
          {data.map((faq, i) => {
            const open = openIndex === i
            const answerId = `faq-answer-${i}`
            const questionId = `faq-question-${i}`

            return (
              <div
                key={`${faq.question}-${i}`}
                className="rounded-lg overflow-hidden border border-gray-100"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full text-left py-4 px-5 bg-gray-50 hover:bg-gray-100
                             flex justify-between items-center transition-colors duration-200
                             focus:outline-none focus:ring-2 focus:ring-[#3eb89a] focus:ring-inset"
                  aria-expanded={open}
                  aria-controls={answerId}
                >
                  <span
                    id={questionId}
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

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
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
