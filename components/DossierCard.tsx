import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

type Dossier = {
  id: string;
  title: string;
  service_type: string | null;
  status: string;
  created_at: string;
};

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  nouveau: { label: "Nouveau", color: "text-gold-400 border-gold-500/30" },
  en_cours: { label: "En cours", color: "text-blue-300 border-blue-400/30" },
  en_attente: { label: "En attente", color: "text-orange-300 border-orange-400/30" },
  termine: { label: "Terminé", color: "text-green-300 border-green-400/30" },
};

export default function DossierCard({ dossier }: { dossier: Dossier }) {
  const status = STATUS_LABELS[dossier.status] ?? STATUS_LABELS.nouveau;

  return (
    <Link
      href={`/espace-client/tableau-de-bord/${dossier.id}`}
      className="glass-panel group flex flex-col gap-4 p-7 transition-all duration-500 ease-fluid hover:-translate-y-1 hover:border-gold-500/30"
    >
      <div className="flex items-center justify-between">
        <span className={`rounded-full border px-2.5 py-1 text-xs ${status.color}`}>
          {status.label}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-beige-100/40">
          <Clock size={13} />
          {new Date(dossier.created_at).toLocaleDateString("fr-FR")}
        </span>
      </div>
      <div>
        <h3 className="font-heading text-base font-medium text-beige-50">{dossier.title}</h3>
        {dossier.service_type && (
          <p className="mt-1 text-sm text-beige-100/55">{dossier.service_type}</p>
        )}
      </div>
      <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-gold-400 opacity-80 transition-all duration-300 ease-fluid group-hover:gap-2.5 group-hover:opacity-100">
        Voir le dossier
        <ArrowUpRight size={15} />
      </div>
    </Link>
  );
}