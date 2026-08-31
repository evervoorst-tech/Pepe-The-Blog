import Image from "next/image";
import pepeFooter from "@/images/pepe-footer.png";

export default function Author() {
  return (
    <div
      className="neo-widget"
      style={{
        background: "var(--surface)",
        border: "3px solid var(--ink)",
        boxShadow: "5px 5px 0 var(--ink)",
        marginBottom: 12,
        position: "relative",
      }}
    >
      <div
        style={{
          background: "var(--ink)",
          borderBottom: "3px solid var(--ink)",
          padding: "6px 12px",
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: 11,
          fontWeight: 700,
          color: "var(--accent-yellow)",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Author
      </div>
      <div
        style={{
          padding: "14px 16px",
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            flexShrink: 0,
            border: "2px solid var(--ink)",
            lineHeight: 0,
            overflow: "hidden",
          }}
        >
          <Image
            src={pepeFooter}
            alt="Pepe the frog author avatar"
            width={64}
            height={64}
            sizes="64px"
            style={{ display: "block", width: 64, height: 64, objectFit: "cover" }}
          />
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontSize: 16,
              fontWeight: 800,
              color: "var(--ink)",
            }}
          >
            Eli Scott
          </div>
          <div
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 10,
              color: "var(--ink)",
              opacity: 0.6,
              marginTop: 3,
            }}
          >
            Product Owner Support
          </div>
          <div
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 10,
              color: "var(--ink)",
              opacity: 0.6,
              marginTop: 1,
            }}
          >
            4 repos · 21 commits
          </div>
        </div>
      </div>
    </div>
  );
}
