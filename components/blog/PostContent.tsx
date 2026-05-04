import { Post } from "@/lib/posts";

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <article
      style={{
        backgroundColor: "var(--surface)",
        border: "3px solid var(--ink)",
        boxShadow: "6px 6px 0 var(--ink)",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--accent-yellow)",
          borderBottom: "3px solid var(--ink)",
          padding: "8px 16px",
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1,
          color: "var(--ink)",
        }}
      >
        {post.date}
      </div>
      <div style={{ padding: "20px" }}>
        <h1
          style={{
            fontFamily: "var(--font-bricolage), sans-serif",
            fontWeight: 800,
            marginBottom: 16,
            color: "var(--ink)",
          }}
        >
          {post.title}
        </h1>
        <hr className="retro" />
        <div
          className="prose"
          style={{ marginTop: 12 }}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
