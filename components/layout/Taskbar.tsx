"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "HOME", href: "/" },
  { label: "POSTS", href: "/blog" },
  { label: "GUESTBOOK", href: "/guestbook" },
  { label: "POND CAM", href: "/pond-cam" },
];

// 98.css-compatible box-shadows for Win98 3D bevel effect
const WIN_RAISED =
  "inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px grey, inset 2px 2px #dfdfdf";
const WIN_PRESSED =
  "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px grey";

function isActive(href: string, pathname: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Taskbar() {
  const pathname = usePathname();
  const [startOpen, setStartOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const startRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(stored ? stored === "dark" : prefersDark);
  }, []);

  // Close start menu whenever the route changes
  useEffect(() => {
    setStartOpen(false);
  }, [pathname]);

  // Close start menu on outside click
  useEffect(() => {
    if (!startOpen) return;
    function onDown(e: MouseEvent) {
      if (!startRef.current?.contains(e.target as Node)) setStartOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [startOpen]);

  // Close start menu on Escape
  useEffect(() => {
    if (!startOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setStartOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [startOpen]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 36,
        background: "#c0c0c0",
        borderTop: "2px solid #dfdfdf",
        display: "flex",
        alignItems: "center",
        padding: "2px 4px",
        gap: 2,
      }}
    >
      {/* Navigation section */}
      <nav
        aria-label="Main navigation"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        {/* Start button + popup menu */}
        <div ref={startRef} style={{ position: "relative", flexShrink: 0 }}>
          <button
            onClick={() => setStartOpen((v) => !v)}
            aria-expanded={startOpen}
            aria-haspopup="menu"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontWeight: 700,
              fontSize: 11,
              height: 28,
              padding: "0 10px",
              display: "flex",
              alignItems: "center",
              gap: 5,
              cursor: "pointer",
              background: "#c0c0c0",
              boxShadow: startOpen ? WIN_PRESSED : WIN_RAISED,
              border: "none",
              letterSpacing: 0.5,
            }}
          >
            <span aria-hidden="true" style={{ fontSize: 14, lineHeight: 1 }}>
              🐸
            </span>
            Start
          </button>

          {startOpen && (
            <ul
              role="menu"
              aria-label="Site navigation menu"
              style={{
                position: "absolute",
                bottom: "calc(100% + 2px)",
                left: 0,
                listStyle: "none",
                margin: 0,
                padding: "2px",
                background: "#c0c0c0",
                boxShadow: `${WIN_RAISED}, 2px 4px 8px rgba(0,0,0,0.4)`,
                minWidth: 180,
                zIndex: 1001,
              }}
            >
              {NAV.map((item) => {
                const active = isActive(item.href, pathname);
                return (
                  <li key={item.href} role="none">
                    <Link
                      href={item.href}
                      role="menuitem"
                      aria-current={active ? "page" : undefined}
                      className="taskbar-menu-item"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Visual separator */}
        <div
          aria-hidden="true"
          style={{
            width: 2,
            height: 24,
            borderLeft: "1px solid #808080",
            borderRight: "1px solid #ffffff",
            margin: "0 2px",
            flexShrink: 0,
          }}
        />

        {/* Section buttons */}
        {NAV.map((item) => {
          const active = isActive(item.href, pathname);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className="taskbar-nav-btn"
              style={{
                boxShadow: active ? WIN_PRESSED : WIN_RAISED,
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* System tray */}
      <div
        style={{
          flexShrink: 0,
          borderLeft: "1px solid #808080",
          borderTop: "1px solid #808080",
          borderRight: "1px solid #ffffff",
          borderBottom: "1px solid #ffffff",
          padding: "0 4px",
          height: 28,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <button
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          title={dark ? "Switch to light mode" : "Switch to dark mode"}
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: 13,
            height: 22,
            padding: "0 5px",
            background: "#c0c0c0",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            boxShadow: WIN_RAISED,
          }}
        >
          {dark ? "☀" : "◑"}
        </button>
      </div>
    </div>
  );
}
