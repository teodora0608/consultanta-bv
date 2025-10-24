// src/pages/homepage.jsx
"use client"

import { useEffect } from "react"
import Navbar from "../components/navbar"
import HeroSection from "../common/hero-section"
import ServicesSection from "../common/services-section"
import AboutWhySection from "../common/about-why-section"
import FAQSection from "../common/FAQSectionUI"
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
  const orgId = `${origin}/#organization`
  const webSiteId = `${origin}/#website`

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: pageTitle,
    description: pageDescr,
    isPartOf: { "@id": webSiteId },         // ✅ referință, nu obiect nou
    primaryImageOfPage: ogImage,
    inLanguage: "ro-RO",
  }

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": webSiteId,                       // ✅ ID canonic
    name: "ConsultantaBV",
    url: origin,
    inLanguage: "ro-RO",
    publisher: { "@id": orgId },            // ✅ leagă de Organization
    potentialAction: {
      "@type": "SearchAction",
      target: `${origin}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,                           // ✅ ID canonic
    name: "ConsultantaBV",
    url: origin,
    logo: `${origin}/images/logo.svg`,      // ✅ path reparat
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

  // ℹ️ Recomandare: Nu pune HowTo pe home decât dacă pașii sunt VIZIBILI aici.
  // Dacă păstrezi pașii doar pe paginile de servicii, scoate howToLd de pe homepage.
  // const howToLd = { ... }

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={[webPageLd, webSiteLd, organizationLd, breadcrumbLd]} />
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
