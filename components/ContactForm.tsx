"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/lib/data/services";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      phone: data.get("phone"),
      company: data.get("company"),
      serviceInterest: data.get("serviceInterest"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error ?? "Une erreur est survenue.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Impossible d'envoyer votre demande pour le moment.");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-panel flex flex-col items-center gap-4 p-10 text-center">
        <CheckCircle2 size={36} className="text-gold-500" />
        <h3 className="font-heading text-xl font-medium text-beige-50">
          Votre demande a bien été envoyée
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-beige-100/60">
          Un juriste LegalLeader vous recontactera sous 24h ouvrées. Vous
          pouvez également nous joindre directement via WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-2 !px-5 !py-2.5 text-xs"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel space-y-5 p-8 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom complet" htmlFor="fullName" required>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className="input-field"
          />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input-field"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Téléphone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="input-field"
          />
        </Field>
        <Field label="Société" htmlFor="company">
          <input id="company" name="company" type="text" className="input-field" />
        </Field>
      </div>

      <Field label="Service concerné" htmlFor="serviceInterest">
        <select id="serviceInterest" name="serviceInterest" className="input-field">
          <option value="">Sélectionner un service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Autre">Autre demande</option>
        </select>
      </Field>

      <Field label="Votre message" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet ou votre besoin juridique..."
          className="input-field resize-none"
        />
      </Field>

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
            Envoi en cours...
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </button>

      <p className="text-center text-xs text-beige-100/40">
        Vos données sont traitées de manière confidentielle et ne sont
        utilisées que pour répondre à votre demande.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-medium uppercase tracking-wide text-beige-100/55">
        {label} {required && <span className="text-gold-500">*</span>}
      </label>
      {children}
    </div>
  );
}
