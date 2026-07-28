import Link from "next/link"
import { cn } from "@/lib/utils"

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      ) : null}
    </header>
  )
}

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative min-h-[70vh] pt-28 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsla(190,70%,45%,0.08),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_hsla(210,40%,50%,0.06),_transparent_50%)]" />
      <div className="container max-w-6xl mx-auto">{children}</div>
    </div>
  )
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[]
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
