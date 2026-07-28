import Image from "next/image"
import { siteConfig } from "@/app/metadata"
import { cn } from "@/lib/utils"

type ProfileImageProps = {
  className?: string
  size?: "sm" | "md" | "lg" | "fill"
  priority?: boolean
  itemProp?: string
}

const sizeMap = {
  sm: { box: "h-12 w-12", px: 48 },
  md: { box: "h-24 w-24", px: 96 },
  lg: { box: "h-36 w-36 md:h-44 md:w-44", px: 176 },
  fill: { box: "relative h-full w-full", px: 512 },
}

export default function ProfileImage({
  className,
  size = "lg",
  priority = false,
  itemProp,
}: ProfileImageProps) {
  const { box, px } = sizeMap[size]

  if (size === "fill") {
    return (
      <Image
        src={siteConfig.profileImage}
        alt={siteConfig.profileImageAlt}
        fill
        className={cn("object-cover object-top", className)}
        priority={priority}
        itemProp={itemProp}
        sizes="(max-width: 768px) 100vw, 320px"
      />
    )
  }

  return (
    <Image
      src={siteConfig.profileImage}
      alt={siteConfig.profileImageAlt}
      width={px}
      height={px}
      className={cn("object-cover object-top rounded-full", box, className)}
      priority={priority}
      itemProp={itemProp}
    />
  )
}
