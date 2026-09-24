import { Resend } from "resend";
import { contact } from "@/lib/data";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: contact.email,
    replyTo: email,
    subject: subject ? `${subject} — ${name}` : `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }

  return Response.json({ success: true });
}
