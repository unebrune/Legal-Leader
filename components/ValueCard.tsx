import type { LucideIcon } from "lucide-react";
import Reveal from "./ScrollReveal";

export default function ValueCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <Reveal delay={index * 90} className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/25 bg-gold-500/[0.06] text-gold-400">
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="font-heading text-base font-medium text-beige-50">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-beige-100/60">{description}</p>
      </div>
    </Reveal>
  );
}
