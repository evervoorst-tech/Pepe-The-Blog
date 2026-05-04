import Image from "next/image";
import pepePortrait from "@/images/pepe-header.jpeg";
import { NeoWidget } from "@/components/Memphis";

export default function PepePortrait() {
  return (
    <NeoWidget header="Pepe" headerColor="var(--accent-red)" headerTextColor="#ffffff">
      <div
        style={{
          border: "3px solid #0a0a0a",
          boxShadow: "4px 4px 0 #0a0a0a",
          margin: "0 auto",
          display: "block",
          width: "fit-content",
        }}
      >
        <Image
          src={pepePortrait}
          alt="Portrait of Pepe the frog"
          width={120}
          height={180}
          sizes="120px"
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
        />
      </div>
    </NeoWidget>
  );
}
