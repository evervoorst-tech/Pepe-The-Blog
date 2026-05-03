import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import AboutMyPond from "@/components/widgets/AboutMyPond";
import SwampConditions from "@/components/widgets/SwampConditions";
import SwampTime from "@/components/widgets/SwampTime";
import CurrentlyCroaking from "@/components/widgets/CurrentlyCroaking";
import PepePortrait from "@/components/widgets/PepePortrait";
import FliesCaught from "@/components/widgets/FliesCaught";
import LilyPadMessages from "@/components/widgets/LilyPadMessages";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />

      <div style={{ flex: 1, padding: "8px" }}>
        <table className="site-table">
          <tbody>
            <tr>
              {/* Left sidebar */}
              <td
                style={{
                  width: 170,
                  verticalAlign: "top",
                  padding: "4px",
                  borderRight: "2px solid var(--swamp-green)",
                }}
              >
                <AboutMyPond />
                <SwampConditions />
                <SwampTime />
              </td>

              {/* Main content */}
              <td style={{ verticalAlign: "top", padding: "4px 12px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-press-start), monospace",
                    fontSize: "9px",
                    color: "var(--lily-green)",
                    borderBottom: "2px solid var(--swamp-green)",
                    paddingBottom: "6px",
                    marginBottom: "12px",
                  }}
                >
                  ~~ Latest Dispatches from the Swamp ~~
                </div>

                {posts.length === 0 ? (
                  <div className="widget-box">
                    <div className="widget-body" style={{ fontStyle: "italic" }}>
                      no posts yet. the bog is quiet. too quiet.
                    </div>
                  </div>
                ) : (
                  posts.map((post) => <PostCard key={post.slug} post={post} />)
                )}
              </td>

              {/* Right sidebar */}
              <td
                style={{
                  width: 170,
                  verticalAlign: "top",
                  padding: "4px",
                  borderLeft: "2px solid var(--swamp-green)",
                }}
              >
                <PepePortrait />
                <CurrentlyCroaking />
                <FliesCaught />
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
