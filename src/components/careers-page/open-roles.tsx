import Link from "next/link";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";

import PageSection from "@/src/components/landing/page-section";
import SectionHeading from "@/src/components/landing/section-heading";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { careersEmail, openRoles } from "./data";

/** Lists open roles, or says plainly that there are none right now. */
export default function OpenRoles() {
  const hiring = openRoles.length > 0;

  return (
    <PageSection dark id="roles">
      <Reveal amount={0.25}>
        <SectionHeading
          tone="dark"
          eyebrow="Open positions"
          title={
            hiring ? "Roles we are hiring for" : "No open positions right now"
          }
          description={
            hiring
              ? "Every role is remote-friendly. Apply with a short note and a link to work you are proud of."
              : "We're not actively hiring at the moment, but we're always excited to meet great people. Check back soon, or send us your resume."
          }
        />
      </Reveal>

      {hiring ? (
        <RevealGroup className="mt-14 space-y-4" stagger={0.08} amount={0.1}>
          {openRoles.map((role) => (
            <RevealItem key={role.title} distance={20}>
              <Link
                href={role.href}
                className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-primary/50 tablet:flex-row tablet:items-center tablet:justify-between tablet:p-7"
              >
                <div>
                  <h3 className="text-subheading text-white transition-colors duration-300 group-hover:text-primary">
                    {role.title}
                  </h3>
                  <div className="text-small mt-2 flex flex-wrap gap-x-5 gap-y-1 text-white/60">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4" strokeWidth={1.8} />
                      {role.team} · {role.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" strokeWidth={1.8} />
                      {role.location}
                    </span>
                  </div>
                </div>
                <span className="text-label inline-flex items-center gap-2 uppercase text-white">
                  Apply
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      ) : (
        <Reveal className="mt-14" amount={0.2}>
          <div className="mx-auto max-w-3xl rounded-[28px] border border-white/15 bg-white/[0.06] p-10 text-center backdrop-blur-xl tablet:p-14">
            <p className="text-label uppercase text-primary">
              Speculative applications
            </p>
            <h3 className="text-subheading mt-4 text-white">
              Tell us what you would bring.
            </h3>
            <p className="text-body mx-auto mt-4 max-w-xl text-white/65">
              Send your resume and a few lines about the work you enjoy to{" "}
              <a
                href={`mailto:${careersEmail}`}
                className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-primary"
              >
                {careersEmail}
              </a>
              . We read every message.
            </p>
          </div>
        </Reveal>
      )}
    </PageSection>
  );
}
