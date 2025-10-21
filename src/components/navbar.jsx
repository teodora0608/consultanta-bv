// src/components/navbar.jsx
"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { MenuIcon, XIcon, ChevronDownIcon, ChevronRightIcon } from "../icons"
import { motion, AnimatePresence } from "framer-motion"
import { mainServices } from "./MainServicesGrid" // păstrează importul tău existent

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  // Schimbă aspectul la scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Blochează scroll-ul paginii când e deschis meniul mobil
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  // Închide meniul mobil când se schimbă ruta
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }, [location.pathname])

  const navLinks = [
    { href: "/servicii", label: "Servicii", hasSubmenu: true, isRoute: true },
    { href: "/despre-noi", label: "Despre", isRoute: true },
    { href: "/contact", label: "Contact", isRoute: true },
    { href: "/resurse", label: "Ghiduri Juridice", isRoute: true },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-white shadow-sm h-[60px]" : "bg-transparent h-[72px]"
      }`}
      role="navigation"
      aria-label="Navigație principală"
    >
      <div className="page-container h-full">
        <div className="flex items-center justify-between h-full">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center relative transition-transform hover:scale-[1.04] active:scale-[0.97]"
            aria-label="ConsultantaBV – Acasă"
          >
            <img
              src="/images/logo.svg"   /* ✅ corect: fără /public în path, fără dublu slash */
              alt="ConsultantaBV"
              className={`w-[70px] md:w-[75px] h-auto transition-all duration-200 ${
                isScrolled ? "opacity-100" : "brightness-0 invert"
              }`}
              height="60"
              width="180"
              decoding="async"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-all duration-200 relative group py-2 font-sans ${
                    isScrolled ? "text-gray-700 hover:text-[#3eb89a]" : "text-white hover:text-[#3eb89a]"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-[#3eb89a] transition-all duration-200 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-200 relative group py-2 font-sans ${
                    isScrolled ? "text-gray-700 hover:text-[#3eb89a]" : "text-white hover:text-[#3eb89a]"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-[#3eb89a] transition-all duration-200 group-hover:w-full" />
                </a>
              )
            )}

            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[#3eb89a] text-white rounded-xl font-medium text-sm hover:bg-[#3eb89a]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#3eb89a]/20 font-sans"
              aria-label="Solicită ofertă"
            >
              Solicită ofertă
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className={`lg:hidden p-2 transition-colors duration-200 ${isScrolled ? "text-gray-700" : "text-white"}`}
            aria-label="Deschide/închide meniul"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden bg-white shadow-lg"
            >
              <div className="pt-4 pb-6 space-y-1 px-2 max-h-[calc(100vh-80px)] overflow-y-auto">
                {/* Servicii + submenu */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => setIsServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between text-base font-medium text-gray-700 hover:text-[#3eb89a] transition-colors py-2.5 px-3 font-sans min-h-[44px]"
                    aria-expanded={isServicesOpen}
                    aria-controls="submenu-servicii"
                  >
                    <span>Servicii</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        id="submenu-servicii"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50 rounded-lg ml-2 mt-1"
                      >
                        <div className="py-2 space-y-1">
                          {mainServices.map((service, index) => (
                            <Link
                              key={index}
                              to={service.link}
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setIsServicesOpen(false)
                              }}
                              className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-[#3eb89a] hover:bg-white transition-all py-2.5 px-3 rounded font-sans min-h-[44px]"
                            >
                              <service.icon className="h-4 w-4 text-[#3eb89a] flex-shrink-0" />
                              <span>{service.title}</span>
                            </Link>
                          ))}

                          <Link
                            to="/servicii"
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setIsServicesOpen(false)
                            }}
                            className="flex items-center justify-between text-sm font-semibold text-[#3eb89a] hover:bg-white transition-all py-2.5 px-3 rounded font-sans min-h-[44px] mt-2 border-t border-gray-200"
                          >
                            <span>Vezi toate serviciile</span>
                            <ChevronRightIcon className="h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Despre */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/despre-noi"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-gray-700 hover:text-[#3eb89a] transition-colors py-2.5 px-3 font-sans min-h-[44px] flex items-center"
                  >
                    Despre
                  </Link>
                </motion.div>

                {/* Contact */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-gray-700 hover:text-[#3eb89a] transition-colors py-2.5 px-3 font-sans min-h-[44px] flex items-center"
                  >
                    Contact
                  </Link>
                </motion.div>

                {/* Ghiduri Juridice */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/resurse"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-gray-700 hover:text-[#3eb89a] transition-colors py-2.5 px-3 font-sans min-h-[44px] flex items-center"
                  >
                    Ghiduri Juridice
                  </Link>
                </motion.div>

                {/* CTA */}
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-6 py-3.5 bg-[#3eb89a] text-white rounded-xl font-medium text-center hover:bg-[#3eb89a]/90 transition-all font-sans mt-4 min-h-[44px]"
                >
                  Solicită ofertă
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
