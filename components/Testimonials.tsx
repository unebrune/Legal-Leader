"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "./ScrollReveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// Placeholder testimonials — replace with verified client quotes once provided.
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "LegalLeader a structuré la création de notre SAS en moins d'une semaine, avec une clarté et une réactivité rares dans le secteur juridique.",
    name: "T. Moreau",
    role: "Fondateur, société de conseil — Paris",
  },
  {
    quote:
      "Un accompagnement précis sur nos modifications statutaires, avec un suivi digitalisé qui nous a fait gagner un temps précieux.",
    name: "S. Bakri",
    role: "Dirigeant, SARL commerce — Île-de-France",
  },
  {
    quote:
      "Le dépôt de notre marque a été géré de bout en bout, avec une pédagogie appréciable sur chaque étape de la procédure.",
    name: "A. Lefèvre",
    role: "Co-fondatrice, start-up tech — Paris",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <Reveal className="glass-panel mx-auto max-w-3xl p-9 text-center md:p-14">
      <Quote className="mx-auto mb-6 text-gold-500" size={28} strokeWidth={1.5} />
      <p className="text-balance font-heading text-xl font-medium leading-relaxed text-beige-50 md:text-2xl">
        “{active.quote}”
      </p>
      <div className="mt-7">
        <p className="text-sm font-medium text-beige-50">{active.name}</p>
        <p className="text-xs text-beige-100/50">{active.role}</p>
      </div>

      <div className="mt-9 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Témoignage précédent"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-beige-100/15 text-beige-100/70 transition-colors hover:border-gold-500/50 hover:text-gold-400"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-1.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Témoignage ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-gold-500" : "w-1.5 bg-beige-100/20"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Témoignage suivant"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-beige-100/15 text-beige-100/70 transition-colors hover:border-gold-500/50 hover:text-gold-400"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </Reveal>
  );
}
