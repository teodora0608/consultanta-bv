import Navbar from "../components/navbar"
import HeroSection from "../common/hero-section"
import DespreNoiSection from "../common/despre-noi"
import ServicesSection from "../common/services-section"
import USPSection from "../common/usp-section"
import FinalCTA from "../common/final-cta"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DespreNoiSection />
      <ServicesSection />
      <USPSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
