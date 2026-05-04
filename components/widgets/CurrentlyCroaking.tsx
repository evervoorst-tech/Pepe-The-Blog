import { currentlyCroaking } from "@/lib/swamp-data";
import { NeoWidget } from "@/components/Memphis";

export default function CurrentlyCroaking() {
  return (
    <NeoWidget header="♪ Currently Croaking" headerColor="var(--accent-yellow)">
      <div style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>
        {currentlyCroaking.track}
      </div>
      <div style={{ marginBottom: 2 }}>by {currentlyCroaking.artist}</div>
      <div
        style={{
          fontSize: 12,
          opacity: 0.6,
          marginBottom: 8,
          fontFamily: "var(--font-space-mono), monospace",
        }}
      >
        {currentlyCroaking.album}
      </div>
      <div style={{ fontSize: 13 }}>
        mood: <em style={{ fontWeight: 600 }}>{currentlyCroaking.mood}</em>
      </div>
    </NeoWidget>
  );
}
