export default function SiteHeader() {
  return (
    <header
      style={{
        background: "var(--swamp-green)",
        borderBottom: "3px solid var(--lily-green)",
        padding: "8px 0",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-press-start), monospace",
          fontSize: "20px",
          color: "var(--lily-green)",
          textShadow: "2px 2px 0 #000",
          marginBottom: "4px",
          letterSpacing: "2px",
        }}
      >
        <span className="blink" style={{ color: "#ff0" }}>★</span>
        {" PEPE'S BLOG "}
        <span className="blink" style={{ color: "#ff0" }}>★</span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-vt323), monospace",
          fontSize: "14px",
          color: "var(--text-bright)",
          marginBottom: "6px",
        }}
      >
        :: Dispatches from the Swamp :: Est. MM-XXVI ::
      </div>
      <marquee
        scrollamount={3}
        style={{
          background: "#000",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
          padding: "2px 0",
          fontSize: "14px",
          color: "var(--lily-green)",
        }}
      >
        *** SWAMP NEWS *** humidity at 94% — fly season is UPON US *** local mosquito spotted
        wearing a hat *** lily pad 7 still unoccupied *** RARE PEPE ALERT: feels good man
        confirmed *** ribbit ***
      </marquee>
    </header>
  );
}
