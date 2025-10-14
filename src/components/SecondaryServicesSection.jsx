"use client"
import { ArrowRight } from "lucide-react"

export default function SecondaryServicesSection({
  title,
  subtitle,
  services,
  onServiceClick,
  bgColor = "bg-gray-50",
  lgCols = 2, // rămâi 2×2 la desktop
  containerMax = "", // 👈 nou: poți limita lățimea secțiunii
}) {
  const gridColsLg = lgCols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 ${gridColsLg} gap-6 auto-rows-[1fr]`
  const cardClass =
    "h-full flex flex-col p-5 rounded-xl bg-[#16475A] border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 overflow-hidden"

  return (
    <section className={`section-spacing ${bgColor}`}>
      {/* page-container + limită opțională doar pt. această secțiune */}
      <div className={`page-container ${containerMax}`}>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-3 font-serif">{title}</h2>
          <p className="text-lg text-gray-600 font-sans">{subtitle}</p>
        </div>

        <div className={gridClass}>
          {services.map((s, i) => (
            <div key={i} className="h-full">
              <div onClick={() => onServiceClick(s)} className={cardClass}>
                <div className="flex items-center gap-3 mb-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-[#3eb89a]" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-serif truncate min-w-0">{s.title}</h3>
                </div>
                <p className="text-sm text-white/80 mb-4 font-sans line-clamp-2 leading-snug">{s.summary}</p>
                <div className="text-xs text-white/70 font-sans mb-4 line-clamp-2 leading-snug">
                  <span>Acte: {s.meta.acte}</span>
                  <span className="mx-2">•</span>
                  <span>Livrabile: {s.meta.livrabile}</span>
                  <span className="mx-2">•</span>
                  <span>Durată: {s.meta.durata}</span>
                </div>
                <button className="text-white hover:text-[#3eb89a] font-medium text-sm flex items-center gap-1 font-sans mt-auto transition-colors">
                  Detalii <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
