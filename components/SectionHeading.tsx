import Reveal from "./ScrollReveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-balance font-heading text-3xl font-medium tracking-tight text-beige-50 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-beige-100/60">
          {description}
        </p>
      )}
    </Reveal>
  );
}
