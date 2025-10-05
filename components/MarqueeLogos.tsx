//components\MarqueeLogos.tsx
"use client";

import Image from "next/image";

type Partner = { id: string; alt: string; src: string };

const PARTNERS: Partner[] = [
  { id: "p1", alt: "Partner 1", src: "/logos/logo1.png" },
  { id: "p2", alt: "Partner 2", src: "/logos/logo2.png" },
  { id: "p3", alt: "Partner 3", src: "/logos/logo3.png" },
  { id: "p4", alt: "Partner 4", src: "/logos/logo1.png" },
  { id: "p5", alt: "Partner 5", src: "/logos/logo2.png" },
  { id: "p6", alt: "Partner 6", src: "/logos/logo3.png" },
  // { id: "p5", alt: "Partner 5", src: "/logos/logo1.png" },
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
                className="inline-flex items-center justify-center w-[220px] h-[50px] "
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={200}
                  height={50}
                  className="h-20 md:h-24 object-contain opacity-90 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
