"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { label: "HOME", href: "/" },
  { label: "POSTS", href: "/blog" },
  { label: "GUESTBOOK", href: "/guestbook" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav style={{ background: "var(--ink)", display: "flex", alignItems: "center" }}>
      {NAV.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.label}
            href={item.href}
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 12,
              fontWeight: 700,
              padding: "10px 20px",
              background: isActive ? "var(--accent-yellow)" : "transparent",
              color: isActive ? "var(--ink)" : "#ffffff",
              textDecoration: "none",
              textTransform: "uppercase" as const,
              letterSpacing: 1,
              display: "inline-block",
            }}
          >
            {item.label}
          </Link>
        );
      })}
      <div style={{ flex: 1 }} />
      <ThemeToggle />
    </nav>
  );
}
