import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const runtime = "nodejs"
export const alt =
  "Gaurav Upadhyay — Co-Founder & Chief Scientist at amTop | Founder of ThinkFlowGPT"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const photoBytes = await readFile(join(process.cwd(), "public/Gaurav.png"))
  const photoSrc = `data:image/png;base64,${photoBytes.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0b1220 0%, #0f2744 55%, #083344 100%)",
          position: "relative",
          fontFamily: "sans-serif",
          color: "#f8fafc",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 85% 20%, rgba(34,211,238,0.22), transparent 45%), radial-gradient(circle at 15% 80%, rgba(56,189,248,0.12), transparent 40%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "56px 64px",
            gap: "48px",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 280,
              height: 280,
              borderRadius: 28,
              overflow: "hidden",
              border: "3px solid rgba(34,211,238,0.45)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoSrc}
              alt="Gaurav Upadhyay"
              width={280}
              height={280}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              flex: 1,
              maxWidth: 720,
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  borderRadius: 999,
                  background: "rgba(34,211,238,0.15)",
                  color: "#67e8f9",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                Chief Scientist · amTop
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  borderRadius: 999,
                  background: "rgba(148,163,184,0.15)",
                  color: "#e2e8f0",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                Founder · ThinkFlowGPT
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 64,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Gaurav Upadhyay
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 28,
                color: "#cbd5e1",
                lineHeight: 1.35,
                maxWidth: 680,
              }}
            >
              Building agentic AI that runs marketing — not just assists it.
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 8,
                fontSize: 22,
                color: "#94a3b8",
              }}
            >
              gauravupadhyay.vercel.app · Vadodara, India
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
