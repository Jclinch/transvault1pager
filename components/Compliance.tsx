// components/Compliance.tsx
"use client";

import type { ComponentType, SVGProps } from "react";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Lock, Scale, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type ComplianceTab = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const TABS: ComplianceTab[] = [
  {
    id: "settlement",
    title: "Settlement & Pool Accounts",
    subtitle: "Designated bank settlement accounts",
    desc: "All customer obligations are matched by funds held in designated settlement accounts with regulated banks, supporting segregation, reconciliation, and auditability.",
    img: "/compliance/settlement.webp",
    Icon: ShieldCheck,
  },
  {
    id: "recon",
    title: "Reconciliation & Audit Trails",
    subtitle: "Daily operational controls",
    desc: "Automated reconciliation joins partner instructions, wallet movements, bank confirmations, and exception handling into regulator-ready records.",
    img: "/compliance/Reconciliations.jpg",
    Icon: FileText,
  },
  {
    id: "aml",
    title: "KYC / AML & Reporting",
    subtitle: "Customer and transaction checks",
    desc: "KYC onboarding, risk screening, retained evidence, and reporting exports keep transaction context available for CBN, SEC, and partner review.",
    img: "/compliance/kyc.jpg",
    Icon: Scale,
  },
  {
    id: "privacy",
    title: "Data Protection & Custody",
    subtitle: "Access control and segregation",
    desc: "Role-based access, encryption practices, and segregated asset workflows support secure operations for regulated partner integrations.",
    img: "/compliance/data.jpg",
    Icon: Lock,
  },
];

export default function Compliance() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<"left" | "right">("right");
  const activeTab = TABS[active];
  const ActiveIcon = activeTab.Icon;

  const onTabClick = (index: number) => {
    setDir(index > active ? "right" : "left");
    setActive(index);
  };

  return (
    <section
      id="compliance"
      className="bg-[#DDEAFF] py-16 dark:bg-[#30384E] sm:py-20"
    >
      <div className="w-full px-5 sm:px-6 lg:px-10 xl:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
          Compliance
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-primary dark:text-white sm:text-xl">
          Regulation & Controls
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-secondary dark:text-slate-200">
          Transvault operates within CBN and SEC regulatory frameworks by
          partnering with licensed IMTOs and regulated banks, implementing
          robust KYC, AML, reconciliation and custody controls.
        </p>

        <div
          role="tablist"
          aria-label="Compliance tabs"
          className="mt-8 flex gap-6 overflow-x-auto border-b border-primary/20 pb-2 dark:border-white/15"
        >
          {TABS.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              onClick={() => onTabClick(index)}
              className={cn(
                "relative min-w-fit pb-3 text-xs font-semibold transition sm:text-sm",
                index === active
                  ? "text-primary dark:text-white"
                  : "text-secondary hover:text-primary dark:text-slate-300 dark:hover:text-white"
              )}
            >
              {tab.title}
              {index === active && (
                <motion.span
                  layoutId="compliance-underline"
                  className="absolute inset-x-0 -bottom-[9px] h-0.5 rounded-full bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-7 overflow-hidden rounded-lg border border-primary/10 bg-white/[0.35] shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
          <div className="relative h-[330px] sm:h-[400px] lg:h-[430px]">
            <AnimatePresence initial={false} custom={dir} mode="wait">
              <motion.div
                key={activeTab.id}
                custom={dir}
                initial={{ opacity: 0, x: dir === "right" ? 32 : -32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir === "right" ? -32 : 32 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeTab.img}
                  alt={activeTab.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#DDEAFF]/90 via-[#DDEAFF]/45 to-transparent dark:from-[#06101E]/88 dark:via-[#06101E]/45" />

                <div className="absolute inset-x-4 bottom-4 sm:inset-auto sm:bottom-8 sm:left-8 sm:w-[460px]">
                  <div className="rounded-md border border-white/40 bg-white/[0.86] p-5 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#071224]/90">
                    <div className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent/10 text-accent">
                        <ActiveIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-primary dark:text-white">
                          {activeTab.title}
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-secondary dark:text-slate-300">
                          {activeTab.subtitle}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-secondary dark:text-slate-200">
                          {activeTab.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-secondary dark:text-slate-300">
          Transvault is a technology and payment execution partner. Customer
          funds are maintained in designated settlement accounts with regulated
          banks.
        </p>
      </div>
    </section>
  );
}
