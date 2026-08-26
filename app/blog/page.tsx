import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Actualités juridiques pour entrepreneurs",
  description:
    "Analyses et décryptages en droit des affaires : création d'entreprise, modifications statutaires, contrats commerciaux et propriété intellectuelle.",
};

// In production this page fetches published posts from Supabase:
//
// const supabase = createClient();
// const { data: posts } = await supabase
//   .from("blog_posts")
//   .select("*")
//   .eq("published", true)
//   .order("date", { ascending: false });

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient section-pad">
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="container-xl relative">
          <p className="eyebrow mb-5">Actualités juridiques</p>
          <h1 className="max-w-2xl text-balance font-heading text-4xl font-medium tracking-tight text-beige-50 md:text-5xl">
            Décryptages et analyses pour entrepreneurs
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-beige-100/65">
            Suivez l'actualité du droit des affaires et les évolutions
            réglementaires qui impactent votre entreprise.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
