//components\TopNav.tsx
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Moon, Sun } from "lucide-react";
// import Image from "next/image";

// export default function TopNav() {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     const stored = localStorage.getItem("theme");
//     if (stored === "dark") {
//       setTheme("dark");
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");
//       localStorage.setItem("theme", "dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       setTheme("light");
//       localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   return (
//     <nav className="bg-bg dark:bg-dark  mt-[-15px]">
//       <div className="max-w-7xl mx-auto  lg:px-8 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold text-primary dark:text-accent">
//           <Image
//             src="/logos/logo.png"
//             alt="Transvault Logo"
//             width={80}
//             height={40}
//           />
//         </Link>

//         {/* Navigation links */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link
//             href="/services"
//             className="text-secondary hover:text-primary dark:text-neutral dark:hover:text-bright transition"
//           >
//             Services
//           </Link>
//           <Link
//             href="/resources"
//             className="text-secondary hover:text-primary dark:text-neutral dark:hover:text-bright transition"
//           >
//             Resources
//           </Link>
//           <Link
//             href="/contact"
//             className="text-secondary hover:text-primary dark:text-neutral dark:hover:text-bright transition"
//           >
//             Contact
//           </Link>
//         </div>

//         {/* Actions: CTA + Dark mode toggle */}
//         <div className="flex items-center gap-3">
//           <Link
//             href="/get-started"
//             className="hidden md:inline-flex items-center rounded-md px-3 py-[5px] mt-[10px] text-sm font-semibold text-white bg-primary hover:bg-accent transition dark:bg-accent dark:text-dark dark:hover:bg-bright"
//           >
//             Get Started
//           </Link>
//           <button
//             onClick={toggleTheme}
//             aria-label="Toggle dark mode"
//             className="p-[5px] rounded-full mt-[10px] border border-neutral bg-white text-primary hover:bg-accent hover:text-white transition dark:bg-secondary dark:text-white dark:hover:bg-primary"
//           >
//             {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// ---------
// components/TopNav.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button"; // ✅ Added shadcn/ui Button
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"; // ✅ Added shadcn/ui NavigationMenu

export default function TopNav() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav
      className="
        sticky top-0 z-50 
        bg-white/70 dark:bg-[#1A141B]/70 
        backdrop-blur-md shadow-sm 
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* ✅ Logo */}
        <Link
          href="/"
          className="flex items-center text-xl font-bold text-primary dark:text-accent"
        >
          <Image
            src="/logos/transvault.png"
            alt="Transvault Logo"
            width={90}
            height={45}
            priority
          />
        </Link>

        {/* ✅ Navigation Menu */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <Link href="/#services" passHref>
                <NavigationMenuLink className="text-secondary hover:text-primary dark:text-neutral dark:hover:text-bright transition-colors">
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#features" passHref>
                <NavigationMenuLink className="text-secondary hover:text-primary dark:text-neutral dark:hover:text-bright transition-colors">
                  Features
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#partners" passHref>
                <NavigationMenuLink className="text-secondary hover:text-primary dark:text-neutral dark:hover:text-bright transition-colors">
                  Partners
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#contact" passHref>
                <NavigationMenuLink className="text-secondary hover:text-primary dark:text-neutral dark:hover:text-bright transition-colors">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* ✅ Actions: CTA + Dark mode toggle */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="default"
            className="hidden md:inline-flex bg-primary hover:bg-accent text-white font-semibold shadow-lg"
          >
            <Link href="/#contact" passHref>
              Get Started
            </Link>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="border border-neutral bg-white/60 dark:bg-secondary/50 dark:text-white hover:bg-accent hover:text-white transition"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
