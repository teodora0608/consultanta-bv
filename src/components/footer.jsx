"use client"

import { Mail, Phone, MapPin, Facebook, Music } from "lucide-react"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <img
              src="/images/design-mode/logo.png"
              alt="Consultant ABV"
              className="h-14 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/80 text-base leading-relaxed mb-6 max-w-md font-sans">
              Consultanță juridică premium pentru firme și antreprenori. Soluții rapide, transparente și sigure,
              adaptate nevoilor tale.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#3eb89a] text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-[#3eb89a] min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#3eb89a] text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-[#3eb89a] min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="TikTok"
              >
                <Music className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@consultantabv.ro"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#3eb89a] text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-[#3eb89a] min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white font-serif">Navigare rapidă</h3>
            <ul className="space-y-3">
              {[
                { href: "#acasa", label: "Acasă", isHash: true },
                { href: "#servicii", label: "Servicii", isHash: true },
                { href: "#despre", label: "Despre noi", isHash: true },
                { href: "/contact", label: "Contact", isHash: false },
              ].map((link) => (
                <li key={link.href}>
                  {link.isHash ? (
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#3eb89a] transition-colors text-base inline-flex items-center group font-sans min-h-[44px]"
                    >
                      <span className="w-0 h-px bg-[#3eb89a] transition-all duration-300 group-hover:w-4 group-hover:mr-2" />
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-[#3eb89a] transition-colors text-base inline-flex items-center group font-sans min-h-[44px]"
                    >
                      <span className="w-0 h-px bg-[#3eb89a] transition-all duration-300 group-hover:w-4 group-hover:mr-2" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white font-serif">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@consultantabv.ro"
                  className="flex items-start gap-3 text-white/70 hover:text-[#3eb89a] transition-colors text-base group font-sans min-h-[44px]"
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>contact@consultantabv.ro</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+40123456789"
                  className="flex items-start gap-3 text-white/70 hover:text-[#3eb89a] transition-colors text-base group font-sans min-h-[44px]"
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+40 123 456 789</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-base font-sans min-h-[44px]">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Brașov, România</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60 font-sans">
            <p>© {currentYear} consultantabv.ro – Toate drepturile rezervate.</p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <a href="#" className="hover:text-[#3eb89a] transition-colors min-h-[44px] flex items-center">
                Politică de confidențialitate
              </a>
              <a href="#" className="hover:text-[#3eb89a] transition-colors min-h-[44px] flex items-center">
                Termeni și condiții
              </a>
              <a href="#" className="hover:text-[#3eb89a] transition-colors min-h-[44px] flex items-center">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
