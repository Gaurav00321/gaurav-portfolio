import type { Metadata } from "next"
import { siteConfig } from "@/app/metadata"

type PageMetaOptions = {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogType?: "website" | "article" | "profile"
}

/** Consistent production metadata: canonical, OG, Twitter, image. */
export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  ogType = "website",
}: PageMetaOptions): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      locale: "en_US",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.profileImage,
          width: 512,
          height: 512,
          alt: siteConfig.profileImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.profileImage],
      creator: "@gauravu_ai",
    },
  }
}
