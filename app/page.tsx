import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col py-48 px-8 bg-white dark:bg-black">
        <div className="flex flex-col gap-8 max-w-3xl">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              FohnAI is an AI R&D company on a mission to protect the future of intelligence, both natural and artificial. We build infrastructure that protects the systems, data, and people that rely on artificial intelligence as a core layer the world depends on. We operate at the intersection of AI safety, system reliability, and developer experience.
            </p>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 mt-6">
              Checkout our product,{" "}
              <a
                href="https://cencori.vercel.app"
                className="font-medium text-zinc-950 dark:text-zinc-50 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cencori.
              </a></p>
          </div>
        </div>
      </main>
    </div>
  );
}
