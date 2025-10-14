// components/MarqueeLogos.tsx
"use client";

import Image from "next/image";

type Partner = { id: string; alt: string; src: string };

const PARTNERS: Partner[] = [
  { id: "p1", alt: "Partner 1", src: "/logos/logo1.png" },
  { id: "p2", alt: "Partner 2", src: "/logos/logo2.png" },
  { id: "p3", alt: "Partner 3", src: "/logos/logo3.png" },
  { id: "p4", alt: "Partner 4", src: "/logos/logo4.png" },
  { id: "p5", alt: "Partner 5", src: "/logos/logo2.png" },
];

export default function MarqueeLogos() {
  return (
    <section id="logos" className="my-8 bg-bg text-foreground z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="overflow-hidden relative">
          {/* Marquee strip */}
            <div className="marquee flex gap-8 whitespace-nowrap will-change-transform  ">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS,].map((p, i) => (
              <div
                key={`${p.id}-${i}`}
                className="flex-none relative inline-flex items-center justify-center w-[200px] h-[110px] md:w-[220px] md:h-[140px] "
              >
                {/* Use Image fill so the image always follows the container size */}
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-contain p-4 opacity-95 hover:opacity-100 transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
