import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/** The same inbox the contact and meeting forms notify. */
const TO_EMAIL = process.env.FORM_SUBMIT_TO_EMAIL || "usman@algotix.ai";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST /api/subscribe
 *
 * Expects JSON body: { "email": "user@example.com" }
 * There is no mailing-list provider yet, so a subscription is delivered as a
 * notification email to the site inbox, like the other forms.
 */
export async function POST(request: NextRequest) {
  try {
    const { email } = (await request.json()) as { email?: string };
    const address = (email || "").trim();

    if (!EMAIL_PATTERN.test(address)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const when = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Karachi",
    });

    const { error } = await resend.emails.send({
      from: "FormBot <formbot@resend.dev>",
      to: TO_EMAIL,
      subject: `New newsletter subscriber: ${address}`,
      text: [
        "A visitor subscribed to the newsletter from the website.",
        "",
        `Email: ${address}`,
        `Date and time: ${when} (PKT)`,
        "",
        "— FormBot",
      ].join("\n"),
    });

    if (error) {
      return Response.json(
        { error: "We could not save your subscription. Please try again." },
        { status: 500 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "We could not save your subscription. Please try again." },
      { status: 500 },
    );
  }
}
