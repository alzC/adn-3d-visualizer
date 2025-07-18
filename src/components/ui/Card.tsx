import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`glassmorphism rounded-xl p-4 ${className}`}>{children}</div>
); 