import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const industryMap = {
  SaaS: "Software-as-a-Service (SaaS)",
  Logistics: "Logistics & Supply Chain",
  Marketplace: "Digital Marketplaces",
  FinTech: "Financial Technology",
  HealthTech: "Health Technology",
  CustomAI: "Custom AI / Enterprise",
  Other: "Other / Custom"
};

const needMap = {
  AICore: "Next-Gen AI Core Architecture",
  AIAgents: "Autonomous AI Agent Orchestration",
  FullStack: "Full-Stack Web Ecosystems & Cloud",
  Mobile: "Cross-Platform Mobile Engineering",
  Website: "Website Development & SEO Engine",
  Software: "Custom Software Engineering"
};

const timelineMap = {
  "under-1m": "< 1 Month",
  "1-3m": "1 – 3 Months",
  "3-6m": "3 – 6 Months",
  "over-6m": "6+ Months"
};

export async function POST(request) {
  try {
    const { name, email, whatsapp, industry, needs, timeline, description } = await request.json();

    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const teamEmail = process.env.TEAM_EMAIL || smtpEmail;
    const senderEmail = process.env.SENDER_EMAIL || smtpEmail;

    if (!smtpEmail || !smtpPassword) {
      console.error("Missing SMTP credentials in environment variables");
      return NextResponse.json(
        { error: "Email service is not configured (missing SMTP credentials)." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });

    const readableIndustry = industryMap[industry] || industry || "Not specified";
    const readableTimeline = timelineMap[timeline] || timeline || "Not specified";
    const readableNeeds = Array.isArray(needs)
      ? needs.map(n => needMap[n] || n).join(", ")
      : "None selected";

    // 1. Send Confirmation Email to the Client
    const clientMailOptions = {
      from: `"Zero Theorys" <${senderEmail}>`,
      to: email,
      subject: "Project Blueprint Received - Zero Theorys",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1f2937; line-height: 1.6;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Blueprint Registered!</h2>
          <p>Hi <strong>${name}</strong>,</p>
          <p>We have successfully received your project specifications blueprint. Our lead architect, Debayan, is currently conducting a systems feasibility review of your requirements.</p>
          
          <div style="background-color: #f3f4f6; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0; color: #4f46e5; font-size: 0.95rem; text-transform: uppercase;">Your Project Blueprint Parameters:</h4>
            <p style="margin: 5px 0;">🏢 <strong>Target Industry:</strong> ${readableIndustry}</p>
            <p style="margin: 5px 0;">🛠️ <strong>Technical Scope:</strong> ${readableNeeds}</p>
            <p style="margin: 5px 0;">📅 <strong>Expected Timeline:</strong> ${readableTimeline}</p>
            ${whatsapp ? `<p style="margin: 5px 0;">📱 <strong>WhatsApp:</strong> ${whatsapp}</p>` : ""}
          </div>
          
          <p><strong>What happens next?</strong> Our lead architect, Debayan, is currently reviewing your technical specifications. We will compile our analysis and reach out to you directly via email (or WhatsApp) within 12 hours.</p>
          
          <p style="margin-top: 30px; font-size: 0.9rem; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 10px;">Zero Theorys Engineering — Zero Fluff. Just Code.</p>
        </div>
      `,
    };

    // 2. Send Alert Notification to the Zero Theorys Team
    const teamMailOptions = {
      from: `"Zero Theorys Blueprint" <${senderEmail}>`,
      to: teamEmail,
      subject: `New Scoping Lead: ${name} (${readableIndustry})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1f2937; line-height: 1.6;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">New Project Blueprint Alert</h2>
          <p>A user has submitted a qualified technical blueprint from the intake engine.</p>
          
          <div style="background-color: #f3f4f6; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="margin: 5px 0;">👤 <strong>Client Name:</strong> ${name}</p>
            <p style="margin: 5px 0;">✉️ <strong>Client Email:</strong> ${email}</p>
            <p style="margin: 5px 0;">📱 <strong>WhatsApp:</strong> ${whatsapp || "Not provided"}</p>
            <p style="margin: 5px 0;">🏢 <strong>Industry:</strong> ${readableIndustry}</p>
            <p style="margin: 5px 0;">🛠️ <strong>Technical Needs:</strong> ${readableNeeds}</p>
            <p style="margin: 5px 0;">📅 <strong>Timeline:</strong> ${readableTimeline}</p>
            <p style="margin: 5px 0;">📝 <strong>Project Notes:</strong> ${description || "None provided"}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 0.9rem; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 10px;">Zero Theorys System Automation</p>
        </div>
      `,
    };

    // Send emails sequentially to prevent parallel SMTP socket collision
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(teamMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Blueprint API Exception:", error);
    return NextResponse.json(
      { error: "Internal server error occurred.", details: error.message },
      { status: 500 }
    );
  }
}
