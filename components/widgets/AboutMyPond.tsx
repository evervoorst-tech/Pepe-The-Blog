import { NeoWidget } from "@/components/Memphis";

export default function AboutMyPond() {
  return (
    <NeoWidget header="About My Pond" headerColor="var(--accent-yellow)">
      <div
        style={{
          fontFamily: "var(--font-bricolage), sans-serif",
          fontSize: 18,
          fontWeight: 800,
          marginBottom: 6,
          color: "var(--ink)",
        }}
      >
        hi. i am pepe.
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.65, marginBottom: 10, opacity: 0.7 }}>
        i live in a swamp. i blog about flies, rain, and the meaning of sitting very
        still.
      </div>
      <div
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: 11,
          marginBottom: 10,
          opacity: 0.7,
        }}
      >
        📍 The Bog, Somewhere Damp
      </div>
      <a
        href="/guestbook"
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: 10,
          fontWeight: 700,
          background: "var(--ink)",
          color: "var(--accent-yellow)",
          padding: "5px 12px",
          display: "inline-block",
          letterSpacing: "0.08em",
          textDecoration: "none",
          boxShadow: "3px 3px 0 var(--ink)",
          border: "2px solid var(--ink)",
        }}
      >
        Sign Lily Pad →
      </a>
    </NeoWidget>
  );
}
