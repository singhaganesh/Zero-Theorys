"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "SDLC", href: "#sdlc" },
    { name: "Consultation", href: "#consultation" },
  ];

  return (
    <header className="glass-header">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ 
            fontFamily: "var(--font-display)", 
            fontWeight: "700", 
            fontSize: "1.5rem", 
            letterSpacing: "-0.04em",
            display: "flex",
            alignItems: "center"
          }}>
            ZERO
            <span style={{ 
              fontWeight: "400", 
              color: "var(--accent-primary)", 
              marginLeft: "4px",
              fontFamily: "var(--font-body)"
            }}>
              THEORYS
            </span>
          </span>
        </Link>

        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: "500",
                  fontSize: "0.95rem",
                  color: isActive ? "var(--accent-primary)" : "var(--text-secondary)",
                  position: "relative",
                  transition: "var(--transition-fast)",
                  padding: "0.25rem 0"
                }}
                className="nav-link"
              >
                {link.name}
                {isActive && (
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "var(--accent-primary)",
                    borderRadius: "2px",
                    animation: "fade-in 0.3s ease forwards"
                  }} />
                )}
              </Link>
            );
          })}
        </nav>

        <div>
          <Link href="/consultation" className="btn-primary">
            Book an MVP Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
