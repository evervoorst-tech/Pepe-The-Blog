import NavBar from "@/components/layout/NavBar";
import SwampTicker from "../widgets/SwampTicker";

const SKILLS = ["TypeScript", "React", "Next.js", "Node.js", "Git"];

export default function SiteHeader() {
  return (
    <header style={{ position: "relative" }}>
      {/* Top accent bar */}
      <div
        style={{
          background: "var(--accent-yellow)",
          borderBottom: "3px solid var(--ink)",
          padding: "8px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "var(--ink)",
          }}
        >
          PEPE&apos;S BLOG — EST. 2026
        </span>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 10,
              color: "var(--ink)",
              fontWeight: 700,
            }}
          >
            github.com/evervoorst-tech
          </span>
          <span
            style={{
              background: "var(--ink)",
              color: "var(--accent-yellow)",
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 10,
              fontWeight: 700,
              padding: "3px 8px",
              letterSpacing: "0.08em",
            }}
          >
            4 REPOS · 21 COMMITS
          </span>
        </div>
      </div>

      {/* Hero */}
      <div
        style={{
          background: "var(--surface)",
          padding: "48px 40px 40px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          borderBottom: "3px solid var(--ink)",
        }}
      >
        <div style={{ position: "relative" }}>
          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              top: -16,
              right: -20,
              background: "var(--accent-red)",
              border: "2px solid var(--ink)",
              boxShadow: "3px 3px 0 var(--ink)",
              padding: "4px 10px",
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 9,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#fff",
              animation: "float-badge 2.5s ease-in-out infinite",
              zIndex: 2,
            }}
          >
            ★ New Posts
          </div>

          <div
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "var(--ink)",
            }}
          >
            PEPE&apos;S<br />BLOG
          </div>

          <div
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--ink)",
              opacity: 0.55,
              marginTop: 14,
              borderLeft: "3px solid var(--accent-yellow)",
              paddingLeft: 12,
            }}
          >
            Dispatches from the Swamp<br />
            <span style={{ fontSize: 12, fontWeight: 400 }}>
              The Bog, Somewhere Damp · Est. MM-XXVI
            </span>
          </div>
        </div>

        {/* Skills cluster */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--ink)",
              opacity: 0.55,
              marginBottom: 4,
            }}
          >
            Stack
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              justifyContent: "flex-end",
            }}
          >
            {SKILLS.map((skill, i) => (
              <span
                key={skill}
                className="skill-hover"
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  background: i === 0 ? "var(--accent-yellow)" : "var(--surface)",
                  color: "var(--ink)",
                  border: "2px solid var(--ink)",
                  boxShadow: "3px 3px 0 var(--ink)",
                  padding: "5px 12px",
                  display: "inline-block",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <NavBar />
      <SwampTicker />
    </header>
  );
}
