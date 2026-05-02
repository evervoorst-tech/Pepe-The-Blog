const RECENT_MESSAGES = [
  { author: "BogWatcher99", message: "great blog!! ribbit!!", date: "2026-05-01" },
  { author: "SwampThing42", message: "the fly post changed my life", date: "2026-04-30" },
  { author: "FrogFan2000", message: "rare pepe spotted!! 🐸", date: "2026-04-29" },
];

export default function LilyPadMessages() {
  return (
    <div className="widget-box">
      <div className="widget-header">Lily Pad Messages</div>
      <div className="widget-body">
        {RECENT_MESSAGES.map((msg, i) => (
          <div
            key={i}
            style={{
              marginBottom: "6px",
              paddingBottom: "6px",
              borderBottom: i < RECENT_MESSAGES.length - 1 ? "1px solid var(--swamp-green)" : "none",
            }}
          >
            <div style={{ color: "var(--lily-green)", fontSize: "13px" }}>
              {msg.author}:
            </div>
            <div style={{ fontSize: "13px" }}>{msg.message}</div>
            <div style={{ fontSize: "11px", color: "#666" }}>{msg.date}</div>
          </div>
        ))}
        <a href="/guestbook" style={{ fontSize: "12px" }}>
          [ leave a message ]
        </a>
      </div>
    </div>
  );
}
