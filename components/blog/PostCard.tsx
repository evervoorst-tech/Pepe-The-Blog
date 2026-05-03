import { PostMeta } from "@/lib/posts";
import Link from "next/link";
import { MSquiggle, MDots } from "@/components/Memphis";

const ACCENTS = ["var(--m-yellow)", "var(--m-blue)", "var(--m-coral)"];

interface PostCardProps {
  post: PostMeta;
  index?: number;
}

export default function PostCard({ post, index = 0 }: PostCardProps) {
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <div
      style={{
        background: "var(--widget-bg)",
        border: "2px solid #0a0a0a",
        boxShadow: `5px 5px 0 ${accent}`,
        marginBottom: 20,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Memphis corner triangle */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 32px 32px 0",
          borderColor: `transparent ${accent} transparent transparent`,
          opacity: 0.8,
        }}
      />

      {/* Header bar with diagonal stripe */}
      <div
        className="pat-stripes"
        style={{
          background: "var(--swamp-green)",
          borderBottom: "2px solid #0a0a0a",
          padding: "5px 10px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-press-start), monospace",
            fontSize: 7,
            color: accent,
            textTransform: "uppercase",
          }}
        >
          {post.date} — NEW POST
        </span>
        <span className="blink" style={{ color: "var(--m-yellow)", fontSize: 14 }}>●</span>
      </div>

      <div style={{ padding: "12px 14px 14px" }}>
        <h2
          style={{
            fontFamily: "var(--font-press-start), monospace",
            fontSize: 11,
            color: "var(--lime-bright)",
            marginBottom: 10,
            lineHeight: 1.6,
            textShadow: "1px 1px 0 #0a0a0a",
          }}
        >
          <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
            {post.title}
          </Link>
        </h2>

        <div
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: 19,
            color: "var(--text-light)",
            marginBottom: 10,
            lineHeight: 1.4,
          }}
        >
          {post.excerpt}
        </div>

        <MSquiggle color="var(--swamp-green)" width={200} />

        <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 8 }}>
          <Link
            href={`/blog/${post.slug}`}
            style={{
              fontFamily: "var(--font-press-start), monospace",
              fontSize: 8,
              color: "#0a0a0a",
              background: accent,
              border: "2px solid #0a0a0a",
              padding: "4px 10px",
              textDecoration: "none",
              boxShadow: "2px 2px 0 #0a0a0a",
              display: "inline-block",
            }}
          >
            [ read more ]
          </Link>
          <MDots color={accent} cols={4} rows={1} gap={8} />
        </div>
      </div>
    </div>
  );
}
