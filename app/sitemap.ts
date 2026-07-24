import type { MetadataRoute } from "next"

export const dynamic = "force-static"
export const revalidate = 3600

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gauravupadhyay.vercel.app"
  const lastModified = new Date("2026-07-24")

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/who-is-gaurav-upadhyay`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
