import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog"

export const dynamic = "force-static"
export const revalidate = 3600

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gauravupadhyay.vercel.app"
  const lastModified = new Date("2026-07-28")

  const routes: {
    path: string
    changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]
    priority: number
  }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
    { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/companies", changeFrequency: "monthly", priority: 0.9 },
    { path: "/research", changeFrequency: "monthly", priority: 0.8 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.95 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
    { path: "/who-is-gaurav-upadhyay", changeFrequency: "monthly", priority: 0.95 },
  ]

  const pages = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const posts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  return [...pages, ...posts]
}
