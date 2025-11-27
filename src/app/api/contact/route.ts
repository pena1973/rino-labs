import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const mail_to = String(process.env.MAIL_TO);
export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            // from: "Rino Labs Contact <lead@rino-labs.com>", // или свой домен после верификации // она платная
            from: "Rino Labs Contact <lead@plan-track.pro>", // или свой домен после верификации            
            to: mail_to,                       
            replyTo: email,
            subject: `Новое сообщение с сайта Rino Labs от ${name}`,
            text: `
Имя: ${name}
Email: ${email}

Сообщение:
${message}
      `.trim(),
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ error: "Email send failed" }, { status: 500 });
        }

        return NextResponse.json({ success: true, id: data?.id });
    } catch (err) {
        console.error("Contact form error:", err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
