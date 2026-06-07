//components\About.tsx
"use client";

import Image from "next/image";
import { Building2, Landmark, ShieldCheck } from "lucide-react";

const PROPOSITIONS = [
  {
    title: "Short history",
    desc: "Part of a global partnership including a licensed MSB in the US, IMTO partners, Nigerian regulated banks, and SEC-regulated exchanges.",
    Icon: Landmark,
  },
  {
    title: "What we do",
    desc: "Build regulated wallets, execute payouts, manage settlement accounts, and prepare regulatory reporting outputs.",
    Icon: Building2,
  },
  {
    title: "How we operate",
    desc: "Work only with regulated IMTOs, banks, and SEC-registered digital asset firms while maintaining client funds in designated pool and settlement accounts.",
    Icon: ShieldCheck,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-bg py-16 text-foreground lg:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="relative grid w-full items-center gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-10 xl:px-12">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-accent">
            About Us
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-primary lg:text-xl">
            Mission and Proposition
          </h2>

          <ul className="space-y-4">
            {PROPOSITIONS.map(({ title, desc, Icon }) => (
              <li
                key={title}
                className="flex gap-4 rounded-lg border border-primary/10 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm leading-6 text-secondary dark:text-slate-300">
                  <strong className="block text-primary dark:text-white">
                    {title}
                  </strong>
                  {desc}
                </span>
              </li>
            ))}
          </ul>

          <p className="max-w-xl text-sm leading-6 text-neutral">
            Team coverage includes leadership, operations, regulatory contacts,
            and a compliance officer for partner and supervisory enquiries.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-xl bg-gradient-to-br from-primary/25 via-accent/10 to-transparent blur-xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/20 bg-[#0A1020] shadow-2xl shadow-primary/20">
            <Image
              src="/card/team.jpg"
              alt="Transvault operations and compliance team"
              width={600}
              height={400}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover saturate-110 transition duration-500 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050914]/78 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-md border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Operational posture
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-100">
                Built around regulated partners, settlement discipline, and
                compliance evidence that can stand up to review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
