// components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Send, ShieldCheck } from "lucide-react";

const CONTACTS = [
  {
    label: "Sales and demo",
    email: "sales@transvault.xyz",
    desc: "Discuss wallet, payout, and partner integration needs.",
    Icon: Send,
  },
  {
    label: "Partnerships",
    email: "partnerships@transvault.xyz",
    desc: "Connect as an IMTO, bank, MSB, or regulated exchange partner.",
    Icon: ShieldCheck,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F3F6FC] py-16 dark:bg-[#30384E]">
      <div className="w-full px-5 sm:px-6 lg:px-10 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Contact Us
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-primary dark:text-white sm:text-xl">
            Speak with Transvault
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-secondary dark:text-slate-300">
            Get in touch to discuss regulated wallet infrastructure, payout
            execution, settlement controls, or partner onboarding.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {CONTACTS.map(({ label, email, desc, Icon }) => (
            <motion.a
              key={email}
              href={`mailto:${email}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group rounded-lg border border-primary/10 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#071224]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-primary dark:text-white">
                {label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary dark:text-slate-300">
                {desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary dark:text-accent">
                <Mail className="h-4 w-4" />
                {email}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
