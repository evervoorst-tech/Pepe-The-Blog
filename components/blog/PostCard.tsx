import { PostMeta } from "@/lib/posts";
import Link from "next/link";
import { NeoCard } from "@/components/Memphis";

const ACCENT_BG = ["var(--accent-yellow)", "var(--accent-blue)", "var(--accent-red)"];
const HEADER_TEXT = ["var(--ink)", "#ffffff", "#ffffff"];
const BTN_TEXT = ["var(--ink)", "#ffffff", "#ffffff"];

interface PostCardProps {
  post: PostMeta;
  index?: number;
}

export default function PostCard({ post, index = 0 }: PostCardProps) {
  const accentBg = ACCENT_BG[index % ACCENT_BG.length];
  const headerText = HEADER_TEXT[index % HEADER_TEXT.length];
  const btnText = BTN_TEXT[index % BTN_TEXT.length];

  return (
    <NeoCard
      header={`${post.date} — NEW POST`}
      headerColor={accentBg}
      headerTextColor={headerText}
      className="neo-card"
    >
      <h2
        style={{
          fontFamily: "var(--font-bricolage), sans-serif",
          fontWeight: 800,
          fontSize: 20,
          color: "var(--ink)",
          marginBottom: 10,
          lineHeight: 1.3,
        }}
      >
        <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
          {post.title}
        </Link>
      </h2>

      <div
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: 15,
          color: "var(--ink)",
          marginBottom: 14,
          lineHeight: 1.5,
          opacity: 0.75,
        }}
      >
        {post.excerpt}
      </div>

      <hr style={{ border: "none", borderTop: "2px solid var(--ink)", margin: "0 0 14px" }} />

      <Link
        href={`/blog/${post.slug}`}
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: 12,
          fontWeight: 700,
          color: btnText,
          background: accentBg,
          border: "3px solid var(--ink)",
          padding: "6px 14px",
          textDecoration: "none",
          boxShadow: "4px 4px 0 var(--ink)",
          display: "inline-block",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Read More →
      </Link>
    </NeoCard>
  );
}
