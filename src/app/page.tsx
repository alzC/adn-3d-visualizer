"use client";
import { useAnimatedGradient } from "@/hooks/useAnimatedGradient";
import { DNAHelix2D } from "@/components/DNAHelix2D";
import { LeftPanel } from "@/components/LeftPanel";

export default function Home() {
  const gradient = useAnimatedGradient();
  return (
    <div className="w-full h-screen overflow-hidden relative" style={gradient}>
      <DNAHelix2D />
      <LeftPanel />
    </div>
  );
}
