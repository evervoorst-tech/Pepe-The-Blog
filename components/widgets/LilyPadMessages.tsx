import { MemphisCard, MDots } from "@/components/Memphis";

const RECENT_MESSAGES = [
  { author: "BogWatcher99", message: "great blog!! ribbit!!", date: "2026-05-01" },
  { author: "SwampThing42", message: "the fly post changed my life", date: "2026-04-30" },
];

export default function LilyPadMessages() {
  return (
    <MemphisCard
      header={
        <>
          <MDots color="var(--m-orange)" cols={3} rows={1} gap={8} />
          Lily Pad Messages
        </>
      }
      headerBg="#1a2a0a"
    >
      {RECENT_MESSAGES.map((msg, i) => (
        <div
          key={i}
          style={{
            marginBottom: 6,
            paddingBottom: 6,
            borderBottom: i < RECENT_MESSAGES.length - 1 ? "1px dashed var(--swamp-green)" : "none",
          }}
        >
          <div style={{ color: "var(--lime-bright)", fontSize: 16 }}>&ldquo;{msg.message}&rdquo;</div>
          <div style={{ fontSize: 14, color: "var(--text-dim)" }}>— {msg.author}</div>
        </div>
      ))}
      <a
        href="/guestbook"
        style={{
          fontFamily: "var(--font-press-start), monospace",
          fontSize: 7,
          color: "#0a0a0a",
          background: "var(--m-yellow)",
          border: "2px solid #0a0a0a",
          padding: "3px 8px",
          textDecoration: "none",
          boxShadow: "2px 2px 0 #0a0a0a",
          display: "inline-block",
          marginTop: 4,
        }}
      >
        + SIGN
      </a>
    </MemphisCard>
  );
}
