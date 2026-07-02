"use client";

import { useState } from "react";

export default function FlowConfigurator() {
  const [selectedTrigger, setSelectedTrigger] = useState("text");
  const [activeStage, setActiveStage] = useState("guard");

  const triggers = [
    { id: "text", label: "💬 Natural Language Query", desc: "User asks: 'How do I scale my database cluster?'" },
    { id: "data", label: "📊 CSV / Database Upload", desc: "Enterprise user uploads sales datasets for audit." },
    { id: "api", label: "🔌 Direct API Payload", desc: "Backend trigger: payload sync event from internal CRM." }
  ];

  const stages = {
    guard: {
      title: "1. Security Guardrails",
      tech: "Llama Guard & PII Redactor",
      desc: "Incoming requests are scanned and cleaned. Injection payloads are blocked, and sensitive keys/PII are automatically redacted in 6ms.",
      metric: "Sanitation SLA: 99.98% accuracy"
    },
    cache: {
      title: "2. Semantic Vector Cache",
      tech: "Redis Enterprise Cache",
      desc: "Matches the request embedding against recently resolved queries using cosine similarity. If matched, it returns the cached response in 4ms.",
      metric: "Cache Hit Speed: sub-10ms response"
    },
    retrieve: {
      title: "3. Vector Context Lookup",
      tech: "Pinecone / Qdrant Clustering",
      desc: "On cache miss, embeds the prompt and fetches relevant document chunks using sparse/dense hybrid search algorithms.",
      metric: "Retrieval SLA: sub-80ms lookup"
    },
    agent: {
      title: "4. Autonomous Multi-Agent Router",
      tech: "CrewAI Orchestrator",
      desc: "An orchestrator agent evaluates the retrieved context and splits work between specialized coder, writer, or debugger agents.",
      metric: "Routing Logic: Dynamic sandboxed nodes"
    },
    validate: {
      title: "5. Syntactic JSON Validator",
      tech: "Pydantic Schema Check",
      desc: "The agent response is validated against strict JSON schemas before being served to the client, logging execution time via OpenTelemetry.",
      metric: "Consistency SLA: 100% schema compliance"
    }
  };

  return (
    <div className="flow-configurator" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
      {/* Trigger Selector */}
      <div>
        <h4 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
          1. Select a System Input Trigger:
        </h4>
        <div className="grid-3" style={{ gap: "1rem" }}>
          {triggers.map((t) => {
            const isSelected = selectedTrigger === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setSelectedTrigger(t.id)}
                style={{
                  padding: "1.25rem",
                  border: isSelected ? "2px solid var(--accent-primary)" : "1px solid var(--border-light)",
                  borderRadius: "12px",
                  background: isSelected ? "rgba(5, 150, 105, 0.02)" : "var(--bg-secondary)",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                  boxShadow: isSelected ? "var(--shadow-md)" : "var(--shadow-sm)"
                }}
                className="selectable-item"
              >
                <h5 style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: "600", marginBottom: "0.25rem" }}>{t.label}</h5>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Visual Canvas Diagram */}
      <div>
        <h4 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
          2. Trace Data Pipeline Flow (Click node to inspect):
        </h4>

        <div style={{ position: "relative", width: "100%", overflowX: "auto", padding: "1rem 0" }}>
          <div style={{ display: "flex", alignItems: "center", minWidth: "900px", justifyContent: "space-between", position: "relative" }}>
            
            {/* SVG Connecting Flow Lines Layer */}
            <svg style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "20px", transform: "translateY(-50%)", zIndex: 0, pointerEvents: "none", overflow: "visible" }}>
              <line x1="12%" y1="10" x2="28%" y2="10" stroke="#e5e7eb" strokeWidth="3" />
              <line x1="32%" y1="10" x2="48%" y2="10" stroke="#e5e7eb" strokeWidth="3" />
              <line x1="52%" y1="10" x2="68%" y2="10" stroke="#e5e7eb" strokeWidth="3" />
              <line x1="72%" y1="10" x2="88%" y2="10" stroke="#e5e7eb" strokeWidth="3" />

              {/* Animated pulses */}
              <line x1="12%" y1="10" x2="28%" y2="10" stroke="var(--accent-primary)" strokeWidth="3" className="flow-connector-line" />
              <line x1="32%" y1="10" x2="48%" y2="10" stroke="var(--accent-primary)" strokeWidth="3" className="flow-connector-line" />
              <line x1="52%" y1="10" x2="68%" y2="10" stroke="var(--accent-primary)" strokeWidth="3" className="flow-connector-line" />
              <line x1="72%" y1="10" x2="88%" y2="10" stroke="var(--accent-primary)" strokeWidth="3" className="flow-connector-line" />
            </svg>

            {/* Stages Nodes */}
            <div 
              className={`flow-node ${activeStage === "guard" ? "active" : ""}`}
              onClick={() => setActiveStage("guard")}
              style={{ width: "16%", zIndex: 1, textAlign: "center" }}
            >
              <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "var(--accent-primary)", textTransform: "uppercase" }}>01. Guard</span>
              <h5 style={{ fontSize: "0.85rem", marginTop: "0.25rem", color: "var(--text-primary)" }}>Sanitation</h5>
            </div>

            <div 
              className={`flow-node ${activeStage === "cache" ? "active" : ""}`}
              onClick={() => setActiveStage("cache")}
              style={{ width: "16%", zIndex: 1, textAlign: "center" }}
            >
              <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "var(--accent-primary)", textTransform: "uppercase" }}>02. Cache</span>
              <h5 style={{ fontSize: "0.85rem", marginTop: "0.25rem", color: "var(--text-primary)" }}>Vector Redis</h5>
            </div>

            <div 
              className={`flow-node ${activeStage === "retrieve" ? "active" : ""}`}
              onClick={() => setActiveStage("retrieve")}
              style={{ width: "16%", zIndex: 1, textAlign: "center" }}
            >
              <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "var(--accent-primary)", textTransform: "uppercase" }}>03. Fetch</span>
              <h5 style={{ fontSize: "0.85rem", marginTop: "0.25rem", color: "var(--text-primary)" }}>Vector DB</h5>
            </div>

            <div 
              className={`flow-node ${activeStage === "agent" ? "active" : ""}`}
              onClick={() => setActiveStage("agent")}
              style={{ width: "16%", zIndex: 1, textAlign: "center" }}
            >
              <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "var(--accent-primary)", textTransform: "uppercase" }}>04. Route</span>
              <h5 style={{ fontSize: "0.85rem", marginTop: "0.25rem", color: "var(--text-primary)" }}>Multi-Agent</h5>
            </div>

            <div 
              className={`flow-node ${activeStage === "validate" ? "active" : ""}`}
              onClick={() => setActiveStage("validate")}
              style={{ width: "16%", zIndex: 1, textAlign: "center" }}
            >
              <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "var(--accent-primary)", textTransform: "uppercase" }}>05. Output</span>
              <h5 style={{ fontSize: "0.85rem", marginTop: "0.25rem", color: "var(--text-primary)" }}>Validation</h5>
            </div>

          </div>
        </div>
      </div>

      {/* Info Context Card */}
      <div style={{
        background: "var(--bg-tertiary)",
        border: "1px solid var(--border-light)",
        borderRadius: "12px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        transition: "all var(--transition-fast)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <div>
            <span style={{ fontSize: "0.75rem", color: "var(--accent-secondary)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {stages[activeStage].tech}
            </span>
            <h4 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginTop: "0.15rem" }}>
              {stages[activeStage].title}
            </h4>
          </div>
          <span style={{
            fontSize: "0.75rem",
            color: "var(--accent-primary)",
            background: "rgba(5, 150, 105, 0.08)",
            padding: "0.35rem 0.75rem",
            borderRadius: "9999px",
            fontWeight: "600"
          }}>
            {stages[activeStage].metric}
          </span>
        </div>
        <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
          {stages[activeStage].desc}
        </p>
      </div>
    </div>
  );
}
