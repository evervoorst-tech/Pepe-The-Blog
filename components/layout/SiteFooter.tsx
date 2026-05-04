import { flyCount } from "@/lib/swamp-data";

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        borderTop: "3px solid var(--ink)",
        padding: "16px 24px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-bricolage), sans-serif",
            fontWeight: 800,
            fontSize: 22,
            color: "var(--accent-yellow)",
            letterSpacing: -0.5,
          }}
        >
          PEPE&apos;S BLOG
        </div>

        <div
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: 14,
            color: "#ffffff",
          }}
        >
          Flies Caught:{" "}
          <strong style={{ color: "var(--accent-yellow)" }}>
            {flyCount.toLocaleString()}
          </strong>
        </div>

        <div
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 11,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          Pepega Designs · Pepe&apos;s Blog © 2026 ·{" "}
          <a href="/guestbook" style={{ color: "var(--accent-yellow)" }}>
            Sign the Lily Pad
          </a>
        </div>
      </div>
    </footer>
  );
}
