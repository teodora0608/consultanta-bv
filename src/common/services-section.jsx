import MainServicesGrid from "../components/MainServicesGrid"
import { mainServices } from "../data/mainServices"

function ServicesSection() {
  return (
    <MainServicesGrid
      title="Servicii juridice"
      subtitle="De la înființare SRL sau PFA, la consultanță juridică, preluare sau închidere firmă și până la insolvență – te susținem în fiecare etapă, online și în Brașov."
      items={mainServices}
      cta={{ label: "Vezi toate serviciile", to: "/servicii" }}
    />
  )
}

export default ServicesSection
