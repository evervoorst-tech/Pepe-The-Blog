import { swampConditions } from "@/lib/swamp-data";
import { NeoWidget } from "@/components/Memphis";

export default function SwampConditions() {
  return (
    <NeoWidget
      header="Swamp Conditions"
      headerColor="var(--accent-blue)"
      headerTextColor="#ffffff"
    >
      <div style={{ marginBottom: 4 }}>
        💧 Humidity:{" "}
        <b style={{ color: "var(--accent-blue)" }}>{swampConditions.humidity}%</b>
      </div>
      <div style={{ marginBottom: 4 }}>
        🌡 Temp: <b>{swampConditions.temperature}</b>
      </div>
      <div style={{ marginBottom: 4 }}>
        🌧 Rain: <b>{swampConditions.rainChance}%</b>
      </div>
      <div style={{ marginBottom: 4 }}>
        🪲 Flies:{" "}
        <b style={{ color: "var(--accent-red)" }}>{swampConditions.flyDensity}</b>
      </div>
      <div
        style={{
          fontSize: 12,
          opacity: 0.6,
          marginTop: 6,
          fontFamily: "var(--font-space-mono), monospace",
        }}
      >
        {swampConditions.lillyPadsFloating} lily pads afloat
      </div>
    </NeoWidget>
  );
}
