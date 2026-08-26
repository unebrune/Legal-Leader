"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/espace-client");
    router.refresh();
  }

  return (
    <button onClick={handleLogout} className="btn-secondary shrink-0 !px-5 !py-2.5 text-xs">
      <LogOut size={14} />
      Déconnexion
    </button>
  );
}