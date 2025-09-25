// components/Partners.tsx
"use client";

// import Image from "next/image";

type Partner = {
    id: string;
    logo: string;
    role: string;
};

const PARTNERS: Partner[] = [
    {
        id: "partner1",
        logo: "/logos/bank1.png",
        role: "Settlement Bank",
    },
    {
        id: "partner2",
        logo: "/logos/imto.png",
        role: "International Money Transfer Operator (IMTO)",
    },
    {
        id: "partner3",
        logo: "/logos/crypto.png",
        role: "Crypto Exchange (SEC-registered)",
    },
    {
        id: "partner4",
        logo: "/logos/msb.png",
        role: "US Money Services Business (MSB)",
    },
];

export default function Partners() {
    return (
        <section className="bg-bg py-20 border-t border-neutral">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header & Intro (left aligned) */}
                <p className="text-sm font-semibold text-accent mb-2">Partners</p>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Trusted Partnerships
                </h2>
                <p className="text-secondary max-w-3xl mb-12">
                    Transvault partners with licensed IMTOs, Nigerian commercial banks, an
                    MSB in the USA and SEC-registered digital asset firms.
                </p>

                {/* Partner Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-stretch mb-12">
                    {PARTNERS.map((p) => (
                        <div
                            key={p.id}
                            className="bg-neutral border border-primary/20 rounded-lg shadow-sm hover:shadow-md transition p-6 flex flex-col items-center justify-center min-h-[180px] h-full"
                        >
                            {/* Replace logos with icons */}
                            {p.id === "partner1" && (
                                <span className="mb-4 text-5xl text-primary">
                                    {/* Bank icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" width={48} height={48}>
                                        <path stroke="currentColor" strokeWidth="3.5" d="M8 20v16m8-16v16m8-16v16m8-16v16M4 20l20-12 20 12M4 20h40M8 36h32" />
                                    </svg>
                                </span>
                            )}
                            {p.id === "partner2" && (
                                <span className="mb-4 text-5xl text-primary">
                                    {/* IMTO icon (globe) */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" width={48} height={48}>
                                        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3.5" />
                                        <ellipse cx="24" cy="24" rx="10" ry="20" stroke="currentColor" strokeWidth="3.5" />
                                        <line x1="4" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="3.5" />
                                    </svg>
                                </span>
                            )}
                            {p.id === "partner3" && (
                                <span className="mb-4 text-5xl text-primary">
                                    {/* Crypto icon (currency) */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" width={48} height={48}>
                                        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3.5" />
                                        <path d="M24 14v20M18 18h12M18 30h12" stroke="currentColor" strokeWidth="3.5" />
                                    </svg>
                                </span>
                            )}
                            {p.id === "partner4" && (
                                <span className="mb-4 text-5xl text-primary">
                                    {/* MSB icon (building) */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" width={48} height={48}>
                                        <rect x="10" y="18" width="28" height="20" stroke="currentColor" strokeWidth="3.5" />
                                        <rect x="18" y="26" width="4" height="6" stroke="currentColor" strokeWidth="3.5" />
                                        <rect x="26" y="26" width="4" height="6" stroke="currentColor" strokeWidth="3.5" />
                                        <path d="M10 18l14-10 14 10" stroke="currentColor" strokeWidth="3.5" />
                                    </svg>
                                </span>
                            )}
                            <p className="text-sm text-foreground text-center font-black min-h-[48px] flex items-center justify-center">
                                {p.role}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA (centered) */}
                <div className="text-center">
                    <a
                        href="mailto:partnerships@transvault.xyz"
                        className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-md shadow hover:shadow-lg transition"
                    >
                        Become a partner — contact partnerships@transvault.xyz
                    </a>
                </div>
            </div>
        </section>
    );
}
