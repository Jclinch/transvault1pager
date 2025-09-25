//components\ui\wavy-background.tsx
"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { createNoise2D } from "simplex-noise";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
}

export default function WavyBackground({
  children,
  className,
  colors = ["#7a2db3", "#5b1f86", "#00b3a6"], // your theme colors
  waveWidth = 50,
  backgroundFill = "#ffffff",
}: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    const noise2D = createNoise2D();
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      if (!ctx) return;
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, width, height);

      const numWaves = colors.length;

      for (let j = 0; j < numWaves; j++) {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let i = 0; i <= width; i++) {
          const x = i;
          const y =
            height / 2 +
            j * 40 +
            noise2D(i / 300, frame / 200) * waveWidth;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = colors[j] + "55"; // semi-transparent layer
        ctx.fill();
      }

      frame++;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [colors, waveWidth, backgroundFill]);

  return (
    <div className={`relative w-full h-full ${className || ""}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
