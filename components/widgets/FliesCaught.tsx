import { flyCount } from "@/lib/swamp-data";

export default function FliesCaught() {
  return (
    <div className="widget-box">
      <div className="widget-header">Flies Caught So Far</div>
      <div className="widget-body" style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "24px",
            color: "var(--lily-green)",
            fontFamily: "var(--font-press-start), monospace",
          }}
        >
          {flyCount.toLocaleString()}
        </div>
        <div style={{ fontSize: "12px", marginTop: "4px", color: "var(--text-bright)" }}>
          visitors to the swamp
        </div>
        <div style={{ fontSize: "11px", color: "#888" }}>
          (since the bog opened)
        </div>
      </div>
    </div>
  );
}
