"use client";

import { useEffect, useState } from "react";
import { NeoWidget } from "@/components/Memphis";


export default function SwampTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    function tick() {
      setTime(fmt.format(new Date()));
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
        Eastern Time (ET)
      </div>
    </NeoWidget>
  );
}
