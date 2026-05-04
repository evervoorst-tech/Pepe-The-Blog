import { NeoWidget, NeoButton } from "@/components/Memphis";

const RECENT_MESSAGES = [
  { author: "BogWatcher99", message: "great blog!! ribbit!!", date: "2026-05-01" },
  { author: "SwampThing42", message: "the fly post changed my life", date: "2026-04-30" },
];

export default function LilyPadMessages() {
  return (
    <NeoWidget
      header="Lily Pad Messages"
      headerColor="var(--accent-blue)"
      headerTextColor="#ffffff"
    >
      {RECENT_MESSAGES.map((msg, i) => (
        <div
          key={i}
          style={{
            marginBottom: 8,
            paddingBottom: 8,
            borderBottom:
              i < RECENT_MESSAGES.length - 1 ? "2px solid var(--ink)" : "none",
          }}
        >
          <div style={{ marginBottom: 2 }}>&ldquo;{msg.message}&rdquo;</div>
          <div
            style={{
              fontSize: 11,
              opacity: 0.6,
              fontFamily: "var(--font-space-mono), monospace",
            }}
          >
            — {msg.author}
          </div>
        </div>
      ))}
      <NeoButton href="/guestbook" style={{ marginTop: 4 }}>
        + Sign
      </NeoButton>
    </NeoWidget>
  );
}
