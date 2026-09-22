"use client";
import React, { useState } from "react";
import { z } from "zod";
import Button from "../common/button/button";
import Recaptcha from "../common/recaptcha/recaptcha";

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(30, "First name must be less than 30 characters"),
  lastName: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .max(30, "Last name must be less than 30 characters"),
  phone: z
    .string()
    .regex(/^\d*$/, "Phone must contain only numbers")
    .min(7, "Phone must be at least 7 digits")
    .max(15, "Phone must be less than 15 digits"),
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

interface DrawerFormProps {
  toggleDrawer?: () => void;
  serviceOptions: {
    id: string;
    value: string;
    label: string;
    defaultChecked?: boolean;
  }[];
  onSubmit: (formData: FormData) => Promise<void>;
  onClose: () => void;
  initialFormData?: Partial<FormData>;
}

const DrawerForm: React.FC<DrawerFormProps> = ({
  serviceOptions,
  onSubmit,
  onClose,
  initialFormData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    techStack: "",
    message: "",
    agreeToTerms: false,
    newsletter: false,
    service: "Staff Augmentation",
  },
}) => {
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    firstName: initialFormData.firstName ?? "",
    lastName: initialFormData.lastName ?? "",
    phone: initialFormData.phone ?? "",
    email: initialFormData.email ?? "",
    techStack: initialFormData.techStack ?? "",
    message: initialFormData.message ?? "",
    agreeToTerms: initialFormData.agreeToTerms ?? false,
    newsletter: initialFormData.newsletter ?? false,
    service: initialFormData.service ?? "Staff Augmentation",
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return;
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
      await onSubmit(formData);
      onClose();
      setFormData({
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
    } catch {
      setErrors({ form: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 mt-2 relative">
      <h2 className="text-xl sm:text-2xl font-medium mb-2 sm:mb-4 break-words max-w-[220px] xs:max-w-[240px] sm:max-w-full">
        Let&apos;s <span className="text-primary">Build</span> up your Brand,{" "}
        <span className="text-primary">together</span>
      </h2>

      <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
        Partnering with Algotix AI gives you a choice of ways to work together.
      </p>

      <div className="flex flex-wrap mb-4 sm:mb-6 gap-4 sm:gap-6">
        {serviceOptions.map((option) => (
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
            <span className="text-sm sm:text-base">{option.label}</span>
          </label>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`p-2 sm:p-3 bg-secondary rounded-md focus:outline-none focus:ring-1 focus:ring-primary w-full ${errors.firstName ? "border border-red-500" : ""}`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              value={formData.lastName}
              name="lastName"
              placeholder="Last name"
              className={`p-2 sm:p-3 bg-secondary rounded-md focus:outline-none focus:ring-1 focus:ring-primary w-full ${errors.lastName ? "border border-red-500" : ""}`}
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              className={`p-2 sm:p-3 bg-secondary rounded-md focus:outline-none focus:ring-1 focus:ring-primary w-full ${errors.phone ? "border border-red-500" : ""}`}
              onChange={handleInputChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleInputChange}
              className={`p-2 sm:p-3 bg-secondary rounded-md focus:outline-none focus:ring-1 focus:ring-primary w-full ${errors.email ? "border border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="mb-3 sm:mb-4">
          <input
            type="text"
            name="techStack"
            value={formData.techStack}
            placeholder="Enter your preferred tech stack..."
            className="w-full p-2 sm:p-3 bg-secondary rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
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
            className={`w-full p-2 sm:p-3 bg-secondary rounded-md focus:outline-none focus:ring-1 focus:ring-primary ${errors.message ? "border border-red-500" : ""}`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <div className="flex flex-col justify-start items-start sm:items-center mb-4 gap-8">
          <div className="flex flex-col items-start w-full">
            <Recaptcha onChange={handleCaptchaChange} />
            {errors.captcha && (
              <p className="text-red-500 text-sm mt-2">{errors.captcha}</p>
            )}
            {errors.agreeToTerms && (
              <p className="text-red-500 text-sm mt-2">{errors.agreeToTerms}</p>
            )}
          </div>

          <div className="space-y-2 w-full">
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
          className="w-full py-2 sm:py-3 bg-primary text-white font-medium rounded-md hover:bg-orange-600 transition-colors disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default DrawerForm;
