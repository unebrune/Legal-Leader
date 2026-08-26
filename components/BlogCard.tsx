import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import Reveal from "./ScrollReveal";
import type { BlogPost } from "@/lib/data/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogCard({
  post,
  index = 0,
}: {
  post: BlogPost;
  index?: number;
}) {
  return (
    <Reveal delay={index * 90}>
      <Link
        href={`/blog/${post.slug}`}
        className="glass-panel group flex h-full flex-col transition-all duration-500 ease-fluid hover:-translate-y-1 hover:border-gold-500/30"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-brown-800 to-ink-950">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-fluid group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <ImageIcon size={28} strokeWidth={1.5} className="text-beige-100/20" />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-7">
          <div className="flex items-center gap-3 text-xs text-beige-100/45">
            <span className="rounded-full border border-gold-500/25 px-2.5 py-1 text-gold-400">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden>·</span>
            <span>{post.readingTime} de lecture</span>
          </div>
          <h3 className="mt-4 font-heading text-lg font-medium leading-snug text-beige-50">
            {post.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-beige-100/60">
            {post.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-gold-400 opacity-80 transition-all duration-300 ease-fluid group-hover:gap-2.5 group-hover:opacity-100">
            Lire l'article
            <ArrowUpRight size={15} />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
