import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { siteConfig } from "@/app/metadata"
import { blogPosts, getPost } from "@/lib/blog"
import { blogBodies } from "@/lib/blog-content"
import { BlogArticle } from "@/components/blog-article"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const url = `${siteConfig.url}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: [...post.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      images: [siteConfig.profileImage],
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [siteConfig.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [siteConfig.profileImage],
      creator: "@gauravu_ai",
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  const body = blogBodies[slug]
  if (!post || !body) notFound()

  return <BlogArticle post={post}>{body}</BlogArticle>
}
