

//components/FeatureOptions.tsx
// "use client";

// import { ReactNode, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Wallet, Banknote, PiggyBank, ShieldCheck } from "lucide-react";

// type Option = {
//   id: string;
//   label: string;
//   description: string;
//   icon: ReactNode;
// };

// const options: Option[] = [
//   {
//     id: "wallets",
//     label: "Compliant Wallets for Licensed Entities",
//     description:
//       "Wallet issuer & lifecycle management that integrates with IMTOs and SEC-regulated exchanges.",
//     icon: <Wallet size={18} />,
//   },
//   {
//     id: "payouts",
//     label: "Payout Agent Services",
//     description:
//       "Naira payouts via Nigerian bank rails (settlement, reconciliation, pay-out notification).",
//     icon: <Banknote size={18} />,
//   },
//   {
//     id: "settlement",
//     label: "Settlement & Pool Account Management",
//     description:
//       "Daily reconciliation, segregated settlement accounts, audit trails.",
//     icon: <PiggyBank size={18} />,
//   },
//   {
//     id: "compliance",
//     label: "AML, KYC & Reporting",
//     description: "Built to meet CBN/NFIU & SEC requirements.",
//     icon: <ShieldCheck size={18} />,
//   },
// ];

// export default function FeatureOptions() {
//   const [hovered, setHovered] = useState<string | null>(null);

//   return (
//     <section className="mt-[-80px]">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 relative z-0 border-violet-900">
//         <div className="flex flex-col gap-3 rounded-2xl bg-transparent shadow-sm px-4 py-3 relative">
//           {/* Options Row */}
//           <div className="flex gap-3 overflow-x-auto scrollbar-hide relative z-10">
//             {options.map((opt) => (
//               <div
//                 key={opt.id}
//                 className="relative flex-shrink-0"
//                 onMouseEnter={() => setHovered(opt.id)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 <button
//                   className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100 transition whitespace-nowrap z-30"
//                 >
//                   {opt.icon}
//                   {opt.label}
//                 </button>

//                 {/* Tooltip */}
//                 <AnimatePresence>
//                   {hovered === opt.id && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 6 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 6 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 rounded-md bg-gray-900 text-white text-xs p-3 shadow-xl z-50"
//                     >
//                       {opt.description}
//                       {/* Small arrow */}
//                       <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


//--------------

// components/FeatureOptions.tsx
"use client";

import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // ✅ shadcn/ui tooltip
import { cn } from "@/lib/utils"; // ✅ shadcn/ui helper for classnames

type Feature = {
  id: string;
  label: string;
  description: string;
  active?: boolean;
};

const FEATURES: Feature[] = [
  {
    id: "wallets",
    label: "Wallets",
    description: "Secure wallets for remittances and asset storage",
    active: true,
  },
  {
    id: "settlements",
    label: "Settlements",
    description: "Daily reconciled bank-grade settlements",
  },
  {
    id: "compliance",
    label: "Compliance",
    description: "KYC, AML, and regulatory-first design",
  },
  {
    id: "integration",
    label: "Integration",
    description: "API-first wallet integration with exchanges and IMTOs",
  },
];

export default function FeatureOptions() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-[#1A141B] dark:to-[#0F0C10]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl lg:text-3xl font-bold text-primary mb-10"
        >
          Explore Our Core Features
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          <TooltipProvider>
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      className={cn(
                        "px-5 py-2 rounded-full border text-sm font-medium shadow-sm transition-colors",
                        feature.active
                          ? "bg-primary text-white border-primary hover:bg-accent"
                          : "bg-white dark:bg-secondary/40 border-neutral text-secondary dark:text-neutral hover:bg-accent hover:text-white"
                      )}
                    >
                      {feature.label}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs text-center">
                    {feature.description}
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
