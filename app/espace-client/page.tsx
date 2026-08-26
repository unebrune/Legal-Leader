"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Lock, FileUp, ListChecks, MessageSquare, Loader2, AlertCircle, type LucideIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

/**
 * Client area entry point.
 *
 * Scope of this build: secure authentication screen only, wired to
 * Supabase Auth. The full dashboard (document upload/download, request
 * tracking, secure messaging — see roadmap cards below) is planned for
 * the next phase once Supabase project credentials and storage buckets
 * are provisioned. See README.md for the schema this screen expects.
 */
export default function EspaceClientPage() {
  const [mode, setMode] = useState<"signin" | "magic-link">("signin");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const data = new FormData(e.currentTarget);
    const email = String(data.get("email"));
    const password = data.get("password") ? String(data.get("password")) : undefined;

    try {
      const supabase = createClient();

      if (mode === "signin" && password) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        window.location.href = "/espace-client/tableau-de-bord";
      } else {
        const { error } = await supabase.auth.signInWithOtp({ email });
        if (error) throw error;
        setStatus("sent");
        return;
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "La connexion à Supabase n'est pas encore configurée pour cet environnement."
      );
      return;
    }

    setStatus("idle");
  }

  return (
    <section className="relative overflow-hidden bg-hero-gradient section-pad min-h-[80vh]">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03]" />
      <div className="container-xl relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow mb-5">Espace client sécurisé</p>
          <h1 className="max-w-lg text-balance font-heading text-4xl font-medium tracking-tight text-beige-50 md:text-5xl">
            Vos dossiers, documents et échanges, centralisés
          </h1>
          <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-beige-100/65">
            Connectez-vous pour suivre l'avancement de vos démarches, déposer
            vos documents en toute confidentialité et échanger directement
            avec votre juriste dédié.
          </p>

          <div className="mt-10 space-y-5">
            <RoadmapItem
              icon={FileUp}
              title="Dépôt de documents sécurisé"
              description="Transmission chiffrée de vos pièces juridiques, stockées via Supabase Storage."
            />
            <RoadmapItem
              icon={ListChecks}
              title="Suivi de dossier en temps réel"
              description="Statut de vos démarches mis à jour à chaque étape, avec notifications instantanées."
            />
            <RoadmapItem
              icon={MessageSquare}
              title="Messagerie directe avec votre juriste"
              description="Un canal sécurisé pour échanger sans passer par l'email."
            />
          </div>
        </div>

        <div className="glass-panel p-8 md:p-10">
          <div className="mb-7 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/25 bg-gold-500/[0.06] text-gold-400">
              <Lock size={17} />
            </span>
            <div>
              <h2 className="font-heading text-lg font-medium text-beige-50">Connexion</h2>
              <p className="text-xs text-beige-100/50">Accès réservé à nos clients</p>
            </div>
          </div>

          {status === "sent" ? (
            <div className="rounded-xl border border-gold-500/25 bg-gold-500/[0.06] p-5 text-sm text-beige-100/75">
              Un lien de connexion sécurisé vous a été envoyé par email. Vérifiez
              votre boîte de réception.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wide text-beige-100/55">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="input-field"
                />
              </div>

              {mode === "signin" && (
                <div>
                  <label htmlFor="password" className="mb-2 block text-xs font-medium uppercase tracking-wide text-beige-100/55">
                    Mot de passe
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="input-field"
                  />
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-2.5 rounded-xl border border-red-500/25 bg-red-500/[0.06] p-4 text-sm text-red-200/80">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Connexion...
                  </>
                ) : mode === "signin" ? (
                  "Se connecter"
                ) : (
                  "Recevoir un lien de connexion"
                )}
              </button>

              <button
                type="button"
                onClick={() => setMode(mode === "signin" ? "magic-link" : "signin")}
                className="link-underline w-full text-center text-xs text-beige-100/55"
              >
                {mode === "signin"
                  ? "Se connecter sans mot de passe"
                  : "Se connecter avec un mot de passe"}
              </button>
            </form>
          )}

          <p className="mt-7 border-t border-beige-100/10 pt-5 text-center text-xs text-beige-100/45">
            Pas encore client ?{" "}
            <Link href="/contact" className="text-gold-400 hover:underline">
              Demandez un devis
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function RoadmapItem({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-beige-100/15 bg-white/[0.03] text-gold-400">
        <Icon size={16} strokeWidth={1.75} />
      </span>
      <div>
        <h3 className="font-heading text-sm font-medium text-beige-50">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-beige-100/55">{description}</p>
      </div>
    </div>
  );
}
