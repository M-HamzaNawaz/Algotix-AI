"use client";
import React, { useState } from "react";
import { SERVICE_OPTIONS } from "./data";
import DrawerForm from "../drawerForm";

const GlobalDrawer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleFormSubmit = async (formData: Record<string, unknown>) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }
    } catch {
      throw new Error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      {/* Fixed Button */}
      {!isDrawerOpen && (
        <button
          onClick={toggleDrawer}
          className="fixed right-0 top-1/3 -translate-y-1/2 bg-primary text-white px-1 py-4 rounded-l-md shadow-lg hover:bg-orange-600 hover:px-4 transform transition-all ease-linear duration-300 z-[100]"
          style={{
            writingMode: "vertical-rl",
          }}
        >
          Get in Touch
        </button>
      )}

      {/* Right Drawer Form. It sits above the fixed navbar (z-100) so the bar
          never covers the drawer's own header and close button. */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:max-w-md bg-gray-50 shadow-xl transform transition-transform duration-300 ease-in-out z-[120] ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-heading">Contact Us</h2>
          <button
            onClick={toggleDrawer}
            aria-label="Close contact form"
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto p-5 sm:p-6">
          <DrawerForm
            toggleDrawer={toggleDrawer}
            serviceOptions={SERVICE_OPTIONS}
            onSubmit={handleFormSubmit}
            onClose={toggleDrawer}
          />
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black bg-opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}
    </>
  );
};

export default GlobalDrawer;
