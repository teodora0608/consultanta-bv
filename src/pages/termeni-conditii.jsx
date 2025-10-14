"use client"

// src/pages/termeni-conditii.jsx
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function TermeniConditii() {
  const updated = "octombrie 2025"

  useEffect(() => {
    document.title = "Termeni și condiții | Consultant ABV"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Termeni și condiții de utilizare a site-ului Consultant ABV. Reguli de utilizare și condițiile în care prestăm serviciile noastre de consultanță.",
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
            Termeni și condiții
          </h1>
          {/* Decorative line */}
          <div className="mx-auto w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-[#3eb89a] to-transparent mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">
            Reguli de utilizare a site-ului și condițiile în care prestăm serviciile noastre de consultanță.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 lg:p-12">
          <p className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-10">
            Ultima actualizare: <span className="font-medium text-[#0a2540]">{updated}</span>
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="cine-suntem"
          >
            1. Cine suntem
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            <strong className="text-[#0a2540]">Consultant ABV</strong>, cu sediul în{" "}
            <strong>Strada Nicolae Pop nr. 13, etaj 1, ap. 7, Brașov, România</strong>, e-mail:{" "}
            <a href="mailto:contact@consultantabv.ro" className="text-[#3eb89a] hover:underline break-all">
              contact@consultantabv.ro
            </a>
            , telefon:{" "}
            <a href="tel:+40123456789" className="text-[#3eb89a] hover:underline">
              +40 123 456 789
            </a>
            , oferă servicii de <em>consultanță juridică administrativă</em>
            și operațiuni conexe (ex. pregătire documente, depuneri la ONRC/ANAF, monitorizare dosare), conform
            legislației aplicabile.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="acceptare"
          >
            2. Acceptarea termenilor
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Prin utilizarea acestui site și/sau transmiterea unei solicitări prin formular, confirmați că ați citit și
            acceptat prezentii Termeni și condiții. Aceștia pot fi modificați periodic; versiunea actualizată va fi
            publicată pe această pagină.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="servicii"
          >
            3. Servicii oferite
          </h2>
          <p className="text-gray-700 mb-4 font-sans leading-relaxed text-base sm:text-lg">
            Prin intermediul site-ului prezentăm și facilităm următoarele tipuri de servicii:
          </p>
          <ul className="list-none ml-0 text-gray-700 space-y-3 sm:space-y-3 font-sans text-base sm:text-lg mb-6">
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              consultanță juridică administrativă privind înființare, modificări și închidere firmă;
            </li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              redactare/revizuire documente (act constitutiv, hotărâri, mandate, cereri) și depuneri la ONRC/ANAF;
            </li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">obținerea de documente și avize (după caz);</li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              asistență în relația cu instituțiile publice și/sau terți, în limitele legii;
            </li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              orientare cu privire la opțiuni legale (de ex. reorganizare/insolvență), cu trimitere către profesioniști
              autorizați unde este necesar.
            </li>
          </ul>
          <p className="text-sm sm:text-base text-gray-600 bg-gray-50 border-l-4 border-[#3eb89a] p-3 sm:p-4 rounded-r-lg mb-8 sm:mb-10">
            <strong className="text-[#0a2540]">Notă:</strong> Nu prestăm activități rezervate exclusiv avocaților
            (reprezentare în instanță, asistență avocațială în fața organelor judiciare). Pentru astfel de servicii
            colaborăm, la cerere, cu avocați înscriși în Baroul României.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="comanda"
          >
            4. Solicitare, ofertă & contract
          </h2>
          <p className="text-gray-700 mb-6 font-sans leading-relaxed text-base sm:text-lg">
            Solicitările se transmit prin formularul de contact sau prin canalele noastre oficiale. După analiză, vă
            transmitem o ofertă și, dacă este cazul, contractul/înscrisul de prestări servicii. Prestarea începe după
            acceptarea ofertei și îndeplinirea condițiilor de pornire (ex. transmiterea documentelor, plata avansului –
            dacă se aplică).
          </p>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Sunteți responsabil(ă) pentru exactitatea și caracterul complet al datelor/documentelor transmise. Orice
            întârziere sau respingere cauzată de date/documente incorecte ori incomplete intră în responsabilitatea
            clientului.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="plata"
          >
            5. Plată & anulare
          </h2>
          <ul className="list-none ml-0 text-gray-700 space-y-3 sm:space-y-3 font-sans text-base sm:text-lg mb-8 sm:mb-10">
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              Plata se poate efectua prin transfer bancar/ordin de plată sau alte metode comunicate în ofertă/contract.
            </li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              Dacă renunțați după ce au fost redactate documentele solicitate, se poate reține contravaloarea muncii
              efectiv prestate (până la <strong className="text-[#0a2540]">80% din preț</strong>, în funcție de stadiu).
            </li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              Odată ce documentele au fost depuse la ONRC/ANAF sau la o altă autoritate, serviciul se consideră prestat
              și nu mai poate fi anulat.
            </li>
          </ul>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="prestare"
          >
            6. Prestarea serviciilor & termene
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Lucrăm cu diligența unui bun profesionist, comunicând transparent stadiul. Termenele prezentate în ofertă
            sunt orientative și depind de completitudinea documentelor, programul instituțiilor și alți factori externi.
            Nu garantăm soluții/termene ale autorităților.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="limitari"
          >
            7. Limitări & conformitate
          </h2>
          <ul className="list-none ml-0 text-gray-700 space-y-3 sm:space-y-3 font-sans text-base sm:text-lg mb-8 sm:mb-10">
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              Serviciile se prestează strict în limitele legii și pe baza documentelor furnizate de client.
            </li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              Recomandările noastre au caracter informativ/administrativ și nu substituie consultanța avocațială sau
              fiscală specializată atunci când este necesară.
            </li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              Pentru cauze ce necesită reprezentare în instanță sau în proceduri rezervate avocaților, vă putem pune în
              legătură cu avocați colaboratori.
            </li>
          </ul>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="pi"
          >
            8. Drepturi de proprietate intelectuală
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Conținutul site-ului (texte, elemente grafice, logo-uri, imagini, structuri de pagină) aparține Consultant
            ABV sau partenerilor și este protejat de legislația privind proprietatea intelectuală. Utilizarea fără acord
            scris este interzisă.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="reclamatii"
          >
            9. Reclamații
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Orice reclamație legată de servicii sau de site se transmite în scris la{" "}
            <a href="mailto:contact@consultantabv.ro" className="text-[#3eb89a] hover:underline break-all">
              contact@consultantabv.ro
            </a>
            , indicând: nume/denumire, email, telefon, descrierea clară a situației și documente justificative (dacă
            există). Vom răspunde în cel mai scurt timp posibil.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="modificari"
          >
            10. Modificarea termenilor
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Ne rezervăm dreptul de a modifica acești Termeni și condiții. Orice modificare produce efecte de la
            publicarea pe site. Vă recomandăm să verificați periodic această pagină.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="contact"
          >
            11. Contact
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            <strong className="text-[#0a2540]">Consultant ABV</strong>
            <br />
            Strada Nicolae Pop nr. 13, etaj 1, ap. 7, Brașov, România
            <br />
            E-mail:{" "}
            <a href="mailto:contact@consultantabv.ro" className="text-[#3eb89a] hover:underline break-all">
              contact@consultantabv.ro
            </a>
            <br />
            Telefon:{" "}
            <a href="tel:+40123456789" className="text-[#3eb89a] hover:underline">
              +40 123 456 789
            </a>
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
            <Link to="/politica-cookies" className="hover:text-[#3eb89a] transition-colors">
              Politica cookies
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/politica-confidentialitate" className="hover:text-[#3eb89a] transition-colors">
              Politica de confidențialitate
            </Link>
          </div>
        </div>
      </footer>

      {/* JSON-LD (optional SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            name: "Termeni și condiții - Consultant ABV",
            inLanguage: "ro-RO",
            url: "https://consultantabv.ro/termeni-conditii",
            publisher: {
              "@type": "Organization",
              name: "Consultant ABV",
              email: "contact@consultantabv.ro",
              telephone: "+40 123 456 789",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Strada Nicolae Pop nr. 13, etaj 1, ap. 7",
                addressLocality: "Brașov",
                addressCountry: "RO",
              },
            },
            dateModified: "2025-10-01",
          }),
        }}
      />
    </main>
  )
}
