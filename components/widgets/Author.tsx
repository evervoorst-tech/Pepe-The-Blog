import Image from "next/image";
import pepeFooter from "@/images/pepe-footer.png";
import { NeoWidget } from "@/components/Memphis";

export default function Author() {
  return (
    <NeoWidget header="Author" headerColor="var(--accent-yellow)">
      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: 8, lineHeight: 0 }}>
          <Image
            src={pepeFooter}
            alt="Pepe"
            width={64}
            height={64}
            style={{ display: "inline-block" }}
          />
        </div>
        <div
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 12,
            opacity: 0.6,
          }}
        >
          Pepega Designs
        </div>
      </div>
    </NeoWidget>
  );
}
