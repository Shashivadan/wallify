import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL of your website
  const baseUrl = "https://your-domain.com";

  // Static routes
  const routes = ["", "/about", "/generate", "/gallery", "/docs"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  return routes;
}
