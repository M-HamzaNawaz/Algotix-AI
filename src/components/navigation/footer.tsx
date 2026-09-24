import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import DrawLine from "@/src/components/motion/draw-line";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/src/components/motion/reveal";
import { Logo } from "../common/ui/logo";
import { footerData, NavLinksType } from "./data";

function Column({
  heading,
  links,
}: {
  heading: string;
  links: NavLinksType[];
}) {
  return (
    <div>
      <p className="text-label uppercase text-[#A0A4AB]">{heading}</p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => {
          const external = link.path.startsWith("http");
          return (
            <li key={link.path}>
              <Link
                href={link.path}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-small group inline-flex items-center gap-1.5 text-[#3A3D45] transition-colors duration-300 hover:text-primary"
              >
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                  {link.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * The closing block: a brand statement and the direct routes on the left,
 * four ruled columns of links on the right, and the outlined wordmark
 * running off the bottom edge.
 */
export default function Footer() {
  const data = footerData;
  const [email, address] = data.links.contact;

  return (
    <footer className="relative z-10 overflow-hidden bg-white px-6 pb-36 pt-20 sm:px-10 sm:pb-64 tablet:pt-28 xl:px-[60px]">
      <div className="relative mx-auto w-full max-w-[1480px]">
        <RevealGroup
          className="relative grid gap-12 border-t border-[#E4E4E8] pt-12 laptop:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] laptop:gap-20"
          stagger={0.12}
          amount={0.1}
        >
          <DrawLine
            axis="x"
            delay={0.1}
            className="absolute -top-px left-0 h-px w-full bg-primary"
          />

          {/* Brand, statement, socials, and the two direct routes. */}
          <RevealItem direction="right" distance={26} className="max-w-[460px]">
            <Logo />
            <p className="text-body mt-6 text-[#6B6F76]">
              {data.logo.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-2">
              {email && (
                <a
                  href={email.path}
                  className="text-subheading group inline-flex items-center gap-2 text-[#14141D] transition-colors duration-300 hover:text-primary"
                >
                  {email.title}
                  <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
              {address && (
                <a
                  href={address.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-[#6B6F76] transition-colors duration-300 hover:text-primary"
                >
                  {address.title}
                </a>
              )}
            </div>

            <div className="mt-8 flex gap-3">
              {data.social.map((item) => (
                <Link
                  href={item.link}
                  key={item.title}
                  aria-label={item.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4E8] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-[#FFF3EA]"
                >
                  <Image src={item.logo} alt="" className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </RevealItem>

          {/* Link columns. */}
          <RevealItem direction="left" distance={26}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 tablet:grid-cols-4">
              <Column heading="Navigation" links={data.links.navigation} />
              <Column heading="Services" links={data.links.services} />
              <Column heading="Company" links={data.links.company} />
              <div>
                <p className="text-label uppercase text-[#A0A4AB]">Start</p>
                <ul className="mt-5 space-y-3">
                  <li>
                    <Link
                      href="/contact"
                      className="text-small group inline-flex items-center gap-1.5 font-semibold text-[#14141D] transition-colors duration-300 hover:text-primary"
                    >
                      Start a project
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/meeting-request"
                      className="text-small group inline-flex items-center gap-1.5 text-[#3A3D45] transition-colors duration-300 hover:text-primary"
                    >
                      Book a meeting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={data.careersLink.path}
                      className="text-small group inline-flex items-center gap-1.5 text-[#3A3D45] transition-colors duration-300 hover:text-primary"
                    >
                      Join the team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>

        <Reveal
          amount={0.2}
          className="mt-12 flex flex-col gap-3 border-t border-[#E4E4E8] pt-6 text-[#A0A4AB] tablet:flex-row tablet:items-center tablet:justify-between"
        >
          <p className="text-small">
            Rooted in Pakistan, delivering worldwide.
          </p>
          <p className="text-small">Algotix AI</p>
        </Reveal>
      </div>

      <Image
        src="/trans_footerlogo.svg"
        width={50}
        height={50}
        className="pointer-events-none absolute -bottom-6 left-1/2 h-auto w-full -translate-x-1/2 px-4 sm:w-2/3 sm:px-0"
        alt=""
        aria-hidden
      />
    </footer>
  );
}
