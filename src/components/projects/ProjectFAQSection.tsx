"use client";
import React, { useState, useRef, useEffect } from "react";
import { faqData } from "@/src/containers/projects/data";
import Link from "next/link";

const ProjectFAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentHeights = useRef<number[]>([]);

  // Calculate content heights for smooth animations
  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqData.length);

    // Get heights of all content divs for animations
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        // Store the natural height
        contentHeights.current[index] = ref.scrollHeight;
      }
    });
  }, []);

  // Handle accordion toggle
  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-grid">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primaryLight/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primaryLight bg-clip-text text-transparent inline-block">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primaryLight mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col items-center max-w-4xl 4k:max-w-7xl mx-auto">
          {faqData.map((item, index) => {
            const isActive = index === activeIndex;
            const isHovered = index === hoverIndex;

            return (
              <div
                key={index}
                className={`faq-item mb-6 rounded-2xl w-full overflow-hidden transition-all duration-300 shadow-sm animate-fade-in ${
                  isActive ? "shadow-lg" : isHovered ? "shadow-md" : "shadow-sm"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`border border-gray-100 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-primaryLight border-transparent"
                      : "bg-white hover:border-primary/20"
                  }`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <button
                    className={`w-full text-left flex justify-between items-center p-6 font-medium text-lg transition-all duration-300 ${
                      isActive ? "text-white" : "text-gray-800"
                    }`}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isActive}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span className="pr-8">{item.question}</span>
                    <span
                      className={`text-2xl transform transition-transform duration-300 p-3 flex items-center justify-center h-8 w-8 rounded-full ${
                        isActive
                          ? "rotate-45 bg-white/20 text-white"
                          : isHovered
                            ? "bg-primary/10 text-primary"
                            : "text-primary"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`faq-content-${index}`}
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    className={`faq-content overflow-hidden transition-all duration-300 ${
                      isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-white bg-gradient-to-r from-primary/90 to-primaryLight/90 rounded-b-2xl">
                      <div className="border-t border-white/20 pt-4">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional help section */}
        <div className="mt-16 text-center animate-fade-up">
          <p className="text-gray-600 4k:text-xl  mb-6">
            Still have questions? We&apos;re here to help!
          </p>
          <Link
            href="/contact"
            id="have-questions"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primaryLight text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            Contact Our Support Team
          </Link>
        </div>
      </div>

      {/* Custom CSS Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.4s ease-out forwards;
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.5s ease-out 0.5s forwards;
        }

        .faq-content {
          transition:
            max-height 0.3s ease-in-out,
            opacity 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ProjectFAQSection;
