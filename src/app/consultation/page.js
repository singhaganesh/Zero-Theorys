"use client";

import CalendarScheduler from "@/components/CalendarScheduler";
import IntakePlanner from "@/components/IntakePlanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function Consultation() {
  return (
    <div className="fade-in-section" style={{ padding: "4rem 0" }}>
      {/* 1. Page Header */}
      <section style={{ marginBottom: "5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <ScrollReveal direction="up">
            <span className="section-tag">Conversion Workspace</span>
            <h1 style={{ fontSize: "3rem", marginBottom: "1.25rem" }}>
              Interactive <span className="gradient-text">Consultation Engine</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Zero friction. Select a calendar block for a quick sync, or map out your full target architecture with our project planner.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Interactive Conversion Widgets Grid */}
      <section>
        <div className="container grid-2" style={{ alignItems: "start", gap: "2.5rem" }}>
          {/* Column 1: Live Scheduling */}
          <ScrollReveal direction="left" delay={150}>
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Live Availability Calendar</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  Select a date and reserve a 15-minute slot directly with our engineering architects.
                </p>
              </div>
              <CalendarScheduler />
            </div>
          </ScrollReveal>

          {/* Column 2: Project Planner */}
          <ScrollReveal direction="right" delay={150}>
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Smart Technical Planner</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  Define your target industry, architectural dependencies, budget levels, and timeline.
                </p>
              </div>
              <IntakePlanner />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
