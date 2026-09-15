"use client";
import React, { useRef, useState } from "react";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const EmailSubscribe = () => {
  const emailInput = useRef<HTMLInputElement | null>(null);
  const [emailError, setEmailError] = useState<string>("");

  const handleError = (error: string) => {
    if (emailInput.current) {
      emailInput.current.value = "";
      emailInput.current.placeholder = error;
      setEmailError(error);
    }
  };
  const handleSubscribe = () => {
    if (!emailInput.current) {
      return;
    }

    const email = emailInput.current.value;

    if (!email.trim()) {
      handleError("Email is required");

      return;
    }

    try {
      emailSchema.parse({ email });
      setEmailError(""); // TODO: Send email to server using emailInput.current.value;
    } catch (error) {
      if (error instanceof z.ZodError) {
        handleError(error.errors[0]?.message || "Invalid email format");
      } else {
        handleError("An error occurred during validation");
      }
    }
  };

  const handleInputChange = () => {
    if (emailError) {
      setEmailError("");
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-primary via-orange-500 to-primary px-8 tablet:px-20 py-12 pt-0 rounded-xl max-w-[1000px] 4k:max-w-7xl mx-auto relative overflow-hidden min-h-[250px] tablet:min-h-[312px] flex flex-col items-center justify-center mt-16 mb-10">
        <div className="absolute right-2 top-2 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-grid-right z-0"></div>
        <div className="absolute left-2 bottom-2 w-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 h-0 bg-grid-left z-0"></div>
        <h1 className="font-semibold text-[21px] tablet:text-3xl leading-[40px] tablet:leading-[45px] text-white text-center mt-6 tablet:mt-0">
          Subscribe to get the latest
          <br />
          news about us.
        </h1>
        <div className="w-full max-w-md tablet:max-w-lg mx-auto mt-8">
          <div className="relative">
            <input
              ref={emailInput}
              type="text"
              className={`w-full pl-3 pr-10 py-4 tablet:py-5 bg-white text-slate-600 text-sm border ${
                emailError
                  ? "border-primary placeholder:text-primary"
                  : "border-slate-200 placeholder:text-slate-400"
              } rounded-xl transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
              placeholder="Your Email"
              onChange={handleInputChange}
            />
            <button
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary text-white rounded-xl px-2 py-2 tablet:px-6 tablet:py-4 hover:bg-orange-500 transition duration-300 ease-in-out"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default EmailSubscribe;
