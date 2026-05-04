import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import AboutMyPond from "@/components/widgets/AboutMyPond";
import SwampConditions from "@/components/widgets/SwampConditions";
import SwampTime from "@/components/widgets/SwampTime";
import CurrentlyCroaking from "@/components/widgets/CurrentlyCroaking";
import PepePortrait from "@/components/widgets/PepePortrait";
import Author from "@/components/widgets/Author";
import LilyPadMessages from "@/components/widgets/LilyPadMessages";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />

      <div style={{ flex: 1, padding: "12px 10px" }}>
        <table className="site-table">
          <tbody>
            <tr>
              {/* Left sidebar */}
              <td
                style={{
                  width: 175,
                  verticalAlign: "top",
                  padding: "8px 8px 8px 0",
                  borderRight: "3px solid var(--ink)",
                }}
              >
                <AboutMyPond />
                <SwampConditions />
                <SwampTime />
              </td>

              {/* Main content */}
              <td style={{ verticalAlign: "top", padding: "8px 16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    borderBottom: "3px solid var(--ink)",
                    paddingBottom: 10,
                    marginBottom: 16,
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
                    Latest Dispatches
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

                {/* Pagination */}
                <div
                  style={{
                    border: "3px solid var(--ink)",
                    background: "var(--surface)",
                    boxShadow: "4px 4px 0 var(--ink)",
                    padding: "10px 14px",
                    display: "flex",
                    justifyContent: "center",
                    gap: 16,
                    alignItems: "center",
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--ink)",
                  }}
                >
                  <span>[ &lt; PREV ]</span>
                  <span
                    style={{
                      color: "var(--ink)",
                      background: "var(--accent-yellow)",
                      padding: "0 8px",
                      border: "2px solid var(--ink)",
                    }}
                  >
                    ◆
                  </span>
                  <span>PAGE 1</span>
                  <span
                    style={{
                      color: "var(--ink)",
                      background: "var(--accent-yellow)",
                      padding: "0 8px",
                      border: "2px solid var(--ink)",
                    }}
                  >
                    ◆
                  </span>
                  <span>[ NEXT &gt; ]</span>
                </div>
              </td>

              {/* Right sidebar */}
              <td
                style={{
                  width: 175,
                  verticalAlign: "top",
                  padding: "8px 0 8px 8px",
                  borderLeft: "3px solid var(--ink)",
                }}
              >
                <PepePortrait />
                <CurrentlyCroaking />
                <Author />
                <LilyPadMessages />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <SiteFooter />
    </div>
  );
}
