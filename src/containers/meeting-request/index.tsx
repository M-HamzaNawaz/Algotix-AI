"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import SuccessTestimonials from "@/src/components/SuccessTestimonials";

const MeetingRequestPage: React.FC = () => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    } else {
      router.push("/");
    }
  }, [router]);

  useCalendlyEventListener({
    onEventScheduled: () => {
      setIsSubmitted(true);
      sessionStorage.removeItem("userEmail");
      router.push("/");
    },
    onProfilePageViewed: () =>
      console.log("Calendly profile page viewed at", new Date().toISOString()),
    onEventTypeViewed: () =>
      console.log("Calendly event type viewed at", new Date().toISOString()),
  });

  const sendEmailToAPI = (email: string) => {
    if (navigator.sendBeacon) {
      const data = new Blob([JSON.stringify({ email })], {
        type: "application/json",
      });
      const success = navigator.sendBeacon("/api/meeting-request", data);
      if (!success) localStorage.setItem("pendingEmail", email);
    } else {
      fetch("/api/meeting-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
        .then(() => console.log("fetch success at", new Date().toISOString()))
        .catch((error) => {
          console.error(
            "Error sending email to API (fetch):",
            error,
            "at",
            new Date().toISOString(),
          );
          localStorage.setItem("pendingEmail", email);
        });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isSubmitted && userEmail) {
        sendEmailToAPI(userEmail);
        const confirmationMessage =
          "Are you sure you want to leave? Your email will be saved.";
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      }
    };

    const pendingEmail = localStorage.getItem("pendingEmail");
    if (pendingEmail && !isSubmitted) {
      sendEmailToAPI(pendingEmail);
      localStorage.removeItem("pendingEmail");
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [userEmail, isSubmitted]);

  useEffect(() => {
    return () => {
      if (!isSubmitted && userEmail) sendEmailToAPI(userEmail);
    };
  }, [userEmail, isSubmitted]);

  return (
    <>
      <div className="min-h-screen w-full mt-12 flex items-center justify-center bg-gradient-to-br p-4">
        {userEmail ? (
          <div className="w-full h-[calc(100vh-3rem)] flex">
            {/* Left section for Calendly form - 1.5/4 of the width */}
            <div className="hidden min-h-full lg:flex items-start justify-center p-4 mt-16">
              <SuccessTestimonials
                autoPlay={true}
                interval={5000}
                showControls={true}
              />
            </div>
            {/* Right section for image - 2.5/4 or more of the width */}

            <div className=" w-full lg:w-[62.5%] min-h-full flex items-center justify-center  p-4">
              <InlineWidget
                url="https://calendly.com/talkwithusman/algotix-ai-free-consultation/"
                styles={{
                  width: "100%",
                  height: "100%",
                  minHeight: "500px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  scrollbarWidth: "none", // For Firefox
                  msOverflowStyle: "none", // For IE and Edge
                }}
                pageSettings={{
                  backgroundColor: "0000ff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "00a2ff",
                  textColor: "4d5055",
                }}
                prefill={{ email: userEmail }}
                utm={{ utmSource: "website_meeting_request" }}
              />
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-800">
            <p>No email found. Please submit your email first.</p>
            <button
              onClick={() => router.push("/")}
              className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
      <div
        className="
    w-full items-stretch
    min-h-[40px]
    transform scale-y-[1] sm:scale-x-[1]
    bg-curved-divider bg-no-repeat bg-cover
    mobile-sm:min-h-[48px]
    mobile-md:min-h-[56px]
    tablet:min-h-[102px] tablet:transform-none
    laptop:min-h-[130px] laptop:transform-none
    laptop-lg:min-h-[195px] laptop-lg:transform-none
    desktop:min-h-[250px] desktop:transform-none desktop:-mt-72
    desktop-lg:min-h-[265px] desktop-lg:transform-none desktop-lg:-mt-64
  "
      />
    </>
  );
};

export default MeetingRequestPage;
