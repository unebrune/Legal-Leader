"use client";

import { useState, type ChangeEvent } from "react";
import { FileText, Upload, Loader2, Download } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Document = {
  id: string;
  file_name: string;
  storage_path: string;
  created_at: string;
};

export default function DocumentsPanel({
  dossierId,
  userId,
  initialDocuments,
}: {
  dossierId: string;
  userId: string;
  initialDocuments: Document[];
}) {
  const [documents, setDocuments] = useState(initialDocuments);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");
    const supabase = createClient();
    const path = `${userId}/${dossierId}/${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("client-documents")
      .upload(path, file);

    if (uploadError) {
      setError("Échec de l'envoi. Vérifiez que le bucket 'client-documents' existe dans Supabase.");
      setUploading(false);
      return;
    }

    const { data, error: insertError } = await supabase
      .from("documents")
      .insert({
        dossier_id: dossierId,
        user_id: userId,
        file_name: file.name,
        storage_path: path,
        uploaded_by: "client",
      })
      .select()
      .single();

    if (!insertError && data) {
      setDocuments((prev) => [data as Document, ...prev]);
    }
    setUploading(false);
    e.target.value = "";
  }

  async function handleDownload(doc: Document) {
    const supabase = createClient();
    const { data } = await supabase.storage
      .from("client-documents")
      .createSignedUrl(doc.storage_path, 60);
    if (data?.signedUrl) {
      window.open(data.signedUrl, "_blank");
    }
  }

  return (
    <div className="glass-panel p-7">
      <h2 className="font-heading text-base font-medium text-beige-50">Documents</h2>

      <label className="btn-secondary mt-5 w-full cursor-pointer !py-3 text-xs">
        {uploading ? (
          <Loader2 size={14} className="animate-spin" />
        ) : (
          <Upload size={14} />
        )}
        {uploading ? "Envoi en cours..." : "Envoyer un document"}
        <input type="file" onChange={handleUpload} className="hidden" disabled={uploading} />
      </label>

      {error && <p className="mt-2 text-xs text-red-300">{error}</p>}

      <ul className="mt-6 space-y-2">
        {documents.length === 0 && (
          <p className="text-sm text-beige-100/45">Aucun document pour l'instant.</p>
        )}
        {documents.map((doc) => (
          <li key={doc.id}>
            <button
              onClick={() => handleDownload(doc)}
              className="flex w-full items-center gap-2.5 rounded-lg border border-beige-100/10 px-3 py-2.5 text-left text-sm text-beige-100/75 transition-colors hover:border-gold-500/30 hover:text-gold-400"
            >
              <FileText size={15} className="shrink-0 text-gold-500" />
              <span className="flex-1 truncate">{doc.file_name}</span>
              <Download size={14} className="shrink-0" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}