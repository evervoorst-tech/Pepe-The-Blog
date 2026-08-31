import { flyCount } from "@/lib/swamp-data";

export default function FlyCounter() {
  return (
    <div className="window" style={{ marginBottom: 12 }}>
      <div className="title-bar">
        <div className="title-bar-text">Flies Caught</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body" style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-bricolage), sans-serif",
            fontSize: 52,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          {flyCount.toLocaleString()}
        </div>
        <div
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 10,
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
