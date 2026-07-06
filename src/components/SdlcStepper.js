"use client";

import { useState } from "react";

export default function SdlcStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      phase: "Phase 01",
      title: "Requirements Analysis & Blueprinting",
      subtitle: "Architectural Foundations",
      tools: ["Figma", "Excalidraw", "DBML", "System C4 Diagrams", "Notion RFCs"],
      deliverables: [
        "Interactive Figma wireframes and system C4 architecture blueprints",
        "Technical RFC (Request for Comments) outlining system bounds",
        "Database Entity Relationship diagrams (ERD) using DBML specs",
        "API specification draft (Swagger/OpenAPI format)"
      ],
      metrics: "Client Alignment SLA: 100% sign-off before coding starts."
    },
    {
      phase: "Phase 02",
      title: "Schema Migrations & Spec Contracts",
      subtitle: "Data Layer Security & Integrity",
      tools: ["Prisma ORM", "PostgreSQL", "Firebase Auth", "Zod Schema", "OpenAPI Spec"],
      deliverables: [
        "SQL DDL migrations & Prisma database configurations",
        "Automated migration test runs in sandboxed staging clusters",
        "Runtime data validation schema bindings (Zod / TypeBox validations)",
        "Firebase Auth spec contracts and mock user claims setup"
      ],
      metrics: "Consistency Guarantee: Strict relational integrity with automatic rollbacks."
    },
    {
      phase: "Phase 03",
      title: "Core Agile Development",
      subtitle: "Iterative Feature Implementation",
      tools: ["Next.js (React)", "Spring Boot", "Node.js (TypeScript)", "NestJS / Fastify", "Firebase SDK"],
      deliverables: [
        "Next.js frontend with low-latency server components layout",
        "Spring Boot microservices or Node.js/Fastify REST endpoints",
        "Firebase Auth client integrations and security rules bindings",
        "Clean, self-documenting code with comprehensive TypeScript annotations"
      ],
      metrics: "Velocity SLA: Monitored velocity with clean Git branching strategies."
    },
    {
      phase: "Phase 04",
      title: "Integration & Regression Testing",
      subtitle: "Rigorous QA Verification",
      tools: ["Jest", "Playwright", "Supertest", "SonarQube", "CI/CD Actions"],
      deliverables: [
        "Automated integration tests checking cross-component bounds",
        "Spring Boot/Fastify API endpoint boundary checks (Supertest)",
        "Playwright end-to-end browser user-journey simulation scripts",
        "SonarQube code coverage and cognitive complexity audit metrics"
      ],
      metrics: "Quality Threshold: Target minimum 90% code coverage on core logic."
    },
    {
      phase: "Phase 05",
      title: "Cloud DevOps & CI/CD Deployment",
      subtitle: "Automated Continuous Delivery",
      tools: ["Docker", "Google Cloud Platform (GCP)", "Terraform", "GitHub Actions", "AWS CDK"],
      deliverables: [
        "Containerized application builds (Docker multi-stage builds)",
        "GCP Kubernetes GKE cluster deployments or Google Cloud Run configs",
        "Infrastructure-as-code manifests using Terraform and AWS CDK",
        "Health checks and edge CDN cache invalidations using Cloudflare"
      ],
      metrics: "Availability Goal: Zero-downtime rolling deploys with automated rollback on health failures."
    }
  ];

  const renderStepDetails = (idx) => {
    const step = steps[idx];
    if (!step) return null;
    return (
      <div className="stepper-details-container">
        <div className="glass-card-content">
          <span className="desktop-only-specs-header" style={{ fontSize: "0.8rem", color: "var(--accent-primary)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {step.phase} &mdash; {step.subtitle}
          </span>
          <h3 className="desktop-only-specs-title" style={{ fontSize: "1.5rem", marginTop: "0.5rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
            {step.title}
          </h3>

          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
              Core Deliverables
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none", padding: 0, margin: 0 }}>
              {step.deliverables.map((item, dIdx) => (
                <li key={dIdx} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--accent-primary)", fontWeight: "700" }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
              Technology Stack & Tools
            </h4>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {step.tools.map((t) => (
                <span key={t} style={{ fontSize: "0.75rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-light)", color: "var(--text-secondary)", padding: "0.35rem 0.75rem", borderRadius: "4px", fontWeight: "500" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Operational metric banner / Interactive SLA Dashboard Widget */}
        <div className="sla-monitor-banner" style={{ 
          background: "rgba(5, 150, 105, 0.03)", 
          border: "1px solid var(--border-light)", 
          padding: "1.5rem", 
          borderRadius: "12px",
          marginTop: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Subtle decoration radial background */}
          <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: "radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
          
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>
            Operational Health & SLA Monitor
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.25rem" }}>
            {/* Dynamic gauge/icon based on phase */}
            {idx === 0 && (
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "3px solid var(--accent-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: "700", color: "var(--accent-primary)", boxShadow: "0 0 10px rgba(16, 185, 129, 0.15)" }}>
                  100%
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-primary)" }}>SLA Sign-Off Guarantee</h5>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)" }}>No development proceeds without blueprint contract approvals.</p>
                </div>
              </div>
            )}
            {idx === 1 && (
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ background: "rgba(6, 182, 212, 0.08)", border: "1px solid var(--accent-secondary)", padding: "0.4rem 0.8rem", borderRadius: "6px", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-secondary)" }}>
                  ROLLBACK_OK
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-primary)" }}>Relational Integrity SLA</h5>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)" }}>Self-healing database migration runs with automatic schema rollbacks.</p>
                </div>
              </div>
            )}
            {idx === 2 && (
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", background: "rgba(16, 185, 129, 0.08)", padding: "0.4rem 0.8rem", borderRadius: "6px", fontSize: "0.8rem", color: "var(--accent-primary)", fontWeight: "600" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-primary)", display: "inline-block", animation: "pulse-glow 1.5s infinite" }} />
                  ACTIVE
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-primary)" }}>Full-Stack Development Cycle</h5>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)" }}>Staging auto-builds validated through TypeScript strict types compiler.</p>
                </div>
              </div>
            )}
            {idx === 3 && (
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "3px solid var(--accent-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: "700", color: "var(--accent-primary)", boxShadow: "0 0 10px rgba(16, 185, 129, 0.15)" }}>
                  &gt;90%
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-primary)" }}>Quality Testing Threshold</h5>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)" }}>Supertest & Jest regressions verify critical backend contracts.</p>
                </div>
              </div>
            )}
            {idx === 4 && (
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid var(--accent-primary)", padding: "0.4rem 0.8rem", borderRadius: "6px", fontSize: "0.8rem", color: "var(--accent-primary)", fontWeight: "600" }}>
                  99.99%
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-primary)" }}>Uptime Availability SLA</h5>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)" }}>Google Cloud GKE and AWS CDN rollouts with health probe triggers.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid-2 sdlc-grid" style={{ alignItems: "stretch", gap: "3rem" }}>
      
      {/* Left Column: Vertical Timeline Steps */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "relative" }}>
        
        {/* Dynamic Vertical Spine Progress Line Tracker */}
        <div className="stepper-spine" style={{
          position: "absolute",
          top: "38px",
          bottom: "38px",
          left: "38px",
          width: "2px",
          zIndex: 1,
          pointerEvents: "none"
        }}>
          {/* Background track line */}
          <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "var(--border-light)"
          }} />
          
          {/* Active progress filler line */}
          <div style={{
            position: "absolute",
            top: 0,
            height: `${(activeStep / (steps.length - 1)) * 100}%`,
            left: 0,
            right: 0,
            background: "var(--accent-primary)",
            boxShadow: "0 0 8px var(--accent-primary)",
            transition: "height 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
          }} />
        </div>

        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <div key={step.title} className={`stepper-item-wrapper ${isActive ? "active" : ""}`}>
              <div 
                onClick={() => setActiveStep(isActive ? -1 : idx)}
                style={{
                  display: "flex",
                  position: "relative",
                  zIndex: 2,
                  gap: "1.25rem",
                  padding: "1.25rem",
                  borderRadius: "12px",
                  cursor: "pointer",
                  background: isActive ? "var(--bg-secondary)" : "transparent",
                  border: isActive ? "1px solid var(--border-active)" : "1px solid transparent",
                  boxShadow: isActive ? "var(--shadow-md)" : "none",
                  transition: "all var(--transition-fast)"
                }}
                className="stepper-item"
              >
                {/* Step Circle Graphic */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 2 }}>
                  <div 
                    className={`stepper-item-number ${isActive ? "active-step-pulse" : ""}`}
                    style={{
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
                    }}
                  >
                    {idx + 1}
                  </div>
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

              {/* Mobile Accordion details panel */}
              {isActive && (
                <div className="mobile-stepper-details">
                  {renderStepDetails(idx)}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Column: Active Phase Specs Detail (Slides on key change) */}
      <div 
        key={activeStep}
        className="glass-card stepper-fade-slide desktop-only-specs" 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between", 
          background: "var(--bg-secondary)", 
          border: "1px solid var(--border-light)" 
        }}
      >
        {renderStepDetails(activeStep)}
      </div>
    </div>
  );
}
