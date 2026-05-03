import { swampConditions } from "@/lib/swamp-data";
import { MemphisCard, MDiamond } from "@/components/Memphis";

export default function SwampConditions() {
  return (
    <MemphisCard
      header={<><MDiamond color="var(--m-coral)" size={10} /> Swamp Conditions</>}
      headerBg="#1a3a1a"
    >
      <div style={{ marginBottom: 3 }}>
        💧 Humidity: <b style={{ color: "var(--m-yellow)" }}>{swampConditions.humidity}%</b>
      </div>
      <div style={{ marginBottom: 3 }}>
        🌡 Temp: <b style={{ color: "var(--m-blue)" }}>{swampConditions.temperature}</b>
      </div>
      <div style={{ marginBottom: 3 }}>
        🌧 Rain: <b style={{ color: "var(--m-blue)" }}>{swampConditions.rainChance}%</b>
      </div>
      <div style={{ marginBottom: 3 }}>
        🪲 Flies: <b style={{ color: "var(--m-coral)" }}>{swampConditions.flyDensity}</b>
      </div>
      <div style={{ fontSize: 14, color: "var(--text-dim)", marginTop: 6 }}>
        {swampConditions.lillyPadsFloating} lily pads afloat
      </div>
    </MemphisCard>
  );
}
