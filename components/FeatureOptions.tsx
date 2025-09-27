// components/FeatureOptions.tsx
"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

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
    <section
      id="features"
      className="py-10 bg-gradient-to-b from-white to-gray-50 dark:from-[#1A141B] dark:to-[#0F0C10] pt-[90px]"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl lg:text-3xl font-bold text-primary mb-8"
        >
          Explore Our Core Features
        </motion.h2>

        {/* ✅ Styled pill-like options */}
        <div className="flex flex-wrap justify-center gap-5 bg-white dark:bg-secondary/40 shadow-md rounded-xl px-4 py-3 border border-neutral/20">
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
                        "px-7 py-2 rounded-lg gap-5 border text-sm font-medium shadow-sm transition-colors",
                        feature.active
                          ? " text-secondary border-neutral hover:bg-accent hover:text-white"
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



//--------------

// // components/FeatureOptions.tsx
// "use client";

// import { motion } from "framer-motion";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // ✅ shadcn/ui tooltip
// import { cn } from "@/lib/utils"; // ✅ shadcn/ui helper for classnames

// type Feature = {
//   id: string;
//   label: string;
//   description: string;
//   active?: boolean;
// };

// const FEATURES: Feature[] = [
//   {
//     id: "wallets",
//     label: "Wallets",
//     description: "Secure wallets for remittances and asset storage",
//     active: true,
//   },
//   {
//     id: "settlements",
//     label: "Settlements",
//     description: "Daily reconciled bank-grade settlements",
//   },
//   {
//     id: "compliance",
//     label: "Compliance",
//     description: "KYC, AML, and regulatory-first design",
//   },
//   {
//     id: "integration",
//     label: "Integration",
//     description: "API-first wallet integration with exchanges and IMTOs",
//   },
// ];

// export default function FeatureOptions() {
//   return (
//     <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-[#1A141B] dark:to-[#0F0C10]">
//       <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-2xl lg:text-3xl font-bold text-primary mb-10"
//         >
//           Explore Our Core Features
//         </motion.h2>

//         <div className="flex flex-wrap justify-center gap-4">
//           <TooltipProvider>
//             {FEATURES.map((feature, i) => (
//               <motion.div
//                 key={feature.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * i }}
//               >
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <button
//                       className={cn(
//                         "px-5 py-2 rounded-full border text-sm font-medium shadow-sm transition-colors",
//                         // "flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100 transition whitespace-nowrap z-30",

//                         feature.active
//                           ? " text-secondary border-neutral hover:bg-accent hover:text-white"
//                           : "bg-white dark:bg-secondary/40 border-neutral text-secondary dark:text-neutral hover:bg-accent hover:text-white"
//                       )}
//                     >
//                       {feature.label}
//                     </button>
//                   </TooltipTrigger>
//                   <TooltipContent side="top" className="max-w-xs text-center">
//                     {feature.description}
//                   </TooltipContent>
//                 </Tooltip>
//               </motion.div>
//             ))}
//           </TooltipProvider>
//         </div>
//       </div>
//     </section>
//   );
// }
