"use client";

import { ourServiceData, filters } from "@/src/containers/services/data";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState, useRef, useEffect, useCallback } from "react";
import TagDetailModal from "./TagDetailModal";
import Button from "../common/button/button";
import { useRouter } from "next/navigation";

const OurServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState({
    name: "",
    description: "",
    logo: "",
  });
  const [activeTab, setActiveTab] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tabIndicator, setTabIndicator] = useState({ width: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const router = useRouter();

  const filteredServices =
    activeTab === "All"
      ? ourServiceData.filter((service) => service.showInAll)
      : ourServiceData.filter((service) =>
          service.categories.includes(activeTab),
        );
  const openModal = (service: (typeof ourServiceData)[0], tagName: string) => {
    const tag = service.tags.find((t) => t.name === tagName);
    setSelectedTag({
      name: tagName,
      description: tag?.description || "Description not available.",
      logo: service.logos[0] || "/images/default-logo.png",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDropdownSelect = (category: string) => {
    setActiveTab(category);
    setIsDropdownOpen(false);
  };

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  const updateTabIndicator = useCallback((activeIndex: number) => {
    const activeTabElement = tabRefs.current[activeIndex];
    if (activeTabElement) {
      const { offsetWidth, offsetLeft } = activeTabElement;
      setTabIndicator((prev) => {
        if (prev.width !== offsetWidth || prev.left !== offsetLeft) {
          return { width: offsetWidth, left: offsetLeft };
        }
        return prev;
      });
    }
  }, []);

  const handleClick = (service: (typeof ourServiceData)[0]) => {
    router.push(`/services/${service.slug}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const activeIndex = filters.indexOf(activeTab);
    if (activeIndex !== -1) {
      updateTabIndicator(activeIndex);
    }
  }, [activeTab, updateTabIndicator]);

  const handleResize = useCallback(() => {
    const activeIndex = filters.indexOf(activeTab);
    if (activeIndex !== -1) {
      updateTabIndicator(activeIndex);
    }
  }, [activeTab, updateTabIndicator]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-primary text-sm md:text-lg font-semibold mb-2  4k:text-3xl">
          Our Services
        </h2>
        <h1 className="text-2xl md:text-3xl font-bold mb-4  4k:text-4xl">
          Empowering Your Business with{" "}
          <span className="text-primary">Innovative Solutions</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4 4k:text-xl">
          From web development to mobile applications and seamless backend
          integration — we build scalable, high-performance solutions tailored
          to your needs.
        </p>
      </div>

      {/* Mobile Dropdown */}
      <div className="sm:hidden mb-8">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full text-black border-2 border-primary px-4 py-3 rounded-xl text-md font-medium flex items-center justify-between shadow-primaryLight"
          >
            <span>{activeTab}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              {filters.map((category) => (
                <button
                  key={category}
                  onClick={() => handleDropdownSelect(category)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                    activeTab === category
                      ? "bg-primary text-white hover:bg-primary"
                      : "text-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Animated Tabs */}
      <div className="hidden sm:block mb-8">
        <div className="relative">
          <div className="flex justify-center">
            <div className="relative bg-gray-100 rounded-xl p-1 inline-flex">
              <div
                className="absolute top-1 bottom-1 bg-primary rounded-lg transition-all duration-300 ease-out shadow-md"
                style={{
                  width: `${tabIndicator.width}px`,
                  transform: `translateX(${tabIndicator.left}px)`,
                }}
              />
              {filters.map((category, index) => (
                <button
                  key={category}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  onClick={() => handleTabClick(category)}
                  className={`relative z-10 px-6 py-3 rounded-lg text-sm 4k:text-lg font-semibold transition-all duration-300 ease-out ${
                    activeTab === category
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="w-[350px] relative rounded-lg border-primary bg-white border-2 flex flex-col justify-between px-6 py-4 overflow-hidden shadow-lg min-h-[260px] max-h-[350px] group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-center mb-4">
              <h1 className="text-lg lg:text-lg xl:text-2xl desktop:text-[22px] uppercase font-bold text-gray-800">
                {service.title}
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-6 min-h-20 max-h-24">
              {service.tags.map((tag, i) => (
                <div
                  className="flex items-center justify-center bg-none rounded-3xl py-1 px-3 text-xs text-primary border-primary border-[1px] hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer max-h-8 text-center overflow-hidden whitespace-nowrap"
                  key={i}
                  onClick={() => openModal(service, tag.name)}
                >
                  {tag.name}
                </div>
              ))}
            </div>
            <div className="flex-1 relative overflow-hidden py-5">
              <div className="absolute top-0 left-0 w-full">
                <div className="flex gap-3 animate-slide-logos-horizontal">
                  {Array(20)
                    .fill(service.logos)
                    .flat()
                    .map((logo, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 p-2 rounded-lg w-max h-max shadow-sm bg-gray-50"
                      >
                        <Image
                          width={26}
                          height={26}
                          className="h-6 w-6 object-contain"
                          src={logo}
                          alt="logo"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Button Section */}
            <div className="text-center">
              <div className="relative group">
                <Button
                  variant="custom"
                  onClick={() => handleClick(service)}
                  className="bg-primary mt-4 rounded-[90px] w-[140px] h-[48px] text-sm text-secondary border-primary hover:bg-transparent hover:text-primary border-2 transition-all duration-300 ease-in-out relative z-10 group-hover:pr-6"
                >
                  See Details
                  <ArrowRight
                    className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform rotate-[-45deg] group-hover:translate-x-[3px] transition-all duration-300 ease-in-out w-4 h-4"
                    color="#fe5901"
                  />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <TagDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedTag.name}
        description={selectedTag.description}
        logo={selectedTag.logo}
      />
    </div>
  );
};

export default OurServices;
