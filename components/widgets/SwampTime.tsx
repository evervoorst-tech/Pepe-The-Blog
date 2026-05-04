"use client";

import { useEffect, useState } from "react";
import { NeoWidget } from "@/components/Memphis";

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
    <NeoWidget
      header="Swamp Time"
      headerColor="var(--accent-red)"
      headerTextColor="#ffffff"
    >
      <div
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontWeight: 700,
          fontSize: 22,
          color: "var(--ink)",
          textAlign: "center",
          marginBottom: 6,
          letterSpacing: 2,
          minHeight: 28,
        }}
      >
        {time ?? "--:--:--"}
      </div>
      <div
        style={{
          fontSize: 12,
          textAlign: "center",
          opacity: 0.55,
          fontFamily: "var(--font-space-mono), monospace",
        }}
      >
        bog standard time
      </div>
    </NeoWidget>
  );
}
