import { NeoWidget } from "@/components/Memphis";

export default function AboutMyPond() {
  return (
    <NeoWidget header="About My Pond" headerColor="var(--accent-yellow)">
      <div style={{ fontStyle: "italic", fontWeight: 600, marginBottom: 6 }}>
        hi. i am pepe.
      </div>
      <div style={{ lineHeight: 1.5, marginBottom: 8 }}>
        i live in a swamp. i blog about flies, rain, and the meaning of sitting very still.
      </div>
      <div style={{ marginBottom: 4 }}>📍 The Bog, Somewhere Damp</div>
      <div>
        <a href="/guestbook">sign my lily pad</a>
      </div>
    </NeoWidget>
  );
}
