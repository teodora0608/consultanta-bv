// src/pages/politica-cookies.jsx
"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function PoliticaCookies() {
  useEffect(() => {
    document.title = "Politica privind modulele cookie | Consultant ABV"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Politica privind modulele cookie a Consultant ABV. Află cum folosim cookie-urile pentru a îmbunătăți experiența ta pe site.",
      )
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0a2540 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#3eb89a] mb-3 sm:mb-4">
            Document legal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#0a2540] mb-4 sm:mb-6 leading-tight">
            Politica privind modulele cookie
          </h1>
          {/* Decorative line */}
          <div className="mx-auto w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-[#3eb89a] to-transparent mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">
            Află cum folosim cookie-urile pentru a îmbunătăți experiența ta pe site și pentru a analiza traficul în mod
            anonim.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 lg:p-12">
          <p className="mb-8 sm:mb-10 text-gray-700 leading-relaxed font-sans text-base sm:text-lg">
            Prezenta Politică privind modulele cookie explică modul în care{" "}
            <strong className="text-[#0a2540]">consultantabv.ro</strong> utilizează cookie-uri și tehnologii similare
            pentru a asigura funcționarea corectă a site-ului, pentru a îmbunătăți experiența utilizatorilor și, dacă
            este cazul, pentru a analiza traficul în mod anonim prin Google Analytics.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]">
            1. Ce sunt cookie-urile?
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Cookie-urile sunt fișiere mici de text care sunt salvate pe dispozitivul tău atunci când vizitezi un site
            web. Acestea permit site-ului să rețină acțiunile și preferințele tale (precum limbă, date de logare sau
            opțiuni de confidențialitate) pe o perioadă de timp, pentru a-ți oferi o experiență mai personalizată.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]">
            2. Tipuri de cookie-uri folosite
          </h2>
          <ul className="list-none ml-0 text-gray-700 space-y-3 sm:space-y-4 font-sans text-base sm:text-lg">
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              <strong className="text-[#0a2540]">Cookie-uri esențiale</strong> – necesare pentru funcționarea corectă a
              site-ului. Acestea nu pot fi dezactivate din sistemele noastre.
            </li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              <strong className="text-[#0a2540]">Cookie-uri de analiză (Google Analytics 4)</strong> – utilizate doar cu
              acordul tău expres, pentru a colecta informații anonime despre modul în care este utilizat site-ul (număr
              de vizitatori, pagini vizitate etc.). Datele sunt agregate și nu permit identificarea personală.
            </li>
          </ul>

          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]">
            3. Cum controlăm cookie-urile
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            La prima vizită pe site, vei vedea un banner prin care poți alege dacă accepți sau refuzi folosirea
            cookie-urilor opționale. Poți modifica oricând alegerea ta ștergând cookie-urile din browser și reîncărcând
            pagina. Site-ul va continua să funcționeze normal chiar dacă refuzi cookie-urile neesențiale.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]">
            4. Cookie-uri de la terți
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Folosim Google Analytics 4 pentru a analiza traficul și performanța site-ului. Acest serviciu este oferit de
            Google Ireland Ltd. și este configurat astfel încât adresele IP să fie anonimizate. Informațiile colectate
            pot fi transmise și stocate de Google pe servere din afara UE. Pentru mai multe informații, poți consulta
            politica de confidențialitate Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3eb89a] hover:underline font-medium break-all"
            >
              https://policies.google.com/privacy
            </a>
            .
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]">
            5. Durata de viață a cookie-urilor
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Cookie-urile esențiale sunt șterse automat atunci când închizi browserul. Cookie-urile Google Analytics pot
            rămâne active între 1 și 24 de luni, în funcție de setările Google.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]">
            6. Date de contact
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Pentru orice întrebări legate de utilizarea cookie-urilor, ne poți contacta la:
            <br />
            <strong className="text-[#0a2540]">Email:</strong>{" "}
            <a href="mailto:contact@consultantabv.ro" className="text-[#3eb89a] hover:underline break-all">
              contact@consultantabv.ro
            </a>
            <br />
            <strong className="text-[#0a2540]">Telefon:</strong>{" "}
            <a href="tel:+40123456789" className="text-[#3eb89a] hover:underline">
              +40 123 456 789
            </a>
            <br />
            <strong className="text-[#0a2540]">Adresă:</strong> Strada Nicolae Pop nr. 13, etaj 1, ap. 7, Brașov,
            România
          </p>

          <p className="text-xs sm:text-sm text-gray-500 font-sans mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
            Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
          </p>
        </div>

        {/* Back CTA */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#3eb89a] px-6 py-3 text-white font-medium shadow-sm hover:bg-[#35a085] transition-colors text-center"
          >
            Ai întrebări? Contactează-ne
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-[#0a2540] font-medium hover:border-gray-400 transition-colors text-center"
          >
            Înapoi la pagina principală
          </Link>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-6 sm:py-8 text-center text-xs sm:text-sm text-gray-500 border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Consultant ABV. Toate drepturile rezervate.</p>
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <Link to="/politica-confidentialitate" className="hover:text-[#3eb89a] transition-colors">
              Politica de confidențialitate
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/termeni-conditii" className="hover:text-[#3eb89a] transition-colors">
              Termeni și condiții
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
