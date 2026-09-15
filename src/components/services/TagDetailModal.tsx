"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  logo: string;
}

const TagDetailModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  logo,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 sm:p-6 z-[20000]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md min-h-[250px] bg-white/90 backdrop-blur-md rounded-xl border border-orange-100/30 shadow-xl hover:shadow-2xl transition-all duration-400 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
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

        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500/70 to-orange-300/70 rounded-l-lg animate-glow"></div>

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

        <div className="relative flex flex-col justify-center p-6 sm:p-8 space-y-6 z-10">
          {/* Form Content */}
          <div className="text-center text-gray-800">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-200 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
              <Image
                src={logo}
                alt={`${title} logo`}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-primary bg-clip-text animate-pulse-slow">
              {title}
            </h3>
          </div>

          <div className="w-full">
            <p className="text-sm font-medium tracking-wide text-gray-600">
              {description}
            </p>
          </div>
        </div>

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

export default TagDetailModal;
