"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../common/button/button";
import Recaptcha from "../common/recaptcha/recaptcha";
import { AWARD_CIRCLES, SERVICE_OPTIONS, STATS_DATA } from "./data";
import { z } from "zod";

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(30, "First name must be less than 30 characters"),
  lastName: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .max(30, "Last name must be less than 30 characters"),
  phone: z.string().regex(/^\d*$/, "Phone must contain only numbers"),
  email: z.string().email("Please enter a valid email address"),
  techStack: z.string(),
  message: z.string().min(1, "Message is required"),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
  newsletter: z.boolean(),
  service: z.string(),
});

type FormData = z.infer<typeof formSchema>;

interface GetInTouchFormProps {
  /** `dark` renders the glass card used on the gradient bands. */
  tone?: "light" | "dark";
}

const GetInTouchForm: React.FC<GetInTouchFormProps> = ({ tone = "light" }) => {
  const dark = tone === "dark";
  const field = dark
    ? "bg-[rgba(255,255,255,0.08)] text-white placeholder:text-white/40"
    : "bg-secondary";
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    techStack: "",
    message: "",
    agreeToTerms: false,
    newsletter: false,
    service: "Staff Augmentation",
  });

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    if (errors.captcha) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.captcha;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      setErrors((prev) => ({
        ...prev,
        captcha: "Please complete the reCAPTCHA verification",
      }));
      return;
    }

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        formattedErrors[error.path[0].toString()] = error.message;
      });
      setErrors(formattedErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrors({ form: "Failed to submit the form. Please try again." });
      }
    } catch {
      setErrors({ form: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative mx-auto w-full overflow-hidden">
      <div
        className={`max-w-5xl mx-auto z-10 relative overflow-hidden ${
          dark
            ? "rounded-3xl border border-white/15 bg-[rgba(255,255,255,0.06)] backdrop-blur-xl"
            : "bg-gray-50 rounded-lg border border-orange-100 shadow-md"
        }`}
      >
        {!dark && (
          <div className="absolute -inset-10 z-[-100] animate-spin-border py-8 bg-gradient-to-r from-transparent via-primary to-transparent ease-in-out blur-[5px]"></div>
        )}

        <div
          className={`flex flex-col lg:flex-row m-[2px] ${dark ? "" : "bg-gray-50"}`}
        >
          {/* Left side (stats) */}
          <div
            className={`p-4 sm:p-6 lg:w-1/3 ${
              dark
                ? "bg-[rgba(255,255,255,0.04)] lg:border-r lg:border-white/10"
                : "bg-secondary"
            }`}
          >
            <h3 className="font-medium text-xl sm:text-2xl mb-4">
              Company&apos;s <span className="text-primary">stats</span>
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              {STATS_DATA.map((stat) => (
                <div key={stat.id} className="flex flex-col items-start">
                  <div className="sm:py-3 inline-block rounded-md mb-2">
                    <Image
                      src={stat.icon}
                      alt="Security icon"
                      width={50}
                      height={50}
                      className={`text-primary w-[50px] md:w-[60px] ${dark ? "invert" : ""}`}
                    />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold">
                    {stat.value}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 sm:pt-6 mb-4">
              <h3 className="text-primary font-medium text-center mb-4">
                AWARDS
              </h3>
              <div className="flex justify-center space-x-3 sm:space-x-4 mt-10">
                {AWARD_CIRCLES.map((circle) => (
                  <div
                    key={circle.id}
                    className={`w-16 h-16 flex justify-center items-center overflow-hidden sm:w-20 sm:h-20 rounded-full ${dark ? "bg-[rgba(255,255,255,0.1)]" : "bg-gray-300"}`}
                  >
                    <Image
                      src={circle.img}
                      alt={circle.alt}
                      width={80}
                      height={80}
                      className="text-primary w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side (form or success message) */}
          <div className="p-4 sm:p-6 lg:w-2/3">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-6 text-center max-w-md">
                  <svg
                    className="w-16 h-16 text-green-500 mx-auto mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                  <p className="mb-4">
                    Your submission has been received. We will get back to you
                    shortly.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-xl sm:text-2xl font-medium mb-2 sm:mb-4">
                  Let&apos;s <span className="text-primary">Build</span> up your
                  Brand, <span className="text-primary">together</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                  Partnering with Algotix AI gives you a choice of ways to work
                  together.
                </p>

                <div className="flex flex-wrap mb-4 sm:mb-6 gap-4 sm:gap-6">
                  {SERVICE_OPTIONS.map((option) => (
                    <label key={option.id} className="flex items-center">
                      <input
                        type="radio"
                        name="service"
                        id={option.id}
                        className="mr-2 accent-primary"
                        defaultChecked={option.defaultChecked}
                        onChange={handleRadioChange}
                        value={option.value}
                      />
                      <span className="text-sm sm:text-base">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`p-2 sm:p-3 ${field} rounded-md focus:outline-none focus:ring-1 focus:ring-primary w-full ${errors.firstName ? "border border-red-500" : ""}`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        value={formData.lastName}
                        name="lastName"
                        placeholder="Last name"
                        className={`p-2 sm:p-3 ${field} rounded-md focus:outline-none focus:ring-1 focus:ring-primary w-full ${errors.lastName ? "border border-red-500" : ""}`}
                        onChange={handleInputChange}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        className={`p-2 sm:p-3 ${field} rounded-md focus:outline-none focus:ring-1 focus:ring-primary w-full ${errors.phone ? "border border-red-500" : ""}`}
                        onChange={handleInputChange}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleInputChange}
                        className={`p-2 sm:p-3 ${field} rounded-md focus:outline-none focus:ring-1 focus:ring-primary w-full ${errors.email ? "border border-red-500" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <input
                      type="text"
                      name="techStack"
                      value={formData.techStack}
                      placeholder="Enter you preferred tech stack..."
                      className={`w-full p-2 sm:p-3 ${field} rounded-md focus:outline-none focus:ring-1 focus:ring-primary`}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write message here.."
                      rows={4}
                      className={`w-full p-2 sm:p-3 ${field} rounded-md focus:outline-none focus:ring-1 focus:ring-primary ${errors.message ? "border border-red-500" : ""}`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* CAPTCHA and checkboxes */}
                  <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center mb-4 gap-8">
                    <div className="flex flex-col items-start">
                      <Recaptcha
                        onChange={handleCaptchaChange}
                        theme={dark ? "dark" : "light"}
                      />
                      {errors.captcha && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.captcha}
                        </p>
                      )}
                      {errors.agreeToTerms && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.agreeToTerms}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className={`flex items-center text-sm`}>
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleCheckboxChange}
                          className={`mr-2 accent-primary outline-gray-200 ${errors.agreeToTerms ? "border-red-500" : ""}`}
                        />
                        I agree with T&Cs
                      </label>

                      <label className="flex items-center text-sm text-gray-600">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleCheckboxChange}
                          className="mr-2 accent-primary"
                        />
                        Get Newsletter
                      </label>
                    </div>
                  </div>

                  {errors.form && (
                    <p className="text-red-500 text-sm mb-4">{errors.form}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-36 py-2 sm:py-3 bg-primary text-white font-medium rounded-md hover:bg-orange-600 transition-colors disabled:bg-gray-400"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchForm;
