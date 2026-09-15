import { EmailTemplate, EmailTemplateProps } from "@/src/components/email";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.FORM_SUBMIT_TO_EMAIL || "usman@algotix.ai";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as EmailTemplateProps;

    // TODO: Verify domains to send from <something>@algotix.ai and fix resend not sending to more than one person.
    const { data, error } = await resend.emails.send({
      from: "FormBot <formbot@resend.dev>",
      to: TO_EMAIL,
      subject: "Hello world",
      react: await EmailTemplate(body),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
