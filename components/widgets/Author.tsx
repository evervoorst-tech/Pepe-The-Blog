import Image from "next/image";
import pepeFooter from "@/images/pepe-footer.png";
import { NeoWidget } from "@/components/Memphis";

export default function Author() {
  return (
    <NeoWidget header="Author" headerColor="var(--accent-yellow)">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            marginBottom: 8,
            lineHeight: 0,
            display: "inline-block",
            border: "3px solid #0a0a0a",
            boxShadow: "4px 4px 0 #0a0a0a",
          }}
        >
          <Image
            src={pepeFooter}
            alt="Pepe the frog author avatar"
            width={64}
            height={64}
            sizes="64px"
            style={{ display: "block" }}
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
