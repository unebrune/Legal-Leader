import type { Metadata } from "next";
import { Target, Compass, Workflow, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ValueCard from "@/components/ValueCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "LegalLeader, cabinet de droit des affaires à Paris : mission, valeurs, méthodologie et positionnement legal tech au service des entrepreneurs.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient section-pad">
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="container-xl relative max-w-3xl">
          <p className="eyebrow mb-5">À propos de LegalLeader</p>
          <h1 className="text-balance font-heading text-4xl font-medium tracking-tight text-beige-50 md:text-5xl">
            Un cabinet juridique conçu pour les bâtisseurs d'entreprise
          </h1>
          <p className="mt-6 text-balance text-lg leading-relaxed text-beige-100/65">
            LegalLeader est né d'une conviction : le droit des affaires doit
            être un levier, pas un frein. Nous accompagnons dirigeants et
            porteurs de projet avec la rigueur d'un cabinet traditionnel et
            l'agilité d'une structure legal tech.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid gap-14 md:grid-cols-2 md:gap-20">
          <SectionHeading
            eyebrow="Notre mission"
            title="Sécuriser juridiquement chaque étape de votre croissance"
          />
          <Reveal delay={80} className="space-y-5 text-base leading-relaxed text-beige-100/65">
            <p>
              Nous croyons que l'accompagnement juridique doit s'adapter au
              rythme de l'entrepreneuriat moderne : rapide, transparent et
              exigeant. Notre mission est de vous permettre de vous concentrer
              sur votre activité pendant que nous sécurisons son cadre légal.
            </p>
            <p>
              Notre vision : devenir le partenaire juridique de référence des
              entrepreneurs et sociétés commerciales qui recherchent liberté
              d'action, structure solide et accompagnement de confiance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-t border-beige-100/10">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Nos engagements"
            title="Des valeurs qui structurent chaque mission"
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-9 sm:grid-cols-2">
            <ValueCard
              index={0}
              icon={Target}
              title="Rigueur"
              description="Une exigence constante dans l'analyse juridique et la rédaction de vos actes."
            />
            <ValueCard
              index={1}
              icon={Compass}
              title="Éthique"
              description="Transparence totale sur les délais, les honoraires et les risques identifiés."
            />
            <ValueCard
              index={2}
              icon={Workflow}
              title="Efficacité digitale"
              description="Des outils modernes pour fluidifier chaque échange et chaque formalité."
            />
            <ValueCard
              index={3}
              icon={Award}
              title="Engagement client"
              description="Un juriste dédié, joignable, investi dans la réussite de votre projet."
            />
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-beige-100/10">
        <div className="container-xl grid gap-14 md:grid-cols-2 md:gap-20">
          <SectionHeading
            eyebrow="Notre méthodologie"
            title="Rigueur juridique, exécution digitale"
            description="Chaque dossier suit un processus structuré pour garantir précision et réactivité, du premier échange à la clôture."
          />
          <div className="space-y-6">
            {[
              { title: "Diagnostic initial", text: "Analyse approfondie de votre situation et de vos objectifs avant toute recommandation." },
              { title: "Suivi digitalisé", text: "Espace client sécurisé pour centraliser documents, échanges et statut de votre dossier en temps réel." },
              { title: "Contrôle qualité", text: "Double relecture juridique systématique avant toute transmission ou dépôt officiel." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-500/30 font-heading text-xs font-medium text-gold-400">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-base font-medium text-beige-50">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-beige-100/60">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-beige-100/10">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Notre positionnement"
            title="Legal tech, sans compromis sur l'expertise"
            align="center"
          />
          <Reveal delay={80} className="mx-auto mt-6 max-w-2xl">
            <p className="text-balance text-center text-base leading-relaxed text-beige-100/65">
              LegalLeader n'est ni un simple prestataire de formalités, ni un
              cabinet traditionnel figé dans ses process. Nous combinons
              expertise juridique pointue et outils digitaux pour offrir à nos
              clients une expérience premium, fluide et parfaitement
              transparente — à Paris comme partout en France.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
