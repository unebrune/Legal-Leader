import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Linkedin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact & Devis",
  description:
    "Contactez LegalLeader pour un devis ou une consultation en droit des affaires. Cabinet basé à Paris, intervention dans toute la France.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient section-pad">
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="container-xl relative">
          <p className="eyebrow mb-5">Contact</p>
          <h1 className="max-w-2xl text-balance font-heading text-4xl font-medium tracking-tight text-beige-50 md:text-5xl">
            Parlons de votre projet
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-beige-100/65">
            Demande de devis, prise de rendez-vous avec Camilia ou question générale, notre
            équipe vous répond sous 24h ouvrées.
          </p>
        </div>
      </section>

      <section id="devis" className="section-pad scroll-mt-24">
        <div className="container-xl grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal className="space-y-8">
            <div className="glass-panel p-7">
              <h2 className="eyebrow mb-5">Coordonnées</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-gold-500" />
                  <span className="text-beige-100/70">
                    Avenue Marceau
                    <br />
                    75008 PARIS
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-gold-500" />
                  <a href="tel:+33140000000" className="text-beige-100/70 hover:text-gold-400">
                    +33 7 81 23 93 21
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-gold-500" />
                  <a href="mailto:contact@legalleader.fr" className="text-beige-100/70 hover:text-gold-400">
                    contact@legal-leader.fr
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="shrink-0 text-gold-500" />
                  <span className="text-beige-100/70">Lun–Ven, 9h–19h</span>
                </li>
              </ul>

              <div className="mt-6 flex gap-3 border-t border-beige-100/10 pt-6">
                <a
                  href="https://wa.me/33600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-beige-100/15 text-beige-100/70 transition-colors hover:border-gold-500/50 hover:text-gold-400"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={17} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-beige-100/15 text-beige-100/70 transition-colors hover:border-gold-500/50 hover:text-gold-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>

            <div className="glass-panel overflow-hidden">
              <iframe
                title="Localisation du cabinet LegalLeader à Paris"
                src="https://maps.app.goo.gl/EQGgncn5mvr5T9vy5"
                width="100%"
                height="260"
                style={{ border: 0, filter: "grayscale(0.3) invert(0.92) contrast(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
