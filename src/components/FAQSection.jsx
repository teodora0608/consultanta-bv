"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQSection({ faqs, title = "Întrebări frecvente", className = "" }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="page-container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] font-serif">{title}</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
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

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 py-4 text-gray-600 text-base leading-relaxed font-sans"
                  style={{
                    animation: "slideDown 0.3s ease-out",
                  }}
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
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }
      `}</style>
    </section>
  )
}
