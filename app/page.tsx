import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import AboutMyPond from "@/components/widgets/AboutMyPond";
import SwampConditions from "@/components/widgets/SwampConditions";
import SwampTime from "@/components/widgets/SwampTime";
import CurrentlyCroaking from "@/components/widgets/CurrentlyCroaking";
import PepePortrait from "@/components/widgets/PepePortrait";
import RarePepeLevel from "@/components/widgets/Author";
import LilyPadMessages from "@/components/widgets/LilyPadMessages";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";
import { MDiamond } from "@/components/Memphis";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <SiteHeader />

      <div style={{ flex: 1, padding: "10px 8px" }}>
        <div
          className="site-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "175px 1fr 175px",
            alignItems: "start",
          }}
        >
          {/* Left sidebar */}
          <div
            className="site-col-left"
            style={{ padding: "8px 8px 8px 0", borderRight: "2px solid var(--swamp-green)" }}
          >
            <AboutMyPond />
            <SwampConditions />
            <SwampTime />
          </div>

          {/* Main content */}
          <div className="site-col-main" style={{ padding: "8px 16px", minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                borderBottom: "2px solid var(--swamp-green)",
                paddingBottom: 8,
                marginBottom: 16,
              }}
            >
              <MDiamond color="var(--m-yellow)" size={14} />
              <span
                style={{
                  fontFamily: "var(--font-press-start), monospace",
                  fontSize: 8,
                  color: "var(--lime-bright)",
                }}
              >
                ~~ Latest Dispatches from the Swamp ~~
              </span>
              <MDiamond color="var(--m-yellow)" size={14} />
            </div>

            {posts.length === 0 ? (
              <div className="widget-box">
                <div
                  className="widget-body"
                  style={{ fontStyle: "italic" }}
                >
                  no posts yet. the bog is quiet. too quiet.
                </div>
              </div>
            ) : (
              posts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))
            )}

            {/* Pagination */}
            <div
              style={{
                border: "2px dashed var(--swamp-green)",
                padding: "8px 12px",
                display: "flex",
                justifyContent: "center",
                gap: 16,
                alignItems: "center",
                fontFamily: "var(--font-press-start), monospace",
                fontSize: 8,
                color: "var(--text-dim)",
              }}
            >
              <span>[ &lt; prev ]</span>
              <span style={{ color: "var(--m-yellow)" }}>◆</span>
              <span>PAGE 1</span>
              <span style={{ color: "var(--m-yellow)" }}>◆</span>
              <span>[ next &gt; ]</span>
            </div>
          </div>

          {/* Right sidebar */}
          <div
            className="site-col-right"
            style={{ padding: "8px 0 8px 8px", borderLeft: "2px solid var(--swamp-green)" }}
          >
            <PepePortrait />
            <CurrentlyCroaking />
            <RarePepeLevel />
            <LilyPadMessages />
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
