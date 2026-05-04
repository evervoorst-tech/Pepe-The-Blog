import Image from "next/image";
import pepeFooter from "@/images/pepe-footer.png";
import { MemphisCard, MStarburst, MZigzag } from "@/components/Memphis";

export default function Author() {
  return (
    <MemphisCard
      header={<><MStarburst color="var(--m-yellow)" size={12} /> Author</>}
      headerBg="#1a1a0a"
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: 6, lineHeight: 0 }}>
          <Image
            src={pepeFooter}
            alt="Pepe"
            width={64}
            height={64}
            style={{ imageRendering: "pixelated", display: "inline-block" }}
          />
        </div>
        <MZigzag color="var(--m-magenta)" width={120} />
        <div
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: 16,
            color: "var(--text-dim)",
            marginTop: 6,
          }}
        >
          Pepega Designs
        </div>
      </div>
    </MemphisCard>
  );
}
