"use client";

import GetInTouchForm from "@/src/components/about-us/GetInTouchForm";
import ContactInfoSection from "@/src/components/contact/ContactInfoSection";
import HeroContactSection from "@/src/components/contact/HeroContactSection";
import dynamic from "next/dynamic";
import React from "react";
import { Reveal } from "@/src/components/motion/reveal";

const MapLocation = dynamic(
  () => import("@/src/components/contact/MapLocation"),
  {
    ssr: false,
    loading: () => <div className="text-center pt-5">Loading</div>,
  },
);

const Contact = () => {
  return (
    <div className="container-fluid  !w-full mx-auto">
      <HeroContactSection />

      <Reveal amount={0.1}>
        <ContactInfoSection />
      </Reveal>

      {/* Left un-animated on purpose: the form embeds the Turnstile widget,
          which is unreliable inside an element that starts at opacity 0. */}
      <GetInTouchForm />

      {/* Fade only — Leaflet measures its container, so it must not be moved
          or scaled while it initialises. */}
      <Reveal direction="none" amount={0.1}>
        <MapLocation />
      </Reveal>
    </div>
  );
};

export default Contact;
