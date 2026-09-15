import React from "react";
import AboutCard from "./AboutCard";
import Technologies from "./Technologies";
import CreatingSection from "./CreatingSection";
import FeaturedPostsSlider from "./FeaturedPostsSlider";

const BlogsSidebar = () => {
  return (
    <div className="space-y-2 sm:space-y-4 md:space-y-8 lg:space-y-10">
      <AboutCard />
      <FeaturedPostsSlider />

      <div className="mt-6 md:mt-8 lg:mt-10">
        <Technologies />
      </div>
      <div>
        <CreatingSection />
      </div>
    </div>
  );
};

export default BlogsSidebar;
