"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Message = {
  id: string;
  content: string;
  sender_type: string;
  created_at: string;
};

export default function MessagesPanel({
  dossierId,
  userId,
  initialMessages,
}: {
  dossierId: string;
  userId: string;
  initialMessages: Message[];
}) {
  const [messages, setMessages] = useState(initialMessages);
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSend(e: FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;

    setSending(true);
    const supabase = createClient();
    const { data, error } = await supabase
      .from("messages")
      .insert({ dossier_id: dossierId, user_id: userId, sender_type: "client", content })
      .select()
      .single();

    if (!error && data) {
      setMessages((prev) => [...prev, data as Message]);
      setContent("");
    }
    setSending(false);
  }

  return (
    <div className="glass-panel flex flex-col p-7">
      <h2 className="font-heading text-base font-medium text-beige-50">Messages</h2>

      <div className="mt-5 flex-1 space-y-3 overflow-y-auto" style={{ maxHeight: 280 }}>
        {messages.length === 0 && (
          <p className="text-sm text-beige-100/45">Aucun message pour l'instant.</p>
        )}
        {messages.map((m) => (
          <div
            key={m.id}
            className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
              m.sender_type === "client"
                ? "ml-auto bg-gold-500/15 text-beige-50"
                : "bg-white/5 text-beige-100/80"
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="mt-5 flex gap-2">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Votre message..."
          className="input-field flex-1"
        />
        <button type="submit" disabled={sending} className="btn-primary !px-4 !py-3">
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}