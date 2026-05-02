import { Post } from "@/lib/posts";

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <article className="widget-box">
      <div className="widget-header">{post.date}</div>
      <div className="widget-body">
        <h1 style={{ marginBottom: "12px", color: "var(--lily-green)" }}>{post.title}</h1>
        <hr className="retro" />
        {/* TODO: render markdown — replace with proper parser when added */}
        <div
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: "18px",
            lineHeight: "1.6",
            whiteSpace: "pre-wrap",
            marginTop: "8px",
          }}
        >
          {post.content}
        </div>
      </div>
    </article>
  );
}
