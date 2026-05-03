import { rarePepeLevel } from "@/lib/swamp-data";
import { MemphisCard, MStarburst, MZigzag } from "@/components/Memphis";

const RARITY_COLORS: Record<string, string> = {
  common: "#888",
  uncommon: "var(--lime-bright)",
  rare: "var(--m-blue)",
  "ultra rare": "var(--m-coral)",
  legendary: "var(--m-yellow)",
};

export default function RarePepeLevel() {
  const color = RARITY_COLORS[rarePepeLevel.rarity] ?? "var(--lily-green)";

  return (
    <MemphisCard
      header={<><MStarburst color="var(--m-yellow)" size={12} /> Rare Pepe Level</>}
      headerBg="#1a1a0a"
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-press-start), monospace",
            fontSize: 12,
            color,
            textShadow: "2px 2px 0 #0a0a0a",
            marginBottom: 6,
            lineHeight: 1.5,
          }}
        >
          {rarePepeLevel.level}
        </div>
        <MZigzag color="var(--m-magenta)" width={120} />
        <div style={{ fontSize: 14, color: "var(--text-dim)", marginTop: 6 }}>
          [{rarePepeLevel.rarity.toUpperCase()}]
        </div>
        <div style={{ fontSize: 14, color: "var(--text-dim)", marginTop: 2 }}>
          Pepe Score: {rarePepeLevel.score}/10
        </div>
      </div>
    </MemphisCard>
  );
}
