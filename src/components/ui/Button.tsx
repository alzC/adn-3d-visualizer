"use client";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "gradient" | "outline";
};

export const Button: React.FC<ButtonProps> = ({ children, variant = "gradient", ...props }) => (
  <button
    className={
      variant === "gradient"
        ? "w-full gradient-btn text-white py-2 px-4 rounded-md inter text-sm font-medium"
        : "w-full border border-gray-600 text-gray-300 py-2 px-4 rounded-md inter text-sm font-medium hover:bg-gray-700 transition-colors"
    }
    {...props}
  >
    {children}
  </button>
); 