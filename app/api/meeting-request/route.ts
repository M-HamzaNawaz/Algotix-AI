import { NextRequest } from "next/server";
import { Resend } from "resend";

/**
 * Initialize the Resend SDK
 * -------------------------------------------------
 * The API key should already be in your env file:
 * RESEND_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
 */
const resend = new Resend(process.env.RESEND_API_KEY);

/** Single recipient for all meeting requests */
const TO_EMAIL = process.env.FORM_SUBMIT_TO_EMAIL || "aliasghar@algotix.ai";

/**
 * POST /api/meeting-request
 *
 * Expects JSON body: { "email": "user@example.com" }
 * Sends a notification email saying the user wants a meeting.
 */
export async function POST(request: NextRequest) {
  try {
    const { email } = (await request.json()) as { email?: string };

    console.log(
      "====================Received meeting request email====================>:",
      email,
    );

    if (!email) {
      return Response.json(
        { error: "Missing `email` in request body." },
        { status: 400 },
      );
    }

    // Get current date and time in Pakistan Standard Time (PKT)
    const now = new Date();
    const formattedDateTime = now.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Asia/Karachi",
      timeZoneName: "short",
    });

    /* Build a simple text email with date and time */
    const message = [
      "Another opportunity!,",
      "",
      `A user left a meeting request with the following e-mail:`,
      "",
      `Contact e-mail: ${email}`,
      `Date and time: ${formattedDateTime}`,
      "",
      "— FormBot",
    ].join("\n");

    const { data, error } = await resend.emails.send({
      from: "FormBot <formbot@resend.dev>",
      to: TO_EMAIL,
      subject: "New meeting request",
      text: message,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    /* On success, Resend returns an object with the e-mail ID, etc. */
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err }, { status: 500 });
  }
}
