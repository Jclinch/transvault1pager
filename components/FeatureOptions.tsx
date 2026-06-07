// components/FeatureOptions.tsx
"use client";

import type { ComponentType, SVGProps } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightLeft,
  Banknote,
  FileCheck2,
  PlugZap,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCard = {
  title: string;
  desc: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

type FeatureTab = {
  id: string;
  label: string;
  cards: FeatureCard[];
};

const FEATURE_TABS: FeatureTab[] = [
  {
    id: "wallets",
    label: "Wallets",
    cards: [
      {
        title: "Multi-Currency Wallets",
        desc: "Build and regulate wallets for remittance, treasury, and asset flows with KYC-linked ownership records.",
        Icon: WalletCards,
      },
      {
        title: "Real-Time Ledgers",
        desc: "Record balance movement, holds, reversals, fees, and partner references through auditable ledger events.",
        Icon: ArrowRightLeft,
      },
    ],
  },
  {
    id: "settlements",
    label: "Settlements",
    cards: [
      {
        title: "Designated Pool Accounts",
        desc: "Map customer obligations to settlement accounts held with regulated banking partners.",
        Icon: Banknote,
      },
      {
        title: "Daily Reconciliation",
        desc: "Match payout instructions, wallet movements, and bank confirmations before operational close.",
        Icon: FileCheck2,
      },
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    cards: [
      {
        title: "KYC and AML Controls",
        desc: "Attach customer profiles, partner references, risk status, and review outcomes to every transaction.",
        Icon: ShieldCheck,
      },
      {
        title: "Regulator-Ready Reports",
        desc: "Prepare CBN, SEC, and internal audit exports from retained transaction evidence.",
        Icon: FileCheck2,
      },
    ],
  },
  {
    id: "integration",
    label: "Integration",
    cards: [
      {
        title: "Wallet and Payout APIs",
        desc: "Create wallets, submit payout instructions, check statuses, and receive operational events.",
        Icon: PlugZap,
      },
      {
        title: "Partner Webhooks",
        desc: "Notify IMTOs, exchanges, and banks when funds are received, settled, failed, or flagged.",
        Icon: ArrowRightLeft,
      },
    ],
  },
];

export default function FeatureOptions() {
  const [active, setActive] = useState(0);
  const activeTab = FEATURE_TABS[active];

  return (
    <section
      id="features"
      className="bg-[#F8FAFF] py-14 dark:bg-[#050914] sm:py-16"
    >
      <div className="w-full px-5 sm:px-6 lg:px-10 xl:px-12">
        <div
          role="tablist"
          aria-label="Feature tabs"
          className="mx-auto mb-8 flex w-fit max-w-full gap-1 overflow-x-auto rounded-md border border-primary/15 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
        >
          {FEATURE_TABS.map((feature, i) => (
            <button
              key={feature.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "h-8 min-w-24 rounded px-4 text-xs font-semibold transition sm:min-w-28",
                i === active
                  ? "bg-primary text-white shadow-sm"
                  : "text-secondary hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              )}
            >
              {feature.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="grid gap-5 md:grid-cols-2"
          >
            {activeTab.cards.map(({ title, desc, Icon }, index) => (
              <article
                key={title}
                className={cn(
                  "min-h-[132px] rounded-lg border border-primary/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#30384E]",
                  index === 0 ? "md:min-h-[146px]" : ""
                )}
              >
                <span className="mb-4 grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold text-primary dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-secondary dark:text-slate-300">
                  {desc}
                </p>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
