"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#servicii", label: "Servicii" },
    { href: "#despre", label: "Despre" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-white shadow-sm h-[60px]" : "bg-transparent h-[72px]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <a
            href="#acasa"
            className="flex items-center group relative transition-transform hover:scale-[1.04] active:scale-[0.97]"
            aria-label="Consultant ABV Home"
          >
            <img
              src="/images/logo.png"
              alt="Consultant ABV Logo"
              className={`w-[70px] md:w-[75px] h-auto transition-all duration-200 ${
                isScrolled ? "opacity-100" : "brightness-0 invert"
              }`}
            />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
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
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-[#3eb89a] text-white rounded-xl font-medium text-sm hover:bg-[#3eb89a]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#3eb89a]/20 font-sans"
              aria-label="Request a quote"
            >
              Solicită ofertă
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-200 ${isScrolled ? "text-gray-700" : "text-white"}`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white"
            >
              <div className="pt-4 pb-6 space-y-3 px-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-base font-medium text-gray-700 hover:text-[#3eb89a] transition-colors py-2.5 px-3 font-sans"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-6 py-3.5 bg-[#3eb89a] text-white rounded-xl font-medium text-center hover:bg-[#3eb89a]/90 transition-all font-sans mt-2"
                >
                  Solicită ofertă
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
