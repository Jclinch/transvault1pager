// components/HeroCarousel.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Slide = {
  id: string;
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  subtitle: string;
  proof: string;
  ctas: { label: string; href: string; variant?: "primary" | "secondary" }[];
};

const SLIDES: Slide[] = [
  {
    id: "slide-1",
    eyebrow: "Regulated payouts",
    titleTop: "Integrate with SEC exchanges",
    titleBottom: "and licensed IMTOs",
    subtitle:
      "Wallet APIs, KYC attach, transaction webhooks, and exports for compliant cross-border finance operations.",
    proof: "Built for CBN, SEC, MSB, and regulated banking partner workflows.",
    ctas: [
      { label: "Integration docs", href: "/#features", variant: "primary" },
      { label: "Talk to Sales", href: "/#contact", variant: "secondary" },
    ],
  },
  {
    id: "slide-2",
    eyebrow: "Settlement control",
    titleTop: "Bank-grade settlement",
    titleBottom: "reconciled every day",
    subtitle:
      "Designated settlement accounts, transaction traceability, and regulator-ready export trails for every payout flow.",
    proof: "Daily reconciliation across partner banks, IMTOs, and exchanges.",
    ctas: [
      { label: "Explore services", href: "/#services", variant: "primary" },
      { label: "Request demo", href: "/#contact", variant: "secondary" },
    ],
  },
  {
    id: "slide-3",
    eyebrow: "Compliance-first wallets",
    titleTop: "Regulatory-first wallet",
    titleBottom: "for remittance and assets",
    subtitle:
      "Launch controlled wallets and payout rails while keeping KYC, AML, custody, and reporting requirements close to the transaction.",
    proof: "Designed for licensed entities, not informal payment operations.",
    ctas: [
      { label: "View controls", href: "/#compliance", variant: "primary" },
      { label: "Talk to Sales", href: "/#contact", variant: "secondary" },
    ],
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const timeoutRef = useRef<number | null>(null);
  const autoplayMs = 6500;

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
      x: dir === "right" ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: "easeOut" as const },
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.35, ease: "easeIn" as const },
    }),
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  return (
    <section
      id="hero"
      aria-label="Transvault hero"
      className="relative isolate overflow-hidden bg-[#050914] text-white"
      {...swipeHandlers}
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -90 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-y-0 -left-[18vw] -right-6"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.32) 12%, rgba(0,0,0,.9) 28%, #000 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.32) 12%, rgba(0,0,0,.9) 28%, #000 100%)",
        }}
      >
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,9,20,.9)_0%,rgba(5,9,20,.72)_34%,rgba(5,9,20,.28)_68%,rgba(5,9,20,.58)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(127,46,125,.36),transparent_36%),radial-gradient(circle_at_70%_74%,rgba(0,230,184,.18),transparent_32%)]" />

      <div className="relative flex min-h-[calc(100vh-3.75rem)] w-full items-center px-5 py-[clamp(3rem,8vw,5rem)] sm:px-6 lg:px-10 xl:px-12">
        <div className="max-w-2xl">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={SLIDES[index].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-6"
            >
              <p className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {SLIDES[index].eyebrow}
              </p>

              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                <span className="block">{SLIDES[index].titleTop}</span>
                <span className="block text-[#D9C7FF]">
                  {SLIDES[index].titleBottom}
                </span>
              </h1>

              <p className="max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                {SLIDES[index].subtitle}
              </p>

              <p className="max-w-lg border-l-2 border-accent/70 pl-4 text-sm leading-6 text-slate-300">
                {SLIDES[index].proof}
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                {SLIDES[index].ctas.map((cta) => (
                  <Button
                    key={cta.label}
                    asChild
                    variant={cta.variant === "primary" ? "default" : "outline"}
                    className={
                      cta.variant === "primary"
                        ? "h-11 rounded-md bg-primary px-5 text-white shadow-[0_18px_40px_rgba(127,46,125,.35)] hover:bg-accent"
                        : "h-11 rounded-md border-white/30 bg-white/[0.08] px-5 text-white backdrop-blur hover:bg-white/[0.16]"
                    }
                  >
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? "right" : "left");
                    setIndex(i);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-accent" : "w-2.5 bg-white/[0.35]"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
