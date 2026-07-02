"use client";

import { useState } from "react";

export default function RagPipeline() {
  const [activeStep, setActiveStep] = useState("cache");

  const pipelineSteps = {
    input: {
      title: "1. User Query & Guardrails",
      subtitle: "Secure Input Sanitation Layer",
      desc: "All incoming requests are intercepted by a localized LLM guardrail (e.g. Llama Guard) to filter out prompt injection, PII, and unsafe content before hitting core architectures. Sub-5ms processing overhead.",
      specs: ["Input Validation", "Prompt Injection Filtering", "PII Redaction"]
    },
    cache: {
      title: "2. Semantic Cache Engine",
      subtitle: "Ultra Low Latency Query Resolution",
      desc: "Queries are vectorized and compared against a Redis semantic cache using cosine similarity. If a similar question has been asked and resolved recently, the cached response is served immediately. Resolution time: 5-15ms.",
      specs: ["Redis Vector Embeddings", "Cosine Similarity Thresholding", "LRU Cache Expiry"]
    },
    vector: {
      title: "3. Vector Search & Retrieval",
      subtitle: "Contextual RAG Retrieval Layer",
      desc: "For cache misses, the prompt is embedded using high-performance models (e.g. text-embedding-3-small) and queried against a distributed vector database (Pinecone/Qdrant) utilizing metadata filters to fetch relevant document chunks.",
      specs: ["Hybrid Search (Dense + Sparse)", "Cohere Reranking", "Metadata Partitioning"]
    },
    agents: {
      title: "4. Multi-Agent Orchestration",
      subtitle: "Dynamic Task Decoupling",
      desc: "The retrieved context is parsed. An agentic router breaks down the query into distinct sub-tasks, delegation-routing them to specialized worker agents (e.g., Code Executor Agent, Data Analyzer Agent) running in sandboxed execution nodes.",
      specs: ["Hierarchical Planning", "Sandboxed Code Execution", "Asynchronous Message Bus"]
    },
    output: {
      title: "5. Structured Output & Validation",
      subtitle: "Schema Conformity & Logging",
      desc: "The final output is syntactically checked against strict Pydantic schemas, sanitized of structural syntax errors, logged for observability (OpenTelemetry), and served back to the client.",
      specs: ["JSON Schema Verification", "OpenTelemetry Tracing", "SLA Performance Metrics"]
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
      {/* Interactive Flowchart Area */}
      <div className="glass-card" style={{ padding: "3rem 2rem", overflowX: "auto" }}>
        <div style={{ minWidth: "800px", position: "relative" }}>
          <svg viewBox="0 0 880 200" width="100%" height="auto" style={{ overflow: "visible" }}>
            <defs>
              {/* Gradients */}
              <linearGradient id="indigoCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>

            {/* Connecting Flow Lines */}
            <g stroke="#e2e8f0" strokeWidth="3" fill="none">
              {/* Path 1: Input to Cache */}
              <path d="M120 100 H 220" />
              {/* Path 2: Cache to Vector */}
              <path d="M300 100 H 400" />
              {/* Path 3: Vector to Agents */}
              <path d="M480 100 H 580" />
              {/* Path 4: Agents to Output */}
              <path d="M660 100 H 760" />
            </g>

            {/* Flowing Data Particles */}
            <g stroke="url(#indigoCyan)" strokeWidth="3" fill="none" strokeDasharray="15 30" style={{ animation: "flowPackets 4s linear infinite" }}>
              <path d="M120 100 H 220" />
              <path d="M300 100 H 400" />
              <path d="M480 100 H 580" />
              <path d="M660 100 H 760" />
            </g>

            {/* PIPELINE NODES */}
            
            {/* 1. Input Node */}
            <g transform="translate(40, 60)" cursor="pointer" onClick={() => setActiveStep("input")}>
              <rect x="0" y="0" width="80" height="80" rx="16" 
                fill={activeStep === "input" ? "rgba(5, 150, 105, 0.08)" : "var(--bg-secondary)"} 
                stroke={activeStep === "input" ? "url(#indigoCyan)" : "var(--border-light)"} 
                strokeWidth={activeStep === "input" ? "3" : "1.5"}
                style={{ transition: "all 0.3s" }} 
              />
              <svg x="24" y="24" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={activeStep === "input" ? "#059669" : "var(--text-muted)"} strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <text x="40" y="98" textAnchor="middle" fontSize="11" fontWeight="600" fill={activeStep === "input" ? "#059669" : "var(--text-secondary)"} fontFamily="var(--font-display)">
                1. Guardrails
              </text>
            </g>

            {/* 2. Cache Node */}
            <g transform="translate(220, 60)" cursor="pointer" onClick={() => setActiveStep("cache")}>
              <rect x="0" y="0" width="80" height="80" rx="16" 
                fill={activeStep === "cache" ? "rgba(5, 150, 105, 0.08)" : "var(--bg-secondary)"} 
                stroke={activeStep === "cache" ? "url(#indigoCyan)" : "var(--border-light)"} 
                strokeWidth={activeStep === "cache" ? "3" : "1.5"}
                style={{ transition: "all 0.3s" }} 
              />
              <svg x="24" y="24" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={activeStep === "cache" ? "#059669" : "var(--text-muted)"} strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
              <text x="40" y="98" textAnchor="middle" fontSize="11" fontWeight="600" fill={activeStep === "cache" ? "#059669" : "var(--text-secondary)"} fontFamily="var(--font-display)">
                2. Cache Engine
              </text>
            </g>

            {/* 3. Vector DB Node */}
            <g transform="translate(400, 60)" cursor="pointer" onClick={() => setActiveStep("vector")}>
              <rect x="0" y="0" width="80" height="80" rx="16" 
                fill={activeStep === "vector" ? "rgba(5, 150, 105, 0.08)" : "var(--bg-secondary)"} 
                stroke={activeStep === "vector" ? "url(#indigoCyan)" : "var(--border-light)"} 
                strokeWidth={activeStep === "vector" ? "3" : "1.5"}
                style={{ transition: "all 0.3s" }} 
              />
              <svg x="24" y="24" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={activeStep === "vector" ? "#059669" : "var(--text-muted)"} strokeWidth="2">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
              </svg>
              <text x="40" y="98" textAnchor="middle" fontSize="11" fontWeight="600" fill={activeStep === "vector" ? "#059669" : "var(--text-secondary)"} fontFamily="var(--font-display)">
                3. Vector DB
              </text>
            </g>

            {/* 4. Agents Node */}
            <g transform="translate(580, 60)" cursor="pointer" onClick={() => setActiveStep("agents")}>
              <rect x="0" y="0" width="80" height="80" rx="16" 
                fill={activeStep === "agents" ? "rgba(5, 150, 105, 0.08)" : "var(--bg-secondary)"} 
                stroke={activeStep === "agents" ? "url(#indigoCyan)" : "var(--border-light)"} 
                strokeWidth={activeStep === "agents" ? "3" : "1.5"}
                style={{ transition: "all 0.3s" }} 
              />
              <svg x="24" y="24" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={activeStep === "agents" ? "#059669" : "var(--text-muted)"} strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <text x="40" y="98" textAnchor="middle" fontSize="11" fontWeight="600" fill={activeStep === "agents" ? "#059669" : "var(--text-secondary)"} fontFamily="var(--font-display)">
                4. Multi-Agent
              </text>
            </g>

            {/* 5. Output Node */}
            <g transform="translate(760, 60)" cursor="pointer" onClick={() => setActiveStep("output")}>
              <rect x="0" y="0" width="80" height="80" rx="16" 
                fill={activeStep === "output" ? "rgba(5, 150, 105, 0.08)" : "var(--bg-secondary)"} 
                stroke={activeStep === "output" ? "url(#indigoCyan)" : "var(--border-light)"} 
                strokeWidth={activeStep === "output" ? "3" : "1.5"}
                style={{ transition: "all 0.3s" }} 
              />
              <svg x="24" y="24" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={activeStep === "output" ? "#059669" : "var(--text-muted)"} strokeWidth="2">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              <text x="40" y="98" textAnchor="middle" fontSize="11" fontWeight="600" fill={activeStep === "output" ? "#059669" : "var(--text-secondary)"} fontFamily="var(--font-display)">
                5. Validation
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Dynamic Specification Display */}
      <div className="glass-card" style={{ borderLeft: "4px solid var(--accent-primary)", padding: "2rem" }}>
        <div className="glass-card-content">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <div>
              <span style={{ fontSize: "0.8rem", color: "var(--accent-primary)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {pipelineSteps[activeStep].subtitle}
              </span>
              <h3 style={{ fontSize: "1.5rem", marginTop: "0.25rem", color: "var(--text-primary)" }}>{pipelineSteps[activeStep].title}</h3>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {pipelineSteps[activeStep].specs.map((spec) => (
                <span key={spec} style={{ fontSize: "0.75rem", background: "var(--bg-tertiary)", color: "var(--text-secondary)", padding: "0.35rem 0.75rem", borderRadius: "9999px", border: "1px solid var(--border-light)" }}>
                  {spec}
                </span>
              ))}
            </div>
          </div>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
            {pipelineSteps[activeStep].desc}
          </p>
        </div>
      </div>
    </div>
  );
}
