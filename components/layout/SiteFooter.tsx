import { flyCount } from "@/lib/swamp-data";

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--swamp-green)",
        borderTop: "3px solid var(--lily-green)",
        padding: "8px",
        textAlign: "center",
        fontFamily: "var(--font-vt323), monospace",
        fontSize: "14px",
        color: "var(--text-light)",
      }}
    >
      <div style={{ marginBottom: "4px" }}>
        <span className="blink-slow" style={{ color: "var(--lily-green)" }}>[ </span>
        Flies Caught So Far:{" "}
        <strong style={{ color: "var(--lily-green)" }}>{flyCount.toLocaleString()}</strong>
        <span className="blink-slow" style={{ color: "var(--lily-green)" }}> ]</span>
      </div>
      <hr className="retro" />
      <div style={{ fontSize: "12px", color: "var(--text-bright)" }}>
        Best viewed in 800x600 &nbsp;|&nbsp; Pepe&apos;s Blog &copy; 2026 &nbsp;|&nbsp;
        <a href="/guestbook">Sign the Lily Pad</a>
      </div>
      <div
        style={{
          marginTop: "4px",
          fontFamily: "var(--font-press-start), monospace",
          fontSize: "7px",
          color: "var(--swamp-green)",
        }}
      >
        NO FROGS WERE HARMED IN THE MAKING OF THIS WEBSITE
      </div>
    </footer>
  );
}
