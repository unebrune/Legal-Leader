import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blog";

const SITE_URL = "https://www.legalleader.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/a-propos", "/services", "/blog", "/contact", "/espace-client"].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
