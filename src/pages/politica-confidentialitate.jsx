"use client"

// pages/politica-confidentialitate.jsx
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function PoliticaConfidentialitate() {
  const updated = "octombrie 2025"

  useEffect(() => {
    document.title = "Politica de Confidențialitate | ConsultantaBV"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Politica de confidențialitate a ConsultantaBV. Află cum colectăm, folosim și protejăm datele tale personale conform GDPR.",
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
            Politica de Confidențialitate
          </h1>
          {/* Decorative line */}
          <div className="mx-auto w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-[#3eb89a] to-transparent mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">
            Află cum colectăm, folosim și protejăm datele tale personale atunci când utilizezi site-ul și formularul
            nostru de contact.
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
            Cine suntem?
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            <strong className="text-[#0a2540]">ConsultantaBV</strong>, cu sediul în{" "}
            <strong>Strada Nicolae Pop nr. 13, etaj 1, ap. 7, România</strong>, e-mail:{" "}
            <a href="mailto:contact@consultantabv.ro" className="text-[#3eb89a] hover:underline break-all">
              contact@consultantabv.ro
            </a>
            , telefon:{" "}
            <a href="tel:+40123456789" className="text-[#3eb89a] hover:underline">
              0730140766
            </a>
            , prelucrează datele tale cu caracter personal în calitate de
            <em> operator</em> (GDPR). Suntem responsabili pentru modul în care colectăm, folosim și protejăm aceste
            date.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="ce-date"
          >
            Ce date colectăm și de ce
          </h2>
          <p className="text-gray-700 mb-4 font-sans leading-relaxed text-base sm:text-lg">
            Prin formularul de contact de pe site, putem colecta:
          </p>
          <ul className="list-none ml-0 text-gray-700 space-y-3 sm:space-y-3 font-sans text-base sm:text-lg mb-6">
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">Nume și prenume</li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">Adresă de e-mail</li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">Număr de telefon (opțional)</li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">Conținutul mesajului transmis</li>
          </ul>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Folosim aceste date exclusiv pentru a răspunde solicitărilor tale sau pentru comunicări inițiate de tine.
            Temeiul legal al prelucrării este <strong className="text-[#0a2540]">consimțământul</strong> (art. 6 alin.
            (1) lit. a GDPR), exprimat prin trimiterea formularului. Dacă ulterior semnăm un contract, temeiul poate
            deveni <strong className="text-[#0a2540]">executarea contractului</strong> (art. 6 alin. (1) lit. b).
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="partajare"
          >
            Cu cine împărtășim datele
          </h2>
          <p className="text-gray-700 mb-4 font-sans leading-relaxed text-base sm:text-lg">
            Nu vindem și nu închiriem datele tale. Putem partaja strict necesar cu:
          </p>
          <ul className="list-none ml-0 text-gray-700 space-y-3 sm:space-y-3 font-sans text-base sm:text-lg mb-8 sm:mb-10">
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              Furnizori IT (hosting, e-mail), ca persoane împuternicite GDPR
            </li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">Autorități publice, la cerere, conform legii</li>
          </ul>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="retentie"
          >
            Cât timp păstrăm datele
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Datele trimise prin formular sunt păstrate maximum <strong className="text-[#0a2540]">12 luni</strong> de la
            ultima interacțiune, apoi sunt șterse, cu excepția situațiilor în care legea impune o perioadă mai lungă sau
            când există un raport contractual în derulare.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="drepturi"
          >
            Drepturile tale GDPR
          </h2>
          <p className="text-gray-700 mb-4 font-sans leading-relaxed text-base sm:text-lg">
            Conform GDPR (Regulamentul (UE) 2016/679), ai următoarele drepturi:
          </p>
          <ul className="list-none ml-0 text-gray-700 space-y-3 sm:space-y-3 font-sans text-base sm:text-lg mb-6">
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">Dreptul de acces la date</li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              Dreptul la rectificare și ștergere („dreptul de a fi uitat")
            </li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">Dreptul la restricționarea prelucrării</li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">Dreptul la opoziție</li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">Dreptul la portabilitatea datelor</li>
            <li className="pl-4 sm:pl-6 border-l-2 border-[#3eb89a]">
              Dreptul de a depune o plângere la{" "}
              <a
                href="https://www.dataprotection.ro/"
                target="_blank"
                rel="noreferrer"
                className="text-[#3eb89a] hover:underline break-all"
              >
                ANSPDCP
              </a>{" "}
              (B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, 010336, București; tel. +40.318.059.211/212; e-mail:
              anspdcp@dataprotection.ro)
            </li>
          </ul>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Pentru exercitarea drepturilor, scrie-ne la{" "}
            <a href="mailto:contact@consultantabv.ro" className="text-[#3eb89a] hover:underline break-all">
              contact@consultantabv.ro
            </a>
            . Putem solicita informații suplimentare pentru verificarea identității.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="securitate"
          >
            Securitatea datelor
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Aplicăm măsuri tehnice și organizatorice adecvate (ex. criptare TLS/SSL, control acces, jurnalizare) pentru
            a proteja confidențialitatea, integritatea și disponibilitatea datelor.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="modificari"
          >
            Modificări ale politicii
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Putem actualiza periodic această politică pentru a reflecta schimbări legislative sau tehnice. Versiunea
            curentă va fi mereu disponibilă pe această pagină, cu indicarea datei ultimei actualizări.
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6 font-serif text-[#0a2540]"
            id="contact"
          >
            Contact & operator
          </h2>
          <p className="text-gray-700 mb-8 sm:mb-10 font-sans leading-relaxed text-base sm:text-lg">
            Operator: <strong className="text-[#0a2540]">ConsultantaBV</strong>
            <br />
            Adresă: Strada Nicolae Pop nr. 13, etaj 1, ap. 7, România
            <br />
            E-mail:{" "}
            <a href="mailto:contact@consultantabv.ro" className="text-[#3eb89a] hover:underline break-all">
              contact@consultantabv.ro
            </a>
            <br />
            Telefon:{" "}
            <a href="tel:+40123456789" className="text-[#3eb89a] hover:underline">
              0730140766
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
          <p>© {new Date().getFullYear()} ConsultantaBV. Toate drepturile rezervate.</p>
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <Link to="/politica-cookies" className="hover:text-[#3eb89a] transition-colors">
              Politica cookies
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/termeni-conditii" className="hover:text-[#3eb89a] transition-colors">
              Termeni și condiții
            </Link>
          </div>
        </div>
      </footer>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            name: "Politica de Confidențialitate - ConsultantaBV",
            publisher: {
              "@type": "Organization",
              name: "ConsultantaBV",
              email: "contact@consultantabv.ro",
              telephone: "+40730140766",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Strada Nicolae Pop nr. 13, etaj 1, ap. 7",
                addressCountry: "RO",
              },
            },
            dateModified: "2025-10-01",
            inLanguage: "ro-RO",
            url: "https://consultantabv.ro/politica-confidentialitate",
          }),
        }}
      />
    </main>
  )
}
