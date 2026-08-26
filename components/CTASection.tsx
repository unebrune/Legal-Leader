import Link from "next/link";
import Reveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="section-pad">
      <div className="container-xl">
        <Reveal className="glass-panel relative overflow-hidden bg-hero-gradient px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-gold-glow" />
          <div className="relative">
            <p className="eyebrow mb-5">Prochaine étape</p>
            <h2 className="mx-auto max-w-xl text-balance font-heading text-3xl font-medium tracking-tight text-beige-50 md:text-4xl">
              Structurez votre projet avec l'appui d'un cabinet qui pense comme un entrepreneur
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-balance text-beige-100/60">
              Échangeons sur vos enjeux juridiques lors d'un premier rendez-vous, sans engagement.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact#devis" className="btn-primary">
                Demander un devis
              </Link>
              <Link href="/contact" className="btn-secondary">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
