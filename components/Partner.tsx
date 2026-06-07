// components/Partner.tsx
"use client";

import { Building2, CircleDollarSign, Globe2, Landmark } from "lucide-react";

const PARTNERS = [
  {
    role: "Settlement Bank",
    detail: "Designated accounts and payout rails",
    Icon: Landmark,
  },
  {
    role: "International Money Transfer Operator",
    detail: "Inbound remittance instructions",
    Icon: Globe2,
  },
  {
    role: "Crypto Exchange",
    detail: "SEC-registered digital asset flows",
    Icon: CircleDollarSign,
  },
  {
    role: "US Money Services Business",
    detail: "Cross-border partner structure",
    Icon: Building2,
  },
];

export default function Partners() {
  return (
    <section id="partners" className="bg-white py-16 dark:bg-[#050914]">
      <div className="w-full px-5 text-center sm:px-6 lg:px-10 xl:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
          Partners
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-primary dark:text-white sm:text-xl">
          Trusted Partnerships
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-secondary dark:text-slate-300">
          Transvault partners with licensed IMTOs, Nigerian commercial banks,
          an MSB in the USA, and SEC-registered digital asset firms.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {PARTNERS.map(({ role, detail, Icon }) => (
            <article
              key={role}
              className="flex min-h-[168px] flex-col items-center justify-center rounded-lg border border-primary/10 bg-[#F8FAFF] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/[0.06]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-md bg-bright/15 text-primary dark:bg-bright/10 dark:text-bright">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.05em] text-primary dark:text-white">
                {role}
              </h3>
              <p className="mt-2 text-xs leading-5 text-secondary dark:text-slate-300">
                {detail}
              </p>
            </article>
          ))}
        </div>

        <a
          href="mailto:partnerships@transvault.xyz"
          className="mt-9 inline-flex min-h-10 items-center justify-center rounded-full bg-accent px-6 text-sm font-bold text-[#04110F] shadow-sm transition hover:translate-y-[-1px] hover:shadow-md"
        >
          Become a partner - partnerships@transvault.xyz
        </a>
      </div>
    </section>
  );
}
