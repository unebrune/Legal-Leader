import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * Handles quote / contact form submissions.
 *
 * Expects Supabase table `quote_requests` with columns:
 *   id uuid default gen_random_uuid() primary key,
 *   created_at timestamptz default now(),
 *   full_name text, email text, phone text,
 *   company text, service_interest text,
 *   message text, status text default 'new'
 *
 * A Supabase Realtime subscription on this table can drive
 * internal notifications (e.g. via a database webhook to Slack/email).
 */
export async function POST(request: Request) {
  const body = await request.json();
  const { fullName, email, phone, company, serviceInterest, message } = body;

  if (!fullName || !email || !message) {
    return NextResponse.json(
      { error: "Merci de renseigner votre nom, votre email et votre message." },
      { status: 400 }
    );
  }

  try {
    const supabase = createClient();
    const { error } = await supabase.from("quote_requests").insert({
      full_name: fullName,
      email,
      phone: phone || null,
      company: company || null,
      service_interest: serviceInterest || null,
      message,
      status: "new",
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    // In this demo environment, Supabase credentials are not configured.
    // The request shape is validated and ready to persist once
    // NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are set.
    console.error("quote-request submission failed:", err);
    return NextResponse.json(
      {
        error:
          "La connexion à la base de données n'est pas encore configurée. Voir .env.local.example.",
      },
      { status: 503 }
    );
  }
}
