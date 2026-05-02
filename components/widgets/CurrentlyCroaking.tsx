import { currentlyCroaking } from "@/lib/swamp-data";

export default function CurrentlyCroaking() {
  return (
    <div className="widget-box">
      <div className="widget-header">
        <span className="blink">♪</span> Currently Croaking
      </div>
      <div className="widget-body">
        <div style={{ color: "var(--lily-green)", marginBottom: "4px" }}>
          {currentlyCroaking.track}
        </div>
        <div>by {currentlyCroaking.artist}</div>
        <div style={{ fontSize: "12px", color: "var(--text-bright)" }}>
          {currentlyCroaking.album}
        </div>
        <hr className="retro" />
        <div style={{ fontSize: "12px" }}>
          mood: <em>{currentlyCroaking.mood}</em>
        </div>
      </div>
    </div>
  );
}
