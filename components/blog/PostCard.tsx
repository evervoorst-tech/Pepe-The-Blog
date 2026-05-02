import { PostMeta } from "@/lib/posts";
import Link from "next/link";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div
      className="widget-box"
      style={{ marginBottom: "16px" }}
    >
      <div className="widget-header">
        {post.date} &mdash; NEW POST
      </div>
      <div className="widget-body">
        <h2 style={{ marginBottom: "8px" }}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <div style={{ fontSize: "15px", color: "var(--text-light)", marginBottom: "8px" }}>
          {post.excerpt}
        </div>
        <div>
          <Link href={`/blog/${post.slug}`} style={{ fontSize: "12px" }}>
            [ read more... ]
          </Link>
        </div>
      </div>
    </div>
  );
}
