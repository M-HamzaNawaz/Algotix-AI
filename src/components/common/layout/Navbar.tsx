"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MeetingEmailForm from "../../meetingEmailForm";

/**
 * The reference bar is one constant, slightly translucent dark surface at every
 * scroll position — never transparent over the hero, never hidden — and the only
 * thing scrolling changes is a faint shadow. This mirrors that in the brand dark.
 */
const BAR_BACKGROUND = "rgba(11, 11, 18, 0.9)";
const BAR_SHADOW = "0 2px 4px rgba(0, 0, 0, 0.075)";

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
    const handleScroll = () => setScrolled(window.scrollY > 10);

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
      ? "font-medium text-[#ff5a01]"
      : "text-white/85 hover:text-white transition-colors duration-300";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] py-4 transition-shadow duration-300 xl:py-5"
      style={{
        backgroundColor: BAR_BACKGROUND,
        boxShadow: scrolled ? BAR_SHADOW : "none",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-[30px] md:h-[35px]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="relative h-[37px] w-[120px]">
            <Image
              /* White-lettered copy of the logo for the dark bar, so the
                 orange dot over the "i" keeps its colour. */
              src="/images/logo/logo-white.png"
              alt="AlgotixAI"
              fill
              sizes="120px"
              className="object-contain"
              priority
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
              className={`text-sm xl:text-[16px] font-normal font-['Poppins'] ${getLinkClass(
                item.path,
              )}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Call to action, styled like the reference's tinted "CONTACT" pill. */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={handleConsultationClick}
            className="rounded-lg bg-[#FFEFE4] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FE5A01] font-['Poppins'] transition-all duration-300 hover:bg-[#FE5A01] hover:text-white"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2"
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

      {/* Mobile Dropdown Menu — dark to match the bar it drops out of. */}
      <div
        ref={menuRef}
        className={`lg:hidden absolute w-full top-14 shadow-lg shadow-black/30 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
        style={{ backgroundColor: "#0B0B12" }}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => rememberHash(item.path)}
              className={`block text-sm py-2 px-4 font-normal rounded-md transition-colors duration-200 ${
                isActive(item.path)
                  ? "font-semibold text-[#ff5a01] bg-white/10"
                  : "text-white/85 hover:bg-white/5"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-2 border-t border-white/10 mt-2">
            <div className="px-4 pt-2">
              <button
                onClick={handleConsultationClick}
                className="block w-full bg-gradient-to-l from-[#ff5a01] to-[#fd5901] text-white text-base font-semibold px-5 py-3 rounded-full text-center shadow-sm hover:shadow-md transition-shadow duration-300"
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
