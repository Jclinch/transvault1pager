//----------------------------------
//components/ScrollSwapTabs.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion"; // ✅ added Variants
import Image from "next/image";

type TabData = {
  id: string;
  title: string;
  cards: { title: string; desc: string; img: string }[];
};

const tabs: TabData[] = [
  {
    id: "tab-1",
    title: "Wallet Infrastructure for Licensed Entities",
    cards: [
      {
        title: "Payroll Core",
        desc: "Issue & manage business wallets for licensed IMTOs and SEC-regulated exchanges.",
        img: "/card/payroll1.png",
      },
      {
        title: "Compliance",
        desc: "Wallets are backed by pooled settlement accounts; daily reconciliation; transaction traceability; KYC & limits per CBN/SEC guidance",
        img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800",
      },

      {
        title: "Payslip APIs",
        desc: "Technical APIs (create wallet, KYC attach, transaction webhooks)",
        img: "/card/payslip.jpg",
      },
    ],
  },
  {
    id: "tab-2",
    title: "Payout Agent Services (Naira payouts)",
    cards: [
      {
        title: "Payout Agent",
        desc: "Convert inbound foreign remittance to naira and execute payments to beneficiaries via bank transfer or cash-pay agent networks (when permitted).",
        img: "/card/payoutagent.jpg",
      },
      {
        title: "Instant Transfer",
        desc: "Flow: funds received by IMTO partner → designated settlement account → Transvault instructs bank for payout → webhook notification to partner",
        img: "/card/instanttransfer.jpg",
      },
      {
        title: "Compliance",
        desc: "Compliance bullets: payouts to beneficiaries executed through designated accounts with Nigerian banks; remittances paid in naira per CBN IMTO rules",
        img: "/card/settlement.jpg",
      },
    ],
  },
  {
    id: "tab-3",
    title: "Accounts & Reconciliation",
    cards: [
      {
        title: "Daily Reconciliation",
        desc: "Automated daily reconciliation, audit logs, weekly/monthly regulator reports, GSI support",
        img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=800",
      },
      {
        title: "Records Reports",
        desc: "Retention of transaction records for regulator requests",
        img: "/card/taxreport.jpg",
      },
      {
        title: "Export",
        desc: "CSV, JSON exports for regulator",
        img: "/card/export.jpg",
      },
    ],
  },
  {
    id: "tab-4",
    title: "Crypto Exchange Integration (for SEC-regulated entities)",
    cards: [
      {
        title: "Wallet Connectors",
        desc: "Wallet custody connectors and on-boarding workflows for SEC-registered exchanges; AML/KYC screening; segregation of client assets per SEC digital asset rules",
        img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=800",
      },
      {
        title: "FX & Treasury Services (optional / partners)",
        desc: "FX execution for partners via regulated treasury partners; pre-funding, hedging and netting services (note: provided through regulated partners; Transvault acts as technology & execution coordinator)",
        img: "/card/taxreport.jpg",
      },
      // {
      //   title: "Export",
      //   desc: "CSV, JSON exports for regulator",
      //   img: "/card/export.jpg",
      // },
    ],
  },
];

export default function TabScroller() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);
  const isClickingRef = useRef(false);

  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const prevScrollY = { current: window.scrollY };

    const onScroll = () => {
      if (isScrollingRef.current || isClickingRef.current) return;

      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;

      if (rect.top < winH * 0.4 && rect.bottom > winH * 0.4) {
        const goingDown = window.scrollY > prevScrollY.current;
        prevScrollY.current = window.scrollY;

        if (goingDown && active < tabs.length - 1) {
          setDirection("down");
          setActive((a) => a + 1);
        } else if (!goingDown && active > 0) {
          setDirection("up");
          setActive((a) => a - 1);
        }

        isScrollingRef.current = true;
        section.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => (isScrollingRef.current = false), 800);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  // ✅ FIXED: Explicitly typed Variants and corrected transition easing type
  const variants: Variants = {
    enter: (dir: "up" | "down") => ({
      opacity: 0,
      scale: 0.9,
      y: dir === "down" ? 100 : -100,
    }),
    center: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" as const }, // ✅ cast easing string
    },
    exit: (dir: "up" | "down") => ({
      opacity: 0,
      scale: 0.9,
      y: dir === "down" ? -100 : 100,
      transition: { duration: 0.6, ease: "easeInOut" as const }, // ✅ fixed type
    }),
  };

  return (
    <section id="services" className="relative bg-bg">
      <div className="h-[350vh] relative">
        <div
          ref={containerRef}
          className="sticky top-20 max-w-7xl mx-auto px-6"
        >
          <p className="text-sm font-semibold text-accent mb-4 mr-[50px]">
            &nbsp;Service
          </p>
          <h2 className="text-3xl font-bold text-primary mb-6"></h2>

          {/* Tabs */}
          <div className="relative flex gap-8 border-b border-neutral mb-8 mt-[-20px]">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => {
                  isClickingRef.current = true;
                  setDirection(i > active ? "down" : "up");
                  setActive(i);
                  containerRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  setTimeout(() => (isClickingRef.current = false), 800);
                }}
                className={`relative pb-2 text-[8px] md:text-sm font-semibold transition ${
                  i === active
                    ? "text-primary"
                    : "text-neutral hover:text-secondary"
                }`}
              >
                {t.title}
                {i === active && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-accent"
                  />
                )}
              </button>
            ))}
          </div>

         {/* ✅ Responsive Cards */}
<div className="relative w-full min-h-[400px] sm:min-h-[480px] overflow-hidden bg-bright/10 rounded-sm mt-[-20px]">
  <AnimatePresence custom={direction} mode="popLayout">
    <motion.div
      key={tabs[active].id}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6"
    >
      {tabs[active].cards.map((c) => (
        <div
          key={c.title}
          className="relative bg-white border border-primary/20 rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition"
        >
          <Image
            src={c.img}
            alt={c.title}
            width={400}
            height={440}
            className="h-[220px] sm:h-[300px] md:h-[450px] w-full object-cover rounded-lg"
          />
          {/* ✅ Glassmorphism Overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 
                       bg-white/40 dark:bg-black/30 
                       backdrop-blur-md 
                       border-t border-white/30 dark:border-neutral/50
                       p-2 sm:p-3 md:p-4"
          >
            <h4 className="text-xs sm:text-sm md:text-lg font-semibold text-primary">
              {c.title}
            </h4>
            <p className="text-[10px] sm:text-xs md:text-sm text-foreground">
              {c.desc}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  </AnimatePresence>
</div>

        </div>
      </div>
    </section>
  );
}
