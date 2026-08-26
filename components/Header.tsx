"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/a-propos", label: "A PROPOS" },
  { href: "/services", label: "SERVICES" },
  { href: "/blog", label: "ACTUALITE" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-fluid ${
        scrolled
          ? "border-b border-beige-100/10 bg-ink-950/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-xl flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline font-body text-sm text-beige-100/80 transition-colors duration-300 hover:text-beige-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="btn-secondary !px-5 !py-2.5 text-xs">
            Prendre rendez-vous
          </Link>
          <Link href="/contact#devis" className="btn-primary !px-5 !py-2.5 text-xs">
            Demander un devis
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-beige-100/15 text-beige-50 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-beige-100/10 bg-ink-950/95 backdrop-blur-md md:hidden">
          <nav className="container-xl flex flex-col gap-1 py-4" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm text-beige-100/85 transition-colors hover:bg-white/5 hover:text-beige-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2.5 px-3">
              <Link href="/contact" className="btn-secondary w-full">
                Prendre rendez-vous
              </Link>
              <Link href="/contact#devis" className="btn-primary w-full">
                Demander un devis
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
