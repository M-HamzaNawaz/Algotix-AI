"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import MeetingEmailForm from "../../meetingEmailForm";

/**
 * At the top of the page the bar is a near-solid brand dark. Once the visitor
 * scrolls it becomes light frosted glass: a translucent white with the page
 * blurred through it, a faint bottom line and a soft shadow. The logo, the
 * links and the phone menu switch to dark with it.
 */
const BAR_BACKGROUND = "rgba(11, 11, 18, 0.9)";
const GLASS_BACKGROUND = "rgba(255, 255, 255, 0.55)";
const GLASS_BLUR = "blur(18px) saturate(180%)";
const GLASS_SHADOW = "0 4px 30px rgba(0, 0, 0, 0.08)";
const GLASS_BORDER = "1px solid rgba(255, 255, 255, 0.35)";
/** How far the page must scroll before the glass state kicks in. */
const SCROLL_THRESHOLD = 20;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  /* The URL hash, so an item like "/projects#have-questions" can be told
     apart from "/projects": usePathname() never includes it. */
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and email form when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowEmailForm(false);
  }, [pathname]);

  // Same-page hash navigation is a pushState, which fires no hashchange, so the
  // hash is also re-read on every route change and on nav clicks below.
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleConsultationClick = () => {
    setShowEmailForm(true);
    setIsOpen(false);
    document.body.style.overflow = "hidden";
  };

  const handleCloseForm = () => {
    setShowEmailForm(false);
    document.body.style.overflow = "auto";
  };

  const navItems = [
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
    { name: "Careers", path: "/careers" },
  ];

  /**
   * An item with a hash is active only when the page and the hash both match.
   * A plain page item is active on its page unless a sibling item owns the
   * current hash, so "Projects" steps aside for "Have Questions?".
   */
  const isActive = (path: string) => {
    const [itemPath, itemHash = ""] = path.split("#");
    if (pathname !== itemPath) return false;
    if (itemHash) return hash === `#${itemHash}`;
    return !navItems.some(
      (item) => item.path !== path && item.path === `${pathname}${hash}`,
    );
  };

  const rememberHash = (path: string) => {
    const index = path.indexOf("#");
    setHash(index === -1 ? "" : path.slice(index));
  };

  const getLinkClass = (path: string) =>
    isActive(path)
      ? "font-semibold text-[#ff5a01]"
      : scrolled
        ? "text-[#0B0B12]/85 hover:text-primary transition-colors duration-300"
        : "text-white/85 hover:text-white transition-colors duration-300";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] py-4 transition-[background-color,box-shadow,border-color] duration-300 xl:py-5"
      style={{
        backgroundColor: scrolled ? GLASS_BACKGROUND : BAR_BACKGROUND,
        backdropFilter: scrolled ? GLASS_BLUR : "none",
        WebkitBackdropFilter: scrolled ? GLASS_BLUR : "none",
        boxShadow: scrolled ? GLASS_SHADOW : "none",
        borderBottom: scrolled ? GLASS_BORDER : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-[30px] w-full max-w-[1600px] items-center justify-between px-6 sm:px-10 xl:px-[60px] md:h-[35px]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="relative block h-[37px] w-[120px]">
            {/* White-lettered logo for the dark bar and the original dark
                logo for the glass bar, cross-faded so the swap is smooth.
                Both keep the orange dot over the "i". */}
            <Image
              src="/images/logo/logo-white.png"
              alt="AlgotixAI"
              fill
              sizes="120px"
              className={`object-contain transition-opacity duration-300 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
            <Image
              src="/images/logo/logo.svg"
              alt=""
              aria-hidden
              fill
              sizes="120px"
              className={`object-contain transition-opacity duration-300 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => rememberHash(item.path)}
              className={`text-body font-['Poppins'] ${getLinkClass(
                item.path,
              )}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Call to action: the same solid orange pill as the hero button. */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={handleConsultationClick}
            className="text-label group inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-2.5 uppercase text-white font-['Poppins'] shadow-[0_10px_24px_-12px_rgba(254,89,1,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF6A1A]"
          >
            Contact
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex">
          <button
            onClick={toggleMenu}
            className={`p-2 transition-colors duration-300 focus:outline-none ${
              scrolled ? "text-[#0B0B12]" : "text-white"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu, a solid surface matching the bar it drops out
          of. It cannot be glass: an element inside a backdrop-filtered parent
          only sees that parent's own paint, so a blur here would show nothing. */}
      <div
        ref={menuRef}
        className={`lg:hidden absolute w-full top-14 shadow-lg shadow-black/30 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
        style={{ backgroundColor: scrolled ? "#FFFFFF" : "#0B0B12" }}
      >
        <div className="mx-auto flex w-full max-w-[1600px] flex-col space-y-4 px-6 pb-6 sm:px-10 xl:px-[60px]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => rememberHash(item.path)}
              className={`block text-body py-2 px-4 rounded-md transition-colors duration-200 ${
                isActive(item.path)
                  ? `font-semibold text-[#ff5a01] ${scrolled ? "bg-primary/10" : "bg-white/10"}`
                  : scrolled
                    ? "text-[#0B0B12]/85 hover:bg-black/5"
                    : "text-white/85 hover:bg-white/5"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div
            className={`mt-2 border-t pt-2 ${scrolled ? "border-black/10" : "border-white/10"}`}
          >
            <div className="px-4 pt-2">
              <button
                onClick={handleConsultationClick}
                className="text-body block w-full bg-gradient-to-l from-[#ff5a01] to-[#fd5901] text-white font-semibold px-5 py-3 rounded-full text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                Request a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Email Form */}
      <MeetingEmailForm isOpen={showEmailForm} onClose={handleCloseForm} />
    </nav>
  );
};

export default Navbar;
