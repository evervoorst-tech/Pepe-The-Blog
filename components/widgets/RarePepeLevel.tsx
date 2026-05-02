import { rarePepeLevel } from "@/lib/swamp-data";

const RARITY_COLORS: Record<string, string> = {
  common: "#888",
  uncommon: "#69f0ae",
  rare: "#40c4ff",
  "ultra rare": "#ff4081",
  legendary: "#ffd740",
};

export default function RarePepeLevel() {
  const color = RARITY_COLORS[rarePepeLevel.rarity] ?? "var(--lily-green)";

  return (
    <div className="widget-box">
      <div className="widget-header">Today&apos;s Rare Pepe Level</div>
      <div className="widget-body" style={{ textAlign: "center" }}>
        <div style={{ fontSize: "18px", color, marginBottom: "4px" }}>
          {rarePepeLevel.level}
        </div>
        <div
          style={{
            fontSize: "11px",
            color,
            fontFamily: "var(--font-press-start), monospace",
            marginBottom: "6px",
          }}
        >
          [{rarePepeLevel.rarity.toUpperCase()}]
        </div>
        <hr className="retro" />
        <div style={{ fontSize: "13px", color: "var(--text-light)", textAlign: "left" }}>
          {rarePepeLevel.description}
        </div>
        <div style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>
          Pepe Score: {rarePepeLevel.score}/10
        </div>
      </div>
    </div>
  );
}
