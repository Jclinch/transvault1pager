// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"; // ✅ shadcn/ui separator

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#0F0C10] border-t border-neutral/20 dark:border-neutral/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 py-12"
      >
        {/* ✅ Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-3">Transvault</h3>
            <p className="text-sm text-secondary dark:text-neutral leading-relaxed">
              Secure, compliant, and scalable wallet infrastructure for
              remittance and assets.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#hero"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#partners"
                  className="hover:text-primary transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-6" /> {/* ✅ Clean divider */}

        {/* ✅ Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary dark:text-neutral">
          <p>© {new Date().getFullYear()} Transvault. All rights reserved.</p>
          <p>
            Built by <span className="text-primary">Jclinch Multimedia</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
