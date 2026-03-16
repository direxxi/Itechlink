import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      service,
      budget,
      message,
    } = body;

    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json(
        { success: false, error: "Required fields are missing." },
        { status: 400 },
      );
    }

    await transporter.sendMail({
      from: `"iTechLink Website" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      replyTo: email,
      subject: `New Enquiry: ${service} — ${firstName} ${lastName}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><div style="background:linear-gradient(135deg,#0EA5E9,#0077B6);padding:32px;border-radius:12px 12px 0 0"><h1 style="color:white;margin:0;font-size:22px">New Website Enquiry</h1><p style="color:rgba(255,255,255,0.7);margin:8px 0 0;font-size:14px">${service}</p></div><div style="background:#f9fafb;padding:32px;border:1px solid #e5e7eb;border-top:none"><table style="width:100%;border-collapse:collapse"><tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;width:140px">Name</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827">${firstName} ${lastName}</td></tr><tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px">Email</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#111827">${email}</td></tr><tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#111827">${phone || "—"}</td></tr><tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px">Company</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#111827">${company || "—"}</td></tr><tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px">Service</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#111827">${service}</td></tr><tr><td style="padding:10px 0;color:#6b7280;font-size:13px">Budget</td><td style="padding:10px 0;color:#111827">${budget || "—"}</td></tr></table><div style="margin-top:24px"><p style="color:#6b7280;font-size:13px;margin:0 0 8px">Message</p><div style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:16px;color:#374151;line-height:1.7;font-size:14px">${message.replace(/\n/g, "<br/>")}</div></div><div style="margin-top:24px;padding:16px;background:#eff6ff;border-radius:8px;border-left:4px solid #0EA5E9"><p style="margin:0;color:#1e40af;font-size:13px">Hit <strong>Reply</strong> to respond directly to ${firstName} at ${email}</p></div></div><div style="background:#f3f4f6;padding:16px;border-radius:0 0 12px 12px;text-align:center"><p style="margin:0;color:#9ca3af;font-size:12px">iTechLink IT Services & Solutions · Lagos, Nigeria</p></div></div>`,
    });

    await transporter.sendMail({
      from: `"iTechLink IT Services" <${process.env.ZOHO_USER}>`,
      to: email,
      subject: `We've received your enquiry — iTechLink`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto"><div style="background:linear-gradient(135deg,#0EA5E9,#0077B6);padding:32px;border-radius:12px 12px 0 0"><h1 style="color:white;margin:0;font-size:22px">Thanks, ${firstName}.</h1><p style="color:rgba(255,255,255,0.7);margin:8px 0 0;font-size:15px">We've received your message and will be in touch shortly.</p></div><div style="background:#ffffff;padding:32px;border:1px solid #e5e7eb;border-top:none"><p style="color:#374151;line-height:1.7;font-size:15px">A member of the iTechLink team will review your enquiry and respond within <strong>24 hours</strong>.</p><div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin:24px 0"><p style="margin:0 0 12px;font-weight:700;color:#111827;font-size:14px">Your enquiry summary</p><p style="margin:0 0 4px;color:#6b7280;font-size:13px">Service: <span style="color:#111827;font-weight:600">${service}</span></p>${budget ? `<p style="margin:0;color:#6b7280;font-size:13px">Budget: <span style="color:#111827;font-weight:600">${budget}</span></p>` : ""}</div><p style="color:#374151;font-size:14px;line-height:1.7">Need a faster response? Call or WhatsApp:<br/><a href="tel:+2348123456789" style="color:#0EA5E9;font-weight:600">+234 812 345 6789</a></p></div><div style="background:#f3f4f6;padding:20px;border-radius:0 0 12px 12px;text-align:center"><p style="margin:0;color:#9ca3af;font-size:12px">iTechLink IT Services & Solutions · Lagos, Nigeria</p></div></div>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
