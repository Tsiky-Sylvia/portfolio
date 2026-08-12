import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tsiky Sylvia — Développeuse Full-Stack & IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          gap: "24px",
          padding: "60px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: "900",
            color: "#1f2937",
            letterSpacing: "-2px",
          }}
        >
          TS<span style={{ color: "#7c3aed" }}>.</span>
        </div>

        {/* Nom */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "800",
            color: "#111827",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Tsiky Sylvia
        </div>

        {/* Titre */}
        <div
          style={{
            fontSize: "28px",
            color: "#7c3aed",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Développeuse Full-Stack & IA — Mobile et Web
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["Next.js", "TypeScript", "Groq AI", "Android", "PostgreSQL"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "9999px",
                  padding: "8px 20px",
                  fontSize: "18px",
                  color: "#374151",
                  fontWeight: "500",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "18px",
            color: "#9ca3af",
          }}
        >
          tsiky-sylvia.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}