import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/espace-client/tableau-de-bord"],
    },
    sitemap: "https://www.legalleader.fr/sitemap.xml",
  };
}
