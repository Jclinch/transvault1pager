//components\About.tsx
"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-bg py-16 lg:py-24 text-foreground"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Panel: Mission */}
        <div className="space-y-6">
          <p className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-accent/20 text-accent">
            About Us
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Mission and Proposition
          </h2>

          <ul className="space-y-4 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              <span>
                <strong>Short history:</strong> part of a global partnership
                including licensed MSB in the US, IMTO partners and Nigerian
                regulated banks and exchanges.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              <span>
                <strong>What we do:</strong> build/regulate wallets, execute
                pay-outs, manage settlement accounts and regulatory reporting.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">•</span>
              <span>
                <strong>How we operate:</strong> only in partnership with
                regulated IMTOs, banks, and SEC-registered digital asset firms
                in Nigeria; do not take deposits like commercial banks; maintain
                client funds in designated pool/settlement accounts.
              </span>
            </li>
          </ul>

          <p className="text-sm text-neutral mt-6">
            <strong>Team:</strong> leadership, ops, and regulatory contact, plus
            a compliance officer contact for regulatory enquiries.
          </p>
        </div>

        {/* Right Panel: Image reference */}
        <div className="relative">
          <div className="bg-primary/10 border-4 border-primary rounded-lg overflow-hidden">
            <Image
              src="/card/team.jpg" // replace with your team image
              alt="Our Team"
              width={600}
              height={400}
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition"
            />
            <div className="absolute top-4 left-4 bg-primary px-4 py-2 text-white font-semibold text-sm rounded shadow">
              {/* ₹30L in benefits with Transvault Startup Perks */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
