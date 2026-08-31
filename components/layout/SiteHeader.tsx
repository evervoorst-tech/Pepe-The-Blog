import {
  MTriangle,
  MCircle,
  MDiamond,
  MDots,
  MStarburst,
  MTag,
} from "@/components/Memphis";
import SwampTicker from "../widgets/SwampTicker";

const SKILLS: [string, string][] = [
  ["Requirements", "var(--m-blue)"],
  ["Prioritization", "var(--m-yellow)"],
  ["QA & Acceptance Criteria", "var(--m-magenta)"],
  ["Stakeholder Comms", "var(--m-orange)"],
  ["Roadmapping", "var(--m-coral)"],
];

export default function SiteHeader() {
  return (
    <header
      style={{
        background: "linear-gradient(180deg, #1a3a1a 0%, #2d5a27 100%)",
        borderBottom: "3px solid #0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Memphis background decorations */}
      <MTriangle
        color="var(--m-yellow)"
        size={32}
        style={{ position: "absolute", top: 8, right: 24, opacity: 0.7 }}
      />
      <MDiamond
        color="var(--m-coral)"
        size={22}
        style={{ position: "absolute", top: 16, right: 70, opacity: 0.6 }}
      />
      <MCircle
        color="var(--m-blue)"
        size={18}
        style={{ position: "absolute", top: 6, left: 14, opacity: 0.5 }}
      />
      <MTriangle
        color="var(--m-magenta)"
        size={18}
        style={{ position: "absolute", bottom: 20, left: 60, opacity: 0.5 }}
      />
      <MCircle
        color="var(--m-orange)"
        size={14}
        style={{ position: "absolute", bottom: 8, right: 120, opacity: 0.6 }}
      />
      <MDiamond
        color="var(--m-yellow)"
        size={14}
        style={{ position: "absolute", top: 4, left: 100, opacity: 0.4 }}
      />

      {/* Title + nav */}
      <div
        style={{
          textAlign: "center",
          padding: "14px 60px 6px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-press-start), monospace",
            fontSize: 18,
            color: "var(--lime-bright)",
            textShadow: "3px 3px 0 #0a0a0a",
            letterSpacing: 2,
            marginBottom: 5,
          }}
        >
          <span className="blink" style={{ color: "var(--m-yellow)" }}>
            ★
          </span>
          {" PEPE'S BLOG "}
          <span className="blink" style={{ color: "var(--m-yellow)" }}>
            ★
          </span>
        </div>

        <div
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: 18,
            color: "var(--text-light)",
            marginBottom: 4,
          }}
        >
          :: Dispatches from the Swamp :: Est. MM-XXVI ::
        </div>

        <div
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: 14,
            color: "var(--text-dim)",
            marginBottom: 8,
            letterSpacing: 1,
          }}
        >
          Product Owner / SME · using this swamp to practice working with engineering teams
        </div>

      </div>

      {/* Portfolio skills strip */}
      <div
        style={{
          background: "#1a4a1a",
          borderTop: "2px solid #0a0a0a",
          borderBottom: "2px solid #0a0a0a",
          padding: "6px 14px",
          display: "flex",
          gap: 12,
          alignItems: "center",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        <MDots color="var(--m-yellow)" cols={4} rows={2} gap={8} />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {SKILLS.map(([label, color]) => (
            <MTag key={label} color={color}>
              {label}
            </MTag>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <div
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: 17,
            color: "var(--lime-bright)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <MStarburst color="var(--m-yellow)" size={18} />
          <span>github.com/evervoorst-tech</span>
          <span style={{ color: "var(--text-dim)" }}>·</span>
          <span>4 repos · 21 commits</span>
        </div>
        <MDots color="var(--m-coral)" cols={4} rows={2} gap={8} />
      </div>

      {/* Marquee ticker */}
      <div
        style={{
          background: "#0a0a0a",
          borderBottom: "2px solid var(--lily-green)",
          padding: "3px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <SwampTicker />
      </div>
    </header>
  );
}
