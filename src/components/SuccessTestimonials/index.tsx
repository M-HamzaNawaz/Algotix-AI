import React, { useState, useEffect } from "react";
import { testimonialsData } from "./data";
import Image from "next/image";

const SuccessTestimonials = ({
  autoPlay = true,
  interval = 5000,
  showControls = true,
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const nextTestimonial = React.useCallback(() => {
    if (isFadingOut) return;

    setIsFadingOut(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
      setIsFadingOut(false);
    }, 500); // Match fade-out duration
  }, [isFadingOut]);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextTestimonial();
    }, interval);

    return () => clearInterval(timer);
  }, [currentTestimonial, autoPlay, interval, nextTestimonial]);

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length,
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentTestimonial) return;
    setIsAnimating(true);
    setCurrentTestimonial(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const current = testimonialsData[currentTestimonial];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-amber-300" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 15.27L16.18 19 14.54 11.97 20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
          clipRule="evenodd"
        />
      </svg>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Main Testimonial Card */}
      <div className="relative">
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${current.gradient} p-8 md:p-12 text-white min-h-[500px] flex flex-col justify-center`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse" />
            <div
              className="absolute bottom-20 right-15 w-16 h-16 border-2 border-white rounded-lg rotate-45 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-5 w-12 h-12 border-2 border-white rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>

          {/* Content */}
          <div
            key={currentTestimonial}
            className={`relative z-10 text-center transform transition-all duration-700 ease-in-out
        ${isFadingOut ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}
    `}
          >
            {/* Quote */}
            <div className="mb-8">
              <svg
                className="w-12 h-12 mx-auto mb-6 opacity-50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl leading-relaxed font-light italic max-w-4xl mx-auto">
                {current.quote}
              </p>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {renderStars(current.rating)}
              </div>
            </div>

            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white border-opacity-30 shadow-xl">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover rounded-full"
                    fill
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(current.name)}&background=random&color=fff&size=128`;
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-lg shadow-lg">
                  {current.companyLogo}
                </div>
              </div>

              {/* Details */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-1">{current.name}</h3>
                <p className="text-lg opacity-90 mb-1">{current.position}</p>
                <p className="text-base opacity-80 mb-3">{current.company}</p>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm backdrop-blur-sm border border-white border-opacity-30">
                    {current.projectType}
                  </span>
                  <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm backdrop-blur-sm border border-white border-opacity-30">
                    {current.industry}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-20 z-[200]">
            <div
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{
                width: `${((currentTestimonial + 1) / testimonialsData.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Controls */}
        {showControls && (
          <div className="flex items-center justify-between mt-8">
            {/* Counter */}
            <div className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
              {currentTestimonial + 1} of {testimonialsData.length}
            </div>

            {/* Navigation Dots */}
            <div className="flex space-x-3">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary scale-125 shadow-lg"
                      : "bg-gray-300 hover:bg-orange-300"
                  }`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-all duration-200 group border-2 border-transparent hover:border-orange-200"
                disabled={isAnimating}
              >
                <svg
                  className="w-6 h-6 text-gray-600 group-hover:text-primary group-hover:scale-110 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-primary hover:bg-primary flex items-center justify-center transition-all duration-200 group text-white shadow-lg hover:shadow-xl"
                disabled={isAnimating}
              >
                <svg
                  className="w-6 h-6 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="text-4xl font-bold text-primary mb-2">10Y</div>
          <div className="text-gray-600 font-medium">Experience</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="text-4xl font-bold text-primary mb-2">30+</div>
          <div className="text-gray-600 font-medium">Companies</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="text-4xl font-bold text-primary mb-2">50+</div>
          <div className="text-gray-600 font-medium">Customers</div>
        </div>
      </div>
    </div>
  );
};

export default SuccessTestimonials;
