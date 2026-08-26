import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CTASection from "@/components/CTASection";
import { blogPosts, getPostBySlug } from "@/lib/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "LegalLeader" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="section-pad">
        <div className="container-xl max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-beige-100/60 transition-colors hover:text-gold-400"
          >
            <ArrowLeft size={15} />
            Retour aux actualités
          </Link>

          <div className="mt-8 flex items-center gap-3 text-xs text-beige-100/45">
            <span className="rounded-full border border-gold-500/25 px-2.5 py-1 text-gold-400">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden>·</span>
            <span>{post.readingTime} de lecture</span>
          </div>

          <h1 className="mt-5 text-balance font-heading text-3xl font-medium tracking-tight text-beige-50 md:text-4xl">
            {post.title}
          </h1>

          {post.image && (
            <div className="glass-panel relative mt-10 aspect-[16/9] w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="mt-10 space-y-6 text-base leading-relaxed text-beige-100/70">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
