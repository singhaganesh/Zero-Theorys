"use client";

import { useState } from "react";

export default function SdlcStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      phase: "Phase 01",
      title: "Requirements Analysis & Blueprinting",
      subtitle: "Architectural Foundations",
      tools: ["Excalidraw", "DBML", "System C4 Diagrams", "Notion RFCs"],
      deliverables: [
        "Interactive wireframes and system C4 architecture diagrams",
        "Technical RFC (Request for Comments) outlining system bounds",
        "Database Entity Relationship diagrams (ERD)",
        "API specification draft (Swagger/OpenAPI format)"
      ],
      metrics: "Client Alignment SLA: 100% sign-off before coding starts."
    },
    {
      phase: "Phase 02",
      title: "Schema Migrations & Spec Contracts",
      subtitle: "Data Layer Security & Integrity",
      tools: ["Prisma", "PostgreSQL", "TypeBox", "Swagger/OpenAPI"],
      deliverables: [
        "SQL DDL files & Prisma schema configurations",
        "Automated migration test runs in sandboxed environments",
        "Runtime data validation schema bindings (TypeBox / Zod)",
        "Mock endpoints configuration for frontend decoupling"
      ],
      metrics: "Consistency Guarantee: Strict relational integrity with automatic rollbacks."
    },
    {
      phase: "Phase 03",
      title: "Core Agile Development",
      subtitle: "Iterative Feature Implementation",
      tools: ["Next.js / React", "Node.js (TypeScript)", "NestJS", "Fastify"],
      deliverables: [
        "Production-ready Next.js frontend / Fastify backend endpoints",
        "Weekly staging releases with full change-log notes",
        "Unit-level functional programming blocks with decoupled state",
        "Clean, self-documenting code with comprehensive JSDoc annotations"
      ],
      metrics: "Velocity SLA: Monitored velocity with clean Git branching strategies."
    },
    {
      phase: "Phase 04",
      title: "Integration & Regression Testing",
      subtitle: "Rigorous QA Verification",
      tools: ["Jest", "Playwright", "Supertest", "SonarQube"],
      deliverables: [
        "Automated integration tests checking cross-component bounds",
        "API endpoint functional boundary checks (Supertest)",
        "Playwright end-to-end browser user-journey simulation scripts",
        "SonarQube code coverage and cognitive complexity audit metrics"
      ],
      metrics: "Quality Threshold: Target minimum 90% code coverage on core logic."
    },
    {
      phase: "Phase 05",
      title: "Cloud DevOps & CI/CD Deployment",
      subtitle: "Automated Continuous Delivery",
      tools: ["Docker", "GitHub Actions", "AWS CDK", "Terraform"],
      deliverables: [
        "Containerized application builds (Docker multi-stage builds)",
        "GitHub Actions CD scripts for auto-deployment on master merge",
        "AWS Cloud Development Kit infrastructure-as-code manifests",
        "Edge CDN cache invalidation and database backup configurations"
      ],
      metrics: "Availability Goal: Zero-downtime rolling deploys with automated rollback on health failures."
    }
  ];

  return (
    <div className="grid-2" style={{ alignItems: "stretch", gap: "3rem" }}>
      {/* Left Column: Vertical Timeline Steps */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <div 
              key={step.title}
              onClick={() => setActiveStep(idx)}
              style={{
                display: "flex",
                gap: "1.25rem",
                padding: "1.25rem",
                borderRadius: "12px",
                cursor: "pointer",
                background: isActive ? "#ffffff" : "transparent",
                border: isActive ? "1px solid var(--border-active)" : "1px solid transparent",
                boxShadow: isActive ? "var(--shadow-md)" : "none",
                transition: "all var(--transition-fast)"
              }}
              className="stepper-item"
            >
              {/* Vertical Step Line Graphic */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: isActive ? "var(--accent-primary)" : "var(--bg-tertiary)",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  fontFamily: "var(--font-display)",
                  border: isActive ? "none" : "1px solid var(--border-light)",
                  transition: "all var(--transition-fast)"
                }}>
                  {idx + 1}
                </div>
                {idx < steps.length - 1 && (
                  <div style={{
                    width: "2px",
                    flexGrow: 1,
                    background: "var(--border-light)",
                    marginTop: "0.5rem",
                    minHeight: "20px"
                  }} />
                )}
              </div>

              {/* Title & Phase */}
              <div>
                <span style={{ fontSize: "0.75rem", color: isActive ? "var(--accent-primary)" : "var(--text-muted)", fontWeight: "600", textTransform: "uppercase" }}>
                  {step.phase}
                </span>
                <h4 style={{ 
                  fontSize: "1.1rem", 
                  color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                  marginTop: "0.15rem",
                  transition: "all var(--transition-fast)"
                }}>
                  {step.title}
                </h4>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Column: Active Phase Specs Detail */}
      <div className="glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", border: "1px solid var(--border-light)" }}>
        <div className="glass-card-content">
          <span style={{ fontSize: "0.8rem", color: "var(--accent-primary)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {steps[activeStep].phase} &mdash; {steps[activeStep].subtitle}
          </span>
          <h3 style={{ fontSize: "1.5rem", marginTop: "0.5rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
            {steps[activeStep].title}
          </h3>

          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
              Core Deliverables
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none" }}>
              {steps[activeStep].deliverables.map((item, idx) => (
                <li key={idx} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--accent-primary)", fontWeight: "700" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
              Technology Stack & Tools
            </h4>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {steps[activeStep].tools.map((t) => (
                <span key={t} style={{ fontSize: "0.75rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-light)", color: "var(--text-secondary)", padding: "0.35rem 0.75rem", borderRadius: "4px", fontWeight: "500" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Operational metric banner */}
        <div style={{ 
          background: "rgba(79, 70, 229, 0.04)", 
          border: "1px solid rgba(79, 70, 229, 0.08)", 
          padding: "1rem 1.25rem", 
          borderRadius: "8px",
          marginTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem"
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span style={{ fontSize: "0.85rem", fontWeight: "500", color: "var(--text-secondary)" }}>
            {steps[activeStep].metrics}
          </span>
        </div>
      </div>

      <style jsx>{`
        .stepper-item:hover {
          background: rgba(255, 255, 255, 0.6) !important;
          border-color: var(--border-light) !important;
        }
      `}</style>
    </div>
  );
}
