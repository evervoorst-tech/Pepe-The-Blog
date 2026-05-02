export default function AboutMyPond() {
  return (
    <div className="widget-box">
      <div className="widget-header">About My Pond</div>
      <div className="widget-body">
        <div style={{ marginBottom: "6px", fontStyle: "italic", color: "var(--lily-green)" }}>
          hi. i am pepe.
        </div>
        <div style={{ fontSize: "13px", lineHeight: "1.5" }}>
          i live in a swamp. i blog about flies, the rain, and the deeper meaning of sitting
          very still on a log.
        </div>
        <hr className="retro" />
        <div style={{ fontSize: "12px", color: "var(--text-bright)" }}>
          📍 The Bog, Somewhere Damp
        </div>
        <div style={{ fontSize: "12px" }}>
          <a href="/guestbook">sign my lily pad</a>
        </div>
      </div>
    </div>
  );
}
