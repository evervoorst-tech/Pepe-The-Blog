import type { CSSProperties, ReactNode } from "react";

interface NeoCardProps {
  header: ReactNode;
  headerColor?: string;
  headerTextColor?: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export function NeoCard({
  header,
  headerColor = "var(--accent-yellow)",
  headerTextColor = "var(--ink)",
  children,
  style,
  className,
}: NeoCardProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        border: "3px solid var(--ink)",
        boxShadow: "6px 6px 0 var(--ink)",
        marginBottom: 20,
        position: "relative",
        ...style,
      }}
      className={className}
    >
      <div
        style={{
          backgroundColor: headerColor,
          borderBottom: "3px solid var(--ink)",
          padding: "8px 14px",
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: 11,
          fontWeight: 700,
          color: headerTextColor,
          textTransform: "uppercase",
          letterSpacing: 1,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {header}
      </div>
      <div style={{ padding: "14px" }}>{children}</div>
    </div>
  );
}

interface NeoWidgetProps {
  header: ReactNode;
  headerColor?: string;
  headerTextColor?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export function NeoWidget({
  header,
  headerColor = "var(--accent-yellow)",
  headerTextColor = "var(--ink)",
  children,
  style,
}: NeoWidgetProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        border: "3px solid var(--ink)",
        boxShadow: "5px 5px 0 var(--ink)",
        marginBottom: 12,
        position: "relative",
        ...style,
      }}
    >
      <div
        style={{
          backgroundColor: headerColor,
          borderBottom: "3px solid var(--ink)",
          padding: "6px 12px",
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: 11,
          fontWeight: 700,
          color: headerTextColor,
          textTransform: "uppercase",
          letterSpacing: 1,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {header}
      </div>
      <div
        style={{
          padding: "12px",
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: 14,
          color: "var(--ink)",
          lineHeight: 1.5,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function NeoButton({
  children,
  href,
  style,
}: {
  children: ReactNode;
  href?: string;
  style?: CSSProperties;
}) {
  const s: CSSProperties = {
    fontFamily: "var(--font-space-mono), monospace",
    fontSize: 12,
    fontWeight: 700,
    color: "var(--accent-yellow)",
    background: "var(--ink)",
    border: "3px solid var(--ink)",
    padding: "6px 14px",
    textDecoration: "none",
    boxShadow: "4px 4px 0 var(--ink)",
    display: "inline-block",
    cursor: "pointer",
    textTransform: "uppercase" as const,
    letterSpacing: 1,
    ...style,
  };
  if (href) return <a href={href} style={s}>{children}</a>;
  return <button style={s}>{children}</button>;
}

export function NeoTag({
  children,
  color = "var(--surface)",
  textColor = "var(--ink)",
}: {
  children: ReactNode;
  color?: string;
  textColor?: string;
}) {
  return (
    <span
      style={{
        border: "2px solid var(--ink)",
        background: color,
        color: textColor,
        fontFamily: "var(--font-space-mono), monospace",
        fontSize: 11,
        fontWeight: 700,
        padding: "3px 8px",
        display: "inline-block",
        boxShadow: "3px 3px 0 var(--ink)",
        marginRight: 6,
        marginBottom: 6,
        textTransform: "uppercase" as const,
        letterSpacing: 0.5,
      }}
    >
      {children}
    </span>
  );
}

// MemphisCard aliased to NeoWidget for any remaining references
export function MemphisCard({
  header,
  children,
  style,
}: {
  header: ReactNode;
  headerBg?: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <NeoWidget header={header} style={style}>
      {children}
    </NeoWidget>
  );
}
