// components/Resources.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card"; // ✅ shadcn/ui Card

type Resource = {
  id: string;
  title: string;
  description: string;
  link: string;
};

const RESOURCES: Resource[] = [
  {
    id: "guide-1",
    title: "Regulatory Compliance Guide",
    description:
      "Understand how Transvault aligns with financial regulations, KYC, and AML standards.",
    link: "/resources/compliance-guide",
  },
  {
    id: "guide-2",
    title: "API Integration Docs",
    description:
      "Learn how to integrate wallets, settlements, and payouts into your apps with our APIs.",
    link: "/resources/api-docs",
  },
  {
    id: "guide-3",
    title: "Case Study: IMTOs",
    description:
      "See how licensed IMTOs scale remittance flows with Transvault infrastructure.",
    link: "/resources/case-study-imtos",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-gray-50 dark:bg-[#0F0C10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ✅ Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl lg:text-3xl font-bold text-primary mb-12"
        >
          Resources & Insights
        </motion.h2>

        {/* ✅ Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESOURCES.map((resource, i) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full border border-neutral/30 bg-white/80 dark:bg-secondary/40 dark:border-neutral/50 shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-primary">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-secondary dark:text-neutral mt-2">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={resource.link}
                    className="inline-block text-sm font-medium text-primary hover:underline"
                  >
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
