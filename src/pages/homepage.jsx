import Navbar from "../components/navbar"
import HeroSection from "../common/hero-section"
import ServicesSection from "../common/services-section"
import AboutWhySection from "../common/about-why-section"
import FAQSection from "../common/faq-section"
import FinalCTA from "../common/final-cta"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
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
