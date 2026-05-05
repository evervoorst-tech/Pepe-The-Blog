import { PostMeta } from "@/lib/posts";
import Link from "next/link";

const ACCENT_BG = ["var(--accent-yellow)", "var(--accent-blue)", "var(--accent-red)"];
const ACCENT_TEXT = ["var(--ink)", "#ffffff", "#ffffff"];

interface PostCardProps {
  post: PostMeta;
  index?: number;
}

export default function PostCard({ post, index = 0 }: PostCardProps) {
  const accent = ACCENT_BG[index % ACCENT_BG.length];
  const accentText = ACCENT_TEXT[index % ACCENT_TEXT.length];
  const tag = post.tag || "POST";

  return (
    <div
      className="neo-card"
      style={{
        background: "var(--surface)",
        border: "3px solid var(--ink)",
        boxShadow: "6px 6px 0 var(--ink)",
        marginBottom: 28,
        position: "relative",
      }}
    >
      {/* Corner fold */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 36px 36px 0",
          borderColor: `transparent ${accent} transparent transparent`,
        }}
      />

      {/* Card header */}
      <div
        style={{
          background: accent,
          borderBottom: "3px solid var(--ink)",
          padding: "7px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: accentText,
            }}
          >
            {post.date}
          </span>
          <span
            style={{
              background: "var(--ink)",
              color: accent,
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 9,
              fontWeight: 700,
              padding: "2px 7px",
              letterSpacing: "0.08em",
            }}
          >
            {tag}
          </span>
        </div>
        <div
          style={{
            width: 10,
            height: 10,
            background: "var(--ink)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Card body */}
      <div style={{ padding: "18px 20px 20px" }}>
        <div
          style={{
            fontFamily: "var(--font-bricolage), sans-serif",
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: 10,
          }}
        >
          <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
            {post.title}
          </Link>
        </div>

        <div
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: 14,
            lineHeight: 1.65,
            color: "var(--ink)",
            opacity: 0.65,
            marginBottom: 18,
          }}
        >
          {post.excerpt}
        </div>

        {/* Zigzag divider */}
        <svg
          width="100%"
          height="8"
          style={{ display: "block", marginBottom: 16, opacity: 0.3 }}
        >
          <polyline
            points={Array.from(
              { length: 80 },
              (_, j) => `${j * 14},${j % 2 === 0 ? 0 : 8}`
            ).join(" ")}
            fill="none"
            stroke="var(--ink)"
            strokeWidth="2"
          />
        </svg>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link
            href={`/blog/${post.slug}`}
            className="btn-hover"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              background: accent,
              border: "2px solid var(--ink)",
              boxShadow: "4px 4px 0 var(--ink)",
              padding: "7px 16px",
              color: accentText,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            [Read More →]
          </Link>
          <div style={{ display: "flex", gap: 5 }}>
            {[...Array(5)].map((_, j) => (
              <div
                key={j}
                style={{
                  width: 6,
                  height: 6,
                  background: "var(--ink)",
                  opacity: 0.25 + j * 0.15,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
