"use client";

import { useEffect } from "react";

const SelectionStyle = () => {
  useEffect(() => {
    // Create style element
    const style = document.createElement("style");
    style.textContent = `
      ::selection {
        background-color: #FF5A01;
        color: #ffffff;
      }
      ::-moz-selection {
        background-color: #FF5A01;
        color: #ffffff;
      }
    `;

    // Append to head
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default SelectionStyle;
