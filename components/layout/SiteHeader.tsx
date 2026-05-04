import NavBar from "@/components/layout/NavBar";
import { NeoTag } from "@/components/Memphis";
import SwampTicker from "../widgets/SwampTicker";

const SKILLS: [string, string, string][] = [
  ["TypeScript", "var(--accent-blue)", "#ffffff"],
  ["React", "var(--accent-yellow)", "var(--ink)"],
  ["Next.js", "var(--ink)", "var(--accent-yellow)"],
  ["Node.js", "var(--accent-yellow)", "var(--ink)"],
  ["Git", "var(--accent-red)", "#ffffff"],
];

export default function SiteHeader() {
  return (
    <header
      style={{
        background: "var(--bg)",
        borderBottom: "3px solid var(--ink)",
        position: "relative",
      }}
    >
      <div style={{ padding: "24px 24px 0" }}>
        <div
          style={{
            fontFamily: "var(--font-bricolage), sans-serif",
            fontWeight: 800,
            fontSize: 48,
            color: "var(--ink)",
            letterSpacing: -2,
            lineHeight: 1,
            marginBottom: 6,
          }}
        >
          PEPE&apos;S BLOG
        </div>
        <div
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: 14,
            color: "var(--ink)",
            opacity: 0.55,
            marginBottom: 16,
          }}
        >
          Dispatches from the Swamp · Est. MM-XXVI
        </div>
      </div>

      <NavBar />

      <div
        style={{
          borderTop: "3px solid var(--ink)",
          padding: "8px 24px",
          display: "flex",
          gap: 4,
          alignItems: "center",
          flexWrap: "wrap",
          background: "var(--bg)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {SKILLS.map(([label, color, textColor]) => (
            <NeoTag key={label} color={color} textColor={textColor}>
              {label}
            </NeoTag>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <div
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 12,
            color: "var(--ink)",
            opacity: 0.7,
          }}
        >
          github.com/evervoorst-tech · 4 repos · 21 commits
        </div>
      </div>

      <SwampTicker />
    </header>
  );
}
