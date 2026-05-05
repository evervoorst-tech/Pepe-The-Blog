"use client";
import { useState, useEffect } from "react";

const FROG: string[] = [
  // 0 idle
  "   .---.   \n  /o   o\\  \n (  ~~~  ) \n  \\     /  \n   `---'   \n   |) (|   ",
  // 1 blink
  "   .---.   \n  /-   -\\  \n (  ~~~  ) \n  \\     /  \n   `---'   \n   |) (|   ",
  // 2 tongue
  "   .---.   \n  /o   o\\  \n (  ~~~  ) \n  \\     /  \n   `---'   \n   ~~>•      ",
  // 3 look up
  "   .---.   \n  /^   ^\\  \n (  ~~~  ) \n  \\     /  \n   `---'   \n   |) (|   ",
  // 4 jump
  "   .---.   \n  /o   o\\  \n (  ~~~  ) \n /\\     /\\ \n'  `---'  '",
];

const FLY_FRAMES = ["\\•/", "/•\\"];

// [frameIndex, durationMs]
const SEQ: [number, number][] = [
  [0, 1800], [1, 130], [0, 900], [0, 1300],
  [2, 700],  [0, 1100],[3, 450], [0, 700],
  [4, 350],  [0, 200], [1, 100], [0, 2400],
];

function getFlyDensity(tempC: number): string {
  if (tempC < 15) return "LOW";
  if (tempC < 24) return "MEDIUM";
  if (tempC < 30) return "HIGH";
  return "CRITICAL";
}

type Weather = { temperature: number; humidity: number; flyDensity: string };

