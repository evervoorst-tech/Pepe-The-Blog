"use client";

import { useState, useEffect } from "react";
import pepeFavicon from "@/images/pepe-favicon.png";

const SWAMP_SEGMENTS = [
  "humidity at 94% — fly season is UPON US",
  "ribbit",
  "local mosquito spotted wearing a hat",
  "ribbit",
  "lily pad 7 still unoccupied",
  "ribbit",
  "RARE PEPE ALERT: feels good man confirmed",
  "ribbit",
  "fog advisory in effect until further notice",
  "ribbit",
  "dragonfly spotted doing laps",
  "ribbit",
  "algae bloom rating: MAXIMUM",
  "ribbit",
  "crocodile sighted near reed cluster 4",
  "ribbit",
  "water temperature: swampy",
  "ribbit",
  "log #3 rated most comfortable for the 4th year running",
  "ribbit",
  "fly density: elevated. stay vigilant",
];

const Separator = () => (
  <img
    src={pepeFavicon.src}
    alt=""
    width={20}
    height={20}
    style={{ margin: "0 12px", flexShrink: 0 }}
  />
);

function generateTicker(count = 6) {
  return [...SWAMP_SEGMENTS].sort(() => Math.random() - 0.5).slice(0, count);
}

const tickerContent = (segments: string[]) => (
  <span style={{ display: "inline-flex", alignItems: "center" }}>
    {segments.map((seg, i) => (
      <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
        <Separator />
        {seg}
      </span>
    ))}
    <Separator />
  </span>
);

export default function SwampTicker() {
  const [ticker, setTicker] = useState<string[]>([]);

  useEffect(() => {
    setTicker(generateTicker());
    const id = setInterval(() => setTicker(generateTicker()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        background: "var(--accent-yellow)",
        borderTop: "3px solid var(--ink)",
        borderBottom: "3px solid var(--ink)",
        padding: "4px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div className="ticker-wrap">
        <div className="ticker-content">
          {tickerContent(ticker)}
          {tickerContent(ticker)}
        </div>
      </div>
    </div>
  );
}
