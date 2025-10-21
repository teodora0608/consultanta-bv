// src/pages/homepage.jsx
"use client"

import { useEffect } from "react"
import Navbar from "../components/navbar"
import HeroSection from "../common/hero-section"
import ServicesSection from "../common/services-section"
import AboutWhySection from "../common/about-why-section"
import FAQSection from "../common/faq-section"
import FinalCTA from "../common/final-cta"
import Footer from "../components/footer"

// SEO helpers
import { setMetaTags } from "../seo/meta"
import JsonLd from "../components/JsonLd"

export default function HomePage() {
  // ─────────────── SEO VARS ───────────────
  const origin =
    (typeof window !== "undefined" && window.location.origin) || "https://consultantabv.ro"
  const path = "/"
  const canonical = `${origin}${path}`

  const pageTitle = "ConsultantaBV – Servicii juridice și înființări firme online în Brașov"
  const pageDescr =
    "Consultanță juridică, înființare SRL și PFA, închidere firme, modificări ONRC și găzduire sediu social. Totul 100% online, rapid și sigur – în 3–5 zile lucrătoare."
  const ogImage = `${origin}/images/hero-tablet.webp`

  // ─────────────── META la mount ───────────────
  useEffect(() => {
    setMetaTags({
      title: pageTitle,
      description: pageDescr,
      canonical,
      image: ogImage,
      siteName: "ConsultantaBV",
      ogType: "website",
      locale: "ro_RO",
    })
  }, [pageTitle, pageDescr, canonical, ogImage])

  // ─────────────── JSON-LD ───────────────
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: pageTitle,
    description: pageDescr,
    isPartOf: { "@type": "WebSite", url: origin, name: "ConsultantaBV" },
    primaryImageOfPage: ogImage,
    inLanguage: "ro-RO",
  }

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ConsultantaBV",
    url: origin,
    potentialAction: {
      "@type": "SearchAction",
      target: `${origin}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ConsultantaBV",
    url: origin,
    logo: `${origin}/images//public/images/logo.svgimages/logo.svg`,
    sameAs: [
      "https://www.facebook.com/consultantabv",
      "https://www.linkedin.com/company/consultantabv",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+40730140766",
      contactType: "customer support",
      areaServed: "RO",
      availableLanguage: ["ro"],
    },
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: canonical },
    ],
  }

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cum lucrăm – servicii 100% online",
    description:
      "Pașii tipici: cerere, consultanță, redactare acte, depunere la ONRC/ANAF și livrarea documentelor.",
    step: [
      { "@type": "HowToStep", name: "Trimite cererea", url: `${origin}/contact` },
      { "@type": "HowToStep", name: "Consultanță & clarificări" },
      { "@type": "HowToStep", name: "Redactare acte & semnare (electronic/împuternicire)" },
      { "@type": "HowToStep", name: "Depunere online la ONRC/ANAF" },
      { "@type": "HowToStep", name: "Livrare documente și urmărire status" },
    ],
  }

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD (idempotent; nu includem FAQ aici ca să nu dublăm schema din componentă) */}
      <JsonLd data={[webPageLd, webSiteLd, organizationLd, breadcrumbLd, howToLd]} />

      <Navbar />
      <HeroSection />

      <ServicesSection />
      <AboutWhySection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
