import React from "react";
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
  headerColor,
  headerTextColor,
  children,
  style,
  className,
}: NeoCardProps) {
  return (
    <div
      className={`window${className ? ` ${className}` : ""}`}
      style={{ marginBottom: 20, ...style }}
    >
      <div className="title-bar">
        <div className="title-bar-text">{header}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">{children}</div>
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
  headerColor,
  headerTextColor,
  children,
  style,
}: NeoWidgetProps) {
  return (
    <div className="window" style={{ marginBottom: 12, ...style }}>
      <div className="title-bar">
        <div className="title-bar-text">{header}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">{children}</div>
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
  if (href) return <a href={href} style={style}>{children}</a>;
  return <button style={style}>{children}</button>;
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
      className="neo-tag"
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

export function MDiamond({ color = "currentColor", size = 12, style }: { color?: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" style={{ display: "inline-block", flexShrink: 0, ...style }}>
      <polygon points="6,0 12,6 6,12 0,6" fill={color} />
    </svg>
  );
}

export function MTriangle({ color = "currentColor", size = 12, style }: { color?: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" style={{ display: "inline-block", flexShrink: 0, ...style }}>
      <polygon points="6,0 12,12 0,12" fill={color} />
    </svg>
  );
}

export function MCircle({ color = "currentColor", size = 12, style }: { color?: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" style={{ display: "inline-block", flexShrink: 0, ...style }}>
      <circle cx="6" cy="6" r="6" fill={color} />
    </svg>
  );
}

export function MDots({ color = "currentColor", cols = 4, rows = 2, gap = 6 }: { color?: string; cols?: number; rows?: number; gap?: number }) {
  const r = 2;
  const w = cols * gap;
  const h = rows * gap;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: "inline-block", flexShrink: 0 }}>
      {Array.from({ length: rows }, (_, row) =>
        Array.from({ length: cols }, (_, col) => (
          <circle key={`${row}-${col}`} cx={col * gap + r} cy={row * gap + r} r={r} fill={color} />
        ))
      )}
    </svg>
  );
}

export function MStarburst({ color = "currentColor", size = 12 }: { color?: string; size?: number }) {
  const pts = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI) / 4;
    const r = i % 2 === 0 ? size / 2 : size / 4;
    return `${size / 2 + r * Math.cos(angle)},${size / 2 + r * Math.sin(angle)}`;
  }).join(" ");
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: "inline-block", flexShrink: 0 }}>
      <polygon points={pts} fill={color} />
    </svg>
  );
}

export function MTag({ color = "currentColor", children }: { color?: string; children?: React.ReactNode }) {
  return (
    <span style={{ background: color, padding: "2px 8px", marginRight: 4, display: "inline-block", fontSize: 11, fontWeight: 700 }}>
      {children}
    </span>
  );
}

export function MSquiggle({ color = "currentColor", width = 60 }: { color?: string; width?: number }) {
  const h = 8;
  const segs = Math.floor(width / 8);
  const pts = Array.from({ length: segs + 1 }, (_, i) => `${i * 8},${i % 2 === 0 ? 0 : h}`).join(" ");
  return (
    <svg width={width} height={h} viewBox={`0 0 ${width} ${h}`} style={{ display: "inline-block", flexShrink: 0 }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function MZigzag({ color = "currentColor", width = 60 }: { color?: string; width?: number }) {
  const h = 8;
  const segs = Math.floor(width / 8);
  const pts = Array.from({ length: segs + 1 }, (_, i) => `${i * 8},${i % 2 === 0 ? h : 0}`).join(" ");
  return (
    <svg width={width} height={h} viewBox={`0 0 ${width} ${h}`} style={{ display: "inline-block", flexShrink: 0 }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" />
    </svg>
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
