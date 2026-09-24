"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { z } from "zod";

import PageSection from "@/src/components/landing/page-section";
import { Reveal } from "@/src/components/motion/reveal";

const emailSchema = z.string().email("Please enter a valid email address");

/** Newsletter sign-up as a dark glass card, matching the "Let's talk" band. */
export default function SubscribeBand({ id = "subscribe" }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const result = emailSchema.safeParse(email.trim());
    if (!result.success) {
      setError(result.error.errors[0]?.message || "Please enter a valid email");
      return;
    }
    setError("");
    setSending(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: result.data }),
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(body?.error || "Something went wrong. Please try again.");
        return;
      }
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageSection dark id={id}>
      {/* Once: a form must never fade out while someone is using it. */}
      <Reveal amount={0.2} once>
        <div className="mx-auto max-w-4xl rounded-[28px] border border-white/15 bg-white/[0.06] p-10 text-center backdrop-blur-xl tablet:p-14">
          <p className="text-label uppercase text-primary">Newsletter</p>
          <h2 className="text-heading mt-4 text-white">
            Subscribe to get the latest news about us.
          </h2>
          <p className="text-body mx-auto mt-4 max-w-xl text-white/65">
            New articles and company updates, straight to your inbox. No spam.
          </p>

          {done ? (
            <p className="text-small mt-8 text-white">
              Thanks, you are on the list.
            </p>
          ) : (
            <form
              onSubmit={submit}
              noValidate
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <label htmlFor={`${id}-email`} className="sr-only">
                Email address
              </label>
              <input
                id={`${id}-email`}
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Your email"
                aria-invalid={Boolean(error)}
                className={`h-14 flex-1 rounded-control border bg-white/[0.08] px-6 text-body !text-white placeholder:!text-white/40 focus:outline-none focus:ring-1 focus:ring-primary ${
                  error ? "border-primary" : "border-white/15"
                }`}
              />
              <button
                type="submit"
                disabled={sending}
                className="text-label group inline-flex h-14 items-center justify-center gap-3 rounded-control bg-white px-8 uppercase text-[#14141D] transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
              >
                {sending ? "Subscribing…" : "Subscribe"}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
          {error && (
            <p role="alert" className="text-small mt-3 text-primary">
              {error}
            </p>
          )}
        </div>
      </Reveal>
    </PageSection>
  );
}
