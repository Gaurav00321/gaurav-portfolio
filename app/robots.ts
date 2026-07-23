import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const allowAll = {
    allow: "/",
    disallow: ["/private/", "/api/"],
  }

  return {
    rules: [
      { userAgent: "*", ...allowAll },
      // Explicit allow for AI / answer-engine crawlers
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "Google-Extended", ...allowAll },
      { userAgent: "Googlebot", ...allowAll },
      { userAgent: "ClaudeBot", ...allowAll },
      { userAgent: "anthropic-ai", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Applebot-Extended", ...allowAll },
      { userAgent: "Bytespider", ...allowAll },
      { userAgent: "CCBot", ...allowAll },
    ],
    sitemap: "https://gauravupadhyay.vercel.app/sitemap.xml",
    host: "https://gauravupadhyay.vercel.app",
  }
}
