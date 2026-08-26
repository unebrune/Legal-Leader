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
            LegalLeader est une legaltech dédiée aux entrepreneurs, dirigeants et professionnels qui souhaitent créer, sécuriser et mettre en conformité leur entreprise, tout en bénéficiant d’un accompagnement juridique accessible et personnalisé. Notre objectif est simple : faciliter l’accès au droit et permettre à chaque entrepreneur de se concentrer pleinement sur le développement de son activité.
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
              Nous intervenons à toutes les étapes de la vie d’une entreprise: création de société, modifications juridiques, approbation annuelle des comptes, fermeture ou cessation d’activité, mais également dans la protection et la sécurisation de vos projets. Dépôt de marques et de brevets, rédaction de CGV, CGU et mentions légales, contrats commerciaux, conformité juridique ou encore accompagnement dans vos différentes démarches liés a des secteurs particuliers comme le transport (DRIEAT), le médical, la restauration et tout autre secteur réglementé : 
              LegalLeader vous accompagne de manière globale et adaptée à vos besoins
            </p>
            <p>
              Notre équipe est composée de juristes spécialisés en droit des affaires, droit des sociétés et droit de la concurrence. La particularité de LegalLeader repose sur la polyvalence de ses juristes, qui associent des compétences juridiques, économiques et commerciales et digitales. Cette approche nous permet de comprendre votre entreprise dans son ensemble et de vous proposer des solutions qui prennent en compte aussi bien les enjeux juridiques que les réalités concrètes de votre activité
            <br>
            Chez LegalLeader, nous plaçons également la relation avec nos clients au cœur de notre accompagnement. Chaque dossier est traité avec attention, rigueur et implication. Nous prenons le temps de comprendre votre projet, vos objectifs et vos contraintes afin de vous proposer un accompagnement réellement adapté à votre situation.

Parce que derrière chaque entreprise se trouve un projet, une ambition et une vision, nous avons à cœur de participer à votre réussite car elle est également la  la nôtre
            </br>
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
             LegalLeader réunit expertise en droit des affaires et approche digitale pour offrir à ses clients une expérience juridique à la hauteur de leurs ambitions. Réactivité, transparence et rigueur sont les maîtres mots de notre accompagnement.
Chaque dossier, de la création à la structuration, en passant par la protection, le développement et la transmission de l’entreprise, est traité avec la même exigence : sécuriser juridiquement votre projet sans jamais freiner son élan
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
