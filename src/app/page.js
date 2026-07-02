"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ThreeSphere from "@/components/ThreeSphere";
import ScrollReveal from "@/components/ScrollReveal";
import SdlcStepper from "@/components/SdlcStepper";
import CalendarScheduler from "@/components/CalendarScheduler";
import IntakePlanner from "@/components/IntakePlanner";

export default function Home() {
  const cardsRef = useRef([]);
  const metricsRef = useRef(null);
  const [apiSpeed, setApiSpeed] = useState(0);
  const [securityScore, setSecurityScore] = useState(0);
  const [uptime, setUptime] = useState(0.0);

  // 1. Mouse movement tracking for the radial-glow borders on service cards
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  // 2. Animate counter metrics on view
  useEffect(() => {
    let speedTimer, securityTimer, uptimeTimer;
    
    // Simulate count up for trust verification metrics
    const startCountUp = () => {
      // Speed count down to 42ms
      let curSpeed = 300;
      speedTimer = setInterval(() => {
        curSpeed = Math.max(42, curSpeed - 12);
        setApiSpeed(curSpeed);
        if (curSpeed === 42) clearInterval(speedTimer);
      }, 30);

      // Security score count up to 100%
      let curSec = 0;
      securityTimer = setInterval(() => {
        curSec = Math.min(100, curSec + 4);
        setSecurityScore(curSec);
        if (curSec === 100) clearInterval(securityTimer);
      }, 25);

      // Uptime count up to 99.99%
      let curUptime = 98.0;
      uptimeTimer = setInterval(() => {
        curUptime = Math.min(99.99, curUptime + 0.11);
        setUptime(parseFloat(curUptime.toFixed(2)));
        if (curUptime >= 99.99) clearInterval(uptimeTimer);
      }, 40);
    };

    // Delay counter animation slightly for page loading entry
    const delayTimer = setTimeout(startCountUp, 500);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(speedTimer);
      clearInterval(securityTimer);
      clearInterval(uptimeTimer);
    };
  }, []);

  const services = [
    {
      title: "Next-Gen AI Core Architecture",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      description: "Production LLM integration, advanced vector databases, and scalable multi-agent frameworks optimized for latency.",
      tags: ["LLMs", "Vector DBs", "Semantic Search", "LangChain"]
    },
    {
      title: "Autonomous Agent Orchestration",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      description: "Retrieval-Augmented Generation (RAG) pipelines, semantic caching, fine-tuning infrastructure, and tool-using pipelines.",
      tags: ["RAG Pipelines", "Semantic Cache", "Fine-Tuning", "CrewAI"]
    },
    {
      title: "Full-Stack Ecosystems & Cloud",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      description: "Distributed architectures, microservices, secure container orchestration, and serverless auto-scaling setups.",
      tags: ["Next.js", "Node.js", "Kubernetes", "DevOps"]
    },
    {
      title: "Cross-Platform Mobile Engineering",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      description: "High-performance native-speed mobile applications for iOS and Android using clean modular components.",
      tags: ["Flutter", "React Native", "iOS & Android", "Offline Sync"]
    },
    {
      title: "Website Development",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      description: "High-performance, SEO-engineered web applications optimized for speed, accessibility, and clean conversion paths.",
      tags: ["Next.js", "Vite", "SEO Engine", "Web Performance"]
    },
    {
      title: "Software Development",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
          <line x1="12" y1="2" x2="12" y2="4"></line>
        </svg>
      ),
      description: "Custom enterprise software engines, secure SaaS platforms, and distributed systems architected for scale.",
      tags: ["APIs", "Microservices", "Docker", "SaaS Systems"]
    }
  ];

  const team = [
    {
      name: "Debayan Chakraborty",
      role: "Principal Product Designer & Client Partner",
      specialties: ["UI/UX Engineering", "Creative Design Strategy", "Global Client Management"],
      desc: "Architecting interactive digital products that resonate with users and drive commercial value for global partners."
    },
    {
      name: "Ganesh Singha",
      role: "Principal Full-Stack Engineer & AI Solutions Architect",
      specialties: ["Autonomous AI Pipelines", "Cloud Infrastructure", "Mobile Architectures"],
      desc: "Designing and scaling low-latency agentic applications and secure distributed cloud systems."
    },
    {
      name: "Aniket Karmakar",
      role: "Principal Full-Stack Engineer & Systems Architect",
      specialties: ["Core Distributed Systems", "Backend Infrastructure", "Web Ecosystems"],
      desc: "Structuring high-availability APIs, real-time sync systems, and optimized database systems."
    }
  ];

  return (
    <div className="fade-in-section">
      {/* 1. HERO SECTION */}
      <section id="home" style={{ padding: "6rem 0 4rem 0", position: "relative", overflow: "hidden" }}>
        <div className="container grid-2" style={{ alignItems: "center" }}>
          <ScrollReveal direction="left" duration={900}>
            <div>
              <span className="section-tag" style={{ animation: "pulse-glow 2s infinite" }}>
                Elite Systems Agency
              </span>
              <h1 style={{ fontSize: "3.5rem", lineHeight: "1.1", marginBottom: "1.5rem" }}>
                Zero Fluff.<br />
                Zero Theories.<br />
                <span className="gradient-text">Just Production-Ready Code.</span>
              </h1>
              <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: "2.5rem", maxWidth: "480px" }}>
                Zero Theorys designs and deploys next-gen AI pipelines, scalable clouds, and cross-platform systems for international enterprises.
              </p>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Link href="#consultation" className="btn-primary">
                  Book an MVP Consultation
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={300} duration={1000}>
            <div style={{ height: "450px", width: "100%", position: "relative" }}>
              <ThreeSphere />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. CORE SERVICE MATRIX */}
      <section id="services" style={{ padding: "6rem 0", background: "var(--bg-tertiary)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title-wrap">
              <span className="section-tag">Capabilities Matrix</span>
              <h2 className="section-title">Technical Service Engine</h2>
              <p className="section-subtitle">We deploy concrete systems, replacing abstract speculation with optimized code.</p>
            </div>
          </ScrollReveal>

          <div className="grid-2">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} direction="up" delay={i * 100}>
                <div 
                  ref={(el) => (cardsRef.current[i] = el)}
                  onMouseMove={(e) => handleMouseMove(e, i)}
                  className="glass-card"
                  style={{ cursor: "default" }}
                >
                  <div className="glass-card-content">
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.25rem" }}>
                      <div style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "rgba(79, 70, 229, 0.06)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                        {svc.icon}
                      </div>
                      <h3 style={{ fontSize: "1.3rem" }}>{svc.title}</h3>
                    </div>
                    <p style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}>{svc.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MEET THE ARCHITECTS */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title-wrap">
              <span className="section-tag">Operational Structure</span>
              <h2 className="section-title">Meet the Architects</h2>
              <p className="section-subtitle">Zero Freelancers. Zero outsourcing layers. We are a structured, focused systems company.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={i * 150}>
                <div className="glass-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <div className="glass-card-content" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontSize: "1.35rem", marginBottom: "0.25rem", color: "var(--text-primary)" }}>{member.name}</h3>
                      <p style={{ 
                        fontSize: "0.85rem", 
                        color: "var(--accent-primary)", 
                        fontWeight: "600", 
                        textTransform: "uppercase", 
                        letterSpacing: "0.05em",
                        marginBottom: "1.5rem" 
                      }}>
                        {member.role}
                      </p>
                      <p style={{ fontSize: "0.95rem", marginBottom: "1.5rem", color: "var(--text-secondary)" }}>{member.desc}</p>
                    </div>
                    
                    <div>
                      <h4 style={{ 
                        fontFamily: "var(--font-display)", 
                        fontSize: "0.8rem", 
                        textTransform: "uppercase", 
                        letterSpacing: "0.08em",
                        color: "var(--text-primary)", 
                        marginBottom: "0.75rem",
                        borderTop: "1px solid var(--border-light)",
                        paddingTop: "1rem" 
                      }}>
                        Core Capabilities
                      </h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {member.specialties.map((spec) => (
                          <div key={spec} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5. TECHNOLOGY STACK */}
      <section style={{ padding: "6rem 0", borderTop: "1px solid var(--border-light)" }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title-wrap">
              <span className="section-tag">Technical Foundations</span>
              <h2 className="section-title">Our Technology Stack</h2>
              <p className="section-subtitle">We build with enterprise-grade tools, framework clusters, and automated deployment pipelines.</p>
            </div>
          </ScrollReveal>

          <div className="grid-4" style={{ gap: "1.5rem" }}>
            {/* Category 1: AI & Intelligent Pipelines */}
            <ScrollReveal direction="up" delay={0}>
              <div className="glass-card" style={{ height: "100%" }}>
                <div className="glass-card-content">
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "1rem", color: "var(--accent-primary)" }}>AI &amp; Data Core</h3>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {["LangChain", "LlamaIndex", "Vector DBs", "Pinecone", "Redis Cache", "Multi-Agents", "Fine-Tuning"].map((tech) => (
                      <span key={tech} style={{ fontSize: "0.75rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-light)", padding: "0.25rem 0.65rem", borderRadius: "4px", color: "var(--text-secondary)", fontWeight: "500" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Category 2: Full-Stack Web */}
            <ScrollReveal direction="up" delay={100}>
              <div className="glass-card" style={{ height: "100%" }}>
                <div className="glass-card-content">
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "1rem", color: "var(--accent-secondary)" }}>Web Ecosystems</h3>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {["Next.js", "React", "TypeScript", "Node.js", "NestJS", "Fastify", "GraphQL", "Prisma"].map((tech) => (
                      <span key={tech} style={{ fontSize: "0.75rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-light)", padding: "0.25rem 0.65rem", borderRadius: "4px", color: "var(--text-secondary)", fontWeight: "500" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Category 3: Cloud & DevOps */}
            <ScrollReveal direction="up" delay={200}>
              <div className="glass-card" style={{ height: "100%" }}>
                <div className="glass-card-content">
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "1rem", color: "var(--accent-primary)" }}>DevOps &amp; Cloud</h3>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {["Docker", "Kubernetes", "AWS CDK", "Terraform", "CI/CD Actions", "PostgreSQL", "OpenTelemetry"].map((tech) => (
                      <span key={tech} style={{ fontSize: "0.75rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-light)", padding: "0.25rem 0.65rem", borderRadius: "4px", color: "var(--text-secondary)", fontWeight: "500" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Category 4: Mobile SDKs */}
            <ScrollReveal direction="up" delay={300}>
              <div className="glass-card" style={{ height: "100%" }}>
                <div className="glass-card-content">
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "1rem", color: "var(--accent-secondary)" }}>Mobile Engineering</h3>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)", "SQLite", "Offline Sync", "Push Notifs"].map((tech) => (
                      <span key={tech} style={{ fontSize: "0.75rem", background: "var(--bg-tertiary)", border: "1px solid var(--border-light)", padding: "0.25rem 0.65rem", borderRadius: "4px", color: "var(--text-secondary)", fontWeight: "500" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3.7. SDLC WORKFLOW */}
      <section id="sdlc" style={{ 
        padding: "6rem 0", 
        background: "var(--bg-secondary)", 
        borderTop: "1px solid var(--border-light)"
      }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title-wrap">
              <span className="section-tag">Development Pipeline</span>
              <h2 className="section-title">Strict SDLC &amp; Agile Engineering</h2>
              <p className="section-subtitle">Our step-by-step commitment pipeline that takes product requirements from schemas to cloud deploys.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <SdlcStepper />
          </ScrollReveal>
        </div>
      </section>

      {/* 4. TECHNICAL PROOF & CORE METRICS */}
      <section ref={metricsRef} style={{ padding: "6rem 0", background: "var(--bg-tertiary)", borderTop: "1px solid var(--border-light)" }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title-wrap">
              <span className="section-tag">Engineering Quality</span>
              <h2 className="section-title">Technical Trust Metrics</h2>
              <p className="section-subtitle">Our operational baseline and SLA commitments verified through automation pipelines.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {/* Speed card */}
            <ScrollReveal direction="up" delay={0}>
              <div className="glass-card" style={{ textAlign: "center", background: "var(--bg-secondary)", height: "100%" }}>
                <div className="glass-card-content">
                  <span style={{ fontSize: "3.5rem", fontWeight: "700", fontFamily: "var(--font-display)", color: "var(--accent-primary)" }}>
                    {apiSpeed}ms
                  </span>
                  <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0 0.75rem 0" }}>Sub-100ms API Targets</h3>
                  <p style={{ fontSize: "0.9rem" }}>Edge caching, payload compression, and direct serverless runtime tuning ensure lightning-fast responses.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Security card */}
            <ScrollReveal direction="up" delay={150}>
              <div className="glass-card" style={{ textAlign: "center", background: "var(--bg-secondary)", height: "100%" }}>
                <div className="glass-card-content">
                  <span style={{ fontSize: "3.5rem", fontWeight: "700", fontFamily: "var(--font-display)", color: "var(--accent-secondary)" }}>
                    {securityScore}%
                  </span>
                  <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0 0.75rem 0" }}>Automated Vulnerability Scans</h3>
                  <p style={{ fontSize: "0.9rem" }}>Integrated CI/CD static checks (SAST/DAST) prevent security leaks and dependency issues on every commit.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Uptime card */}
            <ScrollReveal direction="up" delay={300}>
              <div className="glass-card" style={{ textAlign: "center", background: "var(--bg-secondary)", height: "100%" }}>
                <div className="glass-card-content">
                  <span style={{ fontSize: "3.5rem", fontWeight: "700", fontFamily: "var(--font-display)", color: "var(--accent-primary)" }}>
                    {uptime}%
                  </span>
                  <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0 0.75rem 0" }}>Serverless Auto-Scaling</h3>
                  <p style={{ fontSize: "0.9rem" }}>Highly available architectures built on multi-region compute node clustering for 100% elastic load scalability.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION ENGINE */}
      <section id="consultation" style={{ padding: "6rem 0", borderTop: "1px solid var(--border-light)" }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-title-wrap">
              <span className="section-tag">Conversion Workspace</span>
              <h2 className="section-title">Interactive Consultation Engine</h2>
              <p className="section-subtitle">Zero friction. Select a calendar block for a quick sync, or map out your full target architecture with our project planner.</p>
            </div>
          </ScrollReveal>

          <div className="grid-2" style={{ alignItems: "start", gap: "2.5rem", marginTop: "3rem" }}>
            {/* Column 1: Live Scheduling */}
            <ScrollReveal direction="left" delay={150}>
              <div>
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>Live Availability Calendar</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    Select a date and reserve a 15-minute slot directly with our engineering architects.
                  </p>
                </div>
                <CalendarScheduler />
              </div>
            </ScrollReveal>

            {/* Column 2: Project Planner */}
            <ScrollReveal direction="right" delay={150}>
              <div>
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>Smart Technical Planner</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    Define your target industry, architectural dependencies, budget levels, and timeline.
                  </p>
                </div>
                <IntakePlanner />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
