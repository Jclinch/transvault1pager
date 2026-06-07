// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "Features", href: "/#features" },
  { label: "Services", href: "/#services" },
  { label: "Compliance", href: "/#compliance" },
  { label: "Partners", href: "/#partners" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-white py-10 dark:border-white/10 dark:bg-[#050914]">
      <div className="w-full px-5 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <Link href="/#hero" className="inline-flex items-center">
              <Image
                src="/logos/transvault.png"
                alt="Transvault"
                width={112}
                height={42}
                className="h-auto w-28"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-secondary dark:text-slate-300">
              Secure, compliant, and scalable wallet infrastructure for
              remittance, settlement, and regulated asset workflows.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-white">
              Navigation
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-secondary transition hover:text-primary dark:text-slate-300 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-white">
              Email
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="mailto:sales@transvault.xyz"
                className="block text-secondary transition hover:text-primary dark:text-slate-300 dark:hover:text-white"
              >
                sales@transvault.xyz
              </a>
              <a
                href="mailto:partnerships@transvault.xyz"
                className="block text-secondary transition hover:text-primary dark:text-slate-300 dark:hover:text-white"
              >
                partnerships@transvault.xyz
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-primary/10 pt-6 text-xs text-secondary dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Transvault. All rights reserved.</p>
          <p>Built by Jclinch Technologies Ltd</p>
        </div>
      </div>
    </footer>
  );
}
