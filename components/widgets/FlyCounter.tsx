import { flyCount } from "@/lib/swamp-data";

export default function FlyCounter() {
  return (
    <div
      className="neo-widget"
      style={{
        background: "var(--accent-red)",
        border: "3px solid var(--ink)",
        boxShadow: "5px 5px 0 var(--ink)",
        marginBottom: 12,
        position: "relative",
      }}
    >
      <div
        style={{
          background: "var(--ink)",
          borderBottom: "3px solid var(--ink)",
          padding: "6px 12px",
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1,
          color: "var(--accent-red)",
        }}
      >
        Flies Caught
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div
          style={{
            fontFamily: "var(--font-bricolage), sans-serif",
            fontSize: 52,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
          }}
        >
          {flyCount.toLocaleString()}
        </div>
        <div
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 10,
            color: "var(--ink)",
            opacity: 0.6,
            marginTop: 4,
          }}
        >
          flies caught so far
        </div>
      </div>
    </div>
  );
}
