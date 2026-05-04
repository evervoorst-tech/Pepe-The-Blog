import { NeoWidget, NeoButton } from "@/components/Memphis";
import { getRecentEntries } from "@/lib/guestbook";

export default async function LilyPadMessages() {
  const entries = await getRecentEntries(2);

  return (
    <NeoWidget
      header="Lily Pad Messages"
      headerColor="var(--accent-blue)"
      headerTextColor="#ffffff"
    >
      {entries.length === 0 ? (
        <div style={{ opacity: 0.6, fontStyle: "italic", fontSize: 13 }}>
          no messages yet...
        </div>
      ) : (
        entries.map((entry, i) => (
          <div
            key={entry.id}
            style={{
              marginBottom: 8,
              paddingBottom: 8,
              borderBottom: i < entries.length - 1 ? "2px solid var(--ink)" : "none",
            }}
          >
            <div style={{ marginBottom: 2 }}>&ldquo;{entry.message}&rdquo;</div>
            <div
              style={{
                fontSize: 11,
                opacity: 0.6,
                fontFamily: "var(--font-space-mono), monospace",
              }}
            >
              — {entry.author}
            </div>
          </div>
        ))
      )}
      <NeoButton href="/guestbook" style={{ marginTop: 4 }}>
        + Sign
      </NeoButton>
    </NeoWidget>
  );
}
