import { swampConditions } from "@/lib/swamp-data";

export default function SwampConditions() {
  return (
    <div className="widget-box">
      <div className="widget-header">~* Swamp Conditions *~</div>
      <div className="widget-body">
        <div>Humidity: <strong>{swampConditions.humidity}%</strong></div>
        <div>Fly Density: <strong>{swampConditions.flyDensity}</strong></div>
        <div>Rain Chance: <strong>{swampConditions.rainChance}%</strong></div>
        <div>Temp: <strong>{swampConditions.temperature}</strong></div>
        <div>Visibility: <strong>{swampConditions.visibility}</strong></div>
        <hr className="retro" />
        <div style={{ fontSize: "12px", color: "var(--text-bright)" }}>
          {swampConditions.lillyPadsFloating} lily pads currently afloat
        </div>
      </div>
    </div>
  );
}
