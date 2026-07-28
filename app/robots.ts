import type { MetadataRoute } from "next"

export const dynamic = "force-static"

/** Production robots.txt — search engines + AI answer-engine crawlers. */
export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/" as const, disallow: ["/private/", "/api/"] }

  const aiAndSearchBots = [
    "*",
    "Googlebot",
    "Google-Extended",
    "Bingbot",
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "anthropic-ai",
    "PerplexityBot",
    "Applebot-Extended",
    "Bytespider",
    "CCBot",
    "Meta-ExternalAgent",
    "cohere-ai",
    "Diffbot",
    "YouBot",
  ]

  return {
    rules: aiAndSearchBots.map((userAgent) => ({
      userAgent,
      ...allowAll,
    })),
    sitemap: "https://gauravupadhyay.vercel.app/sitemap.xml",
    host: "https://gauravupadhyay.vercel.app",
  }
}
