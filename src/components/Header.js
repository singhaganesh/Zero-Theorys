"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const activeTheme = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(activeTheme);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "SDLC", href: "/#sdlc" },
    { name: "Consultation", href: "/#consultation" },
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

        <nav className="desktop-nav" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {navLinks.map((link) => {
            const isActive = (link.href === "/#home" && pathname === "/") || pathname === link.href;
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

        <div className="desktop-actions" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "1px solid var(--border-light)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              color: "var(--text-primary)",
              transition: "all var(--transition-fast)",
              boxShadow: "var(--shadow-sm)"
            }}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              /* Moon Icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              /* Sun Icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          <Link href="/#consultation" className="btn-primary">
            Book an MVP Consultation
          </Link>
        </div>

        {/* Mobile action elements: theme switch and menu toggle */}
        <div className="mobile-actions" style={{ display: "none", alignItems: "center", gap: "0.75rem" }}>
          <button 
            onClick={toggleTheme}
            style={{
              background: "transparent",
              border: "1px solid var(--border-light)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              color: "var(--text-primary)",
              transition: "all var(--transition-fast)",
              boxShadow: "var(--shadow-sm)"
            }}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            style={{
              background: "transparent",
              border: "1px solid var(--border-light)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              color: "var(--text-primary)",
              transition: "all var(--transition-fast)",
              boxShadow: "var(--shadow-sm)"
            }}
            className="theme-toggle-btn"
            aria-label="Open Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Drawer Overlay */}
        <div className={`mobile-drawer-overlay ${isMobileMenuOpen ? "open" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <button className="mobile-drawer-close" aria-label="Close menu" onClick={() => setIsMobileMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <nav className="mobile-drawer-nav">
              {navLinks.map((link) => {
                const isActive = (link.href === "/#home" && pathname === "/") || pathname === link.href;
                return (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`mobile-nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="mobile-drawer-actions">
              <Link 
                href="/#consultation" 
                className="btn-primary" 
                style={{ width: "100%", justifyContent: "center" }} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book an MVP Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
