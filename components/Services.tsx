// components/Services.tsx
"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card"; // ✅ shadcn/ui Card

type Service = {
  id: string;
  title: string;
  desc: string[];
};

const SERVICES: Service[] = [
  {
    id: "bank",
    title: "MSB-Bank Partnership Enablement",
    desc: [
      "Connect with regulated banks for settlement.",
      "Enable licensed IMTOs and exchanges.",
      "API-first wallet & payout integrations.",
    ],
  },
  {
    id: "wallet",
    title: "Wallet-as-a-Service",
    desc: [
      "Customizable wallets for remittances and assets.",
      "Bank-grade reconciliation & daily settlements.",
      "Scalable APIs with compliance-first design.",
    ],
  },
  {
    id: "compliance",
    title: "Compliance Infrastructure",
    desc: [
      "KYC/AML tools integrated with APIs.",
      "Transaction monitoring and reporting.",
      "Designed to meet SEC and CBN standards.",
    ],
  },
  {
    id: "integration",
    title: "Integration APIs",
    desc: [
      "Webhook-driven wallet transactions.",
      "Attach KYC data at transaction level.",
      "Audit-ready exports and reporting.",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-[#0F0C10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ✅ Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl lg:text-3xl font-bold text-primary mb-12"
        >
          Our Services
        </motion.h2>

        {/* ✅ Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full border border-neutral/30 bg-white/80 dark:bg-secondary/40 dark:border-neutral/50 shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-secondary dark:text-neutral">
                    {service.desc.map((point, idx) => (
                      <li key={idx} className="leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
