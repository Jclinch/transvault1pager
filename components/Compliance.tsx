// components/Compliance.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { ShieldCheck, FileText, Scale, Lock } from "lucide-react";

type Tab = {
  id: string;
  title: string;
  subtitle?: string;
  desc: string;
  img: string; // path to image
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const TABS: Tab[] = [
  {
    id: "settlement",
    title: "Settlement & Pool Accounts",
    subtitle: "Designated bank settlement accounts",
    desc:
      "All customer balances are matched by funds held in designated settlement accounts with regulated banks, ensuring segregation and auditability.",
    img: "/compliance/settlement.webp",
    Icon: ShieldCheck,
  },
  {
    id: "recon",
    title: "Reconciliation & Audit Trails",
    subtitle: "Daily reconciliation",
    desc:
      "Automated daily reconciliation with immutable audit logs and regulator-ready reporting; data retained per regulator requirements.",
    img: "/compliance/Reconciliations.jpg",
    Icon: FileText,
  },
  {
    id: "aml",
    title: "KYC / AML & Reporting",
    subtitle: "Know-your-customer checks",
    desc:
      "KYC onboarding (BVN where applicable), risk screening and SAR reporting to NFIU. Compliance exports available for CBN/SEC review.",
    img: "/compliance/kyc.jpg",
    Icon: Scale,
  },
  {
    id: "privacy",
    title: "Data Protection & Custody",
    subtitle: "Encryption & segregation",
    desc:
      "Bank-grade encryption, role-based access and segregation of client assets for SEC-registered integrations.",
    img: "/compliance/data.jpg",
    Icon: Lock,
  },
];

export default function Compliance() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<"left" | "right">("right");

  const onTabClick = (index: number) => {
    setDir(index > active ? "right" : "left");
    setActive(index);
  };

  // motion variants for image/text panel
  const panelVariants = {
    enter: (d: "left" | "right") => ({
      opacity: 0,
      x: d === "right" ? 40 : -40,
      scale: 0.98,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.55, ease: easeInOut },
    },
    exit: (d: "left" | "right") => ({
      opacity: 0,
      x: d === "right" ? -40 : 40,
      scale: 0.98,
      transition: { duration: 0.45, ease: easeInOut },
    }),
  };

  const ActiveIcon = TABS[active].Icon ?? ShieldCheck;

  return (
    <section id="compliance" className="bg-bg py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <p className="text-sm font-semibold text-accent mb-2">Compliance</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Regulation & Controls
        </h2>
        <p className="text-secondary max-w-3xl mb-8">
          Transvault operates within the CBN and SEC regulatory frameworks by
          partnering with licensed IMTOs and regulated banks, implementing robust
          KYC, AML, reconciliation and custody controls.
        </p>

        {/* Tabs */}
        <div className="mb-6 border-b border-neutral">
          <div
            role="tablist"
            aria-label="Compliance tabs"
            className="flex gap-8 overflow-x-auto pb-2"
          >
            {TABS.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === active}
                onClick={() => onTabClick(i)}
                className={`relative pb-3 text-sm font-semibold transition ${
                  i === active
                    ? "text-primary"
                    : "text-neutral hover:text-primary"
                }`}
              >
                {t.title}
                {i === active && (
                  <motion.span
                    layoutId="compliance-underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-accent rounded"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Image area + overlay text box */}
        <div className="rounded-lg overflow-hidden border border-primary/20 shadow-sm">
          <div className="relative h-[420px] md:h-[480px]">
            <AnimatePresence initial={false} custom={dir}>
              <motion.div
                key={TABS[active].id}
                custom={dir}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                {/* Background image */}
                <div className="relative w-full h-full">
                  <Image
                    src={TABS[active].img}
                    alt={TABS[active].title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-bg/10 to-transparent pointer-events-none" />
                </div>

                {/* left-side overlay text box */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <motion.div
                    key={`text-${TABS[active].id}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.45 }}
                    className="max-w-[560px] w-full bg-white/95 backdrop-blur-sm p-6 m-6 rounded-md shadow-lg border border-primary/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-md bg-accent/10 text-accent shrink-0">
                        <ActiveIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">
                          {TABS[active].title}
                        </h3>
                        {TABS[active].subtitle && (
                          <p className="text-sm text-secondary mt-1">
                            {TABS[active].subtitle}
                          </p>
                        )}
                        <p className="text-sm text-foreground mt-3">
                          {TABS[active].desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* bottom disclaimer */}
        <p className="text-xs text-neutral mt-6">
          Transvault is a technology & payment execution partner. Customer funds
          are maintained in designated settlement accounts with regulated banks.
        </p>
      </div>
    </section>
  );
}
