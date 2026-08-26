import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import DocumentsPanel from "@/components/DocumentsPanel";
import MessagesPanel from "@/components/MessagesPanel";

export default async function DossierDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/espace-client");

  const { data: dossier } = await supabase
    .from("dossiers")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!dossier) notFound();

  const { data: documents } = await supabase
    .from("documents")
    .select("*")
    .eq("dossier_id", params.id)
    .order("created_at", { ascending: false });

  const { data: messages } = await supabase
    .from("messages")
    .select("*")
    .eq("dossier_id", params.id)
    .order("created_at", { ascending: true });

  return (
    <section className="section-pad">
      <div className="container-xl max-w-4xl">
        <Link
          href="/espace-client/tableau-de-bord"
          className="inline-flex items-center gap-1.5 text-sm text-beige-100/60 transition-colors hover:text-gold-400"
        >
          <ArrowLeft size={15} />
          Retour à mes dossiers
        </Link>

        <h1 className="mt-6 font-heading text-3xl font-medium tracking-tight text-beige-50">
          {dossier.title}
        </h1>
        {dossier.service_type && (
          <p className="mt-2 text-beige-100/60">{dossier.service_type}</p>
        )}

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <DocumentsPanel
            dossierId={dossier.id}
            userId={user.id}
            initialDocuments={documents ?? []}
          />
          <MessagesPanel
            dossierId={dossier.id}
            userId={user.id}
            initialMessages={messages ?? []}
          />
        </div>
      </div>
    </section>
  );
}