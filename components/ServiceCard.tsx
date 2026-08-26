import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import Reveal from "./ScrollReveal";
import type { ServiceDetail } from "@/lib/data/services";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: ServiceDetail;
  index?: number;
}) {
  return (
    <Reveal delay={index * 90}>
      <Link
        href={`/services/${service.slug}`}
        className="glass-panel group flex h-full flex-col justify-between p-7 transition-all duration-500 ease-fluid hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-glow"
      >
        <div>
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/[0.06] text-gold-400">
            <ServiceIcon name={service.icon} size={20} strokeWidth={1.75} />
          </div>
          <h3 className="font-heading text-lg font-medium text-beige-50">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-beige-100/60">
            {service.summary}
          </p>
        </div>
        <div className="mt-8 flex items-center gap-1.5 text-sm font-medium text-gold-400 opacity-80 transition-all duration-300 ease-fluid group-hover:gap-2.5 group-hover:opacity-100">
          En savoir plus
          <ArrowUpRight size={15} className="transition-transform duration-300 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </Reveal>
  );
}
