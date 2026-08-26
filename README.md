# LegalLeader — site vitrine

Site Next.js 14 (App Router) + Tailwind CSS pour le cabinet de droit des
affaires LegalLeader. Build de production vérifié (`npm run build`, 21
routes générées sans erreur).

## Démarrage

```bash
npm install
cp .env.local.example .env.local   # renseigner vos clés Supabase
npm run dev
```

Le site fonctionne sans clés Supabase (formulaires renvoient un message
d'erreur explicite), mais l'espace client et l'envoi de devis nécessitent
un projet Supabase configuré.

## Pages livrées (phase 1 — site vitrine)

- `/` — Accueil (hero, services, valeurs, témoignages, blog, CTA)
- `/a-propos` — Mission, valeurs, méthodologie
- `/services` + `/services/[slug]` — Vue d'ensemble et 6 pages dédiées
  (création, modifications statutaires, fermeture, contrats, propriété
  intellectuelle, veille juridique)
- `/blog` + `/blog/[slug]` — Actualités juridiques (3 articles d'exemple)
- `/contact` — Formulaire de devis/contact, coordonnées, carte
- `/espace-client` — Écran de connexion (Supabase Auth : mot de passe ou
  lien magique). Le tableau de bord complet (dépôt de documents, suivi de
  dossier, messagerie) est prévu pour la phase 2.

## Configuration Supabase requise

1. Créez un projet sur [supabase.com](https://supabase.com).
2. Copiez `Project URL` et `anon public key` dans `.env.local`.
3. Créez la table utilisée par le formulaire de devis (`app/api/quote-request/route.ts`) :

```sql
create table quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  full_name text not null,
  email text not null,
  phone text,
  company text,
  service_interest text,
  message text not null,
  status text default 'new'
);

alter table quote_requests enable row level security;
create policy "Allow inserts from anon" on quote_requests
  for insert to anon with check (true);
```

4. Pour l'espace client, activez Email Auth dans Supabase Auth. Le
   dashboard de la phase 2 s'appuiera sur Supabase Storage (buckets par
   client) et Realtime pour le suivi de dossier.

5. Pour le blog en CMS (au lieu des données statiques dans
   `lib/data/blog.ts`), créez une table `blog_posts` (slug, title,
   excerpt, category, date, reading_time, content, published) et
   remplacez la lecture statique dans `app/blog/page.tsx` par une requête
   Supabase (le code commenté est déjà en place).

## Identité visuelle

- Palette : brun profond / beige / or, accents anthracite — définie dans
  `tailwind.config.js` (`colors.brown`, `colors.beige`, `colors.gold`,
  `colors.ink`).
- Typographie : famille **Geist** (package `geist`, chargée localement,
  sans dépendance réseau au build) pour titres et texte courant. Pour
  distinguer titres/texte avec Inter ou Open Sans (comme suggéré dans le
  brief initial), réintroduisez `next/font/google` dans `app/layout.tsx`
  — cela nécessite un accès réseau à Google Fonts au moment du build.
- Effets : glassmorphism (`.glass-panel`), lueur dorée, texture de bruit
  légère (`public/noise.svg`), animations discrètes définies dans
  `tailwind.config.js` (`fade-up`, `pulse-glow`, `shimmer`).
- Logo : `components/Logo.tsx` contient un monogramme "LL" temporaire —
  à remplacer par le logo définitif du cabinet (SVG recommandé).

## SEO

- Métadonnées par page via l'API `metadata` de Next.js
  (`app/layout.tsx` + `metadata` exporté par chaque page).
- Données structurées Schema.org `LegalService` (accueil), `Service`
  (pages services), `Article` (articles de blog).
- `app/sitemap.ts` et `app/robots.ts` générés automatiquement.
- Mots-clés ciblés intégrés dans les métadonnées et le contenu :
  sociétés, entreprise, SAS, SARL, SCI, contrats, marques, brevets,
  transfert de siège, région parisienne.

## Prochaines étapes suggérées

1. Provisionner le projet Supabase (tables ci-dessus + Storage + Auth).
2. Construire le tableau de bord client (`/espace-client/tableau-de-bord`)
   : liste des dossiers, statut, dépôt de fichiers, messagerie.
3. Remplacer le contenu placeholder (témoignages, coordonnées, numéro
   WhatsApp, logo) par les éléments réels du cabinet.
4. Brancher le blog sur Supabase pour une gestion éditoriale sans
   redéploiement.
5. Déployer sur Vercel (recommandé pour Next.js) en connectant le dépôt
   Git et en renseignant les variables d'environnement.
