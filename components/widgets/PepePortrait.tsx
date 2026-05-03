import Image from "next/image";
import pepePortrait from "@/images/pepe-header.jpeg";
import { MemphisCard, MCircle, MTriangle } from "@/components/Memphis";

export default function PepePortrait() {
  return (
    <MemphisCard
      header={<><MCircle color="var(--m-coral)" size={10} /> Pepe</>}
      headerBg="#3a1a1a"
    >
      <div
        style={{
          position: "relative",
          border: "2px solid #0a0a0a",
          boxShadow: "3px 3px 0 #0a0a0a",
          margin: "0 auto",
          display: "block",
          width: "fit-content",
        }}
      >
        <MTriangle
          color="var(--m-yellow)"
          size={14}
          style={{ position: "absolute", top: 4, right: 4, zIndex: 1 }}
        />
        <Image
          src={pepePortrait}
          alt="Pepe"
          width={120}
          height={140}
          style={{ imageRendering: "pixelated", display: "block", maxWidth: "100%" }}
        />
      </div>
    </MemphisCard>
  );
}
