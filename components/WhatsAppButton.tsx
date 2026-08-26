"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "33781239321"; 
const DEFAULT_MESSAGE = "Bonjour, je souhaite obtenir des informations sur vos services juridiques.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter LegalLeader sur WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 overflow-hidden rounded-full border border-beige-100/15 bg-brown-900/90 shadow-soft backdrop-blur-md transition-all duration-500 ease-fluid hover:gap-3 hover:border-gold-500/40 hover:pr-5"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950">
        <MessageCircle size={22} strokeWidth={2} />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-beige-50 transition-all duration-500 ease-fluid group-hover:max-w-[160px]">
        Discuter sur WhatsApp
      </span>
    </a>
  );
}
