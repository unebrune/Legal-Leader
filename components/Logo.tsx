import Link from "next/link";

/**
 * Placeholder wordmark. Swap for the firm's refined logo (SVG) once
 * finalized — keep the "LL" monogram treatment and gold accent bar
 * as the anchor of the visual identity if possible.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="LegalLeader — Retour à l'accueil"
    >
       <span className="relative flex h-16 w-[131px] items-center justify-center">
        <img src="/mon-logo.png" alt="Logo LegalLeader" className="h-full w-auto object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[15px] font-semibold tracking-wide text-beige-50">
          LEGALLEADER
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-beige-100/50">
          Camilia | Droit des affaires
        </span>
      </span>
    </Link>
  );
}
