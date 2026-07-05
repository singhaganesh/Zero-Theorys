import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, whatsapp, date, time, description } = await request.json();

    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const teamEmail = process.env.TEAM_EMAIL || smtpEmail;
    const senderEmail = process.env.SENDER_EMAIL || smtpEmail;
    const meetLink = process.env.MEET_LINK || "https://meet.google.com/asw-xuty-yhe";

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

    // 1. Send Confirmation Email to the Client
    const clientMailOptions = {
      from: `"Zero Theorys" <${senderEmail}>`,
      to: email,
      subject: "Introductory Call Confirmed - Zero Theorys",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1f2937; line-height: 1.6;">
          <h2 style="color: #10b981; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Booking Confirmed!</h2>
          <p>Hi <strong>${name}</strong>,</p>
          <p>Your 15-minute introductory call with our engineering architects at Zero Theorys is locked in.</p>
          
          <div style="background-color: #f3f4f6; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="margin: 5px 0;">📅 <strong>Date:</strong> ${date}</p>
            <p style="margin: 5px 0;">⏰ <strong>Time:</strong> ${time}</p>
            <p style="margin: 5px 0;">🔗 <strong>Join Google Meet:</strong> <a href="${meetLink}" style="color: #10b981; text-decoration: underline; font-weight: bold;">Click here to join</a></p>
            <p style="margin: 5px 0;">👤 <strong>Host:</strong> Debayan (Zero Theorys)</p>
          </div>
          
          <p>Please make sure to add this event to your calendar and join the room at the scheduled time. If you need to reschedule or share any specs beforehand, reply directly to this email.</p>
          <p style="margin-top: 30px; font-size: 0.9rem; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 10px;">Zero Theorys Engineering — Zero Fluff. Just Code.</p>
        </div>
      `,
    };

    // 2. Send Alert Notification to the Zero Theorys Team
    const teamMailOptions = {
      from: `"Zero Theorys Booking" <${senderEmail}>`,
      to: teamEmail,
      subject: `New Lead Sync: ${name} (${time})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1f2937; line-height: 1.6;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">New Booking Alert</h2>
          <p>A new 15-minute introductory sync has been scheduled.</p>
          
          <div style="background-color: #f3f4f6; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="margin: 5px 0;">👤 <strong>Client Name:</strong> ${name}</p>
            <p style="margin: 5px 0;">✉️ <strong>Client Email:</strong> ${email}</p>
            <p style="margin: 5px 0;">📱 <strong>Client WhatsApp:</strong> ${whatsapp || "Not provided"}</p>
            <p style="margin: 5px 0;">📅 <strong>Date:</strong> ${date}</p>
            <p style="margin: 5px 0;">⏰ <strong>Time:</strong> ${time}</p>
            <p style="margin: 5px 0;">🔗 <strong>Google Meet Link:</strong> <a href="${meetLink}" style="color: #3b82f6; text-decoration: underline; font-weight: bold;">${meetLink}</a></p>
            <p style="margin: 5px 0;">📝 <strong>Project Notes:</strong> ${description || "None provided"}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 0.9rem; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 10px;">Zero Theorys System Automation</p>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(teamMailOptions)
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking API Exception:", error);
    return NextResponse.json(
      { error: "Internal server error occurred.", details: error.message },
      { status: 500 }
    );
  }
}
