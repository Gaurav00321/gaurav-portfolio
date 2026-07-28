import { cn } from "@/lib/utils"

type XIconProps = {
  className?: string
}

/** X (formerly Twitter) brand mark — not Lucide's generic close icon. */
export function XIcon({ className }: XIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-current", className)}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
