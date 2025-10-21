// src/components/footer.jsx
"use client"

import { MailIcon, PhoneIcon, MapPinIcon, FacebookIcon, InstagramIcon } from "../icons"
import { Link } from "react-router-dom"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a2540] text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="page-container py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Logo + descriere */}
          <div>
            <img
              src="/images/logo.svg"  
              alt="ConsultantaBV"
              className="h-14 w-auto mb-6 brightness-0 invert"
              width="200"
              height="56"
              decoding="async"
            />

            <p className="text-white/80 text-base leading-relaxed mb-6 max-w-md font-sans">
              Consultanță juridică pentru firme și antreprenori. Soluții rapide, transparente și sigure,
              adaptate nevoilor tale.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#3eb89a] text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-[#3eb89a]"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/consultantabv.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#3eb89a] text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-[#3eb89a]"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@consultantabv.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#3eb89a] text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-[#3eb89a]"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 fill-current">
                  <path d="M448,209.9a210.1,210.1,0,0,1-122.2-39.2V349.4a162.9,162.9,0,1,1-145.3-161.7v82.2a81.2,81.2,0,1,0,58.5,78.4V0h86.8A122.3,122.3,0,0,0,448,122.3Z" />
                </svg>
              </a>
              <a
                href="mailto:contact@consultantabv.ro"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#3eb89a] text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-[#3eb89a]"
                aria-label="Email"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigare rapidă */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white font-serif">Navigare rapidă</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-[#3eb89a] transition-colors text-base font-sans">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/servicii" className="text-white/70 hover:text-[#3eb89a] transition-colors text-base font-sans">
                  Servicii
                </Link>
              </li>
              <li>
                <Link to="/resurse" className="text-white/70 hover:text-[#3eb89a] transition-colors text-base font-sans">
                  Ghiduri juridice
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-[#3eb89a] transition-colors text-base font-sans">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white font-serif">Contact</h3>
            <ul className="space-y-4 mb-6">
              <li>
                <a
                  href="mailto:contact@consultantabv.ro"
                  className="flex items-start gap-3 text-white/70 hover:text-[#3eb89a] transition-colors text-base font-sans"
                >
                  <MailIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>contact@consultantabv.ro</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+40730140766"
                  className="flex items-start gap-3 text-white/70 hover:text-[#3eb89a] transition-colors text-base font-sans"
                >
                  <PhoneIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>+40 730 140 766</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-base font-sans">
                  <MapPinIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Strada Nicolae Pop nr. 13, etaj 1, ap. 7, Brașov, România</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bara de jos */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60 font-sans">
            <p>© {currentYear} consultantabv.ro – Toate drepturile rezervate.</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <Link to="/politica-confidentialitate" className="hover:text-[#3eb89a] transition-colors">
                Politică de confidențialitate
              </Link>
              <Link to="/termeni-conditii" className="hover:text-[#3eb89a] transition-colors">
                Termeni și condiții
              </Link>
              <Link to="/politica-cookies" className="hover:text-[#3eb89a] transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
