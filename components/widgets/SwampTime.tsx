"use client";

import { useEffect, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function SwampTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    function tick() {
      const now = new Date();
      setTime(
        `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
      );
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="widget-box">
      <div className="widget-header">~~ Swamp Time ~~</div>
      <div className="widget-body" style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: "32px",
            color: "var(--lily-green)",
            letterSpacing: "4px",
            minHeight: "40px",
          }}
        >
          {time ?? "--:--:--"}
        </div>
        <div style={{ fontSize: "12px", color: "var(--text-bright)" }}>
          local bog time
        </div>
      </div>
    </div>
  );
}
