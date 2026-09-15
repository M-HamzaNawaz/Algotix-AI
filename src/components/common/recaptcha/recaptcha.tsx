"use client";
import React from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "SITE_KEY";

interface TurnstileCaptchaProps {
  onChange: (value: string | null) => void;
}

const TurnstileCaptcha: React.FC<TurnstileCaptchaProps> = ({ onChange }) => {
  if (!SITE_KEY) {
    console.warn(
      "NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set. Turnstile will not function.",
    );
    return null;
  }

  const handleOnChange = (token: string | null) => {
    if (token) {
      onChange(token);
    } else {
      console.warn("Captcha failed, no token received.");
    }
  };

  return <Turnstile siteKey={SITE_KEY} onSuccess={handleOnChange} />;
};

export default TurnstileCaptcha;
