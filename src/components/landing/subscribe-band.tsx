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

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const result = emailSchema.safeParse(email.trim());
    if (!result.success) {
      setError(result.error.errors[0]?.message || "Please enter a valid email");
      return;
    }
    setError("");
    // The original form validated only; there is no subscription endpoint yet.
    setDone(true);
  };

  return (
    <PageSection dark id={id}>
      <Reveal amount={0.2}>
        <div className="mx-auto max-w-4xl rounded-[28px] border border-white/15 bg-white/[0.06] p-10 text-center backdrop-blur-xl tablet:p-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            Newsletter
          </p>
          <h2 className="mt-4 text-[28px] font-bold leading-tight text-white tablet:text-4xl">
            Subscribe to get the latest news about us.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/65">
            New articles and company updates, straight to your inbox. No spam.
          </p>

          {done ? (
            <p className="mt-8 text-sm font-medium text-white">
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
                className={`h-14 flex-1 rounded-full border bg-white/[0.08] px-6 text-sm !text-white placeholder:!text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                  error ? "border-primary" : "border-white/15"
                }`}
              />
              <button
                type="submit"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#14141D] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
          {error && (
            <p role="alert" className="mt-3 text-sm text-primary">
              {error}
            </p>
          )}
        </div>
      </Reveal>
    </PageSection>
  );
}
