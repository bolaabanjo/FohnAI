"use client"

import Image from "next/image";
import { ThemeSwitcher } from "@/components/theme";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine which logo to show based on resolved theme
  const currentTheme = mounted ? resolvedTheme : 'light';

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col justify-between pt-48 pb-8 px-8 bg-white dark:bg-black">
        <div className="flex flex-col gap-8 max-w-3xl">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-md leading-relaxed text-zinc-700 dark:text-zinc-300">
              FohnAI is an AI R&D company on a mission to protect the future of intelligence, both natural and artificial. We build infrastructure that protects the systems, data, and people that rely on artificial intelligence as a core layer the world depends on. We operate at the intersection of AI safety, system reliability, and developer experience.
            </p>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 mt-6">
              Checkout {" "}
              <a
                href="https://cencori.com"
                className="font-medium text-zinc-950 dark:text-zinc-50 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cencori.
              </a></p>
          </div>
        </div>

        <footer className="flex flex-col items-center gap-4 mt-12">
          <ThemeSwitcher />
          {mounted && (
            <Image
              src={currentTheme === 'dark' ? '/cdark.PNG' : '/clight.PNG'}
              alt="FohnAI Logo"
              width={20}
              height={20}
              priority
            />
          )}
        </footer>
      </main>
    </div>
  );
}
