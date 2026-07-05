"use client";

import { useState, useEffect } from "react";

export default function IntakePlanner({ preselectedNeed }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: "",
    needs: [],
    timeline: "",
    name: "",
    email: "",
    description: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedNeed) {
      setFormData((prev) => ({
        ...prev,
        needs: [preselectedNeed]
      }));
      setStep(2); // Auto-advance to Technical Needs step
    }
  }, [preselectedNeed]);

  const industries = [
    { id: "SaaS", label: "Software-as-a-Service (SaaS)", desc: "Subscription-based cloud platforms" },
    { id: "Logistics", label: "Logistics & Supply Chain", desc: "Routing, dispatching, and tracking systems" },
    { id: "Marketplace", label: "Digital Marketplaces", desc: "Two-sided platforms & e-commerce" },
    { id: "FinTech", label: "Financial Technology", desc: "Secure transaction & banking systems" },
    { id: "HealthTech", label: "Health Technology", desc: "HIPAA-compliant patient portals & tools" },
    { id: "CustomAI", label: "Custom AI / Enterprise", desc: "Bespoke internal systems & AI tooling" },
    { id: "Other", label: "Other / Custom", desc: "Bespoke projects in unlisted domains" }
  ];

  const technicalNeeds = [
    { id: "AICore", label: "Next-Gen AI Core Architecture", desc: "LLMs, Vector databases, and Multi-Agent frameworks" },
    { id: "AIAgents", label: "Autonomous AI Agent Orchestration", desc: "RAG pipelines, Semantic caching, and Fine-tuning" },
    { id: "FullStack", label: "Full-Stack Web Ecosystems & Cloud", desc: "Decoupled APIs, databases, microservices, and kubernetes" },
    { id: "Mobile", label: "Cross-Platform Mobile Engineering", desc: "High-performance native iOS & Android systems" },
    { id: "Website", label: "Website Development & SEO Engine", desc: "SEO-optimized Jamstack pages and Web Vitals tuning" },
    { id: "Software", label: "Custom Software Engineering", desc: "Secure SaaS platforms and distributed enterprise systems" }
  ];

  const timelines = [
    { id: "under-1m", label: "< 1 Month", desc: "Fast-tracked MVP prototyping" },
    { id: "1-3m", label: "1 – 3 Months", desc: "Standard iterative sprint cycle" },
    { id: "3-6m", label: "3 – 6 Months", desc: "Advanced systems development" },
    { id: "over-6m", label: "6+ Months", desc: "Long-term partnership roadmap" }
  ];

  const handleNeedToggle = (needId) => {
    setFormData((prev) => {
      const needs = prev.needs.includes(needId)
        ? prev.needs.filter((id) => id !== needId)
        : [...prev.needs, needId];
      return { ...prev, needs };
    });
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Helper validation to prevent next step without selection
  const isStepValid = () => {
    if (step === 1) return formData.industry !== "";
    if (step === 2) return formData.needs.length > 0;
    if (step === 3) return formData.timeline !== "";
    return formData.name !== "" && formData.email !== "";
  };

  return (
    <div className="glass-card" style={{ padding: "2.5rem", background: "var(--bg-secondary)", border: "1px solid var(--border-light)" }}>
      <div className="glass-card-content">
        {!isSubmitted ? (
          <div>
            {/* Header & Step Tracker */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--accent-primary)", fontWeight: "600", textTransform: "uppercase" }}>
                  Intake Engine
                </span>
                <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>Smart Project Planner</h3>
              </div>
              <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: "500" }}>
                Step {step} of 4
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{ width: "100%", height: "4px", background: "var(--bg-tertiary)", borderRadius: "2px", marginBottom: "2.5rem", overflow: "hidden" }}>
              <div style={{ 
                width: `${(step / 4) * 100}%`, 
                height: "100%", 
                background: "linear-gradient(95deg, var(--accent-primary), var(--accent-secondary))",
                transition: "width var(--transition-normal)"
              }} />
            </div>

            {/* STEP 1: TARGET INDUSTRY */}
            {step === 1 && (
              <div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                  Select your project's target industry:
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
                  {industries.map((ind) => {
                    const isSelected = formData.industry === ind.id;
                    return (
                      <div
                        key={ind.id}
                        onClick={() => setFormData({ ...formData, industry: ind.id })}
                        style={{
                          padding: "1.25rem",
                          border: isSelected ? "2px solid var(--accent-primary)" : "1px solid var(--border-light)",
                          borderRadius: "12px",
                          background: isSelected ? "rgba(5, 150, 105, 0.04)" : "var(--bg-secondary)",
                          cursor: "pointer",
                          transition: "all var(--transition-fast)"
                        }}
                        className="selectable-item"
                      >
                        <h5 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>{ind.label}</h5>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{ind.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: TECHNICAL NEEDS */}
            {step === 2 && (
              <div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                  Select the required architectural capabilities (Select all that apply):
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
                  {technicalNeeds.map((need) => {
                    const isSelected = formData.needs.includes(need.id);
                    return (
                      <div
                        key={need.id}
                        onClick={() => handleNeedToggle(need.id)}
                        style={{
                          padding: "1.25rem",
                          border: isSelected ? "2px solid var(--accent-primary)" : "1px solid var(--border-light)",
                          borderRadius: "12px",
                          background: isSelected ? "rgba(5, 150, 105, 0.04)" : "var(--bg-secondary)",
                          cursor: "pointer",
                          transition: "all var(--transition-fast)"
                        }}
                        className="selectable-item"
                      >
                        <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                          <div style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "4px",
                            border: isSelected ? "none" : "1px solid var(--text-muted)",
                            background: isSelected ? "var(--accent-primary)" : "transparent",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "3px"
                          }}>
                            {isSelected && (
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            )}
                          </div>
                          <div>
                            <h5 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>{need.label}</h5>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{need.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: EXPECTED DELIVERY TIMELINE */}
            {step === 3 && (
              <div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                  Expected Delivery Timeline:
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
                  {timelines.map((t) => {
                    const isSelected = formData.timeline === t.id;
                    return (
                      <div
                        key={t.id}
                        onClick={() => setFormData({ ...formData, timeline: t.id })}
                        style={{
                          padding: "1.25rem",
                          border: isSelected ? "2px solid var(--accent-primary)" : "1px solid var(--border-light)",
                          borderRadius: "12px",
                          background: isSelected ? "rgba(5, 150, 105, 0.04)" : "var(--bg-secondary)",
                          cursor: "pointer",
                          transition: "all var(--transition-fast)"
                        }}
                        className="selectable-item"
                      >
                        <h5 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>{t.label}</h5>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{t.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: CONTACT & REVIEW */}
            {step === 4 && (
              <div className="grid-2" style={{ gap: "2.5rem" }}>
                {/* Left: Summary Review */}
                <div style={{ background: "var(--bg-tertiary)", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
                  <h4 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "1.25rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "0.5rem" }}>
                    Review Details
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600", textTransform: "uppercase" }}>Industry</span>
                      <p style={{ fontSize: "0.95rem", fontWeight: "500", color: "var(--text-primary)" }}>
                        {industries.find(i => i.id === formData.industry)?.label}
                      </p>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600", textTransform: "uppercase" }}>Technical Scope</span>
                      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                        {formData.needs.map(nId => (
                          <span key={nId} style={{ fontSize: "0.75rem", background: "var(--bg-primary)", border: "1px solid var(--border-light)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                            {technicalNeeds.find(t => t.id === nId)?.label.split(" ")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600", textTransform: "uppercase" }}>Target Timeline</span>
                      <p style={{ fontSize: "0.95rem", fontWeight: "500", color: "var(--text-primary)" }}>
                        {timelines.find(t => t.id === formData.timeline)?.label}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Contact Form */}
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-secondary)" }}>Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. John Doe"
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ padding: "0.65rem 0.85rem", borderRadius: "8px", border: "1px solid var(--border-light)", outline: "none", fontSize: "0.95rem", background: "var(--bg-primary)", color: "var(--text-primary)" }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-secondary)" }}>Work Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. john@company.com"
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ padding: "0.65rem 0.85rem", borderRadius: "8px", border: "1px solid var(--border-light)", outline: "none", fontSize: "0.95rem", background: "var(--bg-primary)", color: "var(--text-primary)" }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-secondary)" }}>Project Notes (Optional)</label>
                    <textarea 
                      rows="3"
                      placeholder="Tell us briefly about the system requirements..."
                      value={formData.description} 
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      style={{ padding: "0.65rem 0.85rem", borderRadius: "8px", border: "1px solid var(--border-light)", outline: "none", fontSize: "0.95rem", resize: "none", fontFamily: "var(--font-body)", background: "var(--bg-primary)", color: "var(--text-primary)" }}
                    />
                  </div>
                </form>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2.5rem", borderTop: "1px solid var(--border-light)", paddingTop: "1.5rem" }}>
              <button
                disabled={step === 1}
                onClick={handlePrev}
                className="btn-secondary"
                style={{ opacity: step === 1 ? 0.5 : 1, cursor: step === 1 ? "not-allowed" : "pointer" }}
              >
                Previous Step
              </button>

              {step < 4 ? (
                <button
                  disabled={!isStepValid()}
                  onClick={handleNext}
                  className="btn-primary"
                  style={{ opacity: !isStepValid() ? 0.6 : 1, cursor: !isStepValid() ? "not-allowed" : "pointer" }}
                >
                  Continue
                </button>
              ) : (
                <button
                  disabled={!isStepValid()}
                  onClick={handleSubmit}
                  className="btn-primary"
                  style={{ opacity: !isStepValid() ? 0.6 : 1, cursor: !isStepValid() ? "not-allowed" : "pointer" }}
                >
                  Submit Project Blueprint
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
            <div style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "rgba(79, 70, 229, 0.08)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto 1.5rem auto",
              animation: "pulse-glow 2.5s infinite"
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            
            <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>Proposal Received</h3>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem auto" }}>
              Thank you, {formData.name}. Debayan has been notified and is reviewing your tech specifications.
            </p>

            <div style={{
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border-light)",
              borderRadius: "8px",
              padding: "1.25rem",
              maxWidth: "400px",
              margin: "0 auto 2.5rem auto",
              textAlign: "left"
            }}>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "600", marginBottom: "0.5rem" }}>
                Auto-Generated Ticket Coords:
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-primary)" }}>
                <strong>Sector:</strong> {industries.find(i => i.id === formData.industry)?.label}
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", marginTop: "0.25rem" }}>
                <strong>Target SLA:</strong> Review within 12 Hours
              </p>
            </div>

            <button onClick={() => {
              setIsSubmitted(false);
              setStep(1);
              setFormData({ industry: "", needs: [], timeline: "", name: "", email: "", description: "" });
            }} className="btn-secondary">
              Plan Another Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
