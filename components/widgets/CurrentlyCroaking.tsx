import { currentlyCroaking } from "@/lib/swamp-data";
import { MemphisCard, MSquiggle } from "@/components/Memphis";

export default function CurrentlyCroaking() {
  return (
    <MemphisCard
      header={
        <>
          <span className="blink" style={{ color: "var(--m-magenta)" }}>♪</span>
          Currently Croaking
        </>
      }
      headerBg="#1a0a2a"
    >
      <div style={{ color: "var(--lime-bright)", marginBottom: 3, fontWeight: "bold", fontSize: 18 }}>
        {currentlyCroaking.track}
      </div>
      <div style={{ fontSize: 17 }}>by {currentlyCroaking.artist}</div>
      <div style={{ fontSize: 15, color: "var(--text-dim)", marginBottom: 6 }}>
        {currentlyCroaking.album}
      </div>
      <MSquiggle color="var(--swamp-green)" width={120} />
      <div style={{ fontSize: 16, marginTop: 6 }}>
        mood: <em style={{ color: "var(--m-magenta)" }}>{currentlyCroaking.mood}</em>
      </div>
    </MemphisCard>
  );
}
