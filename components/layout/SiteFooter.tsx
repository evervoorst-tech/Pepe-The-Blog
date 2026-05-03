import Image from "next/image";
import pepeFooter from "@/images/pepe-footer.png";
import { flyCount } from "@/lib/swamp-data";
import {
  MTriangle,
  MCircle,
  MDiamond,
  MSquiggle,
  MZigzag,
} from "@/components/Memphis";

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--swamp-green)",
        borderTop: "3px solid #0a0a0a",
        padding: "10px 14px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Memphis corner shapes */}
      <MTriangle
        color="var(--m-yellow)"
        size={24}
        style={{ position: "absolute", top: 4, left: 10, opacity: 0.5 }}
      />
      <MCircle
        color="var(--m-coral)"
        size={16}
        style={{ position: "absolute", top: 8, right: 30, opacity: 0.4 }}
      />
      <MDiamond
        color="var(--m-blue)"
        size={16}
        style={{ position: "absolute", bottom: 4, right: 80, opacity: 0.4 }}
      />

      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 6, lineHeight: 0 }}>
          <Image
            src={pepeFooter}
            alt="Pepe"
            width={64}
            height={64}
            style={{ imageRendering: "pixelated", display: "inline-block" }}
          />
        </div>

        <div
          style={{
            marginBottom: 6,
            fontFamily: "var(--font-vt323), monospace",
            fontSize: 20,
            color: "var(--text-light)",
          }}
        >
          <span className="blink-slow" style={{ color: "var(--lime-bright)" }}>
            [{" "}
          </span>
          Flies Caught So Far:{" "}
          <strong style={{ color: "var(--m-yellow)" }}>
            {flyCount.toLocaleString()}
          </strong>
          <span className="blink-slow" style={{ color: "var(--lime-bright)" }}>
            {" "}
            ]
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 6,
          }}
        >
          <MSquiggle color="var(--lime-bright)" width={60} />
          <MZigzag color="var(--m-yellow)" width={60} />
          <MSquiggle color="var(--lime-bright)" width={60} />
        </div>

        <div
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: 17,
            color: "var(--text-dim)",
          }}
        >
          Pepega Designs &nbsp;|&nbsp; Pepe&apos;s Blog © 2026 &nbsp;|&nbsp;
          <a href="/guestbook" style={{ color: "var(--lime-bright)" }}>
            Sign the Lily Pad
          </a>
        </div>

        <div
          style={{
            marginTop: 4,
            fontFamily: "var(--font-press-start), monospace",
            fontSize: 6,
            color: "var(--swamp-green)",
          }}
        >
          NO FROGS WERE HARMED IN THE MAKING OF THIS WEBSITE
        </div>
      </div>
    </footer>
  );
}
