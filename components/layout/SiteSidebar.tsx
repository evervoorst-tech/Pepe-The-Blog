import { ReactNode } from "react";

interface SiteSidebarProps {
  children: ReactNode;
  width?: number;
}

export default function SiteSidebar({ children, width = 160 }: SiteSidebarProps) {
  return (
    <td
      style={{
        width,
        verticalAlign: "top",
        padding: "4px",
        borderRight: "3px solid var(--ink)",
      }}
    >
      {children}
    </td>
  );
}
