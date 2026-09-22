"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { formData } from "./data";
import Button from "../common/button/button";

interface MeetingEmailFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const MeetingEmailForm: React.FC<MeetingEmailFormProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle modal open/close behavior and keyboard events
  useEffect(() => {
    if (isOpen) {
      // Disable background scrolling
      document.body.style.overflow = "hidden";

      // Add Escape key listener
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      // Cleanup
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  // Handle clicks outside the modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userEmail) {
      setEmailError("Email is required");
      return;
    }
    if (!emailRegex.test(userEmail)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    sessionStorage.setItem("userEmail", userEmail);
    router.push("/meeting-request");
  };

  if (!isOpen) return null;

  // Render modal content via portal
  return createPortal(
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 sm:p-6 z-[20000]"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md min-h-[380px] bg-white/90 backdrop-blur-md rounded-xl border border-orange-100/30 shadow-xl hover:shadow-2xl transition-all duration-400 overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-orange-600 hover:text-orange-800 transition-colors duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Futuristic Orange Accent Line */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500/70 to-orange-300/70 rounded-l-lg animate-glow"></div>

        {/* Geometric Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              d="M10 10 L90 10 L90 90 L10 90 Z"
              fill="none"
              stroke="orange"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M20 20 L80 20 L80 80 L20 80 Z"
              fill="none"
              stroke="orange"
              strokeWidth="0.3"
              opacity="0.2"
            />
          </svg>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative flex flex-col justify-center p-6 sm:p-8 space-y-6 z-10"
        >
          {/* Form Content */}
          <div className="text-center text-gray-800">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 7l9 6 9-6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-purple-400/80 bg-clip-text text-transparent animate-pulse-slow">
              {formData.heading}
            </h3>
            <p className="text-sm font-medium tracking-wide text-gray-600 mt-2">
              {formData.subheading}
            </p>
          </div>

          <div className="w-full">
            <input
              type="email"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
                setEmailError("");
              }}
              placeholder="Enter your email"
              className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-white/80 backdrop-blur-sm border border-orange-200/40 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-400 text-sm sm:text-base"
            />
            {emailError && (
              <p className="mt-2 text-xs sm:text-sm text-red-600/70 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {emailError}
              </p>
            )}
          </div>
          <Button
            type="submit"
            variant="custom"
            className="w-full py-2 px-4 sm:py-3 sm:px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-xl transition-all duration-400 transform hover:scale-102 text-sm sm:text-base"
          >
            Continue to Schedule
          </Button>
        </form>

        {/* Futuristic Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/15 to-transparent rounded-xl opacity-50 animate-shimmer pointer-events-none" />

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-6 left-8 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-4 right-8 w-2 h-2 bg-primary rounded-full animate-pulse delay-500" />
      </div>
    </div>,
    document.body,
  );
};

export default MeetingEmailForm;
