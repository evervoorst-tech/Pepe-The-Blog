import { NeoWidget } from "@/components/Memphis";

const FALLBACK = { humidity: 88, temperature: 25, rainChance: 70, flyDensity: "HIGH" };

function getFlyDensity(tempC: number): string {
  if (tempC < 15) return "LOW";
  if (tempC < 24) return "MEDIUM";
  if (tempC < 30) return "HIGH";
  return "CRITICAL";
}

async function fetchSwampWeather() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=30.6179&longitude=-82.3192&current=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return FALLBACK;
    const data = await res.json();
    const c = data.current;
    return {
      humidity: Math.round(c.relative_humidity_2m),
      temperature: Math.round(c.temperature_2m),
      rainChance: Math.round(c.precipitation_probability),
      flyDensity: getFlyDensity(c.temperature_2m),
    };
  } catch {
    return FALLBACK;
  }
}

export default async function SwampConditions() {
  const weather = await fetchSwampWeather();

  return (
    <NeoWidget
      header="Swamp Conditions"
      headerColor="var(--accent-blue)"
      headerTextColor="#ffffff"
    >
      <div style={{ marginBottom: 4 }}>
        💧 Humidity:{" "}
        <b style={{ color: "var(--accent-blue)" }}>{weather.humidity}%</b>
      </div>
      <div style={{ marginBottom: 4 }}>
        🌡 Temp: <b>{weather.temperature}°C</b>
      </div>
      <div style={{ marginBottom: 4 }}>
        🌧 Rain: <b>{weather.rainChance}%</b>
      </div>
      <div style={{ marginBottom: 4 }}>
        🪲 Flies:{" "}
        <b style={{ color: "var(--accent-red)" }}>{weather.flyDensity}</b>
      </div>
      <div
        style={{
          fontSize: 12,
          opacity: 0.6,
          marginTop: 6,
          fontFamily: "var(--font-space-mono), monospace",
        }}
      >
        ~ Okefenokee Swamp, GA ~
      </div>
    </NeoWidget>
  );
}
