"use client";
import { featuredPostsData } from "@/src/containers/blogs/data";
import { Post } from "@/src/containers/blogs/types";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function FeaturedPostsSlider() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNextSlide = useCallback(() => {
    if (posts.length === 0) return;
    setCurrentSlide((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  }, [posts.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 100);
  };

  useEffect(() => {
    setPosts(featuredPostsData);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying && posts.length > 0) {
      interval = setInterval(() => {
        goToNextSlide();
      }, 4000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, posts.length, goToNextSlide]);

  return (
    <div className="w-full max-w-[410px] mt-10 px-4 ">
      <h2 className="font-medium text-lg leading-[100%] tracking-[0px] text-[#767676] mb-4">
        Featured Posts
      </h2>

      <div className="relative">
        {/* Slider container */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {posts.map((post) => (
              <div key={post.id} className="min-w-full">
                <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    fill
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex gap-2">
                      {post.categories.map((category: string, i: number) => (
                        <span
                          key={i}
                          className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    <div>
                      <p className="text-white/80 mb-2">{post.date}</p>
                      <h3
                        className="text-white font-semibold text-[20px] leading-[30px] tracking-[0px]
"
                      >
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 gap-2">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-gray-500" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
