import { MemphisCard, MCircle, MSquiggle } from "@/components/Memphis";

export default function AboutMyPond() {
  return (
    <MemphisCard
      header={<><MCircle color="var(--m-blue)" size={10} /> About My Pond</>}
      headerBg="#1a4a3a"
    >
      <div style={{ fontSize: 15, fontStyle: "italic", color: "var(--lime-bright)", marginBottom: 4 }}>
        hi. i am pepe.
      </div>
      <div style={{ fontSize: 16, lineHeight: 1.4, marginBottom: 6 }}>
        i live in a swamp. i blog about flies, rain, and the meaning of sitting very still.
      </div>
      <MSquiggle color="var(--swamp-green)" width={120} />
      <div style={{ fontSize: 15, marginTop: 6 }}>📍 The Bog, Somewhere Damp</div>
      <div style={{ fontSize: 15 }}>
        <a href="/guestbook" style={{ color: "var(--lime-bright)" }}>sign my lily pad</a>
      </div>
    </MemphisCard>
  );
}
