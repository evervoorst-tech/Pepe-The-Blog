import type { CSSProperties, ReactNode } from "react";

interface ShapeProps {
  color?: string;
  size?: number;
  style?: CSSProperties;
}

export function MTriangle({ color = "#f5e642", size = 20, style }: ShapeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={style}>
      <polygon points="10,1 19,19 1,19" fill={color} stroke="#0a0a0a" strokeWidth="1.5" />
    </svg>
  );
}

export function MCircle({ color = "#ff5252", size = 16, style }: ShapeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={style}>
      <circle cx="8" cy="8" r="7" fill={color} stroke="#0a0a0a" strokeWidth="1.5" />
    </svg>
  );
}

export function MDiamond({ color = "#40c4ff", size = 18, style }: ShapeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" style={style}>
      <polygon points="9,1 17,9 9,17 1,9" fill={color} stroke="#0a0a0a" strokeWidth="1.5" />
    </svg>
  );
}

export function MSquiggle({ color = "#4caf50", width = 80 }: { color?: string; width?: number }) {
  const segments = Math.floor(width / 20);
  return (
    <svg width={width} height="12" viewBox={`0 0 ${width} 12`} style={{ display: "block" }}>
      {Array.from({ length: segments }).map((_, i) => (
        <path
          key={i}
          d={`M${i * 20} 6 Q${i * 20 + 5} 0 ${i * 20 + 10} 6 Q${i * 20 + 15} 12 ${i * 20 + 20} 6`}
          stroke={color}
          fill="none"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

export function MDots({
  color = "#f5e642",
  cols = 6,
  rows = 3,
  gap = 10,
}: {
  color?: string;
  cols?: number;
  rows?: number;
  gap?: number;
}) {
  return (
    <svg width={cols * gap} height={rows * gap} style={{ display: "block" }}>
      {Array.from({ length: cols * rows }).map((_, i) => {
        const x = (i % cols) * gap + gap / 2;
        const y = Math.floor(i / cols) * gap + gap / 2;
        return <circle key={i} cx={x} cy={y} r="2.5" fill={color} />;
      })}
    </svg>
  );
}

export function MZigzag({ color = "#e040fb", width = 100 }: { color?: string; width?: number }) {
  const count = Math.floor(width / 8) + 1;
  const points = Array.from({ length: count }, (_, i) => `${i * 8},${i % 2 === 0 ? 0 : 10}`).join(" ");
  return (
    <svg width={width} height="10" viewBox={`0 0 ${width} 10`} style={{ display: "block" }}>
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="miter" />
    </svg>
  );
}

export function MStarburst({ color = "#ff9100", size = 24, style }: ShapeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      {[0, 45, 90, 135].map((a) => (
        <line
          key={a}
          x1={12 + 10 * Math.cos((a * Math.PI) / 180)}
          y1={12 + 10 * Math.sin((a * Math.PI) / 180)}
          x2={12 - 10 * Math.cos((a * Math.PI) / 180)}
          y2={12 - 10 * Math.sin((a * Math.PI) / 180)}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
      <circle cx="12" cy="12" r="3" fill={color} />
    </svg>
  );
}

export function MTag({ children, color = "#f5e642" }: { children: ReactNode; color?: string }) {
  return (
    <span
      style={{
        border: "2px solid #0a0a0a",
        background: color,
        color: "#0a0a0a",
        fontFamily: "var(--font-press-start), monospace",
        fontSize: 7,
        padding: "3px 7px",
        display: "inline-block",
        boxShadow: "2px 2px 0 #0a0a0a",
        marginRight: 4,
        marginBottom: 4,
      }}
    >
      {children}
    </span>
  );
}

const DOT_PATTERN = `radial-gradient(circle, rgba(245,230,66,0.28) 2px, transparent 2px)`;

export function MemphisCard({
  header,
  headerBg = "var(--widget-header-bg)",
  children,
  style,
  className,
}: {
  header: ReactNode;
  headerBg?: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--widget-bg)",
        border: "2px solid #0a0a0a",
        boxShadow: "4px 4px 0 #0a0a0a",
        marginBottom: 12,
        position: "relative",
        ...style,
      }}
      className={className}
    >
      <div
        style={{
          backgroundColor: headerBg,
          backgroundImage: DOT_PATTERN,
          backgroundSize: "12px 12px",
          borderBottom: "2px solid #0a0a0a",
          padding: "5px 10px",
          fontFamily: "var(--font-press-start), monospace",
          fontSize: 7,
          color: "var(--m-yellow)",
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
          padding: "10px",
          fontFamily: "var(--font-vt323), monospace",
          fontSize: 18,
          color: "var(--text-light)",
          lineHeight: 1.4,
        }}
      >
        {children}
      </div>
    </div>
  );
}
