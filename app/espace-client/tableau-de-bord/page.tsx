import { redirect } from "next/navigation";
import Link from "next/link";
import { FolderOpen } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import DossierCard from "@/components/DossierCard";
import LogoutButton from "@/components/LogoutButton";

export default async function TableauDeBordPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/espace-client");
  }

  const { data: dossiers } = await supabase
    .from("dossiers")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <section className="section-pad">
      <div className="container-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-3">Espace client</p>
            <h1 className="font-heading text-3xl font-medium tracking-tight text-beige-50 md:text-4xl">
              Bonjour {user.user_metadata?.full_name ?? user.email}
            </h1>
          </div>
          <LogoutButton />
        </div>

        <div className="mt-12">
          {!dossiers || dossiers.length === 0 ? (
            <div className="glass-panel flex flex-col items-center gap-4 p-14 text-center">
              <FolderOpen size={32} className="text-gold-500" />
              <h2 className="font-heading text-lg font-medium text-beige-50">
                Aucun dossier pour le moment
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-beige-100/60">
                Vos dossiers apparaîtront ici une fois qu'un juriste
                LegalLeader les aura ouverts suite à votre demande.
              </p>
              <Link href="/contact#devis" className="btn-primary mt-2">
                Demander un devis
              </Link>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {dossiers.map((dossier) => (
                <DossierCard key={dossier.id} dossier={dossier} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}