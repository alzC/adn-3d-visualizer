"use client";
import { useState, useEffect } from "react";

export const useAnimatedGradient = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((t) => t + 0.01), 16);
    return () => clearInterval(interval);
  }, []);

  return {
    background: `linear-gradient(${45 + Math.sin(time) * 10}deg, \
      #0F1021 0%, \
      #1a1a2e ${30 + Math.sin(time * 0.7) * 5}%, \
      #16213e ${60 + Math.cos(time * 0.5) * 10}%, \
      #0F1021 100%)`,
  };
}; 