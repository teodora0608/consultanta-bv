import MainServicesGrid from "../components/MainServicesGrid"
import { mainServices } from "../data/mainServices"

function ServicesSection() {
  return (
    <MainServicesGrid
      title="Servicii juridice complete"
      subtitle="De la înființare la consultanță și insolvență – te susținem în fiecare etapă."
      items={mainServices}
      cta={{ label: "Vezi toate serviciile", to: "/servicii" }}
    />
  )
}

export default ServicesSection
