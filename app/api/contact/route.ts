import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "tnasylvia@gmail.com",
      subject: `[Portfolio] Nouveau message de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8"></head>
          <body style="font-family: -apple-system, sans-serif; background: #f9fafb; padding: 40px 20px;">
            <div style="max-width: 560px; margin: 0 auto; background: white; border-radius: 16px; padding: 40px; border: 1px solid #e5e7eb;">
              <h1 style="font-size: 20px; font-weight: 700; color: #1f2937; margin: 0 0 24px;">
                📬 Nouveau message depuis ton portfolio
              </h1>
              <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                <p style="color: #6b7280; font-size: 12px; margin: 0 0 4px; text-transform: uppercase; font-weight: 600;">Nom</p>
                <p style="color: #1f2937; font-size: 15px; font-weight: 600; margin: 0;">${name}</p>
              </div>
              <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                <p style="color: #6b7280; font-size: 12px; margin: 0 0 4px; text-transform: uppercase; font-weight: 600;">Email</p>
                <p style="color: #1f2937; font-size: 15px; margin: 0;">
                  <a href="mailto:${email}" style="color: #7c3aed;">${email}</a>
                </p>
              </div>
              <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <p style="color: #6b7280; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; font-weight: 600;">Message</p>
                <p style="color: #1f2937; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-line;">${message}</p>
              </div>
              <a href="mailto:${email}" style="display: inline-block; background: #7c3aed; color: white; padding: 12px 24px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Répondre à ${name} →
              </a>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi." },
      { status: 500 }
    );
  }
}