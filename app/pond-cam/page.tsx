import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PondCam from "@/components/widgets/PondCam";
import Link from "next/link";

export const metadata = {
  title: "Pond Cam :: Pepe's Blog",
  description: "Live surveillance feed from Lily Pad South. All activity monitored.",
};

export default function PondCamPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />

      <div style={{ flex: 1, padding: "28px 32px" }}>
        <div style={{ marginBottom: 20 }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              textDecoration: "none",
              color: "var(--ink)",
              borderBottom: "2px solid var(--ink)",
            }}
          >
            ← Back to the Swamp
          </Link>
        </div>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div
            style={{
              background: "var(--ink)",
              color: "var(--accent-yellow)",
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "5px 12px",
              whiteSpace: "nowrap",
            }}
          >
            Pond Cam — Live Feed
          </div>
          <div
            style={{
              height: 3,
              flex: 1,
              background:
                "repeating-linear-gradient(90deg, var(--ink) 0px, var(--ink) 8px, transparent 8px, transparent 16px)",
            }}
          />
        </div>

        <PondCam />
      </div>

      <SiteFooter />
    </div>
  );
}
