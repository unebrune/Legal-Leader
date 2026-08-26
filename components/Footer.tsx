import Link from "next/link";
import { Linkedin, MapPin, Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { services } from "@/lib/data/services";

export default function Footer() {
  return (
    <footer className="border-t border-beige-100/10 bg-ink-950">
      <div className="container-xl grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:py-20">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-beige-100/60">
            Cabinet de droit des affaires nouvelle génération, au service des
            entrepreneurs et des sociétés commerciales à Paris et partout en
            France.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-beige-100/15 text-beige-100/70 transition-colors duration-300 hover:border-gold-500/50 hover:text-gold-400"
              aria-label="LegalLeader sur LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Services</h3>
          <ul className="space-y-2.5">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-beige-100/65 transition-colors hover:text-gold-400"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Cabinet</h3>
          <ul className="space-y-2.5">
            <li>
              <Link href="/a-propos" className="text-sm text-beige-100/65 transition-colors hover:text-gold-400">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-beige-100/65 transition-colors hover:text-gold-400">
                Actualités juridiques
              </Link>
            </li>
            <li>
              <Link href="/espace-client" className="text-sm text-beige-100/65 transition-colors hover:text-gold-400">
                Espace client
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-beige-100/65 transition-colors hover:text-gold-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-beige-100/65">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-500" />
              <span> Avenue marceau, 75008 Paris </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-gold-500" />
              <a href="tel:+33140000000" className="hover:text-gold-400">
                +33 7 81 23 93 21
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-gold-500" />
              <a href="mailto:contact@legalleader.fr" className="hover:text-gold-400">
                contact@legal-leader.fr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-beige-100/10">
        <div className="container-xl flex flex-col gap-3 py-6 text-xs text-beige-100/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LegalLeader. Tous droits réservés. Propulsée par TECHBYWE</p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-beige-100/70">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-beige-100/70">
              Confidentialité
            </Link>
            <Link href="/cgu" className="hover:text-beige-100/70">
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
