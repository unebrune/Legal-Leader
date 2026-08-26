/**
 * Bande de logos partenaires en défilement horizontal infini.
 *
 * Pour ajouter/modifier les logos : édite le tableau `logos` ci-dessous.
 * Place les fichiers image dans /public/partenaires/.
 *
 * Astuce : des logos en PNG/SVG à fond transparent rendent mieux, car ils
 * sont affichés en niveaux de gris (couleur au survol) pour un rendu uniforme.
 */
const logos = [
  { name: "Client 1", src: "/partenaires/logo-1.png" },
  { name: "Client 2", src: "/partenaires/logo-2.png" },
  { name: "Client 3", src: "/partenaires/logo-3.png" },
  { name: "Client 4", src: "/partenaires/logo-4.png" },
  { name: "Client 5", src: "/partenaires/logo-5.png" },
  { name: "Client 6", src: "/partenaires/logo-6.png" },
];

export default function LogoMarquee() {
  // On duplique la liste pour créer une boucle visuelle continue et fluide.
  const track = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-950 to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-950 to-transparent md:w-28" />

      <div className="flex w-max animate-marquee items-center gap-16 py-2">
        {track.map((logo, i) => (
          <img
            key={`${logo.name}-${i}`}
            src={logo.src}
            alt={logo.name}
            className="h-9 w-auto shrink-0 object-contain opacity-50 grayscale transition duration-300 hover:opacity-90 hover:grayscale-0 md:h-11"
          />
        ))}
      </div>
    </div>
  );
}