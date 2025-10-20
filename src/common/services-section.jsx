"use client"

import MainServicesGrid, { mainServices } from "../components/MainServicesGrid"

export default function ServicesSection() {
  return (
    <section
      id="servicii"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/Service"
      className="bg-white"
    >
      <MainServicesGrid
        title={
          <span id="services-heading" itemProp="name">
            Servicii juridice
          </span>
        }
        subtitle="De la înființare SRL sau PFA, la consultanță juridică, preluare sau închidere firmă și până la insolvență – te susținem în fiecare etapă, online și în Brașov."
        items={mainServices}
        cta={{ label: "Vezi toate serviciile", to: "/servicii" }}
      />

      {/* Schema.org subdata pentru descriere generală */}
      <meta
        itemProp="description"
        content="Consultanță juridică completă: înființare firme (SRL, PFA), modificări ONRC, găzduire sediu social, închidere firmă cu datorii și servicii de insolvență, în Brașov și online."
      />
      <meta
        itemProp="serviceType"
        content="Servicii juridice și administrative pentru companii și persoane fizice autorizate"
      />
      <meta itemProp="provider" content="ConsultantaBV" />
    </section>
  )
}
