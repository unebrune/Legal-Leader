import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Note: body copy uses the Geist family (locally bundled, no build-time
// network fetch required) for both headings and text — a deliberate
// simplification vs. pairing with Google's Inter, which keeps builds fast
// and reliable in network-restricted CI/sandbox environments. Swap in
// `next/font/google` Inter for `--font-body` if a distinct body face is
// preferred; see tailwind.config.js `fontFamily.body`.

const SITE_URL = "https://www.legalleader.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LegalLeader — Cabinet d'avocats en droit des affaires à Paris",
    template: "%s | LegalLeader",
  },
  description:
    "LegalLeader accompagne entrepreneurs et sociétés commerciales dans leurs démarches juridiques : création d'entreprise, modifications statutaires, contrats commerciaux, propriété intellectuelle. Cabinet basé à Paris, intervenant dans toute la France.",
  keywords: [
    "avocat droit des affaires Paris",
    "création société",
    "SAS",
    "SARL",
    "SCI",
    "modification statutaire",
    "transfert de siège social",
    "dépôt de marque",
    "contrats commerciaux",
    "cabinet juridique entreprise",
  ],
  authors: [{ name: "LegalLeader" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "LegalLeader",
    title: "LegalLeader — Cabinet d'avocats en droit des affaires à Paris",
    description:
      "Excellence juridique au service de vos ambitions entrepreneuriales. Création, structuration, protection : un cabinet digital et rigoureux.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LegalLeader — Cabinet d'avocats en droit des affaires",
    description:
      "Excellence juridique au service de vos ambitions entrepreneuriales.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "LegalLeader",
  description:
    "Cabinet de droit des affaires spécialisé en création d'entreprise, modifications statutaires, contrats commerciaux et propriété intellectuelle.",
  url: SITE_URL,
  telephone: "+33-1-40-00-00-00",
  email: "contact@legalleader.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 avenue des Champs-Élysées",
    addressLocality: "Paris",
    postalCode: "75008",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  priceRange: "€€€",
  sameAs: ["https://linkedin.com"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={GeistSans.variable}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
