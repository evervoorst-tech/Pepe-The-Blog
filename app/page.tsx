import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import AboutMyPond from "@/components/widgets/AboutMyPond";
import SwampConditions from "@/components/widgets/SwampConditions";
import SwampTime from "@/components/widgets/SwampTime";
import Author from "@/components/widgets/Author";
import FlyCounter from "@/components/widgets/FlyCounter";
import LilyPadMessages from "@/components/widgets/LilyPadMessages";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />

      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 260px",
            alignItems: "start",
          }}
        >
          {/* Main feed */}
          <main style={{ padding: "28px 32px", borderRight: "3px solid var(--ink)" }}>
            {/* Section label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  background: "var(--ink)",
                  color: "var(--accent-yellow)",
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "5px 12px",
                  whiteSpace: "nowrap",
                }}
              >
                Field Notes
              </div>
              <div
                style={{
                  height: 3,
                  flex: 1,
                  background:
                    "repeating-linear-gradient(90deg, var(--ink) 0px, var(--ink) 8px, transparent 8px, transparent 16px)",
                }}
              />
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

            {/* Pagination */}
            <div style={{ display: "flex", marginTop: 8 }}>
              {["← PREV", "1", "2", "NEXT →"].map((p, i) => (
                <span
                  key={p}
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    border: "2px solid var(--ink)",
                    padding: "8px 16px",
                    marginRight: -2,
                    cursor: "pointer",
                    background: i === 1 ? "var(--accent-yellow)" : "var(--surface)",
                    color: "var(--ink)",
                    boxShadow: i === 1 ? "3px 3px 0 var(--ink)" : "none",
                    display: "inline-block",
                    userSelect: "none",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </main>

          {/* Right sidebar */}
          <aside style={{ padding: "28px 20px" }}>
            <AboutMyPond />
            <Author />
            <FlyCounter />
            <LilyPadMessages />
            <SwampConditions />
            <SwampTime />
          </aside>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
