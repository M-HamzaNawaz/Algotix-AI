"use client";

import React from "react";
import Image from "next/image";
interface ImageShowcaseProps {
  images: string[];
  alt?: string;
  className?: string;
}

const ImageShowcase: React.FC<ImageShowcaseProps> = ({
  images,
  alt = "",
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }, [images.length]);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevSlide, nextSlide]);

  return (
    <div
      className={`p-6 rounded-lg bg-gradient-to-br from-slate-300 to-slate-500 shadow-xl flex flex-col items-center justify-center ${className}`}
    >
      <div className="relative w-full max-w-4xl bg-zinc-900 rounded-lg p-4 shadow-lg overflow-hidden">
        {/* Browser-style buttons */}
        <div className="absolute top-3 left-3 flex space-x-2 z-10">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />

          <p className="text-white text-sm leading-3 ml-4">
            img_{currentIndex + 1}.jpeg
          </p>
        </div>

        <div className="relative overflow-hidden mt-6">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full flex justify-center">
                <Image
                  src={image}
                  alt={`${alt}-${index}`}
                  width={727}
                  height={592}
                  className="rounded-md max-w-full h-auto object-contain"
                  unoptimized
                  draggable={false}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-r z-10"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-l z-10"
          >
            →
          </button>
        </div>
        <p className="text-white text-center pt-2">
          Description {currentIndex + 1}
        </p>
      </div>
      <div className="flex justify-center items-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-gray-500" : "w-2 bg-gray-300"}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageShowcase;
