// components/ScrollSwapTabs.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowRightLeft, BadgeCheck, Files, WalletCards } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCard = {
  title: string;
  desc: string;
  img: string;
  reverse?: boolean;
};

type TabData = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  summary: string;
  cards: ServiceCard[];
};

const tabs: TabData[] = [
  {
    id: "payouts",
    label: "Payout Agent",
    eyebrow: "Services",
    title: "Payout Agent Services",
    summary:
      "Convert inbound foreign remittance instructions into compliant naira payouts through designated accounts and regulated bank rails.",
    cards: [
      {
        title: "Payout Agent",
        desc: "Convert inbound foreign remittance to naira and execute payments to beneficiaries through approved bank transfer or cash-pay agent networks.",
        img: "/card/payoutagent.jpg",
      },
      {
        title: "Instant Transfer",
        desc: "Funds received by an IMTO partner move through a designated settlement account before Transvault instructs payout and confirms by webhook.",
        img: "/hero.jpg",
        reverse: true,
      },
      {
        title: "Compliance",
        desc: "Payouts are supported by designated Nigerian bank accounts, retained evidence, and remittance handling aligned with CBN IMTO rules.",
        img: "/card/settlement.jpg",
      },
    ],
  },
  {
    id: "instant",
    label: "Instant Transfer",
    eyebrow: "Infrastructure",
    title: "Wallet Infrastructure and Transfer Rails",
    summary:
      "Create KYC-linked wallets, move funds through controlled ledger events, and expose transfer status to licensed partners in real time.",
    cards: [
      {
        title: "Wallet Core",
        desc: "Issue regulated partner wallets with ownership records, configurable limits, and traceable balance movement.",
        img: "/card/payroll1.png",
      },
      {
        title: "Transfer Events",
        desc: "Capture instructions, holds, releases, reversals, and confirmations in a ledger designed for daily reconciliation.",
        img: "/card/instanttransfer.jpg",
        reverse: true,
      },
      {
        title: "Partner APIs",
        desc: "Create wallets, attach KYC, submit transfer instructions, and receive webhook updates from a single integration layer.",
        img: "/card/payslip.jpg",
      },
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    eyebrow: "Controls",
    title: "Compliance Infrastructure",
    summary:
      "Keep KYC, AML, settlement, and reporting evidence close to each payout, wallet, and partner transaction.",
    cards: [
      {
        title: "KYC and AML",
        desc: "Attach onboarding evidence, BVN where applicable, screening outcomes, and transaction risk status before release.",
        img: "/compliance/kyc.jpg",
      },
      {
        title: "Audit Trails",
        desc: "Preserve records for regulator requests, partner reviews, and internal exception handling.",
        img: "/card/taxreport.jpg",
        reverse: true,
      },
      {
        title: "Reporting Exports",
        desc: "Generate CBN, SEC, and internal reporting exports with transaction evidence and settlement context.",
        img: "/card/export.jpg",
      },
    ],
  },
];

const tabIcons = [ArrowRightLeft, WalletCards, BadgeCheck];

export default function TabScroller() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const sectionRef = useRef<HTMLElement | null>(null);
  const activeRef = useRef(0);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    let ticking = false;

    const updateActiveFromScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const nextIndex = Math.min(
        tabs.length - 1,
        Math.max(0, Math.round(progress * (tabs.length - 1)))
      );

      if (nextIndex !== activeRef.current) {
        setDirection(nextIndex > activeRef.current ? "down" : "up");
        activeRef.current = nextIndex;
        setActive(nextIndex);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveFromScroll();
        ticking = false;
      });
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTab = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const top = window.scrollY + section.getBoundingClientRect().top;
    const scrollable = section.offsetHeight - window.innerHeight;
    const target = top + (scrollable / (tabs.length - 1)) * index;

    setDirection(index > active ? "down" : "up");
    activeRef.current = index;
    setActive(index);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const variants: Variants = {
    enter: (dir: "up" | "down") => ({
      opacity: 0,
      y: dir === "down" ? 36 : -36,
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.42, ease: "easeOut" as const },
    },
    exit: (dir: "up" | "down") => ({
      opacity: 0,
      y: dir === "down" ? -28 : 28,
      transition: { duration: 0.25, ease: "easeIn" as const },
    }),
  };

  const activeTab = tabs[active];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-white dark:bg-[#050914]"
      style={{ height: `${tabs.length * 100}vh` }}
    >
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-hidden sm:top-16 sm:h-[calc(100vh-4rem)]">
        <div className="flex h-full w-full flex-col px-4 py-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="mb-3 text-center lg:mb-4">
            <h2 className="text-[clamp(1.2rem,2vw,1.875rem)] font-semibold leading-tight text-primary dark:text-white">
              Explore Our Core Features
            </h2>
            <p className="mt-1 text-[clamp(0.65rem,0.9vw,0.75rem)] font-bold uppercase tracking-[0.18em] text-accent">
              {activeTab.eyebrow}
            </p>
            <p className="mt-1 text-[clamp(0.78rem,1vw,0.9rem)] font-semibold text-secondary dark:text-slate-300">
              {activeTab.title}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Service tabs"
            className="mb-3 flex w-full gap-1 overflow-x-auto rounded-md border border-primary/15 bg-[#F8FAFF] p-1 shadow-sm dark:border-white/10 dark:bg-white/[0.06] md:hidden"
          >
            {tabs.map((tab, index) => {
              const Icon = tabIcons[index] ?? Files;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  onClick={() => scrollToTab(index)}
                  className={cn(
                    "inline-flex h-8 min-w-32 items-center justify-center gap-2 rounded px-3 text-xs font-semibold transition",
                    index === active
                      ? "bg-primary text-white shadow-sm"
                      : "text-secondary hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="grid min-h-0 flex-1 gap-4 md:grid-cols-[minmax(0,1fr)_clamp(170px,18vw,260px)] lg:gap-6">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeTab.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid min-h-0 grid-rows-3 gap-3 lg:gap-4"
              >
                {activeTab.cards.map((card) => (
                  <article
                    key={card.title}
                    className="grid min-h-0 overflow-hidden rounded-lg border border-primary/10 bg-[#F8FAFF] shadow-sm dark:border-white/10 dark:bg-[#30384E] sm:grid-cols-[minmax(170px,42%)_1fr]"
                  >
                    <div
                      className={cn(
                        "relative min-h-[90px] sm:min-h-0",
                        card.reverse ? "sm:order-2" : ""
                      )}
                    >
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        sizes="(min-width: 1024px) 38vw, (min-width: 640px) 42vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex min-h-0 flex-col justify-center p-[clamp(0.85rem,1.6vw,1.5rem)]">
                      <h3 className="text-[clamp(1rem,1.5vw,1.35rem)] font-semibold leading-tight text-primary dark:text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-[clamp(0.72rem,1vw,0.9rem)] leading-[1.55] text-secondary dark:text-slate-300">
                        {card.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>

            <div
              role="tablist"
              aria-label="Service tabs"
              className="hidden min-h-0 flex-col gap-2 rounded-lg border border-primary/15 bg-[#F8FAFF] p-2 shadow-sm dark:border-white/10 dark:bg-white/[0.06] md:flex"
            >
              {tabs.map((tab, index) => {
                const Icon = tabIcons[index] ?? Files;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={index === active}
                    onClick={() => scrollToTab(index)}
                    className={cn(
                      "flex min-h-0 flex-1 items-center gap-3 rounded-md p-[clamp(0.7rem,1.2vw,1rem)] text-left transition",
                      index === active
                        ? "bg-primary text-white shadow-sm"
                        : "text-secondary hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-md",
                        index === active
                          ? "bg-white/[0.14] text-accent"
                          : "bg-accent/10 text-accent"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[clamp(0.72rem,0.95vw,0.9rem)] font-semibold leading-tight">
                        {tab.label}
                      </span>
                      <span className="mt-1 block text-[clamp(0.62rem,0.8vw,0.75rem)] leading-snug opacity-75">
                        {tab.eyebrow}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
