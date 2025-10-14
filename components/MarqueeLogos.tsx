// components/MarqueeLogos.tsx
"use client";

import Image from "next/image";

type Partner = { id: string; alt: string; src: string };

const PARTNERS: Partner[] = [
  { id: "p1", alt: "Partner 1", src: "/logos/logo1.png" },
  { id: "p2", alt: "Partner 2", src: "/logos/logo2.png" },
  { id: "p3", alt: "Partner 3", src: "/logos/logo3.png" },
  { id: "p4", alt: "Partner 4", src: "/logos/logo4.png" },
  { id: "p6", alt: "Partner 6", src: "/logos/logo2.png" },
];

export default function MarqueeLogos() {
  return (
    <section id="logos" className="my-8 bg-bg text-foreground z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="overflow-hidden relative">
          {/* Marquee strip */}
          <div className="marquee flex gap-16 whitespace-nowrap will-change-transform">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div
                key={`${p.id}-${i}`}
                className="inline-flex items-center justify-center w-[280px] h-[100px] " // increased container height and width
              >
                {/* ✅ Increased image size and removed fixed Tailwind height restriction */}
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={200} // increased width
                  height={100} // increased height
                  className="object-contain opacity-90 hover:opacity-100 transition-transform duration-300 hover:scale-105" // added smooth zoom effect
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
