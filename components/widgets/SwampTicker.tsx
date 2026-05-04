"use client";

import { useState, useEffect } from "react";

const SWAMP_SEGMENTS = [
  "humidity at 94% — fly season is UPON US",
  "local mosquito spotted wearing a hat",
  "lily pad 7 still unoccupied",
  "RARE PEPE ALERT: feels good man confirmed",
  "ribbit",
  "fog advisory in effect until further notice",
  "dragonfly spotted doing laps",
  "algae bloom rating: MAXIMUM",
  "crocodile sighted near reed cluster 4",
  "water temperature: swampy",
  "log #3 rated most comfortable for the 4th year running",
  "fly density: elevated. stay vigilant",
];

function generateTicker(count = 6) {
  return [...SWAMP_SEGMENTS]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .join(" ★★★ ");
}

export default function SwampTicker() {
  const [ticker, setTicker] = useState(() => generateTicker());

  useEffect(() => {
    const id = setInterval(() => setTicker(generateTicker()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        background: "var(--accent-yellow)",
        borderTop: "3px solid var(--ink)",
        padding: "4px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <marquee
        scrollamount={3}
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: 12,
          fontWeight: 700,
          color: "var(--ink)",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        ★ SWAMP NEWS ★ {ticker} ★
      </marquee>
    </div>
  );
}
