import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/ScrollReveal";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Nos services juridiques pour entreprises",
  description:
    "Création de société (SAS, SARL, SCI), modifications statutaires, fermeture d'entreprise, contrats commerciaux, propriété intellectuelle et veille juridique annuelle. Cabinet basé à Paris, intervenant dans toute la France.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient section-pad">
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="container-xl relative">
          <p className="eyebrow mb-5">Nos services</p>
          <h1 className="max-w-2xl text-balance font-heading text-4xl font-medium tracking-tight text-beige-50 md:text-5xl">
            Un accompagnement juridique structuré, à chaque étape de votre entreprise
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-beige-100/65">
            De la création à la transmission, en passant par la protection de
            vos actifs — nos juristes couvrent l'ensemble des besoins
            juridiques des sociétés commerciales et de leurs dirigeants.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-beige-100/10">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Une méthode claire"
            title="Comment nous travaillons avec vous"
            description="Chaque mission suit un cadre simple et transparent, du premier échange à la clôture de votre dossier."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Diagnostic", text: "Analyse de votre besoin et recommandation juridique personnalisée." },
              { step: "02", title: "Proposition", text: "Devis clair, délais annoncés, juriste dédié identifié." },
              { step: "03", title: "Exécution", text: "Rédaction, formalités et suivi via votre espace client sécurisé." },
              { step: "04", title: "Livraison", text: "Documents finalisés, notifications en temps réel, archivage sécurisé." },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 90} className="glass-panel p-7">
                <span className="font-heading text-2xl font-medium text-gold-500/70">{item.step}</span>
                <h3 className="mt-4 font-heading text-base font-medium text-beige-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-beige-100/60">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
