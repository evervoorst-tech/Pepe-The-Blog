import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Link from "next/link";
import { NeoWidget } from "@/components/Memphis";

export const metadata = {
  title: "Lily Pad Messages :: Pepe's Blog",
  description: "Leave a message on Pepe's lily pad guestbook.",
};

const MESSAGES = [
  {
    author: "BogWatcher99",
    message:
      "great blog!! ribbit!! i have been following the swamp for 3 years and it only gets better",
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
    message:
      "rare pepe spotted!! 🐸 blessed to have found this website via a old geocities link",
    date: "2026-04-29",
    location: "A Nearby Puddle",
  },
];

const ACCENT_CYCLE: [string, string][] = [
  ["var(--accent-yellow)", "var(--ink)"],
  ["var(--accent-blue)", "#ffffff"],
  ["var(--accent-red)", "#ffffff"],
];

export default function GuestbookPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />

      <div style={{ flex: 1, padding: "20px", maxWidth: 700, margin: "0 auto", width: "100%" }}>
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

        <NeoWidget
          header="Lily Pad Messages"
          headerColor="var(--accent-yellow)"
          style={{ marginBottom: 20 }}
        >
          <div style={{ marginBottom: 12 }}>
            welcome to my guestbook. leave your mark on the lily pad. be nice or the frogs will
            judge you.
          </div>

          <div
            style={{
              border: "3px solid var(--ink)",
              padding: "14px",
              background: "var(--bg)",
              boxShadow: "4px 4px 0 var(--ink)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: 12,
                fontWeight: 700,
                color: "var(--ink)",
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 8,
              }}
            >
              [ SIGN THE PAD ]
            </div>
            <div
              style={{ fontSize: 14, color: "var(--ink)", opacity: 0.6, fontStyle: "italic" }}
            >
              guestbook form coming soon... the swamp is under construction.
            </div>
            <div style={{ fontSize: 13, marginTop: 6 }}>🚧 under construction 🚧</div>
          </div>
        </NeoWidget>

        <div
          style={{
            fontFamily: "var(--font-bricolage), sans-serif",
            fontWeight: 800,
            fontSize: 20,
            color: "var(--ink)",
            marginBottom: 12,
          }}
        >
          Recent Messages
        </div>

        {MESSAGES.map((msg, i) => {
          const [headerColor, headerTextColor] = ACCENT_CYCLE[i % ACCENT_CYCLE.length];
          return (
            <NeoWidget
              key={i}
              header={`${msg.author} — ${msg.date} — ${msg.location}`}
              headerColor={headerColor}
              headerTextColor={headerTextColor}
            >
              {msg.message}
            </NeoWidget>
          );
        })}
      </div>

      <SiteFooter />
    </div>
  );
}
