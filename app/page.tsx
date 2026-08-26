import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Gem, Waves, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ValueCard from "@/components/ValueCard";
import Testimonials from "@/components/Testimonials";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { services } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blog";
import LogoMarquee from "@/components/LogoMarquee";

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 animate-pulse-glow bg-gold-glow blur-3xl" />

        <div className="container-xl relative flex min-h-[86vh] flex-col justify-center py-28 md:py-36">
          <p className="eyebrow mb-6 animate-fade-up">
            Cabinet spécialisé en droit des affaires | Paris
          </p>
          <h1
            className="max-w-3xl text-balance font-heading text-4xl font-medium leading-[1.08] tracking-tight text-beige-50 animate-fade-up sm:text-5xl md:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            L'excellence juridique au service de vos ambitions 
          </h1>
          <p
            className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-beige-100/65 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            LEGALLEADER accompagne entrepreneurs, sociétés commerciales et
            porteurs de projet dans chaque étape juridique de leur croissance 
            avec la rigueur du droit et la fluidité d'un cabinet digital.
          </p>
          <div
            className="mt-10 flex flex-col gap-3 animate-fade-up sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/contact#devis" className="btn-primary">
              Demander un devis
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              PRENDRE RDV
            </Link>
          </div>

          <dl
            className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-beige-100/10 pt-8 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <div>
              <dt className="text-xs uppercase tracking-wide text-beige-100/45">Dossiers traités</dt>
              <dd className="mt-1 font-heading text-2xl font-medium text-beige-50">
                <AnimatedCounter value={10000} suffix="+" />
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-beige-100/45">Délai moyen de constitution</dt>
              <dd className="mt-1 font-heading text-2xl font-medium text-beige-50">
                <AnimatedCounter value={24} suffix=" h" />
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-beige-100/45">Couverture</dt>
              <dd className="mt-1 font-heading text-2xl font-medium text-beige-50">Toute la France</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad">
        <div className="container-xl grid gap-14 md:grid-cols-2 md:gap-20">
          <SectionHeading
            eyebrow="Notre positionnement"
            title="Un cabinet juridique pensé pour le rythme des entrepreneurs"
          />
          <Reveal delay={80} className="space-y-5 text-base leading-relaxed text-beige-100/65">
            <p>
              LegalLeader réunit expertise en droit des affaires et approche
              legal tech pour offrir à ses clients une expérience à la hauteur
              de leurs ambitions : réactive, transparente et rigoureuse.
            </p>
            <p>
              Chaque dossier : création, structuration, protection ou
              transmission est traité avec la même exigence : sécuriser
              juridiquement votre projet sans jamais freiner son élan.
            </p>
          </Reveal>
        </div>
      </section>
      {/* Ils nous ont fait confiance */}
<section className="section-pad border-t border-beige-100/10">
  <div className="container-xl">
    <SectionHeading title="Ils nous ont fait confiance" align="center" />
    <div className="mt-14">
      <LogoMarquee />
    </div>
  </div>
</section>

      {/* Services overview */}
      <section className="section-pad border-t border-beige-100/10">
        <div className="container-xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Nos expertises"
              title="Un accompagnement juridique complet, du premier jour à la croissance"
              description="De la constitution à la protection de vos actifs immatériels, nos juristes couvrent l'intégralité du cycle de vie de votre société."
            />
            <Link
              href="/services"
              className="link-underline inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-gold-400"
            >
              Voir tous les services
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad border-t border-beige-100/10">
        <div className="container-xl grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <SectionHeading
            eyebrow="Pourquoi LegalLeader"
            title="Une exigence constante, une expérience fluide"
            description="Cinq principes guident chacun de nos accompagnements, du premier échange à la clôture de votre dossier."
          />
          <div className="grid gap-9 sm:grid-cols-2">
            <ValueCard
              index={0}
              icon={ShieldCheck}
              title="CONFIANCE"
              description="Confidentialité stricte, transparence sur les délais et les honoraires, engagement contractuel clair."
            />
            <ValueCard
              index={1}
              icon={Cpu}
              title="EXPERTISE TECHNIQUE"
              description="Des juristes spécialisés en droit des affaires, à jour des dernières évolutions réglementaires."
            />
            <ValueCard
              index={2}
              icon={Sparkles}
              title="MODERNITE"
              description="Une approche legal tech : espace client digital, suivi en temps réel, formalités automatisées."
            />
            <ValueCard
              index={3}
              icon={Gem}
              title="DISCRETION & EXIGENCE"
              description="Un service premium et sur mesure, pensé pour les dirigeants qui n'ont pas de temps à perdre."
            />
            <ValueCard
              index={4}
              icon={Waves}
              title="FLUIDITE"
              description="Des process simplifiés et un accompagnement sans friction, de la prise de contact à la clôture."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad border-t border-beige-100/10">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Ils nous font confiance"
            title="La parole à nos clients"
            align="center"
          />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="section-pad border-t border-beige-100/10">
        <div className="container-xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Actualités juridiques"
              title="Nos derniers décryptages pour entrepreneurs"
            />
            <Link
              href="/blog"
              className="link-underline inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-gold-400"
            >
              Voir tous les articles
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
