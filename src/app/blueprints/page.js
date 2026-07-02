"use client";

import RagPipeline from "@/components/RagPipeline";
import SdlcStepper from "@/components/SdlcStepper";
import ScrollReveal from "@/components/ScrollReveal";

export default function Blueprints() {
  return (
    <div className="fade-in-section" style={{ padding: "4rem 0" }}>
      {/* 1. Page Header */}
      <section style={{ marginBottom: "5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <ScrollReveal direction="up">
            <span className="section-tag">Technical Proof</span>
            <h1 style={{ fontSize: "3rem", marginBottom: "1.25rem" }}>
              Systems &amp; <span className="gradient-text">Architectural Blueprints</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              International enterprise partners need to know how we build, not just what we build. Here is our architectural standard.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Interactive AI & Data Pipelines */}
      <section style={{ marginBottom: "6rem" }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div style={{ marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>AI &amp; Data Pipeline Architecture</h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Explore how we secure pipelines, intercept prompt vectors, query cache clusters, and route multi-agent modules.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={150}>
            <RagPipeline />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Strict SDLC & Agile Workflow */}
      <section style={{ 
        padding: "6rem 0", 
        background: "var(--bg-tertiary)", 
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)"
      }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div style={{ marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>Strict SDLC &amp; Agile Engineering</h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Our step-by-step commitment pipeline that takes product definitions from entity schemas down to multi-region cloud clusters.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <SdlcStepper />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
