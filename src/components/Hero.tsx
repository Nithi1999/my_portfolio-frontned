"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-30%] h-[600px] w-[600px] -translate-x-1/2 rounded-full " />
      </div>

      <div
        className="
          relative
          max-w-[1400px]
          mx-auto
          grid grid-cols-1
          md:grid-cols-[1.15fr_0.85fr]
          items-center
          gap-20
          px-6
        "
      >
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-foreground">
            Backend &{" "}
            <span
              className="
                bg-[length:200%_200%]
                bg-gradient-to-r
                from-indigo-400 via-violet-500 to-fuchsia-500
                bg-clip-text text-transparent
                animate-gradient
              "
            >
              AI Engineer
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl">
            I design, build, and deploy scalable AI systems using FastAPI,
            BERT, spaCy, LLMs, Docker, and Celery.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
            <Link
              href="/demos"
              className="
                btn-hero
                bg-primary text-primary
                hover:bg-primary-dark
                border border-border
                shadow-xl shadow-indigo-500/25
              "
            >
              Live AI Demos
            </Link>

            <Link
              href="/projects"
              className="
                btn-hero
                bg-primary text-primary
                hover:bg-primary-dark
                border border-border
                shadow-xl shadow-indigo-500/25
              "
            >
              View Projects
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 32 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              relative
              w-72 h-[460px]
              md:w-80 md:h-[520px]
              rounded-3xl
              overflow-hidden
              shadow-xl shadow-indigo-500/25
            "
          >
            {/* glass frame */}
            <div
              className="
                absolute inset-0
                rounded-3xl
                bg-background/40
                backdrop-blur-xl
                border border-border
                shadow-2xl shadow-indigo-500/30
              "
            />

            {/* glow ring */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />

            <Image
              src="/profile_photo.jpeg"
              alt="Nithin A — Backend & AI Engineer"
              fill
              priority
              className="object-cover rounded-3xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}