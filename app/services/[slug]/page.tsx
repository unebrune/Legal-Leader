import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/ScrollReveal";
import { services, getServiceBySlug } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: `${service.summary} Mots-clés : ${service.keywords.join(", ")}. Cabinet LegalLeader — Paris et toute la France.`,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "LegalService",
      name: "LegalLeader",
    },
    areaServed: "FR",
    description: service.summary,
  };

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-hero-gradient section-pad">
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="container-xl relative">
          <nav className="mb-8 text-xs text-beige-100/45" aria-label="Fil d'ariane">
            <Link href="/services" className="hover:text-gold-400">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-beige-100/70">{service.shortTitle}</span>
          </nav>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/[0.06] text-gold-400">
            <ServiceIcon name={service.icon} size={24} strokeWidth={1.75} />
          </div>
          <h1 className="max-w-2xl text-balance font-heading text-4xl font-medium tracking-tight text-beige-50 md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-beige-100/65">
            {service.intro}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#devis" className="btn-primary">
              Demander un devis
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Parler à un juriste
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <h2 className="font-heading text-2xl font-medium text-beige-50">
            Ce que couvre cette prestation
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {service.offerings.map((offering, i) => (
              <Reveal key={offering.title} delay={i * 90} className="glass-panel p-7">
                <h3 className="font-heading text-base font-medium text-beige-50">
                  {offering.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-beige-100/60">
                  {offering.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-beige-100/10">
        <div className="container-xl grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="font-heading text-2xl font-medium text-beige-50">
              Notre méthodologie
            </h2>
            <ol className="mt-8 space-y-6">
              {service.process.map((step, i) => (
                <Reveal as="li" key={step} delay={i * 90} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-500/30 font-heading text-xs font-medium text-gold-400">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-beige-100/70">{step}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-medium text-beige-50">
              Questions fréquentes
            </h2>
            <div className="mt-8 space-y-5">
              {service.faq.map((item, i) => (
                <Reveal key={item.question} delay={i * 90} className="glass-panel p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-500" />
                    <div>
                      <h3 className="font-heading text-sm font-medium text-beige-50">
                        {item.question}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-beige-100/60">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-beige-100/10">
        <div className="container-xl">
          <h2 className="font-heading text-2xl font-medium text-beige-50">
            Autres services associés
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="glass-panel group p-6 transition-all duration-300 ease-fluid hover:border-gold-500/30"
              >
                <h3 className="font-heading text-sm font-medium text-beige-50">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-beige-100/55">{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
