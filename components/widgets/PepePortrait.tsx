import Image from "next/image";
import pepePortrait from "@/images/pepe-header.jpeg";

export default function PepePortrait() {
  return (
    <div className="widget-box">
      <div className="widget-header">Pepe</div>
      <div className="widget-body" style={{ textAlign: "center", padding: "6px 4px" }}>
        <Image
          src={pepePortrait}
          alt="Pepe"
          width={120}
          height={180}
          style={{ imageRendering: "pixelated", display: "inline-block", maxWidth: "100%" }}
        />
      </div>
    </div>
  );
}
