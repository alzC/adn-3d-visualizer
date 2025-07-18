"use client";
import React, { useState, useEffect, useMemo } from "react";

interface HelixPoint {
  id: number;
  leftX: number;
  rightX: number;
  y: number;
  rotation: number;
  color1: string;
  color2: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  delay: number;
}

export const DNAHelix2D: React.FC = () => {
  const [animationTime, setAnimationTime] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationTime((t) => t + 0.02);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // Génération des particules uniquement côté client
  useEffect(() => {
    const particleData: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      particleData.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? "#00E0FF" : "#00FFC3",
        delay: Math.random() * 10,
      });
    }
    setParticles(particleData);
  }, []);

  const helixPoints: HelixPoint[] = useMemo(() => {
    const points: HelixPoint[] = [];
    const centerX = 200; // centre du SVG (largeur 400)
    const helixHeight = 40 * 8; // 320
    const svgHeight = 800;
    const offsetY = (svgHeight - helixHeight) / 2; // 240

    for (let i = 0; i < 40; i++) {
      const angle = (i / 40) * Math.PI * 6;
      const height = i * 8 + offsetY; // <-- Ajoute l'offset ici
      const radius = 60;
      points.push({
        id: i,
        leftX: centerX + Math.cos(angle) * radius,
        rightX: centerX + Math.cos(angle + Math.PI) * radius,
        y: height,
        rotation: angle,
        color1: i % 3 === 0 ? "#00E0FF" : i % 3 === 1 ? "#00FFC3" : "#FF4D6D",
        color2: i % 3 === 0 ? "#FF4D6D" : i % 3 === 1 ? "#00E0FF" : "#00FFC3",
      });
    }
    return points;
  }, []);

  return (
    <div className="absolute right-0 top-0 w-2/3 h-full overflow-hidden">
      <div className="relative w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 800"
          className="absolute inset-0"
          style={{
            transform: `translateY(${Math.sin(animationTime) * 20}px)`,
            filter: "drop-shadow(0 0 10px rgba(0, 224, 255, 0.3))",
          }}
        >
          <defs>
            <linearGradient id="backboneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E0FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00FFC3" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF4D6D" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d={`M ${helixPoints.map((p) => `${p.leftX},${p.y}`).join(" L ")}`}
            fill="none"
            stroke="url(#backboneGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />
          <path
            d={`M ${helixPoints.map((p) => `${p.rightX},${p.y}`).join(" L ")}`}
            fill="none"
            stroke="url(#backboneGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />
          {helixPoints.map((point, index) => (
            <g key={point.id}>
              <line
                x1={point.leftX}
                y1={point.y}
                x2={point.rightX}
                y2={point.y}
                stroke="#00E0FF"
                strokeWidth="1"
                opacity={0.6 + Math.sin(animationTime * 2 + index * 0.5) * 0.3}
                filter="url(#glow)"
              />
              <circle
                cx={point.leftX}
                cy={point.y}
                r="4"
                fill={point.color1}
                opacity={0.8 + Math.sin(animationTime * 3 + index) * 0.2}
                filter="url(#glow)"
              />
              <circle
                cx={point.rightX}
                cy={point.y}
                r="4"
                fill={point.color2}
                opacity={0.8 + Math.sin(animationTime * 3 + index + Math.PI) * 0.2}
                filter="url(#glow)"
              />
            </g>
          ))}
        </svg>
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${(particle.y + animationTime * particle.speed * 10) % 100}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
                opacity: 0.4 + Math.sin(animationTime * 2 + particle.delay) * 0.3,
                animation: `float ${3 + particle.speed}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute rounded-full"
            style={{
              width: "200px",
              height: "200px",
              background: "radial-gradient(circle, rgba(0, 224, 255, 0.1) 0%, transparent 70%)",
              left: "60%",
              top: "30%",
              transform: `translate(-50%, -50%) scale(${1 + Math.sin(animationTime) * 0.2})`,
              filter: "blur(20px)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: "150px",
              height: "150px",
              background: "radial-gradient(circle, rgba(0, 255, 195, 0.1) 0%, transparent 70%)",
              left: "40%",
              top: "70%",
              transform: `translate(-50%, -50%) scale(${1 + Math.sin(animationTime + Math.PI) * 0.3})`,
              filter: "blur(15px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}; 