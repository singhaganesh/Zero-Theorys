import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: "var(--bg-secondary)", 
      borderTop: "1px solid var(--border-light)",
      padding: "5rem 0 3rem 0",
      marginTop: "5rem"
    }}>
      <div className="container">
        <div className="grid-3" style={{ marginBottom: "4rem" }}>
          {/* Brand Info */}
          <div>
            <span style={{ 
              fontFamily: "var(--font-display)", 
              fontWeight: "700", 
              fontSize: "1.25rem", 
              letterSpacing: "-0.04em"
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
            <p style={{ marginTop: "1rem", fontSize: "0.9rem", maxWidth: "300px" }}>
              Zero Fluff. Zero Theories. Just Production-Ready Code. Next-gen AI core architecture and enterprise systems built for scale.
            </p>
          </div>

          {/* Office coordinates */}
          <div>
            <h4 style={{ 
              fontFamily: "var(--font-display)", 
              fontSize: "0.9rem", 
              textTransform: "uppercase", 
              letterSpacing: "0.1em",
              color: "var(--text-primary)",
              marginBottom: "1.25rem"
            }}>
              Operational Footprint
            </h4>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <p style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: "500" }}>
                  Zero Theorys Headquarters
                </p>
                <p style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>
                  Bapuji Nagar, Jadavpur, <br />
                  West Bengal, India - 700092
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                  Coords: 22.4983° N, 88.3725° E
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginTop: "1.5rem" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <p style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: "500" }}>
                  Direct Pipeline
                </p>
                <a href="mailto:zerotheorys@gmail.com" className="email-link" style={{ fontSize: "0.9rem" }}>
                  zerotheorys@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Pipelines */}
          <div>
            <h4 style={{ 
              fontFamily: "var(--font-display)", 
              fontSize: "0.9rem", 
              textTransform: "uppercase", 
              letterSpacing: "0.1em",
              color: "var(--text-primary)",
              marginBottom: "1.25rem"
            }}>
              Professional Pipelines
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div style={{ 
          borderTop: "1px solid var(--border-light)", 
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem"
        }}>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Zero Theorys. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Sub-100ms API Targets</span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Automated Security Scans</span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>ISO 27001 Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
