// components/HeroCarousel.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Button } from "@/components/ui/button"; // ✅ shadcn/ui button

type Slide = {
  id: string;
  titleTop: string;
  titleBottom: string;
  subtitle: string;
  image?: string;
  ctas: { label: string; href: string; variant?: "primary" | "secondary" }[];
};

const SLIDES: Slide[] = [
  {
    id: "slide-1",
    titleTop: "Regulatory-first wallet",
    titleBottom: "for remittance & assets",
    subtitle: "Secure settlement, reconciliation, and bank-grade compliance.",
    ctas: [
      { label: "Learn how we comply", href: "/#compliance", variant: "primary" },
      { label: "Talk to Sales", href: "/#contact", variant: "secondary" },
    ],
  },
  {
    id: "slide-2",
    titleTop: "Bank-grade settlement",
    titleBottom: "reconciled daily",
    subtitle: "Designated accounts, audit trails, and regulated bank payouts.",
    ctas: [
      { label: "Read services", href: "/#services", variant: "primary" },
      { label: "Request demo", href: "/#contact", variant: "secondary" },
    ],
  },
  {
    id: "slide-3",
    titleTop: "Integrate with SEC exchanges",
    titleBottom: "and licensed IMTOs",
    subtitle: "Wallet APIs, KYC attach, transaction webhooks, and exports.",
    ctas: [
      { label: "Integration docs", href: "/#resources", variant: "primary" },
      { label: "Talk to Sales", href: "/#contact", variant: "secondary" },
    ],
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const timeoutRef = useRef<number | null>(null);
  const autoplayMs = 6000;

  const next = () => {
    setDirection("right");
    setIndex((i) => (i + 1) % SLIDES.length);
  };

  const prev = () => {
    setDirection("left");
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(next, autoplayMs);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [index]);

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 1000 : -1000,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -1000 : 1000,
      opacity: 0,
      transition: { duration: 0.6 },
    }),
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    trackMouse: true,
  });

  return (
    <section
      id="hero"
      aria-label="hero"
      className="relative overflow-hidden bg-cover bg-center bg-[url('/hero/hero3.jpg')] dark:bg-[url('/hero/hero2.jpg')]"
      {...swipeHandlers}
    >
  {/* Dark-mode faint overlay to improve contrast on the dark background image */}
  <div className="absolute inset-0 bg-transparent dark:bg-black/40 z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[600px] lg:min-h-[700px] flex items-center relative">
        {/* Left column */}
        <div className="w-full lg:w-1/2 relative z-10 mt-[-120px]">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={SLIDES[index].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-6"
            >
              {/* ✅ Animated badge */}
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-[#EFBF04]/20 text-accent"
              >
                Regulated payouts
              </motion.p>

              {/* ✅ Animated headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl lg:text-4xl font-semibold leading-tight text-white"
              >
                <span className="block text-primary">
                  {SLIDES[index].titleTop}
                </span>
                <span className="block text-secondary">
                  {SLIDES[index].titleBottom}
                </span>
              </motion.h1>

              {/* ✅ Animated subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-2 text-base text-neutral max-w-xl"
              >
                {SLIDES[index].subtitle}
              </motion.p>

              {/* ✅ shadcn/ui Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 flex gap-3"
              >
                {SLIDES[index].ctas.map((cta) => (
                  <Button
                    key={cta.label}
                    asChild
                    variant={cta.variant === "primary" ? "default" : "outline"}
                    className={
                      cta.variant === "primary"
                        ? "bg-primary hover:bg-accent text-white shadow-lg"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white transition"
                    }
                  >
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel controls */}
          <div className="mt-6 flex items-center gap-3">
            <button
              aria-label="Previous slide"
              onClick={prev}
              className="p-2 rounded-full bg-white/80 border border-neutral text-primary hover:bg-accent hover:text-white"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? "right" : "left");
                    setIndex(i);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    i === index ? "bg-primary" : "bg-neutral"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next slide"
              onClick={next}
              className="p-2 rounded-full bg-white/80 border border-neutral text-primary hover:bg-accent hover:text-white"
            >
              ›
            </button>
          </div>
        </div>

        {/* Right column (image & mini cart) kept unchanged ✅ */}
        <div className="hidden lg:flex lg:w-1/2 relative justify-center items-center ml-[-60px] mt-[-30px]">
          {/* ❌ Removed polygon background */}
          <Image
            src="/hero/lady2.png"
            alt="Hero Person"
            width={500}
            height={600}
            className="object-cover z-20 ml-[-40px]"
          />

          {/* Mini Cart
          <div className="absolute right-8  w-64 bg-white shadow-lg border overflow-hidden top-12 z-10">
            <div className="bg-lime-200 px-4 py-2 text-sm font-bold text-slate-800">
              Payments <span className="font-normal text-xs">powered by</span>{" "}
              <span className="text-primary font-semibold">Transvault</span>
            </div>
            <div className="p-4">
              <div className="mb-3 ">
                <Image
                  src="/hero/lotion.webp"
                  alt="Product"
                  width={80}
                  height={100}
                  className="rounded-md mx-auto"
                />
                <p className="mt-2 text-sm text-secondary text-center">
                  Body Lotion
                </p>
                <p className="text-base font-bold text-primary text-center">
                  ₦ 455
                </p>
              </div>
              <p className="text-xs text-slate-500 mb-2">
                Select Payment Method
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button className="text-neutral px-3 py-2 border rounded-md text-sm text-left hover:bg-accent/10">
                  Card
                </button>
                <button className="text-neutral px-3 py-2 border rounded-md text-sm text-left hover:bg-accent/10">
                  UPI ID
                </button>
                <button className="text-neutral px-3 py-2 border rounded-md text-sm text-left hover:bg-accent/10">
                  Netbanking
                </button>
                <button className="text-neutral px-3 py-2 border rounded-md text-sm text-left hover:bg-accent/10">
                  EMI
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
