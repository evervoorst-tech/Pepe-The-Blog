import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Link from "next/link";

export const metadata = {
  title: "Lily Pad Messages :: Pepe's Blog",
  description: "Leave a message on Pepe's lily pad guestbook.",
};

const MESSAGES = [
  {
    author: "BogWatcher99",
    message: "great blog!! ribbit!! i have been following the swamp for 3 years and it only gets better",
    date: "2026-05-01",
    location: "Northeast Bog",
  },
  {
    author: "SwampThing42",
    message: "the fly post changed my life. i now appreciate every fly i see.",
    date: "2026-04-30",
    location: "The Murky Deep",
  },
  {
    author: "FrogFan2000",
    message: "rare pepe spotted!! 🐸 blessed to have found this website via a old geocities link",
    date: "2026-04-29",
    location: "A Nearby Puddle",
  },
];

export default function GuestbookPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />

      <div style={{ flex: 1, padding: "12px", maxWidth: 700, margin: "0 auto", width: "100%" }}>
        <div style={{ marginBottom: "8px" }}>
          <Link href="/" style={{ fontSize: "12px" }}>
            &laquo; back to the swamp
          </Link>
        </div>

        <div className="widget-box" style={{ marginBottom: "16px" }}>
          <div className="widget-header">~~ Lily Pad Messages ~~</div>
          <div className="widget-body">
            <div style={{ fontSize: "15px", marginBottom: "8px" }}>
              welcome to my guestbook. leave your mark on the lily pad. be nice or the frogs will judge you.
            </div>

            {/* Placeholder form — no backend yet */}
            <div
              style={{
                border: "2px solid var(--swamp-green)",
                padding: "8px",
                marginTop: "8px",
                background: "var(--swamp-bg)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-press-start), monospace",
                  fontSize: "8px",
                  color: "var(--lily-green)",
                  marginBottom: "6px",
                }}
              >
                [ SIGN THE PAD ]
              </div>
              <div style={{ fontSize: "13px", color: "#666", fontStyle: "italic" }}>
                guestbook form coming soon... the swamp is under construction.
              </div>
              <div className="blink-slow" style={{ fontSize: "13px", color: "var(--lily-green)", marginTop: "4px" }}>
                🚧 under construction 🚧
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            fontFamily: "var(--font-press-start), monospace",
            fontSize: "8px",
            color: "var(--lily-green)",
            marginBottom: "8px",
          }}
        >
          recent messages:
        </div>

        {MESSAGES.map((msg, i) => (
          <div className="widget-box" key={i}>
            <div className="widget-header">
              {msg.author} &mdash; {msg.date} &mdash; {msg.location}
            </div>
            <div className="widget-body">{msg.message}</div>
          </div>
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}
