import Image from "next/image";
import pepePortrait from "@/images/pepe-header.jpeg";
import { NeoWidget } from "@/components/Memphis";

export default function PepePortrait() {
  return (
    <NeoWidget header="Pepe" headerColor="var(--accent-red)" headerTextColor="#ffffff">
      <div
        style={{
          border: "3px solid var(--ink)",
          boxShadow: "3px 3px 0 var(--ink)",
          margin: "0 auto",
          display: "block",
          width: "fit-content",
        }}
      >
        <Image
          src={pepePortrait}
          alt="Pepe"
          width={120}
          height={140}
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
        />
      </div>
    </NeoWidget>
  );
}
