"use client";

import { useEffect, useState } from "react";
import { MemphisCard, MStarburst, MZigzag } from "@/components/Memphis";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function SwampTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    function tick() {
      const now = new Date();
      setTime(`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <MemphisCard
      header={<><MStarburst color="var(--m-orange)" size={12} /> Swamp Time</>}
      headerBg="#2a1a0a"
    >
      <div
        style={{
          fontFamily: "var(--font-press-start), monospace",
          fontSize: 16,
          color: "var(--m-yellow)",
          textAlign: "center",
          textShadow: "2px 2px 0 #0a0a0a",
          marginBottom: 6,
          letterSpacing: 2,
          minHeight: 24,
        }}
      >
        {time ?? "--:--:--"}
      </div>
      <MZigzag color="var(--m-magenta)" width={140} />
      <div style={{ fontSize: 14, textAlign: "center", color: "var(--text-dim)", marginTop: 4 }}>
        bog standard time
      </div>
    </MemphisCard>
  );
}
