"use client";

import React, { useEffect, useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { CalendarCheck, MessagesSquare, Route } from "lucide-react";

import PageHero from "@/src/components/landing/page-hero";
import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import DrawLine from "@/src/components/motion/draw-line";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";

const CALENDLY_URL =
  "https://calendly.com/talkwithusman/algotix-ai-free-consultation/";

const steps = [
  {
    icon: CalendarCheck,
    title: "Pick a time",
    description:
      "Choose a slot that suits you in the calendar. Calendly confirms it by email straight away.",
  },
  {
    icon: MessagesSquare,
    title: "Tell us what you are building",
    description:
      "Share your goals, your timeline and any constraints, so the call is about your project from the first minute.",
  },
  {
    icon: Route,
    title: "Leave with a clear next step",
    description:
      "We come back with a clear view of scope, approach, and what it takes to ship it.",
  },
];

/** Lets the owner know about a visitor who entered an email but did not book. */
function sendEmailToAPI(email: string) {
  if (navigator.sendBeacon) {
    const data = new Blob([JSON.stringify({ email })], {
      type: "application/json",
    });
    if (!navigator.sendBeacon("/api/meeting-request", data)) {
      localStorage.setItem("pendingEmail", email);
    }
    return;
  }
  fetch("/api/meeting-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  }).catch(() => localStorage.setItem("pendingEmail", email));
}

/**
 * The scheduler. It works on its own, so the "Book a meeting" buttons can link
 * straight here; when the visitor came through the consultation form, their
 * email is carried over and pre-filled.
 */
const MeetingRequestPage: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    if (storedEmail) setUserEmail(storedEmail);
  }, []);

  useCalendlyEventListener({
    onEventScheduled: () => {
      // Stay on the page so Calendly's own confirmation remains visible.
      setIsSubmitted(true);
      sessionStorage.removeItem("userEmail");
    },
  });

  useEffect(() => {
    const pendingEmail = localStorage.getItem("pendingEmail");
    if (pendingEmail && !isSubmitted) {
      sendEmailToAPI(pendingEmail);
      localStorage.removeItem("pendingEmail");
    }

    // Only visitors who gave an email and have not booked yet are followed up.
    const handleBeforeUnload = () => {
      if (!isSubmitted && userEmail) sendEmailToAPI(userEmail);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [userEmail, isSubmitted]);

  return (
    <>
      <PageHero
        image="/images/heroes/meeting.jpg"
        imageAlt="A team listening to a colleague present in an open office"
        imagePosition="center 40%"
        eyebrow="Book a meeting"
        title="Schedule a free"
        accent="consultation."
        description="Talk to our experts about your project needs and explore how Algotix AI can help. Pick a time below and we will take it from there."
        primary={{ label: "Pick a time", href: "#schedule" }}
        secondary={{
          label: "Or send a message",
          href: "/contact#get-in-touch",
        }}
      />

      <PageSection id="schedule">
        <div className="grid gap-14 laptop:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] laptop:gap-16">
          <div>
            <Reveal amount={0.2}>
              <SectionHeading
                align="left"
                eyebrow="How it works"
                title="Three steps to your first call"
                description="No forms to fill in and no commitment. Just a conversation about what you want to build."
              />
            </Reveal>

            <RevealGroup
              as="ol"
              className="relative mt-12"
              stagger={0.18}
              amount={0.15}
            >
              <span
                aria-hidden
                className="absolute bottom-10 left-6 top-6 w-px bg-[#E4E4E8]"
              />
              <DrawLine className="absolute bottom-10 left-6 top-6 w-px bg-primary" />
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <RevealItem
                    as="li"
                    key={step.title}
                    direction="right"
                    distance={26}
                    className="group relative flex gap-6 pb-10 last:pb-0"
                  >
                    <span className="text-body relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-white font-semibold text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-2.5">
                      <span className="text-subheading flex items-center gap-2.5 text-[#14141D]">
                        <Icon
                          className="h-5 w-5 text-primary"
                          strokeWidth={1.8}
                        />
                        {step.title}
                      </span>
                      <span className="text-body mt-2 block max-w-lg text-[#6B6F76]">
                        {step.description}
                      </span>
                    </span>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>

          {/* Not revealed on purpose: the widget is an iframe that measures
              itself, so it must not start scaled or hidden. */}
          <div className="overflow-hidden rounded-2xl border border-[#E4E4E8] bg-white shadow-[0_40px_80px_-40px_rgba(11,11,18,0.35)]">
            {isSubmitted && (
              <p className="text-body border-b border-[#E4E4E8] bg-[#FFF3EA] px-6 py-4 text-[#14141D]">
                You are booked. Check your inbox for the calendar invite.
              </p>
            )}
            <InlineWidget
              url={CALENDLY_URL}
              styles={{ width: "100%", height: "720px" }}
              pageSettings={{
                backgroundColor: "ffffff",
                primaryColor: "fe5a01",
                textColor: "14141d",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
              }}
              prefill={userEmail ? { email: userEmail } : undefined}
              utm={{ utmSource: "website_meeting_request" }}
            />
          </div>
        </div>
      </PageSection>
    </>
  );
};

export default MeetingRequestPage;