export default function PondCam() {
  const [seq, setSeq] = useState(0);
  const [time, setTime] = useState("--:--:--");
  const [recVis, setRecVis] = useState(true);
  const [flyEaten, setFlyEaten] = useState(false);
  const [flyWing, setFlyWing] = useState(0);
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setSeq((s) => (s + 1) % SEQ.length), SEQ[seq][1]);
    return () => clearTimeout(t);
  }, [seq]);

  useEffect(() => {
    if (SEQ[seq][0] === 2) setFlyEaten(true);
    if (seq === 0) setFlyEaten(false);
  }, [seq]);

  useEffect(() => {
    const i = setInterval(() => setFlyWing((w) => (w + 1) % 2), 110);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const tick = () => setTime(new Date().toTimeString().slice(0, 8));
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const i = setInterval(() => setRecVis((v) => !v), 900);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=30.6179&longitude=-82.3192&current=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code"
    )
      .then((r) => r.json())
      .then((data) => {
        const c = data.current;
        setWeather({
          temperature: Math.round(c.temperature_2m),
          humidity: Math.round(c.relative_humidity_2m),
          flyDensity: getFlyDensity(c.temperature_2m),
        });
      })
      .catch(() => {});
  }, []);

  const frame = FROG[SEQ[seq][0]];
  const green = "#00ff41";
  const dimGreen = "#004a00";

  return (
    <div>
      <style>{`
        @keyframes fly-buzz {
          0%   { transform: translate(0px, 0px); }
          20%  { transform: translate(3px, -3px); }
          40%  { transform: translate(-2px, -5px); }
          60%  { transform: translate(4px, -2px); }
          80%  { transform: translate(-1px, -4px); }
          100% { transform: translate(0px, 0px); }
        }
      `}</style>
      {/* CCTV Monitor */}
      <div
        style={{
          background: "var(--surface)",
          border: "3px solid var(--ink)",
          boxShadow: "8px 8px 0 var(--ink)",
          maxWidth: 640,
          margin: "0 auto",
        }}
      >
        {/* Header bar */}
        <div
          style={{
            background: "var(--ink)",
            padding: "6px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "var(--accent-yellow)",
          }}
        >
          <span>POND SECURITY SYSTEMS v1.0</span>
          <span style={{ opacity: 0.5 }}>ALL ACTIVITY MONITORED</span>
        </div>

        {/* Screen */}
        <div
          style={{
            position: "relative",
            background: "#020f02",
            overflow: "hidden",
            minHeight: 360,
          }}
        >
          {/* Scanlines overlay */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)",
              pointerEvents: "none",
              zIndex: 10,
            }}
          />

          {/* Vignette overlay */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)",
              pointerEvents: "none",
              zIndex: 11,
            }}
          />

          {/* Fly */}
          {!flyEaten && (
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "calc(50% + 28px)",
                top: "55%",
                zIndex: 15,
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: 15,
                color: green,
                textShadow: `0 0 8px ${green}`,
                animation: "fly-buzz 0.7s ease-in-out infinite",
                userSelect: "none",
              }}
            >
              {FLY_FRAMES[flyWing]}
            </div>
          )}

          {/* HUD — top */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              padding: "10px 14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 20,
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: 11,
              color: green,
              textShadow: `0 0 8px ${green}`,
            }}
          >
            <span>[CAM-01]</span>
            <span>● LILY PAD SOUTH</span>
            <span>
              <span style={{ color: recVis ? "#ff4444" : "transparent", textShadow: recVis ? "0 0 8px #ff4444" : "none" }}>
                ● REC
              </span>
              {"  "}
              {time}
            </span>
          </div>

          {/* Frog */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "64px 20px 16px",
            }}
          >
            <pre
              style={{
                color: green,
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: 20,
                lineHeight: 1.55,
                margin: 0,
                textShadow: `0 0 10px ${green}, 0 0 22px #00bb33`,
                letterSpacing: "0.04em",
                userSelect: "none",
              }}
            >
              {frame}
            </pre>
          </div>

          {/* Pond water */}
          <div style={{ display: "flex", justifyContent: "center", paddingBottom: 52 }}>
            <pre
              style={{
                color: dimGreen,
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: 13,
                lineHeight: 1.4,
                margin: 0,
                textShadow: `0 0 6px ${dimGreen}`,
                userSelect: "none",
              }}
            >
              {"  ~~~~ ~~ ~~~~ ~~~ ~~~ ~~ ~~~~\n" +
               "~~ @@ ~~~~~ ~~~ ~~~ @@ ~~~ ~~~\n" +
               "  ~~~~ ~~~ ~~ ~~~~~ ~~~ ~~~ ~~"}
            </pre>
          </div>

          {/* HUD — bottom */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "10px 14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 20,
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: 11,
              color: green,
              textShadow: `0 0 8px ${green}`,
            }}
          >
            <span>[NIGHT VISION: IR]</span>
            <span>[MOTION: DETECTED]</span>
            <span>[SIG: ▓▓▓▓░]</span>
          </div>
        </div>

        {/* Footer bar */}
        <div
          style={{
            background: "var(--ink)",
            padding: "4px 14px",
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 10,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.08em",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>PSS-CAM1 © 2026</span>
          <span>SENSOR: IR 940nm · FOV: 90°</span>
          <span>640×480</span>
        </div>
      </div>

      {/* Status widgets */}
      <div
        style={{
          maxWidth: 640,
          margin: "16px auto 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 10,
        }}
      >
        {[
          { label: "Status",         value: "● ONLINE",                                                    color: "#00cc44" },
          { label: "Fly Activity",   value: `■ ${weather ? weather.flyDensity : "---"}`,                   color: "var(--accent-red)" },
          { label: "Water Temp",     value: weather ? `${weather.temperature}°C` : "---",                  color: "var(--accent-blue)" },
          { label: "Humidity",       value: weather ? `${weather.humidity}%` : "---",                      color: "var(--ink)" },
          { label: "Last Event",     value: "SPLASH 14:02",                                                color: "var(--ink)" },
          { label: "Frogs in Frame", value: "1  (PEPE)",                                                   color: "var(--ink)" },
        ].map(({ label, value, color }) => (
          <div key={label} className="widget-box" style={{ margin: 0 }}>
            <div className="widget-header">{label}</div>
            <div
              className="widget-body"
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: 13,
                fontWeight: 700,
                color,
                padding: "10px 12px",
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
