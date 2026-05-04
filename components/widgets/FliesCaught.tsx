import { flyCount } from "@/lib/swamp-data";
import { NeoWidget } from "@/components/Memphis";

export default function FliesCaught() {
  return (
    <NeoWidget header="Flies Caught" headerColor="var(--accent-yellow)">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontWeight: 700,
            fontSize: 26,
            color: "var(--ink)",
          }}
        >
          {flyCount.toLocaleString()}
        </div>
        <div style={{ fontSize: 12, marginTop: 4, opacity: 0.6 }}>
          visitors to the swamp
        </div>
        <div
          style={{
            fontSize: 11,
            opacity: 0.4,
            fontFamily: "var(--font-space-mono), monospace",
          }}
        >
          (since the bog opened)
        </div>
      </div>
    </NeoWidget>
  );
}
