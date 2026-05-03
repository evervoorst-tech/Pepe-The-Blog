"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "HOME", href: "/" },
  { label: "POSTS", href: "/blog" },
  { label: "GUESTBOOK", href: "/guestbook" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 10 }}>
      {NAV.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            style={{
              fontFamily: "var(--font-press-start), monospace",
              fontSize: 7,
              padding: "4px 10px",
              background: isActive ? "var(--m-yellow)" : "transparent",
              color: isActive ? "#0a0a0a" : "var(--lime-bright)",
              border: "2px solid",
              borderColor: isActive ? "#0a0a0a" : "var(--lime-bright)",
              boxShadow: isActive ? "2px 2px 0 #0a0a0a" : "none",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
