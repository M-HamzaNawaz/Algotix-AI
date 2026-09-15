"use client";
import React, { useRef, useState } from "react";
import emailSuscriber from "@/public/emailSuscriber.svg";
import { z } from "zod";
import fluid from "@/public/fluid_dotted_background.svg";
import fluidInverted from "@/public/fluid_dotted_background_90deg.svg";
import fluidPart from "@/public/fluid_part_2.svg";
import Image from "next/image";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const Subscribemail = () => {
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
      setEmailError("");
      // TODO: Send email to server using emailInput.current.value;
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
      <div className="bg-primary px-8 tablet:px-20 py-10 pt-0 rounded-xl max-w-[1000px] mx-auto relative overflow-hidden min-h-[250px] tablet:min-h-[312px] flex flex-col items-center justify-center mt-16 mb-10">
        <div className="absolute top-0 left-0 bg-cover bg-center bg-no-repeat z-0 flex">
          <Image src={fluid} alt="fluid" />
        </div>
        <div className="absolute bottom-0 left-0 bg-cover bg-center bg-no-repeat z-0 flex">
          <Image src={fluidPart} alt="Fluid" />
        </div>
        <div className="absolute top-0 right-0 bg-cover bg-center bg-no-repeat z-0">
          <Image src={fluidInverted} alt="fluid inverted" />
        </div>
        <div className="absolute top-0 right-0 bg-cover bg-center bg-no-repeat z-0 flex rotate-180">
          <Image src={fluidPart} alt="Fluid" />
        </div>
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
                  ? "border-primary placeholder:text-primary placeholder:text-xs placeholder:leading-tight sm:placeholder:text-sm"
                  : "border-slate-200 placeholder:text-slate-400"
              } rounded-xl transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
              placeholder="Your Email"
              onChange={handleInputChange}
            />
            <Image
              src={emailSuscriber}
              alt="Email Icon"
              className="absolute w-6 h-6 tablet:w-8 tablet:h-8 top-3 right-5 cursor-pointer"
              onClick={handleSubscribe}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribemail;
