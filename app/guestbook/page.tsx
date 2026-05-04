import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Link from "next/link";
import { NeoWidget } from "@/components/Memphis";
import GuestbookForm from "@/components/guestbook/GuestbookForm";
import { getRecentEntries } from "@/lib/guestbook";

export const metadata = {
  title: "Lily Pad Messages :: Pepe's Blog",
  description: "Leave a message on Pepe's lily pad guestbook.",
};

export const dynamic = "force-dynamic";

const ACCENT_CYCLE: [string, string][] = [
  ["var(--accent-yellow)", "var(--ink)"],
  ["var(--accent-blue)", "#ffffff"],
  ["var(--accent-red)", "#ffffff"],
];

function formatDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export default async function GuestbookPage() {
  const entries = await getRecentEntries(50);

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
          <div style={{ marginBottom: 14 }}>
            welcome to my guestbook. leave your mark on the lily pad. be nice or the frogs will
            judge you.
          </div>
          <GuestbookForm />
        </NeoWidget>

        {entries.length > 0 && (
          <>
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

            {entries.map((entry, i) => {
              const [headerColor, headerTextColor] = ACCENT_CYCLE[i % ACCENT_CYCLE.length];
              const headerLabel = [
                entry.author,
                formatDate(entry.createdAt),
                entry.location,
              ]
                .filter(Boolean)
                .join(" — ");
              return (
                <NeoWidget
                  key={entry.id}
                  header={headerLabel}
                  headerColor={headerColor}
                  headerTextColor={headerTextColor}
                >
                  {entry.message}
                </NeoWidget>
              );
            })}
          </>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
