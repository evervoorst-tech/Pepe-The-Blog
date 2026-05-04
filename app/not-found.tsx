import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { NeoWidget, NeoButton } from "@/components/Memphis";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 480 }}>
          <NeoWidget header="404 — page not found">
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontWeight: 700,
                  fontSize: 96,
                  lineHeight: 1,
                  color: "var(--ink)",
                  marginBottom: 24,
                }}
              >
                404
              </div>
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: 16,
                  color: "var(--ink)",
                  marginBottom: 28,
                }}
              >
                you&apos;ve fallen into the bog. this page does not exist.
              </p>
              <NeoButton href="/">← back to the swamp</NeoButton>
            </div>
          </NeoWidget>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
