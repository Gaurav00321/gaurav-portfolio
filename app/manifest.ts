import type { MetadataRoute } from "next"
import { siteConfig } from "./metadata"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f7",
    theme_color: "#0d4f5c",
    lang: "en",
    icons: [
      {
        src: "/Gaurav.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
