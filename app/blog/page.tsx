import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts :: Pepe's Blog",
  description: "All dispatches from the swamp.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <div style={{ flex: 1, padding: "20px", maxWidth: 800, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "16px" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              textDecoration: "none",
              color: "var(--ink)",
              borderBottom: "2px solid var(--ink)",
            }}
          >
            ← Back to the Swamp
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            borderBottom: "3px solid var(--ink)",
            paddingBottom: 10,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              fontSize: 20,
              color: "var(--ink)",
            }}
          >
            All Dispatches
          </span>
        </div>

        {posts.length === 0 ? (
          <div className="widget-box">
            <div className="widget-body" style={{ fontStyle: "italic" }}>
              no posts yet. the bog is quiet. too quiet.
            </div>
          </div>
        ) : (
          posts.map((post, i) => <PostCard key={post.slug} post={post} index={i} />)
        )}
      </div>
      <SiteFooter />
    </div>
  );
}
